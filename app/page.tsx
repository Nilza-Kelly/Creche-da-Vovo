import { Footer } from "./components/landing/Footer";
import { Header } from "./components/landing/Header";
import { HeroSection } from "./components/landing/HeroSection";
import { WhatsAppButton } from "./components/landing/WhatsAppButton";


export default function Home() {
  return (
    <div className="min-h-screen">
      <Header/>
      <HeroSection/>
      <Footer/>
      <WhatsAppButton/>
    </div>
  );
}
