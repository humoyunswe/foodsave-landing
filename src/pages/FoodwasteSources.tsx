import { Button } from "@/components/ui/button";
import { useCTAs } from "@/hooks/use-ctas";

const cards = [
  { title: "Ритейл", desc: "Сроки годности, излишние закупки и планирование", icon: "🛒" },
  { title: "HoReCa", desc: "Непредсказуемый спрос и порционный учёт", icon: "🍽️" },
  { title: "Домохозяйства", desc: "Излишние покупки и хранение продуктов", icon: "🏠" },
  { title: "Логистика", desc: "Нарушение температур и сбои поставок", icon: "🚚" },
];

const FoodwasteSources = () => {
  const { scrollToId, scrollToTop } = useCTAs();
  return (
    <div className="min-h-[70vh] w-full bg-white">
      <section className="max-w-7xl mx-auto px-4 pt-28 pb-10 md:pt-32">
        <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-4">Источники пищевых отходов</h1>
        <p className="text-lg text-muted-foreground max-w-3xl">Где чаще всего возникают излишки и как FoodSave помогает их сокращать.</p>
      </section>
      <section className="w-full">
        <div className="max-w-7xl mx-auto px-4 pb-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((c, i) => (
            <div key={i} className="rounded-2xl border border-primary/10 p-6 bg-accent/30">
              <div className="text-4xl mb-2">{c.icon}</div>
              <h3 className="text-xl font-semibold text-primary mb-1">{c.title}</h3>
              <p className="text-muted-foreground text-sm">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="w-full">
        <div className="max-w-7xl mx-auto px-4 pb-16 text-center">
          <Button variant="outline" className="border-primary text-primary" onClick={() => { scrollToTop(); scrollToId('how-it-works'); }}>Как это работает</Button>
        </div>
      </section>
    </div>
  );
};

export default FoodwasteSources; 