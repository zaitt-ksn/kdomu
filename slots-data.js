window.KDOMU_SLOT_TYPES = [
  { id: "walk", label: "Выгул" },
  { id: "clean", label: "Уборка" },
  { id: "transport", label: "Перевозка" },
  { id: "photo", label: "Фото для анкет" },
  { id: "care", label: "Уход / социализация" },
];

/** Демо-слоты: генерируются от «сегодня», чтобы календарь всегда был живой. */
window.buildDemoSlots = function buildDemoSlots() {
  const shelters = window.KDOMU_SHELTERS || [];
  const types = ["walk", "clean", "care", "photo", "transport", "walk"];
  const hours = ["10:00", "12:00", "14:00", "16:00", "18:00"];
  const slots = [];
  const start = new Date();
  start.setHours(12, 0, 0, 0);

  for (let d = 0; d < 14; d++) {
    const day = new Date(start);
    day.setDate(start.getDate() + d);
    const date = day.toISOString().slice(0, 10);
    const perDay = d % 3 === 0 ? 3 : 2;
    for (let i = 0; i < perDay; i++) {
      const shelter = shelters[(d + i) % shelters.length];
      if (!shelter) continue;
      const type = types[(d + i) % types.length];
      const time = hours[(d + i) % hours.length];
      slots.push({
        id: `demo_${date}_${shelter.id}_${type}_${time.replace(":", "")}`,
        date,
        time,
        type,
        shelterId: shelter.id,
        shelterName: shelter.name,
        city: shelter.city,
        seats: 2 + ((d + i) % 3),
        taken: (d + i) % 4 === 0 ? 1 : 0,
        note:
          type === "walk"
            ? "Удобная обувь, вода по желанию"
            : type === "clean"
              ? "Перчатки выдадут на месте"
              : type === "transport"
                ? "Нужна машина или готовность к такси"
                : "Камера телефона достаточно",
        demo: true,
      });
    }
  }
  return slots;
};

window.KdomuSlots = {
  STORAGE_KEY: "kdomu_slots_v1",
  SIGNUPS_KEY: "kdomu_slot_signups",

  typeLabel(id) {
    const t = (window.KDOMU_SLOT_TYPES || []).find((x) => x.id === id);
    return t ? t.label : id;
  },

  load() {
    try {
      const raw = localStorage.getItem(this.STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed) && parsed.length) return parsed;
      }
    } catch (_) {}
    return window.buildDemoSlots();
  },

  save(slots) {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(slots));
  },

  resetDemo() {
    const slots = window.buildDemoSlots();
    this.save(slots);
    return slots;
  },

  freeSeats(slot) {
    return Math.max(0, Number(slot.seats || 0) - Number(slot.taken || 0));
  },

  formatDate(iso) {
    const d = new Date(iso + "T12:00:00");
    return d.toLocaleDateString("ru-RU", {
      weekday: "short",
      day: "numeric",
      month: "long",
    });
  },
};
