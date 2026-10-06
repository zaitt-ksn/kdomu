window.KDOMU_SHELTERS = [
  {
    id: "nekrasovka",
    name: "Некрасовка",
    city: "Москва",
    type: "Муниципальный приют · волонтёры",
    about:
      "Московский приют. На витрине «К дому» — животные, которые ждут дом.",
    link: "https://nekrasovka-priut.ru/",
    contact: "margaritkaag@gmail.com",
  },
  {
    id: "uao",
    name: "ЮАО",
    city: "Москва",
    type: "Муниципальный приют",
    about:
      "Приют Южного административного округа Москвы.",
    link: "https://uao-priut.ru/",
    contact: "uao-priut@mail.ru",
  },
  {
    id: "iskra",
    name: "Искра",
    city: "Москва",
    type: "Муниципальный приют · волонтёры",
    about:
      "Волонтёры приюта «Искра» помогают собакам и кошкам найти дом.",
    link: "https://priutiskra.ru/",
    contact: "+7 915 255-13-23",
  },
  {
    id: "laskovyy-zver",
    name: "Ласковый зверь",
    city: "Москва",
    type: "Частный приют",
    about:
      "Частный приют для кошек и собак.",
    link: "https://lzmsk.ru/",
    contact: "shelter@lzmsk.ru",
  },
];

window.KdomuShared = {
  TG: "zaitt_ksn",
  STORAGE_ANIMALS: "kdomu_animals_v1",
  typeLabel: { dog: "Собака", cat: "Кошка" },

  loadAnimals() {
    try {
      const raw = localStorage.getItem(this.STORAGE_ANIMALS);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed) && parsed.length) return parsed;
      }
    } catch (_) {}
    return window.KDOMU_ANIMALS || [];
  },

  shelterById(id) {
    return (window.KDOMU_SHELTERS || []).find((s) => s.id === id);
  },

  shelterByName(name) {
    return (window.KDOMU_SHELTERS || []).find((s) => s.name === name);
  },

  animalsForShelter(shelterId) {
    const shelter = this.shelterById(shelterId);
    if (!shelter) return [];
    return this.loadAnimals().filter(
      (a) => a.shelterId === shelterId || a.shelter === shelter.name
    );
  },

  openTelegram(text) {
    window.open(
      `https://t.me/${this.TG}?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer"
    );
  },

  saveLocal(key, payload) {
    const existing = JSON.parse(localStorage.getItem(key) || "[]");
    existing.push({ ...payload, createdAt: new Date().toISOString() });
    localStorage.setItem(key, JSON.stringify(existing));
  },

  cardHtml(animal) {
    return `
      <a class="animal-card" href="./animal.html?id=${encodeURIComponent(animal.id)}" aria-label="Открыть анкету ${animal.name}">
        <div class="animal-photo">
          <img src="${animal.image}" alt="${animal.name}" loading="lazy" width="900" height="1125" />
        </div>
        <div class="animal-meta">
          <h3>${animal.name}</h3>
          <p>${animal.age} · ${animal.shelter} · ${animal.city}</p>
          <p>${animal.temperament || ""}</p>
          <div class="animal-tags">
            <span>${this.typeLabel[animal.type] || ""}</span>
            <span>Смотреть анкету</span>
          </div>
        </div>
      </a>`;
  },

  initNav() {
    const header = document.querySelector(".site-header");
    const toggle = document.querySelector(".nav-toggle");
    const nav = document.querySelector(".nav");
    if (!header || !toggle || !nav) return;

    const setOpen = (open) => {
      header.classList.toggle("nav-open", open);
      document.body.classList.toggle("nav-lock", open);
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.setAttribute("aria-label", open ? "Закрыть меню" : "Открыть меню");
    };

    toggle.addEventListener("click", () => {
      setOpen(!header.classList.contains("nav-open"));
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => setOpen(false));
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") setOpen(false);
    });

    window.addEventListener(
      "resize",
      () => {
        if (window.innerWidth >= 980) setOpen(false);
      },
      { passive: true }
    );
  },
};

document.addEventListener("DOMContentLoaded", () => {
  window.KdomuShared.initNav();
});
