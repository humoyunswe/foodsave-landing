import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroPhoneImage from "@/assets/hero-phone.jpg";
import { useCTAs } from "@/hooks/use-ctas";

const HeroSection = () => {
  const { openGooglePlay, openBusinessRegistration, scrollToTop } = useCTAs();
  return (
    <section id="hero" className="relative w-full bg-gradient-to-br from-primary to-primary/90 text-white min-h-[100vh] flex items-center pt-24">
      <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Hero Text */}
        <div className="text-center lg:text-left">
          <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-8">
            СПАСАЙТЕ ВКУСНУЮ ЕДУ ОТ{" "}
            <span className="text-white/90">ВЫБРАСЫВАНИЯ</span>
          </h1>
          
          <p className="text-lg lg:text-xl text-white/90 mb-8 max-w-lg">
            Первая в Узбекистане платформа для борьбы с пищевыми отходами. 
            Покупайте качественную еду по выгодным ценам от кафе, ресторанов и магазинов.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button 
              size="lg" 
              variant="secondary"
              className="text-primary bg-white hover:bg-white/90 font-semibold"
              onClick={() => { scrollToTop(); openGooglePlay(); }}
            >
              СКАЧАТЬ ПРИЛОЖЕНИЕ
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="secondary"
              className="text-primary bg-white hover:bg-white/90 font-semibold"
              onClick={() => { scrollToTop(); openBusinessRegistration(); }}
            >
              ЗАРЕГИСТРИРОВАТЬ БИЗНЕС
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Phone Mockup */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            <img 
              src={heroPhoneImage} 
              alt="FoodSave приложение"
              className="max-w-md w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;