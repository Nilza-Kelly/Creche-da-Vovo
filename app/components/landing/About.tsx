"use client";

import { Heart } from "lucide-react";
import { FadeIn } from "../ui/fade-in";

export function AboutSection() {
  return (
    <section id="sobre" className="py-20 scroll-mt-20 bg-primary/10">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <FadeIn direction="right">
            <div>
              <span className="text-sm font-medium text-primary uppercase tracking-wider">
                Sobre Nós
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-2 mb-6">
                Conheça o Instituto Servos de São Peregrino
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                O Instituto Servos de São Peregrino, com raízes profundas na Paróquia Menino Jesus de Praga de Juazeiro do Norte, é fruto do
                Apostolado São Peregrino desde 2013. Impulsionados pela fé e pela compaixão, reconhecemos a necessidade de ampliar os
                cuidados aos portadores de câncer, oferecendo um acolhimento integral e humanizado. Do Apostolado a Instituto. 
                Ao se tornar um instituto, a organização pode direcionar seus recursos e esforços exclusivamente para atender às necessidades 
                específicas dos pacientes com câncer, garantindo um cuidado mais especializado e qualificado, humanizado e eficiente. 
                Ao concentrar seus esforços e recursos nessa área, o instituto pode ter um impacto ainda maior na vida dos pacientes e de suas famílias,
                além de fortalecer sua posição como referência na comunidade.
                </p>
                <p>
                A iniciativa Creche da Vovó surge com o desejo de criar um espaço de acolhimento, para promover o bem-estar e alegria para a pessoa idosa. 
                Realizamos diversas atividades, oficinas, para promover convivência e novas amizades.
                </p>
                <p className="font-medium text-foreground">
                  Espaço de cuidado, atenção e bem-estar para pessoas idosas.
                </p>
              </div>
            </div>
          </FadeIn>
          
          {/* Image Section */}
          <FadeIn direction="left" delay={0.2}>
            <div className="relative group">
            {/* Main Image */}
              <div className="aspect-[4/3] overflow-hidden rounded-3xl shadow-2xl bg-linear-to-br from-accent">
                <img src="/images/Creche.jpeg" alt="Creche da Vovó" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"/>
              </div>

            {/* Decorative Card */}
              <div className="absolute -bottom-6 -right-6 bg-white/80 backdrop-blur-md p-3 rounded-2xl shadow-xl border border-white/50">
                <img src="/images/Logo.jpg" alt="Logo Creche da Vovó" className="w-20 h-20 object-cover rounded-xl"/>
              </div>

            {/* Background Decoration */}
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl -z-10"></div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
