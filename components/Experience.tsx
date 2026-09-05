"use client";

import { portfolioData } from "@/data/portfolio";
import { Briefcase, Calendar, MapPin, Sparkles, CheckCircle2 } from "lucide-react";

export default function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-24 relative bg-slate-950/40 border-t border-slate-800/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            Career Journey
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            Work & Internship Experience
          </h2>
          <p className="text-base text-slate-400 max-w-2xl">
            Practical experience engineering software features, collaborating in tech teams, and delivering results.
          </p>
        </div>

        {/* Experience Cards / Timeline Container */}
        <div className="space-y-8 relative before:absolute before:inset-0 before:left-4 sm:before:left-8 before:w-0.5 before:bg-slate-800/80 before:hidden sm:before:block">
          {experience.map((item) => (
            <div
              key={item.id}
              className="relative pl-0 sm:pl-16 group"
            >
              {/* Timeline Indicator Dot */}
              <div className="hidden sm:flex absolute left-5 top-6 -translate-x-1/2 w-6 h-6 rounded-full bg-slate-900 border-2 border-indigo-500 group-hover:bg-indigo-600 transition-colors items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-white" />
              </div>

              {/* Experience Card */}
              <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/80 border border-slate-800/80 hover:border-indigo-500/40 transition-all duration-300 shadow-lg shadow-black/10">
                
                {/* Header Row */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-800">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl font-bold text-slate-100">
                        {item.role}
                      </h3>
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                        {item.type}
                      </span>
                    </div>
                    <p className="text-base font-semibold text-slate-300 flex items-center gap-2">
                      <Briefcase className="w-4 h-4 text-indigo-400" />
                      {item.company}
                    </p>
                  </div>

                  {/* Metadata Pills */}
                  <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-400">
                    <span className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-800/60 border border-slate-700/40">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      {item.period}
                    </span>
                    <span className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-800/60 border border-slate-700/40">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      {item.location}
                    </span>
                  </div>
                </div>

                {/* Key Responsibilities */}
                <div className="pt-4 space-y-3">
                  <h4 className="text-xs font-mono uppercase tracking-widest text-slate-400 font-semibold">
                    Key Responsibilities:
                  </h4>
                  <ul className="space-y-2 text-sm text-slate-400">
                    {item.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 shrink-0" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Quantifiable Achievements */}
                {item.achievements && item.achievements.length > 0 && (
                  <div className="mt-4 pt-4 border-t border-slate-800/60 space-y-2">
                    <h4 className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-semibold flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Key Impact & Deliverables:
                    </h4>
                    <ul className="space-y-1 text-sm text-slate-300">
                      {item.achievements.map((ach, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-emerald-400">✓</span>
                          <span>{ach}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Tech Badges */}
                <div className="mt-6 pt-4 border-t border-slate-800 flex flex-wrap gap-2">
                  {item.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md text-xs font-mono text-slate-300 bg-slate-800/70 border border-slate-700/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
