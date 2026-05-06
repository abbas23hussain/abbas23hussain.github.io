'use client'

import { FadeIn, SlideIn } from '@/components/ui/animate'
import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, ExternalLink, Phone, FileText } from 'lucide-react'

const contactLinks = [
  {
    icon: Mail,
    label: 'Email',
    value: 'abbas23hussain@gmail.com',
    href: 'mailto:abbas23hussain@gmail.com',
    color: 'group-hover:text-[#10B981]',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'abbas23hussain',
    href: 'https://www.linkedin.com/in/abbas23hussain/',
    color: 'group-hover:text-[#0A66C2]',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'abbas23hussain',
    href: 'https://github.com/abbas23hussain',
    color: 'group-hover:text-white',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+92 320 405 6841',
    href: 'tel:+923204056841',
    color: 'group-hover:text-[#10B981]',
  },
]

export default function ContactSection() {
  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[hsl(160,84%,39%)]/[0.02] to-transparent" />

      <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px flex-1 max-w-[60px] bg-[#10B981]/40" />
            <span className="font-mono text-sm text-[#10B981] uppercase tracking-widest">Contact</span>
            <div className="h-px flex-1 max-w-[60px] bg-[#10B981]/40" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            Let&apos;s Build Something
          </h2>
          <p className="text-[hsl(220,15%,55%)] max-w-2xl mb-12">
            Interested in collaborating on a game project or need a senior developer for your team?
            I&apos;m always open to discussing new opportunities.
          </p>
        </FadeIn>

        <div className="grid sm:grid-cols-2 gap-4 max-w-2xl">
          {contactLinks.map((link, index) => (
            <SlideIn key={link.label} from="bottom" delay={index * 0.08}>
              <a
                href={link.href}
                target={link.href.startsWith('mailto') || link.href.startsWith('tel') ? undefined : '_blank'}
                rel="noopener noreferrer"
                className="group"
              >
                <motion.div
                  whileHover={{ y: -3, borderColor: 'hsl(160, 84%, 39%, 0.3)' }}
                  transition={{ duration: 0.2 }}
                  className="p-5 rounded-xl bg-[hsl(222,40%,9%)] border border-[hsl(222,20%,18%)] hover:bg-[hsl(222,35%,11%)] transition-colors flex items-center gap-4"
                >
                  <div className="p-2.5 rounded-lg bg-[hsl(160,84%,39%)]/10 shrink-0">
                    <link.icon className={`w-5 h-5 text-[hsl(220,15%,55%)] transition-colors ${link.color}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-[hsl(220,15%,55%)] mb-0.5">{link.label}</p>
                    <p className="text-sm font-medium text-white truncate">{link.value}</p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-[hsl(222,20%,18%)] group-hover:text-[hsl(220,15%,55%)] transition-colors shrink-0" />
                </motion.div>
              </a>
            </SlideIn>
          ))}
        </div>

        {/* Resume CTA */}
        <FadeIn delay={0.4}>
          <div className="mt-12 flex flex-col sm:flex-row items-start gap-4">
            <a
              href="https://abbas23hussain.github.io/assets/Resume/Muhammad_Abbas_Hussain_GameDev_Portfolio_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-[hsl(222,47%,6%)] bg-[#10B981] rounded-lg hover:bg-[#059669] transition-all hover:shadow-[0_0_20px_hsl(160,84%,39%,0.3)] active:scale-[0.98]"
            >
              <FileText className="w-4 h-4" />
              Download Resume
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
