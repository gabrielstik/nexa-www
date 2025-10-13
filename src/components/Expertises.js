import CtaButton from "./CtaButton";
import { L1 } from "./Text";

const ITEMS = [
  "BUSINESS CREATOR & STARTUP",
  "VERY SMALL BUSINESS",
  "SMES & ETI",
  "FOREIGN BUSINESS",
  "SCI/HOLDINGS, WEALTH MANAGEMENT",
  "WEB3 CRYPTOCURRENCIES",
  "ASSOCIATIONS",
];

export default function Expertises() {
  return (
    <section className="w-full py-20 bg-[#EEEADF]">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <L1 className="mb-6">NOS DOMAINES D’EXPERTISES</L1>

        <ul className="divide-y divide-black/10">
          {ITEMS.map((label, index) => (
            <li
              key={index}
              className="py-6 grid grid-cols-1 md:grid-cols-[1fr_auto] items-center"
            >
              <h3 className="text-free text-[28px] lg:text-[42px] leading-[34px] lg:leading-[46px] tracking-tight text-dark-100">
                {label}
              </h3>
              <div className="mt-4 md:mt-0 justify-self-end">
                <CtaButton
                  href="#"
                  label="Voir plus"
                  variant="black"
                  showPlus
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
