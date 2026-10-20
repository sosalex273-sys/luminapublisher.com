"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { MessageCircle } from "lucide-react";

export const CTA = () => {
  return (
    <section className="py-12 md:py-24 bg-slate-900 relative overflow-hidden">
      {/* Dynamic Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 z-0" />
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-red-600/20 rounded-full blur-[100px] pointer-events-none z-0" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-amber-500/15 rounded-full blur-[100px] pointer-events-none z-0" />

      <div className="container relative z-10 mx-auto px-4 md:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold font-jakarta text-white mb-4 md:mb-6 leading-tight">
            Siap Menerbitkan Naskah Anda Hari Ini?
          </h2>
          <p className="text-sm md:text-xl text-white/90 mb-8 md:mb-10 max-w-2xl mx-auto">
            Konsultasikan kebutuhan publikasi Anda secara gratis dengan tim ahli kami. Kami siap memandu Anda langkah demi langkah.
          </p>
          
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-red-600 via-rose-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white rounded-full h-16 px-10 text-lg font-black border border-amber-400/50 shadow-[0_0_40px_-5px_rgba(220,38,38,0.55)] hover:scale-105 transition-all duration-300 gap-3"
            onClick={() => window.open('https://wa.me/6285796123601', '_blank')}
          >
            <MessageCircle className="h-6 w-6" />
            Hubungi via WhatsApp
          </Button>
          
          <p className="text-sm text-slate-400 mt-6">
            Layanan Pelanggan 24/7. Respons cepat di jam kerja.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
