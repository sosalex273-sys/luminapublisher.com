"use client";

import { motion } from "framer-motion";
import { MapPin, Phone } from "lucide-react";
import { Button } from "./ui/button";

export const Contact = () => {
  return (
    <section id="kontak" className="py-12 md:py-24 lg:py-32 bg-slate-950 text-slate-100 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold font-jakarta text-white mb-4 leading-tight">
            Hubungi Kami
          </h2>
          <p className="text-sm md:text-lg text-slate-300 max-w-2xl mx-auto">
            Tim konsultan LUMINA PUBLISHER siap memberikan pendampingan publikasi ilmiah terbaik untuk Anda.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-slate-900 border border-slate-800 rounded-3xl p-8 md:p-12 shadow-2xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <div className="flex items-start gap-4">
              <div className="bg-red-500/10 p-3.5 rounded-2xl text-red-500 mt-1 shrink-0">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-bold text-white text-lg mb-1 font-jakarta">Domisili</h4>
                <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                  4HW3+7FQ, Penambangan, Kec. Sedong, Kabupaten Cirebon, Jawa Barat 45189, Indonesia
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-red-500/10 p-3.5 rounded-2xl text-red-500 mt-1 shrink-0">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-bold text-white text-lg mb-1 font-jakarta">Telepon & WhatsApp</h4>
                <p className="text-slate-300 text-sm md:text-base leading-relaxed">+62 857-9612-3601</p>
              </div>
            </div>
          </div>

          <div className="mt-10 pt-8 border-t border-slate-800 text-center">
            <Button
              size="lg"
              className="rounded-full px-8 py-3.5 text-base font-bold bg-gradient-to-r from-red-600 via-rose-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white border border-amber-400/50 shadow-lg shadow-red-600/30"
              onClick={() => window.open("https://wa.me/6285796123601", "_blank")}
            >
              Konsultasi Sekarang via WhatsApp
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
