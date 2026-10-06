(() => {
  const S = window.KdomuShared;

  const animals = S.loadAnimals();
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
  const volunteerOpen = document.getElementById("volunteer-open");
  const volunteerModal = document.getElementById("volunteer-modal");
  const volunteerForm = document.getElementById("volunteer-form");
  const sheltersGrid = document.getElementById("shelters-grid");
  const toast = document.getElementById("toast");
  const header = document.querySelector(".site-header");

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

    grid.innerHTML = list.map((animal) => S.cardHtml(animal)).join("");
  }

  function renderShelters() {
    if (!sheltersGrid) return;
    const list = window.KDOMU_SHELTERS || [];
    sheltersGrid.innerHTML = list
      .map((s) => {
        const count = S.animalsForShelter(s.id).length;
        return `
        <a class="shelter-card" href="./shelter.html?id=${encodeURIComponent(s.id)}">
          <p class="animal-kicker">${s.city}</p>
          <h3>${s.name}</h3>
          <p>${s.type}</p>
          <p class="tiny muted">На витрине: ${count}</p>
        </a>`;
      })
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

  typeFilter.addEventListener("change", render);
  cityFilter.addEventListener("change", render);

  if (donateOpen) {
    donateOpen.addEventListener("click", () => donateModal.showModal());
  }
  if (sponsorOpen) {
    sponsorOpen.addEventListener("click", () => sponsorModal.showModal());
  }
  if (volunteerOpen) {
    volunteerOpen.addEventListener("click", () => volunteerModal.showModal());
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
      S.saveLocal("kdomu_donations", payload);
      S.openTelegram(
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
      S.saveLocal("kdomu_sponsors", payload);
      S.openTelegram(
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

  if (volunteerForm) {
    volunteerForm.addEventListener("submit", (event) => {
      const submitter = event.submitter;
      if (!submitter || submitter.value === "cancel") return;
      event.preventDefault();
      const data = new FormData(volunteerForm);
      const payload = {
        name: data.get("name"),
        contact: data.get("contact"),
        help: data.get("help"),
        when: data.get("when"),
      };
      S.saveLocal("kdomu_volunteers", payload);
      S.openTelegram(
        [
          "Хочу стать волонтёром · К дому",
          `Имя: ${payload.name}`,
          `Контакт: ${payload.contact}`,
          `Чем помочь: ${payload.help}`,
          payload.when ? `Когда: ${payload.when}` : "",
        ]
          .filter(Boolean)
          .join("\n")
      );
      volunteerModal.close();
      volunteerForm.reset();
      showToast("Откроется Telegram — отправьте заявку");
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
  renderShelters();
})();
