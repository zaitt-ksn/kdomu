(() => {
  const STORAGE_ANIMALS = "kdomu_animals_v1";
  const TG = "zaitt_ksn";
  const typeLabel = { dog: "Собака", cat: "Кошка" };

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

  function showToast(message) {
    const toast = document.getElementById("toast");
    toast.hidden = false;
    toast.textContent = message;
    toast.classList.add("is-visible");
    clearTimeout(showToast._t);
    showToast._t = setTimeout(() => toast.classList.remove("is-visible"), 2800);
  }

  function openTelegram(text) {
    window.open(
      `https://t.me/${TG}?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer"
    );
  }

  function saveLocal(key, payload) {
    const existing = JSON.parse(localStorage.getItem(key) || "[]");
    existing.push({ ...payload, createdAt: new Date().toISOString() });
    localStorage.setItem(key, JSON.stringify(existing));
  }

  const params = new URLSearchParams(location.search);
  const id = params.get("id");
  const animals = loadAnimals();
  const animal = animals.find((a) => a.id === id);
  const root = document.getElementById("animal-root");

  if (!animal) {
    root.innerHTML = `
      <div class="section-head">
        <h2>Анкету не нашли</h2>
        <p>Возможно, ссылка устарела. Вернитесь в каталог.</p>
        <p style="margin-top:1rem"><a class="btn" href="./index.html#animals">К животным</a></p>
      </div>`;
    return;
  }

  document.title = `${animal.name} — К дому`;
  const shareUrl = location.href;

  root.innerHTML = `
    <a class="back-link" href="./index.html#animals">← К каталогу</a>
    <div class="animal-layout">
      <div class="animal-hero-photo">
        <img src="${animal.image}" alt="${animal.name}" width="900" height="1125" />
      </div>
      <div class="animal-copy">
        <p class="animal-kicker">${typeLabel[animal.type] || ""} · ${animal.city}</p>
        <h1>${animal.name}</h1>
        <p class="animal-sub">${animal.age}${animal.sex ? " · " + animal.sex : ""} · <a href="./shelter.html?id=${encodeURIComponent(animal.shelterId || "")}">${animal.shelter}</a></p>
        <p class="animal-temper">${animal.temperament || ""}</p>
        <p class="animal-desc">${animal.description || ""}</p>
        ${animal.curator ? `<p class="animal-curator">Куратор: ${animal.curator}</p>` : ""}
        <div class="hero-actions">
          <button class="btn" type="button" id="open-adopt">Хочу усыновить</button>
          <button class="btn btn-ghost" type="button" id="open-sponsor">Взять на опеку</button>
        </div>
        <div class="share-row">
          <button class="btn btn-ghost btn-small" type="button" id="copy-link">Скопировать ссылку</button>
          <span class="tiny muted" id="share-hint">${shareUrl}</span>
        </div>
      </div>
    </div>`;

  const adoptModal = document.getElementById("adopt-modal");
  const adoptForm = document.getElementById("adopt-form");
  const sponsorModal = document.getElementById("sponsor-modal");
  const sponsorForm = document.getElementById("sponsor-form");

  document.getElementById("open-adopt").onclick = () => {
    document.getElementById("adopt-animal-id").value = animal.id;
    document.getElementById("adopt-animal-name").textContent =
      `${animal.name} · ${animal.shelter}, ${animal.city}`;
    adoptModal.showModal();
  };

  document.getElementById("open-sponsor").onclick = () => {
    document.getElementById("sponsor-animal-name").textContent =
      `${animal.name} · ежемесячная поддержка`;
    sponsorModal.showModal();
  };

  document.getElementById("copy-link").onclick = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      showToast("Ссылка скопирована");
    } catch (_) {
      showToast("Скопируйте ссылку из строки браузера");
    }
  };

  adoptForm.addEventListener("submit", (event) => {
    const submitter = event.submitter;
    if (!submitter || submitter.value === "cancel") return;
    event.preventDefault();
    const data = new FormData(adoptForm);
    const payload = {
      animalId: animal.id,
      animalName: animal.name,
      shelter: animal.shelter,
      name: data.get("name"),
      contact: data.get("contact"),
      message: data.get("message"),
    };
    saveLocal("kdomu_adopt_requests", payload);
    openTelegram(
      [
        "Заявка на усыновление · К дому",
        `Животное: ${animal.name} (${animal.shelter})`,
        `Ссылка: ${shareUrl}`,
        `Имя: ${payload.name}`,
        `Контакт: ${payload.contact}`,
        payload.message ? `Сообщение: ${payload.message}` : "",
      ]
        .filter(Boolean)
        .join("\n")
    );
    adoptModal.close();
    adoptForm.reset();
    showToast("Откроется Telegram — отправьте заявку");
  });

  sponsorForm.addEventListener("submit", (event) => {
    const submitter = event.submitter;
    if (!submitter || submitter.value === "cancel") return;
    event.preventDefault();
    const data = new FormData(sponsorForm);
    const payload = {
      animalId: animal.id,
      animalName: animal.name,
      amount: Number(data.get("amount")),
      contact: data.get("contact"),
    };
    saveLocal("kdomu_sponsors", payload);
    openTelegram(
      [
        "Опека животного · К дому",
        `Животное: ${animal.name} (${animal.shelter})`,
        `Ссылка: ${shareUrl}`,
        `Сумма в месяц: ${payload.amount} ₽`,
        `Контакт: ${payload.contact}`,
      ].join("\n")
    );
    sponsorModal.close();
    sponsorForm.reset();
    showToast("Откроется Telegram — подтвердите опеку");
  });
})();
