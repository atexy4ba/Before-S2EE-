import RevealOnScroll from "@/components/RevealOnScroll";

const stats = [
  {
    value: "50+",
    label: "Formations",
    detail: "sur site et en ligne",
  },
  {
    value: "500+",
    label: "Participants",
    detail: "toutes éditions confondues",
  },
  {
    value: "1500+",
    label: "Simulations d'entretiens",
    detail: "avec des experts du domaine",
  },
  {
    value: "40+",
    label: "Intervenants",
    detail: "experts RH et techniques",
  },
];

export default function WhatIs() {
  return (
    <section
      id="discovery"
      className="section-overlap relative bg-[#E2E8F6] py-16 md:pt-[128px] md:pb-[120px]"
    >
      {/* ── Wireframe grid ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(121,134,203,0.12) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(121,134,203,0.12) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-[1280px] mx-auto px-4 md:px-8">
        <RevealOnScroll className="text-center max-w-[768px] mx-auto flex flex-col gap-3 md:gap-4 pb-10 md:pb-16">
          <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl md:text-[48px] font-bold leading-[1.2] text-[#1A237E]">
            L&apos;impact en quelques chiffres
          </h2>
          <p className="font-[var(--font-body)] text-sm md:text-base leading-relaxed text-[#1A237E]/60">
            L&apos;excellence au service de votre avenir.
          </p>
        </RevealOnScroll>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
          {stats.map((stat, i) => (
            <RevealOnScroll key={stat.label} delay={i * 100}>
              <div className="bg-white/40 backdrop-blur-sm border border-white/50 p-4 md:p-6 flex flex-col gap-1 shadow-sm">
                <span className="font-[var(--font-heading)] text-4xl sm:text-5xl md:text-[56px] font-extrabold leading-none text-[#1A237E]">
                  {stat.value}
                </span>
                <span className="font-[var(--font-body)] text-xs md:text-sm font-bold uppercase text-[#1A237E]/70">
                  {stat.label}
                </span>
                <span className="font-[var(--font-body)] text-[10px] md:text-xs text-[#1A237E]/50">
                  {stat.detail}
                </span>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
