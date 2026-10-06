(() => {
  const S = window.KdomuShared;
  const Slots = window.KdomuSlots;
  let slots = Slots.load();

  const listEl = document.getElementById("slot-list");
  const countEl = document.getElementById("slots-count");
  const filterShelter = document.getElementById("filter-shelter");
  const filterType = document.getElementById("filter-type");
  const filterWhen = document.getElementById("filter-when");
  const modal = document.getElementById("signup-modal");
  const form = document.getElementById("signup-form");
  const lead = document.getElementById("signup-lead");
  const slotIdInput = document.getElementById("signup-slot-id");
  const toast = document.getElementById("toast");

  function showToast(msg) {
    toast.hidden = false;
    toast.textContent = msg;
    toast.classList.add("is-visible");
    clearTimeout(showToast._t);
    showToast._t = setTimeout(() => toast.classList.remove("is-visible"), 2500);
  }

  function fillFilters() {
    (window.KDOMU_SHELTERS || []).forEach((s) => {
      const o = document.createElement("option");
      o.value = s.id;
      o.textContent = s.name;
      filterShelter.appendChild(o);
    });
    (window.KDOMU_SLOT_TYPES || []).forEach((t) => {
      const o = document.createElement("option");
      o.value = t.id;
      o.textContent = t.label;
      filterType.appendChild(o);
    });
  }

  function filtered() {
    const today = new Date().toISOString().slice(0, 10);
    return slots
      .filter((slot) => {
        if (filterShelter.value !== "all" && slot.shelterId !== filterShelter.value)
          return false;
        if (filterType.value !== "all" && slot.type !== filterType.value) return false;
        if (filterWhen.value === "today" && slot.date !== today) return false;
        if (filterWhen.value === "weekend") {
          const day = new Date(slot.date + "T12:00:00").getDay();
          if (day !== 0 && day !== 6) return false;
        }
        return slot.date >= today;
      })
      .sort((a, b) =>
        a.date === b.date ? a.time.localeCompare(b.time) : a.date.localeCompare(b.date)
      );
  }

  function render() {
    const list = filtered();
    countEl.textContent = list.length ? `Слотов: ${list.length}` : "Нет слотов";

    if (!list.length) {
      listEl.innerHTML =
        '<p class="empty-state">По этим фильтрам пусто. Сбросьте фильтры или добавьте слоты в админке.</p>';
      return;
    }

    let currentDate = "";
    listEl.innerHTML = list
      .map((slot) => {
        const free = Slots.freeSeats(slot);
        const full = free <= 0;
        let heading = "";
        if (slot.date !== currentDate) {
          currentDate = slot.date;
          heading = `<h3 class="slot-day">${Slots.formatDate(slot.date)}</h3>`;
        }
        return `
          ${heading}
          <article class="slot-card ${full ? "is-full" : ""}">
            <div class="slot-main">
              <div class="slot-time">${slot.time}</div>
              <div>
                <h4>${Slots.typeLabel(slot.type)}</h4>
                <p>${slot.shelterName} · ${slot.city}</p>
                <p class="tiny muted">${slot.note || ""}</p>
              </div>
            </div>
            <div class="slot-side">
              <span class="pill ${full ? "overdue" : "done"}">${
                full ? "Мест нет" : `Мест: ${free}`
              }</span>
              <button class="btn ${full ? "btn-ghost" : ""}" type="button"
                data-signup="${slot.id}" ${full ? "disabled" : ""}>
                ${full ? "Занято" : "Записаться"}
              </button>
            </div>
          </article>`;
      })
      .join("");
  }

  function findSlot(id) {
    return slots.find((s) => s.id === id);
  }

  listEl.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-signup]");
    if (!btn || btn.disabled) return;
    const slot = findSlot(btn.dataset.signup);
    if (!slot) return;
    slotIdInput.value = slot.id;
    lead.textContent = `${Slots.formatDate(slot.date)}, ${slot.time} · ${Slots.typeLabel(
      slot.type
    )} · ${slot.shelterName}`;
    modal.showModal();
  });

  form.addEventListener("submit", (e) => {
    const submitter = e.submitter;
    if (!submitter || submitter.value === "cancel") return;
    e.preventDefault();
    const data = new FormData(form);
    const slot = findSlot(String(data.get("slotId")));
    if (!slot) return;

    const payload = {
      slotId: slot.id,
      date: slot.date,
      time: slot.time,
      type: slot.type,
      shelter: slot.shelterName,
      name: data.get("name"),
      contact: data.get("contact"),
      comment: data.get("comment") || "",
    };
    S.saveLocal(Slots.SIGNUPS_KEY, payload);

    slot.taken = Number(slot.taken || 0) + 1;
    Slots.save(slots);
    slots = Slots.load();

    S.openTelegram(
      [
        "Запись волонтёром · К дому",
        `Слот: ${Slots.formatDate(slot.date)}, ${slot.time}`,
        `Задача: ${Slots.typeLabel(slot.type)}`,
        `Приют: ${slot.shelterName}`,
        `Имя: ${payload.name}`,
        `Контакт: ${payload.contact}`,
        payload.comment ? `Комментарий: ${payload.comment}` : "",
        `Ссылка: ${location.href}`,
      ]
        .filter(Boolean)
        .join("\n")
    );

    modal.close();
    form.reset();
    render();
    showToast("Заявка готова — отправьте в Telegram");
  });

  filterShelter.addEventListener("change", render);
  filterType.addEventListener("change", render);
  filterWhen.addEventListener("change", render);

  fillFilters();
  render();
})();
