"use client";

import { MessageCircle } from "lucide-react";
import { FadeIn } from "../ui/fade-in";

export function WhatsAppButton() {
  return (
    <FadeIn direction="up" delay={0.8}>
      <a
        href="https://wa.me/5588999622685"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        aria-label="Falar no WhatsApp"
      >
        <MessageCircle className="w-7 h-7 text-white" fill="white" />
      </a>
    </FadeIn>
  );
}
