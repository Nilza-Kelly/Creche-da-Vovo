"use client";

import { ArrowRight, Heart, Shield, Users } from "lucide-react";
import { Button } from "../ui/button";
import { FadeIn } from "../ui/fade-in";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 overflow-hidden">
      
      {/* Background */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" /> 
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/20 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <FadeIn delay={0.1}>
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-accent/10 text-primary text-sm font-medium mb-8 border border-border">
              Instituto Servos de São Peregrino
            </div>
          </FadeIn>
          
          {/* Título */}
          <FadeIn delay={0.2}>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground leading-tight mb-6">
              Centro do Idoso São Peregrino
              <span className="block mt-3 text-primary">
                Cuidar é nossa missão.
              </span>
            </h1>
          </FadeIn>

          {/* Subtítulo */}
          <FadeIn delay={0.3}>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              Um espaço de acolhimento, bem-estar e alegria para a pessoa idosa.
              Atividades, oficinas, convivência e novas amizades.
            </p>
          </FadeIn>

          {/* Botões */}
          <FadeIn delay={0.4}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
              <Button size="lg" asChild className="px-10 shadow-md hover:shadow-lg transition-all">
                <a
                  href="https://wa.me/5588921797760"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Falar Conosco
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
            </div>
          </FadeIn>
          
          {/* Elementos de confiança */}
          <FadeIn delay={0.6} direction="none">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm text-muted-foreground">
              <div className="flex items-center justify-center gap-2">
                <Shield className="w-4 h-4 text-primary" />
                Ambiente Seguro
              </div>
              <div className="flex items-center justify-center gap-2">
                <Users className="w-4 h-4 text-primary" />
                Equipe Especializada
              </div>
              <div className="flex items-center justify-center gap-2">
                <Heart className="w-4 h-4 text-primary" />
                Cuidado Humanizado
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
