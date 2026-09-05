"use client";

import { portfolioData } from "@/data/portfolio";
import { Award, ExternalLink, Sparkles, CheckCircle } from "lucide-react";

export default function Certifications() {
  const { certifications } = portfolioData;
  const hasValidCertifications = certifications.some(
    (c) => c.title && !c.title.includes("[ADD")
  );

  return (
    <section className="py-20 relative border-t border-slate-800/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            Verified Skills
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            Certifications & Credentials
          </h2>
          <p className="text-base text-slate-400 max-w-2xl">
            Industry achievements and continuous learning verification.
          </p>
        </div>

        {/* Certifications Grid or Graceful Empty State */}
        {hasValidCertifications ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {certifications.map((cert) => (
              <div
                key={cert.id}
                className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800/80 hover:border-indigo-500/40 transition-all duration-300 shadow-lg flex flex-col justify-between space-y-4 group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-indigo-600/10 border border-indigo-500/20 text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                    <Award className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-base font-bold text-slate-100 group-hover:text-indigo-300 transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-xs font-mono text-slate-400">
                      {cert.issuer} • {cert.issueDate}
                    </p>
                    {cert.credentialId && (
                      <p className="text-[11px] font-mono text-slate-500">
                        ID: {cert.credentialId}
                      </p>
                    )}
                  </div>
                </div>

                {cert.credentialUrl && cert.credentialUrl !== "https://[ADD CREDENTIAL URL]" && (
                  <div className="pt-3 border-t border-slate-800 flex justify-end">
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition-colors"
                    >
                      Verify Credential
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          /* Graceful Placeholder Card Ready for User Content */
          <div className="p-8 rounded-2xl bg-slate-900/40 border border-dashed border-slate-800 max-w-xl mx-auto text-center space-y-3">
            <div className="w-12 h-12 rounded-full bg-slate-800/80 border border-slate-700/50 flex items-center justify-center text-slate-400 mx-auto">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-slate-300">
              Certifications Ready to Update
            </h3>
            <p className="text-xs text-slate-500 max-w-md mx-auto">
              Certifications data structure is configured in <code className="text-indigo-400 font-mono">data/portfolio.ts</code>. You can easily add your Coursera, AWS, or technical certifications anytime.
            </p>
          </div>
        )}

      </div>
    </section>
  );
}
