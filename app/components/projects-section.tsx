'use client'

import { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FadeIn, Stagger, StaggerItem } from '@/components/ui/animate'
import { ExternalLink, Github, Play, Gamepad2, Filter } from 'lucide-react'
import Image from 'next/image'

function ProjectImage({ src, alt }: { src: string; alt: string }) {
  const [hasError, setHasError] = useState(false)
  const handleError = useCallback(() => setHasError(true), [])

  if (hasError) {
    return (
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <Gamepad2 className="w-10 h-10 text-[#10B981]/30 mx-auto mb-2" />
          <p className="text-xs text-[hsl(220,15%,40%)] font-mono">Screenshot Placeholder</p>
          <p className="text-[10px] text-[hsl(220,15%,30%)] font-mono mt-1">{src}</p>
        </div>
      </div>
    )
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      className="object-cover"
      onError={handleError}
      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
    />
  )
}

interface ProjectLink {
  store?: string
  github?: string
  website?: string
  video?: string
}

interface Project {
  title: string
  subtitle: string
  engine: string
  category: string
  technologies: string[]
  description: string
  details: string[]
  links: ProjectLink
  image: string | null
  placeholderImage: string
}

/*
 * =========================================================================
 * PLACEHOLDER IMAGES - REPLACE WITH REAL SCREENSHOTS
 * =========================================================================
 * Each project uses a placeholder image stored at:
 *   /public/projects/<project-key>.jpg
 *
 * To replace with real screenshots:
 * 1. Take screenshots of each project (recommended: 16:9 aspect ratio, min 1280x720)
 * 2. Save them to /public/projects/ with these exact filenames:
 *    - revenge.jpg
 *    - v2v-plugin.jpg
 *    - the-august-choice.jpg
 *    - vr-training-simulator.jpg
 *    - vr-city.jpg
 *    - metahuman-cinematic.jpg
 *    - fitpic-simulator.jpg
 *    - boddle-learning.jpg
 *    - mywhoosh.jpg
 *    - asterix-and-friends.jpg
 *    - hyper-casual.jpg
 * =========================================================================
 */

const projects: Project[] = [
  {
    title: 'Revenge',
    subtitle: 'Multiplayer Shooter',
    engine: 'Unreal Engine 5',
    category: 'Multiplayer FPS',
    technologies: ['Unreal Engine 5', 'C++', 'Blueprints', 'Perforce', 'Multiplayer'],
    description: 'A polished first person multiplayer shooter soon to be released on Steam.',
    details: [
      'Collaborated as part of a 6-developer team using Perforce version control.',
      'Implemented core gameplay systems including player movement, weapon handling, and combat mechanics.',
      'Contributed to bug fixing, performance optimization, and polish for steam page.'
    ],
    links: { store: 'https://store.steampowered.com/app/2709500/REVENGE' },
    image: null,
    placeholderImage: '/projects/revenge.jpg',
  },
  {
    title: 'V2V Plugin',
    subtitle: 'UE5 Migration Tool',
    engine: 'Unreal Engine 5',
    category: 'Editor Plugin',
    technologies: ['Unreal Engine 5', 'C++', 'Blueprint', 'Networking'],
    description: 'An Unreal Engine 5 plugin with out-of-the-box UPnP support, enabling seamless multiplayer connectivity without relying on third-party services like EoS or Steam.',
    details: [
      'Network plugin for seamless multiplayer connectivity using UPnP.',
      'Developed in C++ as a UE component so it can be used directly from blueprints.',
      'Currently published as invite only with comprehensive installation instructions via GitHub.'
    ],
    links: {},
    image: null,
    placeholderImage: '/projects/v2v-plugin.png',
  },
  {
    title: 'The August Choice',
    subtitle: 'Historical VR Simulation',
    engine: 'Unity',
    category: 'VR / Educational',
    technologies: ['Unity', 'C#', 'VR SDK (Oculus)', 'Voice Acting', 'Historical Sim'],
    description: 'An immersive RPG VR experience set in Ancient Rome with dialogue trees and historical reconstructions.',
    details: [
      'Players act as a Roman senator deciding whether to support Augustus.',
      'Implemented dialogue trees with real-time voice acting and narrative branching.',
      'Built historically accurate 3D reconstructions of Roman forums and temples.'
    ],
    links: {},
    image: null,
    placeholderImage: '/projects/the-august-choice.png',
  },
  {
    title: 'VR Training Simulator',
    subtitle: 'Industrial Training VR',
    engine: 'Unity',
    category: 'VR / Enterprise',
    technologies: ['Unity', 'C#', 'VR Motion Controllers', 'Industrial Sim'],
    description: 'A precision 1:1 scale VR simulation for training industrial technicians on server component replacement.',
    details: [
      'Created 1:1 scale VR simulation for Danieli Automation training procedures.',
      'Simulated realistic interactions: unscrewing bolts, flipping switches, operating forklifts.',
      'Implemented assessment tracking for enterprise deployment.'
    ],
    links: {},
    image: null,
    placeholderImage: '/projects/vr-training-simulator.png',
  },
  {
    title: 'VR City',
    subtitle: 'Blockchain Metaverse',
    engine: 'Unity',
    category: 'Metaverse / Web3',
    technologies: ['Unity', 'C#', 'Polygon', 'Smart Contracts', 'NFT', 'Web3'],
    description: 'A Web3 metaverse platform with avatar customization, virtual land ownership, and Polygon blockchain integration.',
    details: [
      'Built core gameplay and interaction systems for metaverse experiences.',
      'Integrated tokenized economy powered by VR City Token on Polygon.',
      'Developed land parcel systems and intuitive blockchain wallet integration.'
    ],
    links: {},
    image: null,
    placeholderImage: '/projects/vr-city.png',
  },
  {
    title: 'MetaHuman Cinematic',
    subtitle: 'High-Fidelity Cinematics',
    engine: 'Unreal Engine 5',
    category: 'Cinematics',
    technologies: ['Unreal Engine 5', 'MetaHuman', 'Lumen', 'Nanite', 'Real-Time Rendering'],
    description: 'A high-fidelity MetaHuman character performance showcase with real-time lighting and camera choreography.',
    details: [
      'Created cinematic scenes with MetaHuman characters featuring realistic facial animations.',
      'Optimized Lumen GI and Nanite for real-time film-quality visuals.',
      'Designed professional lighting rigs and cinematic camera choreography.'
    ],
    links: {},
    image: null,
    placeholderImage: '/projects/metahuman-cinematic.jpg',
  },
  {
    title: 'FitPicSimulator',
    subtitle: 'IK + Limb Manipulation',
    engine: 'Unreal Engine 5',
    category: 'Interactive / Animation',
    technologies: ['Unreal Engine 5', 'Full Body IK', 'FABRIK', 'Blueprint', 'Animation'],
    description: 'An experimental character posing system with real-time Inverse Kinematics for interactive limb manipulation.',
    details: [
      'Developed interactive character posing with on-screen sphere manipulation.',
      'Implemented Full Body IK and FABRIK solvers for fluid body manipulation.',
      'Designed for fashion visualization, fitness apps, and character posing tools.'
    ],
    links: {},
    image: null,
    placeholderImage: '/projects/fitpic-simulator.png',
  },
  {
    title: 'Boddle Learning',
    subtitle: '3D EdTech Game',
    engine: 'Unity',
    category: 'Education / EdTech',
    technologies: ['Unity', 'C#', 'EdTech', 'Gamification', 'Analytics'],
    description: 'An educational gaming platform deployed in K-12 schools across the United States.',
    details: [
      'Designed arcade-style minigames rewarding correct educational answers.',
      'Built student progression tracking and QA-module integration.',
      'Deployed in Kansas schools reaching 1,000+ students.'
    ],
    links: { website: 'http://boddlelearning.com/' },
    image: null,
    placeholderImage: '/projects/boddle-learning.webp',
  },
  {
    title: 'MyWhoosh',
    subtitle: 'Cycling Companion App',
    engine: 'Unreal Engine 4',
    category: 'Sports Simulation',
    technologies: ['Unreal Engine 4', 'Sports Simulation', 'Multi-Platform'],
    description: 'A high-fidelity cycling companion application for fitness enthusiasts with gameplay integration.',
    details: [
      'Contributed to gameplay integration and interaction logic.',
      'Assisted with UI/UX polish and performance optimization.',
      'Deployed across multiple platforms.'
    ],
    links: { website: 'https://www.mywhoosh.com/' },
    image: null,
    placeholderImage: '/projects/mywhoosh.png',
  },
  {
    title: 'Asterix and Friends',
    subtitle: 'Flash to WebGL Migration',
    engine: 'Unity3D',
    category: 'Legacy Migration',
    technologies: ['Unity3D', 'WebGL', 'Browser Compatibility', 'Multiplayer'],
    description: 'Led technical migration of a Flash-based multiplayer browser game to Unity WebGL.',
    details: [
      'Led migration from Flash to Unity WebGL preserving all gameplay mechanics.',
      'Resolved rendering compatibility and cross-browser stability challenges.',
      'Ensured stable operation across Chrome, Firefox, Safari, and Edge.'
    ],
    links: { website: 'https://www.asterix-friends.com/en/' },
    image: null,
    placeholderImage: '/projects/asterix-and-friends.jpg',
  },
  {
    title: 'Bullet Rush',
    subtitle: 'Hypercasual Mobile',
    engine: 'Unity3D',
    category: 'Mobile',
    technologies: ['Unity3D', 'C#', 'Mobile Dev', 'Analytics', 'Ad Integration'],
    description: 'Worked on hybridizing a hypercasual game by adding store and leveling up features.',
    details: [
      'Iterated an already published game into having new features',
      'Analyzed player behavior data to inform design improvements.',
      'Focused on retention metrics, ad placement, and fast publishing pipeline.'
    ],
    links: {store: 'https://play.google.com/store/apps/details?id=com.ohmgames.crowdshooter&pcampaignid=web_share'},
    image: null,
    placeholderImage: '/projects/bullet-rush.webp',
  },
  {
    title: 'Haemaccel Run',
    subtitle: 'Hypercasual Mobile',
    engine: 'Unity3D',
    category: 'Mobile',
    technologies: ['Unity3D', 'C#', 'Mobile Dev', 'Analytics', 'Ad Integration'],
    description: 'An endless runner game where you collect Haemaccel medicine while doding incoming traffic and road barriers',
    details: [
      'Attached the game with an event based leaderboard system.',
      'Optimised for low end mobile devices',
      'Added ad based revival and rewards'
    ],
    links: {store: 'https://play.google.com/store/apps/details?id=com.ABHGames.Hemaxyl&pcampaignid=web_share'},
    image: null,
    placeholderImage: '/projects/haemaccel-run.webp',
  }
]

const allCategories = ['All', ...Array.from(new Set(projects.map((p) => {
  if (p.engine.includes('Unreal')) return 'Unreal Engine'
  if (p.engine.includes('Unity')) return 'Unity'
  return 'Other'
})))]

export default function ProjectsSection() {
  const [filter, setFilter] = useState('All')
  const [expandedProject, setExpandedProject] = useState<string | null>(null)

  const filtered = filter === 'All'
    ? projects
    : projects.filter((p) => {
        if (filter === 'Unreal Engine') return p.engine.includes('Unreal')
        if (filter === 'Unity') return p.engine.includes('Unity')
        return true
      })

  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px flex-1 max-w-[60px] bg-[#10B981]/40" />
            <span className="font-mono text-sm text-[#10B981] uppercase tracking-widest">Portfolio</span>
            <div className="h-px flex-1 max-w-[60px] bg-[#10B981]/40" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-[hsl(220,15%,55%)] max-w-2xl mb-8">
            A selection of games, tools, and interactive experiences across multiple platforms and genres.
          </p>
        </FadeIn>

        {/* Filter buttons */}
        <FadeIn delay={0.1}>
          <div className="flex items-center gap-2 mb-10 flex-wrap">
            <Filter className="w-4 h-4 text-[hsl(220,15%,55%)] mr-1" />
            {allCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 text-sm rounded-lg font-medium transition-all ${
                  filter === cat
                    ? 'bg-[#10B981] text-[hsl(222,47%,6%)]'
                    : 'bg-[hsl(222,40%,9%)] text-[hsl(220,15%,55%)] border border-[hsl(222,20%,18%)] hover:border-[hsl(160,84%,39%)]/30 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -4 }}
                className="group rounded-xl bg-[hsl(222,40%,9%)] border border-[hsl(222,20%,18%)] hover:border-[hsl(160,84%,39%)]/30 overflow-hidden transition-colors cursor-pointer"
                onClick={() => setExpandedProject(expandedProject === project.title ? null : project.title)}
              >
                {/* Project Image */}
                <div className="relative aspect-video bg-[hsl(222,30%,12%)] overflow-hidden">
                  <ProjectImage src={project.placeholderImage} alt={`${project.title} screenshot`} />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[hsl(222,47%,6%)] via-transparent to-transparent opacity-60" />
                  {/* Engine badge */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 text-[10px] font-bold uppercase rounded-md bg-[hsl(222,47%,6%)]/80 text-[#10B981] border border-[#10B981]/20 backdrop-blur-sm">
                      {project.engine}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="font-display font-bold text-white text-base group-hover:text-[#10B981] transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs text-[hsl(220,15%,55%)] mt-0.5">{project.subtitle}</p>
                    </div>
                    {/* Links */}
                    <div className="flex gap-1.5">
                      {project?.links?.github && (
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e: React.MouseEvent) => e.stopPropagation()}
                          className="p-1.5 rounded-md hover:bg-[hsl(160,84%,39%)]/10 text-[hsl(220,15%,55%)] hover:text-[#10B981] transition-colors"
                          aria-label={`GitHub - ${project.title}`}
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                      {project?.links?.website && (
                        <a
                          href={project.links.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e: React.MouseEvent) => e.stopPropagation()}
                          className="p-1.5 rounded-md hover:bg-[hsl(160,84%,39%)]/10 text-[hsl(220,15%,55%)] hover:text-[#10B981] transition-colors"
                          aria-label={`Website - ${project.title}`}
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                      {project?.links?.store && (
                        <a
                          href={project.links.store}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e: React.MouseEvent) => e.stopPropagation()}
                          className="p-1.5 rounded-md hover:bg-[hsl(160,84%,39%)]/10 text-[hsl(220,15%,55%)] hover:text-[#10B981] transition-colors"
                          aria-label={`Store - ${project.title}`}
                        >
                          <Play className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="text-sm text-[hsl(220,15%,55%)] mb-3 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Expanded details */}
                  <AnimatePresence>
                    {expandedProject === project.title && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <ul className="mb-3 space-y-1.5">
                          {(project.details ?? []).map((detail: string, i: number) => (
                            <li key={i} className="text-xs text-[hsl(220,15%,50%)] flex gap-2">
                              <span className="text-[#10B981] mt-0.5 shrink-0">▸</span>
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-[hsl(222,20%,18%)]/50">
                    {(project.technologies ?? []).slice(0, 4).map((tech: string) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 text-[10px] rounded-md bg-[hsl(222,25%,12%)] text-[hsl(220,15%,60%)] font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                    {(project.technologies?.length ?? 0) > 4 && (
                      <span className="px-2 py-0.5 text-[10px] rounded-md bg-[hsl(222,25%,12%)] text-[hsl(160,84%,39%)] font-mono">
                        +{(project.technologies?.length ?? 0) - 4}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
