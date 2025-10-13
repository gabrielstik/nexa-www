import { H4, L1, P1 } from "./Text";

function BulletRow() {
  return (
    <div className="flex items-center gap-2">
      <span className="w-3 h-3 rounded-full bg-dark-100 inline-block" />
      <span className="w-3 h-3 rounded-full bg-dark-100 inline-block" />
      <span className="w-3 h-3 rounded-full bg-[#DCE9A3] inline-block" />
      <span className="w-3 h-3 rounded-full bg-[#DCE9A3] inline-block" />
    </div>
  );
}

export default function Services() {
  return (
    <section className="w-full py-14 bg-white">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#F1F8C9] rounded-[12px] px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <L1 className="mb-8">NOS SERVICES</L1>
              <H4
                as="h2"
                className="text-[42px] lg:text-[56px] leading-[46px] lg:leading-[63px] tracking-[-1.2px] lg:tracking-[-2.5px] normal-case text-dark-100"
              >
                Des services pensés pour les entrepreneurs
              </H4>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10">
              <div>
                <BulletRow />
                <H4 className="mt-4">CRÉATION D’ENTREPRISE</H4>
                <P1 className="mt-2">
                  {`Conseil sur le statut juridique, accompagnement administratif, prévisionnel financier : on démarre sur des bases solides.`}
                </P1>
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-dark-100 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-dark-100 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-[#DCE9A3] inline-block" />
                  <span className="w-3 h-3 rounded-full bg-[#DCE9A3] inline-block" />
                </div>
                <H4 className="mt-4">TENUE ET RÉVISION COMPTABLE</H4>
                <P1 className="mt-2">
                  {`Nous assurons la saisie, la révision et l’établissement des comptes pour une comptabilité claire et à jour.`}
                </P1>
              </div>

              <div>
                <BulletRow />
                <H4 className="mt-4">DÉCLARATIONS ET FISCALITÉ</H4>
                <P1 className="mt-2">
                  {`TVA, impôt sur les société, bilan : on s’occupe de vos déclarations pour que vous restiez concentré sur votre business`}
                </P1>
              </div>

              <div>
                <BulletRow />
                <H4 className="mt-4">PILOTAGE ET STRATÉGIE</H4>
                <P1 className="mt-2">
                  {`Tableaux de bords, prévisionnels, analyse de rentabilité : nous vous aidons à piloter avec vision et ambition.`}
                </P1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
