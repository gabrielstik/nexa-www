"use client";

import { useRef, useState } from "react";
import { L1, P1 } from "./Text";

const FAQ_ITEMS = [
  {
    q: "PROPOSEZ-VOUS UN PREMIER RENDEZ-VOUS GRATUIT ?",
    a: `Oui. Nous proposons un premier échange gratuit pour comprendre votre activité, vos enjeux et vous présenter notre approche.`,
  },
  {
    q: "PUIS-JE CHANGER DE CABINET COMPTABLE FACILEMENT ?",
    a: `Très simplement. Nous vous accompagnons pour récupérer l'historique et assurer une transition sans rupture.`,
  },
  {
    q: "COMMENT SE PASSE LA COLLABORATION AVEC NEXA AU QUOTIDIEN",
    a: `Une fois le contrat signé, on commence par une réunion de lancement pour comprendre votre organisation et récupérer les premières pièces comptables. Ensuite, tout se passe via des outils simples et connectés : vous nous transmettez vos documents en quelques clics, et on vous tient informé régulièrement. Vous avez aussi une ligne directe avec votre référent comptable si besoin. Pas de jargon, pas de blabla : que du concret.`,
  },
  {
    q: "TRAVAILLEZ-VOUS UNIQUEMENT AVEC DES ENTREPRISES EN FRANCE ?",
    a: `Nous accompagnons principalement des entreprises en France, mais pouvons intervenir pour des structures ayant des activités à l'étranger.`,
  },
  {
    q: "ÊTES-VOUS DISPONIBLES EN CAS DE QUESTIONS URGENTES ?",
    a: `Oui. Nous mettons à disposition un canal direct avec un temps de réponse rapide pour les sujets prioritaires.`,
  },
];

function FaqItem({ q, a, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  const contentRef = useRef(null);
  return (
    <li className="rounded-[10px] overflow-hidden">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className={`w-full text-left px-6 py-5 flex items-center justify-between transition-colors ${
          open ? "bg-[#F1F8C9]" : "bg-white"
        }`}
      >
        <span className="text-free font-[700] text-[14px] leading-[22px] uppercase text-dark-100">
          {q}
        </span>
        <span
          aria-hidden
          className="text-[22px] leading-none text-dark-100 select-none"
        >
          {open ? "×" : "+"}
        </span>
      </button>
      <div
        className="px-6 bg-white"
        style={{
          maxHeight:
            open && contentRef.current ? contentRef.current.scrollHeight : 0,
          transition: "max-height 300ms cubic-bezier(0.4, 0, 0.2, 1)",
          overflow: "hidden",
        }}
      >
        <div ref={contentRef} className="py-5 border-t border-black/10">
          <P1>{a}</P1>
        </div>
      </div>
    </li>
  );
}

export default function Faq() {
  return (
    <section className="w-full py-20 bg-[#EEEADF]">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <L1 className="mb-6">FAQ</L1>
        <ul className="space-y-3">
          {FAQ_ITEMS.map((item, i) => (
            <FaqItem key={i} q={item.q} a={item.a} defaultOpen={i === 2} />
          ))}
        </ul>
      </div>
    </section>
  );
}
