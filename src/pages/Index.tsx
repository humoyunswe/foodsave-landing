import HeroSection from "../components/HeroSection";
import MissionSection from "../components/MissionSection";
import BenefitsSection from "../components/BenefitsSection";
import HowItWorksSection from "../components/HowItWorksSection";

const Index = () => {
  return (
    <div className="w-full">
      <HeroSection />
      <MissionSection />
      <BenefitsSection />
      <HowItWorksSection />
      <section id="foodwaste" className="w-full py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-primary mb-4">О ФУДВЕЙСТЕ</h2>
          <p className="text-muted-foreground">Скоро здесь появится больше информации о пищевых отходах и как мы с ними боремся.</p>
        </div>
      </section>
    </div>
  );
};

export default Index;
