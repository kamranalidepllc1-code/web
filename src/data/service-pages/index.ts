import type { ServicePageContent } from '@/types/site'
import aiSolutions from './ai-solutions'
import appDevelopment from './app-development'
import brandingStrategy from './branding-strategy'
import citationBacklinks from './citation-backlinks'
import contentCreation from './content-creation'
import ecommerceDevelopment from './ecommerce-development'
import gameDevelopment from './game-development'
import gbpOptimization from './gbp-optimization'
import googleAds from './google-ads'
import graphicDesign from './graphic-design'
import landingPage from './landing-page'
import searchEngineOptimization from './search-engine-optimization'
import socialMediaMarketing from './social-media-marketing'
import softwareDevelopment from './software-development'
import webDevelopment from './web-development'
import websiteDesign from './website-design'

/** Every service page's content — rendered by /services/<slug> and indexed by the AI knowledge layer. */
export const SERVICE_PAGE_CONTENT: ServicePageContent[] = [
  aiSolutions,
  appDevelopment,
  brandingStrategy,
  citationBacklinks,
  contentCreation,
  ecommerceDevelopment,
  gameDevelopment,
  gbpOptimization,
  googleAds,
  graphicDesign,
  landingPage,
  searchEngineOptimization,
  socialMediaMarketing,
  softwareDevelopment,
  webDevelopment,
  websiteDesign,
]
