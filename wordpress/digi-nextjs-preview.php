<?php
/**
 * Plugin Name: Digi Era Pro – Next.js (headless) bridge
 * Description: Preview button → Next.js, post URLs → Next.js /blog/{slug}, and Yoast canonicals pointing at Next.js.
 *
 * Install: copy this file to wp-content/mu-plugins/ (create the folder if needed),
 * then add to wp-config.php (above "That's all, stop editing!"):
 *
 *   define( 'DIGI_NEXT_URL', 'https://your-nextjs-site.com' );   // no trailing slash
 *   define( 'DIGI_PREVIEW_SECRET', 'same value as WORDPRESS_PREVIEW_SECRET in Next.js' );
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

add_filter(
	'preview_post_link',
	function ( $link, $post ) {
		if ( 'post' !== $post->post_type || ! defined( 'DIGI_NEXT_URL' ) || ! defined( 'DIGI_PREVIEW_SECRET' ) ) {
			return $link;
		}
		return add_query_arg(
			array(
				'secret' => rawurlencode( DIGI_PREVIEW_SECRET ),
				'id'     => $post->ID,
			),
			untrailingslashit( DIGI_NEXT_URL ) . '/api/preview'
		);
	},
	10,
	2
);

/**
 * Front-end visits to a single post → 301 to https://<next-site>/blog/{slug}.
 * Leaves wp-admin, AJAX, REST API, cron, previews and the Customizer alone.
 * Only active once WordPress runs on its own host (e.g. cms.digierapro.com):
 * while WordPress still serves the main domain, redirecting there would loop.
 */
add_action(
	'template_redirect',
	function () {
		if ( ! defined( 'DIGI_NEXT_URL' ) || ! is_singular( 'post' ) ) {
			return;
		}
		if ( is_admin() || wp_doing_ajax() || wp_doing_cron() || is_preview() || is_customize_preview()
			|| ( defined( 'REST_REQUEST' ) && REST_REQUEST ) || isset( $_GET['preview'] ) ) {
			return;
		}
		$next_host = wp_parse_url( DIGI_NEXT_URL, PHP_URL_HOST );
		if ( ! $next_host || strtolower( $next_host ) === strtolower( (string) wp_parse_url( home_url(), PHP_URL_HOST ) ) ) {
			return; // same host as WordPress → would loop
		}
		$post = get_queried_object();
		if ( $post instanceof WP_Post && 'publish' === $post->post_status ) {
			wp_redirect( untrailingslashit( DIGI_NEXT_URL ) . '/blog/' . $post->post_name, 301, 'Digi Era Pro' );
			exit;
		}
	}
);

/** Yoast canonical (also returned by the REST API's yoast_head_json) → the Next.js URL. */
add_filter(
	'wpseo_canonical',
	function ( $canonical, $presentation = null ) {
		if ( ! defined( 'DIGI_NEXT_URL' ) ) {
			return $canonical;
		}
		// Yoast passes the object it is rendering — also in REST requests, where is_singular() is false.
		$model = is_object( $presentation ) && isset( $presentation->model ) ? $presentation->model : null;
		if ( $model && 'post' === $model->object_type && 'post' === $model->object_sub_type ) {
			$post_id = (int) $model->object_id;
		} elseif ( is_singular( 'post' ) ) {
			$post_id = get_queried_object_id();
		} else {
			return $canonical;
		}
		return untrailingslashit( DIGI_NEXT_URL ) . '/blog/' . get_post_field( 'post_name', $post_id );
	},
	10,
	2
);
