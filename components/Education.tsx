"use client";

import { portfolioData } from "@/data/portfolio";
import { GraduationCap, Calendar, Award, Sparkles } from "lucide-react";

export default function Education() {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-24 relative bg-slate-950/40 border-t border-slate-800/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            Academic Background
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            Education & Qualification
          </h2>
          <p className="text-base text-slate-400 max-w-2xl">
            Formal academic foundation in computer science and software engineering.
          </p>
        </div>

        {/* Education Cards Grid */}
        <div className="space-y-6 max-w-4xl mx-auto">
          {education.map((item) => (
            <div
              key={item.id}
              className="p-6 sm:p-8 rounded-2xl bg-slate-900/80 border border-slate-800/80 hover:border-indigo-500/40 transition-all duration-300 shadow-lg group"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-800">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <GraduationCap className="w-5 h-5 text-indigo-400" />
                    <h3 className="text-xl font-bold text-slate-100 group-hover:text-indigo-300 transition-colors">
                      {item.degree}
                    </h3>
                  </div>
                  <p className="text-base font-semibold text-slate-300">
                    {item.institution}
                  </p>
                  <p className="text-xs font-mono text-indigo-400">
                    {item.branch}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 text-xs font-mono text-slate-400">
                  <span className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-800/60 border border-slate-700/40">
                    <Calendar className="w-3.5 h-3.5" />
                    {item.period}
                  </span>
                  {item.cgpa && (
                    <span className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-950/60 text-emerald-300 border border-emerald-500/30 font-semibold">
                      <Award className="w-3.5 h-3.5 text-emerald-400" />
                      CGPA: {item.cgpa}
                    </span>
                  )}
                </div>
              </div>

              {/* Highlights */}
              <div className="pt-4 space-y-2">
                {item.highlights.map((highlight, idx) => (
                  <p key={idx} className="text-sm text-slate-400 leading-relaxed">
                    • {highlight}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
