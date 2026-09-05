"use client";

import { portfolioData } from "@/data/portfolio";
import { FileText, Download, ExternalLink, Sparkles, CheckCircle2 } from "lucide-react";

export default function Resume() {
  const { personal } = portfolioData;

  return (
    <section className="py-20 relative border-t border-slate-800/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 border border-slate-800 shadow-2xl relative overflow-hidden group hover:border-indigo-500/40 transition-all duration-300">
          
          {/* Subtle Accent Radial Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none group-hover:bg-indigo-600/20 transition-colors" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Text & Features */}
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono uppercase tracking-widest">
                <Sparkles className="w-3.5 h-3.5" />
                Resume & Profile Summary
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100 tracking-tight">
                Looking for Detailed Professional Qualifications?
              </h2>

              <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-xl">
                Download my complete resume for a detailed breakdown of technical skillsets, project implementations, education, and career experience.
              </p>

              <div className="flex flex-wrap gap-4 text-xs font-mono text-slate-400 pt-2">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Recruiter-Friendly Format
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400" /> PDF Document
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-sky-400" /> Updated Regularly
                </span>
              </div>
            </div>

            {/* Right Column: CTA Buttons */}
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <a
                href={personal.resumeUrl}
                download
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-6 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm flex items-center justify-center gap-2.5 shadow-lg shadow-indigo-600/25 transition-all duration-200 hover:-translate-y-0.5"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </a>

              <a
                href={personal.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-6 rounded-xl bg-slate-800/80 hover:bg-slate-800 text-slate-200 border border-slate-700/60 font-semibold text-sm flex items-center justify-center gap-2.5 transition-all duration-200 hover:-translate-y-0.5"
              >
                <ExternalLink className="w-4 h-4 text-slate-400" />
                View Document ↗
              </a>
            </div>

          </div>

          <div className="relative z-10 mt-10 overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 shadow-xl">
            <iframe
              src={personal.resumeUrl}
              title="Darshan Amane resume"
              className="h-[32rem] w-full sm:h-[44rem]"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
