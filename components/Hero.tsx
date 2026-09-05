"use client";

import { ArrowRight, Mail, FileText, Terminal, CheckCircle2 } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";

export default function Hero() {
  const { personal } = portfolioData;

  return (
    <section className="relative min-h-[90vh] flex items-center pt-28 pb-16 overflow-hidden">
      {/* Background Decorative Grids & Glows */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Information & CTAs */}
          <div className="lg:col-span-7 flex flex-col space-y-6 text-left animate-fade-in">
            
            {/* Status Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-slate-300 text-xs font-mono w-max shadow-inner">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>{personal.status}</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <p className="text-xs font-mono uppercase tracking-widest text-indigo-400 font-semibold">
                Hello, I'm
              </p>
              <h1 className="text-4xl sm:text-6xl lg:text-6xl font-extrabold text-slate-100 tracking-tight leading-[1.1]">
                {personal.name}
              </h1>
              <p className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-indigo-400 via-violet-300 to-indigo-200 bg-clip-text text-transparent">
                {personal.title}
              </p>
            </div>

            {/* Value Proposition Subtitle */}
            <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-xl">
              {personal.subtitle} {personal.bio}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-xl shadow-lg shadow-indigo-600/25 transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-indigo-500"
              >
                View My Work
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 rounded-xl transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-indigo-500"
              >
                <Mail className="w-4 h-4 text-indigo-400" />
                Contact Me
              </a>

              <a
                href={personal.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-slate-300 hover:text-white bg-slate-900/50 hover:bg-slate-800/80 border border-slate-800/80 rounded-xl transition-all duration-200 focus-visible:outline-2 focus-visible:outline-indigo-500"
              >
                <FileText className="w-4 h-4 text-slate-400" />
                Resume
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-4 border-t border-slate-800/80">
              <span className="text-xs font-mono text-slate-500 uppercase tracking-wider">
                Connect:
              </span>
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/Darshan1355"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-2.5 rounded-lg bg-slate-900/80 hover:bg-indigo-600/20 text-slate-400 hover:text-indigo-400 border border-slate-800 hover:border-indigo-500/40 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-indigo-500"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://www.linkedin.com/in/darshan-amane-4722512ba?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-2.5 rounded-lg bg-slate-900/80 hover:bg-indigo-600/20 text-slate-400 hover:text-indigo-400 border border-slate-800 hover:border-indigo-500/40 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-indigo-500"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href="mailto:darshanamane083@gmail.com"
                  aria-label="Send Email"
                  className="p-2.5 rounded-lg bg-slate-900/80 hover:bg-indigo-600/20 text-slate-400 hover:text-indigo-400 border border-slate-800 hover:border-indigo-500/40 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-indigo-500"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Abstract Developer Terminal Visual */}
          <div className="lg:col-span-5 flex justify-center animate-fade-in">
            <div className="w-full max-w-md bg-slate-900/90 rounded-2xl border border-slate-800 shadow-2xl overflow-hidden backdrop-blur-xl group hover:border-indigo-500/40 transition-all duration-300">
              
              {/* Terminal Window Header */}
              <div className="px-4 py-3 bg-slate-950/80 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                  <Terminal className="w-3.5 h-3.5 text-indigo-400" />
                  <span>developer.config.ts</span>
                </div>
                <div className="w-4" />
              </div>

              {/* Terminal Snippet Body */}
              <div className="p-5 font-mono text-xs space-y-3 leading-relaxed text-slate-300">
                <div className="text-slate-500">// Developer Profile & Architecture</div>
                <div>
                  <span className="text-purple-400">const</span>{" "}
                  <span className="text-indigo-300">developer</span> = &#123;
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">role:</span>{" "}
                  <span className="text-emerald-400">"{personal.title}"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">coreStack:</span> [
                  <span className="text-amber-300">"Next.js"</span>,{" "}
                  <span className="text-amber-300">"Python"</span>,{" "}
                  <span className="text-amber-300">"AI/ML"</span>,{" "}
                  <span className="text-amber-300">"TypeScript"</span>
                  ],
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">focus:</span>{" "}
                  <span className="text-emerald-400">"Scalable Web & AI Systems"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">status:</span>{" "}
                  <span className="text-emerald-400">"Ready for Impact"</span>
                </div>
                <div>&#125;;</div>

                <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="flex items-center gap-1 text-emerald-400 font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Systems Operational
                  </span>
                  <span className="text-slate-500">Next.js 15 • React 19</span>
                </div>
              </div>

              {/* Bottom Feature Badges */}
              <div className="p-4 bg-slate-950/60 border-t border-slate-800/80 grid grid-cols-2 gap-2 text-center text-xs">
                <div className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800">
                  <p className="font-mono font-bold text-slate-200">100% Modern</p>
                  <p className="text-[10px] text-slate-500">App Router & Tailwind v4</p>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800">
                  <p className="font-mono font-bold text-slate-200">Production Ready</p>
                  <p className="text-[10px] text-slate-500">Optimized Performance</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
