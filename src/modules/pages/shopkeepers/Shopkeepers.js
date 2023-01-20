import React, {useEffect, useState} from "react";
import {useAxios} from '../../../DataProvider';
import Preload from "../../components/preloader/Preload";

import "./Shopkeepers.scss";
import ShulkerBox from "../../components/[0_grouped_0]-shopkeepers/shulker-box/Shulker-box";
import OneSuggestions from "../../components/[0_grouped_0]-shopkeepers/one-suggestions/One-suggestions.js";
import Warn from "../../components/warn/Warn";

function isItemInteractive(item) {
  const items_to_show = [
    "BLACK_SHULKER_BOX",
    "BLUE_SHULKER_BOX",
    "BROWN_SHULKER_BOX",
    "CYAN_SHULKER_BOX",
    "GRAY_SHULKER_BOX",
    "GREEN_SHULKER_BOX",
    "LIGHT_BLUE_SHULKER_BOX",
    "LIGHT_GRAY_SHULKER_BOX",
    "LIME_SHULKER_BOX",
    "MAGENTA_SHULKER_BOX",
    "ORANGE_SHULKER_BOX",
    "PINK_SHULKER_BOX",
    "PURPLE_SHULKER_BOX",
    "RED_SHULKER_BOX",
    "SHULKER_BOX",
    "WHITE_SHULKER_BOX",
    "YELLOW_SHULKER_BOX",
  ];
  return items_to_show.includes(item.name);
}

const Shopkeepers = () => {

  const [infoShopName, setInfoShopName] = useState(" ");
  const [infoShopOwnerName, setInfoShopOwnerName] = useState(" ");
  const [infoShopCoordinatesX, setInfoShopCoordinatesX] = useState(" ");
  const [infoShopCoordinatesY, setInfoShopCoordinatesY] = useState(" ");
  const [infoShopCoordinatesZ, setInfoShopCoordinatesZ] = useState(" ");
  const [infoShopDiscordTag, setInfoShopDiscordTag] = useState(" ");
  const [infoShopRemaining, setInfoShopRemaining] = useState("Неизвесно");
  const [infoProfession, setInfoProfession] = useState("nitwit");
  const [infoVillagerType, setInfoVillagerType] = useState("plains");

  const [selectedItem, setSelectedItem] = useState(null);
  const [queryData, setQueryData] = useState("");

  function shopFunction (props) {
    setInfoShopName(props.name);
    setInfoShopOwnerName(props.owner_name);
    setInfoShopCoordinatesX(props.coordinates_x);
    setInfoShopCoordinatesY(props.coordinates_y);
    setInfoShopCoordinatesZ(props.coordinates_z);
    setInfoShopDiscordTag(props.discord_tag);
    setInfoVillagerType(props.villager_type);
    setInfoProfession(props.profession);
  }

  const item_name_data = {
    item_1: {
      type: "stone",
      item_name_ru: "Камень"
    },
    item_2: {
      type: "granite",
      item_name_ru: "Гранит"
    },
    item_3: {
      type: "polished_granite",
      item_name_ru: "Полированный гранит"
    },
    item_4: {
      type: "diorite",
      item_name_ru: "Диорит"
    },
    item_5: {
      type: "polished_diorite",
      item_name_ru: "Полированный диорит"
    },
    item_6: {
      type: "andesite",
      item_name_ru: "Андезит"
    },
    item_7: {
      type: "polished_andesite",
      item_name_ru: "Полированный андезит"
    },
    item_8: {
      type: "deepslate",
      item_name_ru: "Глубинный сланец"
    },
    item_9: {
      type: "cobbled_deepslate",
      item_name_ru: "Колотый глубинный сланец"
    },
    item_10: {
      type: "polished_deepslate",
      item_name_ru: "Полированный глубинный сланец"
    },
    item_11: {
      type: "calcite",
      item_name_ru: "Кальцит"
    },
    item_12: {
      type: "tuff",
      item_name_ru: "Туф"
    },
    item_13: {
      type: "dripstone_block",
      item_name_ru: "Натёчный камень"
    },
    item_14: {
      type: "grass_block",
      item_name_ru: "Дёрн"
    },
    item_15: {
      type: "dirt",
      item_name_ru: "Земля"
    },
    item_16: {
      type: "coarse_dirt",
      item_name_ru: "Каменистая земля"
    },
    item_17: {
      type: "podzol",
      item_name_ru: "Подзол"
    },
    item_18: {
      type: "rooted_dirt",
      item_name_ru: "Корнистая земля"
    },
    item_19: {
      type: "mud",
      item_name_ru: "Грязь"
    },
    item_20: {
      type: "crimson_nylium",
      item_name_ru: "Багровый нилий"
    },
    item_21: {
      type: "warped_nylium",
      item_name_ru: "Искажённый нилий"
    },
    item_22: {
      type: "cobblestone",
      item_name_ru: "Булыжник"
    },
    item_23: {
      type: "oak_planks",
      item_name_ru: "Дубовые доски"
    },
    item_24: {
      type: "spruce_planks",
      item_name_ru: "Еловые доски"
    },
    item_25: {
      type: "birch_planks",
      item_name_ru: "Берёзовые доски"
    },
    item_26: {
      type: "jungle_planks",
      item_name_ru: "Доски из тропического дерева"
    },
    item_27: {
      type: "acacia_planks",
      item_name_ru: "Акациевые доски"
    },
    item_28: {
      type: "dark_oak_planks",
      item_name_ru: "Доски из тёмного дуба"
    },
    item_29: {
      type: "mangrove_planks",
      item_name_ru: "Мангровые доски"
    },
    item_30: {
      type: "crimson_planks",
      item_name_ru: "Багровые доски"
    },
    item_31: {
      type: "warped_planks",
      item_name_ru: "Искажённые доски"
    },
    item_32: {
      type: "oak_sapling",
      item_name_ru: "Саженец дуба"
    },
    item_33: {
      type: "spruce_sapling",
      item_name_ru: "Саженец ели"
    },
    item_34: {
      type: "birch_sapling",
      item_name_ru: "Саженец берёзы"
    },
    item_35: {
      type: "jungle_sapling",
      item_name_ru: "Саженец тропического дерева"
    },
    item_36: {
      type: "acacia_sapling",
      item_name_ru: "Саженец акации"
    },
    item_37: {
      type: "dark_oak_sapling",
      item_name_ru: "Саженец тёмного дуба"
    },
    item_38: {
      type: "mangrove_propagule",
      item_name_ru: "Мангровый отросток"
    },
    item_39: {
      type: "bedrock",
      item_name_ru: "Бедрок"
    },
    item_40: {
      type: "sand",
      item_name_ru: "Песок"
    },
    item_41: {
      type: "red_sand",
      item_name_ru: "Красный песок"
    },
    item_42: {
      type: "gravel",
      item_name_ru: "Гравий"
    },
    item_43: {
      type: "coal_ore",
      item_name_ru: "Угольная руда"
    },
    item_44: {
      type: "deepslate_coal_ore",
      item_name_ru: "Угленосный глубинный сланец"
    },
    item_45: {
      type: "iron_ore",
      item_name_ru: "Железная руда"
    },
    item_46: {
      type: "deepslate_iron_ore",
      item_name_ru: "Железоносный глубинный сланец"
    },
    item_47: {
      type: "copper_ore",
      item_name_ru: "Медная руда"
    },
    item_48: {
      type: "deepslate_copper_ore",
      item_name_ru: "Меденосный глубинный сланец"
    },
    item_49: {
      type: "gold_ore",
      item_name_ru: "Золотая руда"
    },
    item_50: {
      type: "deepslate_gold_ore",
      item_name_ru: "Золотоносный глубинный сланец"
    },
    item_51: {
      type: "redstone_ore",
      item_name_ru: "Редстоуновая руда"
    },
    item_52: {
      type: "deepslate_redstone_ore",
      item_name_ru: "Редстоуноносный глубинный сланец"
    },
    item_53: {
      type: "emerald_ore",
      item_name_ru: "Изумрудная руда"
    },
    item_54: {
      type: "deepslate_emerald_ore",
      item_name_ru: "Изумрудоносный глубинный сланец"
    },
    item_55: {
      type: "lapis_ore",
      item_name_ru: "Лазуритовая руда"
    },
    item_56: {
      type: "deepslate_lapis_ore",
      item_name_ru: "Лазуритоносный глубинный сланец"
    },
    item_57: {
      type: "diamond_ore",
      item_name_ru: "Алмазная руда"
    },
    item_58: {
      type: "deepslate_diamond_ore",
      item_name_ru: "Алмазоносный глубинный сланец"
    },
    item_59: {
      type: "nether_gold_ore",
      item_name_ru: "Незерская золотая руда"
    },
    item_60: {
      type: "nether_quartz_ore",
      item_name_ru: "Незер-кварцевая руда"
    },
    item_61: {
      type: "ancient_debris",
      item_name_ru: "Древние обломки"
    },
    item_62: {
      type: "coal_block",
      item_name_ru: "Угольный блок"
    },
    item_63: {
      type: "raw_iron_block",
      item_name_ru: "Блок рудного железа"
    },
    item_64: {
      type: "raw_copper_block",
      item_name_ru: "Блок рудной меди"
    },
    item_65: {
      type: "raw_gold_block",
      item_name_ru: "Блок рудного золота"
    },
    item_66: {
      type: "amethyst_block",
      item_name_ru: "Аметистовый блок"
    },
    item_67: {
      type: "budding_amethyst",
      item_name_ru: "Цветущий аметист"
    },
    item_68: {
      type: "iron_block",
      item_name_ru: "Железный блок"
    },
    item_69: {
      type: "copper_block",
      item_name_ru: "Медный блок"
    },
    item_70: {
      type: "gold_block",
      item_name_ru: "Золотой блок"
    },
    item_71: {
      type: "diamond_block",
      item_name_ru: "Алмазный блок"
    },
    item_72: {
      type: "netherite_block",
      item_name_ru: "Незеритовый блок"
    },
    item_73: {
      type: "exposed_copper",
      item_name_ru: "Потемневший медный блок"
    },
    item_74: {
      type: "weathered_copper",
      item_name_ru: "Состаренный медный блок"
    },
    item_75: {
      type: "oxidized_copper",
      item_name_ru: "Окисленный медный блок"
    },
    item_76: {
      type: "cut_copper",
      item_name_ru: "Резной медный блок"
    },
    item_77: {
      type: "exposed_cut_copper",
      item_name_ru: "Потемневший резной медный блок"
    },
    item_78: {
      type: "weathered_cut_copper",
      item_name_ru: "Состаренный резной медный блок"
    },
    item_79: {
      type: "oxidized_cut_copper",
      item_name_ru: "Окисленный резной медный блок"
    },
    item_80: {
      type: "cut_copper_stairs",
      item_name_ru: "Резные медные ступеньки"
    },
    item_81: {
      type: "exposed_cut_copper_stairs",
      item_name_ru: "Потемневшие резные медные ступеньки"
    },
    item_82: {
      type: "weathered_cut_copper_stairs",
      item_name_ru: "Состаренные резные медные ступеньки"
    },
    item_83: {
      type: "oxidized_cut_copper_stairs",
      item_name_ru: "Окисленные резные медные ступеньки"
    },
    item_84: {
      type: "cut_copper_slab",
      item_name_ru: "Резная медная плита"
    },
    item_85: {
      type: "exposed_cut_copper_slab",
      item_name_ru: "Потемневшая резная медная плита"
    },
    item_86: {
      type: "weathered_cut_copper_slab",
      item_name_ru: "Состаренная резная медная плита"
    },
    item_87: {
      type: "oxidized_cut_copper_slab",
      item_name_ru: "Окисленная резная медная плита"
    },
    item_88: {
      type: "waxed_copper_block",
      item_name_ru: "Вощёный медный блок"
    },
    item_89: {
      type: "waxed_exposed_copper",
      item_name_ru: "Вощёный потемневший медный блок"
    },
    item_90: {
      type: "waxed_weathered_copper",
      item_name_ru: "Вощёный состаренный медный блок"
    },
    item_91: {
      type: "waxed_oxidized_copper",
      item_name_ru: "Вощёный окисленный медный блок"
    },
    item_92: {
      type: "waxed_cut_copper",
      item_name_ru: "Вощёный резной медный блок"
    },
    item_93: {
      type: "waxed_exposed_cut_copper",
      item_name_ru: "Вощёный потемневший резной медный блок"
    },
    item_94: {
      type: "waxed_weathered_cut_copper",
      item_name_ru: "Вощёный состаренный резной медный блок"
    },
    item_95: {
      type: "waxed_oxidized_cut_copper",
      item_name_ru: "Вощёный окисленный резной медный блок"
    },
    item_96: {
      type: "waxed_cut_copper_stairs",
      item_name_ru: "Вощёные резные медные ступеньки"
    },
    item_97: {
      type: "waxed_exposed_cut_copper_stairs",
      item_name_ru: "Вощёные потемневшие резные медные ступеньки"
    },
    item_98: {
      type: "waxed_weathered_cut_copper_stairs",
      item_name_ru: "Вощёные состаренные резные медные ступеньки"
    },
    item_99: {
      type: "waxed_oxidized_cut_copper_stairs",
      item_name_ru: "Вощёные окисленные резные медные ступеньки"
    },
    item_100: {
      type: "waxed_cut_copper_slab",
      item_name_ru: "Вощёная резная медная плита"
    },
    item_101: {
      type: "waxed_exposed_cut_copper_slab",
      item_name_ru: "Вощёная потемневшая резная медная плита"
    },
    item_102: {
      type: "waxed_weathered_cut_copper_slab",
      item_name_ru: "Вощёная состаренная резная медная плита"
    },
    item_103: {
      type: "waxed_oxidized_cut_copper_slab",
      item_name_ru: "Вощёная окисленная резная медная плита"
    },
    item_104: {
      type: "oak_log",
      item_name_ru: "Дубовое бревно"
    },
    item_105: {
      type: "spruce_log",
      item_name_ru: "Еловое бревно"
    },
    item_106: {
      type: "birch_log",
      item_name_ru: "Берёзовое бревно"
    },
    item_107: {
      type: "jungle_log",
      item_name_ru: "Бревно тропического дерева"
    },
    item_108: {
      type: "acacia_log",
      item_name_ru: "Акациевое бревно"
    },
    item_109: {
      type: "dark_oak_log",
      item_name_ru: "Бревно тёмного дуба"
    },
    item_110: {
      type: "mangrove_log",
      item_name_ru: "Мангровое бревно"
    },
    item_111: {
      type: "mangrove_roots",
      item_name_ru: "Мангровые корни"
    },
    item_112: {
      type: "muddy_mangrove_roots",
      item_name_ru: "Грязные мангровые корни"
    },
    item_113: {
      type: "crimson_stem",
      item_name_ru: "Багровый стебель"
    },
    item_114: {
      type: "warped_stem",
      item_name_ru: "Искажённый стебель"
    },
    item_115: {
      type: "stripped_oak_log",
      item_name_ru: "Обтёсанное дубовое бревно"
    },
    item_116: {
      type: "stripped_spruce_log",
      item_name_ru: "Обтёсанное еловое бревно"
    },
    item_117: {
      type: "stripped_birch_log",
      item_name_ru: "Обтёсанное берёзовое бревно"
    },
    item_118: {
      type: "stripped_jungle_log",
      item_name_ru: "Обтёсанное бревно тропического дерева"
    },
    item_119: {
      type: "stripped_acacia_log",
      item_name_ru: "Обтёсанное акациевое бревно"
    },
    item_120: {
      type: "stripped_dark_oak_log",
      item_name_ru: "Обтёсанное бревно тёмного дуба"
    },
    item_121: {
      type: "stripped_mangrove_log",
      item_name_ru: "Обтёсанное мангровое бревно"
    },
    item_122: {
      type: "stripped_crimson_stem",
      item_name_ru: "Очищенный багровый стебель"
    },
    item_123: {
      type: "stripped_warped_stem",
      item_name_ru: "Очищенный искажённый стебель"
    },
    item_124: {
      type: "stripped_oak_wood",
      item_name_ru: "Обтёсанная дубовая древесина"
    },
    item_125: {
      type: "stripped_spruce_wood",
      item_name_ru: "Обтёсанная еловая древесина"
    },
    item_126: {
      type: "stripped_birch_wood",
      item_name_ru: "Обтёсанная берёзовая древесина"
    },
    item_127: {
      type: "stripped_jungle_wood",
      item_name_ru: "Обтёсанная тропическая древесина"
    },
    item_128: {
      type: "stripped_acacia_wood",
      item_name_ru: "Обтёсанная акациевая древесина"
    },
    item_129: {
      type: "stripped_dark_oak_wood",
      item_name_ru: "Обтёсанная древесина тёмного дуба"
    },
    item_130: {
      type: "stripped_mangrove_wood",
      item_name_ru: "Обтёсанная мангровая древесина"
    },
    item_131: {
      type: "stripped_crimson_hyphae",
      item_name_ru: "Очищенные багровые гифы"
    },
    item_132: {
      type: "stripped_warped_hyphae",
      item_name_ru: "Очищенные искажённые гифы"
    },
    item_133: {
      type: "oak_wood",
      item_name_ru: "Дуб"
    },
    item_134: {
      type: "spruce_wood",
      item_name_ru: "Ель"
    },
    item_135: {
      type: "birch_wood",
      item_name_ru: "Берёза"
    },
    item_136: {
      type: "jungle_wood",
      item_name_ru: "Тропическое дерево"
    },
    item_137: {
      type: "acacia_wood",
      item_name_ru: "Акация"
    },
    item_138: {
      type: "dark_oak_wood",
      item_name_ru: "Тёмный дуб"
    },
    item_139: {
      type: "mangrove_wood",
      item_name_ru: "Мангровое дерево"
    },
    item_140: {
      type: "crimson_hyphae",
      item_name_ru: "Багровые гифы"
    },
    item_141: {
      type: "warped_hyphae",
      item_name_ru: "Искажённые гифы"
    },
    item_142: {
      type: "oak_leaves",
      item_name_ru: "Дубовые листья"
    },
    item_143: {
      type: "spruce_leaves",
      item_name_ru: "Хвоя"
    },
    item_144: {
      type: "birch_leaves",
      item_name_ru: "Берёзовые листья"
    },
    item_145: {
      type: "jungle_leaves",
      item_name_ru: "Листья тропического дерева"
    },
    item_146: {
      type: "acacia_leaves",
      item_name_ru: "Листья акации"
    },
    item_147: {
      type: "dark_oak_leaves",
      item_name_ru: "Листья тёмного дуба"
    },
    item_148: {
      type: "mangrove_leaves",
      item_name_ru: "Мангровые листья"
    },
    item_149: {
      type: "azalea_leaves",
      item_name_ru: "Листья азалии"
    },
    item_150: {
      type: "flowering_azalea_leaves",
      item_name_ru: "Листья цветущей азалии"
    },
    item_151: {
      type: "sponge",
      item_name_ru: "Губка"
    },
    item_152: {
      type: "wet_sponge",
      item_name_ru: "Мокрая губка"
    },
    item_153: {
      type: "glass",
      item_name_ru: "Стекло"
    },
    item_154: {
      type: "tinted_glass",
      item_name_ru: "Тонированное стекло"
    },
    item_155: {
      type: "lapis_block",
      item_name_ru: "Лазуритовый блок"
    },
    item_156: {
      type: "sandstone",
      item_name_ru: "Песчаник"
    },
    item_157: {
      type: "chiseled_sandstone",
      item_name_ru: "Резной песчаник"
    },
    item_158: {
      type: "cut_sandstone",
      item_name_ru: "Пиленый песчаник"
    },
    item_159: {
      type: "cobweb",
      item_name_ru: "Паутина"
    },
    item_160: {
      type: "grass",
      item_name_ru: "Трава"
    },
    item_161: {
      type: "fern",
      item_name_ru: "Папоротник"
    },
    item_162: {
      type: "azalea",
      item_name_ru: "Азалия"
    },
    item_163: {
      type: "flowering_azalea",
      item_name_ru: "Цветущая азалия"
    },
    item_164: {
      type: "dead_bush",
      item_name_ru: "Мёртвый куст"
    },
    item_165: {
      type: "seagrass",
      item_name_ru: "Морская трава"
    },
    item_166: {
      type: "sea_pickle",
      item_name_ru: "Морской огурец"
    },
    item_167: {
      type: "white_wool",
      item_name_ru: "Белая шерсть"
    },
    item_168: {
      type: "orange_wool",
      item_name_ru: "Оранжевая шерсть"
    },
    item_169: {
      type: "magenta_wool",
      item_name_ru: "Пурпурная шерсть"
    },
    item_170: {
      type: "light_blue_wool",
      item_name_ru: "Голубая шерсть"
    },
    item_171: {
      type: "yellow_wool",
      item_name_ru: "Жёлтая шерсть"
    },
    item_172: {
      type: "lime_wool",
      item_name_ru: "Лаймовая шерсть"
    },
    item_173: {
      type: "pink_wool",
      item_name_ru: "Розовая шерсть"
    },
    item_174: {
      type: "gray_wool",
      item_name_ru: "Серая шерсть"
    },
    item_175: {
      type: "light_gray_wool",
      item_name_ru: "Светло-серая шерсть"
    },
    item_176: {
      type: "cyan_wool",
      item_name_ru: "Бирюзовая шерсть"
    },
    item_177: {
      type: "purple_wool",
      item_name_ru: "Фиолетовая шерсть"
    },
    item_178: {
      type: "blue_wool",
      item_name_ru: "Синяя шерсть"
    },
    item_179: {
      type: "brown_wool",
      item_name_ru: "Коричневая шерсть"
    },
    item_180: {
      type: "green_wool",
      item_name_ru: "Зелёная шерсть"
    },
    item_181: {
      type: "red_wool",
      item_name_ru: "Красная шерсть"
    },
    item_182: {
      type: "black_wool",
      item_name_ru: "Чёрная шерсть"
    },
    item_183: {
      type: "dandelion",
      item_name_ru: "Одуванчик"
    },
    item_184: {
      type: "poppy",
      item_name_ru: "Мак"
    },
    item_185: {
      type: "blue_orchid",
      item_name_ru: "Синяя орхидея"
    },
    item_186: {
      type: "allium",
      item_name_ru: "Лук-батун"
    },
    item_187: {
      type: "azure_bluet",
      item_name_ru: "Хаустония серая"
    },
    item_188: {
      type: "red_tulip",
      item_name_ru: "Красный тюльпан"
    },
    item_189: {
      type: "orange_tulip",
      item_name_ru: "Оранжевый тюльпан"
    },
    item_190: {
      type: "white_tulip",
      item_name_ru: "Белый тюльпан"
    },
    item_191: {
      type: "pink_tulip",
      item_name_ru: "Розовый тюльпан"
    },
    item_192: {
      type: "oxeye_daisy",
      item_name_ru: "Ромашка"
    },
    item_193: {
      type: "cornflower",
      item_name_ru: "Синий василёк"
    },
    item_194: {
      type: "lily_of_the_valley",
      item_name_ru: "Ландыш"
    },
    item_195: {
      type: "wither_rose",
      item_name_ru: "Роза визера"
    },
    item_196: {
      type: "spore_blossom",
      item_name_ru: "Спороцвет"
    },
    item_197: {
      type: "brown_mushroom",
      item_name_ru: "Коричневый гриб"
    },
    item_198: {
      type: "red_mushroom",
      item_name_ru: "Красный гриб"
    },
    item_199: {
      type: "crimson_fungus",
      item_name_ru: "Багровый гриб"
    },
    item_200: {
      type: "warped_fungus",
      item_name_ru: "Искажённый гриб"
    },
    item_201: {
      type: "crimson_roots",
      item_name_ru: "Багровые корни"
    },
    item_202: {
      type: "warped_roots",
      item_name_ru: "Искажённые корни"
    },
    item_203: {
      type: "nether_sprouts",
      item_name_ru: "Незерские ростки"
    },
    item_204: {
      type: "weeping_vines",
      item_name_ru: "Плакучая лоза"
    },
    item_205: {
      type: "twisting_vines",
      item_name_ru: "Вьющаяся лоза"
    },
    item_206: {
      type: "sugar_cane",
      item_name_ru: "Сахарный тростник"
    },
    item_207: {
      type: "kelp",
      item_name_ru: "Ламинария"
    },
    item_208: {
      type: "moss_carpet",
      item_name_ru: "Моховой ковёр"
    },
    item_209: {
      type: "moss_block",
      item_name_ru: "Блок мха"
    },
    item_210: {
      type: "hanging_roots",
      item_name_ru: "Свисающие корни"
    },
    item_211: {
      type: "big_dripleaf",
      item_name_ru: "Большая бросянка"
    },
    item_212: {
      type: "small_dripleaf",
      item_name_ru: "Маленькая бросянка"
    },
    item_213: {
      type: "bamboo",
      item_name_ru: "Бамбук"
    },
    item_214: {
      type: "oak_slab",
      item_name_ru: "Дубовая плита"
    },
    item_215: {
      type: "spruce_slab",
      item_name_ru: "Еловая плита"
    },
    item_216: {
      type: "birch_slab",
      item_name_ru: "Берёзовая плита"
    },
    item_217: {
      type: "jungle_slab",
      item_name_ru: "Плита из тропического дерева"
    },
    item_218: {
      type: "acacia_slab",
      item_name_ru: "Акациевая плита"
    },
    item_219: {
      type: "dark_oak_slab",
      item_name_ru: "Плита из тёмного дуба"
    },
    item_220: {
      type: "mangrove_slab",
      item_name_ru: "Мангровая плита"
    },
    item_221: {
      type: "crimson_slab",
      item_name_ru: "Багровая плита"
    },
    item_222: {
      type: "warped_slab",
      item_name_ru: "Искажённая плита"
    },
    item_223: {
      type: "stone_slab",
      item_name_ru: "Каменная плита"
    },
    item_224: {
      type: "smooth_stone_slab",
      item_name_ru: "Плита из гладкого камня"
    },
    item_225: {
      type: "sandstone_slab",
      item_name_ru: "Песчаниковая плита"
    },
    item_226: {
      type: "cut_sandstone_slab",
      item_name_ru: "Плита из пиленого песчаника"
    },
    item_227: {
      type: "petrified_oak_slab",
      item_name_ru: "Окаменевшая дубовая плита"
    },
    item_228: {
      type: "cobblestone_slab",
      item_name_ru: "Булыжная плита"
    },
    item_229: {
      type: "brick_slab",
      item_name_ru: "Кирпичная плита"
    },
    item_230: {
      type: "stone_brick_slab",
      item_name_ru: "Плита из каменного кирпича"
    },
    item_231: {
      type: "mud_brick_slab",
      item_name_ru: "Саманная плита"
    },
    item_232: {
      type: "nether_brick_slab",
      item_name_ru: "Незерская плита"
    },
    item_233: {
      type: "quartz_slab",
      item_name_ru: "Кварцевая плита"
    },
    item_234: {
      type: "red_sandstone_slab",
      item_name_ru: "Плита из красного песчаника"
    },
    item_235: {
      type: "cut_red_sandstone_slab",
      item_name_ru: "Плита из пиленого красного песчаника"
    },
    item_236: {
      type: "purpur_slab",
      item_name_ru: "Пурпуровая плита"
    },
    item_237: {
      type: "prismarine_slab",
      item_name_ru: "Призмариновая плита"
    },
    item_238: {
      type: "prismarine_brick_slab",
      item_name_ru: "Плита из призмаринового кирпича"
    },
    item_239: {
      type: "dark_prismarine_slab",
      item_name_ru: "Плита из тёмного призмарина"
    },
    item_240: {
      type: "smooth_quartz",
      item_name_ru: "Гладкий кварц"
    },
    item_241: {
      type: "smooth_red_sandstone",
      item_name_ru: "Гладкий красный песчаник"
    },
    item_242: {
      type: "smooth_sandstone",
      item_name_ru: "Гладкий песчаник"
    },
    item_243: {
      type: "smooth_stone",
      item_name_ru: "Гладкий камень"
    },
    item_244: {
      type: "bricks",
      item_name_ru: "Кирпичи"
    },
    item_245: {
      type: "bookshelf",
      item_name_ru: "Книжная полка"
    },
    item_246: {
      type: "mossy_cobblestone",
      item_name_ru: "Замшелый булыжник"
    },
    item_247: {
      type: "obsidian",
      item_name_ru: "Обсидиан"
    },
    item_248: {
      type: "torch",
      item_name_ru: "Факел"
    },
    item_249: {
      type: "end_rod",
      item_name_ru: "Стержень Энда"
    },
    item_250: {
      type: "chorus_plant",
      item_name_ru: "Хорус"
    },
    item_251: {
      type: "chorus_flower",
      item_name_ru: "Цветок хоруса"
    },
    item_252: {
      type: "purpur_block",
      item_name_ru: "Пурпур"
    },
    item_253: {
      type: "purpur_pillar",
      item_name_ru: "Пурпуровый пилон"
    },
    item_254: {
      type: "purpur_stairs",
      item_name_ru: "Пурпуровые ступеньки"
    },
    item_255: {
      type: "spawner",
      item_name_ru: "Рассадник"
    },
    item_256: {
      type: "chest",
      item_name_ru: "Сундук"
    },
    item_257: {
      type: "crafting_table",
      item_name_ru: "Верстак"
    },
    item_258: {
      type: "farmland",
      item_name_ru: "Пашня"
    },
    item_259: {
      type: "furnace",
      item_name_ru: "Печь"
    },
    item_260: {
      type: "ladder",
      item_name_ru: "Лестница"
    },
    item_261: {
      type: "cobblestone_stairs",
      item_name_ru: "Булыжные ступеньки"
    },
    item_262: {
      type: "snow",
      item_name_ru: "Снег"
    },
    item_263: {
      type: "ice",
      item_name_ru: "Лёд"
    },
    item_264: {
      type: "snow_block",
      item_name_ru: "Блок снега"
    },
    item_265: {
      type: "cactus",
      item_name_ru: "Кактус"
    },
    item_266: {
      type: "clay",
      item_name_ru: "Глина"
    },
    item_267: {
      type: "jukebox",
      item_name_ru: "Проигрыватель"
    },
    item_268: {
      type: "oak_fence",
      item_name_ru: "Дубовый забор"
    },
    item_269: {
      type: "spruce_fence",
      item_name_ru: "Еловый забор"
    },
    item_270: {
      type: "birch_fence",
      item_name_ru: "Берёзовый забор"
    },
    item_271: {
      type: "jungle_fence",
      item_name_ru: "Забор из тропического дерева"
    },
    item_272: {
      type: "acacia_fence",
      item_name_ru: "Акациевый забор"
    },
    item_273: {
      type: "dark_oak_fence",
      item_name_ru: "Забор из тёмного дуба"
    },
    item_274: {
      type: "mangrove_fence",
      item_name_ru: "Мангровый забор"
    },
    item_275: {
      type: "crimson_fence",
      item_name_ru: "Багровый забор"
    },
    item_276: {
      type: "warped_fence",
      item_name_ru: "Искажённый забор"
    },
    item_277: {
      type: "pumpkin",
      item_name_ru: "Тыква"
    },
    item_278: {
      type: "carved_pumpkin",
      item_name_ru: "Вырезанная тыква"
    },
    item_279: {
      type: "jack_o_lantern",
      item_name_ru: "Светильник Джека"
    },
    item_280: {
      type: "netherrack",
      item_name_ru: "Незерак"
    },
    item_281: {
      type: "soul_sand",
      item_name_ru: "Песок душ"
    },
    item_282: {
      type: "soul_soil",
      item_name_ru: "Почва душ"
    },
    item_283: {
      type: "basalt",
      item_name_ru: "Базальт"
    },
    item_284: {
      type: "polished_basalt",
      item_name_ru: "Полированный базальт"
    },
    item_285: {
      type: "smooth_basalt",
      item_name_ru: "Гладкий базальт"
    },
    item_286: {
      type: "soul_torch",
      item_name_ru: "Факел душ"
    },
    item_287: {
      type: "glowstone",
      item_name_ru: "Светокамень"
    },
    item_288: {
      type: "infested_stone",
      item_name_ru: "Заражённый камень"
    },
    item_289: {
      type: "infested_cobblestone",
      item_name_ru: "Заражённый булыжник"
    },
    item_290: {
      type: "infested_stone_bricks",
      item_name_ru: "Заражённые каменные кирпичи"
    },
    item_291: {
      type: "infested_mossy_stone_bricks",
      item_name_ru: "Заражённые замшелые каменные кирпичи"
    },
    item_292: {
      type: "infested_cracked_stone_bricks",
      item_name_ru: "Заражённые потрескавшиеся каменные кирпичи"
    },
    item_293: {
      type: "infested_chiseled_stone_bricks",
      item_name_ru: "Заражённые резные каменные кирпичи"
    },
    item_294: {
      type: "infested_deepslate",
      item_name_ru: "Заражённый глубинный сланец"
    },
    item_295: {
      type: "stone_bricks",
      item_name_ru: "Каменные кирпичи"
    },
    item_296: {
      type: "mossy_stone_bricks",
      item_name_ru: "Замшелые каменные кирпичи"
    },
    item_297: {
      type: "cracked_stone_bricks",
      item_name_ru: "Потрескавшиеся каменные кирпичи"
    },
    item_298: {
      type: "chiseled_stone_bricks",
      item_name_ru: "Резные каменные кирпичи"
    },
    item_299: {
      type: "packed_mud",
      item_name_ru: "Плотная грязь"
    },
    item_300: {
      type: "mud_bricks",
      item_name_ru: "Саманные кирпичи"
    },
    item_301: {
      type: "deepslate_bricks",
      item_name_ru: "Глубинносланцевые кирпичи"
    },
    item_302: {
      type: "cracked_deepslate_bricks",
      item_name_ru: "Потрескавшиеся глубинносланцевые кирпичи"
    },
    item_303: {
      type: "deepslate_tiles",
      item_name_ru: "Глубинносланцевый плитняк"
    },
    item_304: {
      type: "cracked_deepslate_tiles",
      item_name_ru: "Потрескавшийся глубинносланцевый плитняк"
    },
    item_305: {
      type: "chiseled_deepslate",
      item_name_ru: "Резной глубинный сланец"
    },
    item_306: {
      type: "reinforced_deepslate",
      item_name_ru: "Укреплённый глубинный сланец"
    },
    item_307: {
      type: "brown_mushroom_block",
      item_name_ru: "Блок коричневого гриба"
    },
    item_308: {
      type: "red_mushroom_block",
      item_name_ru: "Блок красного гриба"
    },
    item_309: {
      type: "mushroom_stem",
      item_name_ru: "Ножка гриба"
    },
    item_310: {
      type: "iron_bars",
      item_name_ru: "Железные прутья"
    },
    item_311: {
      type: "chain",
      item_name_ru: "Цепь"
    },
    item_312: {
      type: "glass_pane",
      item_name_ru: "Стеклянная панель"
    },
    item_313: {
      type: "melon",
      item_name_ru: "Арбуз"
    },
    item_314: {
      type: "vine",
      item_name_ru: "Лианы"
    },
    item_315: {
      type: "glow_lichen",
      item_name_ru: "Светящийся лишайник"
    },
    item_316: {
      type: "brick_stairs",
      item_name_ru: "Кирпичные ступеньки"
    },
    item_317: {
      type: "stone_brick_stairs",
      item_name_ru: "Ступеньки из каменного кирпича"
    },
    item_318: {
      type: "mud_brick_stairs",
      item_name_ru: "Саманные ступеньки"
    },
    item_319: {
      type: "mycelium",
      item_name_ru: "Мицелий"
    },
    item_320: {
      type: "lily_pad",
      item_name_ru: "Кувшинка"
    },
    item_321: {
      type: "nether_bricks",
      item_name_ru: "Незерские кирпичи"
    },
    item_322: {
      type: "cracked_nether_bricks",
      item_name_ru: "Потрескавшиеся незерские кирпичи"
    },
    item_323: {
      type: "chiseled_nether_bricks",
      item_name_ru: "Резные незерские кирпичи"
    },
    item_324: {
      type: "nether_brick_fence",
      item_name_ru: "Незерский забор"
    },
    item_325: {
      type: "nether_brick_stairs",
      item_name_ru: "Незерские ступеньки"
    },
    item_326: {
      type: "sculk",
      item_name_ru: "Скалк"
    },
    item_327: {
      type: "sculk_vein",
      item_name_ru: "Скалковая жила"
    },
    item_328: {
      type: "sculk_catalyst",
      item_name_ru: "Скалковый катализатор"
    },
    item_329: {
      type: "sculk_shrieker",
      item_name_ru: "Скалковый крикун"
    },
    item_330: {
      type: "enchanting_table",
      item_name_ru: "Чародейский стол"
    },
    item_331: {
      type: "end_portal_frame",
      item_name_ru: "Рамка портала в Энд"
    },
    item_332: {
      type: "end_stone",
      item_name_ru: "Эндерняк"
    },
    item_333: {
      type: "end_stone_bricks",
      item_name_ru: "Эндерняковые кирпичи"
    },
    item_334: {
      type: "dragon_egg",
      item_name_ru: "Яйцо дракона"
    },
    item_335: {
      type: "sandstone_stairs",
      item_name_ru: "Песчаниковые ступеньки"
    },
    item_336: {
      type: "ender_chest",
      item_name_ru: "Эндер-сундук"
    },
    item_337: {
      type: "emerald_block",
      item_name_ru: "Изумрудный блок"
    },
    item_338: {
      type: "oak_stairs",
      item_name_ru: "Дубовые ступеньки"
    },
    item_339: {
      type: "spruce_stairs",
      item_name_ru: "Еловые ступеньки"
    },
    item_340: {
      type: "birch_stairs",
      item_name_ru: "Берёзовые ступеньки"
    },
    item_341: {
      type: "jungle_stairs",
      item_name_ru: "Ступеньки из тропического дерева"
    },
    item_342: {
      type: "acacia_stairs",
      item_name_ru: "Акациевые ступеньки"
    },
    item_343: {
      type: "dark_oak_stairs",
      item_name_ru: "Ступеньки из тёмного дуба"
    },
    item_344: {
      type: "mangrove_stairs",
      item_name_ru: "Мангровые ступеньки"
    },
    item_345: {
      type: "crimson_stairs",
      item_name_ru: "Багровые ступеньки"
    },
    item_346: {
      type: "warped_stairs",
      item_name_ru: "Искажённые ступеньки"
    },
    item_347: {
      type: "command_block",
      item_name_ru: "Командный блок"
    },
    item_348: {
      type: "beacon",
      item_name_ru: "Маяк"
    },
    item_349: {
      type: "cobblestone_wall",
      item_name_ru: "Булыжная ограда"
    },
    item_350: {
      type: "mossy_cobblestone_wall",
      item_name_ru: "Замшелая булыжная ограда"
    },
    item_351: {
      type: "brick_wall",
      item_name_ru: "Кирпичная ограда"
    },
    item_352: {
      type: "prismarine_wall",
      item_name_ru: "Призмариновая ограда"
    },
    item_353: {
      type: "red_sandstone_wall",
      item_name_ru: "Ограда из красного песчаника"
    },
    item_354: {
      type: "mossy_stone_brick_wall",
      item_name_ru: "Ограда из замшелого каменного кирпича"
    },
    item_355: {
      type: "granite_wall",
      item_name_ru: "Гранитная ограда"
    },
    item_356: {
      type: "stone_brick_wall",
      item_name_ru: "Ограда из каменного кирпича"
    },
    item_357: {
      type: "mud_brick_wall",
      item_name_ru: "Саманная ограда"
    },
    item_358: {
      type: "nether_brick_wall",
      item_name_ru: "Ограда из незерского кирпича"
    },
    item_359: {
      type: "andesite_wall",
      item_name_ru: "Андезитовая ограда"
    },
    item_360: {
      type: "red_nether_brick_wall",
      item_name_ru: "Ограда из красного незерского кирпича"
    },
    item_361: {
      type: "sandstone_wall",
      item_name_ru: "Песчаниковая ограда"
    },
    item_362: {
      type: "end_stone_brick_wall",
      item_name_ru: "Ограда из эндернякового кирпича"
    },
    item_363: {
      type: "diorite_wall",
      item_name_ru: "Диоритовая ограда"
    },
    item_364: {
      type: "blackstone_wall",
      item_name_ru: "Чернитная ограда"
    },
    item_365: {
      type: "polished_blackstone_wall",
      item_name_ru: "Ограда из полированного чернита"
    },
    item_366: {
      type: "polished_blackstone_brick_wall",
      item_name_ru: "Ограда из полированно-чернитного кирпича"
    },
    item_367: {
      type: "cobbled_deepslate_wall",
      item_name_ru: "Ограда из колотого глубинного сланца"
    },
    item_368: {
      type: "polished_deepslate_wall",
      item_name_ru: "Ограда из полированного глубинного сланца"
    },
    item_369: {
      type: "deepslate_brick_wall",
      item_name_ru: "Ограда из глубинносланцевого кирпича"
    },
    item_370: {
      type: "deepslate_tile_wall",
      item_name_ru: "Ограда из глубинносланцевого плитняка"
    },
    item_371: {
      type: "anvil",
      item_name_ru: "Наковальня"
    },
    item_372: {
      type: "chipped_anvil",
      item_name_ru: "Повреждённая наковальня"
    },
    item_373: {
      type: "damaged_anvil",
      item_name_ru: "Разбитая наковальня"
    },
    item_374: {
      type: "chiseled_quartz_block",
      item_name_ru: "Резной кварцевый блок"
    },
    item_375: {
      type: "quartz_block",
      item_name_ru: "Кварцевый блок"
    },
    item_376: {
      type: "quartz_bricks",
      item_name_ru: "Кварцевые кирпичи"
    },
    item_377: {
      type: "quartz_pillar",
      item_name_ru: "Кварцевая колонна"
    },
    item_378: {
      type: "quartz_stairs",
      item_name_ru: "Кварцевые ступеньки"
    },
    item_379: {
      type: "white_terracotta",
      item_name_ru: "Белая керамика"
    },
    item_380: {
      type: "orange_terracotta",
      item_name_ru: "Оранжевая керамика"
    },
    item_381: {
      type: "magenta_terracotta",
      item_name_ru: "Пурпурная керамика"
    },
    item_382: {
      type: "light_blue_terracotta",
      item_name_ru: "Голубая керамика"
    },
    item_383: {
      type: "yellow_terracotta",
      item_name_ru: "Жёлтая керамика"
    },
    item_384: {
      type: "lime_terracotta",
      item_name_ru: "Лаймовая керамика"
    },
    item_385: {
      type: "pink_terracotta",
      item_name_ru: "Розовая керамика"
    },
    item_386: {
      type: "gray_terracotta",
      item_name_ru: "Серая керамика"
    },
    item_387: {
      type: "light_gray_terracotta",
      item_name_ru: "Светло-серая керамика"
    },
    item_388: {
      type: "cyan_terracotta",
      item_name_ru: "Бирюзовая керамика"
    },
    item_389: {
      type: "purple_terracotta",
      item_name_ru: "Фиолетовая керамика"
    },
    item_390: {
      type: "blue_terracotta",
      item_name_ru: "Синяя керамика"
    },
    item_391: {
      type: "brown_terracotta",
      item_name_ru: "Коричневая керамика"
    },
    item_392: {
      type: "green_terracotta",
      item_name_ru: "Зелёная керамика"
    },
    item_393: {
      type: "red_terracotta",
      item_name_ru: "Красная керамика"
    },
    item_394: {
      type: "black_terracotta",
      item_name_ru: "Чёрная керамика"
    },
    item_395: {
      type: "barrier",
      item_name_ru: "Барьер"
    },
    item_396: {
      type: "light",
      item_name_ru: "Свет"
    },
    item_397: {
      type: "hay_block",
      item_name_ru: "Сноп сена"
    },
    item_398: {
      type: "white_carpet",
      item_name_ru: "Белый ковёр"
    },
    item_399: {
      type: "orange_carpet",
      item_name_ru: "Оранжевый ковёр"
    },
    item_400: {
      type: "magenta_carpet",
      item_name_ru: "Пурпурный ковёр"
    },
    item_401: {
      type: "light_blue_carpet",
      item_name_ru: "Голубой ковёр"
    },
    item_402: {
      type: "yellow_carpet",
      item_name_ru: "Жёлтый ковёр"
    },
    item_403: {
      type: "lime_carpet",
      item_name_ru: "Лаймовый ковёр"
    },
    item_404: {
      type: "pink_carpet",
      item_name_ru: "Розовый ковёр"
    },
    item_405: {
      type: "gray_carpet",
      item_name_ru: "Серый ковёр"
    },
    item_406: {
      type: "light_gray_carpet",
      item_name_ru: "Светло-серый ковёр"
    },
    item_407: {
      type: "cyan_carpet",
      item_name_ru: "Бирюзовый ковёр"
    },
    item_408: {
      type: "purple_carpet",
      item_name_ru: "Фиолетовый ковёр"
    },
    item_409: {
      type: "blue_carpet",
      item_name_ru: "Синий ковёр"
    },
    item_410: {
      type: "brown_carpet",
      item_name_ru: "Коричневый ковёр"
    },
    item_411: {
      type: "green_carpet",
      item_name_ru: "Зелёный ковёр"
    },
    item_412: {
      type: "red_carpet",
      item_name_ru: "Красный ковёр"
    },
    item_413: {
      type: "black_carpet",
      item_name_ru: "Чёрный ковёр"
    },
    item_414: {
      type: "terracotta",
      item_name_ru: "Терракота"
    },
    item_415: {
      type: "packed_ice",
      item_name_ru: "Плотный лёд"
    },
    item_416: {
      type: "dirt_path",
      item_name_ru: "Тропинка"
    },
    item_417: {
      type: "sunflower",
      item_name_ru: "Подсолнух"
    },
    item_418: {
      type: "lilac",
      item_name_ru: "Сирень"
    },
    item_419: {
      type: "rose_bush",
      item_name_ru: "Розовый куст"
    },
    item_420: {
      type: "peony",
      item_name_ru: "Пион"
    },
    item_421: {
      type: "tall_grass",
      item_name_ru: "Высокая трава"
    },
    item_422: {
      type: "large_fern",
      item_name_ru: "Раскидистый папоротник"
    },
    item_423: {
      type: "white_stained_glass",
      item_name_ru: "Белое стекло"
    },
    item_424: {
      type: "orange_stained_glass",
      item_name_ru: "Оранжевое стекло"
    },
    item_425: {
      type: "magenta_stained_glass",
      item_name_ru: "Пурпурное стекло"
    },
    item_426: {
      type: "light_blue_stained_glass",
      item_name_ru: "Голубое стекло"
    },
    item_427: {
      type: "yellow_stained_glass",
      item_name_ru: "Жёлтое стекло"
    },
    item_428: {
      type: "lime_stained_glass",
      item_name_ru: "Лаймовое стекло"
    },
    item_429: {
      type: "pink_stained_glass",
      item_name_ru: "Розовое стекло"
    },
    item_430: {
      type: "gray_stained_glass",
      item_name_ru: "Серое стекло"
    },
    item_431: {
      type: "light_gray_stained_glass",
      item_name_ru: "Светло-серое стекло"
    },
    item_432: {
      type: "cyan_stained_glass",
      item_name_ru: "Бирюзовое стекло"
    },
    item_433: {
      type: "purple_stained_glass",
      item_name_ru: "Фиолетовое стекло"
    },
    item_434: {
      type: "blue_stained_glass",
      item_name_ru: "Синее стекло"
    },
    item_435: {
      type: "brown_stained_glass",
      item_name_ru: "Коричневое стекло"
    },
    item_436: {
      type: "green_stained_glass",
      item_name_ru: "Зелёное стекло"
    },
    item_437: {
      type: "red_stained_glass",
      item_name_ru: "Красное стекло"
    },
    item_438: {
      type: "black_stained_glass",
      item_name_ru: "Чёрное стекло"
    },
    item_439: {
      type: "white_stained_glass_pane",
      item_name_ru: "Белая стеклянная панель"
    },
    item_440: {
      type: "orange_stained_glass_pane",
      item_name_ru: "Оранжевая стеклянная панель"
    },
    item_441: {
      type: "magenta_stained_glass_pane",
      item_name_ru: "Пурпурная стеклянная панель"
    },
    item_442: {
      type: "light_blue_stained_glass_pane",
      item_name_ru: "Голубая стеклянная панель"
    },
    item_443: {
      type: "yellow_stained_glass_pane",
      item_name_ru: "Жёлтая стеклянная панель"
    },
    item_444: {
      type: "lime_stained_glass_pane",
      item_name_ru: "Лаймовая стеклянная панель"
    },
    item_445: {
      type: "pink_stained_glass_pane",
      item_name_ru: "Розовая стеклянная панель"
    },
    item_446: {
      type: "gray_stained_glass_pane",
      item_name_ru: "Серая стеклянная панель"
    },
    item_447: {
      type: "light_gray_stained_glass_pane",
      item_name_ru: "Светло-серая стеклянная панель"
    },
    item_448: {
      type: "cyan_stained_glass_pane",
      item_name_ru: "Бирюзовая стеклянная панель"
    },
    item_449: {
      type: "purple_stained_glass_pane",
      item_name_ru: "Фиолетовая стеклянная панель"
    },
    item_450: {
      type: "blue_stained_glass_pane",
      item_name_ru: "Синяя стеклянная панель"
    },
    item_451: {
      type: "brown_stained_glass_pane",
      item_name_ru: "Коричневая стеклянная панель"
    },
    item_452: {
      type: "green_stained_glass_pane",
      item_name_ru: "Зелёная стеклянная панель"
    },
    item_453: {
      type: "red_stained_glass_pane",
      item_name_ru: "Красная стеклянная панель"
    },
    item_454: {
      type: "black_stained_glass_pane",
      item_name_ru: "Чёрная стеклянная панель"
    },
    item_455: {
      type: "prismarine",
      item_name_ru: "Призмарин"
    },
    item_456: {
      type: "prismarine_bricks",
      item_name_ru: "Призмариновые кирпичи"
    },
    item_457: {
      type: "dark_prismarine",
      item_name_ru: "Тёмный призмарин"
    },
    item_458: {
      type: "prismarine_stairs",
      item_name_ru: "Призмариновые ступеньки"
    },
    item_459: {
      type: "prismarine_brick_stairs",
      item_name_ru: "Ступеньки из призмаринового кирпича"
    },
    item_460: {
      type: "dark_prismarine_stairs",
      item_name_ru: "Ступеньки из тёмного призмарина"
    },
    item_461: {
      type: "sea_lantern",
      item_name_ru: "Морской фонарь"
    },
    item_462: {
      type: "red_sandstone",
      item_name_ru: "Красный песчаник"
    },
    item_463: {
      type: "chiseled_red_sandstone",
      item_name_ru: "Резной красный песчаник"
    },
    item_464: {
      type: "cut_red_sandstone",
      item_name_ru: "Пиленый красный песчаник"
    },
    item_465: {
      type: "red_sandstone_stairs",
      item_name_ru: "Ступеньки из красного песчаника"
    },
    item_466: {
      type: "repeating_command_block",
      item_name_ru: "Повторяющий командный блок"
    },
    item_467: {
      type: "chain_command_block",
      item_name_ru: "Последовательный командный блок"
    },
    item_468: {
      type: "magma_block",
      item_name_ru: "Магма"
    },
    item_469: {
      type: "nether_wart_block",
      item_name_ru: "Блок незерского нароста"
    },
    item_470: {
      type: "warped_wart_block",
      item_name_ru: "Блок искажённого нароста"
    },
    item_471: {
      type: "red_nether_bricks",
      item_name_ru: "Красные незерские кирпичи"
    },
    item_472: {
      type: "bone_block",
      item_name_ru: "Костный блок"
    },
    item_473: {
      type: "structure_void",
      item_name_ru: "Пустой блок"
    },
    item_474: {
      type: "shulker_box",
      item_name_ru: "Шалкеровый ящик"
    },
    item_475: {
      type: "white_shulker_box",
      item_name_ru: "Белый шалкеровый ящик"
    },
    item_476: {
      type: "orange_shulker_box",
      item_name_ru: "Оранжевый шалкеровый ящик"
    },
    item_477: {
      type: "magenta_shulker_box",
      item_name_ru: "Пурпурный шалкеровый ящик"
    },
    item_478: {
      type: "light_blue_shulker_box",
      item_name_ru: "Голубой шалкеровый ящик"
    },
    item_479: {
      type: "yellow_shulker_box",
      item_name_ru: "Жёлтый шалкеровый ящик"
    },
    item_480: {
      type: "lime_shulker_box",
      item_name_ru: "Лаймовый шалкеровый ящик"
    },
    item_481: {
      type: "pink_shulker_box",
      item_name_ru: "Розовый шалкеровый ящик"
    },
    item_482: {
      type: "gray_shulker_box",
      item_name_ru: "Серый шалкеровый ящик"
    },
    item_483: {
      type: "light_gray_shulker_box",
      item_name_ru: "Светло-серый шалкеровый ящик"
    },
    item_484: {
      type: "cyan_shulker_box",
      item_name_ru: "Бирюзовый шалкеровый ящик"
    },
    item_485: {
      type: "purple_shulker_box",
      item_name_ru: "Фиолетовый шалкеровый ящик"
    },
    item_486: {
      type: "blue_shulker_box",
      item_name_ru: "Синий шалкеровый ящик"
    },
    item_487: {
      type: "brown_shulker_box",
      item_name_ru: "Коричневый шалкеровый ящик"
    },
    item_488: {
      type: "green_shulker_box",
      item_name_ru: "Зелёный шалкеровый ящик"
    },
    item_489: {
      type: "red_shulker_box",
      item_name_ru: "Красный шалкеровый ящик"
    },
    item_490: {
      type: "black_shulker_box",
      item_name_ru: "Чёрный шалкеровый ящик"
    },
    item_491: {
      type: "white_glazed_terracotta",
      item_name_ru: "Белая глазурованная керамика"
    },
    item_492: {
      type: "orange_glazed_terracotta",
      item_name_ru: "Оранжевая глазурованная керамика"
    },
    item_493: {
      type: "magenta_glazed_terracotta",
      item_name_ru: "Пурпурная глазурованная керамика"
    },
    item_494: {
      type: "light_blue_glazed_terracotta",
      item_name_ru: "Голубая глазурованная керамика"
    },
    item_495: {
      type: "yellow_glazed_terracotta",
      item_name_ru: "Жёлтая глазурованная керамика"
    },
    item_496: {
      type: "lime_glazed_terracotta",
      item_name_ru: "Лаймовая глазурованная керамика"
    },
    item_497: {
      type: "pink_glazed_terracotta",
      item_name_ru: "Розовая глазурованная керамика"
    },
    item_498: {
      type: "gray_glazed_terracotta",
      item_name_ru: "Серая глазурованная керамика"
    },
    item_499: {
      type: "light_gray_glazed_terracotta",
      item_name_ru: "Светло-серая глазурованная керамика"
    },
    item_500: {
      type: "cyan_glazed_terracotta",
      item_name_ru: "Бирюзовая глазурованная керамика"
    },
    item_501: {
      type: "purple_glazed_terracotta",
      item_name_ru: "Фиолетовая глазурованная керамика"
    },
    item_502: {
      type: "blue_glazed_terracotta",
      item_name_ru: "Синяя глазурованная керамика"
    },
    item_503: {
      type: "brown_glazed_terracotta",
      item_name_ru: "Коричневая глазурованная керамика"
    },
    item_504: {
      type: "green_glazed_terracotta",
      item_name_ru: "Зелёная глазурованная керамика"
    },
    item_505: {
      type: "red_glazed_terracotta",
      item_name_ru: "Красная глазурованная керамика"
    },
    item_506: {
      type: "black_glazed_terracotta",
      item_name_ru: "Чёрная глазурованная керамика"
    },
    item_507: {
      type: "white_concrete",
      item_name_ru: "Белый бетон"
    },
    item_508: {
      type: "orange_concrete",
      item_name_ru: "Оранжевый бетон"
    },
    item_509: {
      type: "magenta_concrete",
      item_name_ru: "Пурпурный бетон"
    },
    item_510: {
      type: "light_blue_concrete",
      item_name_ru: "Голубой бетон"
    },
    item_511: {
      type: "yellow_concrete",
      item_name_ru: "Жёлтый бетон"
    },
    item_512: {
      type: "lime_concrete",
      item_name_ru: "Лаймовый бетон"
    },
    item_513: {
      type: "pink_concrete",
      item_name_ru: "Розовый бетон"
    },
    item_514: {
      type: "gray_concrete",
      item_name_ru: "Серый бетон"
    },
    item_515: {
      type: "light_gray_concrete",
      item_name_ru: "Светло-серый бетон"
    },
    item_516: {
      type: "cyan_concrete",
      item_name_ru: "Бирюзовый бетон"
    },
    item_517: {
      type: "purple_concrete",
      item_name_ru: "Фиолетовый бетон"
    },
    item_518: {
      type: "blue_concrete",
      item_name_ru: "Синий бетон"
    },
    item_519: {
      type: "brown_concrete",
      item_name_ru: "Коричневый бетон"
    },
    item_520: {
      type: "green_concrete",
      item_name_ru: "Зелёный бетон"
    },
    item_521: {
      type: "red_concrete",
      item_name_ru: "Красный бетон"
    },
    item_522: {
      type: "black_concrete",
      item_name_ru: "Чёрный бетон"
    },
    item_523: {
      type: "white_concrete_powder",
      item_name_ru: "Белый сухой бетон"
    },
    item_524: {
      type: "orange_concrete_powder",
      item_name_ru: "Оранжевый сухой бетон"
    },
    item_525: {
      type: "magenta_concrete_powder",
      item_name_ru: "Пурпурный сухой бетон"
    },
    item_526: {
      type: "light_blue_concrete_powder",
      item_name_ru: "Голубой сухой бетон"
    },
    item_527: {
      type: "yellow_concrete_powder",
      item_name_ru: "Жёлтый сухой бетон"
    },
    item_528: {
      type: "lime_concrete_powder",
      item_name_ru: "Лаймовый сухой бетон"
    },
    item_529: {
      type: "pink_concrete_powder",
      item_name_ru: "Розовый сухой бетон"
    },
    item_530: {
      type: "gray_concrete_powder",
      item_name_ru: "Серый сухой бетон"
    },
    item_531: {
      type: "light_gray_concrete_powder",
      item_name_ru: "Светло-серый сухой бетон"
    },
    item_532: {
      type: "cyan_concrete_powder",
      item_name_ru: "Бирюзовый сухой бетон"
    },
    item_533: {
      type: "purple_concrete_powder",
      item_name_ru: "Фиолетовый сухой бетон"
    },
    item_534: {
      type: "blue_concrete_powder",
      item_name_ru: "Синий сухой бетон"
    },
    item_535: {
      type: "brown_concrete_powder",
      item_name_ru: "Коричневый сухой бетон"
    },
    item_536: {
      type: "green_concrete_powder",
      item_name_ru: "Зелёный сухой бетон"
    },
    item_537: {
      type: "red_concrete_powder",
      item_name_ru: "Красный сухой бетон"
    },
    item_538: {
      type: "black_concrete_powder",
      item_name_ru: "Чёрный сухой бетон"
    },
    item_539: {
      type: "turtle_egg",
      item_name_ru: "Черепашье яйцо"
    },
    item_540: {
      type: "dead_tube_coral_block",
      item_name_ru: "Блок мёртвого трубчатого коралла"
    },
    item_541: {
      type: "dead_brain_coral_block",
      item_name_ru: "Блок мёртвого коралла-мозговика"
    },
    item_542: {
      type: "dead_bubble_coral_block",
      item_name_ru: "Блок мёртвого пузырчатого коралла"
    },
    item_543: {
      type: "dead_fire_coral_block",
      item_name_ru: "Блок мёртвого огненного коралла"
    },
    item_544: {
      type: "dead_horn_coral_block",
      item_name_ru: "Блок мёртвого рогового коралла"
    },
    item_545: {
      type: "tube_coral_block",
      item_name_ru: "Блок трубчатого коралла"
    },
    item_546: {
      type: "brain_coral_block",
      item_name_ru: "Блок коралла-мозговика"
    },
    item_547: {
      type: "bubble_coral_block",
      item_name_ru: "Блок пузырчатого коралла"
    },
    item_548: {
      type: "fire_coral_block",
      item_name_ru: "Блок огненного коралла"
    },
    item_549: {
      type: "horn_coral_block",
      item_name_ru: "Блок рогового коралла"
    },
    item_550: {
      type: "tube_coral",
      item_name_ru: "Трубчатый коралл"
    },
    item_551: {
      type: "brain_coral",
      item_name_ru: "Коралл-мозговик"
    },
    item_552: {
      type: "bubble_coral",
      item_name_ru: "Пузырчатый коралл"
    },
    item_553: {
      type: "fire_coral",
      item_name_ru: "Огненный коралл"
    },
    item_554: {
      type: "horn_coral",
      item_name_ru: "Роговой коралл"
    },
    item_555: {
      type: "dead_brain_coral",
      item_name_ru: "Мёртвый коралл-мозговик"
    },
    item_556: {
      type: "dead_bubble_coral",
      item_name_ru: "Мёртвый пузырчатый коралл"
    },
    item_557: {
      type: "dead_fire_coral",
      item_name_ru: "Мёртвый огненный коралл"
    },
    item_558: {
      type: "dead_horn_coral",
      item_name_ru: "Мёртвый роговый коралл"
    },
    item_559: {
      type: "dead_tube_coral",
      item_name_ru: "Мёртвый трубчатый коралл"
    },
    item_560: {
      type: "tube_coral_fan",
      item_name_ru: "Веерный трубчатый коралл"
    },
    item_561: {
      type: "brain_coral_fan",
      item_name_ru: "Веерный коралл-мозговик"
    },
    item_562: {
      type: "bubble_coral_fan",
      item_name_ru: "Веерный пузырчатый коралл"
    },
    item_563: {
      type: "fire_coral_fan",
      item_name_ru: "Веерный огненный коралл"
    },
    item_564: {
      type: "horn_coral_fan",
      item_name_ru: "Веерный роговый коралл"
    },
    item_565: {
      type: "dead_tube_coral_fan",
      item_name_ru: "Мёртвый веерный трубчатый коралл"
    },
    item_566: {
      type: "dead_brain_coral_fan",
      item_name_ru: "Мёртвый веерный коралл-мозговик"
    },
    item_567: {
      type: "dead_bubble_coral_fan",
      item_name_ru: "Мёртвый веерный пузырчатый коралл"
    },
    item_568: {
      type: "dead_fire_coral_fan",
      item_name_ru: "Мёртвый веерный огненный коралл"
    },
    item_569: {
      type: "dead_horn_coral_fan",
      item_name_ru: "Мёртвый веерный роговый коралл"
    },
    item_570: {
      type: "blue_ice",
      item_name_ru: "Синий лёд"
    },
    item_571: {
      type: "conduit",
      item_name_ru: "Морской источник"
    },
    item_572: {
      type: "polished_granite_stairs",
      item_name_ru: "Ступеньки из полированного гранита"
    },
    item_573: {
      type: "smooth_red_sandstone_stairs",
      item_name_ru: "Ступеньки из гладкого красного песчаника"
    },
    item_574: {
      type: "mossy_stone_brick_stairs",
      item_name_ru: "Ступеньки из замшелого каменного кирпича"
    },
    item_575: {
      type: "polished_diorite_stairs",
      item_name_ru: "Ступеньки из полированного диорита"
    },
    item_576: {
      type: "mossy_cobblestone_stairs",
      item_name_ru: "Замшелые булыжные ступеньки"
    },
    item_577: {
      type: "end_stone_brick_stairs",
      item_name_ru: "Ступеньки из эндернякового кирпича"
    },
    item_578: {
      type: "stone_stairs",
      item_name_ru: "Каменные ступеньки"
    },
    item_579: {
      type: "smooth_sandstone_stairs",
      item_name_ru: "Ступеньки из гладкого песчаника"
    },
    item_580: {
      type: "smooth_quartz_stairs",
      item_name_ru: "Ступеньки из гладкого кварца"
    },
    item_581: {
      type: "granite_stairs",
      item_name_ru: "Гранитные ступеньки"
    },
    item_582: {
      type: "andesite_stairs",
      item_name_ru: "Андезитовые ступеньки"
    },
    item_583: {
      type: "red_nether_brick_stairs",
      item_name_ru: "Ступеньки из красного незерского кирпича"
    },
    item_584: {
      type: "polished_andesite_stairs",
      item_name_ru: "Ступеньки из полированного андезита"
    },
    item_585: {
      type: "diorite_stairs",
      item_name_ru: "Диоритовые ступеньки"
    },
    item_586: {
      type: "cobbled_deepslate_stairs",
      item_name_ru: "Ступеньки из колотого глубинного сланца"
    },
    item_587: {
      type: "polished_deepslate_stairs",
      item_name_ru: "Ступеньки из полированного глубинного сланца"
    },
    item_588: {
      type: "deepslate_brick_stairs",
      item_name_ru: "Ступеньки из глубинносланцевого кирпича"
    },
    item_589: {
      type: "deepslate_tile_stairs",
      item_name_ru: "Ступеньки из глубинносланцевого плитняка"
    },
    item_590: {
      type: "polished_granite_slab",
      item_name_ru: "Плита из полированного гранита"
    },
    item_591: {
      type: "smooth_red_sandstone_slab",
      item_name_ru: "Плита из гладкого красного песчаника"
    },
    item_592: {
      type: "mossy_stone_brick_slab",
      item_name_ru: "Плита из замшелого каменного кирпича"
    },
    item_593: {
      type: "polished_diorite_slab",
      item_name_ru: "Плита из полированного диорита"
    },
    item_594: {
      type: "mossy_cobblestone_slab",
      item_name_ru: "Замшелая булыжная плита"
    },
    item_595: {
      type: "end_stone_brick_slab",
      item_name_ru: "Плита из эндернякового кирпича"
    },
    item_596: {
      type: "smooth_sandstone_slab",
      item_name_ru: "Плита из гладкого песчаника"
    },
    item_597: {
      type: "smooth_quartz_slab",
      item_name_ru: "Плита из гладкого кварца"
    },
    item_598: {
      type: "granite_slab",
      item_name_ru: "Гранитная плита"
    },
    item_599: {
      type: "andesite_slab",
      item_name_ru: "Андезитовая плита"
    },
    item_600: {
      type: "red_nether_brick_slab",
      item_name_ru: "Плита из красного незерского кирпича"
    },
    item_601: {
      type: "polished_andesite_slab",
      item_name_ru: "Плита из полированного андезита"
    },
    item_602: {
      type: "diorite_slab",
      item_name_ru: "Диоритовая плита"
    },
    item_603: {
      type: "cobbled_deepslate_slab",
      item_name_ru: "Плита из колотого глубинного сланца"
    },
    item_604: {
      type: "polished_deepslate_slab",
      item_name_ru: "Плита из полированного глубинного сланца"
    },
    item_605: {
      type: "deepslate_brick_slab",
      item_name_ru: "Плита из глубинносланцевого кирпича"
    },
    item_606: {
      type: "deepslate_tile_slab",
      item_name_ru: "Плита из глубинносланцевого плитняка"
    },
    item_607: {
      type: "scaffolding",
      item_name_ru: "Подмостки"
    },
    item_608: {
      type: "redstone",
      item_name_ru: "Редстоуновая пыль"
    },
    item_609: {
      type: "redstone_torch",
      item_name_ru: "Редстоуновый факел"
    },
    item_610: {
      type: "redstone_block",
      item_name_ru: "Редстоуновый блок"
    },
    item_611: {
      type: "repeater",
      item_name_ru: "Редстоуновый повторитель"
    },
    item_612: {
      type: "comparator",
      item_name_ru: "Редстоуновый компаратор"
    },
    item_613: {
      type: "piston",
      item_name_ru: "Поршень"
    },
    item_614: {
      type: "sticky_piston",
      item_name_ru: "Липкий поршень"
    },
    item_615: {
      type: "slime_block",
      item_name_ru: "Блок слизи"
    },
    item_616: {
      type: "honey_block",
      item_name_ru: "Блок мёда"
    },
    item_617: {
      type: "observer",
      item_name_ru: "Наблюдатель"
    },
    item_618: {
      type: "hopper",
      item_name_ru: "Воронка"
    },
    item_619: {
      type: "dispenser",
      item_name_ru: "Раздатчик"
    },
    item_620: {
      type: "dropper",
      item_name_ru: "Выбрасыватель"
    },
    item_621: {
      type: "lectern",
      item_name_ru: "Кафедра"
    },
    item_622: {
      type: "target",
      item_name_ru: "Мишень"
    },
    item_623: {
      type: "lever",
      item_name_ru: "Рычаг"
    },
    item_624: {
      type: "lightning_rod",
      item_name_ru: "Громоотвод"
    },
    item_625: {
      type: "daylight_detector",
      item_name_ru: "Датчик дневного света"
    },
    item_626: {
      type: "sculk_sensor",
      item_name_ru: "Скалк-сенсор"
    },
    item_627: {
      type: "tripwire_hook",
      item_name_ru: "Крюк"
    },
    item_628: {
      type: "trapped_chest",
      item_name_ru: "Сундук-ловушка"
    },
    item_629: {
      type: "tnt",
      item_name_ru: "Динамит"
    },
    item_630: {
      type: "redstone_lamp",
      item_name_ru: "Редстоуновый фонарь"
    },
    item_631: {
      type: "note_block",
      item_name_ru: "Нотный блок"
    },
    item_632: {
      type: "stone_button",
      item_name_ru: "Каменная кнопка"
    },
    item_633: {
      type: "polished_blackstone_button",
      item_name_ru: "Кнопка из полированного чернита"
    },
    item_634: {
      type: "oak_button",
      item_name_ru: "Дубовая кнопка"
    },
    item_635: {
      type: "spruce_button",
      item_name_ru: "Еловая кнопка"
    },
    item_636: {
      type: "birch_button",
      item_name_ru: "Берёзовая кнопка"
    },
    item_637: {
      type: "jungle_button",
      item_name_ru: "Кнопка из тропического дерева"
    },
    item_638: {
      type: "acacia_button",
      item_name_ru: "Акациевая кнопка"
    },
    item_639: {
      type: "dark_oak_button",
      item_name_ru: "Кнопка из тёмного дуба"
    },
    item_640: {
      type: "mangrove_button",
      item_name_ru: "Мангровая кнопка"
    },
    item_641: {
      type: "crimson_button",
      item_name_ru: "Багровая кнопка"
    },
    item_642: {
      type: "warped_button",
      item_name_ru: "Искажённая кнопка"
    },
    item_643: {
      type: "stone_pressure_plate",
      item_name_ru: "Каменная нажимная плита"
    },
    item_644: {
      type: "polished_blackstone_pressure_plate",
      item_name_ru: "Нажимная плита из полированного чернита"
    },
    item_645: {
      type: "light_weighted_pressure_plate",
      item_name_ru: "Весовая пластина"
    },
    item_646: {
      type: "heavy_weighted_pressure_plate",
      item_name_ru: "Большегрузная весовая пластина"
    },
    item_647: {
      type: "oak_pressure_plate",
      item_name_ru: "Дубовая нажимная плита"
    },
    item_648: {
      type: "spruce_pressure_plate",
      item_name_ru: "Еловая нажимная плита"
    },
    item_649: {
      type: "birch_pressure_plate",
      item_name_ru: "Берёзовая нажимная плита"
    },
    item_650: {
      type: "jungle_pressure_plate",
      item_name_ru: "Нажимная плита из тропического дерева"
    },
    item_651: {
      type: "acacia_pressure_plate",
      item_name_ru: "Акациевая нажимная плита"
    },
    item_652: {
      type: "dark_oak_pressure_plate",
      item_name_ru: "Нажимная плита из тёмного дуба"
    },
    item_653: {
      type: "mangrove_pressure_plate",
      item_name_ru: "Мангровая нажимная плита"
    },
    item_654: {
      type: "crimson_pressure_plate",
      item_name_ru: "Багровая нажимная плита"
    },
    item_655: {
      type: "warped_pressure_plate",
      item_name_ru: "Искажённая нажимная плита"
    },
    item_656: {
      type: "iron_door",
      item_name_ru: "Железная дверь"
    },
    item_657: {
      type: "oak_door",
      item_name_ru: "Дубовая дверь"
    },
    item_658: {
      type: "spruce_door",
      item_name_ru: "Еловая дверь"
    },
    item_659: {
      type: "birch_door",
      item_name_ru: "Берёзовая дверь"
    },
    item_660: {
      type: "jungle_door",
      item_name_ru: "Дверь из тропического дерева"
    },
    item_661: {
      type: "acacia_door",
      item_name_ru: "Акациевая дверь"
    },
    item_662: {
      type: "dark_oak_door",
      item_name_ru: "Дверь из тёмного дуба"
    },
    item_663: {
      type: "mangrove_door",
      item_name_ru: "Мангровая дверь"
    },
    item_664: {
      type: "crimson_door",
      item_name_ru: "Багровая дверь"
    },
    item_665: {
      type: "warped_door",
      item_name_ru: "Искажённая дверь"
    },
    item_666: {
      type: "iron_trapdoor",
      item_name_ru: "Железный люк"
    },
    item_667: {
      type: "oak_trapdoor",
      item_name_ru: "Дубовый люк"
    },
    item_668: {
      type: "spruce_trapdoor",
      item_name_ru: "Еловый люк"
    },
    item_669: {
      type: "birch_trapdoor",
      item_name_ru: "Берёзовый люк"
    },
    item_670: {
      type: "jungle_trapdoor",
      item_name_ru: "Люк из тропического дерева"
    },
    item_671: {
      type: "acacia_trapdoor",
      item_name_ru: "Акациевый люк"
    },
    item_672: {
      type: "dark_oak_trapdoor",
      item_name_ru: "Люк из тёмного дуба"
    },
    item_673: {
      type: "mangrove_trapdoor",
      item_name_ru: "Мангровый люк"
    },
    item_674: {
      type: "crimson_trapdoor",
      item_name_ru: "Багровый люк"
    },
    item_675: {
      type: "warped_trapdoor",
      item_name_ru: "Искажённый люк"
    },
    item_676: {
      type: "oak_fence_gate",
      item_name_ru: "Дубовая калитка"
    },
    item_677: {
      type: "spruce_fence_gate",
      item_name_ru: "Еловая калитка"
    },
    item_678: {
      type: "birch_fence_gate",
      item_name_ru: "Берёзовая калитка"
    },
    item_679: {
      type: "jungle_fence_gate",
      item_name_ru: "Калитка из тропического дерева"
    },
    item_680: {
      type: "acacia_fence_gate",
      item_name_ru: "Акациевая калитка"
    },
    item_681: {
      type: "dark_oak_fence_gate",
      item_name_ru: "Калитка из тёмного дуба"
    },
    item_682: {
      type: "mangrove_fence_gate",
      item_name_ru: "Мангровая калитка"
    },
    item_683: {
      type: "crimson_fence_gate",
      item_name_ru: "Багровая калитка"
    },
    item_684: {
      type: "warped_fence_gate",
      item_name_ru: "Искажённая калитка"
    },
    item_685: {
      type: "powered_rail",
      item_name_ru: "Энергорельсы"
    },
    item_686: {
      type: "detector_rail",
      item_name_ru: "Рельсы с датчиком"
    },
    item_687: {
      type: "rail",
      item_name_ru: "Рельсы"
    },
    item_688: {
      type: "activator_rail",
      item_name_ru: "Активирующие рельсы"
    },
    item_689: {
      type: "saddle",
      item_name_ru: "Седло"
    },
    item_690: {
      type: "minecart",
      item_name_ru: "Вагонетка"
    },
    item_691: {
      type: "chest_minecart",
      item_name_ru: "Грузовая вагонетка"
    },
    item_692: {
      type: "furnace_minecart",
      item_name_ru: "Самоходная вагонетка"
    },
    item_693: {
      type: "tnt_minecart",
      item_name_ru: "Вагонетка с динамитом"
    },
    item_694: {
      type: "hopper_minecart",
      item_name_ru: "Загрузочная вагонетка"
    },
    item_695: {
      type: "carrot_on_a_stick",
      item_name_ru: "Удочка с морковкой"
    },
    item_696: {
      type: "warped_fungus_on_a_stick",
      item_name_ru: "Удочка с искажённым грибом"
    },
    item_697: {
      type: "elytra",
      item_name_ru: "Элитры"
    },
    item_698: {
      type: "oak_boat",
      item_name_ru: "Дубовая лодка"
    },
    item_699: {
      type: "oak_chest_boat",
      item_name_ru: "Дубовая грузовая лодка"
    },
    item_700: {
      type: "spruce_boat",
      item_name_ru: "Еловая лодка"
    },
    item_701: {
      type: "spruce_chest_boat",
      item_name_ru: "Еловая грузовая лодка"
    },
    item_702: {
      type: "birch_boat",
      item_name_ru: "Берёзовая лодка"
    },
    item_703: {
      type: "birch_chest_boat",
      item_name_ru: "Берёзовая грузовая лодка"
    },
    item_704: {
      type: "jungle_boat",
      item_name_ru: "Лодка из тропического дерева"
    },
    item_705: {
      type: "jungle_chest_boat",
      item_name_ru: "Грузовая лодка из тропического дерева"
    },
    item_706: {
      type: "acacia_boat",
      item_name_ru: "Акациевая лодка"
    },
    item_707: {
      type: "acacia_chest_boat",
      item_name_ru: "Акациевая грузовая лодка"
    },
    item_708: {
      type: "dark_oak_boat",
      item_name_ru: "Лодка из тёмного дуба"
    },
    item_709: {
      type: "dark_oak_chest_boat",
      item_name_ru: "Грузовая лодка из тёмного дуба"
    },
    item_710: {
      type: "mangrove_boat",
      item_name_ru: "Мангровая лодка"
    },
    item_711: {
      type: "mangrove_chest_boat",
      item_name_ru: "Мангровая грузовая лодка"
    },
    item_712: {
      type: "structure_block",
      item_name_ru: "Блок-конструктор"
    },
    item_713: {
      type: "jigsaw",
      item_name_ru: "Пазл"
    },
    item_714: {
      type: "turtle_helmet",
      item_name_ru: "Черепаший панцирь"
    },
    item_715: {
      type: "scute",
      item_name_ru: "Щиток"
    },
    item_716: {
      type: "flint_and_steel",
      item_name_ru: "Огниво"
    },
    item_717: {
      type: "apple",
      item_name_ru: "Яблоко"
    },
    item_718: {
      type: "bow",
      item_name_ru: "Лук"
    },
    item_719: {
      type: "arrow",
      item_name_ru: "Стрела"
    },
    item_720: {
      type: "coal",
      item_name_ru: "Уголь"
    },
    item_721: {
      type: "charcoal",
      item_name_ru: "Древесный уголь"
    },
    item_722: {
      type: "diamond",
      item_name_ru: "Алмаз"
    },
    item_723: {
      type: "emerald",
      item_name_ru: "Изумруд"
    },
    item_724: {
      type: "lapis_lazuli",
      item_name_ru: "Лазурит"
    },
    item_725: {
      type: "quartz",
      item_name_ru: "Незер-кварц"
    },
    item_726: {
      type: "amethyst_shard",
      item_name_ru: "Осколок аметиста"
    },
    item_727: {
      type: "raw_iron",
      item_name_ru: "Рудное железо"
    },
    item_728: {
      type: "iron_ingot",
      item_name_ru: "Железный слиток"
    },
    item_729: {
      type: "raw_copper",
      item_name_ru: "Рудная медь"
    },
    item_730: {
      type: "copper_ingot",
      item_name_ru: "Медный слиток"
    },
    item_731: {
      type: "raw_gold",
      item_name_ru: "Рудное золото"
    },
    item_732: {
      type: "gold_ingot",
      item_name_ru: "Золотой слиток"
    },
    item_733: {
      type: "netherite_ingot",
      item_name_ru: "Незеритовый слиток"
    },
    item_734: {
      type: "netherite_scrap",
      item_name_ru: "Незеритовый лом"
    },
    item_735: {
      type: "wooden_sword",
      item_name_ru: "Деревянный меч"
    },
    item_736: {
      type: "wooden_shovel",
      item_name_ru: "Деревянная лопата"
    },
    item_737: {
      type: "wooden_pickaxe",
      item_name_ru: "Деревянная кирка"
    },
    item_738: {
      type: "wooden_axe",
      item_name_ru: "Деревянный топор"
    },
    item_739: {
      type: "wooden_hoe",
      item_name_ru: "Деревянная мотыга"
    },
    item_740: {
      type: "stone_sword",
      item_name_ru: "Каменный меч"
    },
    item_741: {
      type: "stone_shovel",
      item_name_ru: "Каменная лопата"
    },
    item_742: {
      type: "stone_pickaxe",
      item_name_ru: "Каменная кирка"
    },
    item_743: {
      type: "stone_axe",
      item_name_ru: "Каменный топор"
    },
    item_744: {
      type: "stone_hoe",
      item_name_ru: "Каменная мотыга"
    },
    item_745: {
      type: "golden_sword",
      item_name_ru: "Золотой меч"
    },
    item_746: {
      type: "golden_shovel",
      item_name_ru: "Золотая лопата"
    },
    item_747: {
      type: "golden_pickaxe",
      item_name_ru: "Золотая кирка"
    },
    item_748: {
      type: "golden_axe",
      item_name_ru: "Золотой топор"
    },
    item_749: {
      type: "golden_hoe",
      item_name_ru: "Золотая мотыга"
    },
    item_750: {
      type: "iron_sword",
      item_name_ru: "Железный меч"
    },
    item_751: {
      type: "iron_shovel",
      item_name_ru: "Железная лопата"
    },
    item_752: {
      type: "iron_pickaxe",
      item_name_ru: "Железная кирка"
    },
    item_753: {
      type: "iron_axe",
      item_name_ru: "Железный топор"
    },
    item_754: {
      type: "iron_hoe",
      item_name_ru: "Железная мотыга"
    },
    item_755: {
      type: "diamond_sword",
      item_name_ru: "Алмазный меч"
    },
    item_756: {
      type: "diamond_shovel",
      item_name_ru: "Алмазная лопата"
    },
    item_757: {
      type: "diamond_pickaxe",
      item_name_ru: "Алмазная кирка"
    },
    item_758: {
      type: "diamond_axe",
      item_name_ru: "Алмазный топор"
    },
    item_759: {
      type: "diamond_hoe",
      item_name_ru: "Алмазная мотыга"
    },
    item_760: {
      type: "netherite_sword",
      item_name_ru: "Незеритовый меч"
    },
    item_761: {
      type: "netherite_shovel",
      item_name_ru: "Незеритовая лопата"
    },
    item_762: {
      type: "netherite_pickaxe",
      item_name_ru: "Незеритовая кирка"
    },
    item_763: {
      type: "netherite_axe",
      item_name_ru: "Незеритовый топор"
    },
    item_764: {
      type: "netherite_hoe",
      item_name_ru: "Незеритовая мотыга"
    },
    item_765: {
      type: "stick",
      item_name_ru: "Палка"
    },
    item_766: {
      type: "bowl",
      item_name_ru: "Миска"
    },
    item_767: {
      type: "mushroom_stew",
      item_name_ru: "Тушёные грибы"
    },
    item_768: {
      type: "string",
      item_name_ru: "Нить"
    },
    item_769: {
      type: "feather",
      item_name_ru: "Перо"
    },
    item_770: {
      type: "gunpowder",
      item_name_ru: "Порох"
    },
    item_771: {
      type: "wheat_seeds",
      item_name_ru: "Семена пшеницы"
    },
    item_772: {
      type: "wheat",
      item_name_ru: "Пшеница"
    },
    item_773: {
      type: "bread",
      item_name_ru: "Хлеб"
    },
    item_774: {
      type: "leather_helmet",
      item_name_ru: "Кожаный шлем"
    },
    item_775: {
      type: "leather_chestplate",
      item_name_ru: "Кожаная куртка"
    },
    item_776: {
      type: "leather_leggings",
      item_name_ru: "Кожаные штаны"
    },
    item_777: {
      type: "leather_boots",
      item_name_ru: "Кожаные ботинки"
    },
    item_778: {
      type: "chainmail_helmet",
      item_name_ru: "Койф"
    },
    item_779: {
      type: "chainmail_chestplate",
      item_name_ru: "Кольчуга"
    },
    item_780: {
      type: "chainmail_leggings",
      item_name_ru: "Кольчужные поножи"
    },
    item_781: {
      type: "chainmail_boots",
      item_name_ru: "Кольчужные ботинки"
    },
    item_782: {
      type: "iron_helmet",
      item_name_ru: "Железный шлем"
    },
    item_783: {
      type: "iron_chestplate",
      item_name_ru: "Железный нагрудник"
    },
    item_784: {
      type: "iron_leggings",
      item_name_ru: "Железные поножи"
    },
    item_785: {
      type: "iron_boots",
      item_name_ru: "Железные ботинки"
    },
    item_786: {
      type: "diamond_helmet",
      item_name_ru: "Алмазный шлем"
    },
    item_787: {
      type: "diamond_chestplate",
      item_name_ru: "Алмазный нагрудник"
    },
    item_788: {
      type: "diamond_leggings",
      item_name_ru: "Алмазные поножи"
    },
    item_789: {
      type: "diamond_boots",
      item_name_ru: "Алмазные ботинки"
    },
    item_790: {
      type: "golden_helmet",
      item_name_ru: "Золотой шлем"
    },
    item_791: {
      type: "golden_chestplate",
      item_name_ru: "Золотой нагрудник"
    },
    item_792: {
      type: "golden_leggings",
      item_name_ru: "Золотые поножи"
    },
    item_793: {
      type: "golden_boots",
      item_name_ru: "Золотые ботинки"
    },
    item_794: {
      type: "netherite_helmet",
      item_name_ru: "Незеритовый шлем"
    },
    item_795: {
      type: "netherite_chestplate",
      item_name_ru: "Незеритовый нагрудник"
    },
    item_796: {
      type: "netherite_leggings",
      item_name_ru: "Незеритовые поножи"
    },
    item_797: {
      type: "netherite_boots",
      item_name_ru: "Незеритовые ботинки"
    },
    item_798: {
      type: "flint",
      item_name_ru: "Кремень"
    },
    item_799: {
      type: "porkchop",
      item_name_ru: "Сырая свинина"
    },
    item_800: {
      type: "cooked_porkchop",
      item_name_ru: "Жареная свинина"
    },
    item_801: {
      type: "painting",
      item_name_ru: "Картина"
    },
    item_802: {
      type: "golden_apple",
      item_name_ru: "Золотое яблоко"
    },
    item_803: {
      type: "enchanted_golden_apple",
      item_name_ru: "Зачарованное золотое яблоко"
    },
    item_804: {
      type: "oak_sign",
      item_name_ru: "Дубовая табличка"
    },
    item_805: {
      type: "spruce_sign",
      item_name_ru: "Еловая табличка"
    },
    item_806: {
      type: "birch_sign",
      item_name_ru: "Берёзовая табличка"
    },
    item_807: {
      type: "jungle_sign",
      item_name_ru: "Табличка из тропического дерева"
    },
    item_808: {
      type: "acacia_sign",
      item_name_ru: "Акациевая табличка"
    },
    item_809: {
      type: "dark_oak_sign",
      item_name_ru: "Табличка из тёмного дуба"
    },
    item_810: {
      type: "mangrove_sign",
      item_name_ru: "Мангровая табличка"
    },
    item_811: {
      type: "crimson_sign",
      item_name_ru: "Багровая табличка"
    },
    item_812: {
      type: "warped_sign",
      item_name_ru: "Искажённая табличка"
    },
    item_813: {
      type: "bucket",
      item_name_ru: "Ведро"
    },
    item_814: {
      type: "water_bucket",
      item_name_ru: "Ведро воды"
    },
    item_815: {
      type: "lava_bucket",
      item_name_ru: "Ведро лавы"
    },
    item_816: {
      type: "powder_snow_bucket",
      item_name_ru: "Ведро с рыхлым снегом"
    },
    item_817: {
      type: "snowball",
      item_name_ru: "Снежок"
    },
    item_818: {
      type: "leather",
      item_name_ru: "Кожа"
    },
    item_819: {
      type: "milk_bucket",
      item_name_ru: "Ведро молока"
    },
    item_820: {
      type: "pufferfish_bucket",
      item_name_ru: "Иглобрюх в ведре"
    },
    item_821: {
      type: "salmon_bucket",
      item_name_ru: "Лосось в ведре"
    },
    item_822: {
      type: "cod_bucket",
      item_name_ru: "Треска в ведре"
    },
    item_823: {
      type: "tropical_fish_bucket",
      item_name_ru: "Тропическая рыба в ведре"
    },
    item_824: {
      type: "axolotl_bucket",
      item_name_ru: "Аксолотль в ведре"
    },
    item_825: {
      type: "tadpole_bucket",
      item_name_ru: "Головастик в ведре"
    },
    item_826: {
      type: "brick",
      item_name_ru: "Кирпич"
    },
    item_827: {
      type: "clay_ball",
      item_name_ru: "Комок глины"
    },
    item_828: {
      type: "dried_kelp_block",
      item_name_ru: "Блок сушёной ламинарии"
    },
    item_829: {
      type: "paper",
      item_name_ru: "Бумага"
    },
    item_830: {
      type: "book",
      item_name_ru: "Книга"
    },
    item_831: {
      type: "slime_ball",
      item_name_ru: "Сгусток слизи"
    },
    item_832: {
      type: "egg",
      item_name_ru: "Яйцо"
    },
    item_833: {
      type: "compass",
      item_name_ru: "Компас"
    },
    item_834: {
      type: "recovery_compass",
      item_name_ru: "Возвратный компас"
    },
    item_835: {
      type: "bundle",
      item_name_ru: "Мешок"
    },
    item_836: {
      type: "fishing_rod",
      item_name_ru: "Удочка"
    },
    item_837: {
      type: "clock",
      item_name_ru: "Часы"
    },
    item_838: {
      type: "spyglass",
      item_name_ru: "Подзорная труба"
    },
    item_839: {
      type: "glowstone_dust",
      item_name_ru: "Светокаменная пыль"
    },
    item_840: {
      type: "cod",
      item_name_ru: "Сырая треска"
    },
    item_841: {
      type: "salmon",
      item_name_ru: "Сырой лосось"
    },
    item_842: {
      type: "tropical_fish",
      item_name_ru: "Тропическая рыба"
    },
    item_843: {
      type: "pufferfish",
      item_name_ru: "Иглобрюх"
    },
    item_844: {
      type: "cooked_cod",
      item_name_ru: "Жареная треска"
    },
    item_845: {
      type: "cooked_salmon",
      item_name_ru: "Жареный лосось"
    },
    item_846: {
      type: "ink_sac",
      item_name_ru: "Чернильный мешок"
    },
    item_847: {
      type: "glow_ink_sac",
      item_name_ru: "Светящийся чернильный мешок"
    },
    item_848: {
      type: "cocoa_beans",
      item_name_ru: "Какао-бобы"
    },
    item_849: {
      type: "white_dye",
      item_name_ru: "Белый краситель"
    },
    item_850: {
      type: "orange_dye",
      item_name_ru: "Оранжевый краситель"
    },
    item_851: {
      type: "magenta_dye",
      item_name_ru: "Пурпурный краситель"
    },
    item_852: {
      type: "light_blue_dye",
      item_name_ru: "Голубой краситель"
    },
    item_853: {
      type: "yellow_dye",
      item_name_ru: "Жёлтый краситель"
    },
    item_854: {
      type: "lime_dye",
      item_name_ru: "Лаймовый краситель"
    },
    item_855: {
      type: "pink_dye",
      item_name_ru: "Розовый краситель"
    },
    item_856: {
      type: "gray_dye",
      item_name_ru: "Серый краситель"
    },
    item_857: {
      type: "light_gray_dye",
      item_name_ru: "Светло-серый краситель"
    },
    item_858: {
      type: "cyan_dye",
      item_name_ru: "Бирюзовый краситель"
    },
    item_859: {
      type: "purple_dye",
      item_name_ru: "Фиолетовый краситель"
    },
    item_860: {
      type: "blue_dye",
      item_name_ru: "Синий краситель"
    },
    item_861: {
      type: "brown_dye",
      item_name_ru: "Коричневый краситель"
    },
    item_862: {
      type: "green_dye",
      item_name_ru: "Зелёный краситель"
    },
    item_863: {
      type: "red_dye",
      item_name_ru: "Красный краситель"
    },
    item_864: {
      type: "black_dye",
      item_name_ru: "Чёрный краситель"
    },
    item_865: {
      type: "bone_meal",
      item_name_ru: "Костная мука"
    },
    item_866: {
      type: "bone",
      item_name_ru: "Кость"
    },
    item_867: {
      type: "sugar",
      item_name_ru: "Сахар"
    },
    item_868: {
      type: "cake",
      item_name_ru: "Торт"
    },
    item_869: {
      type: "white_bed",
      item_name_ru: "Белая кровать"
    },
    item_870: {
      type: "orange_bed",
      item_name_ru: "Оранжевая кровать"
    },
    item_871: {
      type: "magenta_bed",
      item_name_ru: "Пурпурная кровать"
    },
    item_872: {
      type: "light_blue_bed",
      item_name_ru: "Голубая кровать"
    },
    item_873: {
      type: "yellow_bed",
      item_name_ru: "Жёлтая кровать"
    },
    item_874: {
      type: "lime_bed",
      item_name_ru: "Лаймовая кровать"
    },
    item_875: {
      type: "pink_bed",
      item_name_ru: "Розовая кровать"
    },
    item_876: {
      type: "gray_bed",
      item_name_ru: "Серая кровать"
    },
    item_877: {
      type: "light_gray_bed",
      item_name_ru: "Светло-серая кровать"
    },
    item_878: {
      type: "cyan_bed",
      item_name_ru: "Бирюзовая кровать"
    },
    item_879: {
      type: "purple_bed",
      item_name_ru: "Фиолетовая кровать"
    },
    item_880: {
      type: "blue_bed",
      item_name_ru: "Синяя кровать"
    },
    item_881: {
      type: "brown_bed",
      item_name_ru: "Коричневая кровать"
    },
    item_882: {
      type: "green_bed",
      item_name_ru: "Зелёная кровать"
    },
    item_883: {
      type: "red_bed",
      item_name_ru: "Красная кровать"
    },
    item_884: {
      type: "black_bed",
      item_name_ru: "Чёрная кровать"
    },
    item_885: {
      type: "cookie",
      item_name_ru: "Печенье"
    },
    item_886: {
      type: "filled_map",
      item_name_ru: "Карта"
    },
    item_887: {
      type: "shears",
      item_name_ru: "Ножницы"
    },
    item_888: {
      type: "melon_slice",
      item_name_ru: "Ломтик арбуза"
    },
    item_889: {
      type: "dried_kelp",
      item_name_ru: "Сушёная ламинария"
    },
    item_890: {
      type: "pumpkin_seeds",
      item_name_ru: "Семена тыквы"
    },
    item_891: {
      type: "melon_seeds",
      item_name_ru: "Семена арбуза"
    },
    item_892: {
      type: "beef",
      item_name_ru: "Сырая говядина"
    },
    item_893: {
      type: "cooked_beef",
      item_name_ru: "Стейк"
    },
    item_894: {
      type: "chicken",
      item_name_ru: "Курятина"
    },
    item_895: {
      type: "cooked_chicken",
      item_name_ru: "Жареная курица"
    },
    item_896: {
      type: "rotten_flesh",
      item_name_ru: "Гнилая плоть"
    },
    item_897: {
      type: "ender_pearl",
      item_name_ru: "Эндер-жемчуг"
    },
    item_898: {
      type: "blaze_rod",
      item_name_ru: "Огненный стержень"
    },
    item_899: {
      type: "ghast_tear",
      item_name_ru: "Слеза гаста"
    },
    item_900: {
      type: "gold_nugget",
      item_name_ru: "Кусочек золота"
    },
    item_901: {
      type: "nether_wart",
      item_name_ru: "Незерский нарост"
    },
    item_902: {
      type: "glass_bottle",
      item_name_ru: "Бутылочка"
    },
    item_903: {
      type: "spider_eye",
      item_name_ru: "Паучий глаз"
    },
    item_904: {
      type: "fermented_spider_eye",
      item_name_ru: "Маринованный паучий глаз"
    },
    item_905: {
      type: "blaze_powder",
      item_name_ru: "Огненный порошок"
    },
    item_906: {
      type: "magma_cream",
      item_name_ru: "Сгусток магмы"
    },
    item_907: {
      type: "brewing_stand",
      item_name_ru: "Зельеварка"
    },
    item_908: {
      type: "cauldron",
      item_name_ru: "Котёл"
    },
    item_909: {
      type: "ender_eye",
      item_name_ru: "Око Эндера"
    },
    item_910: {
      type: "glistering_melon_slice",
      item_name_ru: "Сверкающий ломтик арбуза"
    },
    item_911: {
      type: "allay_spawn_egg",
      item_name_ru: "Яйцо призыва тихони"
    },
    item_912: {
      type: "axolotl_spawn_egg",
      item_name_ru: "Яйцо призыва аксолотля"
    },
    item_913: {
      type: "bat_spawn_egg",
      item_name_ru: "Яйцо призыва летучей мыши"
    },
    item_914: {
      type: "bee_spawn_egg",
      item_name_ru: "Яйцо призыва пчелы"
    },
    item_915: {
      type: "blaze_spawn_egg",
      item_name_ru: "Яйцо призыва всполоха"
    },
    item_916: {
      type: "cat_spawn_egg",
      item_name_ru: "Яйцо призыва кошки"
    },
    item_917: {
      type: "cave_spider_spawn_egg",
      item_name_ru: "Яйцо призыва пещерного паука"
    },
    item_918: {
      type: "chicken_spawn_egg",
      item_name_ru: "Яйцо призыва курицы"
    },
    item_919: {
      type: "cod_spawn_egg",
      item_name_ru: "Яйцо призыва трески"
    },
    item_920: {
      type: "cow_spawn_egg",
      item_name_ru: "Яйцо призыва коровы"
    },
    item_921: {
      type: "creeper_spawn_egg",
      item_name_ru: "Яйцо призыва крипера"
    },
    item_922: {
      type: "dolphin_spawn_egg",
      item_name_ru: "Яйцо призыва дельфина"
    },
    item_923: {
      type: "donkey_spawn_egg",
      item_name_ru: "Яйцо призыва осла"
    },
    item_924: {
      type: "drowned_spawn_egg",
      item_name_ru: "Яйцо призыва утопленника"
    },
    item_925: {
      type: "elder_guardian_spawn_egg",
      item_name_ru: "Яйцо призыва древнего стража"
    },
    item_926: {
      type: "enderman_spawn_egg",
      item_name_ru: "Яйцо призыва эндермена"
    },
    item_927: {
      type: "endermite_spawn_egg",
      item_name_ru: "Яйцо призыва эндермита"
    },
    item_928: {
      type: "evoker_spawn_egg",
      item_name_ru: "Яйцо призыва заклинателя"
    },
    item_929: {
      type: "fox_spawn_egg",
      item_name_ru: "Яйцо призыва лисицы"
    },
    item_930: {
      type: "frog_spawn_egg",
      item_name_ru: "Яйцо призыва лягушки"
    },
    item_931: {
      type: "ghast_spawn_egg",
      item_name_ru: "Яйцо призыва гаста"
    },
    item_932: {
      type: "glow_squid_spawn_egg",
      item_name_ru: "Яйцо призыва светящегося спрута"
    },
    item_933: {
      type: "goat_spawn_egg",
      item_name_ru: "Яйцо призыва козы"
    },
    item_934: {
      type: "guardian_spawn_egg",
      item_name_ru: "Яйцо призыва стража"
    },
    item_935: {
      type: "hoglin_spawn_egg",
      item_name_ru: "Яйцо призыва хоглина"
    },
    item_936: {
      type: "horse_spawn_egg",
      item_name_ru: "Яйцо призыва лошади"
    },
    item_937: {
      type: "husk_spawn_egg",
      item_name_ru: "Яйцо призыва кадавра"
    },
    item_938: {
      type: "llama_spawn_egg",
      item_name_ru: "Яйцо призыва ламы"
    },
    item_939: {
      type: "magma_cube_spawn_egg",
      item_name_ru: "Яйцо призыва магмового куба"
    },
    item_940: {
      type: "mooshroom_spawn_egg",
      item_name_ru: "Яйцо призыва муухомора"
    },
    item_941: {
      type: "mule_spawn_egg",
      item_name_ru: "Яйцо призыва мула"
    },
    item_942: {
      type: "ocelot_spawn_egg",
      item_name_ru: "Яйцо призыва оцелота"
    },
    item_943: {
      type: "panda_spawn_egg",
      item_name_ru: "Яйцо призыва панды"
    },
    item_944: {
      type: "parrot_spawn_egg",
      item_name_ru: "Яйцо призыва попугая"
    },
    item_945: {
      type: "phantom_spawn_egg",
      item_name_ru: "Яйцо призыва фантома"
    },
    item_946: {
      type: "pig_spawn_egg",
      item_name_ru: "Яйцо призыва свиньи"
    },
    item_947: {
      type: "piglin_spawn_egg",
      item_name_ru: "Яйцо призыва пиглина"
    },
    item_948: {
      type: "piglin_brute_spawn_egg",
      item_name_ru: "Яйцо призыва брутального пиглина"
    },
    item_949: {
      type: "pillager_spawn_egg",
      item_name_ru: "Яйцо призыва разбойника"
    },
    item_950: {
      type: "polar_bear_spawn_egg",
      item_name_ru: "Яйцо призыва белого медведя"
    },
    item_951: {
      type: "pufferfish_spawn_egg",
      item_name_ru: "Яйцо призыва иглобрюха"
    },
    item_952: {
      type: "rabbit_spawn_egg",
      item_name_ru: "Яйцо призыва кролика"
    },
    item_953: {
      type: "ravager_spawn_egg",
      item_name_ru: "Яйцо призыва разорителя"
    },
    item_954: {
      type: "salmon_spawn_egg",
      item_name_ru: "Яйцо призыва лосося"
    },
    item_955: {
      type: "sheep_spawn_egg",
      item_name_ru: "Яйцо призыва овцы"
    },
    item_956: {
      type: "shulker_spawn_egg",
      item_name_ru: "Яйцо призыва шалкера"
    },
    item_957: {
      type: "silverfish_spawn_egg",
      item_name_ru: "Яйцо призыва чешуйницы"
    },
    item_958: {
      type: "skeleton_spawn_egg",
      item_name_ru: "Яйцо призыва скелета"
    },
    item_959: {
      type: "skeleton_horse_spawn_egg",
      item_name_ru: "Яйцо призыва лошади-скелета"
    },
    item_960: {
      type: "slime_spawn_egg",
      item_name_ru: "Яйцо призыва слизня"
    },
    item_961: {
      type: "spider_spawn_egg",
      item_name_ru: "Яйцо призыва паука"
    },
    item_962: {
      type: "squid_spawn_egg",
      item_name_ru: "Яйцо призыва спрута"
    },
    item_963: {
      type: "stray_spawn_egg",
      item_name_ru: "Яйцо призыва зимогора"
    },
    item_964: {
      type: "strider_spawn_egg",
      item_name_ru: "Яйцо призыва лавомерки"
    },
    item_965: {
      type: "tadpole_spawn_egg",
      item_name_ru: "Яйцо призыва головастика"
    },
    item_966: {
      type: "trader_llama_spawn_egg",
      item_name_ru: "Яйцо призыва ламы торговца"
    },
    item_967: {
      type: "tropical_fish_spawn_egg",
      item_name_ru: "Яйцо призыва тропической рыбы"
    },
    item_968: {
      type: "turtle_spawn_egg",
      item_name_ru: "Яйцо призыва черепахи"
    },
    item_969: {
      type: "vex_spawn_egg",
      item_name_ru: "Яйцо призыва вредины"
    },
    item_970: {
      type: "villager_spawn_egg",
      item_name_ru: "Яйцо призыва крестьянина"
    },
    item_971: {
      type: "vindicator_spawn_egg",
      item_name_ru: "Яйцо призыва поборника"
    },
    item_972: {
      type: "wandering_trader_spawn_egg",
      item_name_ru: "Яйцо призыва странствующего торговца"
    },
    item_973: {
      type: "warden_spawn_egg",
      item_name_ru: "Яйцо призыва хранителя"
    },
    item_974: {
      type: "witch_spawn_egg",
      item_name_ru: "Яйцо призыва ведьмы"
    },
    item_975: {
      type: "wither_skeleton_spawn_egg",
      item_name_ru: "Яйцо призыва визер-скелета"
    },
    item_976: {
      type: "wolf_spawn_egg",
      item_name_ru: "Яйцо призыва волка"
    },
    item_977: {
      type: "zoglin_spawn_egg",
      item_name_ru: "Яйцо призыва зоглина"
    },
    item_978: {
      type: "zombie_spawn_egg",
      item_name_ru: "Яйцо призыва зомби"
    },
    item_979: {
      type: "zombie_horse_spawn_egg",
      item_name_ru: "Яйцо призыва лошади-зомби"
    },
    item_980: {
      type: "zombie_villager_spawn_egg",
      item_name_ru: "Яйцо призыва крестьянина-зомби"
    },
    item_981: {
      type: "zombified_piglin_spawn_egg",
      item_name_ru: "Яйцо призыва зомбифицированного пиглина"
    },
    item_982: {
      type: "experience_bottle",
      item_name_ru: "Пузырёк опыта"
    },
    item_983: {
      type: "fire_charge",
      item_name_ru: "Огненный заряд"
    },
    item_984: {
      type: "writable_book",
      item_name_ru: "Книга и перо"
    },
    item_985: {
      type: "written_book",
      item_name_ru: "Завершённая книга"
    },
    item_986: {
      type: "item_frame",
      item_name_ru: "Рамка"
    },
    item_987: {
      type: "glow_item_frame",
      item_name_ru: "Светящаяся рамка"
    },
    item_988: {
      type: "flower_pot",
      item_name_ru: "Цветочный горшок"
    },
    item_989: {
      type: "carrot",
      item_name_ru: "Морковь"
    },
    item_990: {
      type: "potato",
      item_name_ru: "Картофель"
    },
    item_991: {
      type: "baked_potato",
      item_name_ru: "Печёный картофель"
    },
    item_992: {
      type: "poisonous_potato",
      item_name_ru: "Ядовитый картофель"
    },
    item_993: {
      type: "map",
      item_name_ru: "Чистая карта"
    },
    item_994: {
      type: "golden_carrot",
      item_name_ru: "Золотая морковь"
    },
    item_995: {
      type: "skeleton_skull",
      item_name_ru: "Череп"
    },
    item_996: {
      type: "wither_skeleton_skull",
      item_name_ru: "Череп визер-скелета"
    },
    item_997: {
      type: "player_head",
      item_name_ru: "Голова игрока"
    },
    item_998: {
      type: "zombie_head",
      item_name_ru: "Голова зомби"
    },
    item_999: {
      type: "creeper_head",
      item_name_ru: "Голова крипера"
    },
    item_1000: {
      type: "dragon_head",
      item_name_ru: "Голова дракона"
    },
    item_1001: {
      type: "nether_star",
      item_name_ru: "Звезда Незера"
    },
    item_1002: {
      type: "pumpkin_pie",
      item_name_ru: "Тыквенный пирог"
    },
    item_1003: {
      type: "firework_rocket",
      item_name_ru: "Фейерверк"
    },
    item_1004: {
      type: "firework_star",
      item_name_ru: "Пиротехническая звезда"
    },
    item_1005: {
      type: "enchanted_book",
      item_name_ru: "Чародейская книга"
    },
    item_1006: {
      type: "nether_brick",
      item_name_ru: "Незерский кирпич"
    },
    item_1007: {
      type: "prismarine_shard",
      item_name_ru: "Осколок призмарина"
    },
    item_1008: {
      type: "prismarine_crystals",
      item_name_ru: "Кристалл призмарина"
    },
    item_1009: {
      type: "rabbit",
      item_name_ru: "Сырая крольчатина"
    },
    item_1010: {
      type: "cooked_rabbit",
      item_name_ru: "Жареная крольчатина"
    },
    item_1011: {
      type: "rabbit_stew",
      item_name_ru: "Тушёный кролик"
    },
    item_1012: {
      type: "rabbit_foot",
      item_name_ru: "Кроличья лапка"
    },
    item_1013: {
      type: "rabbit_hide",
      item_name_ru: "Кроличья шкурка"
    },
    item_1014: {
      type: "armor_stand",
      item_name_ru: "Стойка для брони"
    },
    item_1015: {
      type: "iron_horse_armor",
      item_name_ru: "Железная конская броня"
    },
    item_1016: {
      type: "golden_horse_armor",
      item_name_ru: "Золотая конская броня"
    },
    item_1017: {
      type: "diamond_horse_armor",
      item_name_ru: "Алмазная конская броня"
    },
    item_1018: {
      type: "leather_horse_armor",
      item_name_ru: "Кожаная конская броня"
    },
    item_1019: {
      type: "lead",
      item_name_ru: "Поводок"
    },
    item_1020: {
      type: "name_tag",
      item_name_ru: "Бирка"
    },
    item_1021: {
      type: "command_block_minecart",
      item_name_ru: "Вагонетка с командным блоком"
    },
    item_1022: {
      type: "mutton",
      item_name_ru: "Сырая баранина"
    },
    item_1023: {
      type: "cooked_mutton",
      item_name_ru: "Жареная баранина"
    },
    item_1024: {
      type: "white_banner",
      item_name_ru: "Белый флаг"
    },
    item_1025: {
      type: "orange_banner",
      item_name_ru: "Оранжевый флаг"
    },
    item_1026: {
      type: "magenta_banner",
      item_name_ru: "Пурпурный флаг"
    },
    item_1027: {
      type: "light_blue_banner",
      item_name_ru: "Голубой флаг"
    },
    item_1028: {
      type: "yellow_banner",
      item_name_ru: "Жёлтый флаг"
    },
    item_1029: {
      type: "lime_banner",
      item_name_ru: "Лаймовый флаг"
    },
    item_1030: {
      type: "pink_banner",
      item_name_ru: "Розовый флаг"
    },
    item_1031: {
      type: "gray_banner",
      item_name_ru: "Серый флаг"
    },
    item_1032: {
      type: "light_gray_banner",
      item_name_ru: "Светло-серый флаг"
    },
    item_1033: {
      type: "cyan_banner",
      item_name_ru: "Бирюзовый флаг"
    },
    item_1034: {
      type: "purple_banner",
      item_name_ru: "Фиолетовый флаг"
    },
    item_1035: {
      type: "blue_banner",
      item_name_ru: "Синий флаг"
    },
    item_1036: {
      type: "brown_banner",
      item_name_ru: "Коричневый флаг"
    },
    item_1037: {
      type: "green_banner",
      item_name_ru: "Зелёный флаг"
    },
    item_1038: {
      type: "red_banner",
      item_name_ru: "Красный флаг"
    },
    item_1039: {
      type: "black_banner",
      item_name_ru: "Чёрный флаг"
    },
    item_1040: {
      type: "end_crystal",
      item_name_ru: "Кристалл Энда"
    },
    item_1041: {
      type: "chorus_fruit",
      item_name_ru: "Плод хоруса"
    },
    item_1042: {
      type: "popped_chorus_fruit",
      item_name_ru: "Прожаренный плод хоруса"
    },
    item_1043: {
      type: "beetroot",
      item_name_ru: "Свёкла"
    },
    item_1044: {
      type: "beetroot_seeds",
      item_name_ru: "Семена свёклы"
    },
    item_1045: {
      type: "beetroot_soup",
      item_name_ru: "Свекольный суп"
    },
    item_1046: {
      type: "dragon_breath",
      item_name_ru: "Драконье дыхание"
    },
    item_1047: {
      type: "spectral_arrow",
      item_name_ru: "Спектральная стрела"
    },
    item_1048: {
      type: "shield",
      item_name_ru: "Щит"
    },
    item_1049: {
      type: "totem_of_undying",
      item_name_ru: "Тотем бессмертия"
    },
    item_1050: {
      type: "shulker_shell",
      item_name_ru: "Панцирь шалкера"
    },
    item_1051: {
      type: "iron_nugget",
      item_name_ru: "Кусочек железа"
    },
    item_1052: {
      type: "knowledge_book",
      item_name_ru: "Книга знаний"
    },
    item_1053: {
      type: "debug_stick",
      item_name_ru: "Палочка отладки"
    },
    item_1054: {
      type: "music_disc_13",
      item_name_ru: "Пластинка"
    },
    item_1055: {
      type: "music_disc_cat",
      item_name_ru: "Пластинка"
    },
    item_1056: {
      type: "music_disc_blocks",
      item_name_ru: "Пластинка"
    },
    item_1057: {
      type: "music_disc_chirp",
      item_name_ru: "Пластинка"
    },
    item_1058: {
      type: "music_disc_far",
      item_name_ru: "Пластинка"
    },
    item_1059: {
      type: "music_disc_mall",
      item_name_ru: "Пластинка"
    },
    item_1060: {
      type: "music_disc_mellohi",
      item_name_ru: "Пластинка"
    },
    item_1061: {
      type: "music_disc_stal",
      item_name_ru: "Пластинка"
    },
    item_1062: {
      type: "music_disc_strad",
      item_name_ru: "Пластинка"
    },
    item_1063: {
      type: "music_disc_ward",
      item_name_ru: "Пластинка"
    },
    item_1064: {
      type: "music_disc_11",
      item_name_ru: "Пластинка"
    },
    item_1065: {
      type: "music_disc_wait",
      item_name_ru: "Пластинка"
    },
    item_1066: {
      type: "music_disc_otherside",
      item_name_ru: "Пластинка"
    },
    item_1067: {
      type: "music_disc_5",
      item_name_ru: "Пластинка"
    },
    item_1068: {
      type: "music_disc_pigstep",
      item_name_ru: "Пластинка"
    },
    item_1069: {
      type: "disc_fragment_5",
      item_name_ru: "Осколок пластинки"
    },
    item_1070: {
      type: "trident",
      item_name_ru: "Трезубец"
    },
    item_1071: {
      type: "phantom_membrane",
      item_name_ru: "Мембрана фантома"
    },
    item_1072: {
      type: "nautilus_shell",
      item_name_ru: "Раковина наутилуса"
    },
    item_1073: {
      type: "heart_of_the_sea",
      item_name_ru: "Сердце моря"
    },
    item_1074: {
      type: "crossbow",
      item_name_ru: "Арбалет"
    },
    item_1075: {
      type: "suspicious_stew",
      item_name_ru: "Загадочное рагу"
    },
    item_1076: {
      type: "loom",
      item_name_ru: "Ткацкий станок"
    },
    item_1077: {
      type: "flower_banner_pattern",
      item_name_ru: "Узор флага"
    },
    item_1078: {
      type: "creeper_banner_pattern",
      item_name_ru: "Узор флага"
    },
    item_1079: {
      type: "skull_banner_pattern",
      item_name_ru: "Узор флага"
    },
    item_1080: {
      type: "mojang_banner_pattern",
      item_name_ru: "Узор флага"
    },
    item_1081: {
      type: "globe_banner_pattern",
      item_name_ru: "Узор флага"
    },
    item_1082: {
      type: "piglin_banner_pattern",
      item_name_ru: "Узор флага"
    },
    item_1083: {
      type: "goat_horn",
      item_name_ru: "Козий рог"
    },
    item_1084: {
      type: "composter",
      item_name_ru: "Компостница"
    },
    item_1085: {
      type: "barrel",
      item_name_ru: "Бочка"
    },
    item_1086: {
      type: "smoker",
      item_name_ru: "Коптильня"
    },
    item_1087: {
      type: "blast_furnace",
      item_name_ru: "Плавильная печь"
    },
    item_1088: {
      type: "cartography_table",
      item_name_ru: "Стол картографа"
    },
    item_1089: {
      type: "fletching_table",
      item_name_ru: "Стол лучника"
    },
    item_1090: {
      type: "grindstone",
      item_name_ru: "Точило"
    },
    item_1091: {
      type: "smithing_table",
      item_name_ru: "Стол кузнеца"
    },
    item_1092: {
      type: "stonecutter",
      item_name_ru: "Камнерез"
    },
    item_1093: {
      type: "bell",
      item_name_ru: "Колокол"
    },
    item_1094: {
      type: "lantern",
      item_name_ru: "Фонарь"
    },
    item_1095: {
      type: "soul_lantern",
      item_name_ru: "Фонарь душ"
    },
    item_1096: {
      type: "sweet_berries",
      item_name_ru: "Сладкие ягоды"
    },
    item_1097: {
      type: "glow_berries",
      item_name_ru: "Светящиеся ягоды"
    },
    item_1098: {
      type: "campfire",
      item_name_ru: "Костёр"
    },
    item_1099: {
      type: "soul_campfire",
      item_name_ru: "Костёр душ"
    },
    item_1100: {
      type: "shroomlight",
      item_name_ru: "Грибосвет"
    },
    item_1101: {
      type: "honeycomb",
      item_name_ru: "Пчелиные соты"
    },
    item_1102: {
      type: "bee_nest",
      item_name_ru: "Пчелиное гнездо"
    },
    item_1103: {
      type: "beehive",
      item_name_ru: "Улей"
    },
    item_1104: {
      type: "honey_bottle",
      item_name_ru: "Бутылочка мёда"
    },
    item_1105: {
      type: "honeycomb_block",
      item_name_ru: "Блок пчелиных сот"
    },
    item_1106: {
      type: "lodestone",
      item_name_ru: "Магнетит"
    },
    item_1107: {
      type: "crying_obsidian",
      item_name_ru: "Плачущий обсидиан"
    },
    item_1108: {
      type: "blackstone",
      item_name_ru: "Чернит"
    },
    item_1109: {
      type: "blackstone_slab",
      item_name_ru: "Чернитная плита"
    },
    item_1110: {
      type: "blackstone_stairs",
      item_name_ru: "Чернитные ступеньки"
    },
    item_1111: {
      type: "gilded_blackstone",
      item_name_ru: "Золочёный чернит"
    },
    item_1112: {
      type: "polished_blackstone",
      item_name_ru: "Полированный чернит"
    },
    item_1113: {
      type: "polished_blackstone_slab",
      item_name_ru: "Плита из полированного чернита"
    },
    item_1114: {
      type: "polished_blackstone_stairs",
      item_name_ru: "Ступеньки из полированного чернита"
    },
    item_1115: {
      type: "chiseled_polished_blackstone",
      item_name_ru: "Резной полированный чернит"
    },
    item_1116: {
      type: "polished_blackstone_bricks",
      item_name_ru: "Полированно-чернитные кирпичи"
    },
    item_1117: {
      type: "polished_blackstone_brick_slab",
      item_name_ru: "Плита из полированно-чернитного кирпича"
    },
    item_1118: {
      type: "polished_blackstone_brick_stairs",
      item_name_ru: "Ступеньки из полированно-чернитного кирпича"
    },
    item_1119: {
      type: "cracked_polished_blackstone_bricks",
      item_name_ru: "Потрескавшиеся полированно-чернитные кирпичи"
    },
    item_1120: {
      type: "respawn_anchor",
      item_name_ru: "Якорь возрождения"
    },
    item_1121: {
      type: "candle",
      item_name_ru: "Свеча"
    },
    item_1122: {
      type: "white_candle",
      item_name_ru: "Белая свеча"
    },
    item_1123: {
      type: "orange_candle",
      item_name_ru: "Оранжевая свеча"
    },
    item_1124: {
      type: "magenta_candle",
      item_name_ru: "Пурпурная свеча"
    },
    item_1125: {
      type: "light_blue_candle",
      item_name_ru: "Голубая свеча"
    },
    item_1126: {
      type: "yellow_candle",
      item_name_ru: "Жёлтая свеча"
    },
    item_1127: {
      type: "lime_candle",
      item_name_ru: "Лаймовая свеча"
    },
    item_1128: {
      type: "pink_candle",
      item_name_ru: "Розовая свеча"
    },
    item_1129: {
      type: "gray_candle",
      item_name_ru: "Серая свеча"
    },
    item_1130: {
      type: "light_gray_candle",
      item_name_ru: "Светло-серая свеча"
    },
    item_1131: {
      type: "cyan_candle",
      item_name_ru: "Бирюзовая свеча"
    },
    item_1132: {
      type: "purple_candle",
      item_name_ru: "Фиолетовая свеча"
    },
    item_1133: {
      type: "blue_candle",
      item_name_ru: "Синяя свеча"
    },
    item_1134: {
      type: "brown_candle",
      item_name_ru: "Коричневая свеча"
    },
    item_1135: {
      type: "green_candle",
      item_name_ru: "Зелёная свеча"
    },
    item_1136: {
      type: "red_candle",
      item_name_ru: "Красная свеча"
    },
    item_1137: {
      type: "black_candle",
      item_name_ru: "Чёрная свеча"
    },
    item_1138: {
      type: "small_amethyst_bud",
      item_name_ru: "Малый аметистовый бутон"
    },
    item_1139: {
      type: "medium_amethyst_bud",
      item_name_ru: "Средний аметистовый бутон"
    },
    item_1140: {
      type: "large_amethyst_bud",
      item_name_ru: "Большой аметистовый бутон"
    },
    item_1141: {
      type: "amethyst_cluster",
      item_name_ru: "Аметистовая друза"
    },
    item_1142: {
      type: "pointed_dripstone",
      item_name_ru: "Капельник"
    },
    item_1143: {
      type: "ochre_froglight",
      item_name_ru: "Охристая квампа"
    },
    item_1144: {
      type: "verdant_froglight",
      item_name_ru: "Малахитовая квампа"
    },
    item_1145: {
      type: "pearlescent_froglight",
      item_name_ru: "Перламутровая квампа"
    },
    item_1146: {
      type: "frogspawn",
      item_name_ru: "Лягушачья икра"
    },
    item_1147: {
      type: "echo_shard",
      item_name_ru: "Осколок эха"
    },
    item_1148: {
      type: "potion",
      item_name_ru: "Бутылочка воды"
    },
    item_1149: {
      type: "potion",
      item_name_ru: "Заурядное зелье"
    },
    item_1150: {
      type: "potion",
      item_name_ru: "Густое зелье"
    },
    item_1151: {
      type: "potion",
      item_name_ru: "Мутное зелье"
    },
    item_1152: {
      type: "potion",
      item_name_ru: "Зелье ночного зрения"
    },
    item_1153: {
      type: "potion",
      item_name_ru: "Зелье ночного зрения"
    },
    item_1154: {
      type: "potion",
      item_name_ru: "Зелье невидимости"
    },
    item_1155: {
      type: "potion",
      item_name_ru: "Зелье невидимости"
    },
    item_1156: {
      type: "potion",
      item_name_ru: "Зелье прыгучести"
    },
    item_1157: {
      type: "potion",
      item_name_ru: "Зелье прыгучести"
    },
    item_1158: {
      type: "potion",
      item_name_ru: "Зелье прыгучести"
    },
    item_1159: {
      type: "potion",
      item_name_ru: "Зелье огнестойкости"
    },
    item_1160: {
      type: "potion",
      item_name_ru: "Зелье огнестойкости"
    },
    item_1161: {
      type: "potion",
      item_name_ru: "Зелье стремительности"
    },
    item_1162: {
      type: "potion",
      item_name_ru: "Зелье стремительности"
    },
    item_1163: {
      type: "potion",
      item_name_ru: "Зелье стремительности"
    },
    item_1164: {
      type: "potion",
      item_name_ru: "Зелье замедления"
    },
    item_1165: {
      type: "potion",
      item_name_ru: "Зелье замедления"
    },
    item_1166: {
      type: "potion",
      item_name_ru: "Зелье замедления"
    },
    item_1167: {
      type: "potion",
      item_name_ru: "Зелье черепашьей мощи"
    },
    item_1168: {
      type: "potion",
      item_name_ru: "Зелье черепашьей мощи"
    },
    item_1169: {
      type: "potion",
      item_name_ru: "Зелье черепашьей мощи"
    },
    item_1170: {
      type: "potion",
      item_name_ru: "Зелье водного дыхания"
    },
    item_1171: {
      type: "potion",
      item_name_ru: "Зелье водного дыхания"
    },
    item_1172: {
      type: "potion",
      item_name_ru: "Зелье исцеления"
    },
    item_1173: {
      type: "potion",
      item_name_ru: "Зелье исцеления"
    },
    item_1174: {
      type: "potion",
      item_name_ru: "Зелье вреда"
    },
    item_1175: {
      type: "potion",
      item_name_ru: "Зелье вреда"
    },
    item_1176: {
      type: "potion",
      item_name_ru: "Зелье отравления"
    },
    item_1177: {
      type: "potion",
      item_name_ru: "Зелье отравления"
    },
    item_1178: {
      type: "potion",
      item_name_ru: "Зелье отравления"
    },
    item_1179: {
      type: "potion",
      item_name_ru: "Зелье регенерации"
    },
    item_1180: {
      type: "potion",
      item_name_ru: "Зелье регенерации"
    },
    item_1181: {
      type: "potion",
      item_name_ru: "Зелье регенерации"
    },
    item_1182: {
      type: "potion",
      item_name_ru: "Зелье силы"
    },
    item_1183: {
      type: "potion",
      item_name_ru: "Зелье силы"
    },
    item_1184: {
      type: "potion",
      item_name_ru: "Зелье силы"
    },
    item_1185: {
      type: "potion",
      item_name_ru: "Зелье слабости"
    },
    item_1186: {
      type: "potion",
      item_name_ru: "Зелье слабости"
    },
    item_1187: {
      type: "potion",
      item_name_ru: "Зелье везения"
    },
    item_1188: {
      type: "potion",
      item_name_ru: "Зелье плавного падения"
    },
    item_1189: {
      type: "potion",
      item_name_ru: "Зелье плавного падения"
    },
    item_1190: {
      type: "splash_potion",
      item_name_ru: "Взрывная бутылочка воды"
    },
    item_1191: {
      type: "splash_potion",
      item_name_ru: "Заурядное взрывное зелье"
    },
    item_1192: {
      type: "splash_potion",
      item_name_ru: "Густое взрывное зелье"
    },
    item_1193: {
      type: "splash_potion",
      item_name_ru: "Мутное взрывное зелье"
    },
    item_1194: {
      type: "splash_potion",
      item_name_ru: "Взрывное зелье ночного зрения"
    },
    item_1195: {
      type: "splash_potion",
      item_name_ru: "Взрывное зелье ночного зрения"
    },
    item_1196: {
      type: "splash_potion",
      item_name_ru: "Взрывное зелье невидимости"
    },
    item_1197: {
      type: "splash_potion",
      item_name_ru: "Взрывное зелье невидимости"
    },
    item_1198: {
      type: "splash_potion",
      item_name_ru: "Взрывное зелье прыгучести"
    },
    item_1199: {
      type: "splash_potion",
      item_name_ru: "Взрывное зелье прыгучести"
    },
    item_1200: {
      type: "splash_potion",
      item_name_ru: "Взрывное зелье прыгучести"
    },
    item_1201: {
      type: "splash_potion",
      item_name_ru: "Взрывное зелье огнестойкости"
    },
    item_1202: {
      type: "splash_potion",
      item_name_ru: "Взрывное зелье огнестойкости"
    },
    item_1203: {
      type: "splash_potion",
      item_name_ru: "Взрывное зелье стремительности"
    },
    item_1204: {
      type: "splash_potion",
      item_name_ru: "Взрывное зелье стремительности"
    },
    item_1205: {
      type: "splash_potion",
      item_name_ru: "Взрывное зелье стремительности"
    },
    item_1206: {
      type: "splash_potion",
      item_name_ru: "Взрывное зелье замедления"
    },
    item_1207: {
      type: "splash_potion",
      item_name_ru: "Взрывное зелье замедления"
    },
    item_1208: {
      type: "splash_potion",
      item_name_ru: "Взрывное зелье замедления"
    },
    item_1209: {
      type: "splash_potion",
      item_name_ru: "Взрывное зелье черепашьей мощи"
    },
    item_1210: {
      type: "splash_potion",
      item_name_ru: "Взрывное зелье черепашьей мощи"
    },
    item_1211: {
      type: "splash_potion",
      item_name_ru: "Взрывное зелье черепашьей мощи"
    },
    item_1212: {
      type: "splash_potion",
      item_name_ru: "Взрывное зелье водного дыхания"
    },
    item_1213: {
      type: "splash_potion",
      item_name_ru: "Взрывное зелье водного дыхания"
    },
    item_1214: {
      type: "splash_potion",
      item_name_ru: "Взрывное зелье исцеления"
    },
    item_1215: {
      type: "splash_potion",
      item_name_ru: "Взрывное зелье исцеления"
    },
    item_1216: {
      type: "splash_potion",
      item_name_ru: "Взрывное зелье вреда"
    },
    item_1217: {
      type: "splash_potion",
      item_name_ru: "Взрывное зелье вреда"
    },
    item_1218: {
      type: "splash_potion",
      item_name_ru: "Взрывное зелье отравления"
    },
    item_1219: {
      type: "splash_potion",
      item_name_ru: "Взрывное зелье отравления"
    },
    item_1220: {
      type: "splash_potion",
      item_name_ru: "Взрывное зелье отравления"
    },
    item_1221: {
      type: "splash_potion",
      item_name_ru: "Взрывное зелье регенерации"
    },
    item_1222: {
      type: "splash_potion",
      item_name_ru: "Взрывное зелье регенерации"
    },
    item_1223: {
      type: "splash_potion",
      item_name_ru: "Взрывное зелье регенерации"
    },
    item_1224: {
      type: "splash_potion",
      item_name_ru: "Взрывное зелье силы"
    },
    item_1225: {
      type: "splash_potion",
      item_name_ru: "Взрывное зелье силы"
    },
    item_1226: {
      type: "splash_potion",
      item_name_ru: "Взрывное зелье силы"
    },
    item_1227: {
      type: "splash_potion",
      item_name_ru: "Взрывное зелье слабости"
    },
    item_1228: {
      type: "splash_potion",
      item_name_ru: "Взрывное зелье слабости"
    },
    item_1229: {
      type: "splash_potion",
      item_name_ru: "Взрывное зелье везения"
    },
    item_1230: {
      type: "splash_potion",
      item_name_ru: "Взрывное зелье плавного падения"
    },
    item_1231: {
      type: "splash_potion",
      item_name_ru: "Взрывное зелье плавного падения"
    },
    item_1232: {
      type: "tipped_arrow",
      item_name_ru: "Стрела ночного зрения"
    },
    item_1233: {
      type: "tipped_arrow",
      item_name_ru: "Стрела ночного зрения"
    },
    item_1234: {
      type: "tipped_arrow",
      item_name_ru: "Стрела невидимости"
    },
    item_1235: {
      type: "tipped_arrow",
      item_name_ru: "Стрела невидимости"
    },
    item_1236: {
      type: "tipped_arrow",
      item_name_ru: "Стрела прыгучести"
    },
    item_1237: {
      type: "tipped_arrow",
      item_name_ru: "Стрела прыгучести"
    },
    item_1238: {
      type: "tipped_arrow",
      item_name_ru: "Стрела прыгучести"
    },
    item_1239: {
      type: "tipped_arrow",
      item_name_ru: "Стрела огнестойкости"
    },
    item_1240: {
      type: "tipped_arrow",
      item_name_ru: "Стрела огнестойкости"
    },
    item_1241: {
      type: "tipped_arrow",
      item_name_ru: "Стрела стремительности"
    },
    item_1242: {
      type: "tipped_arrow",
      item_name_ru: "Стрела стремительности"
    },
    item_1243: {
      type: "tipped_arrow",
      item_name_ru: "Стрела стремительности"
    },
    item_1244: {
      type: "tipped_arrow",
      item_name_ru: "Стрела замедления"
    },
    item_1245: {
      type: "tipped_arrow",
      item_name_ru: "Стрела замедления"
    },
    item_1246: {
      type: "tipped_arrow",
      item_name_ru: "Стрела замедления"
    },
    item_1247: {
      type: "tipped_arrow",
      item_name_ru: "Стрела черепашьей мощи"
    },
    item_1248: {
      type: "tipped_arrow",
      item_name_ru: "Стрела черепашьей мощи"
    },
    item_1249: {
      type: "tipped_arrow",
      item_name_ru: "Стрела черепашьей мощи"
    },
    item_1250: {
      type: "tipped_arrow",
      item_name_ru: "Стрела водного дыхания"
    },
    item_1251: {
      type: "tipped_arrow",
      item_name_ru: "Стрела водного дыхания"
    },
    item_1252: {
      type: "tipped_arrow",
      item_name_ru: "Стрела исцеления"
    },
    item_1253: {
      type: "tipped_arrow",
      item_name_ru: "Стрела исцеления"
    },
    item_1254: {
      type: "tipped_arrow",
      item_name_ru: "Стрела вреда"
    },
    item_1255: {
      type: "tipped_arrow",
      item_name_ru: "Стрела вреда"
    },
    item_1256: {
      type: "tipped_arrow",
      item_name_ru: "Стрела отравления"
    },
    item_1257: {
      type: "tipped_arrow",
      item_name_ru: "Стрела отравления"
    },
    item_1258: {
      type: "tipped_arrow",
      item_name_ru: "Стрела отравления"
    },
    item_1259: {
      type: "tipped_arrow",
      item_name_ru: "Стрела регенерации"
    },
    item_1260: {
      type: "tipped_arrow",
      item_name_ru: "Стрела регенерации"
    },
    item_1261: {
      type: "tipped_arrow",
      item_name_ru: "Стрела регенерации"
    },
    item_1262: {
      type: "tipped_arrow",
      item_name_ru: "Стрела силы"
    },
    item_1263: {
      type: "tipped_arrow",
      item_name_ru: "Стрела силы"
    },
    item_1264: {
      type: "tipped_arrow",
      item_name_ru: "Стрела силы"
    },
    item_1265: {
      type: "tipped_arrow",
      item_name_ru: "Стрела слабости"
    },
    item_1266: {
      type: "tipped_arrow",
      item_name_ru: "Стрела слабости"
    },
    item_1267: {
      type: "tipped_arrow",
      item_name_ru: "Стрела везения"
    },
    item_1268: {
      type: "tipped_arrow",
      item_name_ru: "Стрела плавного падения"
    },
    item_1269: {
      type: "tipped_arrow",
      item_name_ru: "Стрела плавного падения"
    },
    item_1270: {
      type: "lingering_potion",
      item_name_ru: "Бутылочка с водяной взвесью"
    },
    item_1271: {
      type: "lingering_potion",
      item_name_ru: "Заурядное туманное зелье"
    },
    item_1272: {
      type: "lingering_potion",
      item_name_ru: "Густое туманное зелье"
    },
    item_1273: {
      type: "lingering_potion",
      item_name_ru: "Мутное туманное зелье"
    },
    item_1274: {
      type: "lingering_potion",
      item_name_ru: "Туманное зелье ночного зрения"
    },
    item_1275: {
      type: "lingering_potion",
      item_name_ru: "Туманное зелье ночного зрения"
    },
    item_1276: {
      type: "lingering_potion",
      item_name_ru: "Туманное зелье невидимости"
    },
    item_1277: {
      type: "lingering_potion",
      item_name_ru: "Туманное зелье невидимости"
    },
    item_1278: {
      type: "lingering_potion",
      item_name_ru: "Туманное зелье прыгучести"
    },
    item_1279: {
      type: "lingering_potion",
      item_name_ru: "Туманное зелье прыгучести"
    },
    item_1280: {
      type: "lingering_potion",
      item_name_ru: "Туманное зелье прыгучести"
    },
    item_1281: {
      type: "lingering_potion",
      item_name_ru: "Туманное зелье огнестойкости"
    },
    item_1282: {
      type: "lingering_potion",
      item_name_ru: "Туманное зелье огнестойкости"
    },
    item_1283: {
      type: "lingering_potion",
      item_name_ru: "Туманное зелье стремительности"
    },
    item_1284: {
      type: "lingering_potion",
      item_name_ru: "Туманное зелье стремительности"
    },
    item_1285: {
      type: "lingering_potion",
      item_name_ru: "Туманное зелье стремительности"
    },
    item_1286: {
      type: "lingering_potion",
      item_name_ru: "Туманное зелье замедления"
    },
    item_1287: {
      type: "lingering_potion",
      item_name_ru: "Туманное зелье замедления"
    },
    item_1288: {
      type: "lingering_potion",
      item_name_ru: "Туманное зелье замедления"
    },
    item_1289: {
      type: "lingering_potion",
      item_name_ru: "Туманное зелье черепашьей мощи"
    },
    item_1290: {
      type: "lingering_potion",
      item_name_ru: "Туманное зелье черепашьей мощи"
    },
    item_1291: {
      type: "lingering_potion",
      item_name_ru: "Туманное зелье черепашьей мощи"
    },
    item_1292: {
      type: "lingering_potion",
      item_name_ru: "Туманное зелье водного дыхания"
    },
    item_1293: {
      type: "lingering_potion",
      item_name_ru: "Туманное зелье водного дыхания"
    },
    item_1294: {
      type: "lingering_potion",
      item_name_ru: "Туманное зелье исцеления"
    },
    item_1295: {
      type: "lingering_potion",
      item_name_ru: "Туманное зелье исцеления"
    },
    item_1296: {
      type: "lingering_potion",
      item_name_ru: "Туманное зелье вреда"
    },
    item_1297: {
      type: "lingering_potion",
      item_name_ru: "Туманное зелье вреда"
    },
    item_1298: {
      type: "lingering_potion",
      item_name_ru: "Туманное зелье отравления"
    },
    item_1299: {
      type: "lingering_potion",
      item_name_ru: "Туманное зелье отравления"
    },
    item_1300: {
      type: "lingering_potion",
      item_name_ru: "Туманное зелье отравления"
    },
    item_1301: {
      type: "lingering_potion",
      item_name_ru: "Туманное зелье регенерации"
    },
    item_1302: {
      type: "lingering_potion",
      item_name_ru: "Туманное зелье регенерации"
    },
    item_1303: {
      type: "lingering_potion",
      item_name_ru: "Туманное зелье регенерации"
    },
    item_1304: {
      type: "lingering_potion",
      item_name_ru: "Туманное зелье силы"
    },
    item_1305: {
      type: "lingering_potion",
      item_name_ru: "Туманное зелье силы"
    },
    item_1306: {
      type: "lingering_potion",
      item_name_ru: "Туманное зелье силы"
    },
    item_1307: {
      type: "lingering_potion",
      item_name_ru: "Туманное зелье слабости"
    },
    item_1308: {
      type: "lingering_potion",
      item_name_ru: "Туманное зелье слабости"
    },
    item_1309: {
      type: "lingering_potion",
      item_name_ru: "Туманное зелье везения"
    },
    item_1310: {
      type: "lingering_potion",
      item_name_ru: "Туманное зелье плавного падения"
    },
    item_1311: {
      type: "lingering_potion",
      item_name_ru: "Туманное зелье плавного падения"
    }
  };

  const data = [
    {
      "id": "1",
      "profession": "savanna",
      "villager_type": "plains",
      "name": "Магазин Бакси",
      "owner_name": "Бакси",
      "discord_tag": "Баксиии#1026",
      "coordinates_x": "654321",
      "coordinates_y": "654321",
      "coordinates_z": "654321",
      "offers": [
        {
          "name": "SHULKER_BOX",
          "content": [
            {
              "slot": "0",
              "id": "prismarine",
              "count": "64"
            },
            {
              "slot": "1",
              "id": "prismarine",
              "count": "64"
            },
            {
              "slot": "2",
              "id": "prismarine",
              "count": "64"
            },
            {
              "slot": "3",
              "id": "prismarine",
              "count": "64"
            },
            {
              "slot": "4",
              "id": "prismarine",
              "count": "64"
            },
            {
              "slot": "5",
              "id": "prismarine",
              "count": "64"
            },
            {
              "slot": "6",
              "id": "prismarine",
              "count": "64"
            },
            {
              "slot": "7",
              "id": "prismarine",
              "count": "64"
            },
            {
              "slot": "8",
              "id": "prismarine",
              "count": "64"
            },
            {
              "slot": "9",
              "id": "prismarine",
              "count": "64"
            },
            {
              "slot": "10",
              "id": "prismarine",
              "count": "64"
            },
            {
              "slot": "11",
              "id": "prismarine",
              "count": "64"
            },
            {
              "slot": "12",
              "id": "prismarine",
              "count": "64"
            },
            {
              "slot": "13",
              "id": "prismarine",
              "count": "64"
            },
            {
              "slot": "14",
              "id": "prismarine",
              "count": "64"
            },
            {
              "slot": "15",
              "id": "prismarine",
              "count": "64"
            },
            {
              "slot": "16",
              "id": "prismarine",
              "count": "64"
            },
            {
              "slot": "17",
              "id": "prismarine",
              "count": "64"
            },
            {
              "slot": "18",
              "id": "prismarine",
              "count": "64"
            },
            {
              "slot": "19",
              "id": "prismarine",
              "count": "64"
            },
            {
              "slot": "20",
              "id": "prismarine",
              "count": "64"
            },
            {
              "slot": "21",
              "id": "prismarine",
              "count": "64"
            },
            {
              "slot": "22",
              "id": "prismarine",
              "count": "64"
            },
            {
              "slot": "23",
              "id": "prismarine",
              "count": "64"
            },
            {
              "slot": "24",
              "id": "prismarine",
              "count": "64"
            },
            {
              "slot": "25",
              "id": "prismarine",
              "count": "64"
            },
            {
              "slot": "26",
              "id": "prismarine",
              "count": "64"
            }
          ],
          "amount": 6,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "SHULKER_BOX",
          "content": [
            {
              "slot": "0",
              "id": "prismarine_bricks",
              "count": "64"
            },
            {
              "slot": "1",
              "id": "prismarine_bricks",
              "count": "64"
            },
            {
              "slot": "2",
              "id": "prismarine_bricks",
              "count": "64"
            },
            {
              "slot": "3",
              "id": "prismarine_bricks",
              "count": "64"
            },
            {
              "slot": "4",
              "id": "prismarine_bricks",
              "count": "64"
            },
            {
              "slot": "5",
              "id": "prismarine_bricks",
              "count": "64"
            },
            {
              "slot": "6",
              "id": "prismarine_bricks",
              "count": "64"
            },
            {
              "slot": "7",
              "id": "prismarine_bricks",
              "count": "64"
            },
            {
              "slot": "8",
              "id": "prismarine_bricks",
              "count": "64"
            },
            {
              "slot": "9",
              "id": "prismarine_bricks",
              "count": "64"
            },
            {
              "slot": "10",
              "id": "prismarine_bricks",
              "count": "64"
            },
            {
              "slot": "11",
              "id": "prismarine_bricks",
              "count": "64"
            },
            {
              "slot": "12",
              "id": "prismarine_bricks",
              "count": "64"
            },
            {
              "slot": "13",
              "id": "prismarine_bricks",
              "count": "64"
            },
            {
              "slot": "14",
              "id": "prismarine_bricks",
              "count": "64"
            },
            {
              "slot": "15",
              "id": "prismarine_bricks",
              "count": "64"
            },
            {
              "slot": "16",
              "id": "prismarine_bricks",
              "count": "64"
            },
            {
              "slot": "17",
              "id": "prismarine_bricks",
              "count": "64"
            },
            {
              "slot": "18",
              "id": "prismarine_bricks",
              "count": "64"
            },
            {
              "slot": "19",
              "id": "prismarine_bricks",
              "count": "64"
            },
            {
              "slot": "20",
              "id": "prismarine_bricks",
              "count": "64"
            },
            {
              "slot": "21",
              "id": "prismarine_bricks",
              "count": "64"
            },
            {
              "slot": "22",
              "id": "prismarine_bricks",
              "count": "64"
            },
            {
              "slot": "23",
              "id": "prismarine_bricks",
              "count": "64"
            },
            {
              "slot": "24",
              "id": "prismarine_bricks",
              "count": "64"
            },
            {
              "slot": "25",
              "id": "prismarine_bricks",
              "count": "64"
            },
            {
              "slot": "26",
              "id": "prismarine_bricks",
              "count": "64"
            }
          ],
          "amount": 12,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "SHULKER_BOX",
          "content": [
            {
              "slot": "0",
              "id": "glow_ink_sac",
              "count": "64"
            },
            {
              "slot": "1",
              "id": "glow_ink_sac",
              "count": "64"
            },
            {
              "slot": "2",
              "id": "glow_ink_sac",
              "count": "64"
            },
            {
              "slot": "3",
              "id": "glow_ink_sac",
              "count": "64"
            },
            {
              "slot": "4",
              "id": "glow_ink_sac",
              "count": "64"
            },
            {
              "slot": "5",
              "id": "glow_ink_sac",
              "count": "64"
            },
            {
              "slot": "6",
              "id": "glow_ink_sac",
              "count": "64"
            },
            {
              "slot": "7",
              "id": "glow_ink_sac",
              "count": "64"
            },
            {
              "slot": "8",
              "id": "glow_ink_sac",
              "count": "64"
            },
            {
              "slot": "9",
              "id": "glow_ink_sac",
              "count": "64"
            },
            {
              "slot": "10",
              "id": "glow_ink_sac",
              "count": "64"
            },
            {
              "slot": "11",
              "id": "glow_ink_sac",
              "count": "64"
            },
            {
              "slot": "12",
              "id": "glow_ink_sac",
              "count": "64"
            },
            {
              "slot": "13",
              "id": "glow_ink_sac",
              "count": "64"
            },
            {
              "slot": "14",
              "id": "glow_ink_sac",
              "count": "64"
            },
            {
              "slot": "15",
              "id": "glow_ink_sac",
              "count": "64"
            },
            {
              "slot": "16",
              "id": "glow_ink_sac",
              "count": "64"
            },
            {
              "slot": "17",
              "id": "glow_ink_sac",
              "count": "64"
            },
            {
              "slot": "18",
              "id": "glow_ink_sac",
              "count": "64"
            },
            {
              "slot": "19",
              "id": "glow_ink_sac",
              "count": "64"
            },
            {
              "slot": "20",
              "id": "glow_ink_sac",
              "count": "64"
            },
            {
              "slot": "21",
              "id": "glow_ink_sac",
              "count": "64"
            },
            {
              "slot": "22",
              "id": "glow_ink_sac",
              "count": "64"
            },
            {
              "slot": "23",
              "id": "glow_ink_sac",
              "count": "64"
            },
            {
              "slot": "24",
              "id": "glow_ink_sac",
              "count": "64"
            },
            {
              "slot": "25",
              "id": "glow_ink_sac",
              "count": "64"
            },
            {
              "slot": "26",
              "id": "glow_ink_sac",
              "count": "64"
            }
          ],
          "amount": 16,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        }
      ]
    },
    {
      "id": "2",
      "profession": "nitwit",
      "villager_type": "plains",
      "name": "Кузнечный магазин что то там",
      "owner_name": "prestig9110",
      "discord_tag": "prestig9110#1026",
      "coordinates_x": "123456",
      "coordinates_y": "123456",
      "coordinates_z": "123456",
      "offers": [
        {
          "name": "BLUE_SHULKER_BOX",
          "content": [
            {
              "slot": "0",
              "id": "birch_log",
              "count": "64"
            },
            {
              "slot": "1",
              "id": "birch_log",
              "count": "64"
            },
            {
              "slot": "2",
              "id": "birch_log",
              "count": "64"
            },
            {
              "slot": "3",
              "id": "birch_log",
              "count": "64"
            },
            {
              "slot": "4",
              "id": "birch_log",
              "count": "64"
            },
            {
              "slot": "5",
              "id": "birch_log",
              "count": "64"
            },
            {
              "slot": "6",
              "id": "birch_log",
              "count": "64"
            },
            {
              "slot": "7",
              "id": "birch_log",
              "count": "64"
            },
            {
              "slot": "8",
              "id": "birch_log",
              "count": "64"
            },
            {
              "slot": "9",
              "id": "birch_log",
              "count": "64"
            },
            {
              "slot": "10",
              "id": "birch_log",
              "count": "64"
            },
            {
              "slot": "11",
              "id": "birch_log",
              "count": "64"
            },
            {
              "slot": "12",
              "id": "birch_log",
              "count": "64"
            },
            {
              "slot": "13",
              "id": "birch_log",
              "count": "64"
            },
            {
              "slot": "14",
              "id": "birch_log",
              "count": "64"
            },
            {
              "slot": "15",
              "id": "birch_log",
              "count": "64"
            },
            {
              "slot": "16",
              "id": "birch_log",
              "count": "64"
            },
            {
              "slot": "17",
              "id": "birch_log",
              "count": "64"
            },
            {
              "slot": "18",
              "id": "birch_log",
              "count": "64"
            },
            {
              "slot": "19",
              "id": "birch_log",
              "count": "64"
            },
            {
              "slot": "20",
              "id": "birch_log",
              "count": "64"
            },
            {
              "slot": "21",
              "id": "birch_log",
              "count": "64"
            },
            {
              "slot": "22",
              "id": "birch_log",
              "count": "64"
            },
            {
              "slot": "23",
              "id": "birch_log",
              "count": "64"
            },
            {
              "slot": "24",
              "id": "birch_log",
              "count": "64"
            },
            {
              "slot": "25",
              "id": "birch_log",
              "count": "64"
            },
            {
              "slot": "26",
              "id": "birch_log",
              "count": "64"
            }
          ],
          "amount": 18,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "BLUE_SHULKER_BOX",
          "content": [
            {
              "slot": "0",
              "id": "jungle_log",
              "count": "64"
            },
            {
              "slot": "1",
              "id": "jungle_log",
              "count": "64"
            },
            {
              "slot": "2",
              "id": "jungle_log",
              "count": "64"
            },
            {
              "slot": "3",
              "id": "jungle_log",
              "count": "64"
            },
            {
              "slot": "4",
              "id": "jungle_log",
              "count": "64"
            },
            {
              "slot": "5",
              "id": "jungle_log",
              "count": "64"
            },
            {
              "slot": "6",
              "id": "jungle_log",
              "count": "64"
            },
            {
              "slot": "7",
              "id": "jungle_log",
              "count": "64"
            },
            {
              "slot": "8",
              "id": "jungle_log",
              "count": "64"
            },
            {
              "slot": "9",
              "id": "jungle_log",
              "count": "64"
            },
            {
              "slot": "10",
              "id": "jungle_log",
              "count": "64"
            },
            {
              "slot": "11",
              "id": "jungle_log",
              "count": "64"
            },
            {
              "slot": "12",
              "id": "jungle_log",
              "count": "64"
            },
            {
              "slot": "13",
              "id": "jungle_log",
              "count": "64"
            },
            {
              "slot": "14",
              "id": "jungle_log",
              "count": "64"
            },
            {
              "slot": "15",
              "id": "jungle_log",
              "count": "64"
            },
            {
              "slot": "16",
              "id": "jungle_log",
              "count": "64"
            },
            {
              "slot": "17",
              "id": "jungle_log",
              "count": "64"
            },
            {
              "slot": "18",
              "id": "jungle_log",
              "count": "64"
            },
            {
              "slot": "19",
              "id": "jungle_log",
              "count": "64"
            },
            {
              "slot": "20",
              "id": "jungle_log",
              "count": "64"
            },
            {
              "slot": "21",
              "id": "jungle_log",
              "count": "64"
            },
            {
              "slot": "22",
              "id": "jungle_log",
              "count": "64"
            },
            {
              "slot": "23",
              "id": "jungle_log",
              "count": "64"
            },
            {
              "slot": "24",
              "id": "jungle_log",
              "count": "64"
            },
            {
              "slot": "25",
              "id": "jungle_log",
              "count": "64"
            },
            {
              "slot": "26",
              "id": "jungle_log",
              "count": "64"
            }
          ],
          "amount": 18,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "BLUE_SHULKER_BOX",
          "content": [
            {
              "slot": "0",
              "id": "acacia_log",
              "count": "64"
            },
            {
              "slot": "1",
              "id": "acacia_log",
              "count": "64"
            },
            {
              "slot": "2",
              "id": "acacia_log",
              "count": "64"
            },
            {
              "slot": "3",
              "id": "acacia_log",
              "count": "64"
            },
            {
              "slot": "4",
              "id": "acacia_log",
              "count": "64"
            },
            {
              "slot": "5",
              "id": "acacia_log",
              "count": "64"
            },
            {
              "slot": "6",
              "id": "acacia_log",
              "count": "64"
            },
            {
              "slot": "7",
              "id": "acacia_log",
              "count": "64"
            },
            {
              "slot": "8",
              "id": "acacia_log",
              "count": "64"
            },
            {
              "slot": "9",
              "id": "acacia_log",
              "count": "64"
            },
            {
              "slot": "10",
              "id": "acacia_log",
              "count": "64"
            },
            {
              "slot": "11",
              "id": "acacia_log",
              "count": "64"
            },
            {
              "slot": "12",
              "id": "acacia_log",
              "count": "64"
            },
            {
              "slot": "13",
              "id": "acacia_log",
              "count": "64"
            },
            {
              "slot": "14",
              "id": "acacia_log",
              "count": "64"
            },
            {
              "slot": "15",
              "id": "acacia_log",
              "count": "64"
            },
            {
              "slot": "16",
              "id": "acacia_log",
              "count": "64"
            },
            {
              "slot": "17",
              "id": "acacia_log",
              "count": "64"
            },
            {
              "slot": "18",
              "id": "acacia_log",
              "count": "64"
            },
            {
              "slot": "19",
              "id": "acacia_log",
              "count": "64"
            },
            {
              "slot": "20",
              "id": "acacia_log",
              "count": "64"
            },
            {
              "slot": "21",
              "id": "acacia_log",
              "count": "64"
            },
            {
              "slot": "22",
              "id": "acacia_log",
              "count": "64"
            },
            {
              "slot": "23",
              "id": "acacia_log",
              "count": "64"
            },
            {
              "slot": "24",
              "id": "acacia_log",
              "count": "64"
            },
            {
              "slot": "25",
              "id": "acacia_log",
              "count": "64"
            },
            {
              "slot": "26",
              "id": "acacia_log",
              "count": "64"
            }
          ],
          "amount": 18,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "BLUE_SHULKER_BOX",
          "content": [
            {
              "slot": "0",
              "id": "spruce_log",
              "count": "64"
            },
            {
              "slot": "1",
              "id": "spruce_log",
              "count": "64"
            },
            {
              "slot": "2",
              "id": "spruce_log",
              "count": "64"
            },
            {
              "slot": "3",
              "id": "spruce_log",
              "count": "64"
            },
            {
              "slot": "4",
              "id": "spruce_log",
              "count": "64"
            },
            {
              "slot": "5",
              "id": "spruce_log",
              "count": "64"
            },
            {
              "slot": "6",
              "id": "spruce_log",
              "count": "64"
            },
            {
              "slot": "7",
              "id": "spruce_log",
              "count": "64"
            },
            {
              "slot": "8",
              "id": "spruce_log",
              "count": "64"
            },
            {
              "slot": "9",
              "id": "spruce_log",
              "count": "64"
            },
            {
              "slot": "10",
              "id": "spruce_log",
              "count": "64"
            },
            {
              "slot": "11",
              "id": "spruce_log",
              "count": "64"
            },
            {
              "slot": "12",
              "id": "spruce_log",
              "count": "64"
            },
            {
              "slot": "13",
              "id": "spruce_log",
              "count": "64"
            },
            {
              "slot": "14",
              "id": "spruce_log",
              "count": "64"
            },
            {
              "slot": "15",
              "id": "spruce_log",
              "count": "64"
            },
            {
              "slot": "16",
              "id": "spruce_log",
              "count": "64"
            },
            {
              "slot": "17",
              "id": "spruce_log",
              "count": "64"
            },
            {
              "slot": "18",
              "id": "spruce_log",
              "count": "64"
            },
            {
              "slot": "19",
              "id": "spruce_log",
              "count": "64"
            },
            {
              "slot": "20",
              "id": "spruce_log",
              "count": "64"
            },
            {
              "slot": "21",
              "id": "spruce_log",
              "count": "64"
            },
            {
              "slot": "22",
              "id": "spruce_log",
              "count": "64"
            },
            {
              "slot": "23",
              "id": "spruce_log",
              "count": "64"
            },
            {
              "slot": "24",
              "id": "spruce_log",
              "count": "64"
            },
            {
              "slot": "25",
              "id": "spruce_log",
              "count": "64"
            },
            {
              "slot": "26",
              "id": "spruce_log",
              "count": "64"
            }
          ],
          "amount": 18,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "BLUE_SHULKER_BOX",
          "content": [
            {
              "slot": "0",
              "id": "oak_log",
              "count": "64"
            },
            {
              "slot": "1",
              "id": "oak_log",
              "count": "64"
            },
            {
              "slot": "2",
              "id": "oak_log",
              "count": "64"
            },
            {
              "slot": "3",
              "id": "oak_log",
              "count": "64"
            },
            {
              "slot": "4",
              "id": "oak_log",
              "count": "64"
            },
            {
              "slot": "5",
              "id": "oak_log",
              "count": "64"
            },
            {
              "slot": "6",
              "id": "oak_log",
              "count": "64"
            },
            {
              "slot": "7",
              "id": "oak_log",
              "count": "64"
            },
            {
              "slot": "8",
              "id": "oak_log",
              "count": "64"
            },
            {
              "slot": "9",
              "id": "oak_log",
              "count": "64"
            },
            {
              "slot": "10",
              "id": "oak_log",
              "count": "64"
            },
            {
              "slot": "11",
              "id": "oak_log",
              "count": "64"
            },
            {
              "slot": "12",
              "id": "oak_log",
              "count": "64"
            },
            {
              "slot": "13",
              "id": "oak_log",
              "count": "64"
            },
            {
              "slot": "14",
              "id": "oak_log",
              "count": "64"
            },
            {
              "slot": "15",
              "id": "oak_log",
              "count": "64"
            },
            {
              "slot": "16",
              "id": "oak_log",
              "count": "64"
            },
            {
              "slot": "17",
              "id": "oak_log",
              "count": "64"
            },
            {
              "slot": "18",
              "id": "oak_log",
              "count": "64"
            },
            {
              "slot": "19",
              "id": "oak_log",
              "count": "64"
            },
            {
              "slot": "20",
              "id": "oak_log",
              "count": "64"
            },
            {
              "slot": "21",
              "id": "oak_log",
              "count": "64"
            },
            {
              "slot": "22",
              "id": "oak_log",
              "count": "64"
            },
            {
              "slot": "23",
              "id": "oak_log",
              "count": "64"
            },
            {
              "slot": "24",
              "id": "oak_log",
              "count": "64"
            },
            {
              "slot": "25",
              "id": "oak_log",
              "count": "64"
            },
            {
              "slot": "26",
              "id": "oak_log",
              "count": "64"
            }
          ],
          "amount": 18,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "BLUE_SHULKER_BOX",
          "content": [
            {
              "slot": "0",
              "id": "mangrove_log",
              "count": "64"
            },
            {
              "slot": "1",
              "id": "mangrove_log",
              "count": "64"
            },
            {
              "slot": "2",
              "id": "mangrove_log",
              "count": "64"
            },
            {
              "slot": "3",
              "id": "mangrove_log",
              "count": "64"
            },
            {
              "slot": "4",
              "id": "mangrove_log",
              "count": "64"
            },
            {
              "slot": "5",
              "id": "mangrove_log",
              "count": "64"
            },
            {
              "slot": "6",
              "id": "mangrove_log",
              "count": "64"
            },
            {
              "slot": "7",
              "id": "mangrove_log",
              "count": "64"
            },
            {
              "slot": "8",
              "id": "mangrove_log",
              "count": "64"
            },
            {
              "slot": "9",
              "id": "mangrove_log",
              "count": "64"
            },
            {
              "slot": "10",
              "id": "mangrove_log",
              "count": "64"
            },
            {
              "slot": "11",
              "id": "mangrove_log",
              "count": "64"
            },
            {
              "slot": "12",
              "id": "mangrove_log",
              "count": "64"
            },
            {
              "slot": "13",
              "id": "mangrove_log",
              "count": "64"
            },
            {
              "slot": "14",
              "id": "mangrove_log",
              "count": "64"
            },
            {
              "slot": "15",
              "id": "mangrove_log",
              "count": "64"
            },
            {
              "slot": "16",
              "id": "mangrove_log",
              "count": "64"
            },
            {
              "slot": "17",
              "id": "mangrove_log",
              "count": "64"
            },
            {
              "slot": "18",
              "id": "mangrove_log",
              "count": "64"
            },
            {
              "slot": "19",
              "id": "mangrove_log",
              "count": "64"
            },
            {
              "slot": "20",
              "id": "mangrove_log",
              "count": "64"
            },
            {
              "slot": "21",
              "id": "mangrove_log",
              "count": "64"
            },
            {
              "slot": "22",
              "id": "mangrove_log",
              "count": "64"
            },
            {
              "slot": "23",
              "id": "mangrove_log",
              "count": "64"
            },
            {
              "slot": "24",
              "id": "mangrove_log",
              "count": "64"
            },
            {
              "slot": "25",
              "id": "mangrove_log",
              "count": "64"
            },
            {
              "slot": "26",
              "id": "mangrove_log",
              "count": "64"
            }
          ],
          "amount": 18,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "BLUE_SHULKER_BOX",
          "content": [
            {
              "slot": "0",
              "id": "warped_stem",
              "count": "64"
            },
            {
              "slot": "1",
              "id": "warped_stem",
              "count": "64"
            },
            {
              "slot": "2",
              "id": "warped_stem",
              "count": "64"
            },
            {
              "slot": "3",
              "id": "warped_stem",
              "count": "64"
            },
            {
              "slot": "4",
              "id": "warped_stem",
              "count": "64"
            },
            {
              "slot": "5",
              "id": "warped_stem",
              "count": "64"
            },
            {
              "slot": "6",
              "id": "warped_stem",
              "count": "64"
            },
            {
              "slot": "7",
              "id": "warped_stem",
              "count": "64"
            },
            {
              "slot": "8",
              "id": "warped_stem",
              "count": "64"
            },
            {
              "slot": "9",
              "id": "warped_stem",
              "count": "64"
            },
            {
              "slot": "10",
              "id": "warped_stem",
              "count": "64"
            },
            {
              "slot": "11",
              "id": "warped_stem",
              "count": "64"
            },
            {
              "slot": "12",
              "id": "warped_stem",
              "count": "64"
            },
            {
              "slot": "13",
              "id": "warped_stem",
              "count": "64"
            },
            {
              "slot": "14",
              "id": "warped_stem",
              "count": "64"
            },
            {
              "slot": "15",
              "id": "warped_stem",
              "count": "64"
            },
            {
              "slot": "16",
              "id": "warped_stem",
              "count": "64"
            },
            {
              "slot": "17",
              "id": "warped_stem",
              "count": "64"
            },
            {
              "slot": "18",
              "id": "warped_stem",
              "count": "64"
            },
            {
              "slot": "19",
              "id": "warped_stem",
              "count": "64"
            },
            {
              "slot": "20",
              "id": "warped_stem",
              "count": "64"
            },
            {
              "slot": "21",
              "id": "warped_stem",
              "count": "64"
            },
            {
              "slot": "22",
              "id": "warped_stem",
              "count": "64"
            },
            {
              "slot": "23",
              "id": "warped_stem",
              "count": "64"
            },
            {
              "slot": "24",
              "id": "warped_stem",
              "count": "64"
            },
            {
              "slot": "25",
              "id": "warped_stem",
              "count": "64"
            },
            {
              "slot": "26",
              "id": "warped_stem",
              "count": "64"
            }
          ],
          "amount": 18,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "BLUE_SHULKER_BOX",
          "content": [
            {
              "slot": "0",
              "id": "crimson_stem",
              "count": "64"
            },
            {
              "slot": "1",
              "id": "crimson_stem",
              "count": "64"
            },
            {
              "slot": "2",
              "id": "crimson_stem",
              "count": "64"
            },
            {
              "slot": "3",
              "id": "crimson_stem",
              "count": "64"
            },
            {
              "slot": "4",
              "id": "crimson_stem",
              "count": "64"
            },
            {
              "slot": "5",
              "id": "crimson_stem",
              "count": "64"
            },
            {
              "slot": "6",
              "id": "crimson_stem",
              "count": "64"
            },
            {
              "slot": "7",
              "id": "crimson_stem",
              "count": "64"
            },
            {
              "slot": "8",
              "id": "crimson_stem",
              "count": "64"
            },
            {
              "slot": "9",
              "id": "crimson_stem",
              "count": "64"
            },
            {
              "slot": "10",
              "id": "crimson_stem",
              "count": "64"
            },
            {
              "slot": "11",
              "id": "crimson_stem",
              "count": "64"
            },
            {
              "slot": "12",
              "id": "crimson_stem",
              "count": "64"
            },
            {
              "slot": "13",
              "id": "crimson_stem",
              "count": "64"
            },
            {
              "slot": "14",
              "id": "crimson_stem",
              "count": "64"
            },
            {
              "slot": "15",
              "id": "crimson_stem",
              "count": "64"
            },
            {
              "slot": "16",
              "id": "crimson_stem",
              "count": "64"
            },
            {
              "slot": "17",
              "id": "crimson_stem",
              "count": "64"
            },
            {
              "slot": "18",
              "id": "crimson_stem",
              "count": "64"
            },
            {
              "slot": "19",
              "id": "crimson_stem",
              "count": "64"
            },
            {
              "slot": "20",
              "id": "crimson_stem",
              "count": "64"
            },
            {
              "slot": "21",
              "id": "crimson_stem",
              "count": "64"
            },
            {
              "slot": "22",
              "id": "crimson_stem",
              "count": "64"
            },
            {
              "slot": "23",
              "id": "crimson_stem",
              "count": "64"
            },
            {
              "slot": "24",
              "id": "crimson_stem",
              "count": "64"
            },
            {
              "slot": "25",
              "id": "crimson_stem",
              "count": "64"
            },
            {
              "slot": "26",
              "id": "crimson_stem",
              "count": "64"
            }
          ],
          "amount": 18,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "BLUE_SHULKER_BOX",
          "content": [
            {
              "slot": "0",
              "id": "dark_oak_log",
              "count": "64"
            },
            {
              "slot": "1",
              "id": "dark_oak_log",
              "count": "64"
            },
            {
              "slot": "2",
              "id": "dark_oak_log",
              "count": "64"
            },
            {
              "slot": "3",
              "id": "dark_oak_log",
              "count": "64"
            },
            {
              "slot": "4",
              "id": "dark_oak_log",
              "count": "64"
            },
            {
              "slot": "5",
              "id": "dark_oak_log",
              "count": "64"
            },
            {
              "slot": "6",
              "id": "dark_oak_log",
              "count": "64"
            },
            {
              "slot": "7",
              "id": "dark_oak_log",
              "count": "64"
            },
            {
              "slot": "8",
              "id": "dark_oak_log",
              "count": "64"
            },
            {
              "slot": "9",
              "id": "dark_oak_log",
              "count": "64"
            },
            {
              "slot": "10",
              "id": "dark_oak_log",
              "count": "64"
            },
            {
              "slot": "11",
              "id": "dark_oak_log",
              "count": "64"
            },
            {
              "slot": "12",
              "id": "dark_oak_log",
              "count": "64"
            },
            {
              "slot": "13",
              "id": "dark_oak_log",
              "count": "64"
            },
            {
              "slot": "14",
              "id": "dark_oak_log",
              "count": "64"
            },
            {
              "slot": "15",
              "id": "dark_oak_log",
              "count": "64"
            },
            {
              "slot": "16",
              "id": "dark_oak_log",
              "count": "64"
            },
            {
              "slot": "17",
              "id": "dark_oak_log",
              "count": "64"
            },
            {
              "slot": "18",
              "id": "dark_oak_log",
              "count": "64"
            },
            {
              "slot": "19",
              "id": "dark_oak_log",
              "count": "64"
            },
            {
              "slot": "20",
              "id": "dark_oak_log",
              "count": "64"
            },
            {
              "slot": "21",
              "id": "dark_oak_log",
              "count": "64"
            },
            {
              "slot": "22",
              "id": "dark_oak_log",
              "count": "64"
            },
            {
              "slot": "23",
              "id": "dark_oak_log",
              "count": "64"
            },
            {
              "slot": "24",
              "id": "dark_oak_log",
              "count": "64"
            },
            {
              "slot": "25",
              "id": "dark_oak_log",
              "count": "64"
            },
            {
              "slot": "26",
              "id": "dark_oak_log",
              "count": "64"
            }
          ],
          "amount": 18,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        }
      ]
    }
  ];

  const resParams = useAxios(
    "/api/get_shops",
    'GET',
    {}
  );

  if (resParams.loading) {
    return <Preload/>;
  }

  return (
    <div className="main-shopkeepers-block">
      <h4 className="title-shop-h4 font-custom-2">Товары игроков сервера</h4>
      <div className="shop-block-center">
        <div className="shop-all-suggestions">

          <input
            type="text"
            className="search-input-items"
            placeholder="Найти..."
            onChange={(e) => setQueryData(e.target.value.toLowerCase())}
          />

          {data.map((el, index) => {
              return (
                el.offers.filter((fil) => fil.name.toLowerCase().includes(queryData) || fil.currency.toLowerCase().includes(queryData)).map((offer, index) => {
                    return (
                      <div className="div-click" key={index} id={el.id} onClick={() => setInfoShopName(el.name)}>
                        <OneSuggestions {...offer} onClick={isItemInteractive(offer) ? () => {setSelectedItem(offer)} : undefined}/>
                      </div>
                    )
                  }
                )
              )
            }
          )}

        </div>

        <div className="shop-one-suggestions">
          {selectedItem && <div className="prew-shulker">
            <ShulkerBox content={selectedItem.content}/>
          </div>}
          <div className="villager-shop-info">
            <div className="villager-info">
              <h4 className="h4-style">Владелец: <span className="span-custom-color font-custom-2">{infoShopOwnerName}</span></h4>
              <h4 className="h4-style">Discord: <span className="span-custom-color font-custom-2">{infoShopDiscordTag}</span></h4>
              <h4 className="h4-style">Расположение:</h4>
              <h4 className="h4-style h4-margin-left">Х: <span className="span-custom-color font-custom-2">{infoShopCoordinatesX}</span></h4>
              <h4 className="h4-style h4-margin-left">Y: <span className="span-custom-color font-custom-2">{infoShopCoordinatesY}</span></h4>
              <h4 className="h4-style h4-margin-left">Z: <span className="span-custom-color font-custom-2">{infoShopCoordinatesZ}</span></h4>
              <h4 className="h4-style">Осталось предметов в наличии: <span className="span-custom-color font-custom-2">{infoShopRemaining}</span></h4>
              <div className="h4-margin-bottom">
                <Warn inf="Обновление данных с сервером происходит раз в 15 минут"/>
              </div>
            </div>
            <div className="villager-img">
              <h2 className="villager-nameplate">{infoShopName}</h2>
              <img className="margin-top-img" src={`./site_assets/villager/webp/${infoVillagerType}_${infoProfession}.webp`} width="100%" height="100%" alt="none"/>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Shopkeepers;


{/*
      {data.map((el, index) => {
        console.log(el)
        return (
          el.offers.map(offer => {
            return (
              <div className="shop-block-center">
                <div className="shop-all-suggestions">
                  <OneSuggestions amount={offer.amount} currency={offer.currency} name={offer.name}/>
                </div>
                <div className="shop-one-suggestions">
                  <ShulkerBox content={offer.content}/>
                </div>
              </div>
            )
          })
        )
      })
      }

      fil.content.every(c => queryData.includes(c.id))
*/
}


{/*   +- оригинал

<div className="shop-block-center">
  <div className="shop-all-suggestions">
    <OneSuggestions amount="64" currency="deepslate_diamond_ore" name="shulker_box"/>
  </div>
  <div className="shop-one-suggestions">
    <div className="prew-shulker">
      <ShulkerBox content={testContent}/>
    </div>
    <div className="villager-shop-info">
      <div className="villager-info">
        <h4 className="h4-style">Владелец: <span className="span-custom-color font-custom-2">SoftPanda3</span></h4>
        <h4 className="h4-style">Discord: <span className="span-custom-color font-custom-2">SoftPanda3#6300</span></h4>
        <h4 className="h4-style">Расположение:</h4>
        <h4 className="h4-style h4-margin-left">Х: <span className="span-custom-color font-custom-2">12345</span></h4>
        <h4 className="h4-style h4-margin-left">Y: <span className="span-custom-color font-custom-2">12345</span></h4>
        <h4 className="h4-style h4-margin-left">Z: <span className="span-custom-color font-custom-2">12345</span></h4>
        <h4 className="h4-style">Осталось предметов в наличии: <span className="span-custom-color font-custom-2">12345</span></h4>
        <h4 className="h4-style h4-margin-bottom">Обновлённые данные приходят раз в 10 минут</h4>
      </div>
      <div className="villager-img">
        <h2 className="villager-nameplate">Кузнечный магазин</h2>
        <img className="margin-top-img" src="./site_assets/villager/webp/Savanna_Fisherman.webp" width="100%" height="100%" alt="none"/>
      </div>
    </div>
  </div>
</div>

*/
}

