'use client'

import { FadeIn, SlideIn } from '@/components/ui/animate'
import { GraduationCap, BookOpen } from 'lucide-react'

const coursework = [
  'Data Structures & Algorithms',
  'Object-Oriented Programming',
  'Computer Graphics',
  'Software Engineering',
  'Database Systems',
  'Operating Systems',
  'Artificial Intelligence',
]

export default function EducationSection() {
  return (
    <section id="education" className="relative py-24 sm:py-32">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px flex-1 max-w-[60px] bg-[#10B981]/40" />
            <span className="font-mono text-sm text-[#10B981] uppercase tracking-widest">Education</span>
            <div className="h-px flex-1 max-w-[60px] bg-[#10B981]/40" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white mb-12">
            Academic Background
          </h2>
        </FadeIn>

        <SlideIn from="bottom">
          <div className="p-8 rounded-xl bg-[hsl(222,40%,9%)] border border-[hsl(222,20%,18%)] hover:border-[hsl(160,84%,39%)]/20 transition-colors max-w-3xl">
            <div className="flex items-start gap-5">
              <div className="p-3 rounded-xl bg-[hsl(160,84%,39%)]/10 shrink-0">
                <GraduationCap className="w-8 h-8 text-[#10B981]" />
              </div>
              <div className="flex-1">
                <h3 className="font-display font-bold text-white text-xl mb-1">
                  Bachelor of Science in Computer Science
                </h3>
                <p className="text-[#10B981] font-semibold text-sm mb-1">
                  National University of Computer and Emerging Sciences
                </p>
                <p className="text-[hsl(220,15%,55%)] text-sm mb-6">
                  FAST-NUCES &bull; 2016 – 2020
                </p>

                <div className="flex items-center gap-2 mb-4">
                  <BookOpen className="w-4 h-4 text-[#10B981]" />
                  <span className="text-sm font-semibold text-white">Relevant Coursework</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {coursework.map((course: string) => (
                    <span
                      key={course}
                      className="px-3 py-1.5 text-xs rounded-lg bg-[hsl(222,25%,12%)] text-[hsl(220,15%,65%)] border border-[hsl(222,20%,18%)]/50 hover:border-[hsl(160,84%,39%)]/20 transition-colors"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </SlideIn>
      </div>
    </section>
  )
}
