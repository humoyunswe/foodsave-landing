import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Navigation */}
      <nav className="flex items-center justify-between p-6">
        <div className="text-2xl font-bold text-white">FoodSave</div>
        <div className="flex items-center gap-4">
          <Link to="/business">
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              ДЛЯ БИЗНЕСА
            </Button>
          </Link>
          <Button className="bg-white text-primary hover:bg-white/90">
            РЕГИСТРАЦИЯ БИЗНЕСА
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="flex min-h-[80vh] items-center justify-center px-6">
        <div className="text-center text-white max-w-4xl">
          <h1 className="mb-6 text-5xl font-bold lg:text-7xl">
            СПАСАЙТЕ ВКУСНУЮ ЕДУ ОТ ВЫБРАСЫВАНИЯ
          </h1>
          <p className="mb-8 text-xl lg:text-2xl text-white/90">
            Первая в Узбекистане платформа для борьбы с пищевыми отходами. 
            Покупайте качественную еду по выгодным ценам от кафе, ресторанов и магазинов.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-glow">
              СКАЧАТЬ ПРИЛОЖЕНИЕ
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Link to="/business">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                ЗАРЕГИСТРИРОВАТЬ БИЗНЕС
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
