import { GalleryItem } from '../types';

export const galleryItems: GalleryItem[] = [
  {
    id: 'gal-1',
    title: {
      uz: 'Registon maydoni oqshom payti',
      ru: 'Площадь Регистан в лучах заката',
      en: 'Registan Square at Twilight',
    },
    city: {
      uz: 'Samarqand',
      ru: 'Самарканд',
      en: 'Samarkand',
    },
    category: 'architecture',
    image: '/src/assets/images/registan_samarkand_hero_1792386325308.jpg',
    yearOrCentury: 'XV–XVII asrlar',
    description: {
      uz: 'Sharqona me’morchilikning cho‘qqisi hisoblangan uch muazzam madrasa ansambli.',
      ru: 'Ансамбль трех медресе — вершина средневекового восточного зодчества.',
      en: 'The crown jewel of medieval Islamic architecture comprising three imperial madrasahs.',
    },
  },
  {
    id: 'gal-2',
    title: {
      uz: 'Poyi Kalon majmuasi va minorasi',
      ru: 'Ансамбль и минарет Пои-Калян',
      en: 'Poi Kalyan Complex and Minaret',
    },
    city: {
      uz: 'Buxoro',
      ru: 'Бухара',
      en: 'Bukhara',
    },
    category: 'historical',
    image: '/src/assets/images/bukhara_poikalyan_monument_1792386325063.jpg',
    yearOrCentury: '1127-yil',
    description: {
      uz: 'Dovrug‘i asrlar osha yetib kelgan 46 metrlik afsonaviy g‘ishtli minora.',
      ru: 'Легендарный 46-метровый минарет XII века, символ священной Бухары.',
      en: 'The legendary 46-meter 12th-century brick minaret towering above sacred Bukhara.',
    },
  },
  {
    id: 'gal-3',
    title: {
      uz: 'Ichan-Qal’a va Kalta Minor',
      ru: 'Ичан-Кала и Кальта-Минар',
      en: 'Ichan-Kala and Kalta Minor',
    },
    city: {
      uz: 'Xiva',
      ru: 'Хива',
      en: 'Khiva',
    },
    category: 'historical',
    image: '/src/assets/images/khiva_ichan_qala_1792386347303.jpg',
    yearOrCentury: 'XIX asr / Qadimiy',
    description: {
      uz: 'Sirlangan moviy koshinlar bilan to‘liq qoplangan betakror minora va paxsa qal’a devorlari.',
      ru: 'Бирюзовый минарет с глазурованной майоликой на фоне глиняных стен цитадели.',
      en: 'Turquoise-glazed stout minaret flanked by ancient sun-dried mud fortress walls.',
    },
  },
  {
    id: 'gal-4',
    title: {
      uz: 'Toshkent zamonaviy me’moriy manzarasi',
      ru: 'Современный Ташкент и сквер Темура',
      en: 'Modern Tashkent & Timur Square',
    },
    city: {
      uz: 'Toshkent',
      ru: 'Ташкент',
      en: 'Tashkent',
    },
    category: 'modern',
    image: '/src/assets/images/tashkent_navoi_square_1792386347682.jpg',
    yearOrCentury: 'Zamonaviy davr',
    description: {
      uz: 'Amir Temur xiyoboni, Hotel Uzbekistan va shahar markazidagi favvoralar.',
      ru: 'Сквер Амира Темура, гостиница «Узбекистан» и фонтаны центральной столицы.',
      en: 'Amir Timur Square, Hotel Uzbekistan modernist landmark, and verdant park fountains.',
    },
  },
  {
    id: 'gal-5',
    title: {
      uz: 'Shohi Zinda moviy koshinlari',
      ru: 'Лазурные порталы Шахи-Зинда',
      en: 'Azure Portals of Shah-i-Zinda',
    },
    city: {
      uz: 'Samarqand',
      ru: 'Самарканд',
      en: 'Samarkand',
    },
    category: 'architecture',
    image: 'https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=1200&q=80',
    yearOrCentury: 'XI–XV asrlar',
    description: {
      uz: 'Dunyoning eng nozik va yuksak mahorat bilan ishlangan koshin naqshlari majmuasi.',
      ru: 'Один из самых утонченных шедевров полихромной майолики и мозаики в мире.',
      en: 'One of the most exquisite complexes of polychrome majolica and mosaic artistry on Earth.',
    },
  },
  {
    id: 'gal-6',
    title: {
      uz: 'Xudoyorxon saroyi peshtoqi',
      ru: 'Фасад Дворца Худояр-хана',
      en: 'Facade of Khudayar Khan Palace',
    },
    city: {
      uz: 'Qo‘qon',
      ru: 'Коканд',
      en: 'Kokand',
    },
    category: 'architecture',
    image: 'https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?auto=format&fit=crop&w=1200&q=80',
    yearOrCentury: '1871-yil',
    description: {
      uz: 'Rang-barang koshinlar va ganchkorlik san’atining noyob namunasi.',
      ru: 'Яркие орнаменты изразцов и резных деревянных решеток панжара.',
      en: 'Radiant geometric tiled patterns and carved alabaster artistry in the Fergana Valley.',
    },
  },
  {
    id: 'gal-7',
    title: {
      uz: 'Chilpiq — Qadimiy zardushtiylik daxmasi',
      ru: 'Чилпык — древняя дахма зороастризма',
      en: 'Chilpak Zoroastrian Dakhma',
    },
    city: {
      uz: 'Nukus',
      ru: 'Нукус',
      en: 'Nukus',
    },
    category: 'historical',
    image: 'https://images.unsplash.com/photo-1578925518470-4def7a0f08bb?auto=format&fit=crop&w=1200&q=80',
    yearOrCentury: 'Milodiy I–IV asrlar',
    description: {
      uz: 'Amudaryo sohilida salkam ikki ming yildan buyon qad rostlab turgan sirli inshoot.',
      ru: 'Священная башня молчания зороастрийцев, стоящая над Амударьей почти две тысячи лет.',
      en: 'Sacred tower of silence that has surveyed the Amu Darya river for almost two thousand years.',
    },
  },
  {
    id: 'gal-8',
    title: {
      uz: 'Fayoztepa buddaviylik stupasi',
      ru: 'Буддийская ступа Фаязтепа',
      en: 'Fayaz Tepe Buddhist Stupa',
    },
    city: {
      uz: 'Termiz',
      ru: 'Термез',
      en: 'Termez',
    },
    category: 'historical',
    image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80',
    yearOrCentury: 'I–III asrlar',
    description: {
      uz: 'Qadimgi Baqtriyadagi Kushonlar sivilizatsiyasi davriga oid buddaviylik ibodatxonasi.',
      ru: 'Древний монастырский комплекс времен расцвета Кушанского царства в Бактрии.',
      en: 'Ancient monastic temple ruins dating back to the Kushan civilization in ancient Bactria.',
    },
  },
];
