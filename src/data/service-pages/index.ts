import type { ServicePageContent } from '@/types/site'
import appDevelopment from './app-development'
import brandingStrategy from './branding-strategy'
import citationBacklinks from './citation-backlinks'
import contentCreation from './content-creation'
import gameDevelopment from './game-development'
import gbpOptimization from './gbp-optimization'
import googleAds from './google-ads'
import graphicDesign from './graphic-design'
import landingPage from './landing-page'
import searchEngineOptimization from './search-engine-optimization'
import socialMediaMarketing from './social-media-marketing'
import softwareDevelopment from './software-development'
import webDevelopment from './web-development'

/** Every service page's content — rendered by /services/<slug> and indexed by the AI knowledge layer. */
export const SERVICE_PAGE_CONTENT: ServicePageContent[] = [
  appDevelopment,
  brandingStrategy,
  citationBacklinks,
  contentCreation,
  gameDevelopment,
  gbpOptimization,
  googleAds,
  graphicDesign,
  landingPage,
  searchEngineOptimization,
  socialMediaMarketing,
  softwareDevelopment,
  webDevelopment,
]
