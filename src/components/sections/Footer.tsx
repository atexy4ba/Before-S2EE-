import RevealOnScroll from "@/components/RevealOnScroll";

const links = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Press Kit", href: "#" },
  { label: "Contact", href: "#" },
];

export default function Footer() {
  return (
    <footer className="section-overlap relative bg-[#020617] border-t border-white/5 pt-24 md:pt-[161px] pb-12 md:pb-[80px] overflow-hidden">
      <div className="absolute left-1/2 top-0 h-[200px] md:h-[300px] w-[320px] md:w-[644px] pointer-events-none">
        <img alt="" src="/figma/footer-bg.svg" className="h-full w-full max-w-none" />
      </div>

      <RevealOnScroll className="relative z-10 max-w-[1440px] mx-auto px-4 md:px-12">
        <div className="flex flex-col items-center gap-8 md:gap-10">
          {/* Big centered logo */}
          <img
            alt="Octenium"
            src="/logooctenium.png"
            className="h-16 sm:h-20 md:h-28 lg:h-36 w-auto object-contain drop-shadow-[0_0_24px_rgba(255,237,209,0.15)]"
          />

          <div className="flex flex-wrap gap-4 md:gap-8 justify-center">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-[var(--font-heading)] text-[10px] md:text-xs font-semibold uppercase text-[#64748b] hover:text-white transition-colors min-h-[44px] flex items-center"
              >
                {link.label}
              </a>
            ))}
          </div>

          <span className="font-[var(--font-heading)] text-[10px] md:text-xs font-semibold uppercase text-[#64748b]">
            &copy; 2024 BEFORE S2EE. STRUCTURED INNOVATION.
          </span>
        </div>
      </RevealOnScroll>
    </footer>
  );
}
