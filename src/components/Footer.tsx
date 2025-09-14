import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
const brandIcon = "/icon1.webp";

const Footer = () => {
  const partnerBrands = [
    "OSHI", "EVOS", "MAX WAY", "BELLISSIMO", "ЧАЙХОНА №1", "КОФЕИН", "ТОМИ YUK"
  ];

  return (
    <div className="bg-white">
      {/* CTA Section */}
      <div className="py-8 md:py-16 px-4 text-center overflow-hidden">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-primary mb-6 md:mb-8 px-2">
          ПРИСОЕДИНЯЙТЕСЬ К БОЛЕЕ ЧЕМ 5,000 БИЗНЕСОВ, {" "}
          <br className="hidden md:block" />
          БОРЮЩИХСЯ С ПИЩЕВЫМИ ОТХОДАМИ ВМЕСТЕ С НАМИ
        </h2>
        
        {/* Scrolling brands */}
        <div 
          className="mb-8 md:mb-12 py-4 overflow-hidden relative"
          style={{
            pointerEvents: 'none',
            userSelect: 'none',
            WebkitUserSelect: 'none',
            WebkitTouchCallout: 'none'
          }}
        >
          <div className="absolute inset-y-0 left-0 w-8 md:w-16 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-8 md:w-16 bg-gradient-to-l from-white to-transparent z-10" />
          <div className="inline-block whitespace-nowrap">
            <div className="animate-scroll text-xl md:text-2xl lg:text-4xl font-bold text-red-500 inline-block px-2">
              {`${partnerBrands.join(' • ')} • `.repeat(5)}
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-2">
          <Button size="lg" variant="outline" className="border-primary text-primary text-sm md:text-base">
            СКАЧАТЬ ПРИЛОЖЕНИЕ
            <ArrowRight className="ml-1 md:ml-2 h-4 w-4 md:h-5 md:w-5" />
          </Button>
          <Button size="lg" className="text-sm md:text-base">
            РЕГИСТРАЦИЯ БИЗНЕСА
            <ArrowRight className="ml-1 md:ml-2 h-4 w-4 md:h-5 md:w-5" />
          </Button>
        </div>
      </div>

      {/* Footer Section */}
      <div className="relative bg-[#007C71] text-white">
        <footer className="w-full py-8 md:py-16 px-4">
          <div className="max-w-7xl mx-auto w-full">
            {/* Large FoodSave Text */}
            <div className="text-center mb-6 md:mb-12">
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight">
                FOOD SAVE
              </h2>
            </div>

            {/* Footer Links */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-6 md:mb-8">
              <div>
                <h4 className="font-semibold mb-2 md:mb-4 text-sm md:text-base">КАРЬЕРА</h4>
              </div>
              <div>
                <h4 className="font-semibold mb-2 md:mb-4 text-sm md:text-base">ПРЕССА</h4>
              </div>
              <div>
                <h4 className="font-semibold mb-2 md:mb-4 text-sm md:text-base">ПОДДЕРЖКА</h4>
              </div>
              <div>
                <h4 className="font-semibold mb-2 md:mb-4 text-sm md:text-base">МОЙ АККАУНТ</h4>
              </div>
            </div>

            {/* Logo and Social Links */}
            <div className="flex flex-col md:flex-row justify-between items-center mb-6 md:mb-8">
              <div className="flex items-center space-x-2 mb-4 md:mb-0">
                <img src={brandIcon} alt="FoodSave" className="h-8 w-8 md:h-10 md:w-10" />
                <span className="text-xl md:text-2xl font-bold ml-2">FoodSave</span>
              </div>

              <div className="flex flex-wrap justify-center gap-3 md:gap-4 text-sm md:text-base">
                <a href="#" className="text-white/60 hover:text-white whitespace-nowrap">LinkedIn</a>
                <a href="#" className="text-white/60 hover:text-white whitespace-nowrap">Instagram</a>
                <a href="#" className="text-white/60 hover:text-white whitespace-nowrap">Facebook</a>
                <a href="#" className="text-white/60 hover:text-white whitespace-nowrap">TikTok</a>
                <a href="#" className="text-white/60 hover:text-white whitespace-nowrap">YouTube</a>
                <a href="#" className="text-white/60 hover:text-white whitespace-nowrap">Twitter</a>
              </div>
            </div>

            {/* App Store Links */}
            <div className="flex flex-col sm:grid sm:grid-cols-3 gap-3 md:gap-4 mb-6 md:mb-8">
              <Button className="bg-black text-white hover:bg-black/90 text-xs sm:text-sm">
                <svg className="w-4 h-4 md:w-5 md:h-5 mr-1 md:mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"/>
                </svg>
                App Store
              </Button>
              <Button className="bg-black text-white hover:bg-black/90 text-xs sm:text-sm">
                <svg className="w-4 h-4 md:w-5 md:h-5 mr-1 md:mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                </svg>
                Google Play
              </Button>
              <Button className="bg-black text-white hover:bg-black/90 text-xs sm:text-sm">
                <svg className="w-4 h-4 md:w-5 md:h-5 mr-1 md:mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"/>
                </svg>
                AppGallery
              </Button>
            </div>

            {/* Copyright and Links */}
            <div className="border-t border-white/20 pt-4 md:pt-6">
              <div className="flex flex-wrap justify-center gap-2 md:gap-4 text-[10px] xs:text-xs sm:text-sm text-white/60 mb-3">
                <a href="#" className="hover:text-white transition-colors">Юридическая информация</a>
                <span className="opacity-50">•</span>
                <a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a>
                <span className="opacity-50">•</span>
                <a href="#" className="hover:text-white transition-colors">Cookie</a>
                <span className="opacity-50">•</span>
                <a href="#" className="hover:text-white transition-colors">Условия</a>
                <span className="opacity-50">•</span>
                <a href="#" className="hover:text-white transition-colors">Контакты</a>
                <span className="opacity-50">•</span>
                <a href="#" className="hover:text-white transition-colors">DSA</a>
              </div>
              <div className="text-center text-xs sm:text-sm text-white/60">
                © 2024 FoodSave Uzbekistan. Все права защищены.
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;