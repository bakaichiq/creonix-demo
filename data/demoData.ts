import type { BusinessSlug, DemoBusinessData } from "@/lib/types";

export const demoDataMap: Record<BusinessSlug, DemoBusinessData> = {
  construction: {
    kpis: [
      { label: "Выручка", value: "14.8 млн сом", delta: "+12.4%", trend: "up", hint: "4 акта закрыты за неделю", progress: 78 },
      { label: "Расходы", value: "11.1 млн сом", delta: "+5.1%", trend: "down", hint: "Материалы и ФОТ", progress: 52 },
      { label: "Прибыль", value: "3.7 млн сом", delta: "+19.8%", trend: "up", hint: "Маржа 25%", progress: 25 },
      { label: "Остатки", value: "6.3 млн сом", delta: "-3.2%", trend: "up", hint: "Цемент, арматура, кабель", progress: 63 },
      { label: "Долги", value: "2.1 млн сом", delta: "-8.5%", trend: "up", hint: "2 подрядчика в просрочке", progress: 14 },
      { label: "План объектов", value: "91%", delta: "-6 дней", trend: "down", hint: "Отставание по объекту Блок B", progress: 91, statusLabel: "Отстание" }
    ],
    revenueTrend: [
      { name: "Ноя", revenue: 10200000, expenses: 8120000, profit: 2080000 },
      { name: "Дек", revenue: 11100000, expenses: 8610000, profit: 2490000 },
      { name: "Янв", revenue: 11800000, expenses: 8930000, profit: 2870000 },
      { name: "Фев", revenue: 12900000, expenses: 9560000, profit: 3340000 },
      { name: "Мар", revenue: 13700000, expenses: 10400000, profit: 3300000 },
      { name: "Апр", revenue: 14800000, expenses: 11100000, profit: 3700000 }
    ],
    planFact: [
      { name: "Фундамент", plan: 100, fact: 100 },
      { name: "Каркас", plan: 88, fact: 82 },
      { name: "Фасад", plan: 66, fact: 59 },
      { name: "Инженерия", plan: 54, fact: 51 },
      { name: "Отделка", plan: 28, fact: 21 }
    ],
    operations: [
      { id: "ACT-214", title: "Акт КС-2 по объекту Блок A", meta: "Закрытие этапа монолит", owner: "Алия Т.", amount: "1.26 млн сом", status: "Подписан", date: "Сегодня, 11:20" },
      { id: "REQ-931", title: "Заявка на арматуру 12 мм", meta: "Объект Блок B", owner: "Нурбек К.", amount: "420 000 сом", status: "На согласовании", date: "Сегодня, 09:10" },
      { id: "PAY-404", title: "Оплата подрядчику 'Азия Электро'", meta: "Инженерные сети", owner: "Айгерим Д.", amount: "680 000 сом", status: "Запланировано", date: "Вчера, 17:40" },
      { id: "QA-118", title: "Отчет технадзора по секции C", meta: "Фасадные работы", owner: "Мурат Ж.", amount: "0 сом", status: "Требует внимания", date: "Вчера, 15:05" }
    ],
    risks: [
      { title: "Отставание по Блоку B", description: "Фасад отстает от графика на 6 дней.", impact: "Риск смещения акта на 1.4 млн сом", severity: "high" },
      { title: "Заявка на кабель не согласована", description: "Снабжение висит 18 часов без решения.", impact: "Монтаж сдвигается на смену", severity: "medium" },
      { title: "Рост стоимости бетона", description: "Поставщик пересчитал прайс по последним двум партиям.", impact: "Маржа объекта -1.6 п.п.", severity: "medium" }
    ],
    aiInsights: [
      { title: "Усилить монолитную бригаду", description: "Блок B теряет темп после двух неполных смен.", recommendation: "Перераспределить 4 человека с объекта C на 5 дней.", tone: "critical" },
      { title: "Перенести оплату без риска", description: "Подрядчик по благоустройству еще не вышел на площадку.", recommendation: "Сместить платеж на 3 дня и закрыть кассовый разрыв недели.", tone: "warning" },
      { title: "Акт по Блоку A можно ускорить", description: "Все замечания технадзора сняты, документы готовы.", recommendation: "Отправить клиенту на подпись сегодня до 16:00.", tone: "positive" }
    ],
    crm: {
      leads: [
        { company: "ОсОО 'Sky Residence'", contact: "Эльдар Абд.", deal: "ЖК на 96 квартир", manager: "Алия Т.", status: "КП отправлено", nextStep: "Разбор сметы", lastContact: "Сегодня" },
        { company: "ОсОО 'Bishkek Mall'", contact: "Азамат С.", deal: "Реконструкция фудкорта", manager: "Мурат Ж.", status: "В работе", nextStep: "Выезд на объект", lastContact: "Вчера" },
        { company: "ОсОО 'Nova Towers'", contact: "Камила К.", deal: "Подряд на инженерные сети", manager: "Айгерим Д.", status: "Договор", nextStep: "Согласовать график", lastContact: "2 дня назад" },
        { company: "ОсОО 'Amanat Group'", contact: "Руслан М.", deal: "Монолитный этап", manager: "Нурбек К.", status: "Оплата", nextStep: "Контроль предоплаты", lastContact: "Сегодня" }
      ],
      featuredClient: {
        company: "ОсОО 'Sky Residence'",
        segment: "Девелопмент",
        ltv: "38 млн сом",
        lastInvoice: "1.8 млн сом",
        manager: "Алия Т.",
        tags: ["Теплый лид", "Высокий чек", "Повторный клиент"],
        history: [
          { date: "21 апр", type: "Встреча", title: "Презентация хода пилота и графика работ", author: "Алия Т." },
          { date: "19 апр", type: "КП", title: "Отправлено коммерческое предложение с 3 сценариями", author: "Алия Т." },
          { date: "17 апр", type: "Звонок", title: "Согласованы объемы и приоритет по очереди 1", author: "Мурат Ж." }
        ],
        tasks: [
          { title: "Подготовить сравнительный план-график", due: "22 апр, 15:00", owner: "Алия Т.", status: "В работе" },
          { title: "Запросить финальные объемы по фасаду", due: "23 апр, 10:00", owner: "Нурбек К.", status: "Новая" }
        ]
      }
    },
    sales: {
      orders: [
        { number: "SO-2041", customer: "Sky Residence", amount: "2.4 млн сом", payment: "30%", debt: "1.68 млн сом", status: "В производстве", due: "28 апр", channel: "Тендер" },
        { number: "SO-2037", customer: "Nova Towers", amount: "1.1 млн сом", payment: "100%", debt: "0 сом", status: "К закрытию", due: "24 апр", channel: "B2B" },
        { number: "SO-2029", customer: "Bishkek Mall", amount: "840 000 сом", payment: "50%", debt: "420 000 сом", status: "Ожидает акт", due: "26 апр", channel: "Повторный" },
        { number: "SO-2026", customer: "Amanat Group", amount: "3.2 млн сом", payment: "20%", debt: "2.56 млн сом", status: "Ожидает оплату", due: "30 апр", channel: "Рекомендация" }
      ],
      summary: [
        { label: "Сделки в работе", value: "12", tone: "up" },
        { label: "Счета к оплате", value: "4.7 млн сом", tone: "neutral" },
        { label: "Просрочено", value: "820 000 сом", tone: "down" },
        { label: "Средний чек", value: "1.9 млн сом", tone: "up" }
      ]
    },
    inventory: {
      items: [
        { name: "Арматура 12 мм", sku: "ST-112", stock: "18.4 т", reserve: "11.0 т", turnover: "17 дней", alert: "Норма" },
        { name: "Цемент М500", sku: "ST-318", stock: "220 меш.", reserve: "160 меш.", turnover: "9 дней", alert: "Низкий остаток" },
        { name: "Кабель ВВГ 3x2.5", sku: "EL-225", stock: "430 м", reserve: "320 м", turnover: "6 дней", alert: "Закупка сегодня" },
        { name: "Гипсокартон", sku: "IN-091", stock: "180 листов", reserve: "40 листов", turnover: "24 дня", alert: "Норма" }
      ],
      alerts: [
        "Кабель ВВГ закончится через 2.5 дня по текущему темпу.",
        "Цемент М500 уже зарезервирован на 73% под два объекта.",
        "Арматура на Блок C избыточна на 1.8 т и может быть перераспределена."
      ]
    },
    operationsCenter: {
      items: [
        { item: "Блок A / Монолит", stage: "Закрытие этапа", status: "В графике", owner: "Мурат Ж.", due: "22 апр", progress: 96, value: "1.26 млн сом" },
        { item: "Блок B / Фасад", stage: "Монтаж подсистемы", status: "Отставание", owner: "Нурбек К.", due: "26 апр", progress: 59, value: "940 000 сом" },
        { item: "Блок C / Инженерия", stage: "Кабель и щиты", status: "Риск снабжения", owner: "Айгерим Д.", due: "24 апр", progress: 51, value: "680 000 сом" },
        { item: "Паркинг / Отделка", stage: "Штукатурка", status: "Новая задача", owner: "Азамат С.", due: "29 апр", progress: 18, value: "420 000 сом" }
      ],
      pipeline: [
        { label: "Фундамент", value: 100 },
        { label: "Каркас", value: 82 },
        { label: "Фасад", value: 59 },
        { label: "Инженерия", value: 51 },
        { label: "Отделка", value: 21 }
      ]
    },
    finance: {
      rows: [
        { category: "Объект Блок A", fact: "4.2 млн сом", plan: "4.0 млн сом", delta: "+5%", margin: "28%" },
        { category: "Объект Блок B", fact: "3.7 млн сом", plan: "4.1 млн сом", delta: "-10%", margin: "21%" },
        { category: "Подрядчики", fact: "2.6 млн сом", plan: "2.4 млн сом", delta: "+8%", margin: "0%" },
        { category: "Материалы", fact: "3.9 млн сом", plan: "3.6 млн сом", delta: "+8%", margin: "0%" }
      ],
      cashflow: [
        { name: "Ноя", income: 10200000, expense: 8120000, net: 2080000 },
        { name: "Дек", income: 11100000, expense: 8610000, net: 2490000 },
        { name: "Янв", income: 11800000, expense: 8930000, net: 2870000 },
        { name: "Фев", income: 12900000, expense: 9560000, net: 3340000 },
        { name: "Мар", income: 13700000, expense: 10400000, net: 3300000 },
        { name: "Апр", income: 14800000, expense: 11100000, net: 3700000 }
      ]
    },
    bi: {
      trend: [
        { name: "Ноя", current: 72, previous: 66, forecast: 78 },
        { name: "Дек", current: 74, previous: 68, forecast: 80 },
        { name: "Янв", current: 79, previous: 73, forecast: 84 },
        { name: "Фев", current: 83, previous: 75, forecast: 87 },
        { name: "Мар", current: 81, previous: 77, forecast: 88 },
        { name: "Апр", current: 86, previous: 80, forecast: 90 }
      ],
      topEntities: [
        { label: "Блок A", value: "4.2 млн сом", share: 31, growth: "+8%" },
        { label: "Блок B", value: "3.7 млн сом", share: 26, growth: "-4%" },
        { label: "Nova Towers", value: "2.8 млн сом", share: 19, growth: "+12%" },
        { label: "Паркинг", value: "1.9 млн сом", share: 14, growth: "+5%" }
      ],
      deviations: [
        "Фасад на Блоке B отстает на 6 дней.",
        "Материалы по Блоку C вышли за бюджет на 8%.",
        "Подписание актов по двум объектам можно ускорить на 2-3 дня."
      ],
      forecast: "При текущем темпе закрытие апреля ожидается на 15.6 млн сом выручки и 24.7% маржи."
    },
    documents: [
      { name: "КС-2 / Блок A / Монолит", type: "Акт", date: "21 апр", status: "Подписан", owner: "Алия Т." },
      { name: "Заявка / Кабель ВВГ", type: "Заявка", date: "21 апр", status: "На согласовании", owner: "Айгерим Д." },
      { name: "Договор / Nova Towers", type: "Договор", date: "20 апр", status: "Активен", owner: "Мурат Ж." },
      { name: "Смета / Паркинг", type: "Смета", date: "19 апр", status: "Черновик", owner: "Нурбек К." }
    ],
    notifications: [
      { title: "Критичное отставание", text: "Блок B потерял еще 1 день по фасаду.", time: "8 мин назад", tone: "critical" },
      { title: "Готов к оплате", text: "Акт по объекту Блок A переведен в подписанные.", time: "35 мин назад", tone: "positive" },
      { title: "Снабжение требует решения", text: "Кабель ВВГ надо закупить до конца дня.", time: "1 ч назад", tone: "warning" }
    ],
    assistant: {
      headline: "AI контролирует график, материалы и кассовый контур объектов.",
      bullets: [
        "Сопоставляет этапы работ, закупки и платежи.",
        "Находит узкие места по снабжению и людям.",
        "Предлагает управленческое действие, а не просто отчет."
      ],
      messages: [
        {
          title: "Риск по кабелю ВВГ",
          summary: "Остаток кабеля на Блок C закончится через 2 дня при текущем темпе монтажа.",
          metric: "430 м на складе / 320 м в резерве",
          recommendation: "Создать заявку поставщику на 800 м и согласовать оплату сегодня."
        },
        {
          title: "Отставание по объекту Блок B",
          summary: "Фасад отстает от плана на 6 дней, критичное окно наступит 26 апреля.",
          metric: "59% факт против 66% плана",
          recommendation: "Усилить бригаду монолита и перенести часть ресурса с объекта C."
        },
        {
          title: "Кассовый зазор закрывается без кредита",
          summary: "Перенос оплаты благоустройства на 3 дня выровняет платежный календарь недели.",
          metric: "Пик разрыва 540 000 сом",
          recommendation: "Пересогласовать платеж с подрядчиком и ускорить подпись акта по Блоку A."
        }
      ]
    }
  },
  grocery: {
    kpis: [
      { label: "Выручка", value: "6.9 млн сом", delta: "+8.6%", trend: "up", hint: "Сеть из 4 магазинов" },
      { label: "Расходы", value: "5.6 млн сом", delta: "+4.3%", trend: "down", hint: "Закупка и аренда" },
      { label: "Прибыль", value: "1.3 млн сом", delta: "+18.2%", trend: "up", hint: "Маржа 18.8%" },
      { label: "Остатки", value: "2.8 млн сом", delta: "-6.1%", trend: "up", hint: "2430 SKU" },
      { label: "Долги", value: "780 000 сом", delta: "-9.4%", trend: "up", hint: "Только 2 поставщика просрочены" },
      { label: "План", value: "97%", delta: "-3%", trend: "neutral", hint: "Фрукты тянут вниз" }
    ],
    revenueTrend: [
      { name: "Ноя", revenue: 5600000, expenses: 4580000, profit: 1020000 },
      { name: "Дек", revenue: 6120000, expenses: 4940000, profit: 1180000 },
      { name: "Янв", revenue: 5980000, expenses: 4860000, profit: 1120000 },
      { name: "Фев", revenue: 6240000, expenses: 5050000, profit: 1190000 },
      { name: "Мар", revenue: 6510000, expenses: 5230000, profit: 1280000 },
      { name: "Апр", revenue: 6890000, expenses: 5590000, profit: 1300000 }
    ],
    planFact: [
      { name: "Молочка", plan: 100, fact: 103 },
      { name: "Бакалея", plan: 100, fact: 98 },
      { name: "Овощи", plan: 100, fact: 92 },
      { name: "Напитки", plan: 100, fact: 105 },
      { name: "Заморозка", plan: 100, fact: 96 }
    ],
    operations: [
      { id: "RC-824", title: "Приход по поставке 'ФрутМаркет'", meta: "Овощи и фрукты / Магазин №2", owner: "Элина С.", amount: "188 000 сом", status: "Принят", date: "Сегодня, 07:20" },
      { id: "WR-118", title: "Списание по сроку годности", meta: "Молочка / Магазин №1", owner: "Самат А.", amount: "12 400 сом", status: "Подтверждено", date: "Сегодня, 09:45" },
      { id: "TR-405", title: "Перемещение напитков между точками", meta: "Из №4 в №2", owner: "Камила Ж.", amount: "44 000 сом", status: "В пути", date: "Сегодня, 12:10" },
      { id: "PO-201", title: "Заказ поставщику 'Азия Фуд'", meta: "Бакалея и снеки", owner: "Элина С.", amount: "260 000 сом", status: "На согласовании", date: "Вчера, 18:00" }
    ],
    risks: [
      { title: "Просадка категории 'Овощи'", description: "Продажи ниже плана на 8% третий день подряд.", impact: "Потеря около 54 000 сом выручки в неделю", severity: "medium" },
      { title: "Йогурт 180 г на критическом остатке", description: "Запаса хватит на 1.4 дня по сети.", impact: "Риск out-of-stock в вечерний пик", severity: "high" },
      { title: "Списания в молочке растут", description: "Возвраты и просрочка по двум точкам выше нормы.", impact: "Маржа категории -1.2 п.п.", severity: "medium" }
    ],
    aiInsights: [
      { title: "Сократить заказ по киви", description: "Спрос просел на 17% после роста цены.", recommendation: "Снизить закупку на 4 ящика в ближайшем заказе.", tone: "warning" },
      { title: "Усилить полку напитков", description: "Категория растет быстрее плана и тянет средний чек.", recommendation: "Поднять выкладку в Магазине №2 и перенести часть остатков из №4.", tone: "positive" },
      { title: "Пополнить йогурт сегодня", description: "Дефицит появится уже завтра утром.", recommendation: "Создать срочную заявку на 220 упаковок.", tone: "critical" }
    ],
    crm: {
      leads: [
        { company: "Кафе 'Панини'", contact: "Назгуль У.", deal: "Оптовая поставка молочки", manager: "Бегайым Т.", status: "В работе", nextStep: "Согласовать прайс", lastContact: "Сегодня" },
        { company: "БЦ 'Ала-Тоо'", contact: "Ермек И.", deal: "Корпоративные корзины", manager: "Элина С.", status: "КП отправлено", nextStep: "Демо ассортимента", lastContact: "Вчера" },
        { company: "Детский центр 'Баластан'", contact: "Сайкал К.", deal: "Поставки снеков", manager: "Бегайым Т.", status: "Новый", nextStep: "Первый звонок", lastContact: "Сегодня" },
        { company: "Школа 'Данакер'", contact: "Арслан М.", deal: "Буфет и напитки", manager: "Самат А.", status: "Договор", nextStep: "Подписать приложение", lastContact: "2 дня назад" }
      ],
      featuredClient: {
        company: "Кафе 'Панини'",
        segment: "B2B / HoReCa",
        ltv: "4.8 млн сом",
        lastInvoice: "146 000 сом",
        manager: "Бегайым Т.",
        tags: ["B2B", "Еженедельный заказ", "Высокая маржа"],
        history: [
          { date: "21 апр", type: "Звонок", title: "Подтвержден пилот по молочке и фруктам", author: "Бегайым Т." },
          { date: "20 апр", type: "КП", title: "Отправлен прайс с маржинальными категориями", author: "Элина С." },
          { date: "18 апр", type: "Встреча", title: "Снята потребность по утреннему меню", author: "Бегайым Т." }
        ],
        tasks: [
          { title: "Подготовить отбор по fresh-категориям", due: "22 апр, 11:00", owner: "Элина С.", status: "В работе" },
          { title: "Согласовать график доставок", due: "22 апр, 16:00", owner: "Самат А.", status: "Новая" }
        ]
      }
    },
    sales: {
      orders: [
        { number: "RT-5821", customer: "Розница / Магазин №1", amount: "1.92 млн сом", payment: "Онлайн", debt: "0 сом", status: "Закрыт день", due: "Сегодня", channel: "Розница" },
        { number: "RT-5818", customer: "Кафе 'Панини'", amount: "146 000 сом", payment: "70%", debt: "43 800 сом", status: "В отгрузке", due: "22 апр", channel: "B2B" },
        { number: "RT-5814", customer: "БЦ 'Ала-Тоо'", amount: "82 000 сом", payment: "0%", debt: "82 000 сом", status: "Счет отправлен", due: "23 апр", channel: "Корпоративный" },
        { number: "RT-5801", customer: "Школа 'Данакер'", amount: "118 000 сом", payment: "100%", debt: "0 сом", status: "Подготовка договора", due: "24 апр", channel: "B2B" }
      ],
      summary: [
        { label: "Средний чек", value: "612 сом", tone: "up" },
        { label: "B2B заказы", value: "14", tone: "up" },
        { label: "Просроченная дебиторка", value: "82 000 сом", tone: "down" },
        { label: "Акции в работе", value: "5", tone: "neutral" }
      ]
    },
    inventory: {
      items: [
        { name: "Йогурт 180 г", sku: "ML-018", stock: "124 шт", reserve: "68 шт", turnover: "1.4 дня", alert: "Критично" },
        { name: "Рис 1 кг", sku: "BK-201", stock: "310 шт", reserve: "42 шт", turnover: "13 дней", alert: "Норма" },
        { name: "Кола 1 л", sku: "DR-101", stock: "186 шт", reserve: "34 шт", turnover: "4 дня", alert: "Высокий спрос" },
        { name: "Банан Эквадор", sku: "FR-032", stock: "86 кг", reserve: "0 кг", turnover: "2.7 дня", alert: "Риск списания" }
      ],
      alerts: [
        "Йогурт 180 г нужно заказать сегодня на 220 упаковок.",
        "Бананы по точке №4 продаются медленно, возможна уценка.",
        "Напитки в Магазине №2 лучше пополнить перемещением, а не закупкой."
      ]
    },
    operationsCenter: {
      items: [
        { item: "Магазин №1 / Fresh", stage: "Пополнение", status: "В графике", owner: "Самат А.", due: "Сегодня 18:00", progress: 88, value: "640 000 сом" },
        { item: "Сеть / Акция на напитки", stage: "Промо", status: "Выше плана", owner: "Элина С.", due: "24 апр", progress: 73, value: "420 000 сом" },
        { item: "Магазин №2 / Просрочка молочки", stage: "Контроль сроков", status: "Риск", owner: "Камила Ж.", due: "Сегодня 16:00", progress: 42, value: "18 000 сом" },
        { item: "Поставка 'Азия Фуд'", stage: "Заказ поставщику", status: "На согласовании", owner: "Бегайым Т.", due: "22 апр", progress: 37, value: "260 000 сом" }
      ],
      pipeline: [
        { label: "Закупки", value: 78 },
        { label: "Приемка", value: 84 },
        { label: "Выкладка", value: 71 },
        { label: "Сроки", value: 64 },
        { label: "Списания", value: 39 }
      ]
    },
    finance: {
      rows: [
        { category: "Молочная категория", fact: "1.24 млн сом", plan: "1.18 млн сом", delta: "+5%", margin: "21%" },
        { category: "Овощи и фрукты", fact: "980 000 сом", plan: "1.06 млн сом", delta: "-8%", margin: "16%" },
        { category: "Напитки", fact: "1.38 млн сом", plan: "1.27 млн сом", delta: "+9%", margin: "23%" },
        { category: "Списания", fact: "96 000 сом", plan: "70 000 сом", delta: "+37%", margin: "0%" }
      ],
      cashflow: [
        { name: "Ноя", income: 5600000, expense: 4580000, net: 1020000 },
        { name: "Дек", income: 6120000, expense: 4940000, net: 1180000 },
        { name: "Янв", income: 5980000, expense: 4860000, net: 1120000 },
        { name: "Фев", income: 6240000, expense: 5050000, net: 1190000 },
        { name: "Мар", income: 6510000, expense: 5230000, net: 1280000 },
        { name: "Апр", income: 6890000, expense: 5590000, net: 1300000 }
      ]
    },
    bi: {
      trend: [
        { name: "Ноя", current: 16, previous: 15, forecast: 17 },
        { name: "Дек", current: 18, previous: 16, forecast: 18 },
        { name: "Янв", current: 17, previous: 16, forecast: 17 },
        { name: "Фев", current: 18, previous: 17, forecast: 19 },
        { name: "Мар", current: 19, previous: 18, forecast: 19 },
        { name: "Апр", current: 18.8, previous: 18, forecast: 19.4 }
      ],
      topEntities: [
        { label: "Напитки", value: "1.38 млн сом", share: 20, growth: "+11%" },
        { label: "Молочка", value: "1.24 млн сом", share: 18, growth: "+6%" },
        { label: "Магазин №2", value: "1.81 млн сом", share: 26, growth: "+8%" },
        { label: "B2B канал", value: "640 000 сом", share: 9, growth: "+14%" }
      ],
      deviations: [
        "Овощи дают -8% к плану по двум точкам.",
        "Списания молочки выше нормы в Магазине №1 и №2.",
        "Категория напитков перегружает склад №4 и требует перераспределения."
      ],
      forecast: "При коррекции заказа по fresh-категории маржа месяца может вырасти до 19.4%."
    },
    documents: [
      { name: "Заказ поставщику / Азия Фуд", type: "Закупка", date: "21 апр", status: "На согласовании", owner: "Элина С." },
      { name: "Акт списания / Молочка", type: "Списание", date: "21 апр", status: "Проведен", owner: "Самат А." },
      { name: "Счет / Кафе Панини", type: "Счет", date: "20 апр", status: "Отправлен", owner: "Бегайым Т." },
      { name: "Перемещение / Напитки", type: "Перемещение", date: "20 апр", status: "В пути", owner: "Камила Ж." }
    ],
    notifications: [
      { title: "Низкий остаток", text: "Йогурт 180 г закончится завтра утром.", time: "12 мин назад", tone: "critical" },
      { title: "Рост продаж", text: "Напитки выше плана на 9% четвертый день подряд.", time: "40 мин назад", tone: "positive" },
      { title: "Списания растут", text: "Молочка по Магазину №1 вышла выше нормы.", time: "1 ч назад", tone: "warning" }
    ],
    assistant: {
      headline: "AI балансирует закупку, срок годности и маржу по SKU.",
      bullets: [
        "Отслеживает out-of-stock и медленный товар.",
        "Сравнивает продажи, списания и фактическую наценку.",
        "Подсказывает, где выгоднее переместить, а не закупать."
      ],
      messages: [
        {
          title: "Йогурт закончится через 1.4 дня",
          summary: "На точках №1 и №2 остаток на критическом уровне относительно спроса выходных.",
          metric: "124 шт в остатке / 68 шт в резерве",
          recommendation: "Создать срочный заказ на 220 упаковок и распределить 40 шт на магазин №2."
        },
        {
          title: "Бананы уходят в списание",
          summary: "Темп продаж замедлился после роста цены на 11%.",
          metric: "86 кг остаток / оборачиваемость 2.7 дня",
          recommendation: "Запустить уценку на точке №4 и снизить заказ на 4 ящика."
        },
        {
          title: "Напитки можно усилить без закупки",
          summary: "Магазин №4 имеет избыточный остаток, а №2 продает быстрее плана.",
          metric: "Разница в покрытии 3.2 дня",
          recommendation: "Сделать внутреннее перемещение 72 единиц и сохранить кеш."
        }
      ]
    }
  },
  sewing: {
    kpis: [
      { label: "Выручка", value: "9.4 млн сом", delta: "+14.2%", trend: "up", hint: "Контракты на 38 партий", progress: 76 },
      { label: "Расходы", value: "7.1 млн сом", delta: "+6.5%", trend: "down", hint: "Ткань, ФОТ, фурнитура", progress: 55 },
      { label: "Прибыль", value: "2.3 млн сом", delta: "+31.1%", trend: "up", hint: "Маржа 24.5%", progress: 24 },
      { label: "Остатки", value: "3.4 млн сом", delta: "-4.4%", trend: "up", hint: "Ткань и фурнитура", progress: 48 },
      { label: "Брак", value: "2.6%", delta: "+0.4п.п.", trend: "down", hint: "ОТК тормозит 1 партию", progress: 3, statusLabel: "Выше нормы" },
      { label: "Загрузка цеха", value: "89%", delta: "-2 смены", trend: "neutral", hint: "Линия B перевыполняет", progress: 89, statusLabel: "В графике" }
    ],
    revenueTrend: [
      { name: "Ноя", revenue: 6900000, expenses: 5510000, profit: 1390000 },
      { name: "Дек", revenue: 7420000, expenses: 5880000, profit: 1540000 },
      { name: "Янв", revenue: 7880000, expenses: 6170000, profit: 1710000 },
      { name: "Фев", revenue: 8320000, expenses: 6490000, profit: 1830000 },
      { name: "Мар", revenue: 8820000, expenses: 6830000, profit: 1990000 },
      { name: "Апр", revenue: 9400000, expenses: 7100000, profit: 2300000 }
    ],
    planFact: [
      { name: "Раскрой", plan: 100, fact: 96 },
      { name: "Пошив", plan: 100, fact: 91 },
      { name: "ОТК", plan: 100, fact: 84 },
      { name: "Упаковка", plan: 100, fact: 89 },
      { name: "Отгрузка", plan: 100, fact: 94 }
    ],
    operations: [
      { id: "LOT-311", title: "Партия худи / заказ Wave", meta: "ОТК / 420 ед.", owner: "Чолпон С.", amount: "780 000 сом", status: "На проверке", date: "Сегодня, 10:05" },
      { id: "CUT-902", title: "Раскрой ткани футер 3-нитка", meta: "Заказ Nova Brand", owner: "Айбек К.", amount: "340 000 сом", status: "В работе", date: "Сегодня, 08:40" },
      { id: "SEW-144", title: "Смена №2 / линия B", meta: "Пошив футболок", owner: "Гулизат Т.", amount: "0 сом", status: "План выполнен", date: "Вчера, 20:00" },
      { id: "Q-118", title: "Отчет по браку молнии", meta: "Партия R-202", owner: "Чолпон С.", amount: "18 000 сом", status: "Требует решения", date: "Вчера, 17:30" }
    ],
    risks: [
      { title: "ОТК тормозит партию Wave", description: "Партия 420 ед. зависла из-за шва на капюшоне.", impact: "Сдвиг отгрузки на 1 день", severity: "high" },
      { title: "Ткань для Nova Brand на пределе", description: "По текущему раскрою запаса хватит на 1.8 смены.", impact: "Простой линии B", severity: "medium" },
      { title: "Брак молнии вырос до 3.4%", description: "Проблема локализована в партии R-202.", impact: "Потеря маржи на 46 000 сом", severity: "medium" }
    ],
    aiInsights: [
      { title: "Перевести 2 швеи на линию B", description: "Линия A закрыла свой план раньше и может помочь.", recommendation: "Снять узкое место по худи и сохранить дату отгрузки.", tone: "critical" },
      { title: "Скорректировать норму раскроя", description: "По футеру расход ткани выше нормы на 5.7%.", recommendation: "Проверить лекала размера XL и заменить карту расхода.", tone: "warning" },
      { title: "Отгрузка футболок идет с опережением", description: "Линия B перевыполняет план 3 дня подряд.", recommendation: "Добавить экспресс-заказ на 600 ед. без риска по сроку.", tone: "positive" }
    ],
    crm: {
      leads: [
        { company: "Wave Streetwear", contact: "Айдана Ж.", deal: "Худи / 1200 ед.", manager: "Чолпон С.", status: "Договор", nextStep: "Подтвердить упаковку", lastContact: "Сегодня" },
        { company: "Nova Brand", contact: "Ринат М.", deal: "Футболки / 2500 ед.", manager: "Айбек К.", status: "В работе", nextStep: "Согласовать ткань", lastContact: "Вчера" },
        { company: "Kids Point", contact: "Мээрим Б.", deal: "Детская форма", manager: "Гулизат Т.", status: "КП отправлено", nextStep: "Обсудить MOQ", lastContact: "2 дня назад" },
        { company: "Urban Room", contact: "Руслан Э.", deal: "Оверсайз джоггеры", manager: "Чолпон С.", status: "Новый", nextStep: "Первый созвон", lastContact: "Сегодня" }
      ],
      featuredClient: {
        company: "Wave Streetwear",
        segment: "Fashion / B2B",
        ltv: "8.9 млн сом",
        lastInvoice: "1.24 млн сом",
        manager: "Чолпон С.",
        tags: ["Повторный клиент", "Высокая частота", "Требовательный ОТК"],
        history: [
          { date: "21 апр", type: "Мессенджер", title: "Согласован новый цвет капюшона и упаковка", author: "Чолпон С." },
          { date: "19 апр", type: "КП", title: "Пересчитан прайс после изменения ткани", author: "Айбек К." },
          { date: "17 апр", type: "Встреча", title: "Утвержден график по партиям Wave SS25", author: "Чолпон С." }
        ],
        tasks: [
          { title: "Выслать видео из ОТК по партии 311", due: "21 апр, 18:00", owner: "Чолпон С.", status: "В работе" },
          { title: "Согласовать остатки ткани под доп. тираж", due: "22 апр, 12:00", owner: "Айбек К.", status: "Новая" }
        ]
      }
    },
    sales: {
      orders: [
        { number: "SW-1032", customer: "Wave Streetwear", amount: "1.24 млн сом", payment: "50%", debt: "620 000 сом", status: "ОТК", due: "23 апр", channel: "B2B" },
        { number: "SW-1029", customer: "Nova Brand", amount: "980 000 сом", payment: "30%", debt: "686 000 сом", status: "Раскрой", due: "27 апр", channel: "Контракт" },
        { number: "SW-1021", customer: "Kids Point", amount: "540 000 сом", payment: "100%", debt: "0 сом", status: "Отгружено", due: "20 апр", channel: "Повторный" },
        { number: "SW-1018", customer: "Urban Room", amount: "420 000 сом", payment: "0%", debt: "420 000 сом", status: "Счет отправлен", due: "25 апр", channel: "Новый" }
      ],
      summary: [
        { label: "Активные партии", value: "38", tone: "up" },
        { label: "Средний заказ", value: "780 000 сом", tone: "up" },
        { label: "Брак", value: "2.6%", tone: "down" },
        { label: "Загрузка цеха", value: "89%", tone: "neutral" }
      ]
    },
    inventory: {
      items: [
        { name: "Футер 3-нитка, черный", sku: "TK-301", stock: "420 м", reserve: "360 м", turnover: "1.8 смены", alert: "Критично" },
        { name: "Кулирка белая", sku: "TK-118", stock: "980 м", reserve: "420 м", turnover: "9 дней", alert: "Норма" },
        { name: "Молния YKK 70 см", sku: "FR-022", stock: "640 шт", reserve: "510 шт", turnover: "4 дня", alert: "Контроль качества" },
        { name: "Пакет zip premium", sku: "PK-007", stock: "1200 шт", reserve: "240 шт", turnover: "12 дней", alert: "Норма" }
      ],
      alerts: [
        "Футер 3-нитка надо докупить на 260 м до завтра.",
        "Партия молний YKK показывает брак выше нормы.",
        "Кулирка белая имеет избыточный остаток и может закрыть доп. заказ."
      ]
    },
    operationsCenter: {
      items: [
        { item: "Wave / Худи / 420 ед.", stage: "ОТК", status: "Риск по сроку", owner: "Чолпон С.", due: "23 апр", progress: 84, value: "780 000 сом" },
        { item: "Nova / Футболки / 2500 ед.", stage: "Раскрой", status: "В работе", owner: "Айбек К.", due: "27 апр", progress: 46, value: "980 000 сом" },
        { item: "Kids Point / Форма", stage: "Упаковка", status: "Готово к отгрузке", owner: "Гулизат Т.", due: "22 апр", progress: 94, value: "540 000 сом" },
        { item: "Urban / Джоггеры", stage: "Планирование", status: "Новый заказ", owner: "Чолпон С.", due: "25 апр", progress: 18, value: "420 000 сом" }
      ],
      pipeline: [
        { label: "Раскрой", value: 96 },
        { label: "Пошив", value: 91 },
        { label: "ОТК", value: 84 },
        { label: "Упаковка", value: 89 },
        { label: "Отгрузка", value: 94 }
      ]
    },
    finance: {
      rows: [
        { category: "Wave Streetwear", fact: "2.8 млн сом", plan: "2.6 млн сом", delta: "+8%", margin: "27%" },
        { category: "Nova Brand", fact: "2.1 млн сом", plan: "2.2 млн сом", delta: "-5%", margin: "23%" },
        { category: "Материалы", fact: "3.2 млн сом", plan: "3.0 млн сом", delta: "+7%", margin: "0%" },
        { category: "ФОТ", fact: "2.0 млн сом", plan: "1.9 млн сом", delta: "+5%", margin: "0%" }
      ],
      cashflow: [
        { name: "Ноя", income: 6900000, expense: 5510000, net: 1390000 },
        { name: "Дек", income: 7420000, expense: 5880000, net: 1540000 },
        { name: "Янв", income: 7880000, expense: 6170000, net: 1710000 },
        { name: "Фев", income: 8320000, expense: 6490000, net: 1830000 },
        { name: "Мар", income: 8820000, expense: 6830000, net: 1990000 },
        { name: "Апр", income: 9400000, expense: 7100000, net: 2300000 }
      ]
    },
    bi: {
      trend: [
        { name: "Ноя", current: 78, previous: 73, forecast: 80 },
        { name: "Дек", current: 81, previous: 74, forecast: 83 },
        { name: "Янв", current: 83, previous: 78, forecast: 84 },
        { name: "Фев", current: 85, previous: 79, forecast: 86 },
        { name: "Мар", current: 88, previous: 83, forecast: 89 },
        { name: "Апр", current: 89, previous: 84, forecast: 90 }
      ],
      topEntities: [
        { label: "Wave Streetwear", value: "2.8 млн сом", share: 30, growth: "+12%" },
        { label: "Nova Brand", value: "2.1 млн сом", share: 22, growth: "+9%" },
        { label: "Линия B", value: "91%", share: 0, growth: "+5 п.п." },
        { label: "Худи", value: "1.6 млн сом", share: 17, growth: "+14%" }
      ],
      deviations: [
        "ОТК удерживает 1 ключевую партию с чеком 780 000 сом.",
        "Расход футера выше нормы на 5.7% по размеру XL.",
        "Партия молний R-202 дает аномальный брак."
      ],
      forecast: "Если снять узкое место по ОТК, выручка апреля вырастет до 9.8 млн сом при марже 25%."
    },
    documents: [
      { name: "Спецификация / Wave Streetwear", type: "Спецификация", date: "21 апр", status: "Подписана", owner: "Чолпон С." },
      { name: "Карта раскроя / Nova Brand", type: "Производство", date: "21 апр", status: "Активна", owner: "Айбек К." },
      { name: "Отчет ОТК / Партия 311", type: "ОТК", date: "21 апр", status: "На проверке", owner: "Чолпон С." },
      { name: "Счет / Urban Room", type: "Счет", date: "20 апр", status: "Отправлен", owner: "Гулизат Т." }
    ],
    notifications: [
      { title: "ОТК блокирует отгрузку", text: "Партия Wave на 420 ед. требует решение по шву.", time: "15 мин назад", tone: "critical" },
      { title: "Линия B выше плана", text: "Футболки закрыли смену на 108% к норме.", time: "50 мин назад", tone: "positive" },
      { title: "Ткань на исходе", text: "Футер 3-нитка закончится через 1.8 смены.", time: "1 ч назад", tone: "warning" }
    ],
    assistant: {
      headline: "AI держит под контролем партии, брак и загрузку линий.",
      bullets: [
        "Ищет узкие места между раскроем, пошивом и ОТК.",
        "Сопоставляет расход материалов с нормами.",
        "Предлагает перераспределение людей и заказов."
      ],
      messages: [
        {
          title: "Партия Wave может уйти в просрочку",
          summary: "420 изделий стоят на ОТК дольше нормы из-за шва на капюшоне.",
          metric: "84% готовности / дедлайн 23 апреля",
          recommendation: "Перевести 2 швеи на доработку и закрыть ОТК сегодня к 19:00."
        },
        {
          title: "Футер по Nova Brand на пределе",
          summary: "Ткани не хватит на следующий блок кроя при текущем расходе.",
          metric: "420 м в остатке / резерв 360 м",
          recommendation: "Заказать 260 м сегодня и обновить норму расхода по XL."
        },
        {
          title: "Линия B готова к доп. загрузке",
          summary: "Футболки идут быстрее плана, линия стабильно закрывает смену выше нормы.",
          metric: "108% к плану 3 дня подряд",
          recommendation: "Добавить срочный заказ без риска для текущих контрактов."
        }
      ]
    }
  },
  boutique: {
    kpis: [
      { label: "Выручка", value: "7.8 млн сом", delta: "+16.9%", trend: "up", hint: "Офлайн + Instagram + сайт" },
      { label: "Расходы", value: "5.2 млн сом", delta: "+7.1%", trend: "down", hint: "Закупка, аренда, маркетинг" },
      { label: "Прибыль", value: "2.6 млн сом", delta: "+41.3%", trend: "up", hint: "Маржа 33.3%" },
      { label: "Остатки", value: "4.1 млн сом", delta: "-2.1%", trend: "neutral", hint: "12 коллекций" },
      { label: "Долги", value: "540 000 сом", delta: "-18.2%", trend: "up", hint: "Рассрочка и предзаказы" },
      { label: "План", value: "104%", delta: "+6%", trend: "up", hint: "Коллекция Aura выстрелила" }
    ],
    revenueTrend: [
      { name: "Ноя", revenue: 5400000, expenses: 3990000, profit: 1410000 },
      { name: "Дек", revenue: 6120000, expenses: 4380000, profit: 1740000 },
      { name: "Янв", revenue: 5880000, expenses: 4280000, profit: 1600000 },
      { name: "Фев", revenue: 6610000, expenses: 4620000, profit: 1990000 },
      { name: "Мар", revenue: 7240000, expenses: 4930000, profit: 2310000 },
      { name: "Апр", revenue: 7800000, expenses: 5200000, profit: 2600000 }
    ],
    planFact: [
      { name: "Коллекция Aura", plan: 100, fact: 121 },
      { name: "Denim", plan: 100, fact: 94 },
      { name: "Evening", plan: 100, fact: 97 },
      { name: "Basic", plan: 100, fact: 101 },
      { name: "Accessories", plan: 100, fact: 109 }
    ],
    operations: [
      { id: "CL-411", title: "Пополнение размеров S/M / Aura", meta: "Бутик флагман", owner: "Сайкал Ж.", amount: "320 000 сом", status: "В пути", date: "Сегодня, 13:15" },
      { id: "RTN-082", title: "Возврат платья Evening", meta: "Клиент: Айлин С.", owner: "Мээрим Б.", amount: "18 900 сом", status: "Разбор причины", date: "Сегодня, 11:10" },
      { id: "VIP-014", title: "Персональная подборка для LTV-клиента", meta: "Клиент: Диана К.", owner: "Сайкал Ж.", amount: "0 сом", status: "Подготовлено", date: "Сегодня, 09:00" },
      { id: "PR-208", title: "Заказ поставщику аксессуаров", meta: "Новая капсула", owner: "Мээрим Б.", amount: "410 000 сом", status: "На согласовании", date: "Вчера, 18:30" }
    ],
    risks: [
      { title: "Размер M по Aura заканчивается", description: "Лидирующий размер может уйти в out-of-stock за 2 дня.", impact: "Потеря до 210 000 сом выручки", severity: "high" },
      { title: "Возвраты Evening выше нормы", description: "У модели растет возврат по посадке.", impact: "Маржа коллекции -2.1 п.п.", severity: "medium" },
      { title: "Denim недодает план", description: "Конверсия ниже ожиданий в онлайне.", impact: "Минус 4% к месячному плану категории", severity: "medium" }
    ],
    aiInsights: [
      { title: "Срочно пополнить размер M", description: "Aura дает лучший оборот и высокий средний чек.", recommendation: "Подтвердить экспресс-дозаказ на 26 единиц.", tone: "critical" },
      { title: "Переупаковать карточку Denim", description: "Онлайн-конверсия ниже офлайна в 1.8 раза.", recommendation: "Переснять 3 look-комбинации и поднять social proof.", tone: "warning" },
      { title: "Усилить VIP-продажи", description: "Сегмент клиентов с LTV выше 180 тыс. сом реагирует на персональные подборки.", recommendation: "Запустить персональный дроп по базе 42 клиентов.", tone: "positive" }
    ],
    crm: {
      leads: [
        { company: "Диана К.", contact: "WhatsApp клиент", deal: "Персональный look на ивент", manager: "Сайкал Ж.", status: "В работе", nextStep: "Примерка в пятницу", lastContact: "Сегодня" },
        { company: "Алина М.", contact: "Instagram DM", deal: "Капсула Aura", manager: "Мээрим Б.", status: "КП отправлено", nextStep: "Отправить видео примерки", lastContact: "Сегодня" },
        { company: "Event Lab", contact: "Наргиза С.", deal: "Корпоративный dress code", manager: "Сайкал Ж.", status: "Договор", nextStep: "Подписать счет", lastContact: "Вчера" },
        { company: "Айлин С.", contact: "Бутик-клиент", deal: "Повторная покупка после возврата", manager: "Мээрим Б.", status: "В работе", nextStep: "Предложить альтернативу", lastContact: "Сегодня" }
      ],
      featuredClient: {
        company: "Диана К.",
        segment: "VIP клиент",
        ltv: "286 000 сом",
        lastInvoice: "42 900 сом",
        manager: "Сайкал Ж.",
        tags: ["VIP", "Премиум", "Высокая частота"],
        history: [
          { date: "21 апр", type: "Примерка", title: "Подобраны 4 look для бизнес-ужина", author: "Сайкал Ж." },
          { date: "19 апр", type: "Мессенджер", title: "Согласован wishlist по новой коллекции", author: "Мээрим Б." },
          { date: "16 апр", type: "Продажа", title: "Покупка сумки и жакета Aura", author: "Сайкал Ж." }
        ],
        tasks: [
          { title: "Подготовить private fitting", due: "22 апр, 18:00", owner: "Сайкал Ж.", status: "В работе" },
          { title: "Забронировать платье Evening в размере S", due: "21 апр, 20:00", owner: "Мээрим Б.", status: "Новая" }
        ]
      }
    },
    sales: {
      orders: [
        { number: "BT-772", customer: "Диана К.", amount: "42 900 сом", payment: "100%", debt: "0 сом", status: "Оплачен", due: "Сегодня", channel: "Бутик" },
        { number: "BT-768", customer: "Алина М.", amount: "18 900 сом", payment: "0%", debt: "18 900 сом", status: "Резерв", due: "22 апр", channel: "Instagram" },
        { number: "BT-761", customer: "Event Lab", amount: "186 000 сом", payment: "60%", debt: "74 400 сом", status: "Счет выставлен", due: "24 апр", channel: "B2B" },
        { number: "BT-755", customer: "Айлин С.", amount: "21 500 сом", payment: "Возврат", debt: "0 сом", status: "Обмен", due: "Сегодня", channel: "Бутик" }
      ],
      summary: [
        { label: "Средний чек", value: "7 860 сом", tone: "up" },
        { label: "Возвраты", value: "5.2%", tone: "down" },
        { label: "VIP продажи", value: "18%", tone: "up" },
        { label: "Конверсия бутика", value: "31%", tone: "neutral" }
      ]
    },
    inventory: {
      items: [
        { name: "Aura Jacket / M", sku: "AU-JK-M", stock: "4 шт", reserve: "3 шт", turnover: "2 дня", alert: "Критично" },
        { name: "Denim Wide / 28", sku: "DN-28", stock: "12 шт", reserve: "1 шт", turnover: "14 дней", alert: "Слабый размер" },
        { name: "Evening Dress / S", sku: "EV-S", stock: "7 шт", reserve: "2 шт", turnover: "6 дней", alert: "Возвраты" },
        { name: "Mini Bag Camel", sku: "BG-CM", stock: "18 шт", reserve: "4 шт", turnover: "9 дней", alert: "Норма" }
      ],
      alerts: [
        "Aura Jacket размера M закончится через 2 дня.",
        "Denim Wide размера 28 продается медленнее матрицы на 31%.",
        "Evening Dress показывает возвраты по посадке и требует разбора."
      ]
    },
    operationsCenter: {
      items: [
        { item: "Коллекция Aura", stage: "Пополнение размеров", status: "Риск дефицита", owner: "Сайкал Ж.", due: "23 апр", progress: 86, value: "1.82 млн сом" },
        { item: "Denim", stage: "Онлайн-продвижение", status: "Ниже плана", owner: "Мээрим Б.", due: "25 апр", progress: 58, value: "940 000 сом" },
        { item: "Evening", stage: "Возвраты", status: "Требует решения", owner: "Сайкал Ж.", due: "22 апр", progress: 43, value: "620 000 сом" },
        { item: "Accessories", stage: "Новая поставка", status: "На согласовании", owner: "Мээрим Б.", due: "24 апр", progress: 31, value: "410 000 сом" }
      ],
      pipeline: [
        { label: "Коллекции", value: 82 },
        { label: "Размеры", value: 68 },
        { label: "Продажи", value: 79 },
        { label: "Возвраты", value: 52 },
        { label: "Повторные покупки", value: 61 }
      ]
    },
    finance: {
      rows: [
        { category: "Aura", fact: "2.3 млн сом", plan: "1.9 млн сом", delta: "+21%", margin: "39%" },
        { category: "Denim", fact: "1.1 млн сом", plan: "1.17 млн сом", delta: "-6%", margin: "28%" },
        { category: "Evening", fact: "820 000 сом", plan: "840 000 сом", delta: "-2%", margin: "31%" },
        { category: "Возвраты", fact: "406 000 сом", plan: "320 000 сом", delta: "+27%", margin: "0%" }
      ],
      cashflow: [
        { name: "Ноя", income: 5400000, expense: 3990000, net: 1410000 },
        { name: "Дек", income: 6120000, expense: 4380000, net: 1740000 },
        { name: "Янв", income: 5880000, expense: 4280000, net: 1600000 },
        { name: "Фев", income: 6610000, expense: 4620000, net: 1990000 },
        { name: "Мар", income: 7240000, expense: 4930000, net: 2310000 },
        { name: "Апр", income: 7800000, expense: 5200000, net: 2600000 }
      ]
    },
    bi: {
      trend: [
        { name: "Ноя", current: 24, previous: 22, forecast: 26 },
        { name: "Дек", current: 28, previous: 24, forecast: 29 },
        { name: "Янв", current: 27, previous: 25, forecast: 28 },
        { name: "Фев", current: 31, previous: 27, forecast: 33 },
        { name: "Мар", current: 32, previous: 29, forecast: 34 },
        { name: "Апр", current: 33.3, previous: 30, forecast: 34.5 }
      ],
      topEntities: [
        { label: "Aura", value: "2.3 млн сом", share: 29, growth: "+24%" },
        { label: "VIP сегмент", value: "1.4 млн сом", share: 18, growth: "+17%" },
        { label: "Instagram", value: "1.1 млн сом", share: 14, growth: "+12%" },
        { label: "Accessories", value: "960 000 сом", share: 12, growth: "+10%" }
      ],
      deviations: [
        "Размер M по Aura заканчивается быстрее плановой матрицы.",
        "Возвраты Evening выше нормы по посадке.",
        "Denim недодает план в онлайне, офлайн продает лучше."
      ],
      forecast: "При дозаказе Aura и оптимизации возвратов маржа месяца может подняться до 34.5%."
    },
    documents: [
      { name: "Поставка / Aura", type: "Поставка", date: "21 апр", status: "В пути", owner: "Сайкал Ж." },
      { name: "Возврат / Evening Dress", type: "Возврат", date: "21 апр", status: "Анализ", owner: "Мээрим Б." },
      { name: "Счет / Event Lab", type: "Счет", date: "20 апр", status: "Отправлен", owner: "Сайкал Ж." },
      { name: "Лист клиента / Диана К.", type: "CRM", date: "21 апр", status: "Обновлен", owner: "Мээрим Б." }
    ],
    notifications: [
      { title: "Размер M на исходе", text: "Aura Jacket M имеет запас всего на 2 дня.", time: "9 мин назад", tone: "critical" },
      { title: "VIP клиент готов к покупке", text: "Диана К. подтвердила private fitting.", time: "25 мин назад", tone: "positive" },
      { title: "Возвраты растут", text: "Evening Dress показывает повторяющиеся причины возврата.", time: "1 ч назад", tone: "warning" }
    ],
    assistant: {
      headline: "AI помогает fashion-команде управлять коллекциями, матрицей размеров и повторными продажами.",
      bullets: [
        "Находит размеры и модели с риском дефицита.",
        "Сегментирует клиентов по LTV и стилю покупок.",
        "Подсказывает, что делать с возвратами и онлайн-конверсией."
      ],
      messages: [
        {
          title: "Aura Jacket / размер M на исходе",
          summary: "Хитовая модель закрывает лучший оборот недели и может закончиться через 2 дня.",
          metric: "4 шт на складе / 3 шт в резерве",
          recommendation: "Подтвердить экспресс-дозаказ на 26 единиц и перераспределить витринный запас."
        },
        {
          title: "Evening дает лишние возвраты",
          summary: "Клиенты чаще возвращают модель из-за посадки в талии.",
          metric: "5.2% возвратов против нормы 3.1%",
          recommendation: "Остановить доп. закупку и скорректировать карточку размера + консультацию стилиста."
        },
        {
          title: "VIP база готова к private drop",
          summary: "42 клиента с LTV выше 180 тыс. сом положительно реагируют на персональные подборки.",
          metric: "Конверсия сегмента 28%",
          recommendation: "Запустить персональную рассылку по новой капсуле Aura с закрытой примеркой."
        }
      ]
    }
  },
  agro: {
    kpis: [
      { label: "Выручка", value: "12.6 млн сом", delta: "+9.8%", trend: "up", hint: "Сезон по 8 полям" },
      { label: "Расходы", value: "9.7 млн сом", delta: "+5.4%", trend: "down", hint: "Удобрения, ГСМ, техника" },
      { label: "Прибыль", value: "2.9 млн сом", delta: "+27.6%", trend: "up", hint: "Маржа 23%" },
      { label: "Остатки", value: "5.9 млн сом", delta: "-1.9%", trend: "neutral", hint: "Семена, удобрения, корм" },
      { label: "Долги", value: "1.4 млн сом", delta: "-7.5%", trend: "up", hint: "2 контрагента по отсрочке" },
      { label: "План", value: "95%", delta: "-4%", trend: "down", hint: "Поле №3 проседает по урожайности" }
    ],
    revenueTrend: [
      { name: "Ноя", revenue: 9200000, expenses: 7480000, profit: 1720000 },
      { name: "Дек", revenue: 10100000, expenses: 8120000, profit: 1980000 },
      { name: "Янв", revenue: 10800000, expenses: 8690000, profit: 2110000 },
      { name: "Фев", revenue: 11300000, expenses: 9040000, profit: 2260000 },
      { name: "Мар", revenue: 11900000, expenses: 9360000, profit: 2540000 },
      { name: "Апр", revenue: 12600000, expenses: 9700000, profit: 2900000 }
    ],
    planFact: [
      { name: "Пшеница", plan: 100, fact: 94 },
      { name: "Ячмень", plan: 100, fact: 101 },
      { name: "Кукуруза", plan: 100, fact: 97 },
      { name: "Кормовой блок", plan: 100, fact: 93 },
      { name: "Техника", plan: 100, fact: 96 }
    ],
    operations: [
      { id: "FLD-303", title: "Поле №3 / внесение удобрений", meta: "Кукуруза / 48 га", owner: "Болот К.", amount: "214 000 сом", status: "Выполнено 72%", date: "Сегодня, 14:10" },
      { id: "LIV-118", title: "Партия кормов для КРС", meta: "Ферма Восток", owner: "Жаныл Т.", amount: "168 000 сом", status: "На складе", date: "Сегодня, 09:30" },
      { id: "TECH-49", title: "Ремонт сеялки JD-2", meta: "Механизация", owner: "Руслан С.", amount: "86 000 сом", status: "В работе", date: "Вчера, 18:10" },
      { id: "HRV-014", title: "Прогноз урожая по полю №5", meta: "Пшеница", owner: "Азамат Д.", amount: "0 сом", status: "Требует внимания", date: "Вчера, 16:20" }
    ],
    risks: [
      { title: "Поле №3 ниже плана по росту", description: "Влажность и питание дают отставание от модели.", impact: "Минус 8-10% к урожайности поля", severity: "high" },
      { title: "Сеялка JD-2 в ремонте", description: "Техника выбилась из графика на 1 день.", impact: "Сдвиг окна посева по участку 18 га", severity: "medium" },
      { title: "Кормовой блок выходит выше бюджета", description: "Цены на премиксы выросли на 6%.", impact: "Себестоимость привеса растет", severity: "medium" }
    ],
    aiInsights: [
      { title: "Скорректировать питание поля №3", description: "Культура реагирует ниже ожидаемой модели.", recommendation: "Добавить 420 кг удобрения в течение 48 часов.", tone: "critical" },
      { title: "Перенести сеялку с поля №6", description: "Поле №6 имеет запас по сроку работ.", recommendation: "Закрыть окно посева на участке 18 га без потери темпа.", tone: "warning" },
      { title: "Ячмень выше ожиданий", description: "Поле №2 показывает лучший индекс развития за сезон.", recommendation: "Зафиксировать успешную схему как эталон для следующего цикла.", tone: "positive" }
    ],
    crm: {
      leads: [
        { company: "ОсОО 'АгроМаркет'", contact: "Эмил А.", deal: "Поставка зерна", manager: "Азамат Д.", status: "КП отправлено", nextStep: "Согласовать объем", lastContact: "Сегодня" },
        { company: "Ферма 'Береке'", contact: "Улан М.", deal: "Комбикорм и премиксы", manager: "Жаныл Т.", status: "В работе", nextStep: "Тестовая партия", lastContact: "Вчера" },
        { company: "ОсОО 'BioExport'", contact: "Айпери К.", deal: "Контракт на кукурузу", manager: "Болот К.", status: "Договор", nextStep: "Утвердить логистику", lastContact: "2 дня назад" },
        { company: "Ферма 'Нур'", contact: "Медер Ж.", deal: "Консалтинг по кормлению", manager: "Жаныл Т.", status: "Новый", nextStep: "Первый визит", lastContact: "Сегодня" }
      ],
      featuredClient: {
        company: "ОсОО 'BioExport'",
        segment: "Экспорт / зерно",
        ltv: "12.4 млн сом",
        lastInvoice: "2.1 млн сом",
        manager: "Болот К.",
        tags: ["Экспорт", "Крупный контракт", "Требует график"],
        history: [
          { date: "21 апр", type: "Звонок", title: "Согласованы окна отгрузки по кукурузе", author: "Болот К." },
          { date: "19 апр", type: "КП", title: "Отправлен новый график поставок", author: "Азамат Д." },
          { date: "17 апр", type: "Встреча", title: "Подтверждены требования по качеству", author: "Болот К." }
        ],
        tasks: [
          { title: "Подготовить прогноз урожайности по партиям", due: "22 апр, 12:00", owner: "Азамат Д.", status: "В работе" },
          { title: "Согласовать маршрут до терминала", due: "23 апр, 10:00", owner: "Жаныл Т.", status: "Новая" }
        ]
      }
    },
    sales: {
      orders: [
        { number: "AG-910", customer: "BioExport", amount: "2.1 млн сом", payment: "40%", debt: "1.26 млн сом", status: "Подготовка отгрузки", due: "29 апр", channel: "Экспорт" },
        { number: "AG-904", customer: "АгроМаркет", amount: "780 000 сом", payment: "0%", debt: "780 000 сом", status: "КП", due: "24 апр", channel: "B2B" },
        { number: "AG-899", customer: "Береке", amount: "320 000 сом", payment: "100%", debt: "0 сом", status: "Повторный заказ", due: "22 апр", channel: "Корма" },
        { number: "AG-884", customer: "Ферма Нур", amount: "160 000 сом", payment: "30%", debt: "112 000 сом", status: "Пилот", due: "25 апр", channel: "Консалтинг" }
      ],
      summary: [
        { label: "Активные поля", value: "8", tone: "neutral" },
        { label: "Средний контракт", value: "1.34 млн сом", tone: "up" },
        { label: "Отклонение по урожаю", value: "-4%", tone: "down" },
        { label: "Себестоимость корма", value: "+6%", tone: "down" }
      ]
    },
    inventory: {
      items: [
        { name: "Аммиачная селитра", sku: "AG-FR-01", stock: "5.2 т", reserve: "4.6 т", turnover: "6 дней", alert: "Критично" },
        { name: "Семена кукурузы", sku: "AG-SD-04", stock: "840 кг", reserve: "520 кг", turnover: "11 дней", alert: "Норма" },
        { name: "Премикс для КРС", sku: "AG-FD-07", stock: "1.1 т", reserve: "0.8 т", turnover: "7 дней", alert: "Рост цены" },
        { name: "Дизтопливо", sku: "AG-FL-02", stock: "3 800 л", reserve: "1 900 л", turnover: "8 дней", alert: "Норма" }
      ],
      alerts: [
        "Аммиачной селитры хватит на 6 дней при текущем темпе внесения.",
        "Премикс для КРС вырос в закупке на 6%.",
        "Семена кукурузы на поле №3 можно перераспределить с участка №6."
      ]
    },
    operationsCenter: {
      items: [
        { item: "Поле №3 / Кукуруза", stage: "Внесение удобрений", status: "Ниже плана", owner: "Болот К.", due: "22 апр", progress: 72, value: "214 000 сом" },
        { item: "Поле №2 / Ячмень", stage: "Мониторинг роста", status: "Выше модели", owner: "Азамат Д.", due: "24 апр", progress: 88, value: "1.4 млн сом прогноза" },
        { item: "Ферма Восток", stage: "Кормление КРС", status: "Рост себестоимости", owner: "Жаныл Т.", due: "Сегодня", progress: 63, value: "168 000 сом" },
        { item: "Техника JD-2", stage: "Ремонт", status: "В работе", owner: "Руслан С.", due: "22 апр", progress: 54, value: "86 000 сом" }
      ],
      pipeline: [
        { label: "Посев", value: 96 },
        { label: "Питание", value: 74 },
        { label: "Техника", value: 68 },
        { label: "Кормовой блок", value: 63 },
        { label: "Прогноз урожая", value: 71 }
      ]
    },
    finance: {
      rows: [
        { category: "Поле №2 / Ячмень", fact: "2.1 млн сом", plan: "1.96 млн сом", delta: "+7%", margin: "29%" },
        { category: "Поле №3 / Кукуруза", fact: "1.8 млн сом", plan: "2.0 млн сом", delta: "-10%", margin: "21%" },
        { category: "Кормовой блок", fact: "1.46 млн сом", plan: "1.38 млн сом", delta: "+6%", margin: "18%" },
        { category: "ГСМ и техника", fact: "2.2 млн сом", plan: "2.0 млн сом", delta: "+10%", margin: "0%" }
      ],
      cashflow: [
        { name: "Ноя", income: 9200000, expense: 7480000, net: 1720000 },
        { name: "Дек", income: 10100000, expense: 8120000, net: 1980000 },
        { name: "Янв", income: 10800000, expense: 8690000, net: 2110000 },
        { name: "Фев", income: 11300000, expense: 9040000, net: 2260000 },
        { name: "Мар", income: 11900000, expense: 9360000, net: 2540000 },
        { name: "Апр", income: 12600000, expense: 9700000, net: 2900000 }
      ]
    },
    bi: {
      trend: [
        { name: "Ноя", current: 19, previous: 17, forecast: 20 },
        { name: "Дек", current: 20, previous: 18, forecast: 21 },
        { name: "Янв", current: 20.5, previous: 19, forecast: 21.3 },
        { name: "Фев", current: 21, previous: 19.5, forecast: 21.8 },
        { name: "Мар", current: 22, previous: 20.2, forecast: 22.4 },
        { name: "Апр", current: 23, previous: 21, forecast: 24.1 }
      ],
      topEntities: [
        { label: "Поле №2", value: "2.1 млн сом", share: 17, growth: "+11%" },
        { label: "BioExport", value: "2.1 млн сом", share: 17, growth: "+9%" },
        { label: "Кукуруза", value: "3.4 млн сом", share: 27, growth: "+7%" },
        { label: "Кормовой блок", value: "1.46 млн сом", share: 12, growth: "-3%" }
      ],
      deviations: [
        "Поле №3 показывает минус 8-10% к модели урожайности.",
        "Кормовой блок теряет маржу из-за роста премиксов.",
        "Техника JD-2 создает риск сдвига окна посева."
      ],
      forecast: "При быстрой коррекции питания по полю №3 общий прогноз маржи сезона может вырасти до 24.1%."
    },
    documents: [
      { name: "Карта поля №3", type: "Поле", date: "21 апр", status: "Обновлена", owner: "Болот К." },
      { name: "Отчет по технике JD-2", type: "Техника", date: "21 апр", status: "В ремонте", owner: "Руслан С." },
      { name: "Контракт / BioExport", type: "Договор", date: "20 апр", status: "Активен", owner: "Азамат Д." },
      { name: "Заявка / Аммиачная селитра", type: "Закупка", date: "21 апр", status: "На согласовании", owner: "Жаныл Т." }
    ],
    notifications: [
      { title: "Поле №3 проседает", text: "Кукуруза ниже модели развития и требует корректировку питания.", time: "18 мин назад", tone: "critical" },
      { title: "Ячмень выше прогноза", text: "Поле №2 показывает лучший индекс развития сезона.", time: "42 мин назад", tone: "positive" },
      { title: "Ремонт техники", text: "Сеялка JD-2 задерживается еще на полсмены.", time: "1 ч назад", tone: "warning" }
    ],
    assistant: {
      headline: "AI связывает поля, партии, технику и экономику сезона.",
      bullets: [
        "Сравнивает фактическое развитие культуры с моделью.",
        "Подсвечивает перерасход удобрений и ГСМ.",
        "Дает конкретные действия по полю, технике и отгрузке."
      ],
      messages: [
        {
          title: "Поле №3 теряет урожайность",
          summary: "Кукуруза отстает от модели развития из-за недокорма и стресса по влаге.",
          metric: "Прогноз -8-10% к плану",
          recommendation: "Внести 420 кг удобрения в ближайшие 48 часов и усилить контроль влажности."
        },
        {
          title: "Аммиачной селитры хватит на 6 дней",
          summary: "Запас уже почти полностью зарезервирован под активные поля.",
          metric: "5.2 т на складе / 4.6 т в резерве",
          recommendation: "Создать заказ на 3.5 т сегодня и перераспределить часть с поля №6."
        },
        {
          title: "Сеялку можно компенсировать без потери графика",
          summary: "Поле №6 имеет окно и позволяет временно перебросить технику.",
          metric: "18 га под риском смещения",
          recommendation: "Перенести сеялку на 1 день и закрыть участок без простоя бригады."
        }
      ]
    }
  },
  bakery: {
    kpis: [
      { label: "Выручка", value: "8.6 млн сом", delta: "+11.7%", trend: "up", hint: "12 точек отгрузки" },
      { label: "Расходы", value: "6.3 млн сом", delta: "+4.8%", trend: "down", hint: "Сырье и логистика" },
      { label: "Прибыль", value: "2.3 млн сом", delta: "+34.9%", trend: "up", hint: "Маржа 26.7%" },
      { label: "Остатки", value: "2.2 млн сом", delta: "-8.2%", trend: "up", hint: "Мука, дрожжи, упаковка" },
      { label: "Долги", value: "690 000 сом", delta: "-6.3%", trend: "up", hint: "4 магазина по отсрочке" },
      { label: "План", value: "98%", delta: "-2%", trend: "neutral", hint: "Возвраты выше нормы по 5 магазинам" }
    ],
    revenueTrend: [
      { name: "Ноя", revenue: 6500000, expenses: 5090000, profit: 1410000 },
      { name: "Дек", revenue: 7020000, expenses: 5360000, profit: 1660000 },
      { name: "Янв", revenue: 7210000, expenses: 5550000, profit: 1660000 },
      { name: "Фев", revenue: 7660000, expenses: 5840000, profit: 1820000 },
      { name: "Мар", revenue: 8140000, expenses: 6030000, profit: 2110000 },
      { name: "Апр", revenue: 8600000, expenses: 6300000, profit: 2300000 }
    ],
    planFact: [
      { name: "Хлеб формовой", plan: 100, fact: 95 },
      { name: "Багет", plan: 100, fact: 103 },
      { name: "Булочки", plan: 100, fact: 97 },
      { name: "Сдоба", plan: 100, fact: 94 },
      { name: "Лаваш", plan: 100, fact: 100 }
    ],
    operations: [
      { id: "BP-141", title: "Автоплан по 12 точкам", meta: "Смена утро", owner: "Айдана Т.", amount: "0 сом", status: "Обновлен", date: "Сегодня, 05:40" },
      { id: "PD-421", title: "Выпуск хлеба формового", meta: "Линия №1 / 4 800 шт", owner: "Медет К.", amount: "640 000 сом", status: "Выполнено 92%", date: "Сегодня, 08:50" },
      { id: "RTN-077", title: "Возвраты по 5 магазинам", meta: "Хлеб и булочки", owner: "Гульнара А.", amount: "72 000 сом", status: "Требует решения", date: "Сегодня, 12:20" },
      { id: "RAW-208", title: "Заявка на муку", meta: "Склад сырья", owner: "Айдана Т.", amount: "310 000 сом", status: "На согласовании", date: "Вчера, 18:10" }
    ],
    risks: [
      { title: "Мука закончится через 3 дня", description: "Запас под утренний выпуск почти исчерпан.", impact: "Риск срыва формового хлеба", severity: "high" },
      { title: "Возвраты выросли до 8.4%", description: "5 магазинов системно возвращают хлеб.", impact: "Маржа минус 1.9 п.п.", severity: "high" },
      { title: "Сдоба ниже плана", description: "Две точки дают слабый вечерний спрос.", impact: "Перепроизводство и списания", severity: "medium" }
    ],
    aiInsights: [
      { title: "Снизить автоплан по 5 магазинам", description: "Возвраты формового хлеба растут 4 дня подряд.", recommendation: "Уменьшить утренний план на 11% и проверить выкладку.", tone: "critical" },
      { title: "Создать заявку на муку", description: "Сырье закончится до следующей отгрузки поставщика.", recommendation: "Заказать 500 кг сегодня до 15:00.", tone: "critical" },
      { title: "Багет можно усилить", description: "Продажи выше прогноза и с низким уровнем возврата.", recommendation: "Добавить 180 шт в план выходного дня.", tone: "positive" }
    ],
    crm: {
      leads: [
        { company: "Маркет 'Ордо'", contact: "Зарина К.", deal: "Ежедневная поставка хлеба", manager: "Гульнара А.", status: "В работе", nextStep: "Тестовая отгрузка", lastContact: "Сегодня" },
        { company: "Кафе 'Бублик'", contact: "Адилет С.", deal: "Булочки и круассаны", manager: "Айдана Т.", status: "КП отправлено", nextStep: "Согласовать ассортимент", lastContact: "Вчера" },
        { company: "Школа №18", contact: "Сезим Ж.", deal: "Поставка выпечки", manager: "Гульнара А.", status: "Договор", nextStep: "Подписать график", lastContact: "2 дня назад" },
        { company: "Минимаркет 'Аян'", contact: "Улук Т.", deal: "Сдоба", manager: "Медет К.", status: "Новый", nextStep: "Первый звонок", lastContact: "Сегодня" }
      ],
      featuredClient: {
        company: "Маркет 'Ордо'",
        segment: "Розничная сеть",
        ltv: "6.2 млн сом",
        lastInvoice: "128 000 сом",
        manager: "Гульнара А.",
        tags: ["Сеть", "Ежедневная поставка", "Высокий потенциал"],
        history: [
          { date: "21 апр", type: "Звонок", title: "Подтвержден тест по 3 SKU на 2 магазина", author: "Гульнара А." },
          { date: "20 апр", type: "КП", title: "Отправлен прайс и график поставок", author: "Айдана Т." },
          { date: "18 апр", type: "Встреча", title: "Сняты объемы по формовому хлебу и багету", author: "Гульнара А." }
        ],
        tasks: [
          { title: "Подготовить автоплан для тестовых точек", due: "22 апр, 09:00", owner: "Айдана Т.", status: "В работе" },
          { title: "Согласовать условия возврата", due: "22 апр, 14:00", owner: "Гульнара А.", status: "Новая" }
        ]
      }
    },
    sales: {
      orders: [
        { number: "BK-2218", customer: "Сеть точек / утро", amount: "860 000 сом", payment: "Ежедневно", debt: "0 сом", status: "Выпуск", due: "Сегодня", channel: "Сеть" },
        { number: "BK-2211", customer: "Маркет Ордо", amount: "128 000 сом", payment: "50%", debt: "64 000 сом", status: "Пилот", due: "22 апр", channel: "B2B" },
        { number: "BK-2205", customer: "Школа №18", amount: "72 000 сом", payment: "100%", debt: "0 сом", status: "Активен", due: "24 апр", channel: "HoReCa" },
        { number: "BK-2197", customer: "Кафе Бублик", amount: "48 000 сом", payment: "0%", debt: "48 000 сом", status: "КП", due: "23 апр", channel: "HoReCa" }
      ],
      summary: [
        { label: "Возвраты", value: "8.4%", tone: "down" },
        { label: "Средний SKU в точке", value: "31", tone: "neutral" },
        { label: "Точность автоплана", value: "91%", tone: "up" },
        { label: "Средняя маржа", value: "26.7%", tone: "up" }
      ]
    },
    inventory: {
      items: [
        { name: "Мука 1 сорт", sku: "RW-001", stock: "780 кг", reserve: "520 кг", turnover: "3 дня", alert: "Критично" },
        { name: "Дрожжи сухие", sku: "RW-012", stock: "92 кг", reserve: "44 кг", turnover: "9 дней", alert: "Норма" },
        { name: "Сахар", sku: "RW-020", stock: "340 кг", reserve: "80 кг", turnover: "12 дней", alert: "Норма" },
        { name: "Пакет фирменный", sku: "PK-110", stock: "2 200 шт", reserve: "1 100 шт", turnover: "7 дней", alert: "Пополнить" }
      ],
      alerts: [
        "Мука закончится через 3 дня, нужен заказ минимум на 500 кг.",
        "Пять магазинов дают возвраты выше 8% по хлебу.",
        "Багет можно усилить без роста списаний."
      ]
    },
    operationsCenter: {
      items: [
        { item: "Утренний выпуск / Хлеб", stage: "Производство", status: "Ниже автоплана", owner: "Медет К.", due: "Сегодня 06:30", progress: 92, value: "640 000 сом" },
        { item: "5 магазинов / Возвраты", stage: "Анализ спроса", status: "Критично", owner: "Гульнара А.", due: "Сегодня 17:00", progress: 48, value: "72 000 сом" },
        { item: "Багет / Выходные", stage: "Коррекция плана", status: "Рост спроса", owner: "Айдана Т.", due: "22 апр", progress: 66, value: "114 000 сом" },
        { item: "Мука / Закупка", stage: "Заявка поставщику", status: "На согласовании", owner: "Айдана Т.", due: "Сегодня 15:00", progress: 34, value: "310 000 сом" }
      ],
      pipeline: [
        { label: "Автоплан", value: 91 },
        { label: "Выпуск", value: 88 },
        { label: "Отгрузка", value: 94 },
        { label: "Возвраты", value: 42 },
        { label: "Сырье", value: 58 }
      ]
    },
    finance: {
      rows: [
        { category: "Хлеб формовой", fact: "2.6 млн сом", plan: "2.8 млн сом", delta: "-7%", margin: "24%" },
        { category: "Багет", fact: "1.4 млн сом", plan: "1.28 млн сом", delta: "+9%", margin: "31%" },
        { category: "Сдоба", fact: "1.18 млн сом", plan: "1.26 млн сом", delta: "-6%", margin: "27%" },
        { category: "Возвраты", fact: "312 000 сом", plan: "210 000 сом", delta: "+49%", margin: "0%" }
      ],
      cashflow: [
        { name: "Ноя", income: 6500000, expense: 5090000, net: 1410000 },
        { name: "Дек", income: 7020000, expense: 5360000, net: 1660000 },
        { name: "Янв", income: 7210000, expense: 5550000, net: 1660000 },
        { name: "Фев", income: 7660000, expense: 5840000, net: 1820000 },
        { name: "Мар", income: 8140000, expense: 6030000, net: 2110000 },
        { name: "Апр", income: 8600000, expense: 6300000, net: 2300000 }
      ]
    },
    bi: {
      trend: [
        { name: "Ноя", current: 22, previous: 20, forecast: 23 },
        { name: "Дек", current: 24, previous: 21, forecast: 25 },
        { name: "Янв", current: 23, previous: 22, forecast: 24 },
        { name: "Фев", current: 24, previous: 22.5, forecast: 25 },
        { name: "Мар", current: 26, previous: 23, forecast: 26.8 },
        { name: "Апр", current: 26.7, previous: 24.5, forecast: 27.4 }
      ],
      topEntities: [
        { label: "Хлеб формовой", value: "2.6 млн сом", share: 30, growth: "-3%" },
        { label: "Багет", value: "1.4 млн сом", share: 16, growth: "+12%" },
        { label: "Магазин №4", value: "860 000 сом", share: 10, growth: "+7%" },
        { label: "Маркет Ордо", value: "128 000 сом", share: 1.5, growth: "Новый" }
      ],
      deviations: [
        "Возвраты выросли до 8.4% по 5 магазинам.",
        "Мука закончится через 3 дня по текущему темпу.",
        "Багет продается выше плана и может расти дальше."
      ],
      forecast: "Снижение автоплана по 5 точкам и заказ муки сегодня поднимут маржу месяца до 27.4%."
    },
    documents: [
      { name: "Автоплан / 21 апреля", type: "План выпуска", date: "21 апр", status: "Активен", owner: "Айдана Т." },
      { name: "Акт возврата / 5 магазинов", type: "Возврат", date: "21 апр", status: "Разбор", owner: "Гульнара А." },
      { name: "Заявка / Мука 500 кг", type: "Закупка", date: "21 апр", status: "На согласовании", owner: "Айдана Т." },
      { name: "Договор / Маркет Ордо", type: "Договор", date: "20 апр", status: "Черновик", owner: "Гульнара А." }
    ],
    notifications: [
      { title: "Риск по муке", text: "Остаток сырья закончится через 3 дня.", time: "11 мин назад", tone: "critical" },
      { title: "Багет растет", text: "Продажи багета выше прогноза на 9%.", time: "37 мин назад", tone: "positive" },
      { title: "Возвраты вышли за норму", text: "5 магазинов дают возвраты выше 8%.", time: "58 мин назад", tone: "warning" }
    ],
    assistant: {
      headline: "AI помогает пищевому производству балансировать выпуск, спрос и возвраты.",
      bullets: [
        "Строит автоплан по точкам и сезонности.",
        "Подсвечивает дефицит сырья и риск перепроизводства.",
        "Показывает, где снизить выпуск, а где добавить."
      ],
      messages: [
        {
          title: "Мука закончится через 3 дня",
          summary: "Сырья не хватит на текущий темп формового хлеба и сдобы.",
          metric: "780 кг в остатке / резерв 520 кг",
          recommendation: "Создать заявку поставщику на 500 кг и согласовать оплату сегодня."
        },
        {
          title: "Возвраты хлеба выросли до 8.4%",
          summary: "Пять магазинов системно возвращают хлеб выше нормы.",
          metric: "72 000 сом возврата за сутки",
          recommendation: "Снизить автоплан по этим точкам на 11% и проверить выкладку."
        },
        {
          title: "Багет можно продавать больше",
          summary: "Позиция держит высокий спрос и низкий возврат в течение недели.",
          metric: "+9% к плану / возврат ниже 2%",
          recommendation: "Добавить 180 шт в план выходного дня."
        }
      ]
    }
  },
  restaurant: {
    kpis: [
      { label: "Food Cost %", value: "28.4%", delta: "-1.2п.п.", trend: "up", hint: "Цель: ниже 30%", statusLabel: "В норме" },
      { label: "Средний чек", value: "2 840 сом", delta: "+8.3%", trend: "up", hint: "3 кухни + бар", statusLabel: "Растёт" },
      { label: "Оборот столов", value: "4.2x", delta: "+0.6x", trend: "up", hint: "Пик: 19:00–22:00", statusLabel: "Отлично" },
      { label: "Выручка смены", value: "10.2 млн сом", delta: "+13.1%", trend: "up", hint: "Апрель, 30 дней" },
      { label: "Списания", value: "3.1%", delta: "+0.4п.п.", trend: "down", hint: "Норма: до 2.5%", statusLabel: "Превышение" },
      { label: "Выполнение плана", value: "101%", delta: "+2%", trend: "up", hint: "Бар вытянул вечер", statusLabel: "Перевыполнен" }
    ],
    revenueTrend: [
      { name: "Ноя", revenue: 7600000, expenses: 6050000, profit: 1550000 },
      { name: "Дек", revenue: 8420000, expenses: 6510000, profit: 1910000 },
      { name: "Янв", revenue: 8010000, expenses: 6320000, profit: 1690000 },
      { name: "Фев", revenue: 8820000, expenses: 6780000, profit: 2040000 },
      { name: "Мар", revenue: 9540000, expenses: 7210000, profit: 2330000 },
      { name: "Апр", revenue: 10200000, expenses: 7600000, profit: 2600000 }
    ],
    planFact: [
      { name: "Основное меню", plan: 100, fact: 99 },
      { name: "Бар", plan: 100, fact: 108 },
      { name: "Доставка", plan: 100, fact: 103 },
      { name: "Банкеты", plan: 100, fact: 95 },
      { name: "Desserts", plan: 100, fact: 92 }
    ],
    operations: [
      { id: "KIT-404", title: "Отклонение по техкарте / паста карбонара", meta: "Кухня №2", owner: "Нурсултан К.", amount: "14 200 сом", status: "Разбор", date: "Сегодня, 13:00" },
      { id: "PUR-118", title: "Заказ овощей и зелени", meta: "Поставщик FreshLine", owner: "Диана А.", amount: "96 000 сом", status: "Подтвержден", date: "Сегодня, 09:40" },
      { id: "WST-075", title: "Списание десертов", meta: "Витрина / конец дня", owner: "Элмира Т.", amount: "11 600 сом", status: "Проведено", date: "Вчера, 23:10" },
      { id: "BAN-220", title: "Банкет на 60 гостей", meta: "Корпоративный заказ", owner: "Нурсултан К.", amount: "182 000 сом", status: "Подготовка", date: "Вчера, 16:00" }
    ],
    risks: [
      { title: "Food cost по пасте выше нормы", description: "Порция стабильно выходит за техкарту на 6%.", impact: "Маржа меню -1.3 п.п.", severity: "high" },
      { title: "Десерты списываются", description: "Витрина дает лишние остатки три дня подряд.", impact: "Потеря 34 000 сом в неделю", severity: "medium" },
      { title: "Банкеты ниже плана", description: "Два корпоративных клиента медлят с предоплатой.", impact: "Минус 280 000 сом выручки месяца", severity: "medium" }
    ],
    aiInsights: [
      { title: "Скорректировать техкарту пасты", description: "Отклонение по сливкам и бекону повторяется 4 смены.", recommendation: "Проверить норму закладки и выдать задачу шефу.", tone: "critical" },
      { title: "Снизить производство десертов", description: "Вечерний спрос ниже прогноза по двум позициям.", recommendation: "Уменьшить выпуск на 18% и продвинуть сет-комбо.", tone: "warning" },
      { title: "Бар можно масштабировать", description: "Напитки выше плана и держат высокую маржу.", recommendation: "Добавить upsell-скрипт официантам в вечернюю смену.", tone: "positive" }
    ],
    crm: {
      leads: [
        { company: "ОсОО 'Prime Tech'", contact: "Жыпар К.", deal: "Банкет на 80 гостей", manager: "Элмира Т.", status: "КП отправлено", nextStep: "Выбор меню", lastContact: "Сегодня" },
        { company: "Диас Н.", contact: "Частный клиент", deal: "Семейный ужин", manager: "Диана А.", status: "В работе", nextStep: "Подтвердить бронь", lastContact: "Сегодня" },
        { company: "Travel Hub", contact: "Самат О.", deal: "Групповые обеды", manager: "Элмира Т.", status: "Договор", nextStep: "Подписать график", lastContact: "Вчера" },
        { company: "Art Space", contact: "Мария Б.", deal: "Кейтеринг", manager: "Диана А.", status: "Новый", nextStep: "Первый созвон", lastContact: "Сегодня" }
      ],
      featuredClient: {
        company: "ОсОО 'Prime Tech'",
        segment: "Корпоративные мероприятия",
        ltv: "2.8 млн сом",
        lastInvoice: "182 000 сом",
        manager: "Элмира Т.",
        tags: ["Банкеты", "Высокая маржа", "Повторный"],
        history: [
          { date: "21 апр", type: "Звонок", title: "Уточнен состав банкетного меню", author: "Элмира Т." },
          { date: "20 апр", type: "КП", title: "Отправлены 2 пакета и калькуляция", author: "Диана А." },
          { date: "18 апр", type: "Встреча", title: "Проведен показ зала и дегустация", author: "Элмира Т." }
        ],
        tasks: [
          { title: "Зафиксировать предоплату 50%", due: "22 апр, 13:00", owner: "Элмира Т.", status: "В работе" },
          { title: "Передать банкет в производство", due: "23 апр, 11:00", owner: "Нурсултан К.", status: "Новая" }
        ]
      }
    },
    sales: {
      orders: [
        { number: "RS-3482", customer: "Prime Tech", amount: "182 000 сом", payment: "30%", debt: "127 400 сом", status: "Подготовка", due: "25 апр", channel: "Банкет" },
        { number: "RS-3477", customer: "Зал / вечерняя смена", amount: "486 000 сом", payment: "100%", debt: "0 сом", status: "Закрыт день", due: "Сегодня", channel: "Офлайн" },
        { number: "RS-3471", customer: "Delivery", amount: "162 000 сом", payment: "Онлайн", debt: "0 сом", status: "Закрыт день", due: "Сегодня", channel: "Доставка" },
        { number: "RS-3464", customer: "Travel Hub", amount: "94 000 сом", payment: "50%", debt: "47 000 сом", status: "Активен", due: "24 апр", channel: "Корпоративный" }
      ],
      summary: [
        { label: "Food cost", value: "31.8%", tone: "down" },
        { label: "Бар / маржа", value: "64%", tone: "up" },
        { label: "Средний чек", value: "1 940 сом", tone: "up" },
        { label: "Доставка", value: "16% выручки", tone: "neutral" }
      ]
    },
    inventory: {
      items: [
        { name: "Сливки 33%", sku: "FD-101", stock: "42 л", reserve: "18 л", turnover: "3 дня", alert: "Критично" },
        { name: "Бекон", sku: "FD-112", stock: "38 кг", reserve: "14 кг", turnover: "4 дня", alert: "Под пасту" },
        { name: "Шпинат", sku: "FD-208", stock: "18 кг", reserve: "6 кг", turnover: "2 дня", alert: "Свежий заказ" },
        { name: "Сиропы бар", sku: "BR-019", stock: "74 бут.", reserve: "12 бут.", turnover: "12 дней", alert: "Норма" }
      ],
      alerts: [
        "Сливки 33% закончатся через 3 дня при текущем темпе.",
        "Паста карбонара стабильно превышает норму по техкарте.",
        "Десерты лучше сократить в вечернем выпуске."
      ]
    },
    operationsCenter: {
      items: [
        { item: "Кухня №2 / Паста", stage: "Контроль техкарты", status: "Отклонение", owner: "Нурсултан К.", due: "Сегодня 18:00", progress: 54, value: "14 200 сом" },
        { item: "Витрина десертов", stage: "Списание", status: "Выше нормы", owner: "Элмира Т.", due: "Сегодня", progress: 42, value: "11 600 сом" },
        { item: "Банкет Prime Tech", stage: "Подготовка", status: "В графике", owner: "Диана А.", due: "25 апр", progress: 68, value: "182 000 сом" },
        { item: "Бар / Upsell", stage: "Сервис", status: "Рост", owner: "Элмира Т.", due: "22 апр", progress: 77, value: "96 000 сом" }
      ],
      pipeline: [
        { label: "Техкарты", value: 76 },
        { label: "Кухня", value: 82 },
        { label: "Списания", value: 44 },
        { label: "Бар", value: 91 },
        { label: "Банкеты", value: 68 }
      ]
    },
    finance: {
      rows: [
        { category: "Основное меню", fact: "4.3 млн сом", plan: "4.35 млн сом", delta: "-1%", margin: "27%" },
        { category: "Бар", fact: "2.1 млн сом", plan: "1.9 млн сом", delta: "+11%", margin: "64%" },
        { category: "Доставка", fact: "1.62 млн сом", plan: "1.55 млн сом", delta: "+5%", margin: "24%" },
        { category: "Списания", fact: "188 000 сом", plan: "136 000 сом", delta: "+38%", margin: "0%" }
      ],
      cashflow: [
        { name: "Ноя", income: 7600000, expense: 6050000, net: 1550000 },
        { name: "Дек", income: 8420000, expense: 6510000, net: 1910000 },
        { name: "Янв", income: 8010000, expense: 6320000, net: 1690000 },
        { name: "Фев", income: 8820000, expense: 6780000, net: 2040000 },
        { name: "Мар", income: 9540000, expense: 7210000, net: 2330000 },
        { name: "Апр", income: 10200000, expense: 7600000, net: 2600000 }
      ]
    },
    bi: {
      trend: [
        { name: "Ноя", current: 23, previous: 21, forecast: 24 },
        { name: "Дек", current: 24.5, previous: 22, forecast: 25 },
        { name: "Янв", current: 23.4, previous: 22.2, forecast: 24 },
        { name: "Фев", current: 24.8, previous: 23, forecast: 25.2 },
        { name: "Мар", current: 25.2, previous: 23.7, forecast: 25.8 },
        { name: "Апр", current: 25.5, previous: 24.1, forecast: 26.2 }
      ],
      topEntities: [
        { label: "Бар", value: "2.1 млн сом", share: 21, growth: "+14%" },
        { label: "Паста", value: "920 000 сом", share: 9, growth: "+6%" },
        { label: "Доставка", value: "1.62 млн сом", share: 16, growth: "+9%" },
        { label: "Prime Tech", value: "182 000 сом", share: 1.8, growth: "Новый" }
      ],
      deviations: [
        "Food cost по пасте выше нормы на 6%.",
        "Списания десертов превышают лимит три дня подряд.",
        "Бар тянет маржу вечера и может быть масштабирован."
      ],
      forecast: "При корректировке техкарты пасты и снижении списаний десертов маржа может вырасти до 26.2%."
    },
    documents: [
      { name: "Техкарта / Паста карбонара", type: "Техкарта", date: "21 апр", status: "На проверке", owner: "Нурсултан К." },
      { name: "Заказ поставщику / FreshLine", type: "Закупка", date: "21 апр", status: "Подтвержден", owner: "Диана А." },
      { name: "Списание / Десерты", type: "Списание", date: "20 апр", status: "Проведено", owner: "Элмира Т." },
      { name: "Банкет / Prime Tech", type: "Банкет", date: "21 апр", status: "Активен", owner: "Элмира Т." }
    ],
    notifications: [
      { title: "Food cost растет", text: "Паста карбонара выходит за техкарту на 6%.", time: "14 мин назад", tone: "critical" },
      { title: "Бар тянет выручку", text: "Вечерний upsell поднял средний чек бара.", time: "36 мин назад", tone: "positive" },
      { title: "Десерты списываются", text: "Витрина дает лишние остатки три дня подряд.", time: "1 ч назад", tone: "warning" }
    ],
    assistant: {
      headline: "AI показывает ресторану, где теряется food cost и где лежит дополнительная маржа.",
      bullets: [
        "Сравнивает техкарты с фактическим расходом.",
        "Подсвечивает позиции со списаниями и слабым спросом.",
        "Рекомендует действия по кухне, залу и закупке."
      ],
      messages: [
        {
          title: "Паста карбонара бьет по food cost",
          summary: "Фактический расход сливок и бекона выше нормы уже 4 смены.",
          metric: "31.8% food cost против целевых 29.5%",
          recommendation: "Проверить порционирование, обновить техкарту и поставить задачу шефу."
        },
        {
          title: "Десерты уходят в списание",
          summary: "Две позиции витрины производятся выше вечернего спроса.",
          metric: "11 600 сом списания за вечер",
          recommendation: "Снизить выпуск на 18% и объединить позиции в сет-комбо."
        },
        {
          title: "Бар можно усилить",
          summary: "Напитки стабильно выше плана и держат лучшую маржу по залу.",
          metric: "64% валовой маржи",
          recommendation: "Дать официантам upsell-скрипт в вечернюю смену."
        }
      ]
    }
  },
  logistics: {
    kpis: [
      { label: "Выручка", value: "11.4 млн сом", delta: "+15.6%", trend: "up", hint: "94 активных доставки" },
      { label: "Расходы", value: "8.5 млн сом", delta: "+8.1%", trend: "down", hint: "Топливо, курьеры, SLA" },
      { label: "Прибыль", value: "2.9 млн сом", delta: "+43.7%", trend: "up", hint: "Маржа 25.4%" },
      { label: "Остатки", value: "1.2 млн сом", delta: "-2.9%", trend: "neutral", hint: "Упаковка и расходники" },
      { label: "Долги", value: "980 000 сом", delta: "-10.2%", trend: "up", hint: "3 корпоративных клиента" },
      { label: "План", value: "96%", delta: "-4%", trend: "down", hint: "Южный маршрут проседает" }
    ],
    revenueTrend: [
      { name: "Ноя", revenue: 8300000, expenses: 6760000, profit: 1540000 },
      { name: "Дек", revenue: 8920000, expenses: 7130000, profit: 1790000 },
      { name: "Янв", revenue: 9180000, expenses: 7290000, profit: 1890000 },
      { name: "Фев", revenue: 9720000, expenses: 7540000, profit: 2180000 },
      { name: "Мар", revenue: 10400000, expenses: 8060000, profit: 2340000 },
      { name: "Апр", revenue: 11400000, expenses: 8500000, profit: 2900000 }
    ],
    planFact: [
      { name: "Север", plan: 100, fact: 101 },
      { name: "Юг", plan: 100, fact: 91 },
      { name: "Центр", plan: 100, fact: 98 },
      { name: "Экспресс", plan: 100, fact: 105 },
      { name: "Корпоративный", plan: 100, fact: 97 }
    ],
    operations: [
      { id: "RT-611", title: "Маршрут Юг / 14 точек", meta: "Курьер Бекзат", owner: "Алина К.", amount: "86 000 сом", status: "Риск SLA", date: "Сегодня, 13:40" },
      { id: "DL-218", title: "Экспресс-заказ / eCom клиент", meta: "45 минут SLA", owner: "Бекзат С.", amount: "7 200 сом", status: "В пути", date: "Сегодня, 12:20" },
      { id: "FUEL-044", title: "Топливо / маршрут Север", meta: "Авто 07KG214", owner: "Руслан Т.", amount: "18 400 сом", status: "Проведено", date: "Сегодня, 09:10" },
      { id: "RET-110", title: "Возврат посылки", meta: "Клиент не вышел на связь", owner: "Алина К.", amount: "2 100 сом", status: "На складе", date: "Вчера, 19:00" }
    ],
    risks: [
      { title: "Южный маршрут проседает", description: "Время доставки выше целевого на 14 минут.", impact: "SLA падает до 91%", severity: "high" },
      { title: "Экспресс-поток вырос", description: "Нагрузка на 2 курьеров выше плановой.", impact: "Риск перегруза вечернего окна", severity: "medium" },
      { title: "Возвраты по адресу", description: "5 заказов за сутки не доставлены с первого раза.", impact: "Рост себестоимости рейса", severity: "medium" }
    ],
    aiInsights: [
      { title: "Пересобрать южный маршрут", description: "Точки идут не по оптимальному порядку и создают пробки.", recommendation: "Перенести 4 адреса в экспресс-пул и сократить плечо на 18%.", tone: "critical" },
      { title: "Добавить вечерний слот курьеру", description: "Экспресс-канал растет быстрее прогноза.", recommendation: "Усилить смену с 17:00 до 21:00 одним курьером.", tone: "warning" },
      { title: "Север работает эталонно", description: "Маршрут держит лучший SLA и минимальные возвраты.", recommendation: "Использовать как шаблон при перестройке других зон.", tone: "positive" }
    ],
    crm: {
      leads: [
        { company: "FreshBox", contact: "Эльмира У.", deal: "Доставка по городу", manager: "Алина К.", status: "КП отправлено", nextStep: "Пилот 1 неделя", lastContact: "Сегодня" },
        { company: "MedLine", contact: "Руслан М.", deal: "Экспресс-доставка документов", manager: "Руслан Т.", status: "В работе", nextStep: "Согласовать SLA", lastContact: "Вчера" },
        { company: "eShop KG", contact: "Нуриза Д.", deal: "Интернет-магазин", manager: "Алина К.", status: "Договор", nextStep: "Интеграция заказов", lastContact: "2 дня назад" },
        { company: "Bloom Flowers", contact: "Саида К.", deal: "Срочная доставка", manager: "Бекзат С.", status: "Новый", nextStep: "Первый созвон", lastContact: "Сегодня" }
      ],
      featuredClient: {
        company: "eShop KG",
        segment: "eCommerce",
        ltv: "9.1 млн сом",
        lastInvoice: "420 000 сом",
        manager: "Алина К.",
        tags: ["eCommerce", "Высокий поток", "Требует SLA"],
        history: [
          { date: "21 апр", type: "Звонок", title: "Согласован запуск вечернего окна доставки", author: "Алина К." },
          { date: "20 апр", type: "КП", title: "Отправлен пакет SLA и зон доставки", author: "Руслан Т." },
          { date: "18 апр", type: "Встреча", title: "Показан live-мониторинг курьеров", author: "Алина К." }
        ],
        tasks: [
          { title: "Подготовить SLA-дашборд для клиента", due: "22 апр, 12:00", owner: "Руслан Т.", status: "В работе" },
          { title: "Согласовать API-формат заказов", due: "23 апр, 11:00", owner: "Бекзат С.", status: "Новая" }
        ]
      }
    },
    sales: {
      orders: [
        { number: "LG-1902", customer: "eShop KG", amount: "420 000 сом", payment: "50%", debt: "210 000 сом", status: "Активен", due: "30 апр", channel: "eCommerce" },
        { number: "LG-1898", customer: "FreshBox", amount: "118 000 сом", payment: "0%", debt: "118 000 сом", status: "Пилот", due: "24 апр", channel: "Доставка" },
        { number: "LG-1891", customer: "MedLine", amount: "72 000 сом", payment: "100%", debt: "0 сом", status: "Активен", due: "22 апр", channel: "Экспресс" },
        { number: "LG-1879", customer: "Bloom Flowers", amount: "36 000 сом", payment: "0%", debt: "36 000 сом", status: "Новый", due: "23 апр", channel: "Экспресс" }
      ],
      summary: [
        { label: "SLA", value: "94%", tone: "down" },
        { label: "Средний рейс", value: "121 заказ", tone: "up" },
        { label: "Возвраты", value: "5.3%", tone: "down" },
        { label: "Экспресс-заказы", value: "18%", tone: "up" }
      ]
    },
    inventory: {
      items: [
        { name: "Термопакет XL", sku: "LG-PK-01", stock: "380 шт", reserve: "150 шт", turnover: "5 дней", alert: "Пополнить" },
        { name: "Пломбы", sku: "LG-SL-02", stock: "1 240 шт", reserve: "120 шт", turnover: "18 дней", alert: "Норма" },
        { name: "Сканер handheld", sku: "LG-HW-11", stock: "8 шт", reserve: "6 шт", turnover: "Сервис", alert: "2 в ремонте" },
        { name: "Топливные карты", sku: "LG-FL-07", stock: "12 шт", reserve: "10 шт", turnover: "Активно", alert: "Норма" }
      ],
      alerts: [
        "Южный маршрут требует пересборки, иначе SLA упадет ниже 90%.",
        "Термопакеты XL лучше заказать на 200 шт до пятницы.",
        "Экспресс-канал растет и требует усиления вечерней смены."
      ]
    },
    operationsCenter: {
      items: [
        { item: "Маршрут Юг", stage: "Рейсы / 14 точек", status: "Риск SLA", owner: "Алина К.", due: "Сегодня 17:00", progress: 61, value: "86 000 сом" },
        { item: "Экспресс-канал", stage: "Вечернее окно", status: "Рост нагрузки", owner: "Бекзат С.", due: "Сегодня 21:00", progress: 74, value: "54 000 сом" },
        { item: "Северный маршрут", stage: "Доставка", status: "Эталон", owner: "Руслан Т.", due: "Сегодня 16:00", progress: 88, value: "102 000 сом" },
        { item: "Возвраты адресов", stage: "Контроль качества", status: "Выше нормы", owner: "Алина К.", due: "22 апр", progress: 39, value: "2 100 сом" }
      ],
      pipeline: [
        { label: "Заказы", value: 92 },
        { label: "Маршруты", value: 73 },
        { label: "Курьеры", value: 81 },
        { label: "SLA", value: 61 },
        { label: "Возвраты", value: 47 }
      ]
    },
    finance: {
      rows: [
        { category: "eCommerce", fact: "4.6 млн сом", plan: "4.2 млн сом", delta: "+10%", margin: "27%" },
        { category: "Экспресс", fact: "2.2 млн сом", plan: "2.0 млн сом", delta: "+10%", margin: "31%" },
        { category: "Корпоративные рейсы", fact: "2.8 млн сом", plan: "2.9 млн сом", delta: "-3%", margin: "22%" },
        { category: "Топливо", fact: "1.46 млн сом", plan: "1.32 млн сом", delta: "+11%", margin: "0%" }
      ],
      cashflow: [
        { name: "Ноя", income: 8300000, expense: 6760000, net: 1540000 },
        { name: "Дек", income: 8920000, expense: 7130000, net: 1790000 },
        { name: "Янв", income: 9180000, expense: 7290000, net: 1890000 },
        { name: "Фев", income: 9720000, expense: 7540000, net: 2180000 },
        { name: "Мар", income: 10400000, expense: 8060000, net: 2340000 },
        { name: "Апр", income: 11400000, expense: 8500000, net: 2900000 }
      ]
    },
    bi: {
      trend: [
        { name: "Ноя", current: 91, previous: 89, forecast: 92 },
        { name: "Дек", current: 92, previous: 90, forecast: 93 },
        { name: "Янв", current: 92.5, previous: 90.5, forecast: 93.2 },
        { name: "Фев", current: 93, previous: 91, forecast: 93.8 },
        { name: "Мар", current: 94, previous: 92, forecast: 94.5 },
        { name: "Апр", current: 94, previous: 92.4, forecast: 95.2 }
      ],
      topEntities: [
        { label: "eShop KG", value: "420 000 сом", share: 3.7, growth: "+18%" },
        { label: "Экспресс", value: "2.2 млн сом", share: 19, growth: "+14%" },
        { label: "Маршрут Север", value: "97% SLA", share: 0, growth: "+3 п.п." },
        { label: "Юг", value: "91% SLA", share: 0, growth: "-4 п.п." }
      ],
      deviations: [
        "Южный маршрут проседает по времени доставки на 14 минут.",
        "Экспресс-поток перегружает вечерний слот.",
        "Возвраты по адресу растут и требуют подтверждения адреса до выезда."
      ],
      forecast: "После пересборки маршрута Юг и усиления вечерней смены SLA выйдет на 95.2%."
    },
    documents: [
      { name: "Маршрут Юг / 21 апреля", type: "Маршрут", date: "21 апр", status: "Активен", owner: "Алина К." },
      { name: "Счет / eShop KG", type: "Счет", date: "20 апр", status: "Отправлен", owner: "Руслан Т." },
      { name: "Акт возврата / заказ 110", type: "Возврат", date: "20 апр", status: "На складе", owner: "Бекзат С." },
      { name: "Договор / FreshBox", type: "Договор", date: "21 апр", status: "Черновик", owner: "Алина К." }
    ],
    notifications: [
      { title: "Риск SLA", text: "Маршрут Юг теряет 14 минут относительно целевого окна.", time: "10 мин назад", tone: "critical" },
      { title: "Север стабилен", text: "Маршрут Север держит лучший SLA и возврат ниже нормы.", time: "33 мин назад", tone: "positive" },
      { title: "Экспресс растет", text: "Вечерний слот перегружается второй день подряд.", time: "52 мин назад", tone: "warning" }
    ],
    assistant: {
      headline: "AI помогает логистике управлять SLA, маршрутом и себестоимостью доставки в реальном времени.",
      bullets: [
        "Собирает маршрут из заказов, окон доставки и географии.",
        "Подсвечивает перегруз курьеров и провал SLA.",
        "Дает конкретное действие по перестройке рейса."
      ],
      messages: [
        {
          title: "Южный маршрут нужно пересобрать",
          summary: "Текущий порядок точек создает лишнее плечо и приводит к опозданиям.",
          metric: "SLA 91% / среднее отклонение +14 минут",
          recommendation: "Перенести 4 адреса в экспресс-пул и сократить плечо маршрута на 18%."
        },
        {
          title: "Экспресс-канал перегружает вечер",
          summary: "Два курьера уже вышли выше нормы по заказам.",
          metric: "Рост потока +22% к прогнозу",
          recommendation: "Добавить одного курьера с 17:00 до 21:00."
        },
        {
          title: "Север можно использовать как эталон",
          summary: "Маршрут держит лучший SLA и минимальный возврат.",
          metric: "97% SLA / возврат 2.1%",
          recommendation: "Применить тот же шаблон очередности адресов на Юг."
        }
      ]
    }
  },
  manufacturing: {
    kpis: [
      { label: "Выручка", value: "15.9 млн сом", delta: "+10.8%", trend: "up", hint: "6 линий и 128 SKU" },
      { label: "Расходы", value: "12.1 млн сом", delta: "+5.9%", trend: "down", hint: "Сырье, ФОТ, энергия" },
      { label: "Прибыль", value: "3.8 млн сом", delta: "+29.4%", trend: "up", hint: "Маржа 23.9%" },
      { label: "Остатки", value: "7.3 млн сом", delta: "-2.7%", trend: "neutral", hint: "Сырье и НЗП" },
      { label: "Долги", value: "1.9 млн сом", delta: "-5.6%", trend: "up", hint: "3 клиента с отсрочкой" },
      { label: "План", value: "94%", delta: "-6%", trend: "down", hint: "Линия №4 простаивает" }
    ],
    revenueTrend: [
      { name: "Ноя", revenue: 12400000, expenses: 9980000, profit: 2420000 },
      { name: "Дек", revenue: 13100000, expenses: 10360000, profit: 2740000 },
      { name: "Янв", revenue: 13700000, expenses: 10780000, profit: 2920000 },
      { name: "Фев", revenue: 14500000, expenses: 11230000, profit: 3270000 },
      { name: "Мар", revenue: 15100000, expenses: 11660000, profit: 3440000 },
      { name: "Апр", revenue: 15900000, expenses: 12100000, profit: 3800000 }
    ],
    planFact: [
      { name: "Линия 1", plan: 100, fact: 102 },
      { name: "Линия 2", plan: 100, fact: 97 },
      { name: "Линия 3", plan: 100, fact: 95 },
      { name: "Линия 4", plan: 100, fact: 83 },
      { name: "Линия 5", plan: 100, fact: 99 }
    ],
    operations: [
      { id: "LN4-208", title: "Простой линии №4", meta: "Смена B / узел подачи", owner: "Данияр К.", amount: "186 000 сом", status: "Критично", date: "Сегодня, 11:50" },
      { id: "QC-114", title: "Отчет по браку партии M-721", meta: "Линия №2", owner: "Чынара Т.", amount: "42 000 сом", status: "Разбор", date: "Сегодня, 09:15" },
      { id: "WO-331", title: "Производственный заказ / клиент Orion", meta: "2 400 ед.", owner: "Нурислам А.", amount: "1.18 млн сом", status: "Выполняется", date: "Сегодня, 07:40" },
      { id: "ENG-018", title: "План ТО на линию №4", meta: "Техническая служба", owner: "Данияр К.", amount: "96 000 сом", status: "В работе", date: "Вчера, 18:20" }
    ],
    risks: [
      { title: "Линия №4 простаивает", description: "Потеря выпуска уже 6 часов подряд.", impact: "Минус 186 000 сом валовой прибыли", severity: "high" },
      { title: "Брак партии M-721", description: "Отклонение вышло выше нормы на 2.8 п.п.", impact: "Риск рекламации клиента", severity: "high" },
      { title: "Энергозатраты растут", description: "Линия №2 вышла выше плановой мощности.", impact: "Себестоимость партии растет", severity: "medium" }
    ],
    aiInsights: [
      { title: "Остановить серию на линии №2", description: "Брак связан с настройкой узла калибровки.", recommendation: "Сделать перенастройку до запуска следующей партии.", tone: "critical" },
      { title: "Перебросить заказ Orion", description: "Линия №1 имеет свободное окно на 4 часа.", recommendation: "Снять риск просрочки по клиенту без потери OEE.", tone: "warning" },
      { title: "Линия №1 работает эталонно", description: "Показывает лучший OEE и минимальный брак.", recommendation: "Использовать настройки смены как базовый стандарт.", tone: "positive" }
    ],
    crm: {
      leads: [
        { company: "Orion LLC", contact: "Азамат Б.", deal: "Серийный выпуск", manager: "Нурислам А.", status: "Договор", nextStep: "Подтвердить график", lastContact: "Сегодня" },
        { company: "Techno Build", contact: "Диана К.", deal: "OEM партия", manager: "Чынара Т.", status: "В работе", nextStep: "Согласовать образец", lastContact: "Вчера" },
        { company: "Nova Industry", contact: "Рустам М.", deal: "Контракт на 3 месяца", manager: "Нурислам А.", status: "КП отправлено", nextStep: "Финальный звонок", lastContact: "2 дня назад" },
        { company: "Atlas Service", contact: "Каныбек У.", deal: "Пилот", manager: "Данияр К.", status: "Новый", nextStep: "Презентация линии", lastContact: "Сегодня" }
      ],
      featuredClient: {
        company: "Orion LLC",
        segment: "Промышленный заказчик",
        ltv: "18.6 млн сом",
        lastInvoice: "1.18 млн сом",
        manager: "Нурислам А.",
        tags: ["Серийный клиент", "Высокий SLA", "Стратегический"],
        history: [
          { date: "21 апр", type: "Звонок", title: "Подтвержден график поставки по партии 2400 ед.", author: "Нурислам А." },
          { date: "19 апр", type: "КП", title: "Согласован прайс после пересчета сырья", author: "Чынара Т." },
          { date: "17 апр", type: "Встреча", title: "Показ производственной линии и KPI качества", author: "Нурислам А." }
        ],
        tasks: [
          { title: "Перенести часть выпуска на линию №1", due: "21 апр, 17:00", owner: "Данияр К.", status: "В работе" },
          { title: "Подготовить отчет по браку M-721", due: "22 апр, 10:00", owner: "Чынара Т.", status: "Новая" }
        ]
      }
    },
    sales: {
      orders: [
        { number: "MF-611", customer: "Orion LLC", amount: "1.18 млн сом", payment: "40%", debt: "708 000 сом", status: "Выпуск", due: "26 апр", channel: "Контракт" },
        { number: "MF-606", customer: "Techno Build", amount: "840 000 сом", payment: "20%", debt: "672 000 сом", status: "Образец", due: "28 апр", channel: "OEM" },
        { number: "MF-598", customer: "Nova Industry", amount: "560 000 сом", payment: "0%", debt: "560 000 сом", status: "КП", due: "24 апр", channel: "B2B" },
        { number: "MF-590", customer: "Atlas Service", amount: "260 000 сом", payment: "0%", debt: "260 000 сом", status: "Пилот", due: "25 апр", channel: "Новый" }
      ],
      summary: [
        { label: "OEE", value: "78%", tone: "down" },
        { label: "Брак", value: "3.8%", tone: "down" },
        { label: "Средний заказ", value: "1.12 млн сом", tone: "up" },
        { label: "Простой", value: "6 ч", tone: "down" }
      ]
    },
    inventory: {
      items: [
        { name: "Сырье A-14", sku: "RM-014", stock: "6.8 т", reserve: "4.2 т", turnover: "7 дней", alert: "Норма" },
        { name: "Узел подачи / комплект", sku: "SP-004", stock: "1 компл.", reserve: "1 компл.", turnover: "Сервис", alert: "Критично" },
        { name: "Упаковка box-12", sku: "PK-120", stock: "3 400 шт", reserve: "2 100 шт", turnover: "9 дней", alert: "Норма" },
        { name: "Сырье B-8", sku: "RM-008", stock: "2.1 т", reserve: "1.8 т", turnover: "4 дня", alert: "Пополнить" }
      ],
      alerts: [
        "Линия №4 простаивает из-за узла подачи.",
        "Сырье B-8 нужно заказать в течение 2 дней.",
        "Брак M-721 надо локализовать до следующего запуска."
      ]
    },
    operationsCenter: {
      items: [
        { item: "Линия №4", stage: "Простой / узел подачи", status: "Критично", owner: "Данияр К.", due: "Сегодня 16:00", progress: 28, value: "186 000 сом" },
        { item: "Линия №2 / партия M-721", stage: "Качество", status: "Брак выше нормы", owner: "Чынара Т.", due: "Сегодня", progress: 52, value: "42 000 сом" },
        { item: "Заказ Orion", stage: "Выпуск", status: "Риск по сроку", owner: "Нурислам А.", due: "26 апр", progress: 64, value: "1.18 млн сом" },
        { item: "Линия №1", stage: "Свободное окно", status: "Резерв мощности", owner: "Данияр К.", due: "Сегодня", progress: 84, value: "Потенциал 4 ч" }
      ],
      pipeline: [
        { label: "Смены", value: 82 },
        { label: "Линии", value: 71 },
        { label: "Брак", value: 44 },
        { label: "Простои", value: 33 },
        { label: "Выпуск", value: 78 }
      ]
    },
    finance: {
      rows: [
        { category: "Orion LLC", fact: "3.4 млн сом", plan: "3.1 млн сом", delta: "+10%", margin: "28%" },
        { category: "Techno Build", fact: "2.6 млн сом", plan: "2.7 млн сом", delta: "-4%", margin: "23%" },
        { category: "Энергия", fact: "1.12 млн сом", plan: "980 000 сом", delta: "+14%", margin: "0%" },
        { category: "Брак и доработка", fact: "420 000 сом", plan: "300 000 сом", delta: "+40%", margin: "0%" }
      ],
      cashflow: [
        { name: "Ноя", income: 12400000, expense: 9980000, net: 2420000 },
        { name: "Дек", income: 13100000, expense: 10360000, net: 2740000 },
        { name: "Янв", income: 13700000, expense: 10780000, net: 2920000 },
        { name: "Фев", income: 14500000, expense: 11230000, net: 3270000 },
        { name: "Мар", income: 15100000, expense: 11660000, net: 3440000 },
        { name: "Апр", income: 15900000, expense: 12100000, net: 3800000 }
      ]
    },
    bi: {
      trend: [
        { name: "Ноя", current: 74, previous: 70, forecast: 76 },
        { name: "Дек", current: 76, previous: 72, forecast: 77 },
        { name: "Янв", current: 77, previous: 73, forecast: 78 },
        { name: "Фев", current: 79, previous: 75, forecast: 80 },
        { name: "Мар", current: 79.5, previous: 76, forecast: 81 },
        { name: "Апр", current: 78, previous: 76.4, forecast: 80.2 }
      ],
      topEntities: [
        { label: "Линия №1", value: "OEE 84%", share: 0, growth: "+6 п.п." },
        { label: "Orion LLC", value: "3.4 млн сом", share: 21, growth: "+9%" },
        { label: "Линия №4", value: "6 ч простоя", share: 0, growth: "Критично" },
        { label: "Брак M-721", value: "42 000 сом", share: 0.3, growth: "+2.8 п.п." }
      ],
      deviations: [
        "Линия №4 простаивает уже 6 часов и тянет вниз OEE.",
        "Партия M-721 вышла по браку выше нормы.",
        "Энергозатраты линии №2 выше плановых."
      ],
      forecast: "Если перенести заказ Orion и устранить причину простоя, OEE недели вырастет до 80.2%."
    },
    documents: [
      { name: "Смена B / Линия №4", type: "Производство", date: "21 апр", status: "Простой", owner: "Данияр К." },
      { name: "Отчет QC / M-721", type: "Качество", date: "21 апр", status: "На разборе", owner: "Чынара Т." },
      { name: "Заказ / Orion LLC", type: "Производственный заказ", date: "21 апр", status: "Активен", owner: "Нурислам А." },
      { name: "План ТО / Линия №4", type: "ТО", date: "20 апр", status: "В работе", owner: "Данияр К." }
    ],
    notifications: [
      { title: "Линия №4 простаивает", text: "Потеря выпуска уже 6 часов из-за узла подачи.", time: "8 мин назад", tone: "critical" },
      { title: "Линия №1 стабильна", text: "Лучший OEE и минимальный брак в смене.", time: "34 мин назад", tone: "positive" },
      { title: "Брак M-721", text: "Партия линии №2 требует остановки серии.", time: "52 мин назад", tone: "warning" }
    ],
    assistant: {
      headline: "AI помогает производству видеть простой, брак и реальную себестоимость по линиям.",
      bullets: [
        "Собирает события смены в управленческий сценарий.",
        "Ловит аномалии брака и энергопотребления.",
        "Подсказывает, как не сорвать клиентский заказ."
      ],
      messages: [
        {
          title: "Линия №4 простаивает критично",
          summary: "Узел подачи выбил линию из графика и уже съел часть маржи дня.",
          metric: "6 часов простоя / -186 000 сом прибыли",
          recommendation: "Подтянуть сервис сейчас и перебросить часть заказа Orion на линию №1."
        },
        {
          title: "Партия M-721 дает аномальный брак",
          summary: "Отклонение связано с калибровкой и может повториться на следующем запуске.",
          metric: "3.8% брак против нормы 1%",
          recommendation: "Остановить серию, провести перенастройку и выпустить корректирующее действие."
        },
        {
          title: "Линия №1 может забрать объем",
          summary: "Есть свободное окно и лучшая стабильность по OEE.",
          metric: "4 часа доступной мощности",
          recommendation: "Перенести часть заказа Orion и сохранить срок клиента."
        }
      ]
    }
  },
  distribution: {
    kpis: [
      { label: "Выручка", value: "13.8 млн сом", delta: "+12.2%", trend: "up", hint: "312 активных клиентов" },
      { label: "Расходы", value: "10.2 млн сом", delta: "+5.7%", trend: "down", hint: "Отгрузка, логистика, бонусы" },
      { label: "Прибыль", value: "3.6 млн сом", delta: "+35.4%", trend: "up", hint: "Маржа 26.1%" },
      { label: "Остатки", value: "6.6 млн сом", delta: "-4.8%", trend: "up", hint: "Склад по каналам" },
      { label: "Долги", value: "2.3 млн сом", delta: "-7.3%", trend: "up", hint: "14 точек с отсрочкой" },
      { label: "План", value: "99%", delta: "-1%", trend: "neutral", hint: "Северный регион отстает" }
    ],
    revenueTrend: [
      { name: "Ноя", revenue: 10300000, expenses: 8180000, profit: 2120000 },
      { name: "Дек", revenue: 11000000, expenses: 8560000, profit: 2440000 },
      { name: "Янв", revenue: 11600000, expenses: 8960000, profit: 2640000 },
      { name: "Фев", revenue: 12300000, expenses: 9420000, profit: 2880000 },
      { name: "Мар", revenue: 13000000, expenses: 9780000, profit: 3220000 },
      { name: "Апр", revenue: 13800000, expenses: 10200000, profit: 3600000 }
    ],
    planFact: [
      { name: "Юг", plan: 100, fact: 103 },
      { name: "Север", plan: 100, fact: 92 },
      { name: "Центр", plan: 100, fact: 101 },
      { name: "HoReCa", plan: 100, fact: 98 },
      { name: "Сети", plan: 100, fact: 104 }
    ],
    operations: [
      { id: "RT-901", title: "Маршрут Север / 22 точки", meta: "Экспедитор Мирлан", owner: "Жылдыз К.", amount: "182 000 сом", status: "Ниже плана", date: "Сегодня, 08:20" },
      { id: "SH-404", title: "Отгрузка сети 'Глобус'", meta: "SKU 48 позиций", owner: "Арсен А.", amount: "740 000 сом", status: "Отгружено", date: "Сегодня, 10:40" },
      { id: "AR-118", title: "Просрочка по точке 'Берекет'", meta: "Дебиторка 14 дней", owner: "Алина М.", amount: "96 000 сом", status: "Требует решения", date: "Сегодня, 11:15" },
      { id: "TRD-070", title: "Посещение торговых точек", meta: "Мерчендайзинг / юг", owner: "Мирлан С.", amount: "0 сом", status: "В работе", date: "Вчера, 17:00" }
    ],
    risks: [
      { title: "Северный регион ниже плана", description: "Продажи на 8% ниже прогноза третий день подряд.", impact: "Потеря 180 000 сом в неделю", severity: "high" },
      { title: "Дебиторка по 14 точкам", description: "Часть клиентов превышает лимит отсрочки.", impact: "Риск заморозки 2.3 млн сом", severity: "high" },
      { title: "SKU медленно двигаются в HoReCa", description: "Две позиции не проходят норму оборачиваемости.", impact: "Лишний склад и скидки", severity: "medium" }
    ],
    aiInsights: [
      { title: "Остановить отгрузку 3 точкам", description: "Клиенты вышли за лимит отсрочки и не платят 14+ дней.", recommendation: "Поставить hold до погашения 280 000 сом.", tone: "critical" },
      { title: "Пересобрать северный маршрут", description: "Приоритетные точки едут в хвосте и теряют полку.", recommendation: "Поднять 6 точек А-сегмента в начало дня.", tone: "warning" },
      { title: "Сети растут быстрее опта", description: "Канал modern trade дает лучший микс и стабильную оплату.", recommendation: "Сместить акцент промо в этот канал на следующую неделю.", tone: "positive" }
    ],
    crm: {
      leads: [
        { company: "Сеть 'Глобус'", contact: "Назира Д.", deal: "Расширение полки", manager: "Жылдыз К.", status: "Договор", nextStep: "Подтвердить SKU", lastContact: "Сегодня" },
        { company: "HoReCa Group", contact: "Айгерим М.", deal: "Новая линейка", manager: "Арсен А.", status: "В работе", nextStep: "Пилот 10 точек", lastContact: "Вчера" },
        { company: "Маркет 'Берекет'", contact: "Руслан Н.", deal: "Регулярные поставки", manager: "Алина М.", status: "Оплата", nextStep: "Закрыть дебиторку", lastContact: "Сегодня" },
        { company: "Сеть 'Достук'", contact: "Азамат Е.", deal: "Запуск по северу", manager: "Жылдыз К.", status: "КП отправлено", nextStep: "Обсудить бонусы", lastContact: "2 дня назад" }
      ],
      featuredClient: {
        company: "Сеть 'Глобус'",
        segment: "Modern trade",
        ltv: "14.2 млн сом",
        lastInvoice: "740 000 сом",
        manager: "Жылдыз К.",
        tags: ["Сети", "Стабильная оплата", "Высокий объем"],
        history: [
          { date: "21 апр", type: "Звонок", title: "Согласовано расширение полки на 12 SKU", author: "Жылдыз К." },
          { date: "20 апр", type: "КП", title: "Отправлен промо-план на 2 недели", author: "Арсен А." },
          { date: "18 апр", type: "Встреча", title: "Сняты продажи по категориям и приоритет точек", author: "Жылдыз К." }
        ],
        tasks: [
          { title: "Подготовить промо-отгрузку", due: "22 апр, 09:00", owner: "Арсен А.", status: "В работе" },
          { title: "Согласовать бонусный план", due: "23 апр, 15:00", owner: "Жылдыз К.", status: "Новая" }
        ]
      }
    },
    sales: {
      orders: [
        { number: "DS-4410", customer: "Сеть Глобус", amount: "740 000 сом", payment: "60%", debt: "296 000 сом", status: "Отгружено", due: "24 апр", channel: "Сети" },
        { number: "DS-4401", customer: "HoReCa Group", amount: "260 000 сом", payment: "30%", debt: "182 000 сом", status: "Пилот", due: "25 апр", channel: "HoReCa" },
        { number: "DS-4388", customer: "Берекет", amount: "96 000 сом", payment: "0%", debt: "96 000 сом", status: "Hold", due: "Сегодня", channel: "Розница" },
        { number: "DS-4375", customer: "Сеть Достук", amount: "188 000 сом", payment: "0%", debt: "188 000 сом", status: "КП", due: "26 апр", channel: "Сети" }
      ],
      summary: [
        { label: "Дебиторка", value: "2.3 млн сом", tone: "down" },
        { label: "Средний маршрут", value: "22 точки", tone: "neutral" },
        { label: "Сети / доля", value: "34%", tone: "up" },
        { label: "Маржа", value: "26.1%", tone: "up" }
      ]
    },
    inventory: {
      items: [
        { name: "SKU A / флагман", sku: "DS-001", stock: "1 420 шт", reserve: "820 шт", turnover: "5 дней", alert: "Норма" },
        { name: "SKU B / HoReCa", sku: "DS-014", stock: "960 шт", reserve: "180 шт", turnover: "17 дней", alert: "Медленно" },
        { name: "SKU C / сеть", sku: "DS-020", stock: "620 шт", reserve: "410 шт", turnover: "4 дня", alert: "Пополнить" },
        { name: "POSM промо", sku: "DS-PM-3", stock: "180 компл.", reserve: "92 компл.", turnover: "7 дней", alert: "Норма" }
      ],
      alerts: [
        "SKU C надо пополнить под сеть Глобус до завтра.",
        "SKU B плохо двигается в HoReCa и держит склад.",
        "3 клиента нужно поставить на hold до оплаты."
      ]
    },
    operationsCenter: {
      items: [
        { item: "Северный маршрут", stage: "22 точки", status: "Ниже плана", owner: "Жылдыз К.", due: "Сегодня 18:00", progress: 59, value: "182 000 сом" },
        { item: "Сеть Глобус", stage: "Отгрузка и промо", status: "Рост", owner: "Арсен А.", due: "24 апр", progress: 83, value: "740 000 сом" },
        { item: "Берекет", stage: "Дебиторка", status: "Hold", owner: "Алина М.", due: "Сегодня", progress: 26, value: "96 000 сом" },
        { item: "HoReCa Group", stage: "Пилот 10 точек", status: "Требует фокуса", owner: "Арсен А.", due: "25 апр", progress: 44, value: "260 000 сом" }
      ],
      pipeline: [
        { label: "Маршруты", value: 74 },
        { label: "Точки", value: 82 },
        { label: "Отгрузки", value: 88 },
        { label: "Дебиторка", value: 39 },
        { label: "Промо", value: 67 }
      ]
    },
    finance: {
      rows: [
        { category: "Сети", fact: "4.7 млн сом", plan: "4.3 млн сом", delta: "+9%", margin: "29%" },
        { category: "HoReCa", fact: "2.3 млн сом", plan: "2.4 млн сом", delta: "-4%", margin: "24%" },
        { category: "Опт / розница", fact: "3.9 млн сом", plan: "4.1 млн сом", delta: "-5%", margin: "22%" },
        { category: "Бонусы и скидки", fact: "680 000 сом", plan: "540 000 сом", delta: "+26%", margin: "0%" }
      ],
      cashflow: [
        { name: "Ноя", income: 10300000, expense: 8180000, net: 2120000 },
        { name: "Дек", income: 11000000, expense: 8560000, net: 2440000 },
        { name: "Янв", income: 11600000, expense: 8960000, net: 2640000 },
        { name: "Фев", income: 12300000, expense: 9420000, net: 2880000 },
        { name: "Мар", income: 13000000, expense: 9780000, net: 3220000 },
        { name: "Апр", income: 13800000, expense: 10200000, net: 3600000 }
      ]
    },
    bi: {
      trend: [
        { name: "Ноя", current: 24, previous: 22, forecast: 25 },
        { name: "Дек", current: 25, previous: 23, forecast: 26 },
        { name: "Янв", current: 25.4, previous: 23.8, forecast: 26.1 },
        { name: "Фев", current: 25.8, previous: 24.2, forecast: 26.4 },
        { name: "Мар", current: 26, previous: 24.8, forecast: 26.7 },
        { name: "Апр", current: 26.1, previous: 25.1, forecast: 27 }
      ],
      topEntities: [
        { label: "Сеть Глобус", value: "740 000 сом", share: 5.4, growth: "+16%" },
        { label: "Сети", value: "4.7 млн сом", share: 34, growth: "+12%" },
        { label: "Север", value: "92% плана", share: 0, growth: "-8%" },
        { label: "Дебиторка", value: "2.3 млн сом", share: 0, growth: "-7%" }
      ],
      deviations: [
        "Северный регион третий день идет ниже плана.",
        "14 точек вышли за лимит дебиторки.",
        "SKU B замедлился в HoReCa и держит склад."
      ],
      forecast: "После hold для проблемных точек и перестройки маршрута северного региона маржа может дойти до 27%."
    },
    documents: [
      { name: "Маршрут Север / 21 апреля", type: "Маршрут", date: "21 апр", status: "Активен", owner: "Жылдыз К." },
      { name: "Отгрузка / Сеть Глобус", type: "Отгрузка", date: "21 апр", status: "Проведена", owner: "Арсен А." },
      { name: "Hold / Берекет", type: "Дебиторка", date: "21 апр", status: "Требует решения", owner: "Алина М." },
      { name: "Промо-план / Сети", type: "Промо", date: "20 апр", status: "Черновик", owner: "Жылдыз К." }
    ],
    notifications: [
      { title: "Дебиторка превышена", text: "Точка 'Берекет' вышла за лимит отсрочки на 14 дней.", time: "13 мин назад", tone: "critical" },
      { title: "Сети растут", text: "Канал modern trade дает лучший прирост и стабильную оплату.", time: "39 мин назад", tone: "positive" },
      { title: "Север ниже плана", text: "Маршрут по северу третий день не добирает продажи.", time: "57 мин назад", tone: "warning" }
    ],
    assistant: {
      headline: "AI помогает дистрибуции управлять маршрутом, точками и дебиторкой до того, как теряется маржа.",
      bullets: [
        "Сегментирует клиентов по потенциалу и платежной дисциплине.",
        "Подсказывает, какие точки держать в приоритете на маршруте.",
        "Останавливает рискованные отгрузки до кассовой проблемы."
      ],
      messages: [
        {
          title: "3 точки надо поставить на hold",
          summary: "Клиенты вышли за лимит отсрочки и продолжают заказывать.",
          metric: "280 000 сом сверх лимита",
          recommendation: "Остановить отгрузку до погашения и передать задачу менеджеру."
        },
        {
          title: "Северный маршрут теряет продажи",
          summary: "Точки А-сегмента стоят в хвосте дня и теряют полку.",
          metric: "92% к плану / -8% регион",
          recommendation: "Поднять 6 приоритетных точек в начало маршрута."
        },
        {
          title: "Сети дают лучший микс",
          summary: "Канал modern trade растет быстрее опта и платит стабильнее.",
          metric: "34% доли выручки / +12% рост",
          recommendation: "Сместить промо и запас на этот канал на следующую неделю."
        }
      ]
    }
  }
};

export function getDemoData(slug: BusinessSlug) {
  return demoDataMap[slug];
}
