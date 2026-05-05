"use client";

import { useState, useEffect, useCallback } from "react";
import RevealOnScroll from "@/components/RevealOnScroll";

interface Speaker {
  name: string;
  photo?: string;
  role?: string;
}

interface AgendaItem {
  time: string;
  title: string;
  desc: string;
  speakers?: Speaker[];
  tags?: { label: string; accent?: boolean }[];
}

const agendaItems: AgendaItem[] = [
  {
    time: "8H30",
    title: "Check-in",
    desc: "Accueil des participants, vérification des inscriptions et remise des badges. Installez-vous et préparez-vous pour une journée riche en apprentissages.",
    tags: [{ label: "Accueil" }],
  },
  {
    time: "9H00",
    title: "Cérémonie d'ouverture",
    desc: "Mot de bienvenue par le club ETIC et présentation du déroulement de la journée. Découvrez la vision derrière Before S2EE et ce que cette édition vous réserve.",
    tags: [{ label: "Ouverture", accent: true }],
  },
  {
    time: "9H30",
    title: "Talk 1 — Comment se vendre sans expérience + stage d'ouvrier",
    desc: "Moussa Boussekine partage son parcours inspirant, les défis qu'il a relevés et les leçons clés qui l'ont mené au succès. Une conférence motivante pour lancer votre carrière.",
    speakers: [
      {
        name: "Moussa Boussekine",
        photo: "/moussaboussekine.webp",
        role: "Co-founder Nroho",
      },
    ],
    tags: [{ label: "Talk", accent: true }],
  },
  {
    time: "11H00",
    title: "Correction de CV",
    desc: "Ahmed Addala, expert en recrutement, analyse et corrige vos CV en direct. Apportez votre CV et repartez avec des conseils personnalisés pour le rendre irrésistible.",
    speakers: [{ name: "Ahmed Addala", photo: "/addala.PNG" }],
    tags: [{ label: "Workshop" }],
  },
  {
    time: "13H00 - 13H30",
    title: "Pause déjeuner",
    desc: "Profitez d'une pause bien méritée pour vous restaurer et réseauter avec les autres participants et intervenants dans une ambiance conviviale.",
    tags: [{ label: "Pause" }],
  },
  {
    time: "13H30",
    title: "Talk 2 — Partage d'expérience",
    desc: "Boukeha Mohamed Akram partage son expérience et ses conseils pratiques pour réussir votre insertion professionnelle. Un talk inspirant pour vous aider à tracer votre chemin. (En ligne)",
    speakers: [
      {
        name: "Boukeha Mohamed Akram",
        photo: "/boukehamohamedakram.webp",
        role: "En ligne",
      },
    ],
    tags: [
      { label: "Talk", accent: true },
      { label: "En ligne", accent: true },
    ],
  },
  {
    time: "15H00",
    title: "Simulation d'entretien",
    desc: "Mettez-vous en conditions réelles face à Aimen Khelifati et Ahmed Addala. Entraînez-vous, recevez un feedback constructif et gagnez en confiance pour vos futurs entretiens.",
    speakers: [
      { name: "Aimen Khelifati", photo: "/aimenkhelifati.jpg" },
      { name: "Ahmed Addala", photo: "/addala.PNG" },
    ],
    tags: [{ label: "Workshop", accent: true }],
  },
  {
    time: "17H00",
    title: "Cérémonie de clôture",
    desc: "Synthèse de la journée, remerciements et annonce des prochaines étapes. Repartez avec des outils concrets, un réseau élargi et une vision claire pour votre avenir professionnel.",
    tags: [{ label: "Clôture", accent: true }],
  },
];

function SpeakerAvatar({ speaker }: { speaker: Speaker }) {
  const hasPhoto = !!speaker.photo;
  return (
    <div className="flex flex-col items-center gap-2 md:gap-3">
      {hasPhoto ? (
        <div className="w-[96px] h-[96px] sm:w-[110px] sm:h-[110px] md:w-[130px] md:h-[130px] lg:w-[150px] lg:h-[150px] overflow-hidden bg-white/5 ring-2 ring-white/10">
          <img
            alt={speaker.name}
            src={speaker.photo}
            className="w-full h-full object-cover"
          />
        </div>
      ) : (
        <div className="w-[96px] h-[96px] sm:w-[110px] sm:h-[110px] md:w-[130px] md:h-[130px] lg:w-[150px] lg:h-[150px] bg-white/5 border border-white/10 flex items-center justify-center">
          <span className="font-[var(--font-heading)] text-2xl sm:text-3xl md:text-4xl font-bold text-white/30">
            {speaker.name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </span>
        </div>
      )}
      <span className="font-[var(--font-body)] text-sm sm:text-base md:text-lg font-semibold text-white text-center">
        {speaker.name}
      </span>
      {speaker.role && (
        <span className="font-[var(--font-body)] text-xs sm:text-sm text-white/50 -mt-1">
          {speaker.role}
        </span>
      )}
    </div>
  );
}

function DetailContent({ item }: { item: AgendaItem }) {
  return (
    <>
      {item.speakers && item.speakers.length > 0 && (
        <div className="flex gap-4 sm:gap-6 md:gap-8 justify-center items-start flex-wrap">
          {item.speakers.map((s) => (
            <SpeakerAvatar key={s.name} speaker={s} />
          ))}
        </div>
      )}
      <h4 className="font-[var(--font-heading)] text-lg sm:text-xl md:text-[24px] lg:text-[28px] font-semibold leading-[26px] sm:leading-[30px] md:leading-[32px] lg:leading-[36px] text-white">
        {item.title}
      </h4>
      <p className="font-[var(--font-body)] text-sm sm:text-base leading-6 text-white/70 max-w-[480px]">
        {item.desc}
      </p>
      {item.tags && (
        <div className="flex gap-2 md:gap-3 justify-center flex-wrap">
          {item.tags.map((tag) => (
            <span
              key={tag.label}
              className={`text-[10px] sm:text-xs md:text-sm uppercase px-2 sm:px-3 md:px-4 py-1 md:py-1.5 font-[var(--font-body)] ${
                tag.accent
                  ? "glass-panel text-[#FFEDD1]"
                  : "backdrop-blur-md bg-white/5 border border-white/10 text-white/60"
              }`}
            >
              {tag.label}
            </span>
          ))}
        </div>
      )}
    </>
  );
}

export default function Agenda() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    setIsMobile(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const toggleExpand = useCallback(
    (i: number) => {
      setExpandedIndex((prev) => (prev === i ? null : i));
    },
    [],
  );

  return (
    <section
      id="agenda"
      className="section-overlap relative min-h-[1372.78px] overflow-hidden"
    >
      <div className="figma-mask agenda-mask absolute inset-0 bg-[#1A2478] py-20 md:py-[160px] px-[4px]">
        <div className="absolute inset-0 mix-blend-overlay opacity-25 pointer-events-none">
          <img alt="" src="/figma/agenda-noise.svg" className="h-[1288px] w-[1288px] max-w-none" />
        </div>

        <div className="relative z-10 max-w-[1280px] mx-auto px-4 md:px-8 flex flex-col gap-10 md:gap-16">
          <RevealOnScroll className="mx-auto flex max-w-[768px] flex-col gap-2 sm:gap-3 md:gap-[14.8px] pb-6 sm:pb-8 md:pb-16 text-center">
            <h2 className="font-[var(--font-heading)] text-2xl sm:text-3xl md:text-[42px] lg:text-[48px] font-bold leading-[1.2] text-[#7B87D9]">
              Agenda & Intervenants — S2EE 17
            </h2>
            <p className="font-[var(--font-body)] text-xs sm:text-sm md:text-base leading-relaxed text-white/80">
              {isMobile
                ? "Touchez un créneau pour afficher les détails."
                : "Survolez un créneau pour afficher les détails de la session."}
            </p>
          </RevealOnScroll>

          {/* ── MOBILE: Accordion list ── */}
          <div className="md:hidden flex flex-col gap-1 sm:gap-2">
            {agendaItems.map((item, i) => (
              <RevealOnScroll key={item.time} delay={i * 60}>
                <div
                  className={`border-l-2 pl-[28px] sm:pl-[36px] py-2 sm:py-3 cursor-pointer transition-all ${
                    expandedIndex === i
                      ? "border-[#FFEDD1]"
                      : "border-white/15"
                  }`}
                  onClick={() => toggleExpand(i)}
                >
                  <div className="flex flex-col gap-0.5 sm:gap-1 relative">
                    <span
                      className={`font-[var(--font-body)] text-[11px] sm:text-xs transition-colors ${
                        expandedIndex === i
                          ? "text-[#FFEDD1]"
                          : "text-white/40"
                      }`}
                    >
                      {item.time}
                    </span>
                    <h3
                      className={`font-[var(--font-heading)] text-sm sm:text-base font-semibold leading-[20px] sm:leading-[22px] transition-colors ${
                        expandedIndex === i
                          ? "text-[#FFEDD1]"
                          : "text-white"
                      }`}
                    >
                      {item.title}
                    </h3>
                    <div
                      className={`absolute left-[-35px] sm:left-[-43px] top-[3px] sm:top-[4px] w-3 h-3 sm:w-3.5 sm:h-3.5 transition-all ${
                        expandedIndex === i
                          ? "bg-[#FFEDD1] scale-110 shadow-[0_0_8px_rgba(255,237,209,0.4)]"
                          : "bg-white/20"
                      }`}
                    />
                  </div>

                  {/* Expanded detail */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      expandedIndex === i
                        ? "max-h-[800px] mt-4 opacity-100"
                        : "max-h-0 mt-0 opacity-0"
                    }`}
                  >
                    <div className="glass-panel-strong p-4 sm:p-5 flex flex-col gap-4 sm:gap-5 items-center text-center">
                      <DetailContent item={item} />
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>

          {/* ── DESKTOP: Two-column with hover panel ── */}
          <div className="hidden md:grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
            <div className="lg:col-span-5 flex flex-col gap-2 lg:gap-3">
              {agendaItems.map((item, i) => (
                <RevealOnScroll key={item.time} delay={i * 80}>
                  <div
                    className={`relative border-l-2 pl-[32px] lg:pl-[40px] py-3 lg:py-4 flex flex-col gap-1 lg:gap-1.5 cursor-pointer transition-all ${
                      i === activeIndex
                        ? "border-[#FFEDD1]"
                        : "border-white/10 hover:border-white/25"
                    }`}
                    onMouseEnter={() => setActiveIndex(i)}
                  >
                    <span
                      className={`font-[var(--font-body)] text-xs lg:text-sm transition-colors ${
                        i === activeIndex ? "text-[#FFEDD1]" : "text-white/40"
                      }`}
                    >
                      {item.time}
                    </span>
                    <h3
                      className={`font-[var(--font-heading)] text-base lg:text-xl font-semibold leading-[22px] lg:leading-[28px] transition-colors ${
                        i === activeIndex ? "text-[#FFEDD1]" : "text-white"
                      }`}
                    >
                      {item.title}
                    </h3>
                    <div
                      className={`absolute left-[-9px] top-[20px] lg:top-[22px] w-3.5 lg:w-4 h-3.5 lg:h-4 transition-all ${
                        i === activeIndex
                          ? "bg-[#FFEDD1] scale-125 shadow-[0_0_12px_rgba(255,237,209,0.5)]"
                          : "bg-white/20"
                      }`}
                    />
                  </div>
                </RevealOnScroll>
              ))}
            </div>

            <div className="lg:col-span-6 lg:col-start-7 mt-6 lg:mt-0">
              <RevealOnScroll delay={200} className="h-full">
                <div className="glass-panel-strong p-6 md:p-8 lg:p-[49px] flex flex-col gap-5 md:gap-6 lg:gap-8 items-center text-center relative overflow-hidden transition-all h-full justify-center min-h-[400px] md:min-h-[450px] lg:min-h-[550px]">
                  <div className="absolute -top-24 -right-24 w-48 md:w-64 h-48 md:h-64 bg-[#FFEDD1]/10 blur-[32px] pointer-events-none" />
                  <div className="absolute -bottom-16 -left-16 w-40 md:w-48 h-40 md:h-48 bg-[#7B87D9]/10 blur-[32px] pointer-events-none" />
                  <DetailContent item={agendaItems[activeIndex]} />
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
