"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

export const Advantages = () => {
  return (
    <section className="py-20 md:py-32 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-jakarta text-slate-900 dark:text-white mb-6 leading-tight">
              Kualitas Standar <span className="text-amber-600 dark:text-amber-400">Internasional</span> untuk Naskah Anda
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
              Tim editor dan proofreader kami terdiri dari native speaker dan akademisi berpengalaman yang memahami struktur, gaya bahasa, dan kriteria ketat publisher global.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Plagiarism & AI Check Bebas Kuota",
                "Reviewer Minimal Lulusan S3/Ph.D",
                "Formatting Mendeley / EndNote",
                "Garansi Revisi Bahasa 1x"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm">
                  <div className="mt-0.5 bg-green-100 dark:bg-green-950/50 p-1 rounded-full text-green-600 dark:text-green-400 flex-shrink-0">
                    <Check className="h-4 w-4" />
                  </div>
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-200">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 relative"
          >
             <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800 bg-slate-200 dark:bg-slate-800">
               <img
                 src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop"
                 alt="Tim Profesional dan Kualitas Internasional"
                 className="w-full h-auto object-cover aspect-[4/3]"
               />
             </div>
             {/* Decorative blob */}
             <div className="absolute -z-10 -bottom-10 -right-10 w-64 h-64 bg-amber-500/20 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
