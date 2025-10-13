import CtaButton from "./CtaButton";
import { H1, L1, P1 } from "./Text";

export default function About() {
  return (
    <section className="w-full py-20">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <L1 className="mb-8">QUI SOMMES NOUS ?</L1>
            <H1 className="text-dark-100 mb-6">
              {`Un expert comptable\nimpliqué, à taille humaine`}
            </H1>
            <P1>
              {`Passionné par l’accompagnement des entreprises en croissance, Nexa propose un suivi personnalisé, loin des cabinets anonyme et impersonnels. Nous allions expertise, pédagogie et proximité.`}
            </P1>
            <div className="mt-8">
              <CtaButton
                href="#contact"
                label="PRENDRE RENDEZ-VOUS"
                variant="primary"
                showArrow
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <div className="aspect-[4/5] rounded-[12px] bg-[#E9E7E1]" />
            <div className="space-y-2">
              <div className="rounded-[12px] bg-[#F1F8C9] p-6">
                <div className="text-2xl lg:text-4xl text-dark-100 font-normal">
                  +50 clients
                </div>
                <P1 className="mt-2">
                  {`Léo est expert comptable depuis 6 ans et a déjà accompagné`}
                </P1>
              </div>
              <div className="aspect-[4/3] rounded-[12px] bg-[#E9E7E1]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
