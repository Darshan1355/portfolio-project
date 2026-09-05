"use client";

import { useState } from "react";
import { portfolioData, ProjectItem } from "@/data/portfolio";
import { ExternalLink, Sparkles, CheckCircle2, FolderGit2 } from "lucide-react";
import { GithubIcon } from "@/components/Icons";
import Image from "next/image";

export default function Projects() {
  const { projects } = portfolioData;
  const featuredProjects = projects.filter((p) => p.featured);
  const secondaryProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 relative border-t border-slate-800/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            Portfolio Showcase
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            Featured Software Projects
          </h2>
          <p className="text-base text-slate-400 max-w-2xl">
            A selection of practical applications, AI integrations, and full-stack engineering builds.
          </p>
        </div>

        {/* Featured Projects Spotlight (Large Cards) */}
        <div className="space-y-12 mb-16">
          {featuredProjects.map((project, index) => (
            <FeaturedProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Secondary Projects Grid */}
        {secondaryProjects.length > 0 && (
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <h3 className="text-xl font-bold text-slate-100">
                Other Notable Engineering Projects
              </h3>
              <div className="h-px bg-slate-800 flex-1" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {secondaryProjects.map((project) => (
                <SecondaryProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}

{/* Featured Project Spotlight Component */}
function FeaturedProjectCard({ project, index }: { project: ProjectItem; index: number }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="rounded-2xl bg-slate-900/80 border border-slate-800/80 hover:border-indigo-500/40 transition-all duration-300 overflow-hidden shadow-xl shadow-black/20 group grid grid-cols-1 lg:grid-cols-12 gap-0">
      
      {/* Visual Container / Screenshot / SVG Fallback */}
      <div className={`lg:col-span-6 relative bg-slate-950 p-6 sm:p-8 flex items-center justify-center border-b lg:border-b-0 ${index % 2 === 1 ? 'lg:order-last lg:border-l' : 'lg:border-r'} border-slate-800/80`}>
        <div className="relative w-full min-h-[260px] sm:min-h-[320px] rounded-xl bg-slate-900/90 border border-slate-800 overflow-hidden flex flex-col items-center justify-center p-6 text-center group-hover:border-indigo-500/30 transition-colors">
          
          {project.imageUrl && !imgError ? (
            <Image
              src={project.imageUrl}
              alt={project.title}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500 rounded-xl"
              onError={() => setImgError(true)}
            />
          ) : (
            /* Styled Abstract Tech Visual Placeholder */
            <div className="space-y-4 max-w-xs animate-float">
              <div className="w-16 h-16 rounded-2xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400 mx-auto shadow-inner">
                <FolderGit2 className="w-8 h-8" />
              </div>
              <div className="space-y-1">
                <p className="font-mono text-sm font-bold text-slate-200">{project.title}</p>
                <p className="text-xs text-slate-500">{project.category}</p>
              </div>
              <div className="flex flex-wrap justify-center gap-1.5 pt-2">
                {project.technologies.slice(0, 4).map((tech) => (
                  <span key={tech} className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-800 text-slate-400">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>

      {/* Details Area */}
      <div className="lg:col-span-6 p-6 sm:p-8 flex flex-col justify-between space-y-6">
        <div className="space-y-4">
          <div className="flex items-center justify-between gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-mono bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
              {project.category}
            </span>
            <span className="text-xs font-mono text-slate-500">Featured Build</span>
          </div>

          <h3 className="text-2xl font-bold text-slate-100 group-hover:text-indigo-300 transition-colors">
            {project.title}
          </h3>

          <p className="text-sm text-slate-400 leading-relaxed">
            {project.shortDescription}
          </p>

          {/* Problem & Solution Breakdown */}
          <div className="space-y-2 text-xs bg-slate-950/60 p-4 rounded-xl border border-slate-800/80">
            <div>
              <span className="font-mono text-indigo-400 font-semibold">Problem: </span>
              <span className="text-slate-300">{project.problem}</span>
            </div>
            <div>
              <span className="font-mono text-emerald-400 font-semibold">Solution: </span>
              <span className="text-slate-300">{project.solution}</span>
            </div>
          </div>

          {/* Key Features List */}
          <div className="space-y-1.5 pt-1">
            <p className="text-xs font-mono uppercase tracking-widest text-slate-500 font-semibold">
              Key Features:
            </p>
            <ul className="space-y-1 text-xs text-slate-400">
              {project.keyFeatures.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Tech Stack & Links Footer */}
        <div className="space-y-4 pt-4 border-t border-slate-800">
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-md text-xs font-mono text-slate-300 bg-slate-800/70 border border-slate-700/50"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-4 pt-2">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700/60 transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
              Source Code ↗
            </a>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold bg-indigo-600 hover:bg-indigo-500 text-white shadow-md transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                Live Demo ↗
              </a>
            )}
          </div>
        </div>

      </div>

    </div>
  );
}

{/* Secondary Project Card Component */}
function SecondaryProjectCard({ project }: { project: ProjectItem }) {
  return (
    <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800/80 hover:border-indigo-500/40 transition-all duration-300 flex flex-col justify-between space-y-4 group shadow-lg">
      <div className="space-y-3">
        <div className="flex items-center justify-between gap-2">
          <span className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-slate-800 text-slate-400">
            {project.category}
          </span>
          <div className="flex items-center gap-2">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Repo"
              className="p-1.5 text-slate-400 hover:text-indigo-400 transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Live Demo"
                className="p-1.5 text-slate-400 hover:text-indigo-400 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>

        <h4 className="text-lg font-bold text-slate-100 group-hover:text-indigo-300 transition-colors">
          {project.title}
        </h4>

        <p className="text-xs text-slate-400 leading-relaxed">
          {project.shortDescription}
        </p>
      </div>

      <div className="pt-4 border-t border-slate-800/80 flex flex-wrap gap-1.5">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="px-2 py-0.5 rounded text-[10px] font-mono text-slate-400 bg-slate-800/50 border border-slate-700/40"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
