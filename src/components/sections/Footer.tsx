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
        <div className="flex flex-col md:grid md:grid-cols-12 gap-6 md:gap-8 items-center text-center md:text-left">
          <div className="md:col-span-4 flex flex-col gap-3 md:gap-4 items-center md:items-start">
            <img
              alt="Octenium"
              src="/logooctenium.png"
              className="h-8 md:h-10 w-auto object-contain"
            />
            <span className="font-[var(--font-heading)] text-[10px] md:text-xs font-semibold uppercase text-[#64748b]">
              &copy; 2024 BEFORE S2EE. STRUCTURED INNOVATION.
            </span>
          </div>

          <div className="md:col-span-8 flex flex-wrap gap-4 md:gap-8 justify-center md:justify-end">
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
        </div>
      </RevealOnScroll>
    </footer>
  );
}
