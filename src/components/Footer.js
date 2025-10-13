import CtaButton from "./CtaButton";
import { H4, P1 } from "./Text";

export default function Footer() {
  return (
    <footer className="w-full bg-[#F2F9BE] text-dark-100">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <span className="text-free font-semibold text-[72px] leading-[72px] tracking-tight block">
              NEXA
            </span>
            <P1>
              {`CABINET D’EXPERTISE COMPTABLE INSCRIT AU TABLEAU DE L’ORDRE DU CONSEIL RÉGIONAL DE PARIS ILE-DE-FRANCE`}
            </P1>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-4">
              <H4>NOS PRESTATIONS</H4>
              <ul className="space-y-2">
                {[
                  "Création de société",
                  "Déclarations fiscales",
                  "Optimisation fiscale",
                  "Paie et RH",
                  "Secrétariat juridique",
                  "Tenue de comptabilité",
                  "Hub assits",
                ].map((item) => (
                  <li
                    key={item}
                    className="text-free text-[16px] leading-[22px]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <H4>SPÉCIALITÉ</H4>
              <ul className="space-y-2">
                {[
                  "E-commerce",
                  "MakeTplace",
                  "Dropshipping",
                  "Startups",
                  "Startups Ecommerce",
                  "SSI / ESN",
                  "Crypto",
                  "Trading",
                ].map((item) => (
                  <li
                    key={item}
                    className="text-free text-[16px] leading-[22px]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <H4>CONTACT</H4>
            <div className="space-y-3">
              <P1>
                10 rue de la comptabilité
                <br />
                75001 Paris
              </P1>
              <P1>E-mail : contact@nexa.com</P1>
              <div>
                <span className="inline-flex items-center justify-center w-[32px] h-[32px] border border-dark-100 rounded-sm">
                  in
                </span>
              </div>
            </div>
            <CtaButton
              href="#contact"
              label="PRENDRE RENDEZ-VOUS"
              variant="black"
              showArrow
            />
          </div>
        </div>
      </div>

      <div className="border-t border-black/20">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <img
              src="/window.svg"
              alt="Ordre des experts-comptables"
              className="h-6 opacity-80"
            />
          </div>
          <div className="flex items-center gap-6 text-free text-[14px] leading-[20px]">
            <span>© COPYRIGHT</span>
            <span>TOUS DROITS RÉSERVÉS</span>
            <span>MENTIONS LÉGALES</span>
            <span>POLITIQUE DE CONFIDENTIALITÉ</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

