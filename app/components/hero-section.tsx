'use client'

import { motion } from 'framer-motion'
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react'

export default function HeroSection() {
  const handleScrollDown = () => {
    const el = document.querySelector('#about')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0 animate-grid-move"
          style={{
            backgroundImage: `linear-gradient(hsl(160 84% 39% / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(160 84% 39% / 0.3) 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[hsl(160,84%,39%)]/5 rounded-full blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[hsl(200,80%,40%)]/3 rounded-full blur-[100px] animate-pulse-glow" style={{ animationDelay: '1.5s' }} />

      <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[hsl(160,84%,39%)]/10 border border-[hsl(160,84%,39%)]/20 mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10B981]" />
          </span>
          <span className="text-sm font-medium text-[#10B981]">Available for opportunities</span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-white mb-4"
        >
          Muhammad
          <span className="text-gradient block sm:inline"> Abbas</span>
          Hussain
        </motion.h1>

        {/* Title */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="font-mono text-lg sm:text-xl text-[#10B981] mb-6"
        >
          {'> '}Senior Game Developer
        </motion.p>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="text-base sm:text-lg text-[hsl(220,15%,55%)] max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Crafting immersive gaming experiences with Unreal Engine &amp; Unity for 5+ years.
          Specializing in multiplayer systems, VR/AR, and AI-driven gameplay.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
        >
          <button
            onClick={() => {
              const el = document.querySelector('#projects')
              if (el) el.scrollIntoView({ behavior: 'smooth' })
            }}
            className="px-8 py-3 text-base font-semibold text-[hsl(222,47%,6%)] bg-[#10B981] rounded-lg hover:bg-[#059669] transition-all hover:shadow-[0_0_20px_hsl(160,84%,39%,0.3)] active:scale-[0.98]"
          >
            View My Work
          </button>
          <button
            onClick={() => {
              const el = document.querySelector('#contact')
              if (el) el.scrollIntoView({ behavior: 'smooth' })
            }}
            className="px-8 py-3 text-base font-semibold text-white border border-[hsl(160,84%,39%)]/30 rounded-lg hover:border-[#10B981] hover:bg-[hsl(160,84%,39%)]/5 transition-all active:scale-[0.98]"
          >
            Get in Touch
          </button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex items-center justify-center gap-4"
        >
          {[
            { icon: Github, href: 'https://github.com/abbas23hussain', label: 'GitHub' },
            { icon: Linkedin, href: 'https://www.linkedin.com/in/abbas23hussain/', label: 'LinkedIn' },
            { icon: Mail, href: 'mailto:abbas23hussain@gmail.com', label: 'Email' },
          ].map((social) => (
            <a
              key={social.label}
              href={social.href}
              target={social.href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              aria-label={social.label}
              className="p-3 rounded-lg border border-[hsl(222,20%,18%)] hover:border-[hsl(160,84%,39%)]/40 hover:bg-[hsl(160,84%,39%)]/5 text-[hsl(220,15%,55%)] hover:text-[#10B981] transition-all"
            >
              <social.icon className="w-5 h-5" />
            </a>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        onClick={handleScrollDown}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[hsl(220,15%,55%)] hover:text-[#10B981] transition-colors"
        aria-label="Scroll down"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </motion.button>
    </section>
  )
}
