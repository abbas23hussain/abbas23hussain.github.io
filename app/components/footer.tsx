'use client'

import { useState, useEffect } from 'react'
import { Gamepad2, Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  const [year, setYear] = useState(2026)

  useEffect(() => {
    setYear(new Date().getFullYear())
  }, [])

  return (
    <footer className="border-t border-[hsl(222,20%,18%)] py-8">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Gamepad2 className="w-5 h-5 text-[#10B981]" />
            <span className="font-display font-bold text-sm text-white">Muhammad Abbas Hussain</span>
          </div>

          <div className="flex items-center gap-3">
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
                className="p-2 rounded-md text-[hsl(220,15%,45%)] hover:text-[#10B981] transition-colors"
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>

          <p className="text-xs text-[hsl(220,15%,35%)]">
            &copy; {year} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
