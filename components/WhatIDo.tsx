"use client";

import { portfolioData } from "@/data/portfolio";
import { Brain, Layout, Server, BarChart3, Sparkles } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  Brain: <Brain className="w-6 h-6 text-indigo-400" />,
  Layout: <Layout className="w-6 h-6 text-sky-400" />,
  Server: <Server className="w-6 h-6 text-emerald-400" />,
  BarChart3: <BarChart3 className="w-6 h-6 text-amber-400" />,
};

export default function WhatIDo() {
  const { services } = portfolioData;

  return (
    <section className="py-24 relative border-t border-slate-800/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            Specializations
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            What I Engineer
          </h2>
          <p className="text-base text-slate-400 max-w-2xl">
            Core areas where I deliver functional software solutions and data systems.
          </p>
        </div>

        {/* 4-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((item) => (
            <div
              key={item.id}
              className="p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-indigo-500/40 hover:bg-slate-900 transition-all duration-300 group flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/50 w-max group-hover:bg-indigo-600/20 group-hover:border-indigo-500/30 transition-colors">
                  {iconMap[item.iconName] || <Brain className="w-6 h-6 text-indigo-400" />}
                </div>

                <h3 className="text-xl font-bold text-slate-100 group-hover:text-indigo-300 transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Technology Tags */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-md text-[11px] font-mono text-slate-400 bg-slate-800/50 border border-slate-700/40"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
