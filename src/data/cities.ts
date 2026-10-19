import { City } from '../types';

export const citiesData: City[] = [
  {
    id: 'tashkent',
    name: {
      uz: 'Toshkent',
      ru: 'Ташкент',
      en: 'Tashkent',
    },
    region: {
      uz: 'Toshkent shahri (Poytaxt)',
      ru: 'г. Ташкент (Столица)',
      en: 'Tashkent City (Capital)',
    },
    category: 'metropolis',
    founded: 'Mil. avv. II asr (~2200 yildan ortiq)',
    population: '~3 000 000 kishi',
    coordinates: '41°18′ N 69°16′ E',
    unesco: false,
    image: '/src/assets/images/tashkent_navoi_square_1792386347682.jpg',
    shortDescription: {
      uz: 'O‘zbekiston poytaxti, zamonaviy osmono‘par binolar, yam-yashil xiyobonlar va qadimiy madaniyat uyg‘unlashgan Markaziy Osiyoning eng yirik megapolisi.',
      ru: 'Столица Узбекистана, крупнейший мегаполис Центральной Азии, где гармонично сочетаются современные высотки, зеленые бульвары и древние святыни.',
      en: 'The capital of Uzbekistan and Central Asia’s largest metropolis, uniting modern skyscrapers, leafy boulevards, and sacred historic shrines.',
    },
    history: {
      uz: 'Toshkent qadimda "Chach", "Shosh" va "Binkat" nomlari bilan atalgan. Buyuk Ipak Yo‘lida muhim savdo va hunarmandchilik chorrahasi bo‘lgan. 2009-yilda shahar o‘zining 2200 yillik yubileyini xalqaro miqyosda nishonladi. 1966-yilgi kuchli zilziladan so‘ng shahar qayta tiklanib, zamonaviy me’moriy qiyofaga ega bo‘ldi.',
      ru: 'В древности Ташкент был известен как Чач, Шаш и Бинкат. Город служил ключевым торговым перекрестком на Великом Шелковом Пути. В 2009 году город отметил 2200-летний юбилей. После разрушительного землетрясения 1966 года Ташкент был заново отстроен и стал современным индустриальным и культурным флагманом.',
      en: 'Historically known as Chach, Shash, and Binkat, Tashkent was a vital trading hub along the Great Silk Road. In 2009, Tashkent celebrated its 2,200th anniversary under UNESCO auspices. Reconstructed with courage after the 1966 earthquake, it blossomed into a vibrant contemporary metropolis.',
    },
    culturalSignificance: {
      uz: 'Toshkent — O‘zbekistonning siyosiy, ilmiy va madaniy yuragi. Bu yerda Alisher Navoiy nomidagi Davlat akademik katta teatri, Fanlar akademiyasi, O‘zbekiston tarixi davlat muzeyi hamda dunyoga mashhur Usmon Qur’oni saqlanadigan Hazrati Imom majmuasi joylashgan.',
      ru: 'Ташкент — научно-культурное сердце страны. Здесь расположены ГАБТ им. Алишера Навои, Академия наук, Государственный музей истории и всемирно известный комплекс Хазрати Имам, где хранится древнейший Коран Усмана.',
      en: 'Tashkent is the intellectual and cultural pulse of Uzbekistan. Home to the Navoi Opera Theater, the Academy of Sciences, and the Hazrati Imam Complex which houses the revered 7th-century Quran of Caliph Uthman.',
    },
    landmarks: [
      {
        name: {
          uz: 'Hazrati Imom (Xastimom) majmuasi',
          ru: 'Комплекс Хазрати Имам',
          en: 'Hazrati Imam Complex',
        },
        description: {
          uz: 'Moviy gumbazli mashhur diniy majmua. Bu yerda qadimiy Usmon Qur’oni qo‘lyozmasi saqlanadi.',
          ru: 'Историко-религиозный ансамбль, где сберегается бесценный древний Коран Усмана VII века.',
          en: 'A historic Islamic complex housing the sacred 7th-century Quran of Caliph Uthman.',
        },
      },
      {
        name: {
          uz: 'Chorsu bozori',
          ru: 'Базар Чорсу',
          en: 'Chorsu Bazaar',
        },
        description: {
          uz: 'Ulkan feruza gumbaz ostidagi sharqona bozor, milliy shirinliklar, ziravorlar va hunarmandlik durdonalari.',
          ru: 'Легендарный восточный базар под огромным бирюзовым куполом с изобилием пряностей и ремесел.',
          en: 'Legendary covered bazaar under an expansive turquoise dome filled with spices and crafts.',
        },
      },
      {
        name: {
          uz: 'Toshkent Metropoliteni',
          ru: 'Ташкентский метрополитен',
          en: 'Tashkent Metro',
        },
        description: {
          uz: 'Markaziy Osiyodagi birinchi metro, har bir bekati marmar, koshin va milliy naqshlar bilan bezatilgan yerosti muzeyi.',
          ru: 'Первое метро Центральной Азии; каждая станция — подземный дворец из мрамора и гранита.',
          en: 'Central Asia’s first underground metro, designed with marble, granite, and chandelier art.',
        },
      },
    ],
    facts: {
      uz: [
        'Toshkent metrosi dunyodagi eng go‘zal yerosti transport tizimlaridan biri hisoblanadi.',
        'Hazrati Imom majmuasida milodiy 644–656 yillarga oid mashhur Usmon Qur’oni saqlanadi.',
        'Toshkent teleminorasi (375 metr) Markaziy Osiyodagi eng baland inshootlardan biridir.',
      ],
      ru: [
        'Ташкентское метро признано одной из самых красивых подземных галерей в мире.',
        'В Ташкенте хранится оригинальный манускрипт Корана Усмана VII века, признанный ЮНЕСКО.',
        'Ташкентская телебашня (375 м) — одна из высочайших телебашен Евразии с открытой смотровой площадкой.',
      ],
      en: [
        'The Tashkent Metro is renowned internationally as one of the world’s most artistic subway systems.',
        'The Hazrati Imam complex preserves the authentic 7th-century Holy Quran of Caliph Uthman.',
        'The Tashkent TV Tower stands at 375 meters, making it one of the tallest structures in Eurasia.',
      ],
    },
  },

  {
    id: 'samarkand',
    name: {
      uz: 'Samarqand',
      ru: 'Самарканд',
      en: 'Samarkand',
    },
    region: {
      uz: 'Samarqand viloyati',
      ru: 'Самаркандская область',
      en: 'Samarkand Region',
    },
    category: 'historical',
    founded: 'Mil. avv. VIII asr (2750 yildan ortiq)',
    population: '~550 000 kishi',
    coordinates: '39°39′ N 66°57′ E',
    unesco: true,
    image: '/src/assets/images/registan_samarkand_hero_1792386325308.jpg',
    shortDescription: {
      uz: '“Yer yuzining sayqali”, Amir Temur saltanatining ulug‘vor poytaxti, dunyoga mashhur Registon maydoni va moviy gumbazlar shahri.',
      ru: '«Лик Земли», столица могущественной империи Амира Темура, всемирно известная площадь Регистан и город лазурных куполов.',
      en: 'The "Mirror of the Earth", imperial capital of Amir Timur, featuring the magnificent Registan Square and iconic azure domes.',
    },
    history: {
      uz: 'Qadimiy Afrosiyob zamini Samarqand Rim, Afina va Bobil kabi qadimiy shaharlarga tengdoshdir. XIV–XV asrlarda Sohibqiron Amir Temur va uning nabirasi Mirzo Ulug‘bek davrida Samarqand dunyoning eng qudratli ilmiy va madaniy poytaxtiga aylandi. 2001-yilda shahar YUNESKO Butunjahon merosi ro‘yxatiga kiritildi.',
      ru: 'Древний Самарканд (Афросиаб) — ровесник Рима и Афин. В XIV–XV веках при Амире Темуре и Мирзо Улугбеке город стал столицей мировой архитектуры и астрономии. В 2001 году Самарканд включен в список Всемирного наследия ЮНЕСКО под названием «Перекресток культур».',
      en: 'Ancient Samarkand (Afrasiyab) shares its age with Rome and Athens. Under Amir Timur in the 14th century, it was transformed into the architectural and intellectual capital of the East. In 2001, UNESCO inscribed Samarkand as "Crossroads of Cultures".',
    },
    culturalSignificance: {
      uz: 'Samarqand — Sharq Renessansining bosh markazlaridan biri. Mirzo Ulug‘bek akademiyasi, 1018 ta yulduz jadvalini tuzgan Ulug‘bek rasadxonasi, hamda qadimiy qog‘oz ishlab chiqarish an’anasi (Konigil) butun jahon madaniyatiga ulkan hissa qo‘shgan.',
      ru: 'Самарканд стал колыбелью Восточного Ренессанса. Обсерватория Улугбека, составившая каталог 1018 звезд, и шелковая бумага Конигила прославили город на весь свет.',
      en: 'A cornerstone of the Eastern Renaissance. Ulugh Beg’s observatory cataloged 1,018 stars with remarkable precision, and Konigil continues centuries of Samarkand silk papermaking.',
    },
    landmarks: [
      {
        name: {
          uz: 'Registon maydoni',
          ru: 'Площадь Регистан',
          en: 'Registan Square',
        },
        description: {
          uz: 'Uch buyuk madrasa: Ulug‘bek, Sherdor va Tillakori madrasalaridan tashkil topgan jahon me’morchiligi durdonasi.',
          ru: 'Архитектурный ансамбль из трех величественных медресе: Улугбека, Шердор и Тилля-Кари.',
          en: 'World-renowned architectural ensemble of Ulugh Beg, Sher-Dor, and Tilya-Kori madrasahs.',
        },
      },
      {
        name: {
          uz: 'Go‘ri Amir maqbarasi',
          ru: 'Мавзолей Гур-Эмир',
          en: 'Gur-e-Amir Mausoleum',
        },
        description: {
          uz: 'Buyuk sarkarda Amir Temur va uning avlodlari mangu qo‘nim topgan moviy gumbazli xilxona.',
          ru: 'Усыпальница великого полководца Амира Темура с уникальным ребристым бирюзовым куполом.',
          en: 'The royal tomb of Amir Timur with its iconic ribbed turquoise dome and nephrite crypt.',
        },
      },
      {
        name: {
          uz: 'Shohi Zinda majmuasi',
          ru: 'Комплекс Шахи-Зинда',
          en: 'Shah-i-Zinda Complex',
        },
        description: {
          uz: 'Moviy va feruza koshinlar bilan bezatilgan muqaddas ziyoratgoh va noyob maqbaralar xiyoboni.',
          ru: 'Уникальная аллея мавзолеев XI–XV веков, облицованная переливающейся лазурной майоликой.',
          en: 'Breathtaking avenue of 11th–15th century royal mausoleums shimmering in cobalt and turquoise tilework.',
        },
      },
    ],
    facts: {
      uz: [
        'Registon maydonidagi Tillakori madrasasi gumbazi ichkaridan sof tilla suvi bilan bezatilgan.',
        'Mirzo Ulug‘bek rasadxonasida yulduzlar harakati o‘sha davrda eng yuqori aniqlikda o‘lchangan.',
        'Samarqand noni o‘zining betakror ta’mi bilan mashhur bo‘lib, oylar davomida qotmasdan saqlanadi.',
      ],
      ru: [
        'Купол медресе Тилля-Кари на Регистане украшен сплошной сусальной позолотой (кундаль).',
        'В обсерватории Улугбека продолжительность звездного года была вычислена с точностью до 1 секунды.',
        'Знаменитая самаркандская лепешка может храниться месяцами, не теряя свежести при увлажнении.',
      ],
      en: [
        'The interior of Tilya-Kori Madrasah in Registan is blanketed in radiant gold leaf leafing.',
        'Ulugh Beg computed the solar year length to within one minute of today’s satellite measurements.',
        'Samarkand bread is baked using ancient artisan formulas, staying fragrant and fresh for months.',
      ],
    },
  },

  {
    id: 'bukhara',
    name: {
      uz: 'Buxoro',
      ru: 'Бухара',
      en: 'Bukhara',
    },
    region: {
      uz: 'Buxoro viloyati',
      ru: 'Бухарская область',
      en: 'Bukhara Region',
    },
    category: 'historical',
    founded: 'Mil. avv. VI asr (~2500 yildan ortiq)',
    population: '~290 000 kishi',
    coordinates: '39°46′ N 64°25′ E',
    unesco: true,
    image: '/src/assets/images/bukhara_poikalyan_monument_1792386325063.jpg',
    shortDescription: {
      uz: '“Buxoroyi Sharif” — 140 dan ortiq me’moriy yodgorlikka ega, Islom olamining muqaddas va tirik muzey-shahri.',
      ru: '«Благородная Бухара» — живой город-музей с более чем 140 памятниками архитектуры под защитой ЮНЕСКО.',
      en: '“Noble Bukhara” — a living museum city preserving over 140 architectural monuments and sacred sanctuaries.',
    },
    history: {
      uz: 'Buxoro so‘zi sanskritcha "vihara" — "ibodatxona" ma’nosini anglatadi. Shahar Somoniylar davrida (IX–X asrlar) ilm-fan, she’riyat va falsafaning eng gullagan markaziga aylandi. Abu Ali ibn Sino, Imom al-Buxoriy, Firdavsiy va Rudakiy aynan shu yerda ijod qilganlar.',
      ru: 'Слово Бухара восходит к санскритскому «вихара» (обитель). При династии Саманидов (IX–X вв.) город превратился в мировую столицу мудрости, где трудились Ибн Сина (Авиценна) и имам аль-Бухари.',
      en: 'The name Bukhara derives from the Sanskrit "vihara" meaning monastery. During the Samanid Golden Age (9th-10th c.), it became an empire of intellect where Ibn Sina (Avicenna) and Imam Bukhari shaped human thought.',
    },
    culturalSignificance: {
      uz: 'Buxoro butun Sharqda islom ta’limoti va tasavvuf markazi bo‘lgan ("Gumbazul-Islom"). Shaharda mashhur yetti pir ziyoratgohlari, xususan Bahouddin Naqshband majmuasi joylashgan.',
      ru: 'Бухара почиталась как «Купол ислама». Здесь расцвел суфийский орден Накшбандия, а семь святых пиров Бухары привлекают паломников со всего мира.',
      en: 'Revered as the "Dome of Islam", Bukhara birthed the influential Naqshbandi Sufi order and preserves timeless centers of Islamic theology.',
    },
    landmarks: [
      {
        name: {
          uz: 'Poyi Kalon majmuasi va minorasi',
          ru: 'Комплекс и минарет Пои-Калян',
          en: 'Poi Kalyan Complex & Minaret',
        },
        description: {
          uz: '1127-yilda qurilgan 46 metrlik afsonaviy minora va ulug‘vor Masjidi Kalon.',
          ru: 'Величественный 46-метровый минарет 1127 года постройки и соборная мечеть.',
          en: 'Towering 46-meter Kalyan Minaret erected in 1127, which even Genghis Khan spared.',
        },
      },
      {
        name: {
          uz: 'Buxoro Arki',
          ru: 'Крепость Арк',
          en: 'Ark of Bukhara',
        },
        description: {
          uz: 'Qadimiy hukmdorlar saroyi, mustahkam devorlar bilan o‘ralgan shahar ichidagi shahar.',
          ru: 'Древняя цитадель эмиров Бухары — мощная крепость на высоком насыпном холме.',
          en: 'Massive citadel fortress that served as the fortified seat of Bukhara’s emirs for centuries.',
        },
      },
      {
        name: {
          uz: 'Somoniylar maqbarasi',
          ru: 'Мавзолей Саманидов',
          en: 'Samanid Mausoleum',
        },
        description: {
          uz: 'IX asrga oid pishiq g‘ishtdan terilgan nafis me’morchilik mo‘jizasi.',
          ru: 'Шедевр кирпичного зодчества IX века, старейший памятник исламской архитектуры в регионе.',
          en: 'A 9th-century marvel constructed entirely of baked brick with sophisticated optical lace patterns.',
        },
      },
    ],
    facts: {
      uz: [
        'Kalon minorasi shunchalik mahobatli bo‘lganki, hatto Chingizxon ham uni buzishga jur’at etmagan.',
        'Somoniylar maqbarasining devorlari yorug‘lik burchagiga qarab kun davomida naqshini o‘zgartirib ko‘rinadi.',
        'Buxoro zardo‘zlik (oltin ip bilan tikish) san’ati YUNESKO nomoddiy madaniy merosi sifatida e’tirof etilgan.',
      ],
      ru: [
        'Минарет Калян произвел такое впечатление на Чингисхана, что тот приказал сохранить его.',
        'Мавзолей Саманидов меняет восприятие узора кладки в зависимости от движения солнца.',
        'Бухарское золотое шитье — признанный шедевр мирового нематериального наследия.',
      ],
      en: [
        'Genghis Khan was so astounded by the Kalyan Minaret that he gave orders to spare it from destruction.',
        'The baked brick masonry of the Samanid Mausoleum subtly shifts appearance as sunlight travels across it.',
        'Bukhara gold-thread embroidery (zarduzi) is registered as an intangible cultural masterpiece.',
      ],
    },
  },

  {
    id: 'khiva',
    name: {
      uz: 'Xiva',
      ru: 'Хива',
      en: 'Khiva',
    },
    region: {
      uz: 'Xorazm viloyati',
      ru: 'Хорезмская область',
      en: 'Khorezm Region',
    },
    category: 'historical',
    founded: 'Mil. avv. VI asr (~2500 yildan ortiq)',
    population: '~95 000 kishi',
    coordinates: '41°22′ N 60°21′ E',
    unesco: true,
    image: '/src/assets/images/khiva_ichan_qala_1792386347303.jpg',
    shortDescription: {
      uz: 'Ochiq osmon ostidagi muzey-shahar, qadimiy Ichan-Qal’a qal’a devorlari va moviy Kalta Minor minorasi makoni.',
      ru: 'Уникальный город-музей под открытым небом, древняя цитадель Ичан-Кала и бирюзовый минарет Кальта-Минар.',
      en: 'An open-air museum city enclosed by the ancient sun-dried mud walls of Ichan-Kala, famous for Kalta Minor.',
    },
    history: {
      uz: 'Xiva qadimiy Xorazm tamaddunining markazi bo‘lib, afsonaga ko‘ra Nuh payg‘ambarning o‘g‘li Som tomonidan qazilgan "Xeyvaq" qudug‘i atrofida bunyod etilgan. XVII–XX asrlarda Xiva xonligining poytaxti bo‘lgan. Ichan-Qal’a 1990-yilda Markaziy Osiyoda birinchi bo‘lib YUNESKO ro‘yxatiga kiritilgan.',
      ru: 'Хива — жемчужина древней хорезмской цивилизации. Согласно преданию, основана вокруг колодца Хейвак сыном Ноя Симом. С 1990 года Ичан-Кала первой в Центральной Азии включена в список Всемирного наследия ЮНЕСКО.',
      en: 'Khiva was the jewel of the ancient Khorezmian civilization, founded according to legend around the Kheyvak well. Capital of the Khiva Khanate, its inner fortress Ichan-Kala became the first UNESCO site in Central Asia in 1990.',
    },
    culturalSignificance: {
      uz: 'Xorazm zamini algebra faniga asos solgan Muhammad al-Xorazmiy va qomusiy olim Abu Rayhon Beruniy kabi daho allomalarni dunyoga bergan. Shaharda qadimiy yog‘och o‘ymakorligi va xorazm lazgisi san’ati saqlanib qolgan.',
      ru: 'Хорезм дал миру отца алгебры Мухаммада аль-Хорезми и энциклопедиста Абу Райхана Беруни. Здесь процветает искусство резьбы по дереву и танец Лазги.',
      en: 'Khorezm gave humanity Muhammad al-Khwarizmi, father of algebra and the term algorithm, and polymath Al-Biruni. Khiva preserves traditional woodcarving and the hypnotic Lazgi dance.',
    },
    landmarks: [
      {
        name: {
          uz: 'Ichan-Qal’a',
          ru: 'Крепость Ичан-Кала',
          en: 'Ichan-Kala Citadel',
        },
        description: {
          uz: 'Baland paxsa devorlar bilan o‘ralgan, 50 dan ortiq tarixiy obidalarni o‘z ichiga olgan ichki shahar.',
          ru: 'Внутренний город, защищенный крепостными стенами из самана с четырьмя парадными воротами.',
          en: 'Walled inner fortress preserving over 50 historic monuments and hundreds of ancient houses.',
        },
      },
      {
        name: {
          uz: 'Kalta Minor minorasi',
          ru: 'Минарет Кальта-Минар',
          en: 'Kalta Minor Minaret',
        },
        description: {
          uz: 'To‘liq zangori koshinlar bilan qoplangan, o‘ziga xos shakldagi mashhur tugallanmagan minora.',
          ru: 'Знаменитый бирюзовый минарет, полностью облицованный глазурованной майоликой.',
          en: 'Iconic turquoise-tiled stout minaret, conceived to be the tallest in the Islamic world.',
        },
      },
      {
        name: {
          uz: 'Juma masjidi',
          ru: 'Джума-мечеть',
          en: 'Juma Mosque',
        },
        description: {
          uz: '218 ta betakror naqshli yog‘och ustunlarga tayangan qadimiy gumbazsiz masjid.',
          ru: 'Уникальная мечеть с 218 резными деревянными колоннами X–XVIII веков, ни одна из которых не повторяется.',
          en: 'Distinct flat-roofed sanctuary supported by 218 intricately carved antique wooden pillars.',
        },
      },
    ],
    facts: {
      uz: [
        'Kalta Minor butun dunyoda to‘liq sirlangan koshin bilan qoplangan yagona minora hisoblanadi.',
        'Juma masjididagi 218 ta yog‘och ustunning har biri alohida o‘ziga xos naqshga ega va birortasi qaytarilmaydi.',
        'Ichan-Qal’a ko‘chalari haqiqiy tarixiy filmlar suratga olish uchun tayyor tabiiy dekoratsiyadir.',
      ],
      ru: [
        'Кальта-Минар — единственный минарет в мире, поверхность которого полностью покрыта глазурью.',
        'Все 218 деревянных колонн Джума-мечети уникальны по орнаменту и возрасту.',
        'В Ичан-Кале и сегодня живут около 300 семей потомственных ремесленников.',
      ],
      en: [
        'Kalta Minor is the only minaret in the Islamic world completely clad in glazed mosaic tiles.',
        'None of the 218 wooden pillars in the Juma Mosque repeat the same pattern; each is an original artwork.',
        'Around 300 families of traditional artisans still reside within the living fortress of Ichan-Kala.',
      ],
    },
  },

  {
    id: 'shahrisabz',
    name: {
      uz: 'Shahrisabz',
      ru: 'Шахрисабз',
      en: 'Shahrisabz',
    },
    region: {
      uz: 'Qashqadaryo viloyati',
      ru: 'Кашкадарьинская область',
      en: 'Kashkadarya Region',
    },
    category: 'historical',
    founded: 'Mil. avv. VIII asr (2700 yildan ortiq)',
    population: '~140 000 kishi',
    coordinates: '39°03′ N 66°50′ E',
    unesco: true,
    image: 'https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=1200&q=80',
    shortDescription: {
      uz: '“Yashil shahar”, buyuk Sohibqiron Amir Temurning kindik qoni to‘kilgan vatani va muazzam Oqsaroy qoldiqlari maskani.',
      ru: '«Зеленый город», малая родина Амира Темура с грандиозными руинами дворца Аксарай.',
      en: 'The “Green City”, birthplace of Amir Timur featuring the colossal ruins of the monumental Ak-Saray Palace.',
    },
    history: {
      uz: 'Qadimda Kesh nomi bilan mashhur bo‘lgan Shahrisabzda 1336-yil 9-aprelda Amir Temur dunyoga kelgan. Sohibqiron o‘z shahrini Temuriylar saltanatining ikkinchi poytaxtiga aylantirib, bu yerda dunyoda tengi yo‘q Oqsaroy qasrini va oilaviy xilxonalarni barpo ettirdi.',
      ru: 'В древности город назывался Кеш. Здесь в 1336 году родился Амир Темур. Позже он превратил родной город во вторую столицу империи, возведя непревзойденный дворец Аксарай и фамильные усыпальницы.',
      en: 'Anciently called Kesh, Shahrisabz is where Amir Timur was born on April 9, 1336. He lavished his birthplace with supreme architectural investments, erecting the immense Ak-Saray palace.',
    },
    culturalSignificance: {
      uz: 'Shahrisabz YUNESKO Butunjahon merosi ob’ekti hisoblanadi. Shaharning Iroqi kashtachiligi va milliy do‘ppido‘zlik maktabi butun dunyoga tanilgan.',
      ru: 'Исторический центр города включен в список ЮНЕСКО. Славится вышивкой «ироки» и традиционным ремеслом.',
      en: 'Inscribed on the UNESCO World Heritage list, Shahrisabz is renowned for its intricate "Iroqi" cross-stitch embroidery.',
    },
    landmarks: [
      {
        name: {
          uz: 'Oqsaroy peshtoqi qoldiqlari',
          ru: 'Руины дворца Аксарай',
          en: 'Ak-Saray Palace Ruins',
        },
        description: {
          uz: 'Amir Temur davrida qurilgan 65 metrlik ulkan qasr darvozasi qoldiqlari.',
          ru: 'Остатки гигантского портала высотой 65 метров с надписью: «Если сомневаешься в нашем величии — взгляни на наши постройки».',
          en: 'Massive 65-meter ruined gateway inscribed: "If you doubt our greatness, look at our buildings".',
        },
      },
      {
        name: {
          uz: 'Ko‘k Gumbaz masjidi',
          ru: 'Мечеть Кок-Гумбаз',
          en: 'Kok-Gumbaz Mosque',
        },
        description: {
          uz: 'Mirzo Ulug‘bek tomonidan 1435-yilda otasi Shohrux sharafiga qurdirilgan juma masjidi.',
          ru: 'Мечеть с огромным куполом из голубого изразца, построенная Мирзо Улугбеком в 1435 году.',
          en: 'Splendid blue-domed Friday mosque constructed in 1435 by Ulugh Beg in honor of his father Shah Rukh.',
        },
      },
    ],
    facts: {
      uz: [
        'Oqsaroy peshtoqida "Agar bizning qudratimizga shubha qilsangiz, biz qurgan imoratlarga boqing" degan mashhur so‘zlar bitilgan.',
        'Shahrisabz o‘zining baland tog‘ etaklaridagi xushmanzara havosi va yashil bog‘lari bilan mashhur.',
        'Oqsaroy tomi ustida zamonaviy muhandislik mo‘jizasi bo‘lgan suzuvchi hovuz bo‘lgan.',
      ],
      ru: [
        'На портале Аксарая начертан девиз: «Если сомневаешься в нашем могуществе — взгляни на наши постройки».',
        'На крыше дворца Аксарай в XIV веке был устроен бассейн с фонтанами, куда вода подавалась самотеком.',
        'Шахрисабз переводится как «Зеленый город» из-за окружающих его роскошных садов.',
      ],
      en: [
        'Ak-Saray’s arch carried the proud motto: "If you doubt our might, gaze upon our monuments".',
        'The rooftop of Ak-Saray featured an elevated cascade pool supplied by lead pipe aqueducts.',
        'Shahrisabz translates to "Green City" due to its lush orchards at the foot of the Zarafshan mountains.',
      ],
    },
  },

  {
    id: 'kokand',
    name: {
      uz: 'Qo‘qon',
      ru: 'Коканд',
      en: 'Kokand',
    },
    region: {
      uz: 'Farg‘ona viloyati',
      ru: 'Ферганская область',
      en: 'Fergana Region',
    },
    category: 'valley',
    founded: 'X asr (Yozma manbalarda Xavokand)',
    population: '~260 000 kishi',
    coordinates: '40°31′ N 70°56′ E',
    unesco: false,
    image: 'https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?auto=format&fit=crop&w=1200&q=80',
    shortDescription: {
      uz: 'Farg‘ona vodiysining durdonasi, Qo‘qon xonligining poytaxti, Xudoyorxon saroyi va hunarmandchilik beshigi.',
      ru: 'Жемчужина Ферганской долины, бывшая столица Кокандского ханства, дворец Худояр-хана и центр ремесел.',
      en: 'The jewel of Fergana Valley, imperial capital of the Kokand Khanate, famous for Khudayar Khan’s Palace.',
    },
    history: {
      uz: 'Qo‘qon XVIII–XIX asrlarda qudratli Qo‘qon xonligining siyosiy va madaniy markazi bo‘lgan. Shaharda 30 dan ortiq madrasa va yuzlab masjidlar faoliyat ko‘rsatgan. Qo‘qon adabiy muhiti Nodirabegim, Uvaysiy va Muqimiy kabi zabardast ijodkorlarni voyaga yetkazgan.',
      ru: 'В XVIII–XIX веках Коканд был центром влиятельного Кокандского ханства. Город прославился литературной средой и поэтессами Нодирой и Увайси, а также непревзойденными мастерами резьбы.',
      en: 'During the 18th-19th centuries, Kokand was the royal capital of the Kokand Khanate. It fostered a vibrant literary renaissance led by queen poets Nodira and Uvaysi.',
    },
    culturalSignificance: {
      uz: '2019-yilda Qo‘qon shahriga Butunjahon hunarmandlar kengashi tomonidan "Jahon hunarmandchilik shahri" maqomi berildi. Bu yerda yog‘och o‘ymakorligi, pichoqchilik va kulolchilik an’analari yuksak darajada rivojlangan.',
      ru: 'В 2019 году Коканд признан Всемирным городом ремесленников по версии WCC. Здесь проводятся всемирные фестивали народных ремесел.',
      en: 'In 2019, Kokand was officially designated a "World Craft City" by the World Crafts Council, hosting biennial global artisan festivals.',
    },
    landmarks: [
      {
        name: {
          uz: 'Xudoyorxon o‘rdasi (saroyi)',
          ru: 'Дворец Худояр-хана',
          en: 'Palace of Khudayar Khan',
        },
        description: {
          uz: '1871-yilda qurilgan yetti hovli va 119 ta xonadan iborat hashamatli xon qarorgohi.',
          ru: 'Великолепный ханский дворец 1871 года с нарядным изразцовым фасадом и резными потолками.',
          en: 'Magnificent 1871 royal palace compound with an ornate tiled facade and 119 painted chambers.',
        },
      },
      {
        name: {
          uz: 'Jome masjidi',
          ru: 'Мечеть Джами',
          en: 'Jami Mosque',
        },
        description: {
          uz: '98 ta naqshinkor yog‘och ustunlar va 22 metrlik minora bilan bezatilgan juma masjidi.',
          ru: 'Грандиозная мечеть с айваном на 98 резных колоннах и 22-метровым минаретом.',
          en: 'Expansive open aivan supported by 98 intricately carved cedar columns with a 22-meter minaret.',
        },
      },
    ],
    facts: {
      uz: [
        'Xudoyorxon saroyi peshtoqi sirlangan koshinlar bilan bezatilgan bo‘lib, quyosh nurida kamalak kabi jilolanadi.',
        'Qo‘qon shahrida har ikki yilda bir marta Xalqaro hunarmandchilik festivali o‘tkaziladi.',
        'Qo‘qon holvasi o‘zining mayin ta’mi bilan butun O‘zbekistonga mashhurdir.',
      ],
      ru: [
        'Фасад дворца Худояр-хана переливается геометрическими узорами из цветной майолики.',
        'Коканд стал первым городом в СНГ, получившим международный статус Города ремесленников.',
        'Кокандская халва с фисташками и сливками — знаменитое гастрономическое лакомство.',
      ],
      en: [
        'The facade of Khudayar Khan’s palace glimmers like a tapestry of glazed porcelain tiles.',
        'Kokand was the first city in Central Asia to earn the World Craft City international distinction.',
        'Traditional Kokand halva layered with cream and pistachios is a prized regional culinary specialty.',
      ],
    },
  },

  {
    id: 'andijan',
    name: {
      uz: 'Andijon',
      ru: 'Андижан',
      en: 'Andijan',
    },
    region: {
      uz: 'Andijon viloyati',
      ru: 'Андижанская область',
      en: 'Andijan Region',
    },
    category: 'valley',
    founded: 'Mil. avv. VI–IV asrlar (~2500 yil)',
    population: '~460 000 kishi',
    coordinates: '40°47′ N 72°21′ E',
    unesco: false,
    image: 'https://images.unsplash.com/photo-1590059390046-6085a73e6a92?auto=format&fit=crop&w=1200&q=80',
    shortDescription: {
      uz: 'Zahiriddin Muhammad Bobur vatani, Farg‘ona vodiysining eng qadimiy shaharlaridan biri, hunarmandchilik va sanoat markazi.',
      ru: 'Родина Захириддина Мухаммада Бабура, древнейший город Ферганской долины, центр торговли и ремесел.',
      en: 'Birthplace of Zahiriddin Muhammad Babur, one of Fergana Valley’s most ancient cities and dynamic industrial hubs.',
    },
    history: {
      uz: 'Andijon Buyuk Ipak Yo‘lining shimoliy tarmog‘ida muhim savdo posti bo‘lgan. 1483-yil 14-fevralda bu yerda buyuk sarkarda, shoir va Boburiylar saltanati asoschisi Zahiriddin Muhammad Bobur dunyoga kelgan. U o‘zining mashhur "Boburnoma" asarida o‘z ona shahri Andijonni mehr bilan tasvirlagan.',
      ru: 'Андижан был узловым пунктом шелковых караванов. В 1483 году здесь родился великий полководец и поэт Бабур, основатель империи Великих Моголов, воспевший родной край в бессмертной «Бабур-наме».',
      en: 'A bustling Silk Road station on the mountain pass to China. In 1483, Babur was born here, later founding the Mughal Empire in India and composing his celebrated memoirs, the "Baburnama".',
    },
    culturalSignificance: {
      uz: 'Andijon — boy xalq hunarmandchiligi, milliy pichoqchilik, do‘ppido‘zlik va dorbozlik san’atining qadimiy beshigi. Shaharda Bobur nomidagi xalqaro xiyobon va memorial muzey joylashgan.',
      ru: 'Андижан — родина канатоходцев (дорбозов), мастеров резьбы и ковки. Здесь открыт мемориальный парк-музей Бабура на холме Богишамол.',
      en: 'Renowned for high-wire acrobatic masters (dorboz), knife smiths, and the Bogi Shamol Babur Memorial Park.',
    },
    landmarks: [
      {
        name: {
          uz: 'Jome me’moriy majmuasi',
          ru: 'Архитектурный комплекс Джами',
          en: 'Jami Architectural Complex',
        },
        description: {
          uz: 'XIX asr oxirida qurilgan ulkan minora, masjid va madrasadan iborat noyob ansambl.',
          ru: 'Ансамбль конца XIX века, включающий медресе, мечеть и стройный 32-метровый минарет.',
          en: 'Late 19th-century complex featuring a grand madrasah, Friday mosque, and 32-meter brick minaret.',
        },
      },
      {
        name: {
          uz: 'Bobur yodgorlik bog‘i (Bog‘i Shamol)',
          ru: 'Парк памяти Бабура (Боги Шамол)',
          en: 'Babur Memorial Park (Bogi Shamol)',
        },
        description: {
          uz: 'Baland adirda joylashgan, Bobur haykali va ramziy qabrini o‘z ichiga olgan go‘zal xiyobon.',
          ru: 'Живописный парк на холме с музеем истории Бабура и символическим мавзолеем.',
          en: 'Scenic hilltop park holding the Babur Museum and symbolic mausoleum overlooking the valley.',
        },
      },
    ],
    facts: {
      uz: [
        'Bobur o‘zining "Boburnoma" asarida: "Andijon mevalari juda serob va shirin, ayniqsa qovuni va anori mashhurdir" deb yozgan.',
        'Andijon viloyati O‘zbekistondagi eng zich aholiga ega va eng hosildor hududlardan biridir.',
        'Andijon pichoqlari o‘zining o‘tkirligi va tutqichidagi nafis naqshlari bilan shuhrat qozongan.',
      ],
      ru: [
        'В «Бабур-наме» отмечается исключительная сладость андижанских дынь, гранатов и винограда.',
        'Андижанская область — самая густонаселенная и плодородная в Средней Азии.',
        'Андижанские мастера-пичокчи выковывают клинки с тончайшей гравировкой «гулбанд».',
      ],
      en: [
        'Babur wrote in his memoirs that "Andijan fruits are exceedingly abundant and delicious, especially its melons and pomegranates".',
        'Andijan region is one of the most densely populated and agriculturally fertile valleys in Central Asia.',
        'Andijan handmade knives are prized across Eurasia for razor-sharp steel and brass inlay ornamentation.',
      ],
    },
  },

  {
    id: 'namangan',
    name: {
      uz: 'Namangan',
      ru: 'Наманган',
      en: 'Namangan',
    },
    region: {
      uz: 'Namangan viloyati',
      ru: 'Наманганская область',
      en: 'Namangan Region',
    },
    category: 'valley',
    founded: 'XVII asr (Qadimiy Axsikent esa mil. avv. III asr)',
    population: '~690 000 kishi',
    coordinates: '40°59′ N 71°40′ E',
    unesco: false,
    image: 'https://images.unsplash.com/photo-1582650625119-3a31f8418b7d?auto=format&fit=crop&w=1200&q=80',
    shortDescription: {
      uz: '“Gullar shahri”, xalqaro gul festivallari, qadimiy Axsikent sivilizatsiyasi va hunarmandchilik makoni.',
      ru: '«Город цветов», родина грандиозного Международного фестиваля цветов и древнего городища Аксикент.',
      en: 'The "City of Flowers", host to the famous International Flower Festival and the ancient citadel of Aksikent.',
    },
    history: {
      uz: 'Namangan so‘zi "namak kon" — "tuz koni" so‘zidan kelib chiqqan. XVII asrda qadimiy Axsikent shahri zilzila oqibatida vayron bo‘lgach, aholi Namanganga ko‘chib o‘tgan. Shahar tez orada vodiydagi yirik savdo va hunarmandlik markaziga aylandi.',
      ru: 'Название происходит от «намак кон» (соляная копь). В XVII веке после разрушения древней крепости Аксикент землетрясением жители основали современный центр, ставший торговым узлом.',
      en: 'The name derives from "namak kon" (salt mine). When earthquake devastated ancient Aksikent in the 17th century, inhabitants settled Namangan, rapidly building a flourishing commerce hub.',
    },
    culturalSignificance: {
      uz: 'Namangan — O‘zbekistonning to‘qimachilik va bog‘dorchilik poytaxti. Har yili may-iyun oylarida o‘tkaziladigan Xalqaro gullar festivali butun dunyodan yuz minglab mehmonlarni jalb qiladi.',
      ru: 'Наманган — садоводческая и текстильная столица. Ежегодный Фестиваль цветов в парке Бабура собирает миллионы цветочных композиций.',
      en: 'Celebrated as Uzbekistan’s horticultural crown, host to the annual International Flower Festival showcasing millions of blooms.',
    },
    landmarks: [
      {
        name: {
          uz: 'Qadimiy Axsikent yodgorligi',
          ru: 'Городище Аксикент',
          en: 'Ancient Aksikent Ruins',
        },
        description: {
          uz: 'Miloddan avvalgi III asrga oid Farg‘ona vodiysining qadimgi qudratli poytaxti xarobalari.',
          ru: 'Руины древнейшей столицы Ферганы III века до н.э. на высоком берегу Сырдарьи.',
          en: 'Extensive ruins of Fergana’s ancient fortified capital overlooking the Syr Darya river.',
        },
      },
      {
        name: {
          uz: 'Mulla Qirg‘iz madrasasi',
          ru: 'Медресе Мулла-Киргиз',
          en: 'Mulla Kyrgyz Madrasah',
        },
        description: {
          uz: 'XX asr boshlarida xalq me’mori Usta Qirg‘iz tomonidan barpo etilgan ko‘p qirrali noyob inshoot.',
          ru: 'Необычное медресе сложной многоугольной планировки, построенное в 1910–1912 годах.',
          en: 'Unique early 20th-century madrasah boasting an irregular polygonal brick courtyard.',
        },
      },
    ],
    facts: {
      uz: [
        'Namangan gullar festivalida 10 milliondan ortiq jonli gullardan yasalgan kompozitsiyalar namoyish etiladi.',
        'Axsikentda qadimda dunyoga mashhur damashq po‘latiga teng keladigan quyma po‘lat ishlab chiqarilgan.',
        'Namangan olmadan to shirin anorlargacha mevalarga nihoyatda boy voha hisoblanadi.',
      ],
      ru: [
        'На международном празднике цветов высаживают более 10 миллионов живых растений.',
        'В древнем Аксикенте археологи обнаружили печи по выплавке знаменитой тигельной дамасской стали.',
        'Наманганские сады славятся отборными сортами яблок и винограда.',
      ],
      en: [
        'The Namangan Flower Festival features over 10 million blooms sculpted into ornate installations.',
        'Archaeological digs in Aksikent uncovered crucibles that forged genuine high-carbon crucible steel.',
        'Namangan orchards yield some of the highest grade apples, peaches, and sweet pomegranates in Asia.',
      ],
    },
  },

  {
    id: 'nukus',
    name: {
      uz: 'Nukus',
      ru: 'Нукус',
      en: 'Nukus',
    },
    region: {
      uz: 'Qoraqalpog‘iston Respublikasi',
      ru: 'Республика Каракалпакстан',
      en: 'Republic of Karakalpakstan',
    },
    category: 'ancient',
    founded: '1932-yil (shahar maqomi)',
    population: '~335 000 kishi',
    coordinates: '42°28′ N 59°36′ E',
    unesco: false,
    image: 'https://images.unsplash.com/photo-1578925518470-4def7a0f08bb?auto=format&fit=crop&w=1200&q=80',
    shortDescription: {
      uz: 'Qoraqalpog‘iston poytaxti, dunyoga mashhur Savitskiy nomidagi "Sahrodagi Luvr" muzeyi va Orolbo‘yi madaniyati markazi.',
      ru: 'Столица Каракалпакстана, дом всемирно известного Музея Савицкого («Лувр в пустыне») и культуры Приаралья.',
      en: 'Capital of Karakalpakstan, home to the internationally acclaimed Savitsky Museum ("Louvre in the Desert").',
    },
    history: {
      uz: 'Nukus qadimgi Shursha qishlog‘i o‘rnida qad ko‘targan. XX asrning 30-yillarida Qoraqalpog‘iston poytaxtiga aylangan. Shahar yaqinida qadimiy Chilpiq qal’asi (Zardushtiylik daxmasi) va Mizdaxqon arxeologik majmuasi kabi ming yillik obidalar joylashgan.',
      ru: 'Нукус вырос на месте древнего поселения Шурша и в 1930-х годах стал столицей Каракалпакстана. Поблизости находятся зороастрийская башня молчания Чилпык и грандиозный некрополь Миздахкан.',
      en: 'Nukus rose from the ancient settlement of Shurcha to become Karakalpakstan’s capital in 1932. Nearby stand the Zoroastrian Dakhma of Chilpak and the mystical Mizdakhkan necropolis.',
    },
    culturalSignificance: {
      uz: 'Igor Savitskiy nomidagi Davlat san’at muzeyi Nukusni jahon san’at xaritasiga olib chiqdi. Bu yerda rus avangard san’atining Sankt-Peterburgdagi Rus muzeyidan keyingi dunyodagi ikkinchi eng yirik kolleksiyasi saqlanadi.',
      ru: 'Музей искусств им. И.В. Савицкого хранит вторую по величине в мире коллекцию русского авангарда и уникальные этнографические сокровища каракалпаков.',
      en: 'The Savitsky Museum transformed Nukus into a global art pilgrimage, housing the world’s second largest collection of Russian avant-garde art after Saint Petersburg.',
    },
    landmarks: [
      {
        name: {
          uz: 'Savitskiy nomidagi Davlat san’at muzeyi',
          ru: 'Музей искусств им. Савицкого',
          en: 'Savitsky State Museum of Art',
        },
        description: {
          uz: '“Sahrodagi Luvr” deb nom olgan, 90 000 dan ortiq bebaho eksponatlarga ega jahon durdonasi.',
          ru: 'Знаменитый «Лувр в пустыне», насчитывающий более 90 000 шедевров авангарда и прикладного искусства.',
          en: 'The famed "Louvre in the Desert", curating over 90,000 avant-garde masterworks and textiles.',
        },
      },
      {
        name: {
          uz: 'Chilpiq qal’asi (Zardushtiylik daxmasi)',
          ru: 'Дахма Чилпык',
          en: 'Chilpak Dakhma',
        },
        description: {
          uz: 'Milodiy I–IV asrlarga oid, Amudaryo sohilidagi qadimiy zardushtiylik marosimlari o‘tkazilgan qal’a.',
          ru: 'Круглая культовая башня тишины I–IV веков на вершине холма над Амударьей.',
          en: 'Monumental 1st–4th century circular Zoroastrian Tower of Silence crowning an isolated hill over the Amu Darya.',
        },
      },
    ],
    facts: {
      uz: [
        'Savitskiy muzeyi The New York Times va The Guardian nashrlari tomonidan dunyodagi eng ajoyib muzeylardan biri deb e’tirof etilgan.',
        'Chilpiq qal’asi tasviri Qoraqalpog‘iston Respublikasi davlat gerbida aks ettirilgan.',
        'Qoraqalpoq milliy o‘tovlari (qora uy) o‘zining geometrik mukammalligi va bezaklari bilan ajralib turadi.',
      ],
      ru: [
        'The New York Times назвал Музей Савицкого одним из самых выдающихся и неожиданных музеев мира.',
        'Силуэт древнего Чилпыка украшает государственный герб Республики Каракалпакстан.',
        'Традиционная каракалпакская юрта славится уникальным тростниковым плетением и ткаными узорами.',
      ],
      en: [
        'The New York Times hailed the Savitsky Museum as one of the most miraculous art institutions on Earth.',
        'The iconic silhouette of the Chilpak fortress is depicted on the state coat of arms of Karakalpakstan.',
        'Karakalpak handwoven yurts are masterworks of thermal insulation and geometric wool tapestry.',
      ],
    },
  },

  {
    id: 'termez',
    name: {
      uz: 'Termiz',
      ru: 'Термез',
      en: 'Termez',
    },
    region: {
      uz: 'Surxondaryo viloyati',
      ru: 'Сурхандарьинская область',
      en: 'Surkhandarya Region',
    },
    category: 'ancient',
    founded: 'Mil. avv. I ming yillik (~2500 yildan ortiq)',
    population: '~190 000 kishi',
    coordinates: '37°14′ N 67°17′ E',
    unesco: false,
    image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80',
    shortDescription: {
      uz: 'O‘zbekistonning eng janubiy quyoshli shahri, qadimiy buddaviylik ibodatxonalari, Qirqqiz qal’asi va Al-Hakim at-Termiziy yurti.',
      ru: 'Самый южный древний город Узбекистана, центр буддийских святынь, крепости Кырк-Кыз и Хакима ат-Термези.',
      en: 'Uzbekistan’s southernmost ancient city on the Amu Darya river, sanctuary of Buddhist stupas and historic fortresses.',
    },
    history: {
      uz: 'Termiz Amudaryo sohilida joylashgan strategik shahar bo‘lib, Kushonlar podsholigi davrida (I–III asrlar) Markaziy Osiyoda buddaviylik dinining bosh markazi bo‘lgan. Keyinchalik islom tamaddunida buyuk hadissunos Abu Iso at-Termiziy va tasavvuf allomasi Al-Hakim at-Termiziylar bu yerda yashab ijod qilgan.',
      ru: 'Расположенный на берегу Амударьи Термез в эпоху Кушанского царства (I–III вв.) стал главным центром буддизма в Средней Азии. В исламскую эпоху прославился богословом Имамом ат-Термези.',
      en: 'Situated along the mighty Amu Darya river, Termez flourished under the Kushan Empire (1st-3rd c.) as Central Asia’s primary Buddhist monastic epicenter, later producing great scholars like Imam at-Tirmidhi.',
    },
    culturalSignificance: {
      uz: 'Termizda Qadimgi Baqtriya madaniyatiga oid Fayoztepa va Qoratepa buddaviylik monastirlari hamda IX asrga oid sirli Qirqqiz qal’asi qad rostlab turibdi.',
      ru: 'Здесь сохранились уникальные памятники буддизма — монастыри Фаязтепа и Каратепа, а также таинственная крепость Кырк-Кыз.',
      en: 'Preserves rare Buddhist cave monasteries Fayaz Tepe and Kara Tepe alongside the enigmatic 9th-century Kirk-Kiz palace fortress.',
    },
    landmarks: [
      {
        name: {
          uz: 'Fayoztepa buddaviylik majmuasi',
          ru: 'Буддийский комплекс Фаязтепа',
          en: 'Fayaz Tepe Buddhist Complex',
        },
        description: {
          uz: 'I–III asrlarga oid, stupa va monastir qoldiqlaridan iborat noyob qadimiy yodgorlik.',
          ru: 'Монастырский комплекс кушанской эпохи с круглой ступой и фресками.',
          en: 'Kushan-era Buddhist temple and monastery preserving a central stupa and wall frescoes.',
        },
      },
      {
        name: {
          uz: 'Qirqqiz qal’asi',
          ru: 'Крепость Кырк-Кыз',
          en: 'Kirk-Kiz Fortress',
        },
        description: {
          uz: 'IX–X asrlarga oid, qirqta jasur qiz afsonasi bilan bog‘liq sirli xom g‘ishtli saroy-qal’a.',
          ru: 'Загадочный дворец-крепость IX века из сырцового кирпича, окутанный легендой о 40 девах-воительницах.',
          en: 'Enigmatic 9th-century mud-brick fortified palace shrouded in the folklore of 40 warrior maidens.',
        },
      },
      {
        name: {
          uz: 'Al-Hakim at-Termiziy majmuasi',
          ru: 'Комплекс Аль-Хаким ат-Термези',
          en: 'Al-Hakim at-Termizi Complex',
        },
        description: {
          uz: 'Buyuk alloma va so‘fiy Hakim at-Termiziy mangu qo‘nim topgan muqaddas me’moriy ansambl.',
          ru: 'Священный мавзолей выдающегося исламского мыслителя IX века на берегу реки.',
          en: 'Sacred architectural sanctuary housing the carved marble tomb of the 9th-century mystic.',
        },
      },
    ],
    facts: {
      uz: [
        'Fayoztepa majmuasidan topilgan qadimiy Budda haykali hozirda O‘zbekiston tarixi davlat muzeyining eng qimmatbaho eksponatidir.',
        'Termiz O‘zbekistonning eng issiq va quyoshli shahri bo‘lib, subtropik anor va xurmo yetishtirish bilan mashhur.',
        'Qirqqiz qal’asining xom g‘ishtli devorlari 1100 yildan ortiq vaqt davomida saqlanib kelmoqda.',
      ],
      ru: [
        'Статуя Будды под священным деревом Бодхи из Фаязтепа — шедевр мирового значения.',
        'Термез — самый солнечный город республики, где зреют субтропический инжир и гранаты.',
        'Стены замка Кырк-Кыз из сырцового кирпича стойко простояли более 11 веков.',
      ],
      en: [
        'The Triad Buddha sculpture unearthed at Fayaz Tepe is a priceless treasure in Uzbekistan’s State Museum.',
        'Termez enjoys the highest annual solar exposure in the nation, cultivating luscious figs and pomegranates.',
        'The mud-brick vaulted chambers of Kirk-Kiz have remarkably withstood over 1,100 years of desert weather.',
      ],
    },
  },
];
