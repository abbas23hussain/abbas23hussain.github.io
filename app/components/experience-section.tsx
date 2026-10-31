'use client'

import { motion } from 'framer-motion'
import { FadeIn, SlideIn } from '@/components/ui/animate'
import { Briefcase, MapPin, Calendar } from 'lucide-react'

const experiences = [
  {
    title: 'Founder & Lead Developer',
    company: 'Different Slice',
    location: 'Remote',
    period: '2026 – Present',
    technologies: ['Unreal Engine 5', 'C++', 'MetaHuman', 'WebSockets', 'LLM Integration'],
    highlights: [
      'Founded an independent game studio that develops games and offers real-time development services to clients, working across engines.',
      'Lead engineering on client products, including a real-time AI MetaHuman assistant and an interactive UE5 interior configurator with live furniture, material and lighting changes.',
    ],
    current: true,
  },
  {
    title: 'Senior Game Developer',
    company: '4BitLab',
    location: 'Manchester, UK (Remote)',
    period: 'Feb 2025 – Present',
    technologies: ['Unreal Engine 5', 'C++', 'Blueprints', 'EOS', 'Steam SDK', 'UPnP'],
    highlights: [
      'Architected a UE5 C++ networking plugin using UPnP and port forwarding for direct server-client connections without a relay service, cutting connection setup time by 40%.',
      'Led gameplay development of a multiplayer FPS, building weapon systems, movement controllers and Steam matchmaking.',
      'Designed AI behavior trees with adaptive difficulty that scales to player performance.',
      'Raised performance on mid-tier hardware by 30% by optimizing the rendering pipeline, LODs and network replication.',
      'Integrated Steamworks achievements, leaderboards and cloud save.',
    ],
    current: true,
  },
  {
    title: 'Senior Game Developer (Contract)',
    company: 'Magic Media',
    location: 'Dublin, Ireland (Remote)',
    period: 'Jul 2024 – Sep 2024',
    technologies: ['Unreal Engine 5', 'C++', 'Blueprints', 'Perforce'],
    highlights: [
      'Built core gameplay for Revenge, a UE5 first-person multiplayer shooter with a live Steam store page: player movement, weapon handling and combat.',
      'Implemented modular C++ and Blueprint systems for player abilities and dynamic level interactions.',
      "Worked in a 6-developer team on Perforce, keeping clean changelists and reviewing teammates' code.",
    ],
    current: false,
  },
  {
    title: 'Game Developer',
    company: 'QBit Technologies',
    location: 'Palo Alto, CA, USA (Remote)',
    period: 'Jul 2022 – Jan 2025',
    technologies: ['Unity 2020+', 'C#', 'Photon PUN 2', 'VR (Oculus)', 'Blockchain/Polygon'],
    highlights: [
      'Built VR interaction systems for Unity applications in historical simulation, industrial training and a blockchain metaverse, holding 90 fps on Meta Quest.',
      'Created branching dialogue with real-time voice acting for The August Choice, a historical VR RPG set in Ancient Rome.',
      'Delivered a 1:1-scale enterprise VR training simulator for server component replacement, with physical interactions (bolts, switches, forklift) and assessment tracking.',
      'Integrated a Polygon token economy and smart contracts into VR City, a metaverse with avatar customization, land ownership and in-world retail.',
    ],
    current: false,
  },
  {
    title: 'Junior Game Developer',
    company: 'Frag Games',
    location: 'Lahore, Pakistan',
    period: 'Mar 2020 – Apr 2022',
    technologies: ['Unity3D', 'C#', 'Unreal Engine 4', 'WebGL', 'Mobile (Android/iOS)'],
    highlights: [
      'Built gameplay for Boddle Learning, a 3D Unity EdTech game used in U.S. classrooms by 1,000+ students.',
      'Ported Asterix and Friends, a Flash multiplayer browser game, to Unity WebGL, fixing rendering and input compatibility across browsers.',
      'Built and iterated on hyper-casual Unity mobile prototypes in short cycles, focused on retention and monetization KPIs.',
      'Contributed gameplay integration and debugging to MyWhoosh, an Unreal Engine 4 cycling simulation app.',
    ],
    current: false,
  },
]

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[hsl(160,84%,39%)]/[0.02] to-transparent" />

      <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px flex-1 max-w-[60px] bg-[#10B981]/40" />
            <span className="font-mono text-sm text-[#10B981] uppercase tracking-widest">Experience</span>
            <div className="h-px flex-1 max-w-[60px] bg-[#10B981]/40" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white mb-12">
            Career Journey
          </h2>
        </FadeIn>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[#10B981]/40 via-[hsl(222,20%,18%)] to-transparent" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <SlideIn key={exp.company} from="left" delay={index * 0.1}>
                <motion.div
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                  className="relative pl-16 md:pl-20"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-6 top-6 w-4 h-4 rounded-full border-2 border-[#10B981] bg-[hsl(222,47%,6%)]">
                    {exp.current && (
                      <span className="absolute inset-0 rounded-full bg-[#10B981] animate-ping opacity-40" />
                    )}
                  </div>

                  <div className="p-6 rounded-xl bg-[hsl(222,40%,9%)] border border-[hsl(222,20%,18%)] hover:border-[hsl(160,84%,39%)]/20 transition-colors">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                      <div>
                        <h3 className="font-display font-bold text-white text-lg">{exp.title}</h3>
                        <p className="text-[#10B981] font-semibold text-sm">{exp.company}</p>
                      </div>
                      <div className="flex flex-col sm:items-end gap-1 shrink-0">
                        <span className="flex items-center gap-1.5 text-xs text-[hsl(220,15%,55%)]">
                          <Calendar className="w-3 h-3" />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1.5 text-xs text-[hsl(220,15%,55%)]">
                          <MapPin className="w-3 h-3" />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    {/* Highlights */}
                    <ul className="space-y-2 mb-4">
                      {(exp.highlights ?? []).map((highlight: string, i: number) => (
                        <li key={i} className="flex gap-2 text-sm text-[hsl(220,15%,60%)]">
                          <span className="text-[#10B981] mt-1 shrink-0">▸</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-1.5">
                      {(exp.technologies ?? []).map((tech: string) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 text-[10px] rounded-md bg-[hsl(160,84%,39%)]/10 text-[#10B981] font-mono border border-[#10B981]/10"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </SlideIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
