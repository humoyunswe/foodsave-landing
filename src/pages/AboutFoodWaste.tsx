import { Button } from "@/components/ui/button";
import { useCTAs } from "@/hooks/use-ctas";

const Stat = ({ value, label }: { value: string; label: string }) => (
  <div className="rounded-2xl border border-primary/10 p-6 bg-white/60">
    <div className="text-3xl lg:text-4xl font-extrabold text-primary mb-1">{value}</div>
    <div className="text-muted-foreground text-sm lg:text-base">{label}</div>
  </div>
);

const AboutFoodWaste = () => {
  const { openGooglePlay, scrollToTop } = useCTAs();
  return (
    <div className="min-h-[70vh] w-full bg-white">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 pt-28 pb-10 md:pt-32">
        <h1 className="text-4xl lg:text-6xl font-bold text-primary mb-4">О фудвейсте</h1>
        <p className="text-lg text-muted-foreground max-w-3xl">
          Пищевые отходы — глобальная проблема. Понимание масштабов и причин помогает принимать верные решения и снижать излишки еды в Узбекистане.
        </p>
      </section>

      {/* Key facts */}
      <section className="w-full">
        <div className="max-w-7xl mx-auto px-4 pb-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Stat value="40%" label="Произведённой еды теряется или выбрасывается (WWF)" />
            <Stat value="10%" label="Глобальных выбросов парниковых газов — из‑за пищевых отходов" />
            <Stat value="25%" label="Пресной воды уходит на еду, которая попадёт в мусор" />
            <Stat value="$1.1 трлн" label="Ежегодные экономические потери от фудвейста" />
          </div>
        </div>
      </section>

      {/* Definitions */}
      <section className="w-full bg-accent/30">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div className="rounded-2xl border border-primary/10 p-6 bg-white">
              <h2 className="text-2xl lg:text-3xl font-bold text-primary mb-3">Определения</h2>
              <p className="text-muted-foreground mb-3"><b>Потери пищи</b> — на ранних стадиях (урожай, хранение, перевозка) до магазина.</p>
              <p className="text-muted-foreground mb-3"><b>Пищевые отходы</b> — на поздних стадиях: ритейл, HoReCa, домохозяйства.</p>
              <p className="text-muted-foreground">Сокращение фудвейста — один из самых эффективных шагов против изменения климата.</p>
            </div>
            <div className="rounded-2xl border border-primary/10 p-6 bg-white">
              <h2 className="text-2xl lg:text-3xl font-bold text-primary mb-3">Где образуются излишки</h2>
              <ul className="list-disc pl-5 text-muted-foreground space-y-2">
                <li>Ритейл: сроки годности, планирование закупок</li>
                <li>HoReCa: непредсказуемый спрос, порционный учёт</li>
                <li>Домохозяйства: избыточные покупки, хранение</li>
                <li>Логистика: температура и сбои поставок</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits of reducing */}
      <section className="w-full">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <h2 className="text-2xl lg:text-3xl font-bold text-primary mb-6">Зачем сокращать фудвейст</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-primary/10 p-6 bg-white/60">
              <h3 className="text-lg font-semibold text-primary mb-2">Экология</h3>
              <p className="text-muted-foreground">Меньше CO2e, экономия воды и земли, меньше свалок.</p>
            </div>
            <div className="rounded-2xl border border-primary/10 p-6 bg-white/60">
              <h3 className="text-lg font-semibold text-primary mb-2">Экономия</h3>
              <p className="text-muted-foreground">Снижение издержек у бизнеса и выгода для пользователей.</p>
            </div>
            <div className="rounded-2xl border border-primary/10 p-6 bg-white/60">
              <h3 className="text-lg font-semibold text-primary mb-2">Социальный эффект</h3>
              <p className="text-muted-foreground">Доступ к качественной еде по лучшим ценам.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full bg-accent/30">
        <div className="max-w-7xl mx-auto px-4 py-12 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-primary mb-3">Начните спасать еду уже сегодня</h2>
          <p className="text-muted-foreground mb-6">Скачайте приложение FoodSave и находите выгодные наборы рядом с вами.</p>
          <Button className="bg-primary text-white hover:bg-primary/90" onClick={() => { scrollToTop(); openGooglePlay(); }}>Скачать приложение</Button>
        </div>
      </section>
    </div>
  );
};

export default AboutFoodWaste; 