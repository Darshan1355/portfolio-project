"use client";

import { portfolioData } from "@/data/portfolio";
import { Code, Layers, Database, Brain, Wrench, Sparkles, CheckCircle2 } from "lucide-react";

const categoryIcons: Record<number, React.ReactNode> = {
  0: <Code className="w-5 h-5 text-indigo-400" />,
  1: <Layers className="w-5 h-5 text-sky-400" />,
  2: <Database className="w-5 h-5 text-emerald-400" />,
  3: <Brain className="w-5 h-5 text-violet-400" />,
  4: <Wrench className="w-5 h-5 text-amber-400" />,
};

export default function Skills() {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="py-24 relative bg-slate-950/40 border-t border-slate-800/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            Technical Stack
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            Skills & Competencies
          </h2>
          <p className="text-base text-slate-400 max-w-2xl">
            Technologies and frameworks I use to build scalable web applications and data systems.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((category, catIndex) => (
            <div
              key={category.title}
              className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800/80 hover:border-indigo-500/40 hover:bg-slate-900 transition-all duration-300 flex flex-col justify-between group shadow-lg shadow-black/10"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-4 pb-3 border-b border-slate-800">
                  <div className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700/50 group-hover:bg-indigo-600/20 group-hover:border-indigo-500/30 transition-colors">
                    {categoryIcons[catIndex] || <Code className="w-5 h-5 text-indigo-400" />}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-100 group-hover:text-indigo-300 transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-xs text-slate-500 line-clamp-1">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Skill Badges List */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono transition-all duration-200 ${
                        skill.highlight
                          ? "bg-indigo-950/60 text-indigo-200 border border-indigo-500/30 group-hover:border-indigo-500/50 font-semibold"
                          : "bg-slate-800/60 text-slate-300 border border-slate-700/40 hover:border-slate-600"
                      }`}
                    >
                      {skill.highlight && (
                        <CheckCircle2 className="w-3 h-3 text-indigo-400" />
                      )}
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Count Footer */}
              <div className="mt-6 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>{category.skills.length} Technologies</span>
                <span className="text-indigo-400/80 group-hover:text-indigo-400">Production Ready</span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
