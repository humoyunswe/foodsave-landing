import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Step = ({ n, title, desc }: { n: number; title: string; desc: string }) => (
  <div className="rounded-2xl border border-primary/10 p-6 bg-white/60">
    <div className="text-sm text-primary/80 mb-1">Шаг {n}</div>
    <h3 className="text-lg font-semibold text-primary mb-2">{title}</h3>
    <p className="text-muted-foreground">{desc}</p>
  </div>
);

const Marketplace = () => {
  return (
    <div className="min-h-[70vh] w-full bg-white">
      <section className="max-w-7xl mx-auto px-4 pt-28 pb-10 md:pt-32">
        <h1 className="text-4xl lg:text-6xl font-bold text-primary mb-4">Marketplace — Surprise Bags</h1>
        <p className="text-lg text-muted-foreground max-w-3xl">Продавайте излишки в удобных наборах по выгодной цене. Получайте дополнительный доход и приводите новых клиентов в офлайн.</p>
        <div className="flex gap-4 mt-6">
          <Link to="/mystore"><Button className="bg-primary text-white hover:bg-primary/90">Подключить бизнес</Button></Link>
          <Link to="/business"><Button variant="outline" className="border-primary text-primary">К другим решениям</Button></Link>
        </div>
      </section>

      <section className="w-full">
        <div className="max-w-7xl mx-auto px-4 pb-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Step n={1} title="Регистрация и настройка" desc="Подайте заявку, получите доступ. Добавляйте наборы, цены и время выдачи." />
          <Step n={2} title="Публикация и бронирование" desc="Ваши наборы видны на карте в приложении. Пользователи бронируют и оплачивают." />
          <Step n={3} title="Выдача и аналитика" desc="Выдайте заказ по коду в приложении. Смотрите выручку в кабинете." />
        </div>
      </section>

      <section className="w-full bg-accent/30">
        <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-primary/10 p-6 bg-white">
            <div className="text-3xl font-extrabold text-primary mb-1">41%</div>
            <p className="text-muted-foreground">Клиентов покупают дополнительно при выдаче</p>
          </div>
          <div className="rounded-2xl border border-primary/10 p-6 bg-white">
            <div className="text-3xl font-extrabold text-primary mb-1">61%</div>
            <p className="text-muted-foreground">Приходят в магазин именно из‑за набора</p>
          </div>
          <div className="rounded-2xl border border-primary/10 p-6 bg-white">
            <div className="text-3xl font-extrabold text-primary mb-1">2.7 кг</div>
            <p className="text-muted-foreground">CO2e избегается при каждом спасённом наборе</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Marketplace; 