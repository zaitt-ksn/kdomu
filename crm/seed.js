window.KDOMU_CRM_SEED = {
  version: 2,
  settings: {
    todayQueueSize: 5,
    cityFocus: "Москва",
  },
  templates: {
    visit: {
      id: "visit",
      name: "Онлайн-подключение (без визита)",
      subject: "Бесплатная витрина для приюта · «К дому»",
      body: `Здравствуйте!

Меня зовут Ксения. Делаю сервис «К дому» — сайт, где люди смотрят животных
из приютов и оставляют заявку на усыновление.
Пример: https://zaitt-ksn.github.io/kdomu/for-shelters.html

Сейчас пилот в Москве и Брянске. Всё онлайн: визит не нужен.
Хочу помочь с заявками, а не «продать софт».

Можно 3 коротких вопроса?
1) Что больнее: мало заявок, хаос с волонтёрами или донаты?
2) Чем уже пользуетесь: сайт, VK/Telegram, «Друг для Друга», МосПитомец, Excel?
3) Готовы прислать 10–20 карточек (фото + описание)?
   Могу сама собрать черновик по вашим постам — вам только подтвердить.

Это бесплатно, без обязательств.
Telegram @zaitt_ksn · +7 953 293-59-63
Спасибо!`,
    },
    followup: {
      id: "followup",
      name: "Follow-up (прочитали, молчат)",
      subject: "Ксения ещё раз · «К дому»",
      body: `Ксения ещё раз 👋
Писала про бесплатную витрину «К дому» — заявки на усыновление вам в почту/Telegram.
Всё удалённо, без визита.

Если не сейчас — ок, напишите «не сейчас».
Если можно — пришлите 10 анкет или разрешите собрать их с ваших постов.
@zaitt_ksn`,
    },
    ping: {
      id: "ping",
      name: "Короткий пинг (VK / не прочитали)",
      subject: "Ксения · бесплатная витрина животных",
      body: `Здравствуйте! Это Ксения, @zaitt_ksn.
Делаю бесплатную онлайн-витрину животных «К дому» для приютов Москвы и Брянска.
Могу разместить 10 ваших анкет и присылать заявки — без визита и без оплаты.
Удобно ответить сюда?
https://zaitt-ksn.github.io/kdomu/for-shelters.html`,
    },
    first: {
      id: "first",
      name: "Первое письмо (новый контакт)",
      subject: "Пилот «К дому» — бесплатная витрина онлайн",
      body: `Здравствуйте!

Меня зовут Ксения. Я делаю бесплатный сервис «К дому» — сайт, где люди
смотрят животных из приютов и оставляют заявку на усыновление.
https://zaitt-ksn.github.io/kdomu/for-shelters.html

Сейчас пилот в Москве и Брянске, всё удалённо.

Можно 3 коротких вопроса?
1) Что больнее: мало заявок, хаос с волонтёрами или донаты?
2) Чем уже пользуетесь: сайт, VK/Telegram, «Друг для Друга», МосПитомец, Excel?
3) Готовы прислать 10–20 карточек онлайн?

Это бесплатно, без обязательств.
Telegram @zaitt_ksn · +7 953 293-59-63
Спасибо!`,
    },
    cards: {
      id: "cards",
      name: "Запрос карточек после согласия",
      subject: "Что нужно для карточек животных",
      body: `Спасибо!
Для каждой карточки нужно:
— имя, вид, возраст, пол
— характер в 1 предложении
— 1–3 фото
— контакт куратора для заявок

Могу сама собрать черновик по вашим постам в VK/сайту — вам только подтвердить.`,
    },
  },
  contacts: [
    {
      id: "msk-izpriuta",
      name: "Волонтёры Бирюлёво (izpriuta)",
      shelter: "Бирюлёво / izpriuta",
      city: "Москва",
      role: "волонтёры",
      channel: "email",
      email: "sobaka@izpriuta.ru",
      phone: "",
      telegram: "https://t.me/izpriuta_info",
      link: "https://www.izpriuta.ru/",
      priority: "A",
      status: "cold",
      note: "Сильный онлайн-каталог. Писать email или @izpriuta_info",
      touchLog: [],
    },
    {
      id: "msk-nekrasovka",
      name: "Наталья (Некрасовка)",
      shelter: "Некрасовка",
      city: "Москва",
      role: "волонтёры / куратор",
      channel: "email",
      email: "margaritkaag@gmail.com",
      phone: "+7 910 440-28-24",
      telegram: "",
      link: "https://nekrasovka-priut.ru/",
      priority: "A",
      status: "no_reply",
      note: "Уже писали. Follow-up без визита.",
      touchLog: [],
    },
    {
      id: "msk-uao",
      name: "Приют ЮАО",
      shelter: "Приют ЮАО",
      city: "Москва",
      role: "волонтёры",
      channel: "telegram",
      email: "uao-priut@mail.ru",
      phone: "",
      telegram: "https://t.me/uao_priut_chat",
      link: "https://uao-priut.ru/",
      priority: "A",
      status: "no_reply",
      note: "Уже писали. Follow-up email/Telegram.",
      touchLog: [],
    },
    {
      id: "msk-vao",
      name: "Волонтёры Кожухово/Малинки",
      shelter: "Пушистый друг (Малинки)",
      city: "Москва",
      role: "волонтёры",
      channel: "email",
      email: "priutvao@gmail.com",
      phone: "",
      telegram: "https://t.me/koshkamdom",
      link: "https://vao-priut.info/",
      priority: "A",
      status: "cold",
      note: "Удобно писать про пристройство онлайн",
      touchLog: [],
    },
    {
      id: "msk-pechatniki",
      name: "Виктория (Печатники, кошки)",
      shelter: "Печатники",
      city: "Москва",
      role: "пристройство / PR",
      channel: "email",
      email: "vika@bakaeva.net",
      phone: "+7 916 210-10-44",
      telegram: "",
      link: "https://priut-koshek.ru/kontakty/",
      priority: "A",
      status: "cold",
      note: "Кошачий приют, есть email",
      touchLog: [],
    },
    {
      id: "msk-lz",
      name: "Елена (Ласковый зверь)",
      shelter: "Ласковый зверь",
      city: "Москва",
      role: "приют",
      channel: "email",
      email: "shelter@lzmsk.ru",
      phone: "+7 926 600-70-39",
      telegram: "",
      link: "https://lzmsk.ru/",
      priority: "B",
      status: "no_reply",
      note: "Частный. Онлайн-оффер без визита.",
      touchLog: [],
    },
    {
      id: "msk-iskra",
      name: "Елена (Искра)",
      shelter: "Искра",
      city: "Москва",
      role: "волонтёр",
      channel: "phone",
      email: "",
      phone: "+7 915 255-13-23",
      telegram: "",
      link: "https://priutiskra.ru/kontakty/",
      priority: "B",
      status: "no_reply",
      note: "Можно позвонить / написать про онлайн-витрину",
      touchLog: [],
    },
    {
      id: "bry-raisa",
      name: "Раиса (У Раисы)",
      shelter: "У Раисы",
      city: "Брянск",
      role: "домашний приют",
      channel: "vk",
      email: "",
      phone: "+7 910 331-31-29",
      telegram: "",
      link: "https://vk.com/raisa_bryansk",
      priority: "A",
      status: "cold",
      note: "Писать в VK. Маленький приют, часто онлайн.",
      touchLog: [],
    },
    {
      id: "bry-dobrye",
      name: "Добрые руки",
      shelter: "Добрые руки",
      city: "Брянск",
      role: "приют",
      channel: "email",
      email: "stepanovang@semgroup.ru",
      phone: "+7 910 333-33-75",
      telegram: "",
      link: "https://ok.ru/group/52354907242575",
      priority: "A",
      status: "cold",
      note: "Есть email — удобно для первого письма",
      touchLog: [],
    },
    {
      id: "bry-mbu",
      name: "МБУ ДУ (гор. приют)",
      shelter: "МБУ ДУ Брянск",
      city: "Брянск",
      role: "муниципальный приют",
      channel: "phone",
      email: "",
      phone: "+7 900 362-19-79",
      telegram: "",
      link: "https://mbudupriyut32.ru/",
      priority: "B",
      status: "cold",
      note: "Для хозяев также +7 915 536-17-39. Короткое письмо/звонок.",
      touchLog: [],
    },
    {
      id: "bry-nadezhda",
      name: "Подари надежду",
      shelter: "Подари надежду",
      city: "Брянск",
      role: "группа помощи",
      channel: "vk",
      email: "",
      phone: "",
      telegram: "",
      link: "https://vk.com/podarinadejdu",
      priority: "B",
      status: "cold",
      note: "Не приют, но пристраивают — предложить витрину анкет",
      touchLog: [],
    },
  ],
};
