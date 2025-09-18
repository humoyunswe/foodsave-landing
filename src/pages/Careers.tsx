import { Button } from "@/components/ui/button";
import { useState } from "react";
import CareersContactDialog from "@/components/CareersContactDialog";
import { HeartHandshake, Trophy, Users, Lightbulb, Leaf } from "lucide-react";

const benefits = [
  { icon: Users, title: "Гибкий формат", desc: "Гибридный формат и поддержка баланса" },
  { icon: Trophy, title: "Рост и развитие", desc: "Обучение, обмен опытом и менторство" },
  { icon: HeartHandshake, title: "Забота и культура", desc: "Доверие, уважение и командная работа" },
  { icon: Leaf, title: "Реальное влияние", desc: "Каждый день помогаем снижать отходы" },
];

const values = [
  { title: "Создаём наследие", desc: "Инициативны, но остаёмся скромными и открытыми" },
  { title: "Поднимаем планку", desc: "Смелость, амбиции и постоянный рост" },
  { title: "Побеждаем вместе", desc: "Командная ответственность и поддержка" },
  { title: "Делаем просто", desc: "Фокус на важном и прозрачная коммуникация" },
  { title: "Заботимся", desc: "О людях, партнёрах и планете" },
];

const Careers = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-[70vh] w-full bg-white">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 pt-28 pb-16 md:pt-32">
        <h1 className="text-4xl lg:text-6xl font-bold text-primary mb-6">
          Присоединяйтесь и помогайте бороться с пищевыми отходами
        </h1>
        <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
          Мы строим команду, где каждый делает вклад в более устойчивое будущее. Работая в FoodSave,
          вы помогаете спасать качественную еду и приносите ощутимую пользу людям и планете.
        </p>
        <div className="flex gap-4">
          <Button className="bg-primary text-white hover:bg-primary/90">Смотреть роли (скоро)</Button>
          <Button variant="outline" className="border-primary text-primary" onClick={() => setOpen(true)}>Написать нам</Button>
        </div>
      </section>

      {/* Benefits */}
      <section className="w-full">
        <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b, i) => (
            <div key={i} className="rounded-2xl border border-primary/10 p-6 bg-accent/30">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <b.icon className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">{b.title}</h3>
              <p className="text-muted-foreground">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="w-full">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <h2 className="text-2xl lg:text-3xl font-bold text-primary mb-6">Наши ценности</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {values.map((v, i) => (
              <div key={i} className="rounded-2xl border border-primary/10 p-5">
                <h3 className="text-lg font-semibold text-primary mb-1">{v.title}</h3>
                <p className="text-muted-foreground text-sm">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Life at FoodSave */}
      <section className="w-full bg-accent/30">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold text-primary mb-4">Жизнь в FoodSave</h2>
              <p className="text-muted-foreground text-lg">
                Мы ценим открытость, ответственность и взаимную поддержку. Нам важны результат и ваше благополучие —
                поэтому мы строим гибкую среду, где удобно работать и расти.
              </p>
            </div>
            <div className="rounded-2xl bg-primary/5 h-56 lg:h-64" />
          </div>
        </div>
      </section>

      {/* Roles placeholder */}
      <section className="w-full">
        <div className="max-w-7xl mx-auto px-4 py-16 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-primary mb-4">Открытые роли</h2>
          <p className="text-muted-foreground mb-6">Скоро здесь появятся вакансии. А пока вы можете написать нам.</p>
          <Button variant="outline" className="border-primary text-primary" onClick={() => setOpen(true)}>Написать нам</Button>
        </div>
      </section>

      <CareersContactDialog open={open} onOpenChange={setOpen} />
    </div>
  );
};

export default Careers; 