import { Language } from '../types';

export const translations = {
  // Navigation
  nav: {
    brand: {
      uz: 'O‘zbekiston Shaharlari',
      ru: 'Города Узбекистана',
      en: 'Cities of Uzbekistan',
    },
    home: {
      uz: 'Bosh sahifa',
      ru: 'Главная',
      en: 'Home',
    },
    cities: {
      uz: 'Shaharlar',
      ru: 'Города',
      en: 'Cities',
    },
    history: {
      uz: 'Tarix va madaniyat',
      ru: 'История и культура',
      en: 'History & Culture',
    },
    gallery: {
      uz: 'Galereya',
      ru: 'Галерея',
      en: 'Gallery',
    },
    quiz: {
      uz: 'Bilimlar testi',
      ru: 'Тест знаний',
      en: 'Knowledge Quiz',
    },
    contact: {
      uz: 'Aloqa',
      ru: 'Контакты',
      en: 'Contact',
    },
    exploreBtn: {
      uz: 'Kashf qilish',
      ru: 'Исследовать',
      en: 'Explore',
    },
    presentation: {
      uz: 'Taqdimot rejimi',
      ru: 'Режим презентации',
      en: 'Presentation Mode',
    },
  },

  // Hero Section
  hero: {
    kicker: {
      uz: 'Buyuk Ipak Yo‘lining gavhari',
      ru: 'Жемчужина Великого Шелкового Пути',
      en: 'Jewel of the Great Silk Road',
    },
    heading: {
      uz: 'O‘zbekistonni birgalikda kashf etamiz!',
      ru: 'Откроем Узбекистан вместе!',
      en: 'Discover Uzbekistan Together!',
    },
    subtitle: {
      uz: 'Ming yillik moviy gumbazlar, sharqona me’morchilik va boy madaniy merosga ega afsonaviy shaharlar bo‘ylab unutilmas sayohat.',
      ru: 'Незабываемое путешествие по легендарным городам с тысячелетними бирюзовыми куполами, восточным зодчеством и богатейшим наследием.',
      en: 'An unforgettable journey across legendary cities adorned with millennium-old turquoise domes, Eastern architecture, and rich cultural heritage.',
    },
    ctaExplore: {
      uz: 'Shaharlarni kashf etish',
      ru: 'Исследовать города',
      en: 'Explore Cities',
    },
    ctaQuiz: {
      uz: 'Bilimingizni sinang',
      ru: 'Проверить знания',
      en: 'Test Your Knowledge',
    },
    stats: {
      citiesCount: {
        label: {
          uz: 'Asosiy shaharlar',
          ru: 'Ключевых городов',
          en: 'Featured Cities',
        },
        val: '10+',
      },
      unescoCount: {
        label: {
          uz: 'YUNESKO merosi obidalari',
          ru: 'Объектов ЮНЕСКО',
          en: 'UNESCO Heritage Sites',
        },
        val: '5+',
      },
      historyYears: {
        label: {
          uz: 'Yillik qadimiy tarix',
          ru: 'Лет древней истории',
          en: 'Years of Living History',
        },
        val: '2750+',
      },
      monuments: {
        label: {
          uz: 'Tarixiy yodgorliklar',
          ru: 'Исторических памятников',
          en: 'Historical Landmarks',
        },
        val: '8,000+',
      },
    },
  },

  // Cities Section
  citiesSection: {
    badge: {
      uz: 'Sayyohlik xaritasi',
      ru: 'Туристическая карта',
      en: 'Tourism Guide',
    },
    title: {
      uz: 'O‘zbekistonning afsonaviy shaharlari',
      ru: 'Легендарные города Узбекистана',
      en: 'Legendary Cities of Uzbekistan',
    },
    description: {
      uz: 'Har bir shahar o‘ziga xos me’moriy qiyofa, boy o‘tmish va unutilmas an’analarga ega. Qiziqtirgan shaharni tanlang va u haqida to‘liq ma’lumotga ega bo‘ling.',
      ru: 'Каждый город обладает неповторимым архитектурным обликом, богатой историей и уникальными традициями. Выберите город, чтобы узнать больше.',
      en: 'Each city possesses a distinct architectural identity, a profound past, and timeless traditions. Select a city to explore its story.',
    },
    searchPlaceholder: {
      uz: 'Shahar nomi, obida yoki viloyat bo‘yicha qidiring...',
      ru: 'Поиск по названию города, памятнику или региону...',
      en: 'Search by city name, monument, or region...',
    },
    filterAll: {
      uz: 'Barchasi',
      ru: 'Все',
      en: 'All',
    },
    filterHistorical: {
      uz: 'Tarixiy markazlar',
      ru: 'Исторические центры',
      en: 'Historic Centers',
    },
    filterMetropolis: {
      uz: 'Yirik megapolislar',
      ru: 'Крупные мегаполисы',
      en: 'Metropolises',
    },
    filterValley: {
      uz: 'Farg‘ona vodiysi',
      ru: 'Ферганская долина',
      en: 'Fergana Valley',
    },
    filterFavorites: {
      uz: 'Saralanganlar',
      ru: 'Избранные',
      en: 'Favorites',
    },
    detailsBtn: {
      uz: 'Batafsil',
      ru: 'Подробнее',
      en: 'View Details',
    },
    foundedLabel: {
      uz: 'Tashkil topgan',
      ru: 'Основан',
      en: 'Founded',
    },
    populationLabel: {
      uz: 'Aholisi',
      ru: 'Население',
      en: 'Population',
    },
    emptySearch: {
      uz: 'Kechirasiz, so‘rovingiz bo‘yicha shahar topilmadi. Qidiruv so‘zini o‘zgartirib ko‘ring.',
      ru: 'К сожалению, по вашему запросу ничего не найдено. Попробуйте изменить запрос.',
      en: 'No cities matched your search query. Please try different keywords.',
    },
    emptyFavorites: {
      uz: 'Hozircha hech qanday shahar sevimli qilib belgilanmagan. Shahar kartasidagi yurakcha belgisini bosing.',
      ru: 'В избранном пока нет городов. Нажмите на значок сердечка на карточке города.',
      en: 'No favorite cities added yet. Click the heart icon on any city card to save it here.',
    },
  },

  // City Modal
  modal: {
    historyTitle: {
      uz: 'Shahar tarixi',
      ru: 'История города',
      en: 'City History',
    },
    landmarksTitle: {
      uz: 'Mashhur tarixiy obidalar',
      ru: 'Знаменитые достопримечательности',
      en: 'Famous Landmarks',
    },
    culturalTitle: {
      uz: 'Madaniy ahamiyati',
      ru: 'Культурное значение',
      en: 'Cultural Significance',
    },
    factsTitle: {
      uz: 'Qiziqarli faktlar',
      ru: 'Интересные факты',
      en: 'Interesting Facts',
    },
    closeBtn: {
      uz: 'Yopish',
      ru: 'Закрыть',
      en: 'Close',
    },
    addToFavorites: {
      uz: 'Saralanganlarga qo‘shish',
      ru: 'В избранное',
      en: 'Add to Favorites',
    },
    removeFromFavorites: {
      uz: 'Saralanganlardan o‘chirish',
      ru: 'Удалить из избранного',
      en: 'Remove from Favorites',
    },
    unescoBadge: {
      uz: 'YUNESKO Butunjahon Merosi Ro‘yxatida',
      ru: 'Список Всемирного наследия ЮНЕСКО',
      en: 'UNESCO World Heritage Listed',
    },
  },

  // History & Culture Section
  historySection: {
    badge: {
      uz: 'Asrlar sadosi',
      ru: 'Эхо веков',
      en: 'Echo of Centuries',
    },
    title: {
      uz: 'Tarix, me’morchilik va milliy madaniyat',
      ru: 'История, архитектура и национальная культура',
      en: 'History, Architecture & National Culture',
    },
    description: {
      uz: 'O‘zbekiston hududi asrlar davomida dunyo ilm-fani, falsafasi va betakror me’morchilik maktablarining yirik markazi bo‘lib kelgan.',
      ru: 'Земли Узбекистана веками служили крупнейшим очагом мировой науки, философской мысли и непревзойденных архитектурных школ.',
      en: 'The lands of Uzbekistan have flourished for millennia as a prominent cradle of global scholarship, philosophy, and architectural mastery.',
    },
  },

  // Gallery Section
  gallerySection: {
    badge: {
      uz: 'Foto lavhalar',
      ru: 'Фотоархив',
      en: 'Photo Archive',
    },
    title: {
      uz: 'O‘zbekiston manzaralari galereyasi',
      ru: 'Галерея видов Узбекистана',
      en: 'Uzbekistan Landmarks Gallery',
    },
    description: {
      uz: 'Qadimiy minoralar, moviy koshinlar va zamonaviy shahar manzaralari. Rasmlarni to‘liq hajmda ko‘rish uchun ularni bosing.',
      ru: 'Древние минареты, лазурные изразцы и современные панорамы. Нажмите на фото для просмотра в полном размере.',
      en: 'Ancient minarets, azure tile mosaics, and modern cityscapes. Click on any image to open the high-resolution lightbox viewer.',
    },
    filterAll: {
      uz: 'Barchasi',
      ru: 'Все',
      en: 'All Photos',
    },
    filterArch: {
      uz: 'Me’morchilik',
      ru: 'Архитектура',
      en: 'Architecture',
    },
    filterHist: {
      uz: 'Tarixiy obidalar',
      ru: 'Памятники',
      en: 'Monuments',
    },
    filterModern: {
      uz: 'Zamonaviy qiyofa',
      ru: 'Современность',
      en: 'Modern Scenery',
    },
    lightboxHint: {
      uz: 'Klaviatura: [← / →] o‘tkazish, [Esc] yopish',
      ru: 'Клавиатура: [← / →] переключение, [Esc] закрыть',
      en: 'Keyboard: [← / →] navigate, [Esc] close',
    },
  },

  // Quiz Section
  quizSection: {
    badge: {
      uz: 'Interaktiv viktorina',
      ru: 'Интерактивная викторина',
      en: 'Interactive Quiz',
    },
    title: {
      uz: 'O‘zbekiston shaharlari bo‘yicha bilimlar testi',
      ru: 'Тест знаний о городах Узбекистана',
      en: 'Uzbekistan Cities Knowledge Quiz',
    },
    description: {
      uz: 'O‘zbekiston tarixi, obidalari va shaharlari bo‘yicha 10 ta savolga javob bering va bilimingizni sinab ko‘ring.',
      ru: 'Ответьте на 10 вопросов об истории, памятниках и городах Узбекистана и проверьте свой кругозор.',
      en: 'Answer 10 comprehensive questions about Uzbekistan’s cities, history, and monuments to test your mastery.',
    },
    questionProgress: {
      uz: 'Savol',
      ru: 'Вопрос',
      en: 'Question',
    },
    of: {
      uz: 'dan',
      ru: 'из',
      en: 'of',
    },
    correctFeedback: {
      uz: 'To‘g‘ri!',
      ru: 'Правильно!',
      en: 'Correct!',
    },
    incorrectFeedback: {
      uz: 'Noto‘g‘ri!',
      ru: 'Неправильно!',
      en: 'Incorrect!',
    },
    nextQuestion: {
      uz: 'Keyingi savol',
      ru: 'Следующий вопрос',
      en: 'Next Question',
    },
    finishQuiz: {
      uz: 'Natijani ko‘rish',
      ru: 'Посмотреть результат',
      en: 'View Results',
    },
    resultTitle: {
      uz: 'Test natijalari',
      ru: 'Результаты тестирования',
      en: 'Quiz Results',
    },
    scoreLabel: {
      uz: 'Sizning to‘plagan balingiz:',
      ru: 'Ваш итоговый счет:',
      en: 'Your final score:',
    },
    retryBtn: {
      uz: 'Qayta topshirish',
      ru: 'Пройти снова',
      en: 'Retake Quiz',
    },
    gradeExcellent: {
      uz: 'A’lo darajada! Siz O‘zbekiston tarixi va shaharlarini mukammal bilasiz.',
      ru: 'Превосходно! Вы прекрасно знаете историю и города Узбекистана.',
      en: 'Outstanding! You have exceptional mastery of Uzbekistan’s history and cities.',
    },
    gradeGood: {
      uz: 'Yaxshi natija! Siz ko‘p ma’lumotlarni bilasiz, ammo yana o‘rganishga arziydigan qiziq faktlar bor.',
      ru: 'Хороший результат! Вы знаете многое, но есть еще интересные детали для изучения.',
      en: 'Great job! You know a lot, and there are even more fascinating facts to discover.',
    },
    gradeNeedsStudy: {
      uz: 'Yana bir bor saytdagi ma’lumotlarni o‘qib chiqib, testni qayta topshirishingizni tavsiya qilamiz.',
      ru: 'Рекомендуем перечитать разделы сайта и попробовать пройти тест снова.',
      en: 'We recommend reading through the city guides and retrying the quiz to sharpen your knowledge.',
    },
  },

  // Contact Section
  contactSection: {
    badge: {
      uz: 'Bog‘lanish va fikr-mulohaza',
      ru: 'Связь и отзывы',
      en: 'Contact & Feedback',
    },
    title: {
      uz: 'Biz bilan bog‘laning',
      ru: 'Свяжитесь с нами',
      en: 'Get in Touch',
    },
    description: {
      uz: 'Loyiha, maktab taqdimoti yoki sayyohlik ma’lumotlari bo‘yicha savol va takliflaringizni yuborishingiz mumkin.',
      ru: 'Вы можете отправить вопросы и предложения по проекту, школьной презентации или туристическим материалам.',
      en: 'Feel free to send questions, suggestions, or feedback regarding this educational project and tourism guide.',
    },
    nameLabel: {
      uz: 'Ism va familiyangiz',
      ru: 'Ваше имя',
      en: 'Full Name',
    },
    namePlaceholder: {
      uz: 'Masalan: Alisher Navoiy',
      ru: 'Например: Алишер Навои',
      en: 'E.g., Alisher Navoiy',
    },
    emailLabel: {
      uz: 'Elektron pochta',
      ru: 'Электронная почта',
      en: 'Email Address',
    },
    emailPlaceholder: {
      uz: 'elektron@pochta.uz',
      ru: 'example@domain.com',
      en: 'example@domain.com',
    },
    topicLabel: {
      uz: 'Mavzu',
      ru: 'Тема сообщения',
      en: 'Subject',
    },
    topicOptions: {
      general: {
        uz: 'Umumiy savol yoki taklif',
        ru: 'Общий вопрос или предложение',
        en: 'General Inquiry or Feedback',
      },
      school: {
        uz: 'Maktab loyihasi / Taqdimot',
        ru: 'Школьный проект / Презентация',
        en: 'School Project / Presentation',
      },
      tourism: {
        uz: 'Sayyohlik ma’lumotlari',
        ru: 'Туристическая информация',
        en: 'Tourism Information',
      },
      quiz: {
        uz: 'Viktorina bo‘yicha taklif',
        ru: 'Предложение по викторине',
        en: 'Quiz Feedback',
      },
    },
    messageLabel: {
      uz: 'Xabaringiz',
      ru: 'Ваше сообщение',
      en: 'Message',
    },
    messagePlaceholder: {
      uz: 'Xabaringizni bu yerga yozing...',
      ru: 'Напишите ваше сообщение здесь...',
      en: 'Type your message here...',
    },
    sendBtn: {
      uz: 'Xabarni yuborish',
      ru: 'Отправить сообщение',
      en: 'Send Message',
    },
    successTitle: {
      uz: 'Xabaringiz qabul qilindi!',
      ru: 'Ваше сообщение успешно отправлено!',
      en: 'Your message has been received!',
    },
    successMessage: {
      uz: 'Rahmat! Fikr-mulohazangiz muvaffaqiyatli saqlandi. Maktab taqdimotida bu xabar hisobga olinadi.',
      ru: 'Спасибо! Ваше обращение сохранено. Оно будет учтено в ходе презентации проекта.',
      en: 'Thank you! Your feedback has been recorded and will be highlighted during the school presentation.',
    },
    sendAnother: {
      uz: 'Yana xabar yuborish',
      ru: 'Отправить еще одно сообщение',
      en: 'Send Another Message',
    },
    errors: {
      nameRequired: {
        uz: 'Iltimos, ismingizni kiriting (kamida 2 ta harf)',
        ru: 'Пожалуйста, введите имя (не менее 2 символов)',
        en: 'Please enter your name (at least 2 characters)',
      },
      emailRequired: {
        uz: 'Iltimos, to‘g‘ri elektron pochta manzilini kiriting',
        ru: 'Пожалуйста, укажите корректный email',
        en: 'Please provide a valid email address',
      },
      messageRequired: {
        uz: 'Iltimos, xabarni kiriting (kamida 10 ta belgi)',
        ru: 'Пожалуйста, введите текст сообщения (не менее 10 символов)',
        en: 'Please write a message (at least 10 characters)',
      },
    },
    contactCard: {
      addressTitle: {
        uz: 'Manzil',
        ru: 'Адрес',
        en: 'Address',
      },
      addressValue: {
        uz: 'Toshkent shahri, Amir Temur shoh ko‘chasi, O‘zbekiston',
        ru: 'город Ташкент, проспект Амира Темура, Узбекистан',
        en: 'Tashkent city, Amir Timur Avenue, Uzbekistan',
      },
      phoneTitle: {
        uz: 'Telefon',
        ru: 'Телефон',
        en: 'Phone',
      },
      phoneValue: '+998 (71) 200-00-00',
      emailTitle: {
        uz: 'Elektron manzil',
        ru: 'Электронный адрес',
        en: 'Email',
      },
      emailValue: 'info@uzbekistancities.edu.uz',
      hoursTitle: {
        uz: 'Ish vaqti',
        ru: 'Время работы',
        en: 'Hours',
      },
      hoursValue: {
        uz: 'Dushanba – Shanba: 09:00 – 18:00',
        ru: 'Понедельник – Суббота: 09:00 – 18:00',
        en: 'Monday – Saturday: 09:00 – 18:00',
      },
    },
  },

  // Presentation Guide Modal (for school rubric demo in 1-2 mins)
  presentationModal: {
    title: {
      uz: 'Maktab taqdimoti rejasi & Baholash mezonlari',
      ru: 'План школьной презентации и критерии оценки',
      en: 'School Presentation Guide & Rubric Checklist',
    },
    subtitle: {
      uz: '1-2 daqiqada loyihani to‘liq namoyish etish bo‘yicha qo‘llanma',
      ru: 'Руководство для демонстрации проекта за 1-2 минуты',
      en: 'Guide to demonstrate the complete project in 1-2 minutes',
    },
    rubricChecked: {
      uz: 'Talablar to‘liq bajarildi',
      ru: 'Все требования выполнены',
      en: 'All Requirements Met',
    },
    items: [
      {
        title: {
          uz: '1. 10 ta shahar va batafsil modallar',
          ru: '1. 10 городов и детальные модальные окна',
          en: '1. 10 Cities & Detailed Modals',
        },
        desc: {
          uz: 'Har bir shahar uchun tarix, obidalar, faktlar, sevimli (heart) saqlash va qidiruv tizimi.',
          ru: 'Для каждого города: история, памятники, факты, добавление в избранное и поиск.',
          en: 'Full history, landmarks, facts, favorite bookmarking, and live search for every city.',
        },
      },
      {
        title: {
          uz: '2. 3 ta talab qilingan animatsiya',
          ru: '2. 3 обязательные анимации по регламенту',
          en: '2. 3 Required Smooth Animations',
        },
        desc: {
          uz: 'Tugma hover (1.06x kattalashish), Sahifa ochilishida (Entrance 850ms) va Skroll qilinganda elementlar chiqishi (Scroll Reveal).',
          ru: 'Hover кнопок (1.06x масштабирование), плавное появление страницы (850ms) и появление при скролле.',
          en: 'Button hover (1.06x scale), hero entrance (850ms rise), and IntersectionObserver scroll reveal.',
        },
      },
      {
        title: {
          uz: '3. 3 ta to‘liq til (O‘zbek, Rus, Ingliz)',
          ru: '3. Полные 3 языка (Узбекский, Русский, Английский)',
          en: '3. 3 Complete Languages (UZ, RU, EN)',
        },
        desc: {
          uz: 'Faqat yorliq emas, balki barcha matnlar, viktorina, shahar ma’lumotlari va shakllar tarjima qilingan.',
          ru: 'Полный перевод всей навигации, карточек, тестов, модалок и форм обратной связи.',
          en: 'True end-to-end localization covering navigation, city details, quiz, and form validation.',
        },
      },
      {
        title: {
          uz: '4. Interaktiv 10 ta savolli viktorina',
          ru: '4. Интерактивная викторина из 10 вопросов',
          en: '4. Interactive 10-Question Quiz',
        },
        desc: {
          uz: 'To‘g‘ri/noto‘g‘ri darhol tushuntirish, ball hisoblash, foiz ko‘rsatkichi va qayta topshirish.',
          ru: 'Моментальная обратная связь, расчет баллов, прогресс-бар и возможность пересдачи.',
          en: 'Instant feedback with historical explanations, score calculation, progress bar, and retake.',
        },
      },
      {
        title: {
          uz: '5. Tun/Kun (Dark/Light) rejimi & LocalStorage',
          ru: '5. Темная и светлая темы с сохранением',
          en: '5. Dark / Light Mode with LocalStorage',
        },
        desc: {
          uz: 'Foydalanuvchi tanlagan mavzu va sevimli shaharlar brauzer xotirasida avtomatik saqlanadi.',
          ru: 'Выбранная тема и список избранных городов сохраняются в памяти браузера.',
          en: 'Theme preference and bookmarked cities are preserved across page refreshes.',
        },
      },
    ],
    quickJump: {
      uz: 'Tezkor o‘tish',
      ru: 'Быстрый переход',
      en: 'Quick Jump',
    },
    close: {
      uz: 'Tushunarli, ko‘rish',
      ru: 'Понятно, просмотреть',
      en: 'Got it, let’s view',
    },
  },

  // Footer
  footer: {
    description: {
      uz: 'O‘zbekiston Respublikasining qadimiy shaharlari, bebaho me’morchiligi va boy madaniy merosini o‘rganish va ommalashtirishga bag‘ishlangan umumta’lim va sayyohlik veb-sayti.',
      ru: 'Образовательный и туристический веб-сайт, посвященный изучению и популяризации древних городов, архитектуры и культурного наследия Узбекистана.',
      en: 'An educational and tourism portal dedicated to exploring and celebrating the ancient cities, architecture, and rich cultural heritage of Uzbekistan.',
    },
    quickLinksTitle: {
      uz: 'Foydali bo‘limlar',
      ru: 'Разделы сайта',
      en: 'Quick Links',
    },
    citiesListTitle: {
      uz: 'Mashhur shaharlar',
      ru: 'Популярные города',
      en: 'Popular Cities',
    },
    schoolProjectNotice: {
      uz: 'Maktab taqdimoti va o‘quv mashg‘ulotlari uchun maxsus ishlab chiqilgan.',
      ru: 'Разработано специально для школьной презентации и учебных занятий.',
      en: 'Specially created for school presentation and educational showcase.',
    },
    rights: {
      uz: 'Barcha huquqlar himoyalangan.',
      ru: 'Все права защищены.',
      en: 'All rights reserved.',
    },
    backToTop: {
      uz: 'Yuqoriga qaytish',
      ru: 'Наверх',
      en: 'Back to top',
    },
  },
};
