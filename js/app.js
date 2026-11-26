/**
 * =========================================================
 * Ninja Must Die: Arcana Guide — UI & Interactive Logic
 * =========================================================
 */

document.addEventListener("DOMContentLoaded", () => {
  initLevelSimulator();
  renderArcanaSets("all");
  renderCommonEffects();
  initSetFilters();
});

function initLevelSimulator() {
  const slider = document.getElementById("rune-level-slider");
  const display = document.getElementById("rune-level-display");
  const output = document.getElementById("sim-output");

  function update(level) {
    display.textContent = `Lv. ${level}`;
    const elementAtk = level * 50;
    const slot2Unlocked = level >= 5;
    const base2Unlocked = level >= 8;

    output.innerHTML = `
      <div class="sim-slot">
        <div class="sim-slot-title">Primary Base Stat (Active Immediately)</div>
        <div class="sim-slot-val">[Element] Element ATK +${elementAtk}</div>
        <p class="muted">4 maxed Lv. 10 Runes = +2,000 Element ATK</p>
      </div>
      <div class="sim-slot ${base2Unlocked ? "" : "locked"}">
        <div class="sim-slot-title">Secondary Base Stat (${base2Unlocked ? "Unlocked at Lv. 8" : "Unlocks at Lv. 8"})</div>
        <div class="sim-slot-val">${base2Unlocked ? "1 Random Passive Stat (Fixed)" : "Locked"}</div>
        <p class="muted">Pool: Raw ATK, Weapon ATK, Ninjutsu ATK, Max HP, Effect %, Score Bonus %</p>
      </div>
      <div class="sim-slot">
        <div class="sim-slot-title">Effect Slot 1 (Unlocked at Lv. 1)</div>
        <div class="sim-slot-val">Special Effect OR Common Effect</div>
        <p class="muted">Activates on 1st Set Trigger in battle</p>
      </div>
      <div class="sim-slot ${slot2Unlocked ? "" : "locked"}">
        <div class="sim-slot-title">Effect Slot 2 (${slot2Unlocked ? "Unlocked at Lv. 5" : "Unlocks at Lv. 5"})</div>
        <div class="sim-slot-val">${slot2Unlocked ? "Common Effect Only (Can Duplicate)" : "Locked"}</div>
        <p class="muted">Never rolls a Special Effect; same RNG range as Lv. 1</p>
      </div>
    `;
  }

  slider.addEventListener("input", (e) => update(Number(e.target.value)));
  update(1);
}

function renderArcanaSets(filterId) {
  const container = document.getElementById("sets-container");
  const filtered = filterId === "all"
    ? ARCANA_SETS
    : ARCANA_SETS.filter((s) => s.id === filterId);

  container.innerHTML = filtered.map((set) => `
    <article class="card set-card" data-element="${set.element}">
      <h3>
        <span>${set.name}</span>
        <span class="el-tag el-${set.element}">${set.elementLabel}</span>
      </h3>
      <div class="set-meta">
        <div><strong>Ninja Required:</strong> ${set.ninjaReq}</div>
        <div><strong>Trigger Condition:</strong> ${set.trigger}</div>
        <div><strong>Set Skill:</strong> ${set.skill}</div>
      </div>
      <div class="rune-grid">
        ${set.runes.map((rune) => `
          <div class="rune-box">
            <h4><span class="el-tag el-${rune.element}">${rune.title}</span></h4>
            <p><strong>Lv. 1 Special:</strong> ${rune.special}</p>
            <p><strong>Element Common:</strong> ${rune.exclusiveCommon}</p>
            <p><strong>Shared Pool:</strong> ${rune.tempAtk}, Immediate HP Rec (50–120), Temp HP Rec Speed (5–10/s), Effect Res (5%–8%)</p>
          </div>
        `).join("")}
      </div>
    </article>
  `).join("");
}

function renderCommonEffects() {
  const container = document.getElementById("common-effects-container");
  container.innerHTML = COMMON_EFFECT_GROUPS.map((group) => `
    <div class="card">
      <h3>
        <span>${group.category}</span>
        <span class="badge-pill">${group.badge}</span>
      </h3>
      <ul class="clean-list">
        ${group.items.map((item) => `
          <li>
            <strong>${item.name} (${item.range}):</strong> ${item.rule}
          </li>
        `).join("")}
      </ul>
    </div>
  `).join("");
}

function initSetFilters() {
  const buttons = document.querySelectorAll(".filter-btn");
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      buttons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      renderArcanaSets(btn.dataset.set);
    });
  });
}
