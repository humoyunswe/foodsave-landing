import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, TrendingUp, Users, Globe, DollarSign, Leaf, Target, CheckCircle, BarChart3, Clock, Shield } from "lucide-react";
import BusinessRegistrationDialog from "@/components/BusinessRegistrationDialog";
import businessPartnership from "@/assets/business-partnership.webp";
import appAnalytics from "@/assets/app-analytics.webp";
import restaurantStaff from "@/assets/restaurant-staff.webp";

const Business = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  
  const handleOpenDialog = () => {
    setIsDialogOpen(true);
  };
  
  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  const benefits = [
    {
      icon: DollarSign,
      title: "Дополнительная выручка",
      description: "Получайте до 40% дополнительного дохода от продуктов, которые иначе были бы выброшены",
      highlight: "$150-500/месяц",
    },
    {
      icon: Users,
      title: "Новые клиенты",
      description: "Привлекайте миллионы пользователей FoodSave и расширяйте клиентскую базу",
      highlight: "+200 клиентов",
    },
    {
      icon: Leaf,
      title: "Экологическая ответственность",
      description: "Сократите пищевые отходы на 80% и улучшите имидж компании",
      highlight: "80% меньше отходов",
    },
    {
      icon: BarChart3,
      title: "Умная аналитика",
      description: "Получайте детальную статистику продаж и оптимизируйте управление запасами",
      highlight: "Данные в реальном времени",
    },
  ];

  const features = [
    {
      title: "Маркетплейс FoodBox",
      description: "Продавайте излишки еды в специальных пакетах по 25-50% от первоначальной стоимости",
      features: ["Простая настройка", "Гибкие цены", "Автоматические уведомления"]
    },
    {
      title: "Платформа управления",
      description: "Полноценная система для отслеживания и перераспределения продуктов с истекающим сроком годности",
      features: ["AI-прогнозирование", "Управление скидками", "Интеграция с POS"]
    },
    {
      title: "Donation программа",
      description: "Перераспределяйте еду через сеть благотворительных организаций с полной отслеживаемостью",
      features: ["Налоговые льготы", "Сертификация CSR", "Отчетность по ESG"]
    },
  ];

  const testimonials = [
    {
      company: "Rixus",
      role: "Директор по операциям",
      text: "FoodSave помог нам сократить пищевые отходы на 75% и увеличить прибыльность. Это win-win решение для всех.",
      result: "+$500 ежемесячно"
    },
    {
      company: "Bakery",
      role: "Управляющий",
      text: "Теперь наши клиенты могут покупать свежую выпечку по выгодным ценам, а мы получаем дополнительный доход.",
      result: "200+ новых клиентов"
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#006260] to-[#005251] px-6 py-24 text-white">
        <div className="container mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="space-y-8">
              <Badge className="bg-white/20 text-white hover:bg-white/30 border-white/30 font-semibold">
                Первая платформа в Узбекистане
              </Badge>
              <div className="space-y-6">
                <h1 className="text-5xl font-bold leading-tight lg:text-6xl text-white">
                  Превратите пищевые отходы в 
                  <span className="text-teal-200 font-extrabold"> прибыль</span>
                </h1>
                <p className="text-xl text-white lg:text-2xl font-medium">
                  Присоединяйтесь к революции борьбы с пищевыми отходами в Узбекистане. 
                  Монетизируйте излишки еды и привлекайте новых клиентов.
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button 
                  size="lg" 
                  className="bg-white text-[#006260] hover:bg-teal-50 shadow-lg font-semibold"
                  onClick={handleOpenDialog}
                >
                  Начать сотрудничество
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg" className="border-white text-[#006260] hover:bg-white hover:text-[#006260] font-semibold" style={{ backgroundColor: 'white' }}>
                  Презентация проекта
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src={businessPartnership} 
                alt="Бизнес партнерство" 
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 rounded-xl bg-white p-6 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-[#006260] p-2">
                    <TrendingUp className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#006260]">+40% выручки</p>
                    <p className="text-sm text-gray-600">от излишков еды</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 bg-gradient-to-r from-teal-50 to-cyan-50">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-teal-100 text-[#006260] border-teal-200">Наша миссия</Badge>
            <h2 className="text-4xl font-bold mb-6 text-[#005251]">Революция в борьбе с пищевыми отходами</h2>
            <p className="text-xl text-[#006260] max-w-3xl mx-auto">
              Мы создаем первую в Узбекистане экосистему для устойчивого потребления еды, 
              объединяя бизнес, потребителей и технологии
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-3">
            <Card className="text-center shadow-lg border-0 bg-white hover:shadow-xl transition-shadow duration-300">
              <CardContent className="pt-8 pb-6">
                <div className="rounded-full bg-teal-100 p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-8 w-8 text-[#006260]" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-[#005251]">Для бизнеса</h3>
                <p className="text-[#006260]">Превращаем излишки в дополнительную прибыль и новых клиентов</p>
              </CardContent>
            </Card>
            
            <Card className="text-center shadow-lg border-0 bg-white hover:shadow-xl transition-shadow duration-300">
              <CardContent className="pt-8 pb-6">
                <div className="rounded-full bg-teal-100 p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Globe className="h-8 w-8 text-[#006260]" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-[#005251]">Для общества</h3>
                <p className="text-[#006260]">Доступная качественная еда для всех слоев населения</p>
              </CardContent>
            </Card>
            
            <Card className="text-center shadow-lg border-0 bg-white hover:shadow-xl transition-shadow duration-300">
              <CardContent className="pt-8 pb-6">
                <div className="rounded-full bg-teal-100 p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Leaf className="h-8 w-8 text-[#006260]" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-[#005251]">Для планеты</h3>
                <p className="text-[#006260]">Значительное сокращение пищевых отходов в стране</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-teal-100 text-[#006260] border-teal-200">Преимущества партнерства</Badge>
            <h2 className="text-4xl font-bold mb-6 text-[#005251]">Почему бизнес выбирает FoodSave?</h2>
            <p className="text-xl text-[#006260] max-w-2xl mx-auto">
              Наша платформа предоставляет комплексное решение для управления излишками еды
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index) => (
              <Card key={index} className="group hover:shadow-xl hover:shadow-[#006260]/10 transition-all duration-300 border-0 shadow-md">
                <CardHeader>
                  <div className="rounded-lg bg-teal-100 p-3 w-fit mb-4 group-hover:bg-[#006260] group-hover:text-white transition-colors">
                    <benefit.icon className="h-8 w-8 text-[#006260] group-hover:text-white" />
                  </div>
                  <CardTitle className="text-xl text-[#005251]">{benefit.title}</CardTitle>
                  <Badge variant="outline" className="w-fit border-teal-200 text-[#006260]">{benefit.highlight}</Badge>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-[#006260]">{benefit.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-gradient-to-r from-teal-50 to-cyan-50">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <Badge className="mb-4 bg-teal-100 text-[#006260] border-teal-200">Решения для бизнеса</Badge>
              <h2 className="text-4xl font-bold mb-6 text-[#005251]">Три мощных инструмента в одной платформе</h2>
              <div className="space-y-8">
                {features.map((feature, index) => (
                  <div key={index} className="space-y-4">
                    <h3 className="text-2xl font-semibold text-[#006260]">{feature.title}</h3>
                    <p className="text-[#006260] text-lg opacity-90">{feature.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {feature.features.map((item, idx) => (
                        <Badge key={idx} className="text-sm bg-teal-200 text-[#005251] hover:bg-teal-300">
                          <CheckCircle className="h-3 w-3 mr-1" />
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img 
                src={appAnalytics} 
                alt="Аналитика приложения" 
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -top-6 -right-6 rounded-xl bg-white p-4 shadow-xl">
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-[#006260]" />
                  <span className="font-semibold text-[#005251]">Реальное время</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Opportunity */}
      <section className="py-12">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="relative">
              <img 
                src={restaurantStaff} 
                alt="Сотрудник ресторана" 
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 rounded-xl bg-white p-6 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-[#006260] p-2">
                    <Target className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#006260]">Первые в Узбекистане</p>
                    <p className="text-sm text-[#006260] opacity-75">Уникальная возможность</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-8">
              <Badge className="mb-4 bg-teal-100 text-[#006260] border-teal-200">Инвестиционная возможность</Badge>
              <h2 className="text-4xl font-bold text-[#005251]">Станьте частью эко-революции в Центральной Азии</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-teal-100 p-2">
                    <Globe className="h-6 w-6 text-[#006260]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-[#005251]">Нетронутый рынок</h4>
                    <p className="text-[#006260]">Первая платформа такого типа в Узбекистане с населением 35 млн человек</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-teal-100 p-2">
                    <TrendingUp className="h-6 w-6 text-[#006260]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-[#005251]">Быстрый рост</h4>
                    <p className="text-[#006260]">Проверенная бизнес-модель Too Good To Go адаптированная для местного рынка</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-teal-100 p-2">
                    <Shield className="h-6 w-6 text-[#006260]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-[#005251]">ESG комплаенс</h4>
                    <p className="text-[#006260]">Соответствие международным стандартам устойчивого развития</p>
                  </div>
                </div>
              </div>
              <Button size="lg" className="bg-gradient-to-r from-[#006260] to-[#005251] border-0 shadow-lg shadow-[#006260]/30 text-white hover:from-[#005251] hover:to-[#004241]">
                Инвестиционная презентация
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 bg-gradient-to-r from-teal-50 to-cyan-50">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-teal-100 text-[#006260] border-teal-200">Отзывы партнеров</Badge>
            <h2 className="text-4xl font-bold mb-6 text-[#005251]">Что говорят наши партнеры</h2>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="shadow-lg border-0 bg-white hover:shadow-xl transition-shadow duration-300">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="h-5 w-5 text-amber-400">⭐</div>
                    ))}
                  </div>
                  <blockquote className="text-lg mb-6 italic text-[#006260]">"{testimonial.text}"</blockquote>
                  <div className="flex justify-between items-end">
                    <div>
                      <div className="font-semibold text-[#005251]">{testimonial.company}</div>
                      <div className="text-sm text-[#006260] opacity-75">{testimonial.role}</div>
                    </div>
                    <Badge className="bg-[#006260] text-white">{testimonial.result}</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-8">
        <div className="container mx-auto max-w-4xl px-6 text-center">
          <div className="space-y-8">
            <Badge className="mb-4 bg-teal-100 text-[#006260] border-teal-200">Начните сегодня</Badge>
            <h2 className="text-4xl font-bold lg:text-5xl text-[#005251]">
              Готовы присоединиться к борьбе с пищевыми отходами?
            </h2>
            <p className="text-xl text-[#006260]">
              Станьте частью экологической революции и увеличьте прибыльность вашего бизнеса
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button 
                size="lg" 
                onClick={handleOpenDialog}
                className="bg-gradient-to-r from-[#006260] to-[#005251] shadow-lg shadow-[#006260]/30 text-white hover:from-[#005251] hover:to-[#004241] font-semibold"
              >
                Зарегистрировать бизнес
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-[#006260] text-[#006260] hover:bg-teal-50">
                Связаться с нами
              </Button>
            </div>
            <div className="flex items-center justify-center gap-8 pt-8 text-sm text-[#006260]">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-[#006260]" />
                Бесплатная регистрация
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-[#006260]" />
                Поддержка 24/7
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-[#006260]" />
                Быстрый запуск
              </div>
            </div>
          </div>
        </div>
      </section>
      <BusinessRegistrationDialog 
        open={isDialogOpen} 
        onOpenChange={setIsDialogOpen} 
      />
    </div>
  );
};

export default Business;