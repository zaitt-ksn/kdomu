window.KDOMU_CRM_SEED = {
  version: 3,
  settings: {
    todayQueueSize: 6,
    cityFocus: "Москва",
  },
  templates: {
    visit: {
      id: "visit",
      name: "Главное письмо",
      subject: "«К дому» — помощь приюту с заявками · бесплатный пилот",
      body: `Здравствуйте!

Меня зовут Ксения. Я делаю сервис «К дому» — чтобы животные из приютов
чаще находили дом, а вам было чуть проще принимать помощь людей.
https://zaitt-ksn.github.io/kdomu/for-shelters.html

Зачем я этим занимаюсь
Мне близка тема бездомных животных: слишком много из них остаются
незамеченными, хотя рядом есть люди, готовые взять или помочь.
Мне важно, чтобы конкретные собаки и кошки чаще уезжали домой —
а заявки и помощь доходили до вас напрямую, без посредника.

Зачем это может быть полезно вам
Не взамен сайта, VK или МосПитомца — рядом с ними.
Вашу страницу чаще видят те, кто вас уже знает. «К дому» — для людей,
которые ищут питомца или способ помочь и оставляют короткую заявку вам.

Что уже есть (пилот в Москве, бесплатно)
• витрина животных и страница приюта
• заявки на усыновление — вам в почту или Telegram
• разовая помощь и опека — перевод сразу на ваши реквизиты
• календарь волонтёров

Что планирую дальше — по мере живых партнёров
умный подбор; запросы нужд (корм, перевозка, передержка);
простой кабинет; сценарий «нашёл животное на улице».

Визит не нужен. Могу сама собрать 10 черновиков анкет по вашему сайту
или VK — вам только подтвердить.

Если откликнется — буду благодарна за 10 анкет на пробу
или за ответ «не сейчас».

С уважением,
Ксения
@zaitt_ksn · +7 953 293-59-63`,
    },
    private: {
      id: "private",
      name: "Частный приют",
      subject: "О партнёрстве · «К дому»",
      body: `Здравствуйте!

Меня зовут Ксения. Делаю «К дому» из простой причины: хочу, чтобы больше
животных находили дом, а приютам было легче принимать заявки и помощь
людей — без посредника на переводах.
https://zaitt-ksn.github.io/kdomu/for-shelters.html

Предлагаю не замену вашему сайту, а дополнительный канал:
заявки вам, опека и донаты — сразу на ваши реквизиты, слоты волонтёров.
В планах — подбор, запросы нужд, кабинет.

Пилот в Москве, бесплатно. Готовы на 10 карточек на пробу?
Могу собрать черновик с сайта или VK.

С уважением,
Ксения · @zaitt_ksn · +7 953 293-59-63`,
    },
    followup: {
      id: "followup",
      name: "Follow-up",
      subject: "Ксения · «К дому»",
      body: `Здравствуйте, это Ксения ещё раз.

Писала про «К дому»: рядом с вашим сайтом — заявки, помощь сразу вам
и волонтёры. Делаю это, чтобы животным было проще найти дом,
а вам — принимать отклики без лишнего шума.

Если сейчас не до этого — просто напишите «не сейчас».
Если можно — 10 анкет или разрешение собрать их с ваших постов.

С уважением, Ксения · @zaitt_ksn`,
    },
    ping: {
      id: "ping",
      name: "Пинг VK / WhatsApp",
      subject: "Ксения · «К дому»",
      body: `Здравствуйте! Ксения, @zaitt_ksn.

Делаю «К дому», чтобы приютские животные чаще находили дом,
а заявки и помощь не терялись. Не вместо сайта — рядом.
Могу бесплатно выложить 10 анкет (соберу сама с постов).
https://zaitt-ksn.github.io/kdomu/for-shelters.html

Удобно ответить сюда?`,
    },
    call_wa: {
      id: "call_wa",
      name: "WhatsApp перед звонком",
      subject: "WhatsApp · перед звонком",
      body: `Здравствуйте! Меня зовут Ксения, сервис «К дому».

Хочу коротко рассказать про бесплатную витрину для приютов Москвы —
чтобы животным было проще найти дом. Можно 1–2 минуты на звонок
или удобнее переписка?

https://zaitt-ksn.github.io/kdomu/for-shelters.html
С уважением, @zaitt_ksn`,
    },
    cards: {
      id: "cards",
      name: "После «да»",
      subject: "Что нужно для карточек",
      body: `Спасибо большое!

Для карточки достаточно:
— имя, вид, возраст, пол
— характер в одном предложении
— 1–3 фото
— контакт куратора для заявок

Могу сама набросать по вашему VK или сайту и прислать на подтверждение.
Куда удобнее слать заявки: почта, Telegram или WhatsApp?

С уважением, Ксения`,
    },
    first: {
      id: "first",
      name: "Короткое письмо",
      subject: "Ещё один спокойный канал заявок · «К дому»",
      body: `Здравствуйте! Меня зовут Ксения.

Делаю «К дому», потому что хочу, чтобы у приютских животных было больше
шансов быть увиденными — а у вас меньше хаоса в заявках и помощи.
https://zaitt-ksn.github.io/kdomu/for-shelters.html

Не вместо вашего сайта или МосПитомца — рядом:
витрина, заявки вам, донаты сразу на ваши реквизиты, волонтёры.
Дальше — подбор, нужды приюта, кабинет.

Пилот в Москве, бесплатно, без визита.
Могу собрать 10 анкет с ваших постов — вам только подтвердить.

Если удобно — ответьте сюда или в Telegram @zaitt_ksn.
С уважением, Ксения · +7 953 293-59-63`,
    },
    after_call: {
      id: "after_call",
      name: "После звонка",
      subject: "После звонка",
      body: `Ксения, «К дому» — как говорили.

Рядом с вашим сайтом: заявки вам, помощь сразу на ваши реквизиты,
волонтёры. Делаю это, чтобы животным было проще найти дом.

https://zaitt-ksn.github.io/kdomu/for-shelters.html
Жду 10 анкет или ссылку на посты — соберу черновик сама.

С уважением, @zaitt_ksn · +7 953 293-59-63`,
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
