'use client'

import { motion } from 'framer-motion'
import { FadeIn, Stagger, StaggerItem } from '@/components/ui/animate'
import {
  Cpu, Code2, Globe, Glasses, BrainCircuit, Palette,
  Headphones, GitBranch, Kanban, Wrench, Smartphone, Blocks
} from 'lucide-react'

const skillCategories = [
  {
    icon: Cpu,
    title: 'Game Engines',
    items: ['Unreal Engine 4', 'Unreal Engine 5', 'Unity 2019+', 'Unity 6+'],
  },
  {
    icon: Code2,
    title: 'Programming',
    items: ['C++ (Advanced)', 'C# (Advanced)', 'Python', 'JavaScript', 'Blueprint Scripting'],
  },
  {
    icon: Globe,
    title: 'Multiplayer Networking',
    items: ['Steam SDK', 'Epic Online Services', 'Photon PUN 2', 'Network Replication', 'Matchmaking'],
  },
  {
    icon: Palette,
    title: 'Graphics & Rendering',
    items: ['Shader Graph / HLSL', 'Niagara VFX', 'Lumen GI', 'Nanite', 'MetaHuman'],
  },
  {
    icon: BrainCircuit,
    title: 'AI & Gameplay',
    items: ['Behavior Trees', 'AI Controllers', 'Physics Systems', 'IK / FABRIK', 'Animation Systems'],
  },
  {
    icon: Glasses,
    title: 'VR/AR Development',
    items: ['Oculus SDK', 'VR Motion Controllers', 'Enterprise VR Training', 'Room-Scale VR', 'Immersive Sims'],
  },
  {
    icon: Headphones,
    title: 'Audio Integration',
    items: ['FMOD', 'Wwise', 'Audio System Design'],
  },
  {
    icon: GitBranch,
    title: 'Version Control',
    items: ['Git / GitHub', 'Perforce', 'Branching Strategies', 'Code Reviews'],
  },
  {
    icon: Smartphone,
    title: 'Platforms',
    items: ['Windows PC', 'Android / iOS', 'Oculus Quest', 'PlayStation / Xbox', 'WebGL'],
  },
  {
    icon: Blocks,
    title: 'Blockchain / Web3',
    items: ['Polygon', 'Smart Contracts', 'NFT Systems', 'Tokenized Economies'],
  },
  {
    icon: Kanban,
    title: 'Project Management',
    items: ['Jira', 'Trello', 'Agile / Scrum', 'Sprint Planning'],
  },
  {
    icon: Wrench,
    title: 'Dev Tools',
    items: ['Visual Studio', 'JetBrains Rider', 'Unreal Editor', 'Unity Editor', 'Slate UI'],
  },
]

export default function SkillsSection() {
  return (
    <section id="skills" className="relative py-24 sm:py-32">
      {/* Subtle background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[hsl(160,84%,39%)]/[0.02] to-transparent" />

      <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px flex-1 max-w-[60px] bg-[#10B981]/40" />
            <span className="font-mono text-sm text-[#10B981] uppercase tracking-widest">Skills</span>
            <div className="h-px flex-1 max-w-[60px] bg-[#10B981]/40" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            Technical Arsenal
          </h2>
          <p className="text-[hsl(220,15%,55%)] max-w-2xl mb-12">
            A comprehensive toolkit honed across AAA-quality projects, indie titles, VR experiences,
            and educational platforms.
          </p>
        </FadeIn>

        <Stagger staggerDelay={0.06} className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {skillCategories.map((cat) => (
            <StaggerItem key={cat.title}>
              <motion.div
                whileHover={{ y: -3, borderColor: 'hsl(160, 84%, 39%, 0.3)' }}
                transition={{ duration: 0.2 }}
                className="h-full p-5 rounded-xl bg-[hsl(222,40%,9%)] border border-[hsl(222,20%,18%)] hover:bg-[hsl(222,35%,11%)] transition-colors"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-[hsl(160,84%,39%)]/10">
                    <cat.icon className="w-5 h-5 text-[#10B981]" />
                  </div>
                  <h3 className="font-semibold text-white text-sm">{cat.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {(cat.items ?? []).map((skill: string) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 text-xs rounded-md bg-[hsl(222,25%,12%)] text-[hsl(220,15%,65%)] border border-[hsl(222,20%,18%)]/50"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
