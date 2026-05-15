import { Footer } from "./components/landing/Footer";
import { Header } from "./components/landing/Header";
import { HeroSection } from "./components/landing/HeroSection";
import { WhatsAppButton } from "./components/landing/WhatsAppButton";
import { AtividadesSection } from "./components/landing/Atividades";
import { AboutSection } from "./components/landing/About";
import { ComoApoiar } from "./components/landing/ComoApoiar";
import { Oficinas } from "./components/landing/Oficinas";
import { Contact } from "./components/landing/Contact";


export default function Home() {
  return (
    <div className="min-h-screen">
      <Header/>
      <HeroSection/>
      <AboutSection/>
      <Oficinas/>
      <AtividadesSection/>
      <ComoApoiar/>
      <Contact/>
      <Footer/>
      <WhatsAppButton/>
    </div>
  );
}
