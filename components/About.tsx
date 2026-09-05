"use client";

import { portfolioData } from "@/data/portfolio";
import { Cpu, GraduationCap, Code2, Sparkles } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  Cpu: <Cpu className="w-5 h-5 text-indigo-400" />,
  GraduationCap: <GraduationCap className="w-5 h-5 text-emerald-400" />,
  Code2: <Code2 className="w-5 h-5 text-violet-400" />,
};

export default function About() {
  const { personal, aboutHighlights } = portfolioData;

  return (
    <section id="about" className="py-24 relative border-t border-slate-800/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            About Me
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            Background & Engineering Focus
          </h2>
          <p className="text-base text-slate-400 max-w-2xl">
            Building software with a focus on performance, clarity, and real-world utility.
          </p>
        </div>

        {/* Story Paragraphs + Highlight Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Narrative Paragraphs */}
          <div className="lg:col-span-7 space-y-6 text-slate-300 text-base leading-relaxed bg-slate-900/40 p-6 sm:p-8 rounded-2xl border border-slate-800/80">
            <h3 className="text-xl font-bold text-slate-100 flex items-center gap-2">
              <span>Who I Am</span>
            </h3>
            {personal.longBio.map((paragraph, index) => (
              <p key={index} className="text-slate-400">
                {paragraph}
              </p>
            ))}
            <div className="pt-4 border-t border-slate-800 flex flex-wrap gap-4 text-xs font-mono text-slate-400">
              <div>
                <span className="text-slate-500">Location:</span>{" "}
                <span className="text-slate-200">{personal.location}</span>
              </div>
              <div>
                <span className="text-slate-500">Status:</span>{" "}
                <span className="text-emerald-400 font-semibold">{personal.status}</span>
              </div>
            </div>
          </div>

          {/* Core Pillars / Supporting Cards */}
          <div className="lg:col-span-5 flex flex-col space-y-4">
            {aboutHighlights.map((item, index) => (
              <div
                key={index}
                className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-indigo-500/40 hover:bg-slate-900 transition-all duration-200 group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-slate-800/80 group-hover:bg-indigo-600/20 border border-slate-700/50 group-hover:border-indigo-500/30 transition-colors">
                    {iconMap[item.iconName] || <Cpu className="w-5 h-5 text-indigo-400" />}
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-base font-bold text-slate-100 group-hover:text-indigo-300 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
