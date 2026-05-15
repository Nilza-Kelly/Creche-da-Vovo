"use client";

import { ChevronLeft, ChevronRight, Image } from "lucide-react";
import { useState, useCallback, useEffect } from "react";

const atividades = [
  {
    name: "VISITA DOMICILIAR",
    quote: "Acompanhamento domiciliar aos doentes de Câncer.",
    image: "/images/VisitaDomiciliar.jpeg",
  },
  {
    name: "VISITAS MENSAIS À ONCOLOGIA",
    quote: "Visitas mensais à Oncologia do Hospital São Vicente e à Casa de Apoio aos doentes de Câncer de Barbalha levando palavras de conforto e esperança.",
    image: "images/VisitaAAncologia.jpeg",
  },
  {
    name: "VISITA NA CASA SÃO BENTO",
    quote: "Visita do grupo de apoio na Casa São Bento da cidade de Barbalha",
    image: "images/VisitaCasaSB.jpeg",
  },
  {
    name: "DISTRIBUIÇÃO DE CESTAS BÁSICAS E FRALDAS",
    quote: "Entendemos a importância de atender às necessidades básicas dos mais vulneráveis. Por isso, realizamos a distribuição de cestas básicas e fraldas, garantindo um pouco mais de dignidade e conforto aos nossos assistidos.",
    image: "images/CestasBasicas.jpeg",
  },
  {
    name: "CURSO DE VIOLÃO",
    quote: "Aulas semanais gratuitas de violão e canto, voltadas para jovens, familiares de pacientes e em busca de expressão emocional e bem-estar.",
    image: "images/AulaViolao.jpeg",
  },
  {
    name: "ENCENA PEREGRINO",
    quote: "Grupo cênico do Instituto que promove apresentações temáticas sobre fé, dor, cura e solidariedade. Atua em hospitais, paróquias, escolas e eventos sociais.",
    image: "images/Teatro.jpeg",
  },
  {
    name: "OFICINAS E AÇÕES DE FORMAÇÃO",
    quote: "Formação cristã e humana para crianças, jovens e adultos. Palestras, rodas de conversa, espiritualidade e interiorização.",
    image: "images/Formacao.jpeg",
  },
  {
    name: "GRUPO DE APOIO AS MULHERES",
    quote: "Projetos de geração de renda (artesanato, capacitações). Grupos de escuta e fortalecimento da autoestima. Encaminhamentos psicológicos e sociais.",
    image: "images/GrupoMulheres.jpeg",
  },
  {
    name: "ACOMPANHAMNETO ESPIRITUAL",
    quote: "Nossa atuação vai além dos cuidados físicos. Oferecemos acompanhamento espiritual personalizado, encontros formativos, retiros espirituais e celebrações da Santa Missa, buscando fortalecer a fé e a esperança dos nossos assistidos.",
    image: "images/Acompanhamento.jpeg",
  },
];

export function AtividadesSection() {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % atividades.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + atividades.length) % atividades.length);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, next]);

  return (
    <section id="atividades" className="py-20 scroll-mt-20 bg-primary/10">
      <div className="container mx-auto px-4">
        {/* atividades Carousel */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-2 mb-4">
            Nossas Atividades
          </h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto"> Acreditamos que a jornada do paciente com câncer não deve ser percorrida isoladamente. Por isso, realizamos visitas domiciliares, oferecendo apoio e acompanhamento às famílias. </p>
        </div>

        <div
          className="relative max-w-3xl mx-auto mb-16"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Carousel container */}
          <div className="overflow-hidden rounded-2xl bg-card border border-border shadow-lg">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {atividades.map((a) => (
                <div key={a.name} className="w-full flex-shrink-0 p-8 md:p-12 text-center">
                  {/* Image placeholder */}
                  <div className="w-16 h-16 rounded-full bg-primary/10 mx-auto mb-4 flex items-center justify-center">
                    <img src={a.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"/>
                  </div>
                  <blockquote className="text-lg md:text-xl text-foreground italic leading-relaxed mb-6">
                    {a.quote}
                  </blockquote>
                  <p className="font-semibold text-foreground">{a.name}</p>
                  {/*<p className="text-sm text-muted-foreground">{a.condition}</p>*/}
                </div>
              ))}
            </div>
          </div>

          {/* Navigation arrows */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 w-10 h-10 rounded-full bg-card border border-border shadow-md flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
            aria-label="Depoimento anterior"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 w-10 h-10 rounded-full bg-card border border-border shadow-md flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
            aria-label="Próximo depoimento"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {atividades.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${i === current ? "bg-primary w-8" : "bg-border hover:bg-muted-foreground"}`}
                aria-label={`Ir para depoimento ${i + 1}`}
              />
            ))}
          </div>
        </div>
    </div>
    </section>
  );
}
