import { H4, L1, P1 } from "./Text";

export default function ValueProps() {
  return (
    <section className="w-full py-14 bg-white">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <article className="bg-[#F1F8C9] rounded-[6px] p-6 border-black/10">
            <L1
              as="h3"
              className="text-geist-mono mb-4 px-3 py-2 bg-dark-100 text-light-50 rounded-full inline-block"
            >
              CONSEIL GLOBAL
            </L1>
            <H4 className="mb-3">UNE VISION 360° DE VOTRE COMPTABILITÉ</H4>
            <P1>
              {`De la gestion quotidienne à l’optimisation fiscale, nous couvrons tous les aspects comptables de votre activité.`}
            </P1>
          </article>

          <article className="bg-[#F1F8C9] rounded-[6px] p-6 border-black/10">
            <L1
              as="h3"
              className="text-geist-mono mb-4 px-3 py-2 bg-dark-100 text-light-50 rounded-full inline-block"
            >
              RÉACTIVITÉ
            </L1>
            <H4 className="mb-3">UN COMPTABLE QUI VOUS RÉPOND (VRAIMENT)</H4>
            <P1>
              {`Une ligne directe pour échanger avec votre expert comptable, sans passer par dix intermédiaires.`}
            </P1>
          </article>

          <article className="bg-[#F1F8C9] rounded-[6px] p-6 border-black/10">
            <L1
              as="h3"
              className="text-geist-mono mb-4 px-3 py-2 bg-dark-100 text-light-50 rounded-full inline-block"
            >
              TRANSPARENCE
            </L1>
            <H4 className="mb-3">VOUS RESTEZ MAÎTRE DE VOS FINANCES</H4>
            <P1>
              {`Grâce à des outils simples et transparents, vous suivez vos chiffres en temps réel et prenez des décisions éclairées.`}
            </P1>
          </article>
        </div>
      </div>
    </section>
  );
}
