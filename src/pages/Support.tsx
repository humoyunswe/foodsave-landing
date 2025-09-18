import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import SupportContactDialog from "@/components/SupportContactDialog";

type Role = "user" | "business" | "partner";

const faqs: Record<Role, { q: string; a: string }[]> = {
  user: [
    { q: "Как скачать и начать пользоваться приложением?", a: "Скачайте FoodSave в App Store или Google Play, зарегистрируйтесь и разрешите доступ к геопозиции — так вы увидите доступные предложения рядом." },
    { q: "Как оформить и получить заказ?", a: "Выберите набор, оплатите в приложении и приходите в указанное время. Покажите код в приложении — партнер передаст заказ." },
    { q: "Что делать, если возникла проблема с заказом?", a: "Откройте раздел помощи в приложении или свяжитесь с нами через форму — мы поможем и разберём ситуацию." },
  ],
  business: [
    { q: "Как подключить бизнес к FoodSave?", a: "Оставьте заявку через форму регистрации бизнеса — мы свяжемся, настроим аккаунт и поможем запустить первые предложения." },
    { q: "Как управлять предложениями?", a: "Через веб‑кабинет или приложение: указывайте время выдачи, доступные наборы и цену. Все изменения применяются сразу." },
    { q: "Финансы и отчеты", a: "Ежемесячные отчёты доступны в кабинете. Вопросы по выплатам — через поддержку или контакт вашего менеджера." },
  ],
  partner: [
    { q: "У меня партнёрский запрос", a: "Напишите нам через форму на странице прессы или бизнес‑регистрации — мы оперативно ответим и обсудим детали." },
    { q: "PR и медиа", a: "Смотрите пресс‑центр: там контакты для СМИ и медиа‑ассеты. Мы открыты для сотрудничества." },
    { q: "Технические интеграции", a: "Опишите сценарий и стек — наша команда изучит и предложит следующий шаг." },
  ],
};

const Support = () => {
  const [role, setRole] = useState<Role>("user");
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-[70vh] w-full bg-white">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 pt-28 pb-8 md:pt-32">
        <h1 className="text-4xl lg:text-6xl font-bold text-primary mb-4">Поддержка</h1>
        <p className="text-lg text-muted-foreground max-w-3xl">Нужна помощь? Выберите, кто вы, и мы покажем подходящие ответы.</p>
      </section>

      {/* Role selector */}
      <section className="w-full">
        <div className="max-w-7xl mx-auto px-4 pb-4">
          <div className="inline-flex rounded-lg border border-primary/10 bg-accent/30 p-1 transition-colors">
            <Button variant={role === "user" ? "default" : "ghost"} className={`rounded-md transition-all ${role === "user" ? "bg-primary text-white" : "text-primary"}`} onClick={() => setRole("user")}>Пользователь</Button>
            <Button variant={role === "business" ? "default" : "ghost"} className={`rounded-md transition-all ${role === "business" ? "bg-primary text-white" : "text-primary"}`} onClick={() => setRole("business")}>Бизнес</Button>
            <Button variant={role === "partner" ? "default" : "ghost"} className={`rounded-md transition-all ${role === "partner" ? "bg-primary text-white" : "text-primary"}`} onClick={() => setRole("partner")}>Партнёр</Button>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="w-full">
        <div className="max-w-5xl mx-auto px-4 py-8">
          <Accordion type="single" collapsible className="w-full">
            {faqs[role].map((item, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`}>
                <AccordionTrigger className="text-left text-primary">{item.q}</AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">{item.a}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="w-full bg-accent/30">
        <div className="max-w-7xl mx-auto px-4 py-12 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-primary mb-3">Не нашли ответ?</h2>
          <p className="text-muted-foreground mb-6">Напишите нам — поможем в ближайшее время.</p>
          <Button variant="outline" className="border-primary text-primary" onClick={() => setOpen(true)}>Написать в поддержку</Button>
        </div>
      </section>

      <SupportContactDialog open={open} onOpenChange={setOpen} />
    </div>
  );
};

export default Support; 