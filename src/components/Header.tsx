import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import foodSaveLogo from "@/assets/foodsave-logo.png";

const Header = () => {
  return (
    <header className="w-full bg-background border-b px-4 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo and Navigation */}
        <div className="flex items-center space-x-8">
          <div className="flex items-center space-x-2">
            <img src={foodSaveLogo} alt="FoodSave" className="h-8 w-8" />
            <span className="text-xl font-bold text-primary">FoodSave</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <div className="relative group">
              <button className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                ПРИЛОЖЕНИЕ
              </button>
            </div>
            <div className="relative group">
              <button className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                ДЛЯ БИЗНЕСА
              </button>
            </div>
            <div className="relative group">
              <button className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                О НАС
              </button>
            </div>
            <div className="relative group">
              <button className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                О ФУДВЕЙСТЕ
              </button>
            </div>
          </nav>
        </div>

        {/* CTA Buttons */}
        <div className="flex items-center space-x-4">
          <Button variant="outline" size="sm" className="hidden sm:flex items-center">
            СКАЧАТЬ ПРИЛОЖЕНИЕ
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <a href="https://foodsave.uz/accounts/register/" target="_blank" rel="noopener noreferrer">
            <Button size="sm" className="items-center">
              РЕГИСТРАЦИЯ БИЗНЕСА
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;