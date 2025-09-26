import { Heart, MapPin, Leaf, ChefHat } from "lucide-react";
import foodBagImage from "@/assets/food-bag.webp";
import "./BenefitsSection.mobile.css";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Heart,
      title: "НАСЛАЖДАЙТЕСЬ ВКУСНОЙ ЕДОЙ ПО ЦЕНЕ В 3 РАЗА ДЕШЕВЛЕ",
      description: "Экономьте до 70% на качественной еде"
    },
    {
      icon: MapPin,
      title: "СПАСАЙТЕ ЕДУ РЯДОМ С ВАМИ",
      description: "Находите предложения в вашем районе"
    },
    {
      icon: Leaf,
      title: "ПОМОГАЙТЕ ЭКОЛОГИИ, СОКРАЩАЯ ПИЩЕВЫЕ ОТХОДЫ",
      description: "Внесите вклад в защиту окружающей среды"
    },
    {
      icon: ChefHat,
      title: "ПРОБУЙТЕ НОВОЕ ИЗ МЕСТНЫХ КАФЕ И РЕСТОРАНОВ",
      description: "Открывайте новые вкусы в вашем городе"
    }
  ];

  const foodItems = "ЛАВАШ • САЛАТЫ • ПОНЧИКИ • ХЛЕБ • ВЫПЕЧКА • ПРОДУКТЫ • СЭНДВИЧИ • СУШИ • ПИЦЦА • МАФФИНЫ • БУРГЕРЫ";

  return (
    <section className="benefits-section w-full py-16 px-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl lg:text-3xl font-bold text-primary mb-4">
            ЗАЧЕМ ИСПОЛЬЗОВАТЬ
          </h2>
          <h3 className="text-4xl lg:text-6xl font-bold" style={{ color: 'rgb(255, 122, 107)' }}>
            FoodSave
          </h3>
        </div>

        <div className="benefits-grid grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          {/* Left Benefits */}
          <div className="space-y-8">
            {benefits.slice(0, 2).map((benefit, index) => (
              <div key={index} className="benefit-item text-center lg:text-right">
                <div className="benefit-icon inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                  <benefit.icon className="h-8 w-8 text-primary" />
                </div>
                <h4 className="benefit-title text-lg font-bold text-primary mb-2">
                  {benefit.title}
                </h4>
                <p className="benefit-description text-muted-foreground text-sm">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>

          {/* Center Image */}
          <div className="flex justify-center">
            <img 
              src={foodBagImage}
              alt="FoodSave сумка с продуктами"
              className="w-full max-w-md h-auto object-contain"
            />
          </div>

          {/* Right Benefits */}
          <div className="benefits-right space-y-8">
            {benefits.slice(2).map((benefit, index) => (
              <div key={index + 2} className="benefit-item text-center lg:text-left">
                <div className="benefit-icon inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                  <benefit.icon className="h-8 w-8 text-primary" />
                </div>
                <h4 className="benefit-title text-lg font-bold text-primary mb-2">
                  {benefit.title}
                </h4>
                <p className="benefit-description text-muted-foreground text-sm">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Categories - Full width */}
      <div className="w-screen relative left-1/2 right-1/2 -mx-[50vw] bg-[#005251] text-white py-4 overflow-hidden pointer-events-none">
        <div className="food-items-scroll inline-block whitespace-nowrap">
          <div className="animate-scroll slow text-2xl lg:text-4xl font-bold inline-block">
            {`${foodItems} • `.repeat(10)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;