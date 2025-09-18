const Legal = () => {
  return (
    <div className="min-h-[70vh] w-full bg-white">
      <section className="max-w-5xl mx-auto px-4 pt-28 pb-16 md:pt-32">
        <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-6">Юридическая информация</h1>
        <p className="text-sm text-muted-foreground mb-8">Последнее обновление: сентябрь 2025</p>
        <div className="prose prose-slate max-w-none">
          <h2>О компании</h2>
          <p>FoodSave — социально значимый проект по сокращению пищевых отходов. Ниже указаны базовые сведения для связи и правовой информации.</p>
          <h2>Реквизиты</h2>
          <ul>
            <li>Наименование: ООО «FoodSave Uzbekistan»</li>
            <li>Адрес: Ташкент, Узбекистан</li>
            <li>Email: press@foodsave.uz</li>
          </ul>
          <h2>Юрисдикция</h2>
          <p>Использование сервиса регулируется законодательством Республики Узбекистан.</p>
        </div>
      </section>
    </div>
  );
};

export default Legal; 