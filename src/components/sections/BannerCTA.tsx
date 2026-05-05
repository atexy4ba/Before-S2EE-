const FORM_URL =
  "https://docs.google.com/forms/d/146Ox8lYQQvzyhoNOalwBxFFYXNjJ0biDP72s0Zxb8_S/viewform?edit_requested=true";

export default function BannerCTA() {
  return (
    <section id="cta" className="section-overlap relative min-h-[600px] md:min-h-[694px]">
      <div className="figma-mask cta-mask absolute inset-0 bg-[#1A2478] py-16 md:py-[120px] flex items-center">
        <div className="absolute inset-0 flex items-center justify-center mix-blend-exclusion opacity-30 overflow-hidden pointer-events-none">
          <div className="relative h-full w-full overflow-hidden">
            <img
              alt=""
              src="/figma/cta-vector.svg"
              className="absolute inset-x-0 top-[6.3%] h-[87.4%] w-full max-w-none"
            />
            <img
              alt=""
              src="/figma/cta-vector-left.svg"
              className="absolute max-w-none"
              style={{
                bottom: "13.58%",
                left: "-3.47%",
                top: "13.58%",
                width: "34.72%",
              }}
            />
          </div>
        </div>

        <div className="absolute inset-0 mix-blend-overlay opacity-25 pointer-events-none">
          <img
            alt=""
            src="/figma/cta-noise.svg"
            className="h-full w-full max-w-none object-cover"
          />
        </div>

        <div className="relative z-10 w-full max-w-[896px] mx-auto px-4 md:px-8 flex flex-col items-center gap-8 md:gap-12 text-center py-8 md:py-16">
          <h2
            className="font-[var(--font-heading)] text-3xl sm:text-5xl md:text-[64px] lg:text-[80px] font-extrabold leading-[1.15] text-white"
            style={{
              animation:
                "fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.1s both",
            }}
          >
            Prêt à propulser votre carrière
            <br />
            au niveau supérieur ?
          </h2>
          <div
            style={{
              animation:
                "fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.3s both",
            }}
          >
            <a
              href={FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shine bg-[#FFEDD1] text-[#1A2478] font-[var(--font-body)] font-bold text-base md:text-xl px-8 md:px-14 py-4 md:py-6 hover:bg-[#ffe4b3] transition-colors inline-block w-full md:w-auto"
            >
              Inscrivez-vous dès maintenant
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
