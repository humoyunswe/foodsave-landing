import { Button } from "@/components/ui/button";
import { useState } from "react";
import CareersContactDialog from "@/components/CareersContactDialog";

const Careers = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-[70vh] w-full bg-white">
      <section className="max-w-5xl mx-auto px-4 pt-28 pb-16 md:pt-32">
        <h1 className="text-4xl lg:text-6xl font-bold text-primary mb-4">Карьера</h1>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
          Мы строим команду, которая помогает бороться с пищевыми отходами и создавать реальное воздействие на окружающую среду.
          Здесь скоро появится раздел с открытыми вакансиями, культурой и ценностями компании.
        </p>
        <div className="flex gap-4">
          <Button className="bg-primary text-white hover:bg-primary/90">См. открытые роли (скоро)</Button>
          <Button variant="outline" className="border-primary text-primary" onClick={() => setOpen(true)}>Написать нам</Button>
        </div>
      </section>
      <section className="bg-accent/30">
        <div className="max-w-5xl mx-auto px-4 py-12">
          <h2 className="text-2xl font-semibold text-primary mb-3">Почему FoodSave?</h2>
          <p className="text-muted-foreground">Культура, миссия и рост — все это будет здесь. Раздел в разработке.</p>
        </div>
      </section>
      <CareersContactDialog open={open} onOpenChange={setOpen} />
    </div>
  );
};

export default Careers; 