"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, ExternalLink, BookOpen } from "lucide-react";

interface PortfolioItem {
  id: number;
  category: "sinta-2" | "sinta-4" | "sinta-5" | "internasional" | "issn";
  scope: string;
  scopeSubtitle: string;
  title: string;
  description: string;
  link: string;
  badgeLabel: string;
  color: {
    accent: string;
    border: string;
    corner: string;
    badge: string;
    glow: string;
  };
}

export const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "Semua (10)" },
    { id: "sinta-2", label: "Sinta 2" },
    { id: "sinta-4", label: "Sinta 4" },
    { id: "sinta-5", label: "Sinta 5" },
    { id: "internasional", label: "Internasional" },
    { id: "issn", label: "Ber-ISSN" },
  ];

  const portfolios: PortfolioItem[] = [
    {
      id: 1,
      category: "sinta-4",
      scope: "SINTA 4",
      scopeSubtitle: "Jurnal Nasional Terakreditasi",
      title: "PUBLIKASI JURNAL NASIONAL TERAKREDITASI SINTA 4",
      description:
        "Selamat dan sukses atas keberhasilan publikasi artikel ilmiah pada Jurnal Nasional Terakreditasi SINTA 4. Semoga pencapaian ini menjadi motivasi untuk terus mengembangkan penelitian yang inovatif, berkualitas, dan memberikan kontribusi nyata bagi dunia akademik.",
      link: "https://ijsoc.goacademica.com/index.php/ijsoc/article/view/1803",
      badgeLabel: "Terakreditasi Sinta 4",
      color: {
        accent: "text-amber-400",
        border: "border-amber-400/40",
        corner: "border-amber-400",
        badge: "bg-amber-500/15 text-amber-700 dark:text-amber-300 border-amber-500/30",
        glow: "from-amber-500/20",
      },
    },
    {
      id: 2,
      category: "sinta-4",
      scope: "SINTA 4",
      scopeSubtitle: "Jurnal Nasional Terakreditasi",
      title: "PUBLIKASI JURNAL NASIONAL TERAKREDITASI SINTA 4",
      description:
        "Apresiasi dan ucapan selamat atas terbitnya artikel ilmiah pada Jurnal Nasional Terakreditasi SINTA 4. Semoga keberhasilan ini menjadi langkah strategis dalam meningkatkan rekam jejak akademik serta memperluas kontribusi keilmuan.",
      link: "https://influence-journal.com/index.php/influence/article/view/326",
      badgeLabel: "Terakreditasi Sinta 4",
      color: {
        accent: "text-amber-400",
        border: "border-amber-400/40",
        corner: "border-amber-400",
        badge: "bg-amber-500/15 text-amber-700 dark:text-amber-300 border-amber-500/30",
        glow: "from-amber-500/20",
      },
    },
    {
      id: 3,
      category: "sinta-5",
      scope: "SINTA 5",
      scopeSubtitle: "Jurnal Nasional Terakreditasi",
      title: "PUBLIKASI JURNAL NASIONAL TERAKREDITASI SINTA 5",
      description:
        "Selamat atas pencapaian publikasi karya ilmiah pada Jurnal Nasional Terakreditasi SINTA 5. Semoga hasil penelitian ini dapat memberikan manfaat, memperkaya literatur ilmiah, serta menjadi referensi bagi penelitian selanjutnya.",
      link: "https://idm.or.id/JSCR/index.php/JSCR/article/view/1724",
      badgeLabel: "Terakreditasi Sinta 5",
      color: {
        accent: "text-sky-400",
        border: "border-sky-400/40",
        corner: "border-sky-400",
        badge: "bg-sky-500/15 text-sky-700 dark:text-sky-300 border-sky-500/30",
        glow: "from-sky-500/20",
      },
    },
    {
      id: 4,
      category: "sinta-5",
      scope: "SINTA 5",
      scopeSubtitle: "Jurnal Nasional Terakreditasi",
      title: "PUBLIKASI JURNAL NASIONAL TERAKREDITASI SINTA 5",
      description:
        "Sebuah pencapaian yang patut diapresiasi! Selamat atas keberhasilan menerbitkan artikel ilmiah pada Jurnal Nasional Terakreditasi SINTA 5. Semoga prestasi ini menjadi awal dari perjalanan akademik yang semakin produktif dan berkelanjutan.",
      link: "https://idm.or.id/JSCR/index.php/JSCR/article/view/1724",
      badgeLabel: "Terakreditasi Sinta 5",
      color: {
        accent: "text-sky-400",
        border: "border-sky-400/40",
        corner: "border-sky-400",
        badge: "bg-sky-500/15 text-sky-700 dark:text-sky-300 border-sky-500/30",
        glow: "from-sky-500/20",
      },
    },
    {
      id: 5,
      category: "internasional",
      scope: "INTERNASIONAL",
      scopeSubtitle: "Terindeks Global",
      title: "PUBLIKASI JURNAL INTERNASIONAL TERINDEKS GLOBAL",
      description:
        "Selamat dan bangga atas keberhasilan publikasi artikel ilmiah pada Jurnal Internasional Terindeks Global. Pencapaian ini merupakan wujud dedikasi dalam mengembangkan ilmu pengetahuan sekaligus memperluas kontribusi penelitian pada lingkup internasional.",
      link: "https://endless-journal.com/index.php/endless/article/view/358",
      badgeLabel: "Terindeks Global",
      color: {
        accent: "text-purple-400",
        border: "border-purple-400/40",
        corner: "border-purple-400",
        badge: "bg-purple-500/15 text-purple-700 dark:text-purple-300 border-purple-500/30",
        glow: "from-purple-500/20",
      },
    },
    {
      id: 6,
      category: "issn",
      scope: "BER-ISSN",
      scopeSubtitle: "Jurnal Nasional Resmi",
      title: "PUBLIKASI JURNAL NASIONAL BER-ISSN",
      description:
        "Selamat atas keberhasilan penerbitan artikel ilmiah pada Jurnal Nasional ber-ISSN. Semoga publikasi ini menjadi bukti komitmen dalam menghasilkan karya akademik yang bermutu serta memberikan sumbangsih positif bagi perkembangan ilmu pengetahuan.",
      link: "https://ejournal.goacademica.com/index.php/jk/article/view/1069",
      badgeLabel: "Jurnal Ber-ISSN",
      color: {
        accent: "text-rose-400",
        border: "border-rose-400/40",
        corner: "border-rose-400",
        badge: "bg-rose-500/15 text-rose-700 dark:text-rose-300 border-rose-500/30",
        glow: "from-rose-500/20",
      },
    },
    {
      id: 7,
      category: "sinta-5",
      scope: "SINTA 5",
      scopeSubtitle: "Jurnal Nasional Terakreditasi",
      title: "PUBLIKASI JURNAL NASIONAL TERAKREDITASI SINTA 5",
      description:
        "Selamat dan apresiasi atas terbitnya artikel ilmiah pada Jurnal Nasional Terakreditasi SINTA 5. Semoga karya yang dipublikasikan dapat memberikan wawasan baru, memperkuat pengembangan keilmuan, dan memberikan manfaat bagi masyarakat.",
      link: "https://idm.or.id/JSCR/index.php/JSCR/article/view/1641",
      badgeLabel: "Terakreditasi Sinta 5",
      color: {
        accent: "text-sky-400",
        border: "border-sky-400/40",
        corner: "border-sky-400",
        badge: "bg-sky-500/15 text-sky-700 dark:text-sky-300 border-sky-500/30",
        glow: "from-sky-500/20",
      },
    },
    {
      id: 8,
      category: "internasional",
      scope: "INTERNASIONAL",
      scopeSubtitle: "Terindeks Global",
      title: "PUBLIKASI JURNAL INTERNASIONAL TERINDEKS GLOBAL",
      description:
        "Selamat atas pencapaian publikasi artikel ilmiah di tingkat internasional. Semoga keberhasilan ini semakin memperluas eksistensi akademik, meningkatkan reputasi penelitian, serta membuka peluang kolaborasi ilmiah di masa mendatang.",
      link: "https://endless-journal.com/index.php/endless/article/view/379",
      badgeLabel: "Terindeks Global",
      color: {
        accent: "text-purple-400",
        border: "border-purple-400/40",
        corner: "border-purple-400",
        badge: "bg-purple-500/15 text-purple-700 dark:text-purple-300 border-purple-500/30",
        glow: "from-purple-500/20",
      },
    },
    {
      id: 9,
      category: "sinta-4",
      scope: "SINTA 4",
      scopeSubtitle: "Jurnal Nasional Terakreditasi",
      title: "PUBLIKASI JURNAL NASIONAL TERAKREDITASI SINTA 4",
      description:
        "Selamat dan sukses atas diterbitkannya artikel ilmiah pada Jurnal Nasional Terakreditasi SINTA 4. Semoga pencapaian ini menjadi bentuk nyata dari dedikasi, konsistensi, dan komitmen dalam meningkatkan kualitas penelitian akademik.",
      link: "https://ejournal.goacademica.com/index.php/ja/article/view/1207",
      badgeLabel: "Terakreditasi Sinta 4",
      color: {
        accent: "text-amber-400",
        border: "border-amber-400/40",
        corner: "border-amber-400",
        badge: "bg-amber-500/15 text-amber-700 dark:text-amber-300 border-amber-500/30",
        glow: "from-amber-500/20",
      },
    },
    {
      id: 10,
      category: "sinta-2",
      scope: "SINTA 2",
      scopeSubtitle: "Jurnal Nasional Terakreditasi",
      title: "PUBLIKASI JURNAL NASIONAL TERAKREDITASI SINTA 2",
      description:
        "Selamat dan penghargaan setinggi-tingginya atas keberhasilan publikasi artikel ilmiah pada Jurnal Nasional Terakreditasi SINTA 2. Pencapaian membanggakan ini mencerminkan komitmen terhadap kualitas dan pengembangan riset akademik. Semoga menjadi inspirasi untuk terus menghasilkan karya ilmiah yang unggul dan berdampak luas.",
      link: "https://journal.staihubbulwathan.id/index.php/alishlah/article/view/4493",
      badgeLabel: "Terakreditasi Sinta 2",
      color: {
        accent: "text-emerald-400",
        border: "border-emerald-400/40",
        corner: "border-emerald-400",
        badge: "bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border-emerald-500/30",
        glow: "from-emerald-500/20",
      },
    },
  ];

  const filteredPortfolios =
    selectedCategory === "all"
      ? portfolios
      : portfolios.filter((item) => item.category === selectedCategory);

  return (
    <section id="portofolio" className="py-12 md:py-24 lg:py-32 bg-slate-50/60 dark:bg-slate-900 transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-10 md:mb-14"
        >
          <span className="inline-block px-3.5 py-1 bg-amber-500/10 text-amber-600 dark:text-amber-400 font-semibold text-xs md:text-sm rounded-full mb-3 border border-amber-500/20">
            Bukti Nyata Publikasi
          </span>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold font-jakarta text-slate-900 dark:text-white mb-4">
            Karya yang Telah Terbit
          </h2>
          <p className="text-sm md:text-lg text-slate-600 dark:text-slate-300">
            Jejak rekam keberhasilan kami dalam mengantarkan karya para akademisi menuju publikasi resmi.
          </p>
        </motion.div>

        {/* Filter Categories */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                selectedCategory === cat.id
                  ? "bg-slate-900 text-white dark:bg-white dark:text-slate-950 shadow-md scale-105"
                  : "bg-white text-slate-600 hover:bg-slate-100 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700/80 border border-slate-200 dark:border-slate-700"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Portfolios Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredPortfolios.map((item, index) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="group flex flex-col justify-between bg-white dark:bg-slate-800/90 rounded-2xl border border-slate-200 dark:border-slate-700/80 overflow-hidden shadow-sm hover:shadow-xl hover:border-amber-500/40 transition-all duration-300"
              >
                {/* Visual Certificate Frame */}
                <div className="relative p-7 sm:p-8 flex flex-col items-center justify-center text-center overflow-hidden min-h-[175px] bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
                  {/* Subtle radial glow matching category */}
                  <div
                    className={`absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] ${item.color.glow} via-transparent to-transparent opacity-70 pointer-events-none`}
                  />

                  {/* Frame Inset Border */}
                  <div
                    className={`absolute inset-3 rounded-xl border ${item.color.border} pointer-events-none transition-colors duration-300`}
                  />

                  {/* Frame Corner Accents */}
                  <div
                    className={`absolute top-2.5 left-2.5 w-3.5 h-3.5 border-t-2 border-l-2 ${item.color.corner} pointer-events-none`}
                  />
                  <div
                    className={`absolute top-2.5 right-2.5 w-3.5 h-3.5 border-t-2 border-r-2 ${item.color.corner} pointer-events-none`}
                  />
                  <div
                    className={`absolute bottom-2.5 left-2.5 w-3.5 h-3.5 border-b-2 border-l-2 ${item.color.corner} pointer-events-none`}
                  />
                  <div
                    className={`absolute bottom-2.5 right-2.5 w-3.5 h-3.5 border-b-2 border-r-2 ${item.color.corner} pointer-events-none`}
                  />

                  {/* Watermark Icon */}
                  <BookOpen className="absolute -right-3 -bottom-3 w-24 h-24 text-white/[0.03] pointer-events-none group-hover:scale-110 transition-transform duration-500" />

                  {/* Frame Center Content */}
                  <div className="relative z-10 flex flex-col items-center justify-center">
                    <Award className={`w-5 h-5 mb-1.5 ${item.color.accent}`} />
                    <span
                      className={`text-2xl sm:text-3xl font-black font-jakarta tracking-wider ${item.color.accent} uppercase drop-shadow`}
                    >
                      {item.scope}
                    </span>
                    <span className="text-[10px] sm:text-[11px] font-semibold tracking-widest text-slate-300/90 uppercase mt-1">
                      {item.scopeSubtitle}
                    </span>
                  </div>
                </div>

                {/* Card Content & Action */}
                <div className="p-6 flex flex-col flex-1 justify-between gap-5">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-mono font-bold text-slate-400 dark:text-slate-500">
                        #{String(item.id).padStart(2, "0")}
                      </span>
                      <span
                        className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full border ${item.color.badge}`}
                      >
                        {item.badgeLabel}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold font-jakarta text-slate-900 dark:text-white leading-snug group-hover:text-red-600 dark:group-hover:text-amber-400 transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Publication Action Link Button */}
                  <div className="pt-2 border-t border-slate-100 dark:border-slate-700/60">
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl font-semibold text-xs sm:text-sm transition-all duration-300 shadow-sm hover:shadow-md text-white bg-slate-900 hover:bg-red-600 dark:bg-slate-700 dark:hover:bg-red-600 group/btn cursor-pointer"
                    >
                      <span>Lihat Publikasi</span>
                      <ExternalLink className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
