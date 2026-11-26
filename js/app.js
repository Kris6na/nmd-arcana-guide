/**
 * =========================================================
 * Ninja Must Die: Arcana Guide — Side Dock & Article Logic
 * =========================================================
 */

document.addEventListener("DOMContentLoaded", () => {
  initSideDock();
  initLevelSimulator();
  renderArcanaSets("all");
  renderCommonEffects();
  initSetFilters();
});

function initSideDock() {
  const dock = document.getElementById("side-dock");
  const toggleBtn = document.getElementById("dock-toggle");
  const closeBtn = document.getElementById("dock-close");
  const backdrop = document.getElementById("dock-backdrop");
  const navLinks = dock.querySelectorAll("a");

  const isDesktop = () => window.matchMedia("(min-width: 960px)").matches;

  function openDock() {
    dock.classList.add("open");
    toggleBtn.setAttribute("aria-expanded", "true");
    if (isDesktop()) {
      document.body.classList.add("dock-pinned");
      backdrop.hidden = true;
    } else {
      backdrop.hidden = false;
    }
  }

  function closeDock() {
    dock.classList.remove("open");
    document.body.classList.remove("dock-pinned");
    toggleBtn.setAttribute("aria-expanded", "false");
    backdrop.hidden = true;
  }

  // Open by default on wide desktop screens, collapsed on mobile/tablet
  if (isDesktop()) {
    openDock();
  }

  toggleBtn.addEventListener("click", () => {
    if (dock.classList.contains("open")) {
      closeDock();
    } else {
      openDock();
    }
  });

  closeBtn.addEventListener("click", closeDock);
  backdrop.addEventListener("click", closeDock);

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      // If clicking a specific set anchor while filtered, reset filter so the anchor exists
      const href = link.getAttribute("href");
      if (href && href.startsWith("#set-")) {
        const activeTab = document.querySelector(".set-tab.active");
        if (activeTab && activeTab.dataset.set !== "all") {
          document.querySelector('.set-tab[data-set="all"]').click();
        }
      }
      if (!isDesktop()) {
        closeDock();
      }
    });
  });

  window.addEventListener("resize", () => {
    if (dock.classList.contains("open")) {
      if (isDesktop()) {
        document.body.classList.add("dock-pinned");
        backdrop.hidden = true;
      } else {
        document.body.classList.remove("dock-pinned");
        backdrop.hidden = false;
      }
    }
  });
}

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
      <div class="inspector-row">
        <div class="inspector-row-label">Primary Base Stat (Active from Battle Start)</div>
        <div class="inspector-row-value">[Element] Element ATK +${elementAtk}</div>
        <div class="inspector-row-note">Scales +50/level (+2,000 Element ATK across 4 maxed Lv. 10 Runes)</div>
      </div>
      <div class="inspector-row ${base2Unlocked ? "" : "is-locked"}">
        <div class="inspector-row-label">Secondary Base Stat (${base2Unlocked ? "Unlocked at Lv. 8" : "Unlocks at Lv. 8"})</div>
        <div class="inspector-row-value">${base2Unlocked ? "1 Random Passive Stat (Fixed through Lv. 10)" : "Locked until Lv. 8"}</div>
        <div class="inspector-row-note">Pool: Raw ATK, Weapon ATK, Ninjutsu ATK, Max HP, Effect %, or Score Bonus %</div>
      </div>
      <div class="inspector-row">
        <div class="inspector-row-label">Effect Slot 1 (Unlocked at Lv. 1)</div>
        <div class="inspector-row-value">Special Effect OR Common Effect</div>
        <div class="inspector-row-note">Dormant until 1st Set Trigger in battle</div>
      </div>
      <div class="inspector-row ${slot2Unlocked ? "" : "is-locked"}">
        <div class="inspector-row-label">Effect Slot 2 (${slot2Unlocked ? "Unlocked at Lv. 5" : "Unlocks at Lv. 5"})</div>
        <div class="inspector-row-value">${slot2Unlocked ? "Common Effect Only (Same RNG range; can duplicate Slot 1)" : "Locked until Lv. 5"}</div>
        <div class="inspector-row-note">Never rolls a Special Effect</div>
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
    <section id="${set.anchor}" class="set-article-block">
      <div class="set-article-header ${set.element}">
        <h3>${set.name} <span class="el-text ${set.element}">(${set.elementLabel})</span></h3>
      </div>

      <ul class="indented-list">
        <li><strong>Ninja Required:</strong> ${set.ninjaReq}</li>
        <li><strong>Trigger Condition:</strong> ${set.trigger}</li>
        <li><strong>Set Skill Effect:</strong> ${set.skill}</li>
      </ul>

      ${set.runes.map((rune) => `
        <div class="rune-breakdown-group ${rune.element}">
          <h4><span class="el-text ${rune.element}">${rune.title}</span></h4>
          <ul class="indented-list">
            <li><strong>Base Stats:</strong> ${rune.base}</li>
            <li><strong>Special Effect (Lv. 1 Only):</strong> ${rune.special}</li>
            <li>
              <strong>Damage Common Effects (Lv. 1 &amp; Lv. 5):</strong>
              <ul class="indented-sublist">
                ${rune.damage.map((d) => `<li>${d}</li>`).join("")}
              </ul>
            </li>
            <li>
              <strong>Regular / Filler Common Effects (Lv. 1 &amp; Lv. 5):</strong>
              <ul class="indented-sublist">
                ${rune.utility.map((u) => `<li>${u}</li>`).join("")}
              </ul>
            </li>
          </ul>
        </div>
      `).join("")}
    </section>
  `).join("");
}

function renderCommonEffects() {
  const container = document.getElementById("common-effects-container");
  container.innerHTML = COMMON_EFFECT_GROUPS.map((group) => `
    <div>
      <h3>${group.title}</h3>
      <ul class="indented-list">
        ${group.items.map((item) => `
          <li><strong>${item.name}:</strong> ${item.detail}</li>
        `).join("")}
      </ul>
    </div>
  `).join("");
}

function initSetFilters() {
  const tabs = document.querySelectorAll(".set-tab");
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");
      renderArcanaSets(tab.dataset.set);
    });
  });
}
