import RevealOnScroll from "@/components/RevealOnScroll";

const faqItems = [
  {
    q: "Où se déroule l'événement ?",
    a: "Le Before S2EE se déroule en présentiel au sein de l'École Nationale Supérieure d'Informatique (ESI).",
  },
  {
    q: "L'accès à l'événement est-il gratuit ?",
    a: "Oui, l'accès à l'événement, aux talks et à toutes les formations est 100% gratuit pour les étudiants !",
  },
  {
    q: "Faut-il déjà avoir de l'expérience professionnelle pour y participer ?",
    a: "Absolument pas ! Au contraire, cet événement est spécialement conçu pour vous aider à acquérir vos premières expériences, structurer votre profil et démystifier les processus de recrutement.",
  },
  {
    q: "Faut-il s'inscrire à l'avance pour les corrections de CV et simulations ?",
    a: "Oui, les places étant limitées pour garantir un suivi qualitatif et personnalisé avec nos experts, l'inscription via notre formulaire est indispensable.",
  },
  {
    q: "Puis-je assister uniquement aux formations en ligne ?",
    a: "Oui, bien que nous recommandions de vivre l'expérience complète en présentiel, vous pouvez vous inscrire spécifiquement pour les webinaires de préparation en ligne.",
  },
];

export default function QA() {
  return (
    <section id="faq" className="section-overlap bg-white py-16 md:py-[120px]">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 grid grid-cols-12 gap-8 md:gap-8">
        <RevealOnScroll className="col-span-12 lg:col-span-4 flex flex-col gap-3 md:gap-[15px]">
          <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl md:text-[48px] font-bold leading-[1.2] text-[#1A2478]">
            Vous avez des questions ? Nous avons les réponses.
          </h2>
          <p className="font-[var(--font-body)] text-sm md:text-base leading-relaxed text-[#1A2478]/70">
            Tout ce que vous devez savoir avant de nous rejoindre.
          </p>
        </RevealOnScroll>

        <div className="col-span-12 lg:col-span-7 lg:col-start-6 flex flex-col">
          {faqItems.map((item, i) => (
            <RevealOnScroll key={item.q} delay={i * 80}>
              <details
                open={i === 0}
                className="group border-b border-[#1A2478]/10 py-5 md:py-6 cursor-pointer"
              >
                <summary className="flex items-center justify-between gap-4 font-[var(--font-body)] text-base md:text-lg font-bold text-[#1A2478] list-none hover:text-[#7B87D9] transition-colors min-h-[44px]">
                  {item.q}
                  <img
                    alt=""
                    src="/figma/faq-chevron.svg"
                    className="h-[7.4px] w-3 shrink-0 transition-transform group-open:rotate-180"
                  />
                </summary>
                <div className="mt-3 md:mt-4 font-[var(--font-body)] text-sm md:text-base leading-relaxed text-[#1A2478]/60">
                  {item.a}
                </div>
              </details>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
