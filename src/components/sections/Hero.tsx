"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const FORM_URL =
  "https://docs.google.com/forms/d/146Ox8lYQQvzyhoNOalwBxFFYXNjJ0biDP72s0Zxb8_s/viewform?edit_requested=true";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function Hero() {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    setReducedMotion(mq.matches);
    const h = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", h);
    return () => mq.removeEventListener("change", h);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen md:min-h-[1024px] bg-[#E2E8F6] flex flex-col overflow-x-hidden"
    >
      {/* ── NavBar ── */}
      <nav className="relative z-30 w-full">
        <div className="max-w-[1440px] mx-auto h-16 md:h-20 flex items-center justify-between px-4 md:px-8">
          <a
            href="#hero"
            className="font-[var(--font-body)] text-base md:text-xl font-extrabold uppercase text-[#1A237E]"
          >
            BEFORE S2EE
          </a>

          <div className="hidden md:flex gap-6 lg:gap-8 items-center">
            <a
              href="#discovery"
              className="font-[var(--font-heading)] text-sm font-semibold text-[#1A237E] border-b-2 border-[#7986CB] pb-1.5"
            >
              Discovery
            </a>
            <a
              href="#agenda"
              className="font-[var(--font-heading)] text-sm font-semibold text-[#1A237E]/60 hover:text-[#1A237E] transition-colors"
            >
              Agenda
            </a>
            <a
              href="#faq"
              className="font-[var(--font-heading)] text-sm font-semibold text-[#1A237E]/60 hover:text-[#1A237E] transition-colors"
            >
              FAQ
            </a>
          </div>

          <a
            href={FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#1A237E] text-white font-[var(--font-body)] font-bold text-xs md:text-sm px-4 md:px-6 py-2.5 md:py-3 hover:bg-[#0d1557] transition-colors"
          >
            Inscrivez-vous
          </a>
        </div>
      </nav>

      {/* ── Hero body ── */}
      <div className="flex-1 flex items-center relative">
        {/* ── Wireframe grid ── */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(121,134,203,0.15) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(121,134,203,0.15) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />

        {/* ── Accent grid lines — desktop only ── */}
        <div className="absolute inset-0 pointer-events-none hidden md:block">
          <div className="absolute left-[8%] top-[15%] bottom-[20%] w-px bg-[#7986CB]/50" />
          <div className="absolute left-[52%] top-[12%] bottom-[22%] w-px bg-[#7986CB]/50" />
          <div className="absolute left-[5%] right-[48%] top-[22%] h-px bg-[#7986CB]/50" />
          <div className="absolute left-[8%] right-[40%] top-[52%] h-px bg-[#7986CB]/50" />
        </div>

        {/* ── Content ── */}
        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 md:px-8 lg:px-20">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="flex flex-col gap-4 md:gap-6 max-w-full md:max-w-[700px]"
          >
            {/* Edition badge */}
            <motion.div variants={fadeUp} className="flex items-center gap-2 md:gap-3">
              <span className="font-[var(--font-heading)] text-xs md:text-sm font-bold uppercase tracking-[0.15em] md:tracking-[0.2em] text-[#7986CB]">
                Édition :
              </span>
              <span className="font-[var(--font-heading)] text-xs md:text-sm font-extrabold uppercase tracking-[0.15em] md:tracking-[0.2em] text-[#1A237E]">
                S2EE 17
              </span>
            </motion.div>

            {/* Main title */}
            <motion.h1
              variants={fadeUp}
              className="font-[var(--font-heading)] text-5xl sm:text-6xl md:text-7xl lg:text-[96px] font-extrabold leading-[0.95] tracking-[0.02em] text-[#1A237E]"
            >
              BEFORE
              <br />
              S2EE
            </motion.h1>

            {/* Pick-up line */}
            <motion.p
              variants={fadeUp}
              className="font-[var(--font-body)] text-base md:text-lg lg:text-[20px] leading-relaxed text-[#1A237E]/70 max-w-full md:max-w-[520px]"
            >
              Immergez avec nous dans le monde professionnel.
            </motion.p>

            {/* Sub-description */}
            <motion.p
              variants={fadeUp}
              className="font-[var(--font-body)] text-sm md:text-base leading-relaxed text-[#7986CB] max-w-full md:max-w-[480px]"
            >
              Préparez-vous à décrocher votre premier emploi, stage ou PFE
              grâce à une journée d&apos;accompagnement exclusif.
            </motion.p>

            {/* Buttons — stacked full-width on mobile, side-by-side on desktop */}
            <motion.div
              variants={fadeUp}
              className="flex flex-col md:flex-row gap-3 md:gap-4 pt-2 md:pt-4 w-full md:w-auto"
            >
              <a
                href={FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#1A237E] text-white font-[var(--font-body)] font-bold text-sm md:text-sm px-6 md:px-8 py-3.5 md:py-[17px] hover:bg-[#0d1557] transition-colors text-center w-full md:w-auto"
              >
                Inscrivez-vous
              </a>
              <a
                href="#agenda"
                className="border-2 border-[#1A237E] text-[#1A237E] font-[var(--font-body)] font-bold text-sm px-6 md:px-8 py-3.5 md:py-[17px] hover:bg-[#1A237E]/5 transition-colors text-center w-full md:w-auto"
              >
                Découvrez notre agenda
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* ── Organic blob — scaled down on mobile ── */}
        <motion.div
          className="absolute bottom-[-20px] md:bottom-[-40px] right-0 pointer-events-none z-0"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
        >
          <motion.svg
            width="720"
            height="720"
            viewBox="0 0 720 720"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[260px] sm:w-[340px] md:w-[500px] lg:w-[720px] h-auto"
            animate={reducedMotion ? {} : { y: [0, -8, 0] }}
            transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
          >
            <path
              d="M720 720V380C720 380 650 280 580 200C510 120 440 80 380 40C320 0 260 -20 200 20C140 60 100 140 80 220C60 300 40 380 20 460C0 540 0 620 0 720H720Z"
              fill="#1A237E"
            />
            <path
              d="M720 340C720 340 640 280 560 260C480 240 420 280 360 320C300 360 240 400 180 420C120 440 60 440 0 420"
              stroke="#FFF3E0"
              strokeWidth="48"
              strokeLinecap="round"
              fill="none"
              opacity="0.9"
            />
            <path
              d="M720 400C720 400 650 350 580 330C510 310 450 340 390 370C330 400 270 440 210 460C150 480 80 490 0 480"
              stroke="#FFF3E0"
              strokeWidth="12"
              strokeLinecap="round"
              fill="none"
              opacity="0.5"
            />
          </motion.svg>
        </motion.div>

        {/* ── Glass date badge ── */}
        <motion.div
          className="absolute bottom-[60px] right-4 md:bottom-[120px] md:right-[80px] lg:right-[140px] z-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 1 }}
        >
          <div className="backdrop-blur-[16px] bg-white/20 border border-white/30 px-5 py-3 md:px-8 md:py-4 shadow-lg">
            <span className="font-[var(--font-heading)] text-sm md:text-base font-bold tracking-[0.1em] md:tracking-[0.15em] text-white">
              LE 9 MAI 2026
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
