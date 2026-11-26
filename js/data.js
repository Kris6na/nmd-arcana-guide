/**
 * =========================================================
 * Ninja Must Die: Arcana Data Store
 * Edit this file to update sets, stats, caps, or wording.
 * =========================================================
 */

const ARCANA_SETS = [
  {
    id: "kamaitachi",
    anchor: "set-kamaitachi",
    name: "3.1 Kamaitachi",
    element: "wind",
    elementLabel: "Wind Offensive Set",
    ninjaReq: "Wind Element Ninja only",
    trigger: "Use your main weapon skill twice after a 55s Boss battle wait (weapon uses accumulate during the wait). Triggers once per battle by default.",
    skill: "Summons Kamaitachi to continuously fire wind blades at the Boss, then charges toward the Boss for collision DMG.",
    runes: [
      {
        element: "wind",
        title: "A. Wind Element Rune",
        base: "Wind Element ATK +50 (+50/level up to +500 at Lv. 10) • Lv. 8 unlocks 1 random passive stat from the 6-stat pool",
        special: "Additional Activation [10%–50% DMG]: Set activation times +1, dealing 10%–50% of original DMG (Lv. 1 only)",
        damage: [
          "Permanent ATK Increase [50–120 ATK]: Active for the rest of battle; 1 stack per line with no set-wide cap; does not re-stack on bonus triggers (Lv. 1 & Lv. 5)",
          "Temporary ATK Boost [2–8 ATK/hit]: Gains +2 to +8 ATK per Wind Blade hit for 10s; stackable up to 400 ATK across the set (Lv. 1 & Lv. 5)"
        ],
        utility: [
          "Immediate HP Recovery [50–120 HP]: Heals on set trigger; capped at 500 HP per trigger across the set (Lv. 1 & Lv. 5)",
          "Temporary HP Recovery Speed [5–10 HP/s]: Lasts 10s; stackable with no limits (Lv. 1 & Lv. 5)",
          "Effect Resistance [5%–8%]: Stackable with no limits across lines and Lv. 8 Effect % (Lv. 1 & Lv. 5)"
        ]
      },
      {
        element: "lightning",
        title: "B. Lightning Element Rune",
        base: "Lightning Element ATK +50 (+50/level up to +500 at Lv. 10) • Lv. 8 unlocks 1 random passive stat",
        special: "Activation on Relay [50%–100% DMG]: Activates set once upon 1st relay, dealing 50%–100% of original DMG (Lv. 1 only)",
        damage: [
          "Set Critical DMG [14%–30%]: Increases Set Skill Crit DMG; stacks additively (Lv. 1 & Lv. 5)",
          "Temporary ATK Boost [2–8 ATK/hit]: Lasts 10s per Wind Blade hit; stackable up to 400 ATK across the set (Lv. 1 & Lv. 5)"
        ],
        utility: [
          "Immediate HP Recovery [50–120 HP] (500 HP/trigger cap)",
          "Temporary HP Recovery Speed [5–10 HP/s for 10s] (no limit)",
          "Effect Resistance [5%–8%] (no limit)"
        ]
      },
      {
        element: "water",
        title: "C. Water Element Rune",
        base: "Water Element ATK +50 (+50/level up to +500 at Lv. 10) • Lv. 8 unlocks 1 random passive stat",
        special: "Cooldown Reduction [-5s to -12s]: Reduces the 55s Boss battle activation interval (Lv. 1 only)",
        damage: [
          "Set DMG Increase [10%–15%]: Increases Set Skill DMG; stacks additively (Lv. 1 & Lv. 5)",
          "Temporary ATK Boost [2–8 ATK/hit]: Lasts 10s per Wind Blade hit; stackable up to 400 ATK across the set (Lv. 1 & Lv. 5)"
        ],
        utility: [
          "Immediate HP Recovery [50–120 HP] (500 HP/trigger cap)",
          "Temporary HP Recovery Speed [5–10 HP/s for 10s] (no limit)",
          "Effect Resistance [5%–8%] (no limit)"
        ]
      },
      {
        element: "fire",
        title: "D. Fire Element Rune",
        base: "Fire Element ATK +50 (+50/level up to +500 at Lv. 10) • Lv. 8 unlocks 1 random passive stat",
        special: "Skill Upgrade [+0.5s to +1.5s]: Increases Kamaitachi Wind Blade release duration (Lv. 1 only)",
        damage: [
          "Set Critical Probability [5%–25%]: Increases Set Skill Crit Rate; stacks additively (Lv. 1 & Lv. 5)",
          "Temporary ATK Boost [2–8 ATK/hit]: Lasts 10s per Wind Blade hit; stackable up to 400 ATK across the set (Lv. 1 & Lv. 5)"
        ],
        utility: [
          "Immediate HP Recovery [50–120 HP] (500 HP/trigger cap)",
          "Temporary HP Recovery Speed [5–10 HP/s for 10s] (no limit)",
          "Effect Resistance [5%–8%] (no limit)"
        ]
      }
    ]
  },
  {
    id: "beast-bull",
    anchor: "set-beast-bull",
    name: "3.2 Beast Bull",
    element: "lightning",
    elementLabel: "Lightning Offensive Set",
    ninjaReq: "Lightning Element Ninja only",
    trigger: "Triggers automatically every 60s in a Boss battle (once per battle by default).",
    skill: "Summons Minotaur to charge back and forth once, stop in front of the Ninja to roar, and dash away.",
    runes: [
      {
        element: "wind",
        title: "A. Wind Element Rune",
        base: "Wind Element ATK +50 (+50/level up to +500 at Lv. 10) • Lv. 8 unlocks 1 random passive stat",
        special: "Additional Activation [10%–50% DMG]: Set activation times +1, dealing 10%–50% of original DMG (Lv. 1 only)",
        damage: [
          "Permanent ATK Increase [50–120 ATK]: Active all battle; 1 stack/line with no set cap; does not re-stack (Lv. 1 & Lv. 5)",
          "Temporary ATK Boost [50–120 ATK]: Flat ATK burst for 10s; stackable up to 400 ATK across the set (Lv. 1 & Lv. 5)"
        ],
        utility: [
          "Immediate HP Recovery [50–120 HP] (500 HP/trigger cap)",
          "Temporary HP Recovery Speed [5–10 HP/s for 10s] (no limit)",
          "Effect Resistance [5%–8%] (no limit)"
        ]
      },
      {
        element: "lightning",
        title: "B. Lightning Element Rune",
        base: "Lightning Element ATK +50 (+50/level up to +500 at Lv. 10) • Lv. 8 unlocks 1 random passive stat",
        special: "Activation on Relay [50%–100% DMG]: Activates set once upon 1st relay, dealing 50%–100% of original DMG (Lv. 1 only)",
        damage: [
          "Set Critical DMG [14%–30%]: Increases Set Skill Crit DMG; stacks additively (Lv. 1 & Lv. 5)",
          "Temporary ATK Boost [50–120 ATK]: Flat ATK burst for 10s; stackable up to 400 ATK across the set (Lv. 1 & Lv. 5)"
        ],
        utility: [
          "Immediate HP Recovery [50–120 HP] (500 HP/trigger cap)",
          "Temporary HP Recovery Speed [5–10 HP/s for 10s] (no limit)",
          "Effect Resistance [5%–8%] (no limit)"
        ]
      },
      {
        element: "water",
        title: "C. Water Element Rune",
        base: "Water Element ATK +50 (+50/level up to +500 at Lv. 10) • Lv. 8 unlocks 1 random passive stat",
        special: "Cooldown Reduction [-5s to -12s]: Reduces the 60s Boss battle activation interval (Lv. 1 only)",
        damage: [
          "Set DMG Increase [10%–15%]: Increases Set Skill DMG; stacks additively (Lv. 1 & Lv. 5)",
          "Temporary ATK Boost [50–120 ATK]: Flat ATK burst for 10s; stackable up to 400 ATK across the set (Lv. 1 & Lv. 5)"
        ],
        utility: [
          "Immediate HP Recovery [50–120 HP] (500 HP/trigger cap)",
          "Temporary HP Recovery Speed [5–10 HP/s for 10s] (no limit)",
          "Effect Resistance [5%–8%] (no limit)"
        ]
      },
      {
        element: "fire",
        title: "D. Fire Element Rune",
        base: "Fire Element ATK +50 (+50/level up to +500 at Lv. 10) • Lv. 8 unlocks 1 random passive stat",
        special: "Skill Upgrade: Minotaur's Roar destroys high-level Danmaku and increases Roar DMG (Lv. 1 only)",
        damage: [
          "Set Critical Probability [5%–25%]: Increases Set Skill Crit Rate; stacks additively (Lv. 1 & Lv. 5)",
          "Temporary ATK Boost [50–120 ATK]: Flat ATK burst for 10s; stackable up to 400 ATK across the set (Lv. 1 & Lv. 5)"
        ],
        utility: [
          "Immediate HP Recovery [50–120 HP] (500 HP/trigger cap)",
          "Temporary HP Recovery Speed [5–10 HP/s for 10s] (no limit)",
          "Effect Resistance [5%–8%] (no limit)"
        ]
      }
    ]
  },
  {
    id: "blowfish",
    anchor: "set-blowfish",
    name: "3.3 Blowfish",
    element: "water",
    elementLabel: "Water Offensive Set",
    ninjaReq: "Water Element Ninja only",
    trigger: "Accumulate 500 points of damage from the Boss after a 55s Boss battle wait (damage accumulates during the wait). Triggers once per battle by default.",
    skill: "Summons Blowfish to block damage in front for 4s, then deals Screen Sweep DMG (scales based on blocked damage).",
    runes: [
      {
        element: "wind",
        title: "A. Wind Element Rune",
        base: "Wind Element ATK +50 (+50/level up to +500 at Lv. 10) • Lv. 8 unlocks 1 random passive stat",
        special: "Additional Activation [10%–50% DMG]: Set activation times +1, dealing 10%–50% of original DMG (Lv. 1 only)",
        damage: [
          "Permanent ATK Increase [50–120 ATK]: Active all battle; 1 stack/line with no set cap; does not re-stack (Lv. 1 & Lv. 5)",
          "Temporary ATK Boost [50–120 ATK]: Flat ATK burst for 10s; stackable up to 400 ATK across the set (Lv. 1 & Lv. 5)"
        ],
        utility: [
          "Immediate HP Recovery [50–120 HP] (500 HP/trigger cap)",
          "Temporary HP Recovery Speed [5–10 HP/s for 10s] (no limit)",
          "Effect Resistance [5%–8%] (no limit)"
        ]
      },
      {
        element: "lightning",
        title: "B. Lightning Element Rune",
        base: "Lightning Element ATK +50 (+50/level up to +500 at Lv. 10) • Lv. 8 unlocks 1 random passive stat",
        special: "Activation on Relay [50%–100% DMG]: Activates set once upon 1st relay, dealing 50%–100% of original DMG (Lv. 1 only)",
        damage: [
          "Set Critical DMG [14%–30%]: Increases Set Skill Crit DMG; stacks additively (Lv. 1 & Lv. 5)",
          "Temporary ATK Boost [50–120 ATK]: Flat ATK burst for 10s; stackable up to 400 ATK across the set (Lv. 1 & Lv. 5)"
        ],
        utility: [
          "Immediate HP Recovery [50–120 HP] (500 HP/trigger cap)",
          "Temporary HP Recovery Speed [5–10 HP/s for 10s] (no limit)",
          "Effect Resistance [5%–8%] (no limit)"
        ]
      },
      {
        element: "water",
        title: "C. Water Element Rune",
        base: "Water Element ATK +50 (+50/level up to +500 at Lv. 10) • Lv. 8 unlocks 1 random passive stat",
        special: "Cooldown Reduction [-5s to -12s]: Reduces the 55s Set internal CD / wait timer (Lv. 1 only)",
        damage: [
          "Set DMG Increase [10%–15%]: Increases Set Skill DMG; stacks additively (Lv. 1 & Lv. 5)",
          "Temporary ATK Boost [50–120 ATK]: Flat ATK burst for 10s; stackable up to 400 ATK across the set (Lv. 1 & Lv. 5)"
        ],
        utility: [
          "Immediate HP Recovery [50–120 HP] (500 HP/trigger cap)",
          "Temporary HP Recovery Speed [5–10 HP/s for 10s] (no limit)",
          "Effect Resistance [5%–8%] (no limit)"
        ]
      },
      {
        element: "fire",
        title: "D. Fire Element Rune",
        base: "Fire Element ATK +50 (+50/level up to +500 at Lv. 10) • Lv. 8 unlocks 1 random passive stat",
        special: "Skill Upgrade: Increases Blowfish Screen Sweep DMG (Lv. 1 only)",
        damage: [
          "Set Critical Probability [5%–25%]: Increases Set Skill Crit Rate; stacks additively (Lv. 1 & Lv. 5)",
          "Temporary ATK Boost [50–120 ATK]: Flat ATK burst for 10s; stackable up to 400 ATK across the set (Lv. 1 & Lv. 5)"
        ],
        utility: [
          "Immediate HP Recovery [50–120 HP] (500 HP/trigger cap)",
          "Temporary HP Recovery Speed [5–10 HP/s for 10s] (no limit)",
          "Effect Resistance [5%–8%] (no limit)"
        ]
      }
    ]
  },
  {
    id: "candle-dragon",
    anchor: "set-candle-dragon",
    name: "3.4 Candle Dragon",
    element: "fire",
    elementLabel: "Fire Offensive Set",
    ninjaReq: "Fire Element Ninja only",
    trigger: "Go 50s without taking damage in a Boss battle (taking a hit resets or pauses progress). Triggers once per battle by default.",
    skill: "Summons Candle Dragon to fire 4 fireballs forward, then charges toward the Boss dealing collision DMG.",
    runes: [
      {
        element: "wind",
        title: "A. Wind Element Rune",
        base: "Wind Element ATK +50 (+50/level up to +500 at Lv. 10) • Lv. 8 unlocks 1 random passive stat",
        special: "Additional Activation [10%–50% DMG]: Set activation times +1, dealing 10%–50% of original DMG (Lv. 1 only)",
        damage: [
          "Permanent ATK Increase [50–120 ATK]: Active all battle; 1 stack/line with no set cap; does not re-stack (Lv. 1 & Lv. 5)",
          "Temporary ATK Boost [6–20 ATK/hit]: Gains +6 to +20 ATK per Fireball hit for 10s; stackable up to 400 ATK across the set (Lv. 1 & Lv. 5)"
        ],
        utility: [
          "Immediate HP Recovery [50–120 HP] (500 HP/trigger cap)",
          "Temporary HP Recovery Speed [5–10 HP/s for 10s] (no limit)",
          "Effect Resistance [5%–8%] (no limit)"
        ]
      },
      {
        element: "lightning",
        title: "B. Lightning Element Rune",
        base: "Lightning Element ATK +50 (+50/level up to +500 at Lv. 10) • Lv. 8 unlocks 1 random passive stat",
        special: "Activation on Relay [50%–100% DMG]: Activates set once upon 1st relay, dealing 50%–100% of original DMG (Lv. 1 only)",
        damage: [
          "Set Critical DMG [14%–30%]: Increases Set Skill Crit DMG; stacks additively (Lv. 1 & Lv. 5)",
          "Temporary ATK Boost [6–20 ATK/hit]: Lasts 10s per Fireball hit; stackable up to 400 ATK across the set (Lv. 1 & Lv. 5)"
        ],
        utility: [
          "Immediate HP Recovery [50–120 HP] (500 HP/trigger cap)",
          "Temporary HP Recovery Speed [5–10 HP/s for 10s] (no limit)",
          "Effect Resistance [5%–8%] (no limit)"
        ]
      },
      {
        element: "water",
        title: "C. Water Element Rune",
        base: "Water Element ATK +50 (+50/level up to +500 at Lv. 10) • Lv. 8 unlocks 1 random passive stat",
        special: "Cooldown Reduction [-5s to -12s]: Reduces the 50s no-damage time required (Lv. 1 only)",
        damage: [
          "Set DMG Increase [10%–15%]: Increases Set Skill DMG; stacks additively (Lv. 1 & Lv. 5)",
          "Temporary ATK Boost [6–20 ATK/hit]: Lasts 10s per Fireball hit; stackable up to 400 ATK across the set (Lv. 1 & Lv. 5)"
        ],
        utility: [
          "Immediate HP Recovery [50–120 HP] (500 HP/trigger cap)",
          "Temporary HP Recovery Speed [5–10 HP/s for 10s] (no limit)",
          "Effect Resistance [5%–8%] (no limit)"
        ]
      },
      {
        element: "fire",
        title: "D. Fire Element Rune",
        base: "Fire Element ATK +50 (+50/level up to +500 at Lv. 10) • Lv. 8 unlocks 1 random passive stat",
        special: "Skill Upgrade [+1 to +2 Fireballs]: Increases the number of Fireballs released by Candle Dragon (Lv. 1 only)",
        damage: [
          "Set Critical Probability [5%–25%]: Increases Set Skill Crit Rate; stacks additively (Lv. 1 & Lv. 5)",
          "Temporary ATK Boost [6–20 ATK/hit]: Lasts 10s per Fireball hit; stackable up to 400 ATK across the set (Lv. 1 & Lv. 5)"
        ],
        utility: [
          "Immediate HP Recovery [50–120 HP] (500 HP/trigger cap)",
          "Temporary HP Recovery Speed [5–10 HP/s for 10s] (no limit)",
          "Effect Resistance [5%–8%] (no limit)"
        ]
      }
    ]
  },
  {
    id: "divine-blessing",
    anchor: "set-divine-blessing",
    name: "3.5 Divine Blessing",
    element: "universal",
    elementLabel: "Universal Utility Set",
    ninjaReq: "Any Ninja (No element restriction)",
    trigger: "HP drops below 50% after a 60s Boss battle wait (triggers once per battle by default).",
    skill: "Ninja grows in size and gains temporary invincibility, releasing a Screen Sweep effect when invincibility ends.",
    runes: [
      {
        element: "wind",
        title: "A. Wind Element Rune",
        base: "Wind Element ATK +50 (+50/level up to +500 at Lv. 10) • Lv. 8 unlocks 1 random passive stat",
        special: "Additional Activation [10%–50% DMG]: Set activation times +1, dealing 10%–50% of original DMG (Lv. 1 only)",
        damage: [
          "Permanent ATK Increase [50–120 ATK]: Active all battle; 1 stack/line with no set cap; does not re-stack (Lv. 1 & Lv. 5)",
          "Temporary ATK Boost [50–120 ATK]: Flat ATK burst for 10s; stackable up to 400 ATK across the set (Lv. 1 & Lv. 5)"
        ],
        utility: [
          "Immediate HP Recovery [50–120 HP] (500 HP/trigger cap)",
          "Temporary HP Recovery Speed [5–10 HP/s for 10s] (no limit)",
          "Effect Resistance [5%–8%] (no limit)"
        ]
      },
      {
        element: "lightning",
        title: "B. Lightning Element Rune",
        base: "Lightning Element ATK +50 (+50/level up to +500 at Lv. 10) • Lv. 8 unlocks 1 random passive stat",
        special: "Activation on Relay [50%–100% DMG]: Activates set once upon 1st relay, dealing 50%–100% of original DMG (Lv. 1 only)",
        damage: [
          "Set Critical DMG [14%–30%]: Increases Set Skill Crit DMG; stacks additively (Lv. 1 & Lv. 5)",
          "Temporary ATK Boost [50–120 ATK]: Flat ATK burst for 10s; stackable up to 400 ATK across the set (Lv. 1 & Lv. 5)"
        ],
        utility: [
          "Immediate HP Recovery [50–120 HP] (500 HP/trigger cap)",
          "Temporary HP Recovery Speed [5–10 HP/s for 10s] (no limit)",
          "Effect Resistance [5%–8%] (no limit)"
        ]
      },
      {
        element: "water",
        title: "C. Water Element Rune",
        base: "Water Element ATK +50 (+50/level up to +500 at Lv. 10) • Lv. 8 unlocks 1 random passive stat",
        special: "Cooldown Reduction [-5s to -12s]: Reduces the 60s Set internal CD / wait timer (Lv. 1 only)",
        damage: [
          "Set DMG Increase [10%–15%]: Increases Set Skill DMG; stacks additively (Lv. 1 & Lv. 5)",
          "Temporary ATK Boost [50–120 ATK]: Flat ATK burst for 10s; stackable up to 400 ATK across the set (Lv. 1 & Lv. 5)"
        ],
        utility: [
          "Immediate HP Recovery [50–120 HP] (500 HP/trigger cap)",
          "Temporary HP Recovery Speed [5–10 HP/s for 10s] (no limit)",
          "Effect Resistance [5%–8%] (no limit)"
        ]
      },
      {
        element: "fire",
        title: "D. Fire Element Rune",
        base: "Fire Element ATK +50 (+50/level up to +500 at Lv. 10) • Lv. 8 unlocks 1 random passive stat",
        special: "Skill Upgrade [+0.5s to +1.5s]: Increases Divine Blessing invincibility duration (Lv. 1 only)",
        damage: [
          "Set Critical Probability [5%–25%]: Increases Set Skill Crit Rate; stacks additively (Lv. 1 & Lv. 5)",
          "Temporary ATK Boost [50–120 ATK]: Flat ATK burst for 10s; stackable up to 400 ATK across the set (Lv. 1 & Lv. 5)"
        ],
        utility: [
          "Immediate HP Recovery [50–120 HP] (500 HP/trigger cap)",
          "Temporary HP Recovery Speed [5–10 HP/s for 10s] (no limit)",
          "Effect Resistance [5%–8%] (no limit)"
        ]
      }
    ]
  }
];

const COMMON_EFFECT_GROUPS = [
  {
    title: "4.1 Set Skill Multipliers (Element-Exclusive)",
    items: [
      {
        name: "Set DMG Increase (10% – 15%)",
        detail: "Water Rune pool only. Stacks additively across equipped lines."
      },
      {
        name: "Set Critical Probability (5% – 25%)",
        detail: "Fire Rune pool only. Stacks additively across equipped lines."
      },
      {
        name: "Set Critical DMG (14% – 30%)",
        detail: "Lightning Rune pool only. Stacks additively across equipped lines."
      }
    ]
  },
  {
    title: "4.2 Ninja ATK Buffs",
    items: [
      {
        name: "Permanent ATK Increase (50 – 120 ATK)",
        detail: "Wind Rune pool only. Grants 1 stack per effect line with no set-wide accumulation cap; activates on the first set trigger and does not re-stack on bonus triggers."
      },
      {
        name: "Temporary ATK Boost (10s Duration)",
        detail: "Available across all 4 elements. Rolls as a flat burst (50–120 ATK on Beast Bull, Blowfish, and Divine Blessing) or per-hit stacking (+2 to +8 ATK/hit on Kamaitachi; +6 to +20 ATK/hit on Candle Dragon). Capped at 400 ATK active set-wide."
      }
    ]
  },
  {
    title: "4.3 Survival & Utility Buffs (All 4 Elements)",
    items: [
      {
        name: "Immediate HP Recovery (50 – 120 HP)",
        detail: "Heals immediately on set activation; capped at 500 HP per trigger across all equipped Runes."
      },
      {
        name: "Temporary HP Recovery Speed (5 – 10 HP/s for 10s)",
        detail: "Regenerates HP over 10s; stacks freely across equipped lines with no set-wide limit."
      },
      {
        name: "Effect Resistance (5% – 8%)",
        detail: "Stacks freely across equipped effect lines and Lv. 8 passive Effect % base stats with no limit."
      }
    ]
  }
];
