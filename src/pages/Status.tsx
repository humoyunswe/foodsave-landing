const Badge = ({ status }: { status: "ok" | "warn" | "down" }) => {
  const map = {
    ok: "bg-green-100 text-green-800",
    warn: "bg-yellow-100 text-yellow-800",
    down: "bg-red-100 text-red-800",
  } as const;
  const text = { ok: "OK", warn: "Внимание", down: "Недоступно" }[status];
  return <span className={`inline-block rounded-md px-2 py-1 text-xs font-semibold ${map[status]}`}>{text}</span>;
};

const Status = () => {
  return (
    <div className="min-h-[70vh] w-full bg-white">
      <section className="max-w-5xl mx-auto px-4 pt-28 pb-16 md:pt-32">
        <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-6">Статус систем</h1>
        <p className="text-sm text-muted-foreground mb-8">Последнее обновление: в реальном времени (заглушка)</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="rounded-xl border border-primary/10 p-4 flex items-center justify-between">
            <div className="font-semibold">Frontend</div>
            <Badge status="ok" />
          </div>
          <div className="rounded-xl border border-primary/10 p-4 flex items-center justify-between">
            <div className="font-semibold">Backend API</div>
            <Badge status="ok" />
          </div>
          <div className="rounded-xl border border-primary/10 p-4 flex items-center justify-between">
            <div className="font-semibold">Email</div>
            <Badge status="ok" />
          </div>
          <div className="rounded-xl border border-primary/10 p-4 flex items-center justify-between">
            <div className="font-semibold">Платежи</div>
            <Badge status="ok" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Status; 