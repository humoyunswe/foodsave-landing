import { Button } from "@/components/ui/button";
import { useCTAs } from "@/hooks/use-ctas";

const releases = [
  { date: "30 сентября, 2024", title: "FoodSave запускает программу расширения партнерств в Ташкенте" },
  { date: "12 августа, 2024", title: "Более 100 тыс. спасённых наборов еды вместе с пользователями" },
  { date: "8 августа, 2024", title: "Новые партнёры: магазины у дома и кофейни по всему городу" },
  { date: "24 апреля, 2024", title: "Исследование: как пользователи относятся к срокам годности" },
];

const Press = () => {
  const { scrollToTop } = useCTAs();
  return (
    <div className="min-h-[70vh] w-full bg-white">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 pt-28 pb-10 md:pt-32">
        <h1 className="text-4xl lg:text-6xl font-bold text-primary mb-4">Пресс‑центр FoodSave</h1>
        <p className="text-lg text-muted-foreground max-w-3xl">
          Последние новости, медиа‑материалы и контакты для СМИ.
        </p>
      </section>

      {/* Press releases */}
      <section className="w-full">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-primary mb-6">Пресс‑релизы</h2>
          <div className="space-y-4">
            {releases.map((r, i) => (
              <div key={i} className="rounded-xl border border-primary/10 p-5 flex items-start justify-between gap-4">
                <div>
                  <div className="text-sm text-muted-foreground mb-1">{r.date}</div>
                  <div className="text-lg font-semibold">{r.title}</div>
                </div>
                <Button variant="ghost" className="text-primary hover:bg-primary/10">Читать (скоро)</Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Media assets */}
      <section className="w-full bg-accent/30">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <h2 className="text-2xl lg:text-3xl font-bold text-primary mb-6">Медиа‑материалы</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-primary/10 p-6 bg-white">
              <h3 className="text-lg font-semibold text-primary mb-2">Логотипы</h3>
              <p className="text-muted-foreground mb-4">Пакет логотипов FoodSave для печати и веба.</p>
              <Button onClick={scrollToTop}>Скачать (.zip)</Button>
            </div>
            <div className="rounded-2xl border border-primary/10 p-6 bg-white">
              <h3 className="text-lg font-semibold text-primary mb-2">Фото команды</h3>
              <p className="text-muted-foreground mb-4">Фотографии руководителей и команды.</p>
              <Button onClick={scrollToTop}>Скачать (.zip)</Button>
            </div>
            <div className="rounded-2xl border border-primary/10 p-6 bg-white">
              <h3 className="text-lg font-semibold text-primary mb-2">Изображения и ресурсы</h3>
              <p className="text-muted-foreground mb-4">Снимки приложения, иллюстрации и гайдлайны.</p>
              <Button onClick={scrollToTop}>Скачать (.zip)</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Impact report CTA */}
      <section className="w-full">
        <div className="max-w-7xl mx-auto px-4 py-12 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-primary mb-3">Наш вклад</h2>
          <p className="text-muted-foreground mb-6">Узнайте, как сообщество FoodSave помогает бороться с пищевыми отходами.</p>
          <Button variant="outline" className="border-primary text-primary">Скачать отчёт (скоро)</Button>
        </div>
      </section>

      {/* Press contact */}
      <section className="w-full bg-accent/30">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <h2 className="text-2xl lg:text-3xl font-bold text-primary mb-4">Для запросов СМИ</h2>
          <div className="rounded-2xl border border-primary/10 p-6 bg-white">
            <div className="text-lg font-semibold mb-1">Пресс‑контакты</div>
            <div className="text-muted-foreground">press@foodsave.uz</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Press; 