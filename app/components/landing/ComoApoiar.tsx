"use client";

import { ArrowRight, CheckCircle, DollarSign, Guitar, PersonStanding, Handshake, Apple } from "lucide-react";
import { FadeIn } from "../ui/fade-in";

const ajudar = [
  {
    icon: DollarSign,
    title: "Doações Financeiras",
    description: "Manutenção dos projetos.",
  },
  {
    icon: Apple,
    title: "Alimentos e Remédios",
    description: "Apoio a famílias em tratamento.",
  },
  {
    icon: Guitar,
    title: "Materiais artísticos",
    description: "Doações de Instrumentos materiais artísticos e escolares.",
  },
  {
    icon: PersonStanding,
    title: "Voluntariado",
    description: " Faça parte do time solidário.",
  },
  {
    icon: Handshake,
    title: "Parcerias",
    description: "Junte sua empresa, paróquia ou escola aos nossos sonhos.",
  },
];

export function ComoApoiar() {
  return (
    <section id="ComoApoiar" className="py-20 bg-secondary/30 scroll-mt-20">
      <div className="container mx-auto px-4">
        <FadeIn direction="up">
          <div className="text-center mb-12">
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              Nos ajude a continuar com o nosso trabalho
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-2 mb-4">
              COMO APOIAR O INSTITUTO
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Somos mais do que números, projetos ou ações, somos mãos estendidas, corações em missão e passos firmes na estrada da esperança.
            </p>
          </div>
        </FadeIn>

        {/* Vertical Timeline */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-border" />

            {ajudar.map((ComoAjudar, index) => (
              <FadeIn key={ComoAjudar.title} delay={0.2 + (index * 0.15)} direction="left">
                <div className="relative flex gap-4 md:gap-6 pb-10 last:pb-0">                 
                  {/* Timeline node */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/20">
                      <ComoAjudar.icon className="w-5 h-5 md:w-7 md:h-7 text-primary-foreground" />
                    </div>
                  {/* ComoAjudar number */}
                    <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-foreground text-background text-xs font-bold flex items-center justify-center">
                      {index + 1}
                    </span>
                  </div>

                {/* Content */}
                  <div className="pt-1 md:pt-3">
                    <h3 className="text-lg font-semibold text-foreground mb-1">{ComoAjudar.title}</h3>
                    <p className="text-sm text-muted-foreground">{ComoAjudar.description}</p>
                  </div>                  
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
