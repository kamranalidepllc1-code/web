'use client'

import { motion } from 'framer-motion'
import { Moon, Sun } from 'lucide-react'
import { THEME_STORAGE_KEY } from '@/lib/theme'

function toggleTheme() {
  const root = document.documentElement
  const next = root.dataset.theme === 'light' ? 'dark' : 'light'

  // Fade colors only while switching, so normal hover transitions are untouched.
  root.classList.add('theme-transition')
  if (next === 'light') root.dataset.theme = 'light'
  else delete root.dataset.theme
  window.setTimeout(() => root.classList.remove('theme-transition'), 400)

  try { localStorage.setItem(THEME_STORAGE_KEY, next) } catch {}
}

export function ThemeToggle({ size = 38 }: { size?: number }) {
  return (
    <motion.button type="button" onClick={toggleTheme}
      aria-label="Toggle light and dark theme" title="Toggle theme"
      style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: size, height: size, borderRadius: '50%', border: '1px solid rgba(var(--line-rgb), 0.18)', background: 'none', color: 'var(--fg)', cursor: 'pointer', padding: 0, flexShrink: 0 }}
      whileHover={{ borderColor: '#CE307D', color: '#CE307D' }}
      whileTap={{ scale: 0.92 }}
    >
      {/* Both icons render; CSS shows the one for the current theme (no hydration mismatch) */}
      <Sun className="theme-icon-sun" size={16} strokeWidth={1.8} aria-hidden="true" />
      <Moon className="theme-icon-moon" size={16} strokeWidth={1.8} aria-hidden="true" />
    </motion.button>
  )
}
