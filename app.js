/* ==========================================================================
   HANMANTRAVELS.RU — Interactive Logic & Multi-Language Engine
   ========================================================================== */

// Translation Dictionary (RU / EN)
const i18n = {
  ru: {
    navServices: "Услуги",
    navWhyFree: "Почему 0 ₽?",
    navEmployer: "Что нужно сделать",
    navCalculator: "Калькулятор",
    navWorkflow: "Юриспруденция",
    navContact: "Контакты",
    btnRequestWorkers: "Запросить персонал (0 ₽)",
    btnPitchDeck: "Смотреть Pitch Deck",
    btnAgreement: "Договор о сотрудничестве ↗",
    heroTitle: "Лицензированный индийский кадровый партнер для предприятий России",
    heroSubtitle: "Подбор квалифицированных и рабочих кадров без комиссий с работодателя (0 ₽) с 90-дневной гарантией бесплатной замены.",
    statFee: "0 ₽ Комиссия",
    statGuarantee: "90 Дней Гарантия",
    statLegal: "100% Легально (МВД/MEA)",
    statPool: "10 000+ В базе",

    // Russia Market Context
    marketTitle: "Дефицит кадров в РФ и государственное соглашение 2025 года",
    marketSubtitle: "Привлечение индийских специалистов поддержано на высшем государственном уровне обеих стран",
    market1Title: "Безработица в РФ",
    market1Desc: "Минимальный уровень за 50 лет — острая нехватка рабочих рук в строительстве, промышленности и логистике.",
    market2Title: "Трудовых въездов в 2024 г.",
    market2Desc: "Рост в 4 раза за два года: российский бизнес активно замещает дефицит кадров специалистами из Индии.",
    market3Title: "Индийцев уже в России",
    market3Desc: "Проверенная практика найма и адаптации индийских работников на российских предприятиях.",
    market4Title: "Соглашение о мобильности труда",
    market4Desc: "Межправительственный договор Индии и России: официальный механизм набора, признание квалификаций и безопасная миграция.",

    // Why 0 Rubles
    whyTitle: "Почему подбор бесплатен для работодателя (0 ₽)?",
    whySubtitle: "Прямой ответ на вопрос: «В чем подвох и почему вы не берете денег с российских компаний?»",
    reason1Title: "1. Стратегический выход на рынок РФ",
    reason1Desc: "Мы впервые выходим напрямую на российский рынок. Чтобы доказать надежность и сформировать долгосрочную клиентскую базу, мы полностью отменяем комиссии с компаний.",
    reason2Title: "2. Закон об эмиграции Индии (MEA)",
    reason2Desc: "Hanman Travels — лицензированное правительством Индии агентство (RA# B-1857/TEL/PER/1000+/5/10271/2023). Согласно правилам МИД Индии, сбор за оформление регламентирован и полностью покрывает наши расходы.",
    reason3Title: "3. Масштаб базы кадров",
    reason3Desc: "Огромный собственный резерв кандидатов по всей Индии позволяет быстро мобилизовать специалистов с минимальными издержками на поиск.",
    reason4Title: "4. Нулевой финансовый риск",
    reason4Desc: "Вы не подписываете финансовых обязательств перед агентством. Все документы подписываются только по факту готовности к прилету.",

    // Calculator
    calcTitle: "Калькулятор стоимости и сроков подбора",
    calcSubtitle: "Рассчитайте параметры поставки линейного или квалифицированного персонала для вашего предприятия",
    labelIndustry: "Сфера деятельности предприятия",
    labelTrade: "Специальность",
    labelQuantity: "Количество специалистов (чел)",
    labelTimeline: "Целевой срок прилета",
    calcPriceLabel: "Комиссия агентства",
    calcBtnSubmit: "Оформить заявку на этот расчет",

    // Contact Form
    contactTitle: "Оформить заявку на подбор персонала",
    contactSubtitle: "Оставьте ваши контакты или запросите консультацию делегации Hanman Travels на саммите ITB '26 в Санкт-Петербурге",
    labelCompanyName: "Название вашей компании (РФ)",
    labelContactName: "Контактное лицо",
    labelPhone: "Телефон / WhatsApp",
    labelEmail: "Рабочий E-mail",
    labelDetails: "Дополнительные пожелания / вакансии",
    btnSendForm: "Отправить заявку в Hanman Travels",

    toastSuccess: "Заявка успешно отправлена! Наш представитель свяжется с вами в течение 15 минут.",

    // Employer To-Do Section
    todoTitle: "Что нужно сделать с вашей стороны",
    todoSubtitle: "Если вы впервые нанимаете иностранных рабочих — мы полностью сопровождаем процесс.",
    todo1Title: "Три документа",
    todo1Desc: "1) Заявка eMigrate (Demand Letter) 2) Доверенность на нас 3) Трудовые договоры. Мы заполняем вместе с вами. 2–3 дня.",
    todo2Title: "Приглашение МВД",
    todo2Desc: "Вы подаете заявление в МВД. Мы готовим полный пакет документов с индийской стороны. 15–30 рабочих дней.",
    todo3Title: "Жилье и учет",
    todo3Desc: "Вы предоставляете жилье и ставите работников на миграционный учет в течение 7 дней. Зарплата — на банковский счет.",
    todoHelp: "Мы поможем на каждом этапе",
    todoHelpDesc: "Если вы никогда не нанимали иностранных рабочих — мы зарегистрируем вас в eMigrate, подготовим образцы документов, проконсультируем по МВД. Полное сопровождение — 0 ₽.",
  },
  en: {
    navServices: "Services",
    navWhyFree: "Why 0 ₽?",
    navEmployer: "What You Need",
    navCalculator: "Calculator",
    navWorkflow: "Legal Workflow",
    navContact: "Contacts",
    btnRequestWorkers: "Request Workers (0 ₽)",
    btnPitchDeck: "View Pitch Deck",
    btnAgreement: "Partnership Agreement ↗",
    heroTitle: "Licensed Indian Manpower Partner for Russian Enterprise",
    heroSubtitle: "Supply of skilled and industrial manpower with 0 ₽ recruitment fee for employers and a 90-day free replacement warranty.",
    statFee: "0 ₽ Agency Fee",
    statGuarantee: "90-Day Warranty",
    statLegal: "100% Compliant (MVD/MEA)",
    statPool: "10,000+ Ready Pool",

    // Russia Market Context
    marketTitle: "Russia's Labour Shortage & the 2025 Government Agreement",
    marketSubtitle: "Hiring Indian workers is now supported at the highest government level of both countries",
    market1Title: "Russia Unemployment",
    market1Desc: "2.7% — the lowest in 50 years. Acute shortage of hands in construction, industry and logistics.",
    market2Title: "Work Entries in 2024",
    market2Desc: "26,000+ — up 4× in two years. Russian business is actively replacing the labour gap with Indian specialists.",
    market3Title: "Indians Already in Russia",
    market3Desc: "60,000+ — proven practice of hiring and adapting Indian workers at Russian enterprises.",
    market4Title: "Labour Mobility Agreement",
    market4Desc: "Dec 2025 intergovernmental pact India–Russia: official recruitment mechanism, skill recognition and safe migration.",

    // Why 0 Rubles
    whyTitle: "Why 0 ₽ Recruitment Fee for Employers?",
    whySubtitle: "Addressing the key question: 'How is this zero-cost for Russian companies and is it legitimate?'",
    reason1Title: "1. Strategic Russian Expansion",
    reason1Desc: "As our expansion into direct Russian recruitment, we waive employer fees to establish long-term trust and baseline enterprise partnerships.",
    reason2Title: "2. Indian MEA Emigration Act 1983",
    reason2Desc: "Hanman Travels is a Govt.-Licensed Agency (RA# B-1857/TEL/PER/1000+/5/10271/2023). Under Ministry of External Affairs regulations, candidate service fees cover operational costs transparently.",
    reason3Title: "3. Pan-India Candidate Scale",
    reason3Desc: "Our extensive sourcing network across India allows rapid mobilization at minimal sourcing overheads.",
    reason4Title: "4. Zero Financial Risk",
    reason4Desc: "Employers sign zero financial retainers to us. You only sign official government documents (eMigrate & MVD Invitations).",

    // Calculator
    calcTitle: "Cost & Deployment Calculator",
    calcSubtitle: "Calculate deployment timelines and zero-cost recruitment parameters for your company",
    labelIndustry: "Industry Sector",
    labelTrade: "Specific Trade Category",
    labelQuantity: "Required Headcount",
    labelTimeline: "Target Arrival Window",
    calcPriceLabel: "Agency Recruitment Fee",
    calcBtnSubmit: "Request Workers for this Calculation",

    // Contact Form
    contactTitle: "Submit Manpower Demand Request",
    contactSubtitle: "Contact our ITB '26 St. Petersburg Summit delegation directly to book a consultation",
    labelCompanyName: "Company Name (Russia)",
    labelContactName: "Contact Person",
    labelPhone: "Phone / WhatsApp",
    labelEmail: "Work Email",
    labelDetails: "Additional Requirements / Trades",
    btnSendForm: "Submit Request to Hanman Travels",

    toastSuccess: "Request submitted successfully! Our representative will contact you within 15 minutes.",

    // Employer To-Do Section
    todoTitle: "What You Need To Do",
    todoSubtitle: "If it's your first time hiring foreign workers — we guide the entire process. Here's what's needed from your side.",
    todo1Title: "Three Documents",
    todo1Desc: "1) eMigrate Demand Letter 2) Power of Attorney for us 3) Employment contracts. We fill everything together. 2–3 days.",
    todo2Title: "MVD Work Invitation",
    todo2Desc: "You submit an application to the territorial MVD. We prepare the complete document package from the Indian side. 15–30 working days.",
    todo3Title: "Housing & Registration",
    todo3Desc: "You provide housing and register workers within 7 days of arrival. Wages — twice monthly to bank account. We advise every step.",
    todoHelp: "We Help At Every Stage",
    todoHelpDesc: "First time hiring foreign workers? We'll register you on eMigrate, prepare all document templates, and guide you through MVD procedures. Full support — 0 ₽.",
  }
};

let currentLang = 'ru';

// Trade Data Options for Calculator
const tradeData = {
  construction: [
    { id: 'welders', nameRu: 'Сварщики 6G / TIG / SMAW', nameEn: '6G / TIG / SMAW Welders' },
    { id: 'masons', nameRu: 'Каменщики & Бетонщики', nameEn: 'Masons & Concrete Workers' },
    { id: 'steel', nameRu: 'Арматурщики & Монтажники', nameEn: 'Steel Fixers & Assemblers' },
    { id: 'helpers', nameRu: 'Разнорабочие (Строительство)', nameEn: 'Construction Helpers' }
  ],
  manufacturing: [
    { id: 'cnc', nameRu: 'Операторы ЧПУ', nameEn: 'CNC Machine Operators' },
    { id: 'lathe', nameRu: 'Токари & Слесари', nameEn: 'Lathe Operators & Fitters' },
    { id: 'assemblers', nameRu: 'Сборщики на конвейер', nameEn: 'Factory Assemblers' }
  ],
  logistics: [
    { id: 'forklift', nameRu: 'Водители погрузчиков', nameEn: 'Forklift Drivers' },
    { id: 'truck', nameRu: 'Водители грузовиков (Кат. C/E)', nameEn: 'Truck Drivers (Cat C/E)' },
    { id: 'packers', nameRu: 'Комплектовщики & Грузчики', nameEn: 'Warehouse Packers & Loaders' }
  ],
  agriculture: [
    { id: 'greenhouse', nameRu: 'Рабочие теплиц', nameEn: 'Greenhouse Workers' },
    { id: 'tractor', nameRu: 'Трактористы & Механизаторы', nameEn: 'Tractor Drivers & Mechanics' }
  ]
};

// Initialize DOM Events
document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initLanguageToggle();
  initCalculator();
  initTabs();
  initContactForm();
  initNavbarScroll();
});

// Theme Switcher (Dark / Light)
function initThemeToggle() {
  const btn = document.getElementById('theme-toggle-btn');
  if (!btn) return;

  btn.addEventListener('click', () => {
    const currentTheme = document.body.getAttribute('data-theme') || 'dark';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.body.setAttribute('data-theme', newTheme);
    btn.innerHTML = newTheme === 'dark' ? '🌙 Dark' : '☀️ Light';
  });
}

// Language Switcher (RU / EN)
function initLanguageToggle() {
  const btn = document.getElementById('lang-toggle-btn');
  if (!btn) return;

  btn.addEventListener('click', () => {
    currentLang = currentLang === 'ru' ? 'en' : 'ru';
    btn.innerText = currentLang === 'ru' ? '🇷🇺 RU' : '🇬🇧 EN';
    updatePageLanguage();
    updateTradeOptions();
    calculateQuote();
  });
}

function updatePageLanguage() {
  const dict = i18n[currentLang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.innerText = dict[key];
    }
  });
}

// Interactive Calculator
function initCalculator() {
  const industrySelect = document.getElementById('calc-industry');
  const quantityInput = document.getElementById('calc-quantity');
  const qtyDisplay = document.getElementById('calc-qty-display');

  if (industrySelect) {
    industrySelect.addEventListener('change', updateTradeOptions);
  }

  if (quantityInput && qtyDisplay) {
    quantityInput.addEventListener('input', (e) => {
      qtyDisplay.innerText = `${e.target.value} ${currentLang === 'ru' ? 'чел' : 'workers'}`;
      calculateQuote();
    });
  }

  updateTradeOptions();
  calculateQuote();
}

function updateTradeOptions() {
  const industrySelect = document.getElementById('calc-industry');
  const tradeSelect = document.getElementById('calc-trade');
  if (!industrySelect || !tradeSelect) return;

  const selectedIndustry = industrySelect.value;
  const trades = tradeData[selectedIndustry] || tradeData.construction;

  tradeSelect.innerHTML = '';
  trades.forEach(t => {
    const opt = document.createElement('option');
    opt.value = t.id;
    opt.innerText = currentLang === 'ru' ? t.nameRu : t.nameEn;
    tradeSelect.appendChild(opt);
  });
}

function calculateQuote() {
  const qtyInput = document.getElementById('calc-quantity');
  const priceDisplay = document.getElementById('calc-price');
  const turnaroundDisplay = document.getElementById('calc-turnaround');
  if (!qtyInput || !priceDisplay || !turnaroundDisplay) return;

  const qty = parseInt(qtyInput.value) || 20;
  priceDisplay.innerText = '0 ₽';

  let days = '30 - 40';
  if (qty > 100) days = '40 - 50';
  else if (qty < 30) days = '25 - 35';

  turnaroundDisplay.innerText = `${days} ${currentLang === 'ru' ? 'дней до прилета' : 'days to arrival'}`;
}

// Tabs for Trade Matrix
function initTabs() {
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.getAttribute('data-tab');

      tabBtns.forEach(b => b.classList.remove('active'));
      tabContents.forEach(c => c.style.display = 'none');

      btn.classList.add('active');
      const targetEl = document.getElementById(`tab-${target}`);
      if (targetEl) targetEl.style.display = 'grid';
    });
  });
}

// Contact Form & Toast Feedback — sends lead via WhatsApp
function initContactForm() {
  const form = document.getElementById('demand-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const inputs = form.querySelectorAll('input, textarea');
    let parts = [];
    inputs.forEach(inp => {
      const label = inp.closest('.form-group')?.querySelector('.form-label');
      const labelText = label ? label.innerText : '';
      const val = inp.value.trim();
      if (val) parts.push(`${labelText}: ${val}`);
    });

    const msg = encodeURIComponent('Hanman Travels — Новая заявка на персонал (ITB 26)\n' + parts.join('\n'));
    const waPhone = '919490194000';
    window.open(`https://wa.me/${waPhone}?text=${msg}`, '_blank');
    showToast(i18n[currentLang].toastSuccess);
    form.reset();
  });
}

function showToast(message) {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.innerText = message;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 4000);
}

// Navbar scroll background effect
function initNavbarScroll() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.4)';
    } else {
      navbar.style.boxShadow = 'none';
    }
  });
}
