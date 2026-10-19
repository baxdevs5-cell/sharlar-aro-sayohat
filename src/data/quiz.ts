import { QuizQuestion } from '../types';

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: {
      uz: 'Samarqanddagi mashhur Registon maydoni nechta buyuk madrasadan tashkil topgan?',
      ru: 'Из скольких величественных медресе состоит всемирно известная площадь Регистан в Самарканде?',
      en: 'How many grand madrasahs make up the iconic Registan Square in Samarkand?',
    },
    options: {
      uz: ['2 ta madrasa', '3 ta madrasa (Ulug‘bek, Sherdor, Tillakori)', '4 ta madrasa', '5 ta madrasa'],
      ru: ['2 медресе', '3 медресе (Улугбека, Шердор, Тилля-Кари)', '4 медресе', '5 медресе'],
      en: ['2 madrasahs', '3 madrasahs (Ulugh Beg, Sher-Dor, Tilya-Kori)', '4 madrasahs', '5 madrasahs'],
    },
    correctIndex: 1,
    explanation: {
      uz: 'Registon maydoni XV–XVII asrlarda qad ko‘targan 3 ta muazzam madrasa: Ulug‘bek, Sherdor va Tillakori madrasalaridan iborat.',
      ru: 'Ансамбль Регистан включает три шедевра: медресе Улугбека (XV в.), Шердор (XVII в.) и Тилля-Кари (XVII в.).',
      en: 'Registan consists of three architectural monuments: Ulugh Beg Madrasah, Sher-Dor Madrasah, and Tilya-Kori Madrasah.',
    },
  },
  {
    id: 2,
    question: {
      uz: 'VII asrga oid muqaddas Usmon Qur’oni asl qo‘lyozmasi O‘zbekistonning qaysi shahrida saqlanadi?',
      ru: 'В каком городе Узбекистана хранится подлинный священный манускрипт Корана Усмана VII века?',
      en: 'In which city of Uzbekistan is the original 7th-century Holy Quran of Caliph Uthman preserved?',
    },
    options: {
      uz: ['Buxoro', 'Samarqand', 'Toshkent (Hazrati Imom majmuasida)', 'Xiva'],
      ru: ['Бухара', 'Самарканд', 'Ташкент (в комплексе Хазрати Имам)', 'Хива'],
      en: ['Bukhara', 'Samarkand', 'Tashkent (at the Hazrati Imam Complex)', 'Khiva'],
    },
    correctIndex: 2,
    explanation: {
      uz: 'Qadimiy Usmon Qur’oni Toshkent shahridagi Hazrati Imom (Xastimom) majmuasidagi Mo‘yi Muborak madrasasida saqlanadi.',
      ru: 'Древнейший Коран Усмана сберегается в музее медресе Муйи Муборак в комплексе Хазрати Имам в Ташкенте.',
      en: 'The sacred Quran of Uthman is safeguarded within the Muyi Mubarak Madrasah at the Hazrati Imam complex in Tashkent.',
    },
  },
  {
    id: 3,
    question: {
      uz: 'Buxorodagi qaysi 46 metrlik minorani Chingizxon uning mahobatiga qoyil qolib, buzmasdan qoldirgan?',
      ru: 'Какой 46-метровый минарет Бухары Чингисхан пощадил и приказал не разрушать, пораженный его величием?',
      en: 'Which 46-meter minaret in Bukhara was spared by Genghis Khan, who was awe-inspired by its majesty?',
    },
    options: {
      uz: ['Kalta Minor', 'Kalon minorasi', 'Islomxo‘ja minorasi', 'Vobkent minorasi'],
      ru: ['Кальта-Минар', 'Минарет Калян', 'Минарет Ислам-Ходжа', 'Вабкентский минарет'],
      en: ['Kalta Minor', 'Kalyan Minaret', 'Islam Khodja Minaret', 'Vabkent Minaret'],
    },
    correctIndex: 1,
    explanation: {
      uz: '1127-yilda Qoraxoniylar davrida qurilgan Kalon minorasi hatto mo‘g‘ullar istilosi paytida ham omon qolgan.',
      ru: 'Минарет Калян, возведенный в 1127 году при Караханидах, выстоял во время монгольского нашествия.',
      en: 'Erected in 1127 under the Karakhanid dynasty, the Kalyan Minaret survived Genghis Khan’s conquest unscathed.',
    },
  },
  {
    id: 4,
    question: {
      uz: 'Markaziy Osiyoda birinchi bo‘lib YUNESKO Butunjahon merosi ro‘yxatiga kiritilgan ochiq osmon ostidagi shahar-qal’a qaysi?',
      ru: 'Какой город-крепость под открытым небом стал первым объектом ЮНЕСКО в Центральной Азии в 1990 году?',
      en: 'Which open-air citadel city was the first in Central Asia to be inscribed on the UNESCO World Heritage List in 1990?',
    },
    options: {
      uz: ['Xivadagi Ichan-Qal’a', 'Buxoro Arki', 'Shahrisabzdagi Oqsaroy', 'Termizdagi Qirqqiz qal’asi'],
      ru: ['Ичан-Кала в Хиве', 'Крепость Арк в Бухаре', 'Аксарай в Шахрисабзе', 'Крепость Кырк-Кыз в Термезе'],
      en: ['Ichan-Kala in Khiva', 'Ark Citadel in Bukhara', 'Ak-Saray in Shahrisabz', 'Kirk-Kiz in Termez'],
    },
    correctIndex: 0,
    explanation: {
      uz: 'Xivadagi qadimiy paxsa devorli Ichan-Qal’a 1990-yilda Markaziy Osiyoda birinchi bo‘lib YUNESKO ro‘yxatiga olingan.',
      ru: 'Древняя цитадель Ичан-Кала в Хиве в 1990 году была признана памятником Всемирного наследия ЮНЕСКО.',
      en: 'Khiva’s walled inner town of Ichan-Kala was designated Central Asia’s first UNESCO World Heritage site in 1990.',
    },
  },
  {
    id: 5,
    question: {
      uz: 'Buyuk sarkarda va shoir, Hindistonda Boburiylar saltanatiga asos solgan Zahiriddin Muhammad Bobur qaysi shaharda tug‘ilgan?',
      ru: 'В каком городе родился полководец, поэт и основатель державы Великих Моголов Захириддин Мухаммад Бабур?',
      en: 'In which city was the conqueror, poet, and Mughal Empire founder Zahiriddin Muhammad Babur born?',
    },
    options: {
      uz: ['Qo‘qon', 'Samarqand', 'Andijon', 'Namangan'],
      ru: ['Коканд', 'Самарканд', 'Андижан', 'Наманган'],
      en: ['Kokand', 'Samarkand', 'Andijan', 'Namangan'],
    },
    correctIndex: 2,
    explanation: {
      uz: 'Bobur 1483-yil 14-fevralda Andijonda tavallud topgan va o‘z asarlarida ona yurtini zo‘r muhabbat bilan tilga olgan.',
      ru: 'Бабур родился 14 февраля 1483 года в Андижане и воспел его природу в своей бессмертной книге «Бабур-наме».',
      en: 'Babur was born on February 14, 1483, in Andijan, passionately describing his homeland in the "Baburnama".',
    },
  },
  {
    id: 6,
    question: {
      uz: 'Sohibqiron Amir Temurning kindik qoni to‘kilgan, ulug‘vor Oqsaroy qoldiqlari qad rostlagan shahar qaysi?',
      ru: 'Какой город является малой родиной Амира Темура, где высятся грандиозные руины дворца Аксарай?',
      en: 'Which city is the birthplace of Amir Timur, home to the titanic ruined portal of the Ak-Saray Palace?',
    },
    options: {
      uz: ['Shahrisabz (Kesh)', 'Buxoro', 'Toshkent', 'Termiz'],
      ru: ['Шахрисабз (Кеш)', 'Бухара', 'Ташкент', 'Термез'],
      en: ['Shahrisabz (Kesh)', 'Bukhara', 'Tashkent', 'Termez'],
    },
    correctIndex: 0,
    explanation: {
      uz: 'Amir Temur 1336-yilda Shahrisabz yaqinidagi Xo‘ja Ilg‘or qishlog‘ida tug‘ilgan va keyinchalik shaharda Oqsaroyni qurdirdi.',
      ru: 'Темур родился в селении Ходжа-Ильгар близ Шахрисабза и превратил город во вторую столицу державы.',
      en: 'Amir Timur was born in 1336 near Shahrisabz (ancient Kesh) and constructed his colossal Ak-Saray palace there.',
    },
  },
  {
    id: 7,
    question: {
      uz: 'Dunyoga mashhur “Sahrodagi Luvr” deb ataluvchi Igor Savitskiy nomidagi San’at muzeyi qaysi shaharda joylashgan?',
      ru: 'В каком городе находится знаменитый «Лувр в пустыне» — Музей искусств имени И.В. Савицкого?',
      en: 'In which city is the world-renowned "Louvre in the Desert" — the Savitsky State Museum of Art located?',
    },
    options: {
      uz: ['Nukus', 'Urganch', 'Buxoro', 'Qarshi'],
      ru: ['Нукус', 'Ургенч', 'Бухара', 'Карши'],
      en: ['Nukus', 'Urgench', 'Bukhara', 'Karshi'],
    },
    correctIndex: 0,
    explanation: {
      uz: 'Savitskiy muzeyi Qoraqalpog‘iston poytaxti Nukusda joylashgan bo‘lib, rus avangardi kolleksiyasi bo‘yicha dunyoda ikkinchi o‘rinda turadi.',
      ru: 'Музей Савицкого расположен в столице Каракалпакстана — Нукусе, сохраняя бесценные полотна авангарда.',
      en: 'The Savitsky Museum is located in Nukus, Karakalpakstan, housing the world’s second largest Russian avant-garde art cache.',
    },
  },
  {
    id: 8,
    question: {
      uz: 'Farg‘ona vodiysida joylashgan, 2019-yilda “Jahon hunarmandchilik shahri” maqomini olgan, Xudoyorxon saroyi bilan mashhur shahar qaysi?',
      ru: 'Какой город Ферганской долины со знаменитым дворцом Худояр-хана получил статус Всемирного города ремесленников в 2019 году?',
      en: 'Which Fergana Valley city, famous for the Palace of Khudayar Khan, was crowned a World Craft City in 2019?',
    },
    options: {
      uz: ['Qo‘qon', 'Marg‘ilon', 'Rishton', 'Farg‘ona'],
      ru: ['Коканд', 'Маргилан', 'Риштан', 'Фергана'],
      en: ['Kokand', 'Margilan', 'Rishtan', 'Fergana'],
    },
    correctIndex: 0,
    explanation: {
      uz: 'Qo‘qon shahriga 2019-yilda Jahon hunarmandlar kengashi tomonidan "Jahon hunarmandchilik shahri" xalqaro maqomi berildi.',
      ru: 'Коканд — древняя столица ханства и первый город в регионе, признанный Всемирным городом ремесленников.',
      en: 'In 2019, Kokand was designated an official World Craft City by the World Crafts Council.',
    },
  },
  {
    id: 9,
    question: {
      uz: 'O‘zbekistonning eng janubiy shahrida joylashgan qadimgi Fayoztepa va Qoratepa yodgorliklari qaysi dinga tegishli?',
      ru: 'К какой мировой религии относятся древнейшие монастырские памятники Фаязтепа и Каратепа в Термезе?',
      en: 'To which world religion do the ancient Fayaz Tepe and Kara Tepe monastic monuments in Termez belong?',
    },
    options: {
      uz: ['Buddaviylik (Kushonlar davri)', 'Zardushtiylik', 'Xristianlik', 'Tengrichilik'],
      ru: ['Буддизм (эпоха Кушанского царства)', 'Зороастризм', 'Христианство', 'Тенгрианство'],
      en: ['Buddhism (Kushan Empire era)', 'Zoroastrianism', 'Christianity', 'Tengrism'],
    },
    correctIndex: 0,
    explanation: {
      uz: 'Termizdagi Fayoztepa va Qoratepa milodiy I–III asrlarda Kushonlar davrida barpo etilgan yirik buddaviylik markazlaridir.',
      ru: 'Монастыри Фаязтепа и Каратепа свидетельствуют о расцвете буддизма в Бактрии в I–III веках нашей эры.',
      en: 'Fayaz Tepe and Kara Tepe were flourishing Buddhist centers in northern Bactria during the 1st–3rd centuries AD.',
    },
  },
  {
    id: 10,
    question: {
      uz: 'Har yili may-iyun oylarida o‘tkaziladigan va 10 milliondan ortiq jonli gullar ekiladigan mashhur Xalqaro gullar festivali qaysi shaharda bo‘lib o‘tadi?',
      ru: 'В каком городе ежегодно в мае-июне проходит знаменитый Международный фестиваль цветов с более чем 10 млн растений?',
      en: 'In which city is the famous annual International Flower Festival held every May–June, displaying over 10 million blooms?',
    },
    options: {
      uz: ['Namangan', 'Toshkent', 'Samarqand', 'Chirchiq'],
      ru: ['Наманган', 'Ташкент', 'Самарканд', 'Чирчик'],
      en: ['Namangan', 'Tashkent', 'Samarkand', 'Chirchiq'],
    },
    correctIndex: 0,
    explanation: {
      uz: 'Namangan shahrida 1961-yildan buyon an’anaviy Gullar festivali o‘tkaziladi va hozirda xalqaro nufuzga ega.',
      ru: 'Наманган носит титул Города цветов и с 1961 года проводит грандиозный цветочный фестиваль.',
      en: 'Namangan is renowned as the City of Flowers and has celebrated this spectacular festival since 1961.',
    },
  },
];
