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
  name: z.string().min(2, "Минимум 2 символа"),
  email: z.string().email("Некорректный email"),
  message: z.string().min(5, "Минимум 5 символов"),
  trap: z.string().optional(),
});

export type CareersContactDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export default function CareersContactDialog({ open, onOpenChange }: CareersContactDialogProps) {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useForm<z.infer<typeof Schema>>({
    resolver: zodResolver(Schema),
    defaultValues: { name: "", email: "", message: "", trap: "" },
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
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          message: values.message,
          _subject: 'Карьера — сообщение со страницы',
          _template: 'table',
          _captcha: 'false',
          source: 'foodsavev1-website-careers',
          timestamp: new Date().toISOString(),
        }),
      });
      if (!res.ok) {
        const text = await res.text().catch(() => '');
        throw new Error(`HTTP ${res.status} ${text}`);
      }
      form.reset();
      toast({ title: "Сообщение отправлено", description: "Мы свяжемся с вами." });
      onOpenChange(false);
    } catch (e: any) {
      toast({ title: "Ошибка отправки", description: String(e?.message ?? e), variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Написать нам</DialogTitle>
          <DialogDescription>Коротко расскажите о себе и задайте вопрос.</DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="trap"
              render={({ field }) => (
                <input {...field} tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
              )}
            />
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Имя</FormLabel>
                  <FormControl>
                    <Input placeholder="Ваше имя" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="you@example.com" {...field} />
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
                  <FormLabel>Сообщение</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Ваш вопрос" {...field} />
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