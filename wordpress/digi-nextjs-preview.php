<?php
/**
 * Plugin Name: Digi Era Pro – Next.js Preview
 * Description: Sends the "Preview" button for blog posts to the Next.js site, so drafts render in the new design.
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
