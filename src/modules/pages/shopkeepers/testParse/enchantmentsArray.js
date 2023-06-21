const enchantArray = [
  {
    enchant_id: ["ARROW_DAMAGE", "POWER", "ARROW_DAMAGE", "ARROW_POWER", "AD"],
    enchant_id_ru: "Сила"
  },
  {
    enchant_id: ["ARROW_FIRE", "FLAME", "FLAME_ARROW", "FIRE_ARROW", "AF"],
    enchant_id_ru: "Горящая стрела"
  },
  {
    enchant_id: ["ARROW_INFINITE", "INFINITY", "INF_ARROWS", "INFINITE_ARROWS", "INFINITE", "UNLIMITED", "UNLIMITED_ARROWS", "AI"],
    enchant_id_ru: "Бесконечность"
  },
  {
    enchant_id: ["ARROW_KNOCKBACK", "PUNCH", "ARROW_KNOCKBACK", "ARROWKB", "ARROW_PUNCH", "AK"],
    enchant_id_ru: "Отбрасывание"
  },
  {
    enchant_id: ["BINDING_CURSE", "BINDING_CURSE", "BIND_CURSE", "BINDING", "BIND"],
    enchant_id_ru: "Проклятие несъёмности"
  },
  {
    enchant_id: ["CHANNELING", "CHANNELLING", "CHANELLING", "CHANELING", "CHANNEL"],
    enchant_id_ru: "Громовержец"
  },
  {
    enchant_id: ["DAMAGE_ALL", "SHARPNESS", "ALL_DAMAGE", "ALL_DMG", "SHARP", "DAL"],
    enchant_id_ru: "Острота"
  },
  {
    enchant_id: ["DAMAGE_ARTHROPODS","BANE_OF_ARTHROPODS", "ARDMG", "BANE_OF_ARTHROPOD", "ARTHROPOD", "DAR"],
    enchant_id_ru: "Бич членистоногих"
  },
  {
    enchant_id: ["DAMAGE_UNDEAD", "SMITE", "UNDEAD_DAMAGE", "DU"],
    enchant_id_ru: "Небесная кара"
  },
  {
    enchant_id: ["DEPTH_STRIDER", "DEPTH", "STRIDER"],
    enchant_id_ru: "Подводная ходьба"
  },
  {
    enchant_id: ["DIG_SPEED", "EFFICIENCY", "MINE_SPEED", "CUT_SPEED", "DS", "EFF" ],
    enchant_id_ru: "Эффективность"
  },
  {
    enchant_id: ["DURABILITY", "UNBREAKING", "DURA"],
    enchant_id_ru: "Прочность"
  },
  {
    enchant_id: ["FIRE_ASPECT", "FIRE", "MELEE_FIRE", "MELEE_FLAME", "FA"],
    enchant_id_ru: "Заговор огня"
  },
  {
    enchant_id: ["FROST_WALKER", "FROST", "WALKER"],
    enchant_id_ru: "Ледоход"
  },
  {
    enchant_id: ["IMPALING", "IMPALE", "OCEAN_DAMAGE", "OCEAN_DMG"],
    enchant_id_ru: "Пронзатель"
  },
  {
    enchant_id: ["KNOCKBACK", "K_BACK", "KB"],
    enchant_id_ru: "Отдача"
  },
  {
    enchant_id: ["LOOT_BONUS_BLOCKS", "FORTUNE", "BLOCKS_LOOT_BONUS", "FORT", "LBB"],
    enchant_id_ru: "Удача"
  },
  {
    enchant_id: ["LOOT_BONUS_MOBS", "LOOTING", "MOB_LOOT", "MOBS_LOOT_BONUS", "LBM"],
    enchant_id_ru: "Добыча"
  },
  {
    enchant_id: ["LOYALTY", "LOYAL", "RETURN"],
    enchant_id_ru: "Верность"
  },
  {
    enchant_id: ["LUCK", "LUCK_OF_THE_SEA", "LUCK_OF_SEA", "LUCK_OF_SEAS", "ROD_LUCK"],
    enchant_id_ru: "Везучий рыбак"
  },
  {
    enchant_id: ["LURE", "ROD_LURE"],
    enchant_id_ru: "Приманка"
  },
  {
    enchant_id: ["MENDING"],
    enchant_id_ru: "Починка"
  },
  {
    enchant_id: ["MULTISHOT", "TRIPLE_SHOT"],
    enchant_id_ru: "Тройной выстрел"
  },
  {
    enchant_id: ["OXYGEN", "RESPIRATION", "BREATH", "BREATHING", "O2", "O"],
    enchant_id_ru: "Подводное дыхание"
  },
  {
    enchant_id: ["PIERCING"],
    enchant_id_ru: "Пронзающая стрела"
  },
  {
    enchant_id: ["PROTECTION_ENVIRONMENTAL", "PROTECTION", "PROTECT", "PROT"],
    enchant_id_ru: "Защита"
  },
  {
    enchant_id: ["PROTECTION_EXPLOSIONS", "BLAST_PROTECTION", "BLAST_PROTECT", "EXPLOSIONS_PROTECTION", "EXPLOSION_PROTECTION", "BLAST_PROTECTION", "PE"],
    enchant_id_ru: "Взрывоустойчивость"
  },
  {
    enchant_id: ["PROTECTION_FALL", "FEATHER_FALLING", "FALL_PROT", "FEATHER_FALL", "FALL_PROTECTION", "FEATHER_FALLING", "PFA"],
    enchant_id_ru: "Невесомость"
  },
  {
    enchant_id: ["PROTECTION_FIRE", "FIRE_PROTECTION", "FIRE_PROT", "FIRE_PROTECT", "FIRE_PROTECTION", "FLAME_PROTECTION", "FLAME_PROTECT", "FLAME_PROT", "PF"],
    enchant_id_ru: "Огнеупорность"
  },
  {
    enchant_id: ["PROTECTION_PROJECTILE", "PROJECTILE_PROTECTION", "PROJECTILE_PROTECTION", "PROJ_PROT", "PP"],
    enchant_id_ru: "Защита от снарядов"
  },
  {
    enchant_id: ["QUICK_CHARGE", "QUICKCHARGE", "QUICK_DRAW", "FAST_CHARGE", "FAST_DRAW"],
    enchant_id_ru: "Быстрая перезарядка"
  },
  {
    enchant_id: ["RIPTIDE", "RIP", "TIDE", "LAUNCH"],
    enchant_id_ru: "Тягун"
  },
  {
    enchant_id: ["SILK_TOUCH", "SOFT_TOUCH", "ST"],
    enchant_id_ru: "Шёлковое касание"
  },
  {
    enchant_id: ["SOUL_SPEED", "SPEED_SOUL", "SOUL_RUNNER"],
    enchant_id_ru: "Скорость души"
  },
  {
    enchant_id: ["SWEEPING_EDGE", "SWEEPING", "SWEEPING_EDGE", "SWEEP_EDGE"],
    enchant_id_ru: "Разящий клинок"
  },
  {
    enchant_id: ["SWIFT_SNEAK", "SNEAK_SWIFT"],
    enchant_id_ru: "Проворство"
  },
  {
    enchant_id: ["THORNS", "HIGHCRIT", "THORN", "HIGHERCRIT", "T"],
    enchant_id_ru: "Шипы"
  },
  {
    enchant_id: ["VANISHING_CURSE", "VANISHING_CURSE", "VANISH_CURSE", "VANISHING", "VANISH"],
    enchant_id_ru: "Проклятье утраты"
  },
  {
    enchant_id: ["WATER_WORKER", "AQUA_AFFINITY", "WATER_WORKER", "AQUA_AFFINITY", "WATER_MINE", "WW"],
    enchant_id_ru: "Подводник"
  }
]

module.exports.enchantArray = enchantArray;