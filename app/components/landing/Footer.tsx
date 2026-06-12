"use client";

import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";
import { FadeIn } from "../ui/fade-in";

const socialLinks = [
  { icon: FaFacebook, href: "https://www.facebook.com/share/1B81a2B1aL/", label: "Facebook" },
  { icon: FaInstagram, href: "https://www.instagram.com/institutoservosdesaoperegrino/", label: "Instagram" },
];

const quickLinks = [
  { label: "Sobre", href: "#sobre" },
  { label: "Oficinas", href: "#oficinas" },
  { label: "Atividades", href: "#atividades" },
  { label: "Como Apoiar", href: "#como apoiar" },
];

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          
          {/* Brand */}
          <div className="lg:col-span-2">
            <FadeIn direction="up" delay={0.1}>
              <a href="#" className="flex items-center gap-2 text-background font-semibold text-xl mb-4">
                <span className="font-display">CRECHE DA VOVÓ</span>
              </a>
              <p className="text-background/70 max-w-md mb-6">
                Iniciativas socioeducativas para o desenvolvimento humano integral, 
                e a justiça social.
              </p>
              <p className="text-background/60 text-sm mb-4">
                Juazeiro do Norte - CE <br />
                CNPJ: 57.493.555/0001-30
              </p>

              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Quick Links */}
          <div>
            <FadeIn direction="up" delay={0.2}>
              <h4 className="font-semibold text-background mb-4">Links Rápidos</h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-background/70 hover:text-background transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>

          {/* Contact */}
          <div className="lg:col-span-2">
            <FadeIn direction="up" delay={0.3}>
              <h4 className="font-semibold text-background mb-4">Contato</h4>
              <ul className="space-y-2 text-background/70">
                <li>
                  <a href="https://wa.me/5588921797760" className="hover:text-background transition-colors">
                    (88) 9.2179-7760
                  </a>
                  <br />
                  <a href="https://wa.me/5588999622685" className="hover:text-background transition-colors">
                    (88) 9.9962-2685
                  </a>
                </li>
                <li>
                  <a href="mailto:institutoservosdesaoperegrino@gmail.com" className="hover:text-background transition-colors">
                    institutoservosdesaoperegrino@gmail.com
                  </a>
                </li>
              </ul>
            </FadeIn>
          </div>
        </div>

        {/* Bottom */}
        <FadeIn direction="up" delay={0.5}>
          <div className="border-t border-background/10 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-sm text-background/60">
                © {new Date().getFullYear()} Todos os direitos reservados.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </footer>
  );
}
