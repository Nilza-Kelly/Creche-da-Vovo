"use client";

import { Phone, Mail, MapPin } from "lucide-react";
import { FadeIn } from "../ui/fade-in";

export function Contact() {
  return (
    <section
      id="contato"
      className="py-24 bg-primary/5 scroll-mt-20"
    >
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Header */}
        <FadeIn direction="up">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-primary uppercase tracking-[0.25em]">
              Contato
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-4 mb-5">
              Estamos de portas abertas
            </h2>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Será uma alegria acolher você, esclarecer dúvidas ou apresentar
              mais sobre o trabalho desenvolvido pela Creche da Vovó.
            </p>
          </div>
        </FadeIn>

        {/* Conteúdo */}
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          
          {/* Lado esquerdo */}
          <FadeIn direction="right" delay={0.2}>
            <div className="space-y-10">
              
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    WhatsApp
                  </h3>
                  <p className="text-muted-foreground mb-2 leading-relaxed">
                    Entre em contato para informações, visitas ou dúvidas sobre
                    nossos projetos.
                  </p>
                  <a
                    href="https://wa.me/5588921797760"
                    target="_blank"
                    className="text-primary font-medium hover:underline"
                  >
                    (88) 9.2179-7760
                  </a>
                  <br />
                  <a
                    href="https://wa.me/5588999622685"
                    target="_blank"
                    className="text-primary font-medium hover:underline"
                  >
                    (88) 9.9962-2685
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    E-mail
                  </h3>
                  <p className="text-muted-foreground mb-2 leading-relaxed">
                    Caso prefira, envie sua mensagem por e-mail.
                  </p>
                  <a
                    href="mailto:institutoservosdesaoperegrino@gmail.com"
                    className="text-primary font-medium hover:underline"
                  >
                    institutoservosdesaoperegrino@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Localização
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Instituto Servos de São Peregrino
                    <br />
                    <a href="https://maps.app.goo.gl/w7qb1GeAQxtSsDuT9">
                      Rua Lenita Pereira Tributibo, 91 - Bairro Maria Geli de Sá Barreto
                      63038-500
                    </a>
                  </p>
                </div>
              </div>

            </div>
          </FadeIn>

          {/* IMAGEM */}
          <FadeIn direction="left" delay={0.4}>
            <div className="relative">
              <div className="overflow-hidden rounded-[2rem] shadow-xl border border-border">
                <img
                  src="/images/SaoPeregrino.png"
                  alt="Contato Creche da Vovó"
                  className="w-full h-[500px] object-cover"
                />
              </div>

            {/* Card flutuante */}
              <div className="absolute -bottom-6 left-6 right-6 bg-background/95 backdrop-blur-sm border border-border rounded-2xl p-6 shadow-lg">
                <p className="text-lg text-foreground font-medium leading-relaxed">
                  Cada gesto de cuidado é uma forma de espalhar esperança.
                </p>
                <span className="text-primary text-sm font-semibold uppercase tracking-wider mt-3 block">
                  Creche da Vovó
                </span>
              </div>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
