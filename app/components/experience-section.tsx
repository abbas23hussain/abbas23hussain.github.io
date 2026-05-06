'use client'

import { motion } from 'framer-motion'
import { FadeIn, SlideIn } from '@/components/ui/animate'
import { Briefcase, MapPin, Calendar } from 'lucide-react'

const experiences = [
  {
    title: 'Senior Game Developer',
    company: '4BitLab',
    location: 'Manchester (Remote)',
    period: 'Feb 2025 – Present',
    technologies: ['Unreal Engine 5', 'C++', 'Blueprints', 'EOS', 'Steam SDK', 'UPnP'],
    highlights: [
      'Architected proprietary UE5 plugin using UPnP/Port Forwarding — reduced connection setup time by 40%.',
      'Led development of multiplayer FPS with Steam SDK: weapon systems, movement controllers, matchmaking.',
      'Designed AI behavior trees with adaptive difficulty scaling based on player performance.',
      'Achieved 30% performance improvement through rendering pipeline and LOD optimization.',
      'Integrated comprehensive Steam SDK features: achievements, leaderboards, cloud save.',
    ],
    current: true,
  },
  {
    title: 'Senior Game Developer (Contract)',
    company: 'Magic Media',
    location: 'Dublin (Remote)',
    period: 'Jul 2024 – Sep 2024',
    technologies: ['Unreal Engine 5', 'C++', 'Blueprints', 'Perforce'],
    highlights: [
      'Key contributor on "Revenge" — shipped multiplayer shooter on Epic Games Store.',
      'Implemented modular Blueprint and C++ systems for player abilities and combat mechanics.',
      'Collaborated with 6-developer team using Perforce with clean commit histories.',
      'Delivered features on tight contract deadlines with high code quality.',
    ],
    current: false,
  },
  {
    title: 'Game Developer',
    company: 'QBit Technologies',
    location: 'Palo Alto, CA (Remote)',
    period: 'Jul 2022 – Jan 2025',
    technologies: ['Unity 2020+', 'C#', 'Photon PUN 2', 'VR (Oculus)', 'Blockchain/Polygon'],
    highlights: [
      'Designed and deployed immersive VR applications: historical sims, industrial training, blockchain metaverse.',
      'Implemented VR mechanics optimized for Oculus Quest at smooth 90fps.',
      'Engineered voice acting integration and narrative branching mechanics.',
      'Integrated tokenized economies using Polygon blockchain and smart contracts.',
      'Developed enterprise-grade VR training simulations with assessment tracking.',
    ],
    current: false,
  },
  {
    title: 'Junior Game Developer',
    company: 'Frag Games',
    location: 'Lahore',
    period: 'Mar 2020 – Apr 2022',
    technologies: ['Unity3D', 'C#', 'Unreal Engine 4', 'WebGL', 'Mobile (Android/iOS)'],
    highlights: [
      'Designed core mechanics for educational platform deployed in 1,000+ K-12 schools across the US.',
      'Led migration of Flash-based multiplayer game to Unity WebGL.',
      'Built hyper-casual mobile prototypes focusing on retention and monetization KPIs.',
      'Collaborated in Agile sprint cycles with designers and QA testers.',
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
