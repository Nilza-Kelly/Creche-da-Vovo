"use client";

import { Pencil, Scissors, Paintbrush, Sprout } from "lucide-react";
import { Image } from "lucide-react";

const oficinas = [
  {
    icon: Pencil,
    title: "Desenhos Artesanais",
    description: "Momentos de convivência, criatividade e alegria, estimulando a expressão artística e fortalecendo vínculos.",
    image: "images/DesenhosArtesanais.jpeg",
  },
  {
    icon: Paintbrush,
    title: "Confecção de ímãs artesanais",
    description: "A atividade proporcionou não apenas a produção de belíssimas peças, feitas a partir de materiais simples como caixas de ovos, mas também momentos de partilha, descontração e valorização das habilidades de cada participante.",
    image: "images/Imas.jpeg",
  },
  {
    icon: Scissors,
    title: "Colagens e Recortes",
    description: "Através de recortes, colagens e conversas, cada participante teve a oportunidade de relembrar histórias, fortalecer vínculos e exercitar a mente de forma leve e significativa.",
    image: "images/Colagem.jpeg",
  },
  {
    icon: Sprout,
    title: "Artesanato com Reciclagem",
    description: "Dar uma nova vida aos materiais, cuidar do nosso planeta e descobrir a alegria em cada nova criação.",
    image: "images/Artesanato.jpeg",
  },
];

export function Oficinas() {
  return (
    <section id="oficinas" className="py-20 scroll-mt-20">
      <div className="container mx-auto px-4">

        {/* oficinas Gallery */}
        <div className="text-center mb-8">
            <span className="text-lg font-medium text-primary uppercase tracking-wider">
                Oficinas
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-2 mb-4">
                Conheça nossas oficinas
            </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {oficinas.map((event, index) => (
            <div
              key={event.title}
              className={`group relative overflow-hidden rounded-xl cursor-pointer ${index === 0 ? "col-span-2 row-span-2" : ""}`}
            >
              {/* Image placeholder */}
              <div className={`bg-gradient-to-br from-accent to-secondary flex items-center justify-center ${index === 0 ? "aspect-square" : "aspect-[4/3]"}`}>
                <img src={event.image} />
              </div>
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <div className="flex items-center gap-2 mb-1">
                  <event.icon className="w-4 h-4 text-primary-foreground" />
                  <h4 className="font-semibold text-sm text-primary-foreground">{event.title}</h4>
                </div>
                <p className="text-xs text-primary-foreground/80 line-clamp-2">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
