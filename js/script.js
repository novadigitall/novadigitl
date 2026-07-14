document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.header');
  const menuButton = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');
  const revealItems = document.querySelectorAll('.reveal');
  const accordionItems = document.querySelectorAll('.accordion__item');
  const cards = document.querySelectorAll('.glass-card');
  const cursorGlow = document.querySelector('.cursor-glow');
  const languageSwitch = document.querySelector('[data-language-toggle]');
  const languageValues = document.querySelectorAll('[data-language-value]');
  const localizedText = [...document.querySelectorAll('[data-i18n]')];
  const localizedHtml = [...document.querySelectorAll('[data-i18n-html]')];
  const russianText = new Map(localizedText.map((element) => [element, element.textContent]));
  const russianHtml = new Map(localizedHtml.map((element) => [element, element.innerHTML]));
  const initialTitle = document.title;
  const description = document.querySelector('meta[name="description"]');
  const initialDescription = description?.getAttribute('content') || '';

  const ukrainian = {
    'nav-services': 'Послуги',
    'nav-process': 'Процес',
    'nav-works': 'Роботи',
    'nav-contacts': 'Контакти',
    'header-cta': 'Обговорити проєкт',
    'hero-eyebrow': 'Вебстудія повного циклу',
    'hero-title': 'Створюємо цифрові<br><em>враження</em>,<br>які обирають.',
    'hero-text': 'Перетворюємо амбітні ідеї на швидкі, виразні та результативні продукти для бізнесу, якому важливо бути помітним.',
    'hero-order': 'Замовити сайт',
    'hero-works': 'Наші роботи',
    'fact-years': 'років створюємо<br>цифрове',
    'fact-projects': 'проєктів<br>запущено',
    'fact-rating': 'середня<br>оцінка',
    'hero-scroll': 'гортайте, щоб дізнатися більше',
    'about-eyebrow': '01 / Про нас',
    'about-title': 'Ваша ідея заслуговує<br>на бездоганну реалізацію.',
    'about-text': 'Ми об’єднуємо стратегію, дизайн і технології, щоб створювати не просто красиві сайти, а сильні точки зростання бренду.',
    'about-quote': 'Ми переконані: у хорошому продукті кожна деталь має бути невипадковою — від першого пікселя до останнього кліку.',
    'about-signature': 'NOVA DIGITAL / маніфест',
    'reason-1-title': 'Дивимось глибше',
    'reason-1-text': 'Занурюємося в бізнес та аудиторію, щоб дизайн вирішував реальні завдання.',
    'reason-2-title': 'Любимо деталі',
    'reason-2-text': 'Вивіряємо естетику, логіку й сценарії — так народжується відчуття якості.',
    'reason-3-title': 'Тримаємо темп',
    'reason-3-text': 'Прозорий процес і чіткі етапи дають передбачуваний результат вчасно.',
    'services-eyebrow': '02 / Експертиза',
    'services-title': 'Розробляємо досвід,<br>до якого хочеться повертатися.',
    'service-1-title': 'Landing Page',
    'service-1-text': 'Сильна посадкова сторінка, яка допомагає розповісти, залучити та конвертувати.',
    'service-link': 'Обговорити завдання',
    'service-2-title': 'Інтернет-магазин',
    'service-2-text': 'Зручний e-commerce, де шлях від інтересу до покупки стає природним.',
    'service-3-title': 'Корпоративний сайт',
    'service-3-text': 'Цифрова вітрина, яка викликає довіру та відображає масштаб вашої компанії.',
    'service-4-title': 'Вебзастосунок',
    'service-4-text': 'Складні сервіси та особисті кабінети з чистою архітектурою і зрозумілим інтерфейсом.',
    'service-5-title': 'Індивідуальна<br>розробка',
    'service-5-text': 'Рішення на стику коду, дизайну та бізнес-логіки — без шаблонних обмежень.',
    'service-5-link': 'Розповісти про проєкт',
    'process-eyebrow': '03 / Як працюємо',
    'process-title': 'Прозорий шлях<br>від ідеї до запуску.',
    'process-text': 'Беремо відповідальність за весь процес і тримаємо вас у контексті на кожному етапі.',
    'stage-1-title': 'Обговорення',
    'stage-1-text': 'Знайомимося із завданням, цілями та контекстом бізнесу.',
    'stage-2-title': 'Проєктування',
    'stage-2-text': 'Продумуємо структуру, сценарії та логіку продукту.',
    'stage-3-title': 'Дизайн',
    'stage-3-text': 'Формуємо характер бренду та візуальну систему.',
    'stage-4-title': 'Розробка',
    'stage-4-text': 'Збираємо швидкий, чистий та адаптивний інтерфейс.',
    'stage-5-title': 'Тестування',
    'stage-5-text': 'Перевіряємо деталі, швидкість і всі користувацькі шляхи.',
    'stage-6-title': 'Запуск',
    'stage-6-text': 'Публікуємо проєкт і залишаємося поруч для розвитку.',
    'benefits-eyebrow': '04 / Результат',
    'benefits-title': 'Красиво зовні.<br>Надійно всередині.',
    'benefits-text': 'Продукт має не лише вражати. Він має бути готовим до реального бізнесу, зростання та людей.',
    'benefits-button': 'Почати діалог',
    'benefit-1-title': 'Сучасний дизайн',
    'benefit-1-text': 'Інтерфейси, які виглядають актуально сьогодні та не застаріють завтра.',
    'benefit-2-title': 'Висока швидкість',
    'benefit-2-text': 'Оптимізуємо кожен шар, щоб сторінки відкривалися без очікування.',
    'benefit-3-title': 'Адаптивність',
    'benefit-3-text': 'Бездоганний досвід на екрані будь-якого розміру — від смартфона до десктопа.',
    'benefit-4-title': 'SEO-основа',
    'benefit-4-text': 'Закладаємо технічну базу для зрозумілої індексації та органічного зростання.',
    'benefit-5-title': 'Безпека',
    'benefit-5-text': 'Уважно ставимося до даних, доступів і стабільності продукту.',
    'benefit-6-title': 'Підтримка',
    'benefit-6-text': 'Допомагаємо після запуску: розвиваємо, вимірюємо й покращуємо разом.',
    'portfolio-eyebrow': '05 / Вибрані роботи',
    'portfolio-title': 'Проєкти з характером.',
    'portfolio-link': 'Хочете такий самий рівень?',
    'project-1-type': 'Гостинність / 2025',
    'project-2-type': 'Предметний дизайн / 2025',
    'project-3-type': 'Fintech / 2024',
    'reviews-eyebrow': '06 / Відгуки',
    'reviews-title': 'Довіра — найкращий<br>показник нашої роботи.',
    'review-1': '«Команда дуже точно відчула наше позиціонування та створила сайт, який нарешті виглядає так само впевнено, як і наш продукт.»',
    'review-1-role': 'CEO, Finloop',
    'review-2': '«Рідкісний випадок, коли процес — така сама приємна частина роботи, як і фінальний результат. Усе чітко, спокійно й дуже красиво.»',
    'review-2-role': 'Засновниця, Koi Studio',
    'review-3': '«Після запуску ми побачили зростання заявок і отримали безліч компліментів від партнерів. Nova Digital відчувають бізнес, а не лише дизайн.»',
    'review-3-role': 'Директорка з маркетингу, Asteria',
    'faq-eyebrow': '07 / FAQ',
    'faq-title': 'Є запитання?<br>Ми відповіли.',
    'faq-intro': 'Не знайшли потрібної відповіді? Напишіть нам — обговоримо деталі без формальностей.',
    'faq-link': 'Поставити своє запитання',
    'faq-1-question': 'Скільки часу займає розробка?',
    'faq-1-answer': 'Лендінг зазвичай займає від 3 до 5 тижнів, корпоративний сайт — від 6 тижнів. Точний графік формуємо після першого обговорення завдання.',
    'faq-2-question': 'Ви працюєте з готовим брендингом?',
    'faq-2-answer': 'Так. Ми уважно вивчаємо вашу айдентику та розвиваємо її в цифровому середовищі. Якщо фірмового стилю ще немає, допоможемо задати візуальний напрям.',
    'faq-3-question': 'Як будується комунікація за проєктом?',
    'faq-3-answer': 'За вами закріплюється менеджер. У нас є контрольні точки на кожному етапі, регулярні статуси та єдиний простір для матеріалів і зворотного зв’язку.',
    'faq-4-question': 'Допоможете після запуску?',
    'faq-4-answer': 'Звісно. Беремо проєкти на технічну підтримку, допомагаємо розвивати функціональність і працюємо з аналітикою, щоб сайт продовжував приносити результат.',
    'contact-eyebrow': '08 / Ваш наступний крок',
    'contact-title': 'Давайте створимо<br><em>щось особливе.</em>',
    'contact-text': 'Розкажіть кілька слів про проєкт — повернемося із запитаннями, ідеями та чесною оцінкою.',
    'contact-telegram': 'Telegram',
    'contact-email': 'Email',
    'footer-tagline': 'Цифрова студія для брендів<br>з амбіціями.',
    'footer-made': 'Створено з наміром'
  };

  let activeLanguage = 'ru';

  const updateMenuLabel = () => {
    if (!menuButton) return;
    const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
    const labels = activeLanguage === 'ua'
      ? { open: 'Відкрити меню', close: 'Закрити меню' }
      : { open: 'Открыть меню', close: 'Закрыть меню' };
    menuButton.setAttribute('aria-label', isOpen ? labels.close : labels.open);
  };

  const setLanguage = (language, save = true) => {
    const nextLanguage = language === 'ua' ? 'ua' : 'ru';
    const isUkrainian = nextLanguage === 'ua';
    activeLanguage = nextLanguage;

    localizedText.forEach((element) => {
      const translation = ukrainian[element.dataset.i18n];
      element.textContent = isUkrainian && translation ? translation : russianText.get(element);
    });
    localizedHtml.forEach((element) => {
      const translation = ukrainian[element.dataset.i18nHtml];
      element.innerHTML = isUkrainian && translation ? translation : russianHtml.get(element);
    });

    document.documentElement.lang = isUkrainian ? 'uk' : 'ru';
    document.title = isUkrainian ? 'Nova Digital — вебстудія нового рівня' : initialTitle;
    if (description) {
      description.setAttribute('content', isUkrainian
        ? 'Nova Digital — преміальна вебстудія. Створюємо сайти, інтернет-магазини, вебзастосунки та цифрові інтерфейси.'
        : initialDescription);
    }
    nav?.setAttribute('aria-label', isUkrainian ? 'Основна навігація' : 'Основная навигация');
    languageSwitch?.setAttribute('aria-label', isUkrainian ? 'Змінити мову на російську' : 'Сменить язык на украинский');
    languageSwitch?.setAttribute('title', isUkrainian ? 'Змінити мову' : 'Сменить язык');
    languageValues.forEach((value) => {
      const isActive = value.dataset.languageValue === nextLanguage;
      value.classList.toggle('is-active', isActive);
      value.setAttribute('aria-current', String(isActive));
    });
    updateMenuLabel();

    if (save) {
      try { localStorage.setItem('nova-digital-language', nextLanguage); } catch (error) { /* Storage can be unavailable in private contexts. */ }
    }
  };

  try {
    setLanguage(localStorage.getItem('nova-digital-language') || 'ru', false);
  } catch (error) {
    setLanguage('ru', false);
  }

  languageSwitch?.addEventListener('click', () => setLanguage(activeLanguage === 'ru' ? 'ua' : 'ru'));

  const setHeaderState = () => header.classList.toggle('is-scrolled', window.scrollY > 16);
  setHeaderState();
  window.addEventListener('scroll', setHeaderState, { passive: true });

  menuButton?.addEventListener('click', () => {
    const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!isOpen));
    updateMenuLabel();
    nav.classList.toggle('is-open', !isOpen);
    document.body.classList.toggle('menu-open', !isOpen);
  });

  nav?.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      menuButton?.setAttribute('aria-expanded', 'false');
      updateMenuLabel();
      nav.classList.remove('is-open');
      document.body.classList.remove('menu-open');
    });
  });

  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        currentObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -32px' });
  revealItems.forEach((item) => observer.observe(item));

  accordionItems.forEach((item) => {
    const trigger = item.querySelector('.accordion__trigger');
    trigger.addEventListener('click', () => {
      const isOpen = item.classList.contains('is-open');
      accordionItems.forEach((other) => {
        other.classList.remove('is-open');
        other.querySelector('.accordion__trigger').setAttribute('aria-expanded', 'false');
      });
      if (!isOpen) {
        item.classList.add('is-open');
        trigger.setAttribute('aria-expanded', 'true');
      }
    });
  });

  cards.forEach((card) => {
    card.addEventListener('pointermove', (event) => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty('--x', `${event.clientX - rect.left}px`);
      card.style.setProperty('--y', `${event.clientY - rect.top}px`);
    });
  });

  if (window.matchMedia('(pointer: fine)').matches) {
    window.addEventListener('pointermove', (event) => {
      cursorGlow.style.left = `${event.clientX}px`;
      cursorGlow.style.top = `${event.clientY}px`;
    }, { passive: true });

    document.querySelectorAll('.tilt-card').forEach((card) => {
      card.addEventListener('pointermove', (event) => {
        const rect = card.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;
        card.style.transform = `perspective(700px) rotateX(${y * -3}deg) rotateY(${x * 4}deg) translateY(-7px)`;
      });
      card.addEventListener('pointerleave', () => { card.style.transform = ''; });
    });
  }
});
