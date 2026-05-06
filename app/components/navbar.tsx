'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Gamepad2 } from 'lucide-react'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[hsl(222,47%,6%)]/90 backdrop-blur-xl border-b border-[hsl(160,84%,39%)]/10 shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <button
              onClick={() => handleNavClick('#hero')}
              className="flex items-center gap-2 group"
            >
              <Gamepad2 className="w-6 h-6 text-[#10B981] group-hover:scale-110 transition-transform" />
              <span className="font-display font-bold text-lg text-white">MAH</span>
            </button>

            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="px-4 py-2 text-sm font-medium text-[hsl(220,15%,55%)] hover:text-[#10B981] transition-colors rounded-lg hover:bg-[hsl(160,84%,39%)]/5"
                >
                  {link.label}
                </button>
              ))}
              <a
                href="https://abbas23hussain.github.io/assets/Resume/Muhammad_Abbas_Hussain_GameDev_Portfolio_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 px-4 py-2 text-sm font-semibold text-[hsl(222,47%,6%)] bg-[#10B981] rounded-lg hover:bg-[#059669] transition-colors"
              >
                Resume
              </a>
            </div>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 text-white hover:text-[#10B981] transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 pt-16 bg-[hsl(222,47%,6%)]/98 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col items-center gap-2 p-6">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => handleNavClick(link.href)}
                  className="w-full text-center px-6 py-3 text-lg font-medium text-[hsl(220,15%,55%)] hover:text-[#10B981] hover:bg-[hsl(160,84%,39%)]/5 rounded-lg transition-colors"
                >
                  {link.label}
                </motion.button>
              ))}
              <a
                href="https://abbas23hussain.github.io/assets/Resume/Muhammad_Abbas_Hussain_GameDev_Portfolio_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 w-full text-center px-6 py-3 text-lg font-semibold text-[hsl(222,47%,6%)] bg-[#10B981] rounded-lg hover:bg-[#059669] transition-colors"
              >
                Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
