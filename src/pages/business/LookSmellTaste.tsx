import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const LookSmellTaste = () => {
  const { toast } = useToast();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [brand, setBrand] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const targetEmail = (import.meta as any).env?.VITE_FORMSUBMIT_EMAIL as string | undefined;

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!targetEmail) { toast({ title: "Ошибка конфигурации", description: "VITE_FORMSUBMIT_EMAIL не задан.", variant: "destructive" }); return; }
    try {
      setSubmitting(true);
      const endpoint = `https://formsubmit.co/ajax/${encodeURIComponent(targetEmail)}`;
      const res = await fetch(endpoint, {
        method: 'POST', headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({ name, email, brand, message, _subject: 'Look‑Smell‑Taste — партнёрство', _template: 'table', _captcha: 'false', source: 'foodsavev1-lst', timestamp: new Date().toISOString() })
      });
      if (!res.ok) { const t = await res.text().catch(() => ''); throw new Error(`HTTP ${res.status} ${t}`); }
      setName(""); setEmail(""); setBrand(""); setMessage("");
      toast({ title: "Отправлено", description: "Мы свяжемся по партнёрству." });
    } catch (e: any) {
      toast({ title: "Ошибка отправки", description: String(e?.message ?? e), variant: "destructive" });
    } finally { setSubmitting(false); }
  };

  return (
    <div className="min-h-[70vh] w-full bg-white">
      <section className="max-w-7xl mx-auto px-4 pt-28 pb-10 md:pt-32">
        <h1 className="text-4xl lg:text-6xl font-bold text-primary mb-4">Look‑Smell‑Taste</h1>
        <p className="text-lg text-muted-foreground max-w-3xl">Обучаем потребителей доверять органолептической оценке и отличать Best Before от Use By, чтобы меньше выбрасывать еды.</p>
      </section>

      <section className="w-full">
        <div className="max-w-7xl mx-auto px-4 pb-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-primary/10 p-6 bg-accent/30">
            <h3 className="text-lg font-semibold text-primary mb-2">Best Before</h3>
            <p className="text-muted-foreground">Срок, указывающий на качество, а не безопасность. После него продукт часто можно употреблять.</p>
          </div>
          <div className="rounded-2xl border border-primary/10 p-6 bg-accent/30">
            <h3 className="text-lg font-semibold text-primary mb-2">Use By</h3>
            <p className="text-muted-foreground">Срок годности, связанный с безопасностью. После него употреблять нельзя.</p>
          </div>
          <div className="rounded-2xl border border-primary/10 p-6 bg-accent/30">
            <h3 className="text-lg font-semibold text-primary mb-2">Сенсорная оценка</h3>
            <p className="text-muted-foreground">Смотрите, нюхайте, пробуйте — и принимайте решение, если это безопасно.</p>
          </div>
        </div>
      </section>

      <section className="w-full bg-accent/30">
        <div className="max-w-3xl mx-auto px-4 py-16">
          <h2 className="text-2xl lg:text-3xl font-bold text-primary mb-6">Стать партнёром инициативы</h2>
          <form onSubmit={onSubmit} className="space-y-4">
            <div>
              <label className="text-sm font-medium">Контактное лицо</label>
              <Input value={name} onChange={e => setName(e.target.value)} placeholder="Имя Фамилия" required />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium">Email</label>
                <Input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="you@brand.uz" required />
              </div>
              <div>
                <label className="text-sm font-medium">Бренд</label>
                <Input value={brand} onChange={e => setBrand(e.target.value)} placeholder="ООО Пример" required />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium">Сообщение</label>
              <Textarea value={message} onChange={e => setMessage(e.target.value)} placeholder="Пару слов о сотрудничестве" />
            </div>
            <Button type="submit" disabled={submitting}>{submitting ? 'Отправка...' : 'Отправить'}</Button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default LookSmellTaste; 