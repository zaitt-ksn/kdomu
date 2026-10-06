(() => {
  const S = window.KdomuShared;
  const id = new URLSearchParams(location.search).get("id");
  const shelter = S.shelterById(id);
  const root = document.getElementById("shelter-root");

  if (!shelter) {
    root.innerHTML = `
      <div class="section-head">
        <h2>Приют не найден</h2>
        <p><a class="btn" href="./index.html#shelters">Ко всем приютам</a></p>
      </div>`;
    return;
  }

  const animals = S.animalsForShelter(shelter.id);
  document.title = `${shelter.name} — К дому`;

  root.innerHTML = `
    <a class="back-link" href="./index.html#shelters">← Все приюты</a>
    <div class="shelter-hero">
      <p class="animal-kicker">${shelter.city} · ${shelter.type}</p>
      <h1>${shelter.name}</h1>
      <p class="animal-desc">${shelter.about}</p>
      <div class="hero-actions" style="margin-top:1.2rem">
        ${shelter.link ? `<a class="btn btn-ghost" href="${shelter.link}" target="_blank" rel="noreferrer">Сайт приюта</a>` : ""}
        <button class="btn" type="button" id="help-shelter">Хочу помочь приюту</button>
        <button class="btn btn-ghost" type="button" id="copy-shelter">Скопировать ссылку</button>
      </div>
      <p class="tiny muted" style="margin-top:0.8rem">Контакт в пилоте: ${shelter.contact || "—"}</p>
    </div>
    <div class="section-head" style="margin-top:2.5rem">
      <h2>Животные приюта</h2>
      <p>Сейчас на витрине: ${animals.length}</p>
    </div>
    <div class="animal-grid">
      ${
        animals.length
          ? animals.map((a) => S.cardHtml(a)).join("")
          : '<p class="empty-state">Пока нет анкет — добавим после договорённости с приютом.</p>'
      }
    </div>`;

  document.getElementById("help-shelter").onclick = () => {
    S.openTelegram(
      `Хочу помочь приюту «${shelter.name}» через «К дому»\nСтраница: ${location.href}`
    );
  };

  document.getElementById("copy-shelter").onclick = async () => {
    const toast = document.getElementById("toast");
    try {
      await navigator.clipboard.writeText(location.href);
      toast.hidden = false;
      toast.textContent = "Ссылка на приют скопирована";
      toast.classList.add("is-visible");
      setTimeout(() => toast.classList.remove("is-visible"), 2200);
    } catch (_) {
      toast.hidden = false;
      toast.textContent = "Скопируйте ссылку из браузера";
      toast.classList.add("is-visible");
    }
  };
})();
