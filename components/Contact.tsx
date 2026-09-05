"use client";

import { useState } from "react";
import { portfolioData } from "@/data/portfolio";
import { Mail, Send, Sparkles, CheckCircle2, MessageSquare } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";

export default function Contact() {
  const { personal } = portfolioData;
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setSubmitError("");

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${personal.email}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `Portfolio Inquiry from ${formData.name}`,
          _template: "table",
          _captcha: "false",
        }),
      });

      const result = await response.json().catch(() => null);
      if (!response.ok || (result?.success !== true && result?.success !== "true")) {
        throw new Error("Message service rejected the request");
      }

      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
    } catch {
      setSubmitError("Your message could not be sent. Please try again or email me directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative bg-slate-950/40 border-t border-slate-800/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            Let's Connect & Build Together
          </h2>
          <p className="text-base text-slate-400 max-w-2xl">
            Interested in software development roles, AI collaborations, or full-stack projects? Feel free to reach out.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-2xl bg-slate-900/80 border border-slate-800/80 space-y-6 shadow-xl">
              <h3 className="text-xl font-bold text-slate-100 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-indigo-400" />
                Contact Information
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Whether you have a job opportunity, a technical project query, or just want to connect, I'd love to hear from you.
              </p>

              <div className="space-y-4 pt-2">
                {/* Email Item */}
                <a
                  href="mailto:darshanamane083@gmail.com"
                  className="flex items-center gap-3.5 p-3.5 rounded-xl bg-slate-800/50 border border-slate-700/40 hover:border-indigo-500/40 hover:bg-slate-800 text-slate-300 hover:text-white transition-all group"
                >
                  <div className="p-2.5 rounded-lg bg-indigo-600/10 border border-indigo-500/20 text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[11px] font-mono text-slate-500 uppercase">Email Address</p>
                    <p className="text-sm font-semibold text-slate-200">darshanamane083@gmail.com</p>
                  </div>
                </a>

                {/* GitHub Item */}
                <a
                  href="https://github.com/Darshan1355"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 p-3.5 rounded-xl bg-slate-800/50 border border-slate-700/40 hover:border-indigo-500/40 hover:bg-slate-800 text-slate-300 hover:text-white transition-all group"
                >
                  <div className="p-2.5 rounded-lg bg-slate-700/30 border border-slate-600/30 text-slate-300 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                    <GithubIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[11px] font-mono text-slate-500 uppercase">GitHub Profile</p>
                    <p className="text-sm font-semibold text-slate-200">Darshan1355</p>
                  </div>
                </a>

                {/* LinkedIn Item */}
                <a
                  href="https://www.linkedin.com/in/darshan-amane-4722512ba?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 p-3.5 rounded-xl bg-slate-800/50 border border-slate-700/40 hover:border-indigo-500/40 hover:bg-slate-800 text-slate-300 hover:text-white transition-all group"
                >
                  <div className="p-2.5 rounded-lg bg-sky-600/10 border border-sky-500/20 text-sky-400 group-hover:bg-sky-600 group-hover:text-white transition-colors">
                    <LinkedinIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[11px] font-mono text-slate-500 uppercase">LinkedIn</p>
                    <p className="text-sm font-semibold text-slate-200">Darshan Amane</p>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-2xl bg-slate-900/80 border border-slate-800/80 shadow-xl space-y-6">
              <h3 className="text-xl font-bold text-slate-100">
                Send a Message
              </h3>

              {submitted ? (
                <div className="p-6 rounded-xl bg-emerald-950/60 border border-emerald-500/30 text-center space-y-3 animate-fade-in">
                  <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                  <h4 className="text-lg font-bold text-emerald-200">Message Client Prepared!</h4>
                  <p className="text-xs text-slate-300 max-w-md mx-auto">
                    Your message has been formatted and directed to your email client. You can also contact directly via <a href={`mailto:${personal.email}`} className="text-emerald-400 underline">{personal.email}</a>.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-4 py-2 text-xs font-mono text-slate-300 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {submitError && (
                    <p role="alert" className="rounded-xl border border-red-500/30 bg-red-950/40 px-4 py-3 text-sm text-red-200">
                      {submitError}
                    </p>
                  )}
                  <div>
                    <label htmlFor="name" className="block text-xs font-mono text-slate-400 mb-1.5">
                      Your Name *
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="e.g. Alex Smith"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 placeholder-slate-600 focus:outline-none focus:border-indigo-500 text-sm transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-mono text-slate-400 mb-1.5">
                      Your Email *
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="e.g. alex@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 placeholder-slate-600 focus:outline-none focus:border-indigo-500 text-sm transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-mono text-slate-400 mb-1.5">
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      required
                      placeholder="Write your message here..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 placeholder-slate-600 focus:outline-none focus:border-indigo-500 text-sm transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/25 transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-indigo-500"
                  >
                    <Send className="w-4 h-4" />
                    {isSubmitting ? "Sending Message..." : "Send Message"}
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
