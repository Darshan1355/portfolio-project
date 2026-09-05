"use client";

import { portfolioData } from "@/data/portfolio";
import { Trophy, Sparkles } from "lucide-react";

export default function Achievements() {
  const { achievements } = portfolioData;
  const hasValidAchievements = achievements.some(
    (a) => a.title && !a.title.includes("[ADD")
  );

  return (
    <section className="py-20 relative bg-slate-950/40 border-t border-slate-800/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            Recognition
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            Achievements & Awards
          </h2>
          <p className="text-base text-slate-400 max-w-2xl">
            Competitions, hackathons, and community contributions.
          </p>
        </div>

        {/* Content Grid or Placeholder */}
        {hasValidAchievements ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {achievements.map((item) => (
              <div
                key={item.id}
                className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800/80 hover:border-indigo-500/40 transition-all duration-300 shadow-lg flex items-start gap-4 group"
              >
                <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 group-hover:bg-amber-500 group-hover:text-black transition-colors shrink-0">
                  <Trophy className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-base font-bold text-slate-100 group-hover:text-amber-300 transition-colors">
                      {item.title}
                    </h3>
                    {item.badge && (
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-amber-500/10 text-amber-400 border border-amber-500/20">
                        {item.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-xs font-mono text-slate-400">
                    {item.event} • {item.date}
                  </p>
                  <p className="text-xs text-slate-400 leading-relaxed pt-1">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="p-8 rounded-2xl bg-slate-900/40 border border-dashed border-slate-800 max-w-xl mx-auto text-center space-y-3">
            <div className="w-12 h-12 rounded-full bg-slate-800/80 border border-slate-700/50 flex items-center justify-center text-slate-400 mx-auto">
              <Trophy className="w-6 h-6 text-amber-400" />
            </div>
            <h3 className="text-base font-bold text-slate-300">
              Achievements Section Ready
            </h3>
            <p className="text-xs text-slate-500 max-w-md mx-auto">
              Easily highlight hackathon awards, academic honors, or open-source achievements by updating <code className="text-indigo-400 font-mono">data/portfolio.ts</code>.
            </p>
          </div>
        )}

      </div>
    </section>
  );
}
