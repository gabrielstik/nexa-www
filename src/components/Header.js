import CtaButton from "./CtaButton";

export default function Header() {
  return (
    <header className="w-full fixed top-0 left-0 right-0 z-50">
      <div className="w-full bg-[#F2F9BE] text-dark-100">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between gap-4">
          <p className="text-geist-mono text-[12px] leading-[16px] uppercase tracking-tight">
            UN APPEL DE 15 MIN VOUS EST OFFERT POUR FAIRE CONNAISSANCE ET POSER
            VOS QUESTIONS
          </p>
          <span aria-hidden className="text-geist-mono text-[16px]">
            →
          </span>
        </div>
      </div>

      <div className="w-full bg-transparent">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <span className="text-free font-semibold text-[24px] leading-[28px] text-light-50">
              NEXA
            </span>
            <nav className="hidden md:flex items-center gap-2">
              <button className="rounded-md bg-black/60 text-white px-5 py-3 text-sm font-medium hover:bg-black/70 transition-colors">
                Services <span aria-hidden>▾</span>
              </button>
              <button className="rounded-md bg-black/60 text-white px-5 py-3 text-sm font-medium hover:bg-black/70 transition-colors">
                Secteurs <span aria-hidden>▾</span>
              </button>
              <button className="rounded-md bg-black/60 text-white px-5 py-3 text-sm font-medium hover:bg-black/70 transition-colors">
                Blog
              </button>
            </nav>
          </div>

          <div className="flex items-center">
            <CtaButton
              href="#contact"
              label="PRENDRE RENDEZ-VOUS"
              variant="primary"
              showArrow
            />
          </div>
        </div>
      </div>
    </header>
  );
}
