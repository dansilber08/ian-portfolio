import HeroSection from "@/components/HeroSection";
import Chapter1Section from "@/components/Chapter1Section";
import Chapter2Section from "@/components/Chapter2Section";
import Chapter3Section from "@/components/Chapter3Section";
import InterludoSection from "@/components/InterludoSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Header */}
      <nav className="fixed top-4 left-4 z-50">
        <span className="font-mono text-xs text-muted-foreground">Ian Portafolio</span>
      </nav>

      <HeroSection />
      <Chapter1Section />
      <Chapter2Section />
      <Chapter3Section />
      <InterludoSection />
      <FooterSection />
    </main>
  );
};

export default Index;
