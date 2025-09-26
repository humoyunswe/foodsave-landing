import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
const brandIcon = "/icon1.webp";
import { useCTAs } from "@/hooks/use-ctas";
import { Link } from "react-router-dom";

const Footer = () => {
  const partnerBrands = [
    "OSHI", "EVOS", "MAX WAY", "BELLISSИМО", "ЧАЙХОНА №1", "КОФЕИН", "ТОМИ YUK"
  ];
  const { openGooglePlay, openAppStore, openAppGallery, scrollToTop } = useCTAs();

  const openBusinessDialog = () => {
    try {
      scrollToTop();
      window.dispatchEvent(new Event('open-biz-dialog'));
    } catch {}
  };

  const openSupportDialog = () => {
    try {
      scrollToTop();
      window.dispatchEvent(new Event('open-support-dialog'));
    } catch {}
  };

  return (
    <>
      {/* CTA Section */}
      <div className="bg-white py-16 px-4 text-center overflow-hidden">
        <h2 className="text-2xl lg:text-3xl font-bold text-primary mb-8">
          ПРИСОЕДИНЯЙТЕСЬ К БОЛЕЕ ЧЕМ 5,000 БИЗНЕСОВ,{" "}
          <br className="hidden md:block" />
          БОРЮЩИХСЯ С ПИЩЕВЫМИ ОТХОДАМИ ВМЕСТЕ С НАМИ
        </h2>
        
        <div className="mb-12 py-4 overflow-hidden pointer-events-none">
          <div className="inline-block whitespace-nowrap">
            <div className="animate-scroll text-2xl lg:text-4xl font-bold" style={{ color: 'rgb(255, 80, 60)' }}>
              {`${partnerBrands.join(' • ')} • `.repeat(10)}
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" variant="outline" className="border-primary text-primary" onClick={() => { scrollToTop(); openGooglePlay(); }}>
            СКАЧАТЬ ПРИЛОЖЕНИЕ
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button size="lg" onClick={openBusinessDialog}>
            РЕГИСТРАЦИЯ БИЗНЕСА
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>

        {/* Second Scrolling Partner Brands */}
        <div className="mt-12 py-4 overflow-hidden pointer-events-none">
          <div className="inline-block whitespace-nowrap">
            <div className="animate-scroll-reverse text-2xl lg:text-4xl font-bold inline-block" style={{ color: 'rgb(255, 80, 60)' }}>
              {`${partnerBrands.join(' • ')} • `.repeat(10)}
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Footer */}
      <div className="relative" style={{ height: '100vh', '--footer-height': '600px' } as React.CSSProperties}>
        <div className="h-[calc(100vh-600px)] bg-white relative z-10" />
        <footer className="sticky bottom-0 text-white" style={{ backgroundColor: '#007C71', height: '600px', marginTop: 'auto' }}>
          <div className="py-16 px-4 h-full flex flex-col justify-center">
            <div className="max-w-7xl mx-auto w-full">
              <div className="text-center mb-12">
                <h2 className="text-6xl lg:text-9xl font-bold">FOOD SAVE</h2>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
                <div>
                  <Link to="/careers" className="font-semibold mb-4 inline-block hover:underline" onClick={scrollToTop}>КАРЬЕРА</Link>
                </div>
                <div>
                  <Link to="/press" className="font-semibold mb-4 inline-block hover:underline" onClick={scrollToTop}>ПРЕССА</Link>
                </div>
                <div>
                  <Link to="/support" className="font-semibold mb-4 inline-block hover:underline" onClick={scrollToTop}>ПОДДЕРЖКА</Link>
                </div>
                <div>
                  <Link to="/mystore" className="font-semibold mb-4 inline-block hover:underline" onClick={scrollToTop}>МОЙ МАГАЗИН</Link>
                </div>
              </div>

              {/* App store buttons (restored) */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button className="bg-black text-white hover:bg-black/90" onClick={() => { scrollToTop(); openAppStore(); }}>
                  <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"/>
                  </svg>
                  Скачать в App Store
                </Button>
                <Button className="bg-black text-white hover:bg-black/90" onClick={() => { scrollToTop(); openGooglePlay(); }}>
                  <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                  </svg>
                  Скачать в Google Play
                </Button>
                <Button className="bg-black text-white hover:bg-black/90" onClick={() => { scrollToTop(); openAppGallery(); }}>
                  <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"/>
                  </svg>
                  Скачать в Huawei AppGallery
                </Button>
              </div>

              {/* Legal links */}
              <div className="border-t border-white/20 pt-8">
                <div className="flex flex-wrap justify-center gap-6 text-sm text-white/60 mb-4">
                  <Link to="/legal" onClick={scrollToTop}>Юридическая информация</Link>
                  <Link to="/privacy" onClick={scrollToTop}>Политика конфиденциальности</Link>
                  <Link to="/cookies" onClick={scrollToTop}>Политика использования cookie</Link>
                  <Link to="/terms" onClick={scrollToTop}>Условия использования</Link>
                  <button onClick={openSupportDialog} className="underline-offset-2 hover:underline">Свяжитесь с нами</button>
                  <Link to="/dsa-disclosure" onClick={scrollToTop}>Раскрытие информации DSA</Link>
                  <Link to="/foodwaste-sources" onClick={scrollToTop}>Источники пищевых отходов</Link>
                  <Link to="/status" onClick={scrollToTop}>Статус</Link>
                </div>
                <div className="text-center text-sm text-white/60">
                  © 2025 FoodSave Uzbekistan. Все права защищены.
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;