/**
 * =========================================================
 * Ninja Must Die: Arcana Data Store
 * Edit this file to update stats, caps, or Rune pools!
 * =========================================================
 */

const ARCANA_SETS = [
  {
    id: "kamaitachi",
    name: "1. Kamaitachi",
    element: "wind",
    elementLabel: "Wind Offensive Set",
    ninjaReq: "Wind Ninja only",
    trigger: "Use main weapon skill twice after a 55s Boss battle wait (weapon uses accumulate during the wait).",
    skill: "Summons Kamaitachi to continuously fire wind blades at the Boss, then charges toward the Boss for collision DMG.",
    runes: [
      {
        element: "wind",
        title: "Wind Rune",
        special: "Additional Activation: Set activation times +1 (10%–50% of original DMG)",
        exclusiveCommon: "Permanent ATK Increase (50–120 ATK, 1 stack/line)",
        tempAtk: "Temp ATK (10s): +2 to +8 ATK per Wind Blade hit (cap 400)"
      },
      {
        element: "lightning",
        title: "Lightning Rune",
        special: "Activation on Relay: Activates set once upon 1st relay (50%–100% of original DMG)",
        exclusiveCommon: "Set Critical DMG (14%–30%)",
        tempAtk: "Temp ATK (10s): +2 to +8 ATK per Wind Blade hit (cap 400)"
      },
      {
        element: "water",
        title: "Water Rune",
        special: "Cooldown Reduction: Reduces activation interval by -5s to -12s (off 55s wait)",
        exclusiveCommon: "Set DMG Increase (10%–15%)",
        tempAtk: "Temp ATK (10s): +2 to +8 ATK per Wind Blade hit (cap 400)"
      },
      {
        element: "fire",
        title: "Fire Rune",
        special: "Skill Upgrade: Increases Wind Blade release duration by +0.5s to +1.5s",
        exclusiveCommon: "Set Critical Probability (5%–25%)",
        tempAtk: "Temp ATK (10s): +2 to +8 ATK per Wind Blade hit (cap 400)"
      }
    ]
  },
  {
    id: "beast-bull",
    name: "2. Beast Bull",
    element: "lightning",
    elementLabel: "Lightning Offensive Set",
    ninjaReq: "Lightning Ninja only",
    trigger: "Triggers automatically every 60s in a Boss battle.",
    skill: "Summons Minotaur to charge back and forth once, stop in front of the Ninja to roar, and dash away.",
    runes: [
      {
        element: "wind",
        title: "Wind Rune",
        special: "Additional Activation: Set activation times +1 (10%–50% of original DMG)",
        exclusiveCommon: "Permanent ATK Increase (50–120 ATK, 1 stack/line)",
        tempAtk: "Temp ATK (10s): Flat +50 to +120 ATK (cap 400)"
      },
      {
        element: "lightning",
        title: "Lightning Rune",
        special: "Activation on Relay: Activates set once upon 1st relay (50%–100% of original DMG)",
        exclusiveCommon: "Set Critical DMG (14%–30%)",
        tempAtk: "Temp ATK (10s): Flat +50 to +120 ATK (cap 400)"
      },
      {
        element: "water",
        title: "Water Rune",
        special: "Cooldown Reduction: Reduces activation interval by -5s to -12s (off 60s interval)",
        exclusiveCommon: "Set DMG Increase (10%–15%)",
        tempAtk: "Temp ATK (10s): Flat +50 to +120 ATK (cap 400)"
      },
      {
        element: "fire",
        title: "Fire Rune",
        special: "Skill Upgrade: Roar destroys high-level Danmaku + increases Roar DMG",
        exclusiveCommon: "Set Critical Probability (5%–25%)",
        tempAtk: "Temp ATK (10s): Flat +50 to +120 ATK (cap 400)"
      }
    ]
  },
  {
    id: "blowfish",
    name: "3. Blowfish",
    element: "water",
    elementLabel: "Water Offensive Set",
    ninjaReq: "Water Ninja only",
    trigger: "Accumulate 500 points of damage from the Boss after a 55s Boss battle wait (damage accumulates during the wait).",
    skill: "Summons Blowfish to block damage in front for 4s, then deals Screen Sweep DMG (scales based on blocked damage).",
    runes: [
      {
        element: "wind",
        title: "Wind Rune",
        special: "Additional Activation: Set activation times +1 (10%–50% of original DMG)",
        exclusiveCommon: "Permanent ATK Increase (50–120 ATK, 1 stack/line)",
        tempAtk: "Temp ATK (10s): Flat +50 to +120 ATK (cap 400)"
      },
      {
        element: "lightning",
        title: "Lightning Rune",
        special: "Activation on Relay: Activates set once upon 1st relay (50%–100% of original DMG)",
        exclusiveCommon: "Set Critical DMG (14%–30%)",
        tempAtk: "Temp ATK (10s): Flat +50 to +120 ATK (cap 400)"
      },
      {
        element: "water",
        title: "Water Rune",
        special: "Cooldown Reduction: Reduces Set internal CD by -5s to -12s (off 55s wait)",
        exclusiveCommon: "Set DMG Increase (10%–15%)",
        tempAtk: "Temp ATK (10s): Flat +50 to +120 ATK (cap 400)"
      },
      {
        element: "fire",
        title: "Fire Rune",
        special: "Skill Upgrade: Screen Sweep DMG Increase",
        exclusiveCommon: "Set Critical Probability (5%–25%)",
        tempAtk: "Temp ATK (10s): Flat +50 to +120 ATK (cap 400)"
      }
    ]
  },
  {
    id: "candle-dragon",
    name: "4. Candle Dragon",
    element: "fire",
    elementLabel: "Fire Offensive Set",
    ninjaReq: "Fire Ninja only",
    trigger: "Go 50s without taking damage in a Boss battle (taking a hit resets/pauses progress).",
    skill: "Summons Candle Dragon to fire 4 fireballs forward, then charges toward the Boss dealing collision DMG.",
    runes: [
      {
        element: "wind",
        title: "Wind Rune",
        special: "Additional Activation: Set activation times +1 (10%–50% of original DMG)",
        exclusiveCommon: "Permanent ATK Increase (50–120 ATK, 1 stack/line)",
        tempAtk: "Temp ATK (10s): +6 to +20 ATK per Fireball hit (cap 400)"
      },
      {
        element: "lightning",
        title: "Lightning Rune",
        special: "Activation on Relay: Activates set once upon 1st relay (50%–100% of original DMG)",
        exclusiveCommon: "Set Critical DMG (14%–30%)",
        tempAtk: "Temp ATK (10s): +6 to +20 ATK per Fireball hit (cap 400)"
      },
      {
        element: "water",
        title: "Water Rune",
        special: "Cooldown Reduction: Reduces no-damage time required by -5s to -12s (off 50s)",
        exclusiveCommon: "Set DMG Increase (10%–15%)",
        tempAtk: "Temp ATK (10s): +6 to +20 ATK per Fireball hit (cap 400)"
      },
      {
        element: "fire",
        title: "Fire Rune",
        special: "Skill Upgrade: Increases number of Fireballs released by +1 to +2",
        exclusiveCommon: "Set Critical Probability (5%–25%)",
        tempAtk: "Temp ATK (10s): +6 to +20 ATK per Fireball hit (cap 400)"
      }
    ]
  },
  {
    id: "divine-blessing",
    name: "5. Divine Blessing",
    element: "universal",
    elementLabel: "Universal Utility Set",
    ninjaReq: "Any Ninja (No element restriction)",
    trigger: "HP drops below 50% after a 60s Boss battle wait.",
    skill: "Ninja grows in size and gains temporary invincibility, releasing a Screen Sweep effect when invincibility ends.",
    runes: [
      {
        element: "wind",
        title: "Wind Rune",
        special: "Additional Activation: Set activation times +1 (10%–50% of original DMG)",
        exclusiveCommon: "Permanent ATK Increase (50–120 ATK, 1 stack/line)",
        tempAtk: "Temp ATK (10s): Flat +50 to +120 ATK (cap 400)"
      },
      {
        element: "lightning",
        title: "Lightning Rune",
        special: "Activation on Relay: Activates set once upon 1st relay (50%–100% of original DMG)",
        exclusiveCommon: "Set Critical DMG (14%–30%)",
        tempAtk: "Temp ATK (10s): Flat +50 to +120 ATK (cap 400)"
      },
      {
        element: "water",
        title: "Water Rune",
        special: "Cooldown Reduction: Reduces Set internal CD / wait by -5s to -12s (off 60s)",
        exclusiveCommon: "Set DMG Increase (10%–15%)",
        tempAtk: "Temp ATK (10s): Flat +50 to +120 ATK (cap 400)"
      },
      {
        element: "fire",
        title: "Fire Rune",
        special: "Skill Upgrade: Increases Set invincibility duration by +0.5s to +1.5s",
        exclusiveCommon: "Set Critical Probability (5%–25%)",
        tempAtk: "Temp ATK (10s): Flat +50 to +120 ATK (cap 400)"
      }
    ]
  }
];

const COMMON_EFFECT_GROUPS = [
  {
    category: "Set Skill Multipliers",
    badge: "Element-Exclusive",
    items: [
      { name: "Set DMG Increase", range: "10% – 15%", rule: "Water Rune pool only." },
      { name: "Set Critical Probability", range: "5% – 25%", rule: "Fire Rune pool only." },
      { name: "Set Critical DMG", range: "14% – 30%", rule: "Lightning Rune pool only." }
    ]
  },
  {
    category: "Ninja ATK Buffs",
    badge: "Offensive",
    items: [
      { name: "Permanent ATK Increase", range: "50 – 120 ATK", rule: "Wind Rune pool only. 1 stack per effect line; no set-wide cap; does not re-stack on bonus triggers." },
      { name: "Temporary ATK (10s)", range: "50–120 flat OR per-hit", rule: "All 4 elements. Kamaitachi: +2 to +8/hit; Candle Dragon: +6 to +20/hit. Capped at 400 ATK set-wide." }
    ]
  },
  {
    category: "Survival & Utility Buffs",
    badge: "All 4 Elements",
    items: [
      { name: "Immediate HP Recovery", range: "50 – 120 HP", rule: "Capped at 500 HP per trigger across all equipped Runes." },
      { name: "Temp HP Recovery Speed (10s)", range: "5 – 10 HP/s", rule: "Stacks freely across lines with no limit." },
      { name: "Effect Resistance", range: "5% – 8%", rule: "Stacks freely across lines and Lv. 8 passive Effect % stats." }
    ]
  }
];
