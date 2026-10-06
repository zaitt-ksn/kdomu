(() => {
  const STORAGE_ANIMALS = "kdomu_animals_v1";
  const TG = "zaitt_ksn";

  function loadAnimals() {
    try {
      const raw = localStorage.getItem(STORAGE_ANIMALS);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed) && parsed.length) return parsed;
      }
    } catch (_) {}
    return window.KDOMU_ANIMALS || [];
  }

  const animals = loadAnimals();
  const grid = document.getElementById("animal-grid");
  const typeFilter = document.getElementById("filter-type");
  const cityFilter = document.getElementById("filter-city");
  const resultsCount = document.getElementById("results-count");
  const donateModal = document.getElementById("donate-modal");
  const donateForm = document.getElementById("donate-form");
  const donateOpen = document.getElementById("donate-open");
  const sponsorOpen = document.getElementById("sponsor-open");
  const sponsorModal = document.getElementById("sponsor-modal");
  const sponsorForm = document.getElementById("sponsor-form");
  const toast = document.getElementById("toast");
  const header = document.querySelector(".site-header");

  const typeLabel = { dog: "Собака", cat: "Кошка" };

  function uniqueCities() {
    return [...new Set(animals.map((a) => a.city))].sort((a, b) =>
      a.localeCompare(b, "ru")
    );
  }

  function fillCities() {
    cityFilter.innerHTML = '<option value="all">Все города</option>';
    uniqueCities().forEach((city) => {
      const option = document.createElement("option");
      option.value = city;
      option.textContent = city;
      cityFilter.appendChild(option);
    });
  }

  function filteredAnimals() {
    const type = typeFilter.value;
    const city = cityFilter.value;
    return animals.filter((animal) => {
      const typeOk = type === "all" || animal.type === type;
      const cityOk = city === "all" || animal.city === city;
      return typeOk && cityOk;
    });
  }

  function render() {
    const list = filteredAnimals();
    resultsCount.textContent =
      list.length === 0 ? "Никого не нашлось" : `Найдено: ${list.length}`;

    if (list.length === 0) {
      grid.innerHTML =
        '<p class="empty-state">Попробуйте сбросить фильтры — питомцы точно есть.</p>';
      return;
    }

    grid.innerHTML = list
      .map(
        (animal) => `
      <a class="animal-card" href="./animal.html?id=${encodeURIComponent(animal.id)}" aria-label="Открыть анкету ${animal.name}">
        <div class="animal-photo">
          <img src="${animal.image}" alt="${animal.name}" loading="lazy" width="900" height="1125" />
        </div>
        <div class="animal-meta">
          <h3>${animal.name}</h3>
          <p>${animal.age} · ${animal.shelter} · ${animal.city}</p>
          <p>${animal.temperament}</p>
          <div class="animal-tags">
            <span>${typeLabel[animal.type]}</span>
            <span>Смотреть анкету</span>
          </div>
        </div>
      </a>`
      )
      .join("");
  }

  function showToast(message) {
    toast.hidden = false;
    toast.textContent = message;
    toast.classList.add("is-visible");
    window.clearTimeout(showToast._timer);
    showToast._timer = window.setTimeout(() => {
      toast.classList.remove("is-visible");
    }, 2800);
  }

  function saveLocal(key, payload) {
    const existing = JSON.parse(localStorage.getItem(key) || "[]");
    existing.push({ ...payload, createdAt: new Date().toISOString() });
    localStorage.setItem(key, JSON.stringify(existing));
  }

  function openTelegram(text) {
    window.open(
      `https://t.me/${TG}?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer"
    );
  }

  typeFilter.addEventListener("change", render);
  cityFilter.addEventListener("change", render);

  if (donateOpen) {
    donateOpen.addEventListener("click", () => {
      if (donateModal.showModal) donateModal.showModal();
    });
  }

  if (sponsorOpen) {
    sponsorOpen.addEventListener("click", () => {
      if (sponsorModal.showModal) sponsorModal.showModal();
    });
  }

  if (donateForm) {
    donateForm.addEventListener("submit", (event) => {
      const submitter = event.submitter;
      if (!submitter || submitter.value === "cancel") return;
      event.preventDefault();
      const data = new FormData(donateForm);
      const payload = {
        amount: Number(data.get("amount")),
        contact: data.get("contact"),
      };
      saveLocal("kdomu_donations", payload);
      openTelegram(
        `Хочу помочь приюту через «К дому»\nСумма: ${payload.amount} ₽\nКонтакт: ${payload.contact}`
      );
      donateModal.close();
      donateForm.reset();
      showToast("Откроется Telegram — отправьте сообщение");
    });
  }

  if (sponsorForm) {
    sponsorForm.addEventListener("submit", (event) => {
      const submitter = event.submitter;
      if (!submitter || submitter.value === "cancel") return;
      event.preventDefault();
      const data = new FormData(sponsorForm);
      const payload = {
        animalHint: data.get("animalHint") || "",
        amount: Number(data.get("amount")),
        contact: data.get("contact"),
      };
      saveLocal("kdomu_sponsors", payload);
      openTelegram(
        [
          "Хочу взять животное на опеку · К дому",
          payload.animalHint ? `Кого: ${payload.animalHint}` : "Кого: подскажите сами",
          `Сумма в месяц: ${payload.amount} ₽`,
          `Контакт: ${payload.contact}`,
        ].join("\n")
      );
      sponsorModal.close();
      sponsorForm.reset();
      showToast("Откроется Telegram — подтвердите опеку");
    });
  }

  window.addEventListener(
    "scroll",
    () => {
      header.classList.toggle("is-scrolled", window.scrollY > 12);
    },
    { passive: true }
  );

  fillCities();
  render();
})();
