"use client";

import { Pencil, Scissors, Paintbrush, Sprout } from "lucide-react";
import { useState } from "react";
import { FadeIn } from "../ui/fade-in";

const oficinas = [
    {
    icon: Scissors,
    title: "Colagens e Recortes",
    description: "Através de recortes, colagens e conversas, cada participante teve a oportunidade de relembrar histórias, fortalecer vínculos e exercitar a mente de forma leve e significativa.",
    image: "images/Colagem.jpeg",
  },
  {
    icon: Paintbrush,
    title: "Confecção de ímãs artesanais",
    description: "A atividade proporcionou não apenas a produção de belíssimas peças, feitas a partir de materiais simples como caixas de ovos, mas também momentos de partilha, descontração e valorização das habilidades de cada participante.",
    image: "images/Imas.jpeg",
  },
  {
    icon: Sprout,
    title: "Artesanato com Reciclagem",
    description: "Dar uma nova vida aos materiais, cuidar do nosso planeta e descobrir a alegria em cada nova criação.",
    image: "images/Artesanato.jpeg",
  },
  {
    icon: Pencil,
    title: "Desenhos Artesanais",
    description: "Momentos de convivência, criatividade e alegria, estimulando a expressão artística e fortalecendo vínculos.",
    image: "images/DesenhosArtesanais.jpeg",
  },
];

export function Oficinas() {
  const [activeOficina, setActiveOficina] = useState<string | null>(null);
  const handleOficinaClick = (title: string) => {
    setActiveOficina(activeOficina === title ? null : title);
  };

return (
    <section id="oficinas" className="py-20 scroll-mt-20">
      <div className="container mx-auto px-4">

        {/* oficinas Gallery */}
        <FadeIn direction="up">
          <div className="text-center mb-8">
              <span className="text-lg font-medium text-primary uppercase tracking-wider">
                  Oficinas
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-2 mb-4">
                  Conheça nossas oficinas
              </h2>
          </div>
        </FadeIn>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {oficinas.map((event, index) => {
            const isActive = activeOficina === event.title;
            return (
              <div
                key={event.title}
                onClick={() => handleOficinaClick(event.title)}
                className={`group relative overflow-hidden rounded-3xl cursor-pointer shadow-lg ${
                  index === 0 ? "md:col-span-2 md:row-span-2" : ""
                }`}
              >
                {/* IMAGEM */}
                <FadeIn delay={0.2 + (index * 0.1)} direction="up">
                  <div
                    className={`relative overflow-hidden h-[320px] ${
                      index === 0 ? "md:h-[620px]" : "md:h-[302px]"
                    }`}
                  >
                      <img
                        src={event.image}
                        alt={event.title}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />

                      {/* OVERLAY */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent transition-opacity duration-300
                          md:opacity-0 md:group-hover:opacity-100 ${isActive ? "opacity-100" : "opacity-0"

                        }`}
                      />

                      {/* TEXTO */}
                      <div
                        className={`absolute bottom-0 left-0 right-0 p-5 transition-all duration-300
                          md:translate-y-6 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100
                          ${ isActive ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0" }
                        `}
                      >
                        <div className="flex items-center gap-2 mb-3">
                          <event.icon className="w-5 h-5 text-white" />
                          <h4 className="font-semibold text-lg text-white leading-tight">
                            {event.title}
                          </h4>
                        </div>
                        <p className="text-sm text-white/90 leading-relaxed">
                          {event.description}
                        </p>
                      </div>
                    </div>
                </FadeIn>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
