window.KDOMU_CRM_SEED = {
  version: 3,
  settings: {
    todayQueueSize: 6,
    cityFocus: "Москва",
  },
  templates: {
    visit: {
      id: "visit",
      name: "Онлайн-подключение (email)",
      subject: "Бесплатная витрина для приюта · «К дому»",
      body: `Здравствуйте!

Меня зовут Ксения. Делаю сервис «К дому» — сайт, где люди смотрят животных
из приютов и оставляют заявку на усыновление.
Пример: https://zaitt-ksn.github.io/kdomu/for-shelters.html

Сейчас пилот в Москве. Всё онлайн: визит не нужен.
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
    private: {
      id: "private",
      name: "Частный приют / партнёрство",
      subject: "Партнёрство по заявкам · «К дому»",
      body: `Здравствуйте!

Ксения, сервис «К дому». Делаю бесплатную витрину животных + заявки
на усыновление напрямую вам.
https://zaitt-ksn.github.io/kdomu/for-shelters.html

Деньги через меня не идут — только заявки и трафик к вашим анкетам.
Пилот в Москве, подключение онлайн за день.

Готовы на 10 карточек на пробу? Могу собрать черновик с сайта/VK.
Telegram @zaitt_ksn · +7 953 293-59-63`,
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
      name: "Пинг VK / WhatsApp",
      subject: "Ксения · бесплатная витрина животных",
      body: `Здравствуйте! Это Ксения, @zaitt_ksn.
Делаю бесплатную онлайн-витрину животных «К дому» для приютов Москвы.
Могу разместить 10 ваших анкет и присылать заявки — без визита и без оплаты.
Удобно ответить сюда?
https://zaitt-ksn.github.io/kdomu/for-shelters.html`,
    },
    call_wa: {
      id: "call_wa",
      name: "WhatsApp перед звонком",
      subject: "WhatsApp · перед звонком",
      body: `Здравствуйте! Ксения, сервис «К дому».
Делаю бесплатную онлайн-витрину животных для приютов Москвы.
Можно коротко позвонить на 1–2 минуты про 10 анкет — или удобнее переписка?
Сайт: https://zaitt-ksn.github.io/kdomu/for-shelters.html
Telegram @zaitt_ksn`,
    },
    after_call: {
      id: "after_call",
      name: "После звонка · дубль",
      subject: "После звонка",
      body: `Ксения, «К дому» — как договорились на звонке.
Сайт для приютов: https://zaitt-ksn.github.io/kdomu/for-shelters.html
Жду 10 анкет или ссылку на ваши посты — соберу черновик сама.
Telegram @zaitt_ksn · +7 953 293-59-63`,
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
    first: {
      id: "first",
      name: "Первое письмо (алиас)",
      subject: "Пилот «К дому» — бесплатная витрина онлайн",
      body: `Здравствуйте!

Меня зовут Ксения. Я делаю бесплатный сервис «К дому» — сайт, где люди
смотрят животных из приютов и оставляют заявку на усыновление.
https://zaitt-ksn.github.io/kdomu/for-shelters.html

Сейчас пилот в Москве, всё удалённо.

Можно 3 коротких вопроса?
1) Что больнее: мало заявок, хаос с волонтёрами или донаты?
2) Чем уже пользуетесь: сайт, VK/Telegram, «Друг для Друга», МосПитомец, Excel?
3) Готовы прислать 10–20 карточек онлайн?

Это бесплатно, без обязательств.
Telegram @zaitt_ksn · +7 953 293-59-63
Спасибо!`,
    },
  },
  contacts: [
    // ——— Москва A: email ———
    {
      id: "msk-izpriuta",
      name: "Волонтёры Бирюлёво (izpriuta)",
      shelter: "Бирюлёво",
      city: "Москва",
      role: "волонтёры",
      channel: "email",
      email: "sobaka@izpriuta.ru",
      phone: "",
      telegram: "https://t.me/izpriuta_info",
      link: "https://www.izpriuta.ru/",
      priority: "A",
      status: "cold",
      note: "Письмо · сильный каталог",
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
      note: "Follow-up · уже писали",
      touchLog: [],
    },
    {
      id: "msk-uao",
      name: "Приют ЮАО",
      shelter: "ЮАО",
      city: "Москва",
      role: "волонтёры",
      channel: "email",
      email: "uao-priut@mail.ru",
      phone: "",
      telegram: "https://t.me/uao_priut_chat",
      link: "https://uao-priut.ru/",
      priority: "A",
      status: "no_reply",
      note: "Follow-up email/Telegram",
      touchLog: [],
    },
    {
      id: "msk-vao",
      name: "Волонтёры ВАО / Кожухово",
      shelter: "ВАО / Кожухово",
      city: "Москва",
      role: "волонтёры",
      channel: "email",
      email: "priutvao@gmail.com",
      phone: "+7 495 772-47-54",
      telegram: "",
      link: "https://vao-priut.info/",
      priority: "A",
      status: "cold",
      note: "Письмо · пристройство",
      touchLog: [],
    },
    {
      id: "msk-pechatniki",
      name: "Виктория (Печатники, кошки)",
      shelter: "Печатники",
      city: "Москва",
      role: "пристройство",
      channel: "email",
      email: "vika@bakaeva.net",
      phone: "+7 916 210-10-44",
      telegram: "",
      link: "https://priut-koshek.ru/kontakty/",
      priority: "A",
      status: "cold",
      note: "Письмо · только кошки",
      touchLog: [],
    },
    {
      id: "msk-zoorassvet",
      name: "Зоорассвет (волонтёры)",
      shelter: "Зоорассвет",
      city: "Москва",
      role: "волонтёры",
      channel: "email",
      email: "zoorassvet@gmail.com",
      phone: "+7 909 918-59-23",
      telegram: "",
      link: "https://vk.com/club677899",
      priority: "A",
      status: "cold",
      note: "Письмо · собаки +7 985 454-53-88 Елена",
      touchLog: [],
    },
    {
      id: "msk-redpine",
      name: "Красная Сосна",
      shelter: "Красная Сосна",
      city: "Москва",
      role: "волонтёры",
      channel: "email",
      email: "redpine@bk.ru",
      phone: "+7 985 435-32-55",
      telegram: "https://t.me/priutks",
      link: "https://priut-ks.ru/",
      priority: "A",
      status: "cold",
      note: "Письмо / TG @priutks",
      touchLog: [],
    },
    {
      id: "msk-iskra",
      name: "Елена (Искра)",
      shelter: "Искра",
      city: "Москва",
      role: "волонтёр",
      channel: "email",
      email: "iskra-shelter@yandex.ru",
      phone: "+7 915 255-13-23",
      telegram: "",
      link: "https://priutiskra.ru/kontakty/",
      priority: "A",
      status: "no_reply",
      note: "Письмо + звонок · также iskra.shelter@gmail.com",
      touchLog: [],
    },
    {
      id: "msk-solntsevo",
      name: "Солнцево (волонтёры)",
      shelter: "Солнцево",
      city: "Москва",
      role: "волонтёры",
      channel: "email",
      email: "info@sundogshelter.ru",
      phone: "+7 905 500-37-66",
      telegram: "",
      link: "https://www.sundogshelter.ru/",
      priority: "A",
      status: "cold",
      note: "Письмо · Дарья +7 905 500-37-66",
      touchLog: [],
    },
    {
      id: "msk-dubovaya",
      name: "Дубовая роща",
      shelter: "Дубовая роща",
      city: "Москва",
      role: "волонтёры",
      channel: "email",
      email: "dubovayaroscha@gmail.com",
      phone: "+7 926 607-18-53",
      telegram: "",
      link: "https://dorinvest.ru/",
      priority: "A",
      status: "cold",
      note: "Письмо / звонок",
      touchLog: [],
    },
    {
      id: "msk-lz",
      name: "Елена (Ласковый зверь)",
      shelter: "Ласковый зверь",
      city: "Москва",
      role: "частный приют",
      channel: "email",
      email: "shelter@lzmsk.ru",
      phone: "+7 926 600-70-39",
      telegram: "",
      link: "https://lzmsk.ru/",
      priority: "A",
      status: "no_reply",
      note: "Шаблон private · follow-up",
      touchLog: [],
    },
    {
      id: "msk-murkosha",
      name: "Муркоша (PR)",
      shelter: "Муркоша",
      city: "Москва",
      role: "частный · PR",
      channel: "email",
      email: "pr@murkosha.ru",
      phone: "+7 495 135-51-03",
      telegram: "",
      link: "https://murkosha.ru/",
      priority: "A",
      status: "cold",
      note: "Шаблон private · общие вопросы info@murkosha.ru",
      touchLog: [],
    },
    // ——— Москва B: звонок / WhatsApp ———
    {
      id: "msk-tinao",
      name: "ТиНАО / Малинки",
      shelter: "ТиНАО (Малинки)",
      city: "Москва",
      role: "волонтёры",
      channel: "phone",
      email: "",
      phone: "+7 495 215-57-41",
      telegram: "https://t.me/priut_tinao",
      link: "https://priut-tinao.ru/kontakty/",
      priority: "A",
      status: "cold",
      note: "Звонок · кошки +7 926 325-66-01 · VK priut_tinao",
      touchLog: [],
    },
    {
      id: "msk-zelenograd",
      name: "Наталья (Зеленоград)",
      shelter: "Зеленоград",
      city: "Москва",
      role: "социализация / волонтёры",
      channel: "phone",
      email: "",
      phone: "+7 985 029-83-65",
      telegram: "https://t.me/zel_priut",
      link: "https://vk.com/club60479994",
      priority: "A",
      status: "cold",
      note: "Звонок / VK · админ +7 909 918-59-24",
      touchLog: [],
    },
    {
      id: "msk-kurkino",
      name: "Ирина (Большой Машкинский / Куркино)",
      shelter: "Большой Машкинский (Куркино)",
      city: "Москва",
      role: "волонтёры",
      channel: "whatsapp",
      email: "",
      phone: "+7 926 434-24-40",
      telegram: "",
      link: "https://www.himki-priut.ru/contacts",
      priority: "A",
      status: "cold",
      note: "Сначала WhatsApp (call_wa) · также Дарья +7 967 025-05-49",
      touchLog: [],
    },
    {
      id: "msk-malyy",
      name: "Малый (Машкинское)",
      shelter: "Малый",
      city: "Москва",
      role: "муниципальный",
      channel: "phone",
      email: "",
      phone: "+7 926 434-24-40",
      telegram: "",
      link: "https://pets.mos.ru/volunteer/",
      priority: "B",
      status: "cold",
      note: "Мало онлайн · через волонтёров Куркино",
      touchLog: [],
    },
    {
      id: "msk-scherbinka",
      name: "Щербинка (Собака ЮЗАО)",
      shelter: "Щербинка",
      city: "Москва",
      role: "волонтёры",
      channel: "whatsapp",
      email: "",
      phone: "+7 905 552-31-95",
      telegram: "https://t.me/sobakauzao",
      link: "https://sobaka-uzao.ru/kontakty",
      priority: "A",
      status: "cold",
      note: "WhatsApp · также +7 925 494-64-60",
      touchLog: [],
    },
    // ——— Брянск ———
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
      priority: "B",
      status: "cold",
      note: "VK · после Москвы",
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
      priority: "B",
      status: "cold",
      note: "Email · после Москвы",
      touchLog: [],
    },
    {
      id: "bry-mbu",
      name: "МБУ ДУ (гор. приют)",
      shelter: "МБУ ДУ Брянск",
      city: "Брянск",
      role: "муниципальный",
      channel: "phone",
      email: "",
      phone: "+7 900 362-19-79",
      telegram: "",
      link: "https://mbudupriyut32.ru/",
      priority: "C",
      status: "cold",
      note: "Звонок коротко",
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
      priority: "C",
      status: "cold",
      note: "VK · витрина анкет",
      touchLog: [],
    },
  ],
};
