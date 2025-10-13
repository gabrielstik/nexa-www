import CtaButton from "./CtaButton";
import { H1 } from "./Text";

export default function Hero() {
  return (
    <section
      className="w-full h-[70dvh] flex flex-col justify-center relative"
      style={{
        backgroundImage: "url(/pictures/home-1.webp)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-10 relative z-10">
        <div className="max-w-[1100px]">
          <H1 className="text-left">
            {`Cabinet comptable engagé aux côtés des entrepreneurs ambitieux`}
          </H1>
        </div>
        <div className="mt-6">
          <CtaButton
            href="#contact"
            label="PRENDRE RENDEZ-VOUS"
            variant="primary"
            showArrow
          />
        </div>
      </div>
    </section>
  );
}
