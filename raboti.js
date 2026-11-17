// =====================================================================
//  ТУК ДОБАВЯШ РАБОТИТЕ. Това е единственият файл, който пипаш.
//
//  КАК ДА ДОБАВИШ НОВА РАБОТА:
//  1) Копирай един цял блок от { до },  (с запетаята накрая)
//  2) Постави го най-отгоре, веднага след реда "const RABOTI = ["
//     (най-горният блок се показва пръв)
//  3) Смени текстовете между кавичките " "
//  4) Снимката: сложи файла в папка "snimki" и напиши името му в photo
//     Пример: photo: "snimki/golf7.jpg"
//     Ако няма снимка, остави празно: photo: ""
//
//  category е една от: "Ключове", "Кодиране", "Програмиране"
//  (можеш да напишеш и нова категория, тя сама се появява във филтрите)
//
//  ВАЖНО: не махай кавичките " " и запетаите в края на редовете.
// =====================================================================

const RABOTI = [

    {
   category: "Ключове",
    title: "Добавяне на ключ",
    car: "BMW G30 - 2019",
    text: "Добавяне на ключ от BMW G30",
    photo: "snimki/moq.jpg"
  },

    {
   category: "Ключове",
    title: "Аварийно отключване на BMW G05",
    car: "BMW G05 - 2022",
    text: "Аварийно отключване на BMW G05",
    photo: "snimki/mivka.jpg"
  },

    {
   category: "Ключове",
    title: "Добавяне на ключ",
    car: "BMW G31 - 2017",
    text: "Добавяне на ключ от BMW G30",
    photo: "snimki/g31.jpg"
  },

    {
   category: "Ключове",
    title: "Клониране на ключ",
    car: "BMW G30 - 2018",
    text: "Клониране на ключ от BMW G30",
    photo: "snimki/g30.jpg"
  },

  {
    category: "Ключове",
    title: "Добавяне на имобилайзер",
    car: "VW UP · 2013",
    text: "Добавяне на имобилайзер.",
    photo: "snimki/VWUPIMMO.jpg"
  },

  {
    category: "Кодиране",
    title: "Кодиране на Start Stop - last mode",
    car: "CLS W218 · 2015",
    text: "Кодиране на Старт Стоп системата",
    photo: "snimki/CLSOKI.jpg"
  },

  {
    category: "Кодиране",
    title: "Инсталация на CarPlay",
    car: "VW UP · 2013",
    text: "Инсталиране и прекарване на кабели за CarPlay",
    photo: "snimki/UPCARPLAY.jpg"
  },

   {
    category: "Ключове",
    title: "Добавяне на ключ за BMWW F10",
    car: "BMW F10 · 2014",
    text: "Добавяне на ключ.",
    photo: "snimki/F10SIMO.jpg"
  },

   {
    category: "Кодиране",
    title: "Диагностика",
    car: "ML W166 · 2014",
    text: "Диагностика и живи данни",
    photo: "snimki/ML.jpg"
  },

   {
    category: "Кодиране",
    title: "Диагностика",
    car: "BMW X3 · 2012",
    text: "Диагностика и нулиране на сервизен интервал",
    photo: "snimki/Markov.jpg"
  },

   {
    category: "Кодиране",
    title: "Проверка преди покупка",
    car: "Mercedes B Class · 2017",
    text: "Пълна проверка преди покупка",
    photo: "snimki/Kupena.jpg"
  },

  {
    category: "Кодиране",
    title: "Проверка преди покупка",
    car: "Mercedes C Class · 2012",
    text: "Пълна проверка преди покупка",
    photo: "snimki/W204.jpg"
  },

   {
    category: "Ключове",
    title: "Добавяне на ключ за Toyota RAV4",
    car: "Toyota RAV4 · 2004",
    text: "Добавяне на ключ.",
    photo: "snimki/Kozanovo.jpg"
  },

   {
    category: "Ключове",
    title: "Пълна проверка преди покупка",
    car: "Mercedes A W169 · 2012",
    text: "Проверка преди покупка.",
    photo: "snimki/Aklasa.jpg"
  },

  {
    category: "Кодиране",
    title: "Проверка преди покупка",
    car: "Mercedes B Class · 2013",
    text: "Пълна проверка преди покупка",
    photo: "snimki/W246.jpg"
  },

  {
    category: "Кодиране",
    title: "Амбиентно осветление",
    car: "VW UP · 2013",
    text: "Инсталация на амбиентно осветление",
    photo: "snimki/UPAM.jpg"
  },

  {
    category: "Кодиране",
    title: "Проблем ABS",
    car: "Mercedes B Class · 2017",
    text: "Отстранен проблем с ABS окабеляване",
    photo: "snimki/ABS.jpg"
  },

  {
    category: "Ключове",
    title: "Копиране на ключ RAV4",
    car: "Toyota RAV4 - 2003",
    text: "Клониране на чип за Toyota RAV4",
    photo: "snimki/RAV4.jpg"
  },

  {
    category: "Кодиране",
    title: "Датчици за налягане и сервизен интервал",
    car: "Mercedes CLA Class · 2023",
    text: "Обучаване на датчиците за налягане и нулиране на сервизния интервал",
    photo: "snimki/CLA.jpg"
  },

  {
    category: "Ключове",
    title: "Нарязване на ключове",
    car: "Комбайн Class",
    text: "Нарязване на 3 Ключа за комбайн",
    photo: "snimki/Class.jpg"
  },

  {
   category: "Ключове",
    title: "Програмиране на ключ",
    car: "BMW X3 - 2013",
    text: "Програмиране на ключ при всички изгубени",
    photo: "snimki/X3.jpg"
  },

  {
   category: "Ключове",
    title: "Премахване на имобилайзер",
    car: "Mercedes W204 - 2011",
    text: "Премахване на имобилайзер от каско на W204",
    photo: "snimki/204.jpg"
  },

   {
   category: "Ключове",
    title: "Програмиране на ключ",
    car: "BMW E90 - 2008",
    text: "Програмиране на ключ кейлес ключ",
    photo: "snimki/kalin.jpg"
  },

   {
   category: "Ключове",
    title: "Премахване на имобилайзер",
    car: "Mercedes W204 - 2011",
    text: "Премахване на имобилайзер от каско на W204",
    photo: "snimki/204.jpg"
  },

   {
   category: "Ключове",
    title: "Добавяне на ключ",
    car: "Mercedes Sprinter - 2003",
    text: "Добавяне на ключ за Mercedes Sprinter",
    photo: "snimki/todor.jpg"
  },

    {
   category: "Ключове",
    title: "Клониране на ключ",
    car: "VW Passat - 2009",
    text: "Клониране на ключ за VW Passat",
    photo: "snimki/kinai.jpg"
  },

    {
   category: "Ключове",
    title: "Добавяне на ключ",
    car: "BMW F10 - 2012",
    text: "Добавяне на ключ за BMW F10",
    photo: "snimki/simo.jpg"
  },

    {
   category: "Ключове",
    title: "Добавяне на ключ",
    car: "BMW F20 - 2013",
    text: "Добавяне на ключ за BMW F20",
    photo: "snimki/f20.jpg"
  },

    {
   category: "Ключове",
    title: "Добавяне на ключ",
    car: "Honda CRV - 2017",
    text: "Добавяне на ключ за Honda CRV",
    photo: "snimki/petrol.jpg"
  },

    {
   category: "Ключове",
    title: "Добавяне на ключ",
    car: "BMW E91 - 2008",
    text: "Добавяне на ключ за BMW E91",
    photo: "snimki/e91.jpg"
  },

    {
   category: "Ключове",
    title: "Добавяне на ключ",
    car: "BMW E70 - 2010",
    text: "Добавяне на ключ за BMW E70",
    photo: "snimki/e70.jpg"
  },

    {
   category: "Ключове",
    title: "Добавяне на ключ",
    car: "Honda CRV - 2005",
    text: "Добавяне на ключ за Honda CRV",
    photo: "snimki/chashka.jpg"
  },
    {
   category: "Ключове",
    title: "Добавяне на ключ",
    car: "Honda CRV - 2002",
    text: "Добавяне на ключ за Honda CRV",
    photo: "snimki/crv.jpg"
  },

    {
   category: "Ключове",
    title: "Монтаж на резистор",
    car: "Mustang - 2016",
    text: "Монтаж на резистор в AIRBAG на Mustang",
    photo: "snimki/mustang.jpg"
  },

    {
   category: "Ключове",
    title: "Зануляване на ключ",
    car: "BMW G30 - 2019",
    text: "Зануляване на ключ от BMW G30",
    photo: "snimki/g30unlock.jpg"
  },
];
