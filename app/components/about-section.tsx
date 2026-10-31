'use client'

import { motion } from 'framer-motion'
import { FadeIn, SlideIn } from '@/components/ui/animate'
import { Gamepad2, Monitor, Globe, Sparkles } from 'lucide-react'

const highlights = [
  { icon: Gamepad2, label: '6+ Years', description: 'Game Development Experience' },
  { icon: Monitor, label: 'UE4/UE5 & Unity', description: 'Dual Engine Expertise' },
  { icon: Globe, label: 'Multi-Platform', description: 'PC, Mobile, VR, Web' },
  { icon: Sparkles, label: 'Shipped Titles', description: 'Web, Mobile & PC' },
]

export default function AboutSection() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px flex-1 max-w-[60px] bg-[#10B981]/40" />
            <span className="font-mono text-sm text-[#10B981] uppercase tracking-widest">About Me</span>
            <div className="h-px flex-1 max-w-[60px] bg-[#10B981]/40" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white mb-12">
            Crafting Digital Worlds
          </h2>
        </FadeIn>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Bio text */}
          <SlideIn from="left" className="lg:col-span-3">
            <div className="space-y-5">
              <p className="text-[hsl(220,15%,65%)] leading-relaxed text-base">
                Creative and results-driven Senior Game Developer with over 6 years of progressive
                experience in full-cycle game development, from concept and prototyping to optimization
                and deployment.
              </p>
              <p className="text-[hsl(220,15%,65%)] leading-relaxed text-base">
                Demonstrated expertise in building high-performance games using Unreal Engine 4/5
                and Unity3D, with deep proficiency in C++, C#, and Blueprint visual scripting.
                Specialized in multiplayer networking systems (Steam SDK, Epic Online Services, Photon),
                gameplay programming, AI behavior systems, and performance optimization for PC, mobile,
                and VR platforms.
              </p>
              <p className="text-[hsl(220,15%,65%)] leading-relaxed text-base">
                Proven track record of shipping titles on web, mobile and PC, including an educational
                game used in U.S. classrooms, with a multiplayer shooter on its way to Steam. Founder of
                Different Slice, an indie game studio that also builds real-time AI MetaHuman assistants
                for clients.
              </p>
            </div>
          </SlideIn>

          {/* Highlight Cards */}
          <div className="lg:col-span-2 grid grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <SlideIn key={item.label} from="right" delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -4, borderColor: 'hsl(160, 84%, 39%, 0.4)' }}
                  transition={{ duration: 0.2 }}
                  className="p-5 rounded-xl bg-[hsl(222,40%,9%)] border border-[hsl(222,20%,18%)] hover:bg-[hsl(222,35%,11%)] transition-colors"
                >
                  <item.icon className="w-8 h-8 text-[#10B981] mb-3" />
                  <p className="font-semibold text-white text-sm">{item.label}</p>
                  <p className="text-xs text-[hsl(220,15%,55%)] mt-1">{item.description}</p>
                </motion.div>
              </SlideIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
