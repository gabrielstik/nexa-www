import Link from "next/link";
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
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-4 grid grid-cols-3 items-center">
          <Link
            href="/"
            className="text-free font-semibold text-[24px] leading-[28px] text-light-50 col-span-1"
          >
            NEXA
          </Link>
          <nav className="hidden md:flex items-center gap-2 col-span-1 justify-center">
            <button className="rounded-md bg-black/60 text-white px-5 py-3 text-sm font-medium hover:bg-black/70 transition-colors">
              Services
            </button>
            <div className="relative group">
              <button className="rounded-md bg-black/60 text-white px-5 py-3 text-sm font-medium hover:bg-black/70 transition-colors">
                Secteurs <span aria-hidden>▾</span>
              </button>
              <div className="hidden group-hover:block absolute left-0 mt-2 min-w-[240px] rounded-md bg-black/80 backdrop-blur text-white shadow-lg">
                <ul className="py-2 text-sm">
                  <li>
                    <Link
                      href="/restaurants"
                      className="block px-4 py-2 hover:bg-black/70"
                    >
                      Restaurants
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/business-creator-and-startup"
                      className="block px-4 py-2 hover:bg-black/70"
                    >
                      Business Creator and Startups
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/scis-and-holding"
                      className="block px-4 py-2 hover:bg-black/70"
                    >
                      SCI & Holdings
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/smes-and-eti"
                      className="block px-4 py-2 hover:bg-black/70"
                    >
                      SMES & ETI
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/very-small-business"
                      className="block px-4 py-2 hover:bg-black/70"
                    >
                      Very small business
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <button className="rounded-md bg-black/60 text-white px-5 py-3 text-sm font-medium hover:bg-black/70 transition-colors">
              Blog
            </button>
          </nav>

          <div className="flex items-center col-span-1 justify-end">
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
