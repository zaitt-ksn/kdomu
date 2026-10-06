window.KDOMU_CRM_SEED = {
  version: 1,
  settings: {
    todayQueueSize: 4,
    cityFocus: "Москва",
  },
  templates: {
    visit: {
      id: "visit",
      name: "Визит волонтёром (Москва)",
      subject: "Могу приехать волонтёром · «К дому»",
      body: `Здравствуйте!

Меня зовут Ксения. Делаю бесплатный сервис «К дому» — каталог животных
из приютов и заявки на усыновление.

Хочу сначала помочь руками, а не «продавать идею».
Могу приехать волонтёром в удобный день (выгул / уборка / что нужно).

Если после этого будет ок — возьму 10–20 карточек животных на сайт
и буду присылать вам заявки. Бесплатно, без обязательств.

Telegram @zaitt_ksn · +7 953 293-59-63
Какой день вам удобен?`,
    },
    followup: {
      id: "followup",
      name: "Follow-up (прочитали, молчат)",
      subject: "Ксения ещё раз · «К дому»",
      body: `Ксения ещё раз 👋
Писала про бесплатный пилот «К дому» — витрина животных + заявки вам в Telegram/почту.

Если сейчас не до этого — просто напишите «не сейчас».
Если ок — могу приехать волонтёром и/или взять 10 анкет в каталог бесплатно.`,
    },
    ping: {
      id: "ping",
      name: "Короткий пинг (не прочитали)",
      subject: "Ксения · бесплатная витрина животных",
      body: `Здравствуйте! Это Ксения, @zaitt_ksn.
Делаю бесплатную витрину животных из приютов «К дому».
Могу приехать помочь как волонтёр и разместить 10 анкет — заявки буду присылать вам.
Удобно ответить сюда или по телефону +7 953 293-59-63?`,
    },
    first: {
      id: "first",
      name: "Первое письмо (новый контакт)",
      subject: "Пилот «К дому» — бесплатная витрина + могу приехать",
      body: `Здравствуйте!

Меня зовут Ксения. Я делаю бесплатный сервис «К дому» — сайт, где люди
смотрят животных из приютов и оставляют заявку на усыновление.

Сейчас пилот в Москве. Хочу понять вашу реальную боль и помочь,
а не «продать софт».

Можно 3 коротких вопроса?
1) Что больнее: мало заявок, хаос с волонтёрами или донаты?
2) Чем уже пользуетесь: сайт, VK/Telegram, «Друг для Друга», МосПитомец, Excel?
3) Готовы дать 10–20 карточек или принять меня волонтёром на 1 визит?

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
      pain: "",
      tools: "",
      cardsCount: 0,
      note: "Уже писали. Следующий шаг: follow-up + визит.",
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
      pain: "",
      tools: "",
      cardsCount: 0,
      note: "Уже писали. Follow-up в чат или email.",
      touchLog: [],
    },
    {
      id: "msk-lz",
      name: "Елена (Ласковый зверь)",
      shelter: "Ласковый зверь",
      city: "Москва",
      role: "приют",
      channel: "telegram",
      email: "shelter@lzmsk.ru",
      phone: "+7 926 600-70-39",
      telegram: "",
      link: "https://lzmsk.ru/",
      priority: "A",
      status: "no_reply",
      pain: "",
      tools: "",
      cardsCount: 0,
      note: "Частный приют. Хороший кандидат на личный визит.",
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
      priority: "A",
      status: "no_reply",
      pain: "",
      tools: "",
      cardsCount: 0,
      note: "Лучше позвонить и предложить волонтёрский день.",
      touchLog: [],
    },
    {
      id: "ekb-leopold",
      name: "Кот Леопольд",
      shelter: "Кот Леопольд",
      city: "Екатеринбург",
      role: "владелец приюта",
      channel: "telegram",
      email: "",
      phone: "+7 908 633-70-73",
      telegram: "https://t.me/KLeopold_ekb",
      link: "https://vk.com/leopold_ekb",
      priority: "C",
      status: "paused",
      pain: "",
      tools: "",
      cardsCount: 0,
      note: "ЕКБ на паузе — без личных визитов.",
      touchLog: [],
    },
    {
      id: "ekb-zoo",
      name: "ЗООзащита",
      shelter: "ЗООзащита",
      city: "Екатеринбург",
      role: "фонд",
      channel: "email",
      email: "zooekb69@gmail.com",
      phone: "+7 963 032-55-03",
      telegram: "",
      link: "https://zooekb.ru/",
      priority: "C",
      status: "paused",
      pain: "",
      tools: "",
      cardsCount: 0,
      note: "ЕКБ на паузе.",
      touchLog: [],
    },
    {
      id: "ekb-mars",
      name: "Марс",
      shelter: "Марс",
      city: "Екатеринбург",
      role: "приют",
      channel: "telegram",
      email: "",
      phone: "+7 908 911-10-09",
      telegram: "https://t.me/PriyutMars",
      link: "https://t.me/PriyutMars",
      priority: "C",
      status: "paused",
      pain: "",
      tools: "",
      cardsCount: 0,
      note: "ЕКБ на паузе.",
      touchLog: [],
    },
    {
      id: "ekb-crg",
      name: "ЦРЖ УрГАУ",
      shelter: "ЦРЖ УрГАУ",
      city: "Екатеринбург",
      role: "центр реабилитации",
      channel: "phone",
      email: "",
      phone: "+7 912 667-00-70",
      telegram: "",
      link: "https://www.crg-ekb.ru/",
      priority: "C",
      status: "paused",
      pain: "",
      tools: "",
      cardsCount: 0,
      note: "ЕКБ на паузе.",
      touchLog: [],
    },
    {
      id: "ekb-heart",
      name: "Кошачье Сердце",
      shelter: "Кошачье Сердце",
      city: "Екатеринбург",
      role: "временный дом",
      channel: "vk",
      email: "",
      phone: "",
      telegram: "",
      link: "https://vk.com/club86836872",
      priority: "C",
      status: "paused",
      pain: "",
      tools: "",
      cardsCount: 0,
      note: "ЕКБ на паузе.",
      touchLog: [],
    },
  ],
};
