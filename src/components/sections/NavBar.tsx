export default function NavBar() {
  return (
    <nav className="glass-nav fixed top-0 left-0 right-0 z-50">
      <div className="max-w-[1440px] mx-auto h-20 flex items-center justify-between px-8">
        <a
          href="#hero"
          className="font-[var(--font-body)] text-xl font-extrabold uppercase text-white hover:scale-[1.02] transition-transform"
        >
          BEFORE S2EE
        </a>

        <div className="hidden md:flex gap-8 items-center">
          <a
            href="#discovery"
            className="font-[var(--font-heading)] text-sm font-semibold text-white border-b-2 border-[#FFEDD1] pb-1.5 hover:scale-[1.02] transition-transform"
          >
            Discovery
          </a>
          <a
            href="#agenda"
            className="font-[var(--font-heading)] text-sm font-semibold text-white/60 hover:text-white hover:scale-[1.02] transition-all"
          >
            Agenda
          </a>
          <a
            href="#faq"
            className="font-[var(--font-heading)] text-sm font-semibold text-white/60 hover:text-white hover:scale-[1.02] transition-all"
          >
            FAQ
          </a>
        </div>

        <a
          href="#cta"
          className="btn-shine bg-[#FFEDD1] text-[#1A2478] font-[var(--font-body)] font-bold text-sm px-6 py-3 hover:bg-[#ffe4b3] hover:scale-[1.02] hover:shadow-lg transition-all"
        >
          Register Now
        </a>
      </div>
    </nav>
  );
}
