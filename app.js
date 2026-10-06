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

  let animals = loadAnimals();
  const grid = document.getElementById("animal-grid");
  const typeFilter = document.getElementById("filter-type");
  const cityFilter = document.getElementById("filter-city");
  const resultsCount = document.getElementById("results-count");
  const adoptModal = document.getElementById("adopt-modal");
  const adoptForm = document.getElementById("adopt-form");
  const adoptAnimalName = document.getElementById("adopt-animal-name");
  const adoptAnimalId = document.getElementById("adopt-animal-id");
  const donateModal = document.getElementById("donate-modal");
  const donateForm = document.getElementById("donate-form");
  const donateOpen = document.getElementById("donate-open");
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
      list.length === 0
        ? "Никого не нашлось"
        : `Найдено: ${list.length}`;

    if (list.length === 0) {
      grid.innerHTML =
        '<p class="empty-state">Попробуйте сбросить фильтры — питомцы точно есть.</p>';
      return;
    }

    grid.innerHTML = list
      .map(
        (animal) => `
      <article class="animal-card" data-id="${animal.id}" tabindex="0" role="button" aria-label="Открыть заявку на ${animal.name}">
        <div class="animal-photo">
          <img src="${animal.image}" alt="${animal.name}" loading="lazy" width="900" height="1125" />
        </div>
        <div class="animal-meta">
          <h3>${animal.name}</h3>
          <p>${animal.age} · ${animal.shelter} · ${animal.city}</p>
          <p>${animal.temperament}</p>
          <div class="animal-tags">
            <span>${typeLabel[animal.type]}</span>
            <span>Усыновить</span>
          </div>
        </div>
      </article>`
      )
      .join("");
  }

  function findAnimal(id) {
    return animals.find((animal) => animal.id === id);
  }

  function openAdopt(id) {
    const animal = findAnimal(id);
    if (!animal || !adoptModal.showModal) return;
    adoptAnimalId.value = animal.id;
    adoptAnimalName.textContent = `${animal.name} · ${animal.shelter}, ${animal.city}`;
    adoptModal.showModal();
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
    const url = `https://t.me/${TG}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }

  grid.addEventListener("click", (event) => {
    const card = event.target.closest(".animal-card");
    if (!card) return;
    openAdopt(card.dataset.id);
  });

  grid.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" && event.key !== " ") return;
    const card = event.target.closest(".animal-card");
    if (!card) return;
    event.preventDefault();
    openAdopt(card.dataset.id);
  });

  typeFilter.addEventListener("change", render);
  cityFilter.addEventListener("change", render);

  adoptForm.addEventListener("submit", (event) => {
    const submitter = event.submitter;
    if (!submitter || submitter.value === "cancel") return;

    event.preventDefault();
    const data = new FormData(adoptForm);
    const animal = findAnimal(String(data.get("animalId")));
    const payload = {
      animalId: data.get("animalId"),
      animalName: animal?.name || "",
      shelter: animal?.shelter || "",
      name: data.get("name"),
      contact: data.get("contact"),
      message: data.get("message"),
    };
    saveLocal("kdomu_adopt_requests", payload);

    const tgText = [
      "Заявка на усыновление · К дому",
      `Животное: ${payload.animalName} (${payload.shelter})`,
      `Имя: ${payload.name}`,
      `Контакт: ${payload.contact}`,
      payload.message ? `Сообщение: ${payload.message}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    openTelegram(tgText);
    adoptModal.close();
    adoptForm.reset();
    showToast("Заявка готова — отправьте сообщение в Telegram");
  });

  donateOpen.addEventListener("click", () => {
    if (donateModal.showModal) donateModal.showModal();
  });

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
    showToast("Откроется Telegram — отправьте сообщение Ксении");
  });

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
