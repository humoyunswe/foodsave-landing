import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const MyStore = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const [reqName, setReqName] = useState("");
  const [reqEmail, setReqEmail] = useState("");
  const [reqCompany, setReqCompany] = useState("");
  const [reqSubmitting, setReqSubmitting] = useState(false);

  const formsubmitEmail = (import.meta as any).env?.VITE_FORMSUBMIT_EMAIL as string | undefined;

  const login = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggingIn(true);
    // Placeholder auth logic; to be replaced with real backend
    setTimeout(() => {
      setIsLoggingIn(false);
      toast({ title: "Вход недоступен", description: "Доступ в личный кабинет будет подключён позже." });
    }, 600);
  };

  const requestAccess = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formsubmitEmail) {
      toast({ title: "Ошибка конфигурации", description: "Не задан VITE_FORMSUBMIT_EMAIL.", variant: "destructive" });
      return;
    }
    try {
      setReqSubmitting(true);
      const endpoint = `https://formsubmit.co/ajax/${encodeURIComponent(formsubmitEmail)}`;
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          name: reqName,
          email: reqEmail,
          company: reqCompany,
          _subject: 'Запрос доступа — MyStore',
          _template: 'table',
          _captcha: 'false',
          source: 'foodsavev1-website-mystore',
          timestamp: new Date().toISOString(),
        }),
      });
      if (!res.ok) {
        const text = await res.text().catch(() => '');
        throw new Error(`HTTP ${res.status} ${text}`);
      }
      setReqName(""); setReqEmail(""); setReqCompany("");
      toast({ title: "Заявка отправлена", description: "Мы свяжемся с вами для выдачи доступа." });
    } catch (e: any) {
      toast({ title: "Ошибка отправки", description: String(e?.message ?? e), variant: "destructive" });
    } finally {
      setReqSubmitting(false);
    }
  };

  return (
    <div className="min-h-[70vh] w-full bg-white">
      <section className="max-w-7xl mx-auto px-4 pt-28 pb-10 md:pt-32">
        <h1 className="text-4xl lg:text-6xl font-bold text-primary mb-4">Мой магазин</h1>
        <p className="text-lg text-muted-foreground max-w-3xl">Войдите в кабинет партнёра или отправьте запрос на доступ.</p>
      </section>

      <section className="w-full">
        <div className="max-w-7xl mx-auto px-4 pb-16 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Login */}
          <div className="rounded-2xl border border-primary/10 p-6">
            <h2 className="text-2xl font-bold text-primary mb-4">Вход</h2>
            <form onSubmit={login} className="space-y-4">
              <div>
                <label className="text-sm font-medium">Email</label>
                <Input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="you@business.uz" required />
              </div>
              <div>
                <label className="text-sm font-medium">Пароль</label>
                <Input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="••••••••" required />
              </div>
              <Button type="submit" disabled={isLoggingIn}>{isLoggingIn ? 'Входим...' : 'Войти'}</Button>
              <p className="text-xs text-muted-foreground">Пока недоступно — используйте запрос доступа.</p>
            </form>
          </div>

          {/* Request access */}
          <div className="rounded-2xl border border-primary/10 p-6 bg-accent/30">
            <h2 className="text-2xl font-bold text-primary mb-4">Запросить доступ</h2>
            <form onSubmit={requestAccess} className="space-y-4">
              <div>
                <label className="text-sm font-medium">Контактное лицо</label>
                <Input value={reqName} onChange={e => setReqName(e.target.value)} placeholder="Имя Фамилия" required />
              </div>
              <div>
                <label className="text-sm font-medium">Email</label>
                <Input type="email" value={reqEmail} onChange={e => setReqEmail(e.target.value)} placeholder="you@business.uz" required />
              </div>
              <div>
                <label className="text-sm font-medium">Компания</label>
                <Input value={reqCompany} onChange={e => setReqCompany(e.target.value)} placeholder="ООО Пример" required />
              </div>
              <Button type="submit" disabled={reqSubmitting}>{reqSubmitting ? 'Отправка...' : 'Отправить заявку'}</Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MyStore; 