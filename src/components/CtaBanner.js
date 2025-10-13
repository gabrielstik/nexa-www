import CtaButton from "./CtaButton";
import { H1, P1 } from "./Text";

export default function CtaBanner() {
  return (
    <section
      className="relative w-full h-[60dvh] flex items-center justify-center text-center"
      style={{
        backgroundImage: "url(/pictures/home-2.webp)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="relative z-10 max-w-screen-lg mx-auto px-4">
        <H1 className="text-light-50 text-center mb-6">
          {`Besoin d’un comptable qui\ncomprend vraiment votre activité ?`}
        </H1>
        <P1 className="text-light-50/90 text-center mb-8">
          {`Discutons ensemble de votre situation, de vos objectifs et de la meilleure manière de vous accompagner, sans jargon ni suprise`}
        </P1>
        <div className="flex justify-center">
          <CtaButton
            href="#contact"
            label="Prendre rendez-vous"
            variant="primary"
            showArrow
          />
        </div>
      </div>
    </section>
  );
}
