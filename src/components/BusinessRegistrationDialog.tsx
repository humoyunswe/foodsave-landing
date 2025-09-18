import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Schema = z.object({
  company: z.string().min(2, "Минимум 2 символа"),
  name: z.string().min(2, "Минимум 2 символа"),
  email: z.string().email("Некорректный email"),
  phone: z.string().min(5, "Укажите телефон"),
  message: z.string().optional(),
  trap: z.string().optional(), // honeypot
});

export type BusinessRegistrationDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export default function BusinessRegistrationDialog({ open, onOpenChange }: BusinessRegistrationDialogProps) {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useForm<z.infer<typeof Schema>>({
    resolver: zodResolver(Schema),
    defaultValues: { company: "", name: "", email: "", phone: "", message: "", trap: "" },
    mode: "onBlur",
  });

  const formsubmitEmail = (import.meta as any).env?.VITE_FORMSUBMIT_EMAIL as string | undefined;

  const onSubmit = async (values: z.infer<typeof Schema>) => {
    if (values.trap && values.trap.trim().length > 0) {
      onOpenChange(false);
      return;
    }

    if (!formsubmitEmail) {
      toast({ title: "Ошибка конфигурации", description: "Не задан VITE_FORMSUBMIT_EMAIL.", variant: "destructive" });
      return;
    }

    try {
      setIsSubmitting(true);
      const endpoint = `https://formsubmit.co/ajax/${encodeURIComponent(formsubmitEmail)}`;
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          company: values.company,
          name: values.name,
          email: values.email,
          phone: values.phone,
          message: values.message ?? '',
          _subject: 'Регистрация бизнеса — FoodSave',
          _template: 'table',
          _captcha: 'false',
          source: 'foodsavev1-website',
          timestamp: new Date().toISOString(),
        }),
      });

      if (!res.ok) {
        const text = await res.text().catch(() => '');
        throw new Error(`HTTP ${res.status} ${text}`);
      }

      form.reset();
      toast({ title: "Заявка отправлена", description: "Мы свяжемся с вами в ближайшее время." });
      onOpenChange(false);
    } catch (e: any) {
      toast({ title: "Ошибка отправки", description: String(e?.message ?? e) || "Неизвестная ошибка", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Регистрация бизнеса</DialogTitle>
          <DialogDescription>
            Оставьте контакты, и мы свяжемся с вами для подключения к платформе.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            {/* Honeypot field: hidden from users */}
            <FormField
              control={form.control}
              name="trap"
              render={({ field }) => (
                <input {...field} tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
              )}
            />

            <FormField
              control={form.control}
              name="company"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Компания</FormLabel>
                  <FormControl>
                    <Input placeholder="ООО Пример" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Контактное лицо</FormLabel>
                    <FormControl>
                      <Input placeholder="Имя Фамилия" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Телефон</FormLabel>
                    <FormControl>
                      <Input placeholder="+998 90 123 45 67" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="you@company.uz" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Сообщение (необязательно)</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Коротко опишите ваш бизнес" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter>
              <Button type="button" variant="ghost" onClick={() => onOpenChange(false)} disabled={isSubmitting}>Отмена</Button>
              <Button type="submit" disabled={isSubmitting}>{isSubmitting ? 'Отправка...' : 'Отправить'}</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
} 