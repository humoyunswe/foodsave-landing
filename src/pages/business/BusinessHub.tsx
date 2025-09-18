import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Card = ({ title, desc, to }: { title: string; desc: string; to: string }) => (
  <Link to={to} className="block rounded-2xl border border-primary/10 p-6 bg-accent/30 hover:shadow-sm transition-shadow">
    <h3 className="text-xl font-semibold text-primary mb-2">{title}</h3>
    <p className="text-muted-foreground">{desc}</p>
  </Link>
);

const BusinessHub = () => {
  return (
    <div className="min-h-[70vh] w-full bg-white">
      <section className="max-w-7xl mx-auto px-4 pt-28 pb-10 md:pt-32">
        <h1 className="text-4xl lg:text-6xl font-bold text-primary mb-4">Для бизнеса</h1>
        <p className="text-lg text-muted-foreground max-w-3xl">
          Продавайте излишки, увеличивайте выручку и привлекайте новых клиентов вместе с FoodSave.
        </p>
        <div className="flex gap-4 mt-6">
          <Link to="/business/marketplace"><Button>Marketplace</Button></Link>
          <Link to="/business/platform"><Button variant="outline" className="border-primary text-primary">Платформа</Button></Link>
          <Link to="/business/look-smell-taste"><Button variant="outline" className="border-primary text-primary">Look‑Smell‑Taste</Button></Link>
        </div>
      </section>

      <section className="w-full">
        <div className="max-w-7xl mx-auto px-4 pb-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card title="Marketplace" desc="Surprise Bags — продавайте излишки в удобных наборах" to="/business/marketplace" />
          <Card title="Платформа" desc="Управление сроками, markdown, донейшены — розница end‑to‑end" to="/business/platform" />
          <Card title="Look‑Smell‑Taste" desc="Обучаем потребителей снижать фудвейст дома" to="/business/look-smell-taste" />
        </div>
      </section>

      <section className="w-full bg-accent/30">
        <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-primary/10 p-6 bg-white/60">
            <h3 className="text-lg font-semibold text-primary mb-2">Новые продажи</h3>
            <p className="text-muted-foreground">Привлекайте пользователей из приложения, увеличивайте средний чек</p>
          </div>
          <div className="rounded-2xl border border-primary/10 p-6 bg-white/60">
            <h3 className="text-lg font-semibold text-primary mb-2">Операционная эффективность</h3>
            <p className="text-muted-foreground">Управляйте излишками и сроками, снижайте списания</p>
          </div>
          <div className="rounded-2xl border border-primary/10 p-6 bg-white/60">
            <h3 className="text-lg font-semibold text-primary mb-2">Устойчивость</h3>
            <p className="text-muted-foreground">Меньше CO2e и отходов, сильнее бренд</p>
          </div>
        </div>
      </section>

      <section className="w-full">
        <div className="max-w-7xl mx-auto px-4 py-12 text-center">
          <Link to="/mystore"><Button className="bg-primary text-white hover:bg-primary/90">Подключить бизнес</Button></Link>
        </div>
      </section>
    </div>
  );
};

export default BusinessHub; 