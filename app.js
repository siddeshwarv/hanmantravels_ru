/* ==========================================================================
   HANMANTRAVELS.RU — Interactive Logic & Multi-Language Engine
   ========================================================================== */

// Translation Dictionary (RU / EN)
const i18n = {
  ru: {
    navServices: "Услуги",
    navWhyFree: "Почему 0 ₽?",
    navCalculator: "Калькулятор",
    navWorkflow: "Юриспруденция",
    navContact: "Контакты",
    btnRequestWorkers: "Запросить персонал (0 ₽)",
    btnPitchDeck: "Смотреть Pitch Deck",
    heroTitle: "Лицензированный индийский кадровый партнер для предприятий России",
    heroSubtitle: "Подбор квалифицированных и рабочих кадров без комиссий с работодателя (0 ₽) с 90-дневной гарантией бесплатной замены.",
    statFee: "0 ₽ Комиссия",
    statGuarantee: "90 Дней Гарантия",
    statLegal: "100% Легально (МВД/MEA)",
    statPool: "10 000+ В базе",

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

    toastSuccess: "Заявка успешно отправлена! Наш представитель свяжется с вами в течение 15 минут."
  },
  en: {
    navServices: "Services",
    navWhyFree: "Why 0 ₽?",
    navCalculator: "Calculator",
    navWorkflow: "Legal Workflow",
    navContact: "Contacts",
    btnRequestWorkers: "Request Workers (0 ₽)",
    btnPitchDeck: "View Pitch Deck",
    heroTitle: "Licensed Indian Manpower Partner for Russian Enterprise",
    heroSubtitle: "Supply of skilled and industrial manpower with 0 ₽ recruitment fee for employers and a 90-day free replacement warranty.",
    statFee: "0 ₽ Agency Fee",
    statGuarantee: "90-Day Warranty",
    statLegal: "100% Compliant (MVD/MEA)",
    statPool: "10,000+ Ready Pool",

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

    toastSuccess: "Request submitted successfully! Our representative will contact you within 15 minutes."
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

// Contact Form & Toast Feedback
function initContactForm() {
  const form = document.getElementById('demand-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
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
