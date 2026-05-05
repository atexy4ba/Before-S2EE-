import RevealOnScroll from "@/components/RevealOnScroll";

const sessions = [
  {
    day: "Jeudi",
    time: "18h00 - 19h30",
    title: "Formation CV",
    desc: "Apprenez à structurer et valoriser votre CV pour capter l'attention des recruteurs.",
    speaker: {
      name: "Ahmed Addala",
      photo: "/addala.PNG",
      role: "En ligne",
    },
  },
  {
    day: "Vendredi",
    time: "18h00",
    title: "Formation LinkedIn",
    desc: "Optimisez votre profil LinkedIn et développez votre réseau professionnel.",
    speaker: {
      name: "Boukeha Mohamed Akram",
      photo: "/boukehamohamedakram.webp",
      role: "En ligne",
    },
  },
];

export default function Training() {
  return (
    <section className="section-overlap relative min-h-[1169.56px] overflow-hidden">
      <div className="figma-mask training-mask absolute inset-0 bg-[#1A2478] py-20 md:py-[160px] px-[4px]">
        <div className="absolute inset-0 mix-blend-overlay opacity-25 pointer-events-none">
          <img alt="" src="/figma/training-noise.svg" className="h-[1169.56px] w-[1169.56px] max-w-none" />
        </div>

        <div className="relative z-10 max-w-[1280px] mx-auto px-4 md:px-8 flex flex-col gap-10 md:gap-16 items-center">
          <RevealOnScroll className="text-center max-w-[768px] flex flex-col gap-3 md:gap-[15px]">
            <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl md:text-[48px] font-bold leading-[1.2] text-[#7B87D9]">
              Prenez une longueur d&apos;avance avec nos sessions en ligne.
            </h2>
            <p className="font-[var(--font-body)] text-sm md:text-base leading-relaxed text-white/80">
              Avant le jour J, participez à nos webinaires de préparation.
            </p>
          </RevealOnScroll>

          <div className="max-w-[640px] w-full flex flex-col gap-6 md:gap-8">
            {sessions.map((session, i) => (
              <RevealOnScroll key={session.day} delay={i * 150}>
                <div className="relative border-l-2 border-white/10 pl-[40px] md:pl-[50px] py-4 md:py-6 flex flex-col gap-2 hover:border-white/20 transition-colors group">
                  <span className="font-[var(--font-body)] text-xs md:text-sm text-[#FFEDD1]">
                    {session.day} — {session.time}
                  </span>
                  <h3 className="font-[var(--font-heading)] text-lg md:text-2xl font-semibold leading-[26px] md:leading-[32px] text-white group-hover:text-[#FFEDD1] transition-colors">
                    {session.title}
                  </h3>
                  <p className="font-[var(--font-body)] text-sm md:text-base leading-6 text-white/60">
                    {session.desc}
                  </p>
                  {"speaker" in session && session.speaker && (
                    <div className="flex items-center gap-3 mt-2">
                      <div className="w-[48px] h-[48px] md:w-[56px] md:h-[56px] overflow-hidden bg-white/5 ring-1 ring-white/10 flex-shrink-0">
                        <img
                          alt={session.speaker.name}
                          src={session.speaker.photo}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex flex-col">
                        <span className="font-[var(--font-body)] text-sm md:text-base font-semibold text-white">
                          {session.speaker.name}
                        </span>
                        <span className="font-[var(--font-body)] text-xs text-white/50">
                          {session.speaker.role}
                        </span>
                      </div>
                    </div>
                  )}
                  <div className="absolute left-[-9px] top-[24px] md:top-[28px] w-3.5 md:w-4 h-3.5 md:h-4 bg-white/20 group-hover:bg-[#FFEDD1] group-hover:scale-125 transition-all" />
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
