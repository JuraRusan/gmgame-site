const fs = require('fs');

const db_mine = {
  1: {id: "1", type: "minecraft:stone", name: "\u041a\u0430\u043c\u0435\u043d\u044c", tab: [[4, 144], [8, 22]]},
  2: {id: "2", type: "minecraft:granite", name: "\u0413\u0440\u0430\u043d\u0438\u0442", tab: [[4, 169], [8, 24]]},
  3: {
    id: "3",
    type: "minecraft:polished_granite",
    name: "\u041f\u043e\u043b\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0439 \u0433\u0440\u0430\u043d\u0438\u0442",
    tab: [[4, 173]]
  },
  4: {id: "4", type: "minecraft:diorite", name: "\u0414\u0438\u043e\u0440\u0438\u0442", tab: [[4, 176], [8, 25]]},
  5: {
    id: "5",
    type: "minecraft:polished_diorite",
    name: "\u041f\u043e\u043b\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0439 \u0434\u0438\u043e\u0440\u0438\u0442",
    tab: [[4, 180]]
  },
  6: {
    id: "6",
    type: "minecraft:andesite",
    name: "\u0410\u043d\u0434\u0435\u0437\u0438\u0442",
    tab: [[4, 183], [8, 26]]
  },
  7: {
    id: "7",
    type: "minecraft:polished_andesite",
    name: "\u041f\u043e\u043b\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0439 \u0430\u043d\u0434\u0435\u0437\u0438\u0442",
    tab: [[4, 187]]
  },
  8: {
    id: "8",
    type: "minecraft:deepslate",
    name: "\u0413\u043b\u0443\u0431\u0438\u043d\u043d\u044b\u0439 \u0441\u043b\u0430\u043d\u0435\u0446",
    tab: [[4, 190], [8, 23]]
  },
  9: {
    id: "9",
    type: "minecraft:cobbled_deepslate",
    name: "\u041a\u043e\u043b\u043e\u0442\u044b\u0439 \u0433\u043b\u0443\u0431\u0438\u043d\u043d\u044b\u0439 \u0441\u043b\u0430\u043d\u0435\u0446",
    tab: [[4, 191]]
  },
  10: {
    id: "10",
    type: "minecraft:polished_deepslate",
    name: "\u041f\u043e\u043b\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0439 \u0433\u043b\u0443\u0431\u0438\u043d\u043d\u044b\u0439 \u0441\u043b\u0430\u043d\u0435\u0446",
    tab: [[4, 196]]
  },
  11: {
    id: "11", type: "minecraft:calcite", name: "\u041a\u0430\u043b\u044c\u0446\u0438\u0442",
    tab: [[8, 27]]
  },
  12: {id: "12", type: "minecraft:tuff", name: "\u0422\u0443\u0444", tab: [[8, 28]]},
  13: {
    id: "13",
    type: "minecraft:dripstone_block",
    name: "\u041d\u0430\u0442\u0451\u0447\u043d\u044b\u0439 \u043a\u0430\u043c\u0435\u043d\u044c",
    tab: [[8, 29]]
  },
  14: {id: "14", type: "minecraft:grass_block", name: "\u0414\u0451\u0440\u043d", tab: [[8, 0]]},
  15: {id: "15", type: "minecraft:dirt", name: "\u0417\u0435\u043c\u043b\u044f", tab: [[8, 4]]},
  16: {
    id: "16",
    type: "minecraft:coarse_dirt",
    name: "\u041a\u0430\u043c\u0435\u043d\u0438\u0441\u0442\u0430\u044f \u0437\u0435\u043c\u043b\u044f",
    tab: [[8, 5]]
  },
  17: {id: "17", type: "minecraft:podzol", name: "\u041f\u043e\u0434\u0437\u043e\u043b", tab: [[8, 1]]},
  18: {
    id: "18",
    type: "minecraft:rooted_dirt",
    name: "\u041a\u043e\u0440\u043d\u0438\u0441\u0442\u0430\u044f \u0437\u0435\u043c\u043b\u044f",
    tab: [[8, 6]]
  },
  19: {id: "19", type: "minecraft:mud", name: "\u0413\u0440\u044f\u0437\u044c", tab: [[8, 8]]},
  20: {
    id: "20",
    type: "minecraft:crimson_nylium",
    name: "\u0411\u0430\u0433\u0440\u043e\u0432\u044b\u0439 \u043d\u0438\u043b\u0438\u0439",
    tab: [[8, 36]]
  },
  21: {
    id: "21", type: "minecraft:warped_nylium",
    name: "\u0418\u0441\u043a\u0430\u0436\u0451\u043d\u043d\u044b\u0439 \u043d\u0438\u043b\u0438\u0439", tab: [[8, 37]]
  },
  22: {
    id: "22",
    type: "minecraft:cobblestone",
    name: "\u0411\u0443\u043b\u044b\u0436\u043d\u0438\u043a",
    tab: [[4, 149]]
  },
  23: {
    id: "23",
    type: "minecraft:oak_planks",
    name: "\u0414\u0443\u0431\u043e\u0432\u044b\u0435 \u0434\u043e\u0441\u043a\u0438",
    tab: [[4, 4]]
  },
  24: {
    id: "24",
    type: "minecraft:spruce_planks",
    name: "\u0415\u043b\u043e\u0432\u044b\u0435 \u0434\u043e\u0441\u043a\u0438",
    tab: [[4, 17]]
  },
  25: {
    id: "25",
    type: "minecraft:birch_planks",
    name: "\u0411\u0435\u0440\u0451\u0437\u043e\u0432\u044b\u0435 \u0434\u043e\u0441\u043a\u0438",
    tab: [[4, 30]]
  },
  26: {
    id: "26",
    type: "minecraft:jungle_planks",
    name: "\u0414\u043e\u0441\u043a\u0438 \u0438\u0437 \u0442\u0440\u043e\u043f\u0438\u0447\u0435\u0441\u043a\u043e\u0433\u043e \u0434\u0435\u0440\u0435\u0432\u0430",
    tab: [[4, 43]]
  },
  27: {
    id: "27",
    type: "minecraft:acacia_planks",
    name: "\u0410\u043a\u0430\u0446\u0438\u0435\u0432\u044b\u0435 \u0434\u043e\u0441\u043a\u0438",
    tab: [[4, 56]]
  },
  28: {
    id: "28",
    type: "minecraft:cherry_planks",
    name: "\u0412\u0438\u0448\u043d\u0451\u0432\u044b\u0435 \u0434\u043e\u0441\u043a\u0438",
    tab: [[4, 95]]
  },
  29: {
    id: "29",
    type: "minecraft:dark_oak_planks",
    name: "\u0414\u043e\u0441\u043a\u0438 \u0438\u0437 \u0442\u0451\u043c\u043d\u043e\u0433\u043e \u0434\u0443\u0431\u0430",
    tab: [[4, 69]]
  },
  30: {
    id: "30",
    type: "minecraft:mangrove_planks",
    name: "\u041c\u0430\u043d\u0433\u0440\u043e\u0432\u044b\u0435 \u0434\u043e\u0441\u043a\u0438",
    tab: [[4, 82]]
  },
  31: {
    id: "31", type: "minecraft:bamboo_planks",
    name: "\u0411\u0430\u043c\u0431\u0443\u043a\u043e\u0432\u044b\u0435 \u0434\u043e\u0441\u043a\u0438", tab: [[4, 106]]
  },
  32: {
    id: "32",
    type: "minecraft:crimson_planks",
    name: "\u0411\u0430\u0433\u0440\u043e\u0432\u044b\u0435 \u0434\u043e\u0441\u043a\u0438",
    tab: [[4, 122]]
  },
  33: {
    id: "33",
    type: "minecraft:warped_planks",
    name: "\u0418\u0441\u043a\u0430\u0436\u0451\u043d\u043d\u044b\u0435 \u0434\u043e\u0441\u043a\u0438",
    tab: [[4, 135]]
  },
  34: {
    id: "34",
    type: "minecraft:bamboo_mosaic",
    name: "\u0411\u0430\u043c\u0431\u0443\u043a\u043e\u0432\u0430\u044f \u043c\u043e\u0437\u0430\u0438\u043a\u0430",
    tab: [[4, 107]]
  },
  35: {
    id: "35",
    type: "minecraft:oak_sapling",
    name: "\u0421\u0430\u0436\u0435\u043d\u0435\u0446 \u0434\u0443\u0431\u0430",
    tab: [[8, 102]]
  },
  36: {
    id: "36",
    type: "minecraft:spruce_sapling",
    name: "\u0421\u0430\u0436\u0435\u043d\u0435\u0446 \u0435\u043b\u0438",
    tab: [[8, 103]]
  },
  37: {
    id: "37",
    type: "minecraft:birch_sapling",
    name: "\u0421\u0430\u0436\u0435\u043d\u0435\u0446 \u0431\u0435\u0440\u0451\u0437\u044b",
    tab: [[8, 104]]
  },
  38: {
    id: "38",
    type: "minecraft:jungle_sapling",
    name: "\u0421\u0430\u0436\u0435\u043d\u0435\u0446 \u0442\u0440\u043e\u043f\u0438\u0447\u0435\u0441\u043a\u043e\u0433\u043e \u0434\u0435\u0440\u0435\u0432\u0430",
    tab: [[8, 105]]
  },
  39: {
    id: "39",
    type: "minecraft:acacia_sapling",
    name: "\u0421\u0430\u0436\u0435\u043d\u0435\u0446 \u0430\u043a\u0430\u0446\u0438\u0438",
    tab: [[8, 106]]
  },
  40: {
    id: "40",
    type: "minecraft:cherry_sapling",
    name: "\u0421\u0430\u0436\u0435\u043d\u0435\u0446 \u0432\u0438\u0448\u043d\u0438",
    tab: [[8, 109]]
  },
  41: {
    id: "41",
    type: "minecraft:dark_oak_sapling",
    name: "\u0421\u0430\u0436\u0435\u043d\u0435\u0446 \u0442\u0451\u043c\u043d\u043e\u0433\u043e \u0434\u0443\u0431\u0430",
    tab: [[8, 107]]
  },
  42: {
    id: "42",
    type: "minecraft:mangrove_propagule",
    name: "\u041c\u0430\u043d\u0433\u0440\u043e\u0432\u044b\u0439 \u043e\u0442\u0440\u043e\u0441\u0442\u043e\u043a",
    tab: [[8, 108]]
  },
  43: {id: "43", type: "minecraft:bedrock", name: "\u0411\u0435\u0434\u0440\u043e\u043a", tab: [[8, 225]]},
  44: {id: "44", type: "minecraft:sand", name: "\u041f\u0435\u0441\u043e\u043a", tab: [[8, 11]]},
  45: {
    id: "45",
    type: "minecraft:suspicious_sand",
    name: "\u041f\u043e\u0434\u043e\u0437\u0440\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u043f\u0435\u0441\u043e\u043a",
    tab: [[6, 47]]
  },
  46: {
    id: "46",
    type: "minecraft:suspicious_gravel",
    name: "\u041f\u043e\u0434\u043e\u0437\u0440\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u0433\u0440\u0430\u0432\u0438\u0439",
    tab: [[6, 48]]
  },
  47: {
    id: "47",
    type: "minecraft:red_sand",
    name: "\u041a\u0440\u0430\u0441\u043d\u044b\u0439 \u043f\u0435\u0441\u043e\u043a",
    tab: [[8, 13]]
  },
  48: {id: "48", type: "minecraft:gravel", name: "\u0413\u0440\u0430\u0432\u0438\u0439", tab: [[8, 10]]},
  49: {
    id: "49",
    type: "minecraft:coal_ore",
    name: "\u0423\u0433\u043e\u043b\u044c\u043d\u0430\u044f \u0440\u0443\u0434\u0430",
    tab: [[8, 45]]
  },
  50: {
    id: "50",
    type: "minecraft:deepslate_coal_ore",
    name: "\u0423\u0433\u043b\u0435\u043d\u043e\u0441\u043d\u044b\u0439 \u0433\u043b\u0443\u0431\u0438\u043d\u043d\u044b\u0439 \u0441\u043b\u0430\u043d\u0435\u0446",
    tab: [[8, 46]]
  },
  51: {
    id: "51",
    type: "minecraft:iron_ore",
    name: "\u0416\u0435\u043b\u0435\u0437\u043d\u0430\u044f \u0440\u0443\u0434\u0430",
    tab: [[8, 47]]
  },
  52: {
    id: "52",
    type: "minecraft:deepslate_iron_ore",
    name: "\u0416\u0435\u043b\u0435\u0437\u043e\u043d\u043e\u0441\u043d\u044b\u0439 \u0433\u043b\u0443\u0431\u0438\u043d\u043d\u044b\u0439 \u0441\u043b\u0430\u043d\u0435\u0446",
    tab: [[8, 48]]
  },
  53: {
    id: "53",
    type: "minecraft:copper_ore",
    name: "\u041c\u0435\u0434\u043d\u0430\u044f \u0440\u0443\u0434\u0430",
    tab: [[8, 49]]
  },
  54: {
    id: "54",
    type: "minecraft:deepslate_copper_ore",
    name: "\u041c\u0435\u0434\u0435\u043d\u043e\u0441\u043d\u044b\u0439 \u0433\u043b\u0443\u0431\u0438\u043d\u043d\u044b\u0439 \u0441\u043b\u0430\u043d\u0435\u0446",
    tab: [[8, 50]]
  },
  55: {
    id: "55",
    type: "minecraft:gold_ore",
    name: "\u0417\u043e\u043b\u043e\u0442\u0430\u044f \u0440\u0443\u0434\u0430",
    tab: [[8, 51]]
  },
  56: {
    id: "56",
    type: "minecraft:deepslate_gold_ore",
    name: "\u0417\u043e\u043b\u043e\u0442\u043e\u043d\u043e\u0441\u043d\u044b\u0439 \u0433\u043b\u0443\u0431\u0438\u043d\u043d\u044b\u0439 \u0441\u043b\u0430\u043d\u0435\u0446",
    tab: [[8, 52]]
  },
  57: {
    id: "57",
    type: "minecraft:redstone_ore",
    name: "\u0420\u0435\u0434\u0441\u0442\u043e\u0443\u043d\u043e\u0432\u0430\u044f \u0440\u0443\u0434\u0430",
    tab: [[8, 53], [7, 61]]
  },
  58: {
    id: "58",
    type: "minecraft:deepslate_redstone_ore",
    name: "\u0420\u0435\u0434\u0441\u0442\u043e\u0443\u043d\u043e\u043d\u043e\u0441\u043d\u044b\u0439 \u0433\u043b\u0443\u0431\u0438\u043d\u043d\u044b\u0439 \u0441\u043b\u0430\u043d\u0435\u0446",
    tab: [[8, 54]]
  },
  59: {
    id: "59",
    type: "minecraft:emerald_ore",
    name: "\u0418\u0437\u0443\u043c\u0440\u0443\u0434\u043d\u0430\u044f \u0440\u0443\u0434\u0430",
    tab: [[8, 55]]
  },
  60: {
    id: "60",
    type: "minecraft:deepslate_emerald_ore",
    name: "\u0418\u0437\u0443\u043c\u0440\u0443\u0434\u043e\u043d\u043e\u0441\u043d\u044b\u0439 \u0433\u043b\u0443\u0431\u0438\u043d\u043d\u044b\u0439 \u0441\u043b\u0430\u043d\u0435\u0446",
    tab: [[8, 56]]
  },
  61: {
    id: "61",
    type: "minecraft:lapis_ore",
    name: "\u041b\u0430\u0437\u0443\u0440\u0438\u0442\u043e\u0432\u0430\u044f \u0440\u0443\u0434\u0430",
    tab: [[8, 57]]
  },
  62: {
    id: "62",
    type: "minecraft:deepslate_lapis_ore",
    name: "\u041b\u0430\u0437\u0443\u0440\u0438\u0442\u043e\u043d\u043e\u0441\u043d\u044b\u0439 \u0433\u043b\u0443\u0431\u0438\u043d\u043d\u044b\u0439 \u0441\u043b\u0430\u043d\u0435\u0446",
    tab: [[8, 58]]
  },
  63: {
    id: "63",
    type: "minecraft:diamond_ore",
    name: "\u0410\u043b\u043c\u0430\u0437\u043d\u0430\u044f \u0440\u0443\u0434\u0430",
    tab: [[8, 59]]
  },
  64: {
    id: "64",
    type: "minecraft:deepslate_diamond_ore",
    name: "\u0410\u043b\u043c\u0430\u0437\u043e\u043d\u043e\u0441\u043d\u044b\u0439 \u0433\u043b\u0443\u0431\u0438\u043d\u043d\u044b\u0439 \u0441\u043b\u0430\u043d\u0435\u0446",
    tab: [[8, 60]]
  },
  65: {
    id: "65",
    type: "minecraft:nether_gold_ore",
    name: "\u041d\u0435\u0437\u0435\u0440\u0441\u043a\u0430\u044f \u0437\u043e\u043b\u043e\u0442\u0430\u044f \u0440\u0443\u0434\u0430",
    tab: [[8, 61]]
  },
  66: {
    id: "66",
    type: "minecraft:nether_quartz_ore",
    name: "\u041d\u0435\u0437\u0435\u0440-\u043a\u0432\u0430\u0440\u0446\u0435\u0432\u0430\u044f \u0440\u0443\u0434\u0430",
    tab: [[8, 62]]
  },
  67: {
    id: "67",
    type: "minecraft:ancient_debris",
    name: "\u0414\u0440\u0435\u0432\u043d\u0438\u0435 \u043e\u0431\u043b\u043e\u043c\u043a\u0438",
    tab: [[8, 63], [9, 8]]
  },
  68: {
    id: "68",
    type: "minecraft:coal_block",
    name: "\u0423\u0433\u043e\u043b\u044c\u043d\u044b\u0439 \u0431\u043b\u043e\u043a",
    tab: [[4, 292]]
  },
  69: {
    id: "69",
    type: "minecraft:raw_iron_block",
    name: "\u0411\u043b\u043e\u043a \u0440\u0443\u0434\u043d\u043e\u0433\u043e \u0436\u0435\u043b\u0435\u0437\u0430",
    tab: [[8, 64]]
  },
  70: {
    id: "70",
    type: "minecraft:raw_copper_block",
    name: "\u0411\u043b\u043e\u043a \u0440\u0443\u0434\u043d\u043e\u0439 \u043c\u0435\u0434\u0438",
    tab: [[8, 65]]
  },
  71: {
    id: "71",
    type: "minecraft:raw_gold_block",
    name: "\u0411\u043b\u043e\u043a \u0440\u0443\u0434\u043d\u043e\u0433\u043e \u0437\u043e\u043b\u043e\u0442\u0430",
    tab: [[8, 66]]
  },
  72: {
    id: "72",
    type: "minecraft:amethyst_block",
    name: "\u0410\u043c\u0435\u0442\u0438\u0441\u0442\u043e\u0432\u044b\u0439 \u0431\u043b\u043e\u043a",
    tab: [[4, 315], [8, 68], [7, 16]]
  },
  73: {
    id: "73",
    type: "minecraft:budding_amethyst",
    name: "\u0426\u0432\u0435\u0442\u0443\u0449\u0438\u0439 \u0430\u043c\u0435\u0442\u0438\u0441\u0442",
    tab: [[8, 69]]
  },
  74: {
    id: "74",
    type: "minecraft:iron_block",
    name: "\u0416\u0435\u043b\u0435\u0437\u043d\u044b\u0439 \u0431\u043b\u043e\u043a",
    tab: [[4, 293]]
  },
  75: {
    id: "75",
    type: "minecraft:copper_block",
    name: "\u041c\u0435\u0434\u043d\u044b\u0439 \u0431\u043b\u043e\u043a",
    tab: [[4, 316]]
  },
  76: {
    id: "76",
    type: "minecraft:gold_block",
    name: "\u0417\u043e\u043b\u043e\u0442\u043e\u0439 \u0431\u043b\u043e\u043a",
    tab: [[4, 299]]
  },
  77: {
    id: "77",
    type: "minecraft:diamond_block",
    name: "\u0410\u043b\u043c\u0430\u0437\u043d\u044b\u0439 \u0431\u043b\u043e\u043a",
    tab: [[4, 304]]
  },
  78: {
    id: "78",
    type: "minecraft:netherite_block",
    name: "\u041d\u0435\u0437\u0435\u0440\u0438\u0442\u043e\u0432\u044b\u0439 \u0431\u043b\u043e\u043a",
    tab: [[4, 305]]
  },
  79: {
    id: "79",
    type: "minecraft:exposed_copper",
    name: "\u041f\u043e\u0442\u0435\u043c\u043d\u0435\u0432\u0448\u0438\u0439 \u043c\u0435\u0434\u043d\u044b\u0439 \u0431\u043b\u043e\u043a",
    tab: [[4, 320]]
  },
  80: {
    id: "80",
    type: "minecraft:weathered_copper",
    name: "\u0421\u043e\u0441\u0442\u0430\u0440\u0435\u043d\u043d\u044b\u0439 \u043c\u0435\u0434\u043d\u044b\u0439 \u0431\u043b\u043e\u043a",
    tab: [[4, 324]]
  },
  81: {
    id: "81",
    type: "minecraft:oxidized_copper",
    name: "\u041e\u043a\u0438\u0441\u043b\u0435\u043d\u043d\u044b\u0439 \u043c\u0435\u0434\u043d\u044b\u0439 \u0431\u043b\u043e\u043a",
    tab: [[4, 328]]
  },
  82: {
    id: "82",
    type: "minecraft:cut_copper",
    name: "\u0420\u0435\u0437\u043d\u043e\u0439 \u043c\u0435\u0434\u043d\u044b\u0439 \u0431\u043b\u043e\u043a",
    tab: [[4, 317]]
  },
  83: {
    id: "83",
    type: "minecraft:exposed_cut_copper",
    name: "\u041f\u043e\u0442\u0435\u043c\u043d\u0435\u0432\u0448\u0438\u0439 \u0440\u0435\u0437\u043d\u043e\u0439 \u043c\u0435\u0434\u043d\u044b\u0439 \u0431\u043b\u043e\u043a",
    tab: [[4, 321]]
  },
  84: {
    id: "84",
    type: "minecraft:weathered_cut_copper",
    name: "\u0421\u043e\u0441\u0442\u0430\u0440\u0435\u043d\u043d\u044b\u0439 \u0440\u0435\u0437\u043d\u043e\u0439 \u043c\u0435\u0434\u043d\u044b\u0439 \u0431\u043b\u043e\u043a",
    tab: [[4, 325]]
  },
  85: {
    id: "85",
    type: "minecraft:oxidized_cut_copper",
    name: "\u041e\u043a\u0438\u0441\u043b\u0435\u043d\u043d\u044b\u0439 \u0440\u0435\u0437\u043d\u043e\u0439 \u043c\u0435\u0434\u043d\u044b\u0439 \u0431\u043b\u043e\u043a",
    tab: [[4, 329]]
  },
  86: {
    id: "86",
    type: "minecraft:cut_copper_stairs",
    name: "\u0420\u0435\u0437\u043d\u044b\u0435 \u043c\u0435\u0434\u043d\u044b\u0435 \u0441\u0442\u0443\u043f\u0435\u043d\u044c\u043a\u0438",
    tab: [[4, 318]]
  },
  87: {
    id: "87",
    type: "minecraft:exposed_cut_copper_stairs",
    name: "\u041f\u043e\u0442\u0435\u043c\u043d\u0435\u0432\u0448\u0438\u0435 \u0440\u0435\u0437\u043d\u044b\u0435 \u043c\u0435\u0434\u043d\u044b\u0435 \u0441\u0442\u0443\u043f\u0435\u043d\u044c\u043a\u0438",
    tab: [[4, 322]]
  },
  88: {
    id: "88",
    type: "minecraft:weathered_cut_copper_stairs",
    name: "\u0421\u043e\u0441\u0442\u0430\u0440\u0435\u043d\u043d\u044b\u0435 \u0440\u0435\u0437\u043d\u044b\u0435 \u043c\u0435\u0434\u043d\u044b\u0435 \u0441\u0442\u0443\u043f\u0435\u043d\u044c\u043a\u0438",
    tab: [[4, 326]]
  },
  89: {
    id: "89",
    type: "minecraft:oxidized_cut_copper_stairs",
    name: "\u041e\u043a\u0438\u0441\u043b\u0435\u043d\u043d\u044b\u0435 \u0440\u0435\u0437\u043d\u044b\u0435 \u043c\u0435\u0434\u043d\u044b\u0435 \u0441\u0442\u0443\u043f\u0435\u043d\u044c\u043a\u0438",
    tab: [[4, 330]]
  },
  90: {
    id: "90",
    type: "minecraft:cut_copper_slab",
    name: "\u0420\u0435\u0437\u043d\u0430\u044f \u043c\u0435\u0434\u043d\u0430\u044f \u043f\u043b\u0438\u0442\u0430",
    tab: [[4, 319]]
  },
  91: {
    id: "91",
    type: "minecraft:exposed_cut_copper_slab",
    name: "\u041f\u043e\u0442\u0435\u043c\u043d\u0435\u0432\u0448\u0430\u044f \u0440\u0435\u0437\u043d\u0430\u044f \u043c\u0435\u0434\u043d\u0430\u044f \u043f\u043b\u0438\u0442\u0430",
    tab: [[4, 323]]
  },
  92: {
    id: "92",
    type: "minecraft:weathered_cut_copper_slab",
    name: "\u0421\u043e\u0441\u0442\u0430\u0440\u0435\u043d\u043d\u0430\u044f \u0440\u0435\u0437\u043d\u0430\u044f \u043c\u0435\u0434\u043d\u0430\u044f \u043f\u043b\u0438\u0442\u0430",
    tab: [[4, 327]]
  },
  93: {
    id: "93",
    type: "minecraft:oxidized_cut_copper_slab",
    name: "\u041e\u043a\u0438\u0441\u043b\u0435\u043d\u043d\u0430\u044f \u0440\u0435\u0437\u043d\u0430\u044f \u043c\u0435\u0434\u043d\u0430\u044f \u043f\u043b\u0438\u0442\u0430",
    tab: [[4, 331]]
  },
  94: {
    id: "94",
    type: "minecraft:waxed_copper_block",
    name: "\u0412\u043e\u0449\u0451\u043d\u044b\u0439 \u043c\u0435\u0434\u043d\u044b\u0439 \u0431\u043b\u043e\u043a",
    tab: [[4, 332]]
  },
  95: {
    id: "95",
    type: "minecraft:waxed_exposed_copper",
    name: "\u0412\u043e\u0449\u0451\u043d\u044b\u0439 \u043f\u043e\u0442\u0435\u043c\u043d\u0435\u0432\u0448\u0438\u0439 \u043c\u0435\u0434\u043d\u044b\u0439 \u0431\u043b\u043e\u043a",
    tab: [[4, 336]]
  },
  96: {
    id: "96",
    type: "minecraft:waxed_weathered_copper",
    name: "\u0412\u043e\u0449\u0451\u043d\u044b\u0439 \u0441\u043e\u0441\u0442\u0430\u0440\u0435\u043d\u043d\u044b\u0439 \u043c\u0435\u0434\u043d\u044b\u0439 \u0431\u043b\u043e\u043a",
    tab: [[4, 340]]
  },
  97: {
    id: "97",
    type: "minecraft:waxed_oxidized_copper",
    name: "\u0412\u043e\u0449\u0451\u043d\u044b\u0439 \u043e\u043a\u0438\u0441\u043b\u0435\u043d\u043d\u044b\u0439 \u043c\u0435\u0434\u043d\u044b\u0439 \u0431\u043b\u043e\u043a",
    tab: [[4, 344]]
  },
  98: {
    id: "98",
    type: "minecraft:waxed_cut_copper",
    name: "\u0412\u043e\u0449\u0451\u043d\u044b\u0439 \u0440\u0435\u0437\u043d\u043e\u0439 \u043c\u0435\u0434\u043d\u044b\u0439 \u0431\u043b\u043e\u043a",
    tab: [[4, 333]]
  },
  99: {
    id: "99",
    type: "minecraft:waxed_exposed_cut_copper",
    name: "\u0412\u043e\u0449\u0451\u043d\u044b\u0439 \u043f\u043e\u0442\u0435\u043c\u043d\u0435\u0432\u0448\u0438\u0439 \u0440\u0435\u0437\u043d\u043e\u0439 \u043c\u0435\u0434\u043d\u044b\u0439 \u0431\u043b\u043e\u043a",
    tab: [[4, 337]]
  },
  100: {
    id: "100",
    type: "minecraft:waxed_weathered_cut_copper",
    name: "\u0412\u043e\u0449\u0451\u043d\u044b\u0439 \u0441\u043e\u0441\u0442\u0430\u0440\u0435\u043d\u043d\u044b\u0439 \u0440\u0435\u0437\u043d\u043e\u0439 \u043c\u0435\u0434\u043d\u044b\u0439 \u0431\u043b\u043e\u043a",
    tab: [[4, 341]]
  },
  101: {
    id: "101",
    type: "minecraft:waxed_oxidized_cut_copper",
    name: "\u0412\u043e\u0449\u0451\u043d\u044b\u0439 \u043e\u043a\u0438\u0441\u043b\u0435\u043d\u043d\u044b\u0439 \u0440\u0435\u0437\u043d\u043e\u0439 \u043c\u0435\u0434\u043d\u044b\u0439 \u0431\u043b\u043e\u043a",
    tab: [[4,
      345]]
  },
  102: {
    id: "102",
    type: "minecraft:waxed_cut_copper_stairs",
    name: "\u0412\u043e\u0449\u0451\u043d\u044b\u0435 \u0440\u0435\u0437\u043d\u044b\u0435 \u043c\u0435\u0434\u043d\u044b\u0435 \u0441\u0442\u0443\u043f\u0435\u043d\u044c\u043a\u0438",
    tab: [[4, 334]]
  },
  103: {
    id: "103",
    type: "minecraft:waxed_exposed_cut_copper_stairs",
    name: "\u0412\u043e\u0449\u0451\u043d\u044b\u0435 \u043f\u043e\u0442\u0435\u043c\u043d\u0435\u0432\u0448\u0438\u0435 \u0440\u0435\u0437\u043d\u044b\u0435 \u043c\u0435\u0434\u043d\u044b\u0435 \u0441\u0442\u0443\u043f\u0435\u043d\u044c\u043a\u0438",
    tab: [[4, 338]]
  },
  104: {
    id: "104",
    type: "minecraft:waxed_weathered_cut_copper_stairs",
    name: "\u0412\u043e\u0449\u0451\u043d\u044b\u0435 \u0441\u043e\u0441\u0442\u0430\u0440\u0435\u043d\u043d\u044b\u0435 \u0440\u0435\u0437\u043d\u044b\u0435 \u043c\u0435\u0434\u043d\u044b\u0435 \u0441\u0442\u0443\u043f\u0435\u043d\u044c\u043a\u0438",
    tab: [[4, 342]]
  },
  105: {
    id: "105",
    type: "minecraft:waxed_oxidized_cut_copper_stairs",
    name: "\u0412\u043e\u0449\u0451\u043d\u044b\u0435 \u043e\u043a\u0438\u0441\u043b\u0435\u043d\u043d\u044b\u0435 \u0440\u0435\u0437\u043d\u044b\u0435 \u043c\u0435\u0434\u043d\u044b\u0435 \u0441\u0442\u0443\u043f\u0435\u043d\u044c\u043a\u0438",
    tab: [[4, 346]]
  },
  106: {
    id: "106",
    type: "minecraft:waxed_cut_copper_slab",
    name: "\u0412\u043e\u0449\u0451\u043d\u0430\u044f \u0440\u0435\u0437\u043d\u0430\u044f \u043c\u0435\u0434\u043d\u0430\u044f \u043f\u043b\u0438\u0442\u0430",
    tab: [[4, 335]]
  },
  107: {
    id: "107",
    type: "minecraft:waxed_exposed_cut_copper_slab",
    name: "\u0412\u043e\u0449\u0451\u043d\u0430\u044f \u043f\u043e\u0442\u0435\u043c\u043d\u0435\u0432\u0448\u0430\u044f \u0440\u0435\u0437\u043d\u0430\u044f \u043c\u0435\u0434\u043d\u0430\u044f \u043f\u043b\u0438\u0442\u0430",
    tab: [[4, 339]]
  },
  108: {
    id: "108",
    type: "minecraft:waxed_weathered_cut_copper_slab",
    name: "\u0412\u043e\u0449\u0451\u043d\u0430\u044f \u0441\u043e\u0441\u0442\u0430\u0440\u0435\u043d\u043d\u0430\u044f \u0440\u0435\u0437\u043d\u0430\u044f \u043c\u0435\u0434\u043d\u0430\u044f \u043f\u043b\u0438\u0442\u0430",
    tab: [[4, 343]]
  },
  109: {
    id: "109",
    type: "minecraft:waxed_oxidized_cut_copper_slab",
    name: "\u0412\u043e\u0449\u0451\u043d\u0430\u044f \u043e\u043a\u0438\u0441\u043b\u0435\u043d\u043d\u0430\u044f \u0440\u0435\u0437\u043d\u0430\u044f \u043c\u0435\u0434\u043d\u0430\u044f \u043f\u043b\u0438\u0442\u0430",
    tab: [[4, 347]]
  },
  110: {
    id: "110",
    type: "minecraft:oak_log",
    name: "\u0414\u0443\u0431\u043e\u0432\u043e\u0435 \u0431\u0440\u0435\u0432\u043d\u043e",
    tab: [[4, 0], [8, 74]]
  },
  111: {
    id: "111",
    type: "minecraft:spruce_log",
    name: "\u0415\u043b\u043e\u0432\u043e\u0435 \u0431\u0440\u0435\u0432\u043d\u043e",
    tab: [[4, 13], [8, 75]]
  },
  112: {
    id: "112",
    type: "minecraft:birch_log",
    name: "\u0411\u0435\u0440\u0451\u0437\u043e\u0432\u043e\u0435 \u0431\u0440\u0435\u0432\u043d\u043e",
    tab: [[4, 26], [8, 76]]
  },
  113: {
    id: "113",
    type: "minecraft:jungle_log",
    name: "\u0411\u0440\u0435\u0432\u043d\u043e \u0442\u0440\u043e\u043f\u0438\u0447\u0435\u0441\u043a\u043e\u0433\u043e \u0434\u0435\u0440\u0435\u0432\u0430",
    tab: [[4, 39], [8, 77]]
  },
  114: {
    id: "114",
    type: "minecraft:acacia_log",
    name: "\u0410\u043a\u0430\u0446\u0438\u0435\u0432\u043e\u0435 \u0431\u0440\u0435\u0432\u043d\u043e",
    tab: [[4, 52], [8, 78]]
  },
  115: {
    id: "115",
    type: "minecraft:cherry_log",
    name: "\u0412\u0438\u0448\u043d\u0451\u0432\u043e\u0435 \u0431\u0440\u0435\u0432\u043d\u043e",
    tab: [[4, 91], [8, 83]]
  },
  116: {
    id: "116",
    type: "minecraft:dark_oak_log",
    name: "\u0411\u0440\u0435\u0432\u043d\u043e \u0442\u0451\u043c\u043d\u043e\u0433\u043e \u0434\u0443\u0431\u0430",
    tab: [[4, 65], [8, 79]]
  },
  117: {
    id: "117",
    type: "minecraft:mangrove_log",
    name: "\u041c\u0430\u043d\u0433\u0440\u043e\u0432\u043e\u0435 \u0431\u0440\u0435\u0432\u043d\u043e",
    tab: [[4, 78], [8, 80]]
  },
  118: {
    id: "118",
    type: "minecraft:mangrove_roots",
    name: "\u041c\u0430\u043d\u0433\u0440\u043e\u0432\u044b\u0435 \u043a\u043e\u0440\u043d\u0438",
    tab: [[8, 81]]
  },
  119: {
    id: "119",
    type: "minecraft:muddy_mangrove_roots",
    name: "\u0413\u0440\u044f\u0437\u043d\u044b\u0435 \u043c\u0430\u043d\u0433\u0440\u043e\u0432\u044b\u0435 \u043a\u043e\u0440\u043d\u0438",
    tab: [[8, 82]]
  },
  120: {
    id: "120",
    type: "minecraft:crimson_stem",
    name: "\u0411\u0430\u0433\u0440\u043e\u0432\u044b\u0439 \u0441\u0442\u0435\u0431\u0435\u043b\u044c",
    tab: [[4, 118], [8, 85]]
  },
  121: {
    id: "121",
    type: "minecraft:warped_stem",
    name: "\u0418\u0441\u043a\u0430\u0436\u0451\u043d\u043d\u044b\u0439 \u0441\u0442\u0435\u0431\u0435\u043b\u044c",
    tab: [[4, 131], [8, 86]]
  },
  122: {
    id: "122",
    type: "minecraft:bamboo_block",
    name: "\u0411\u043b\u043e\u043a \u0431\u0430\u043c\u0431\u0443\u043a\u0430",
    tab: [[4, 104]]
  },
  123: {
    id: "123",
    type: "minecraft:stripped_oak_log",
    name: "\u041e\u0431\u0442\u0451\u0441\u0430\u043d\u043d\u043e\u0435 \u0434\u0443\u0431\u043e\u0432\u043e\u0435 \u0431\u0440\u0435\u0432\u043d\u043e",
    tab: [[4, 2]]
  },
  124: {
    id: "124",
    type: "minecraft:stripped_spruce_log",
    name: "\u041e\u0431\u0442\u0451\u0441\u0430\u043d\u043d\u043e\u0435 \u0435\u043b\u043e\u0432\u043e\u0435 \u0431\u0440\u0435\u0432\u043d\u043e",
    tab: [[4, 15]]
  },
  125: {
    id: "125",
    type: "minecraft:stripped_birch_log",
    name: "\u041e\u0431\u0442\u0451\u0441\u0430\u043d\u043d\u043e\u0435 \u0431\u0435\u0440\u0451\u0437\u043e\u0432\u043e\u0435 \u0431\u0440\u0435\u0432\u043d\u043e",
    tab: [[4, 28]]
  },
  126: {
    id: "126",
    type: "minecraft:stripped_jungle_log",
    name: "\u041e\u0431\u0442\u0451\u0441\u0430\u043d\u043d\u043e\u0435 \u0431\u0440\u0435\u0432\u043d\u043e \u0442\u0440\u043e\u043f\u0438\u0447\u0435\u0441\u043a\u043e\u0433\u043e \u0434\u0435\u0440\u0435\u0432\u0430",
    tab: [[4, 41]]
  },
  127: {
    id: "127",
    type: "minecraft:stripped_acacia_log",
    name: "\u041e\u0431\u0442\u0451\u0441\u0430\u043d\u043d\u043e\u0435 \u0430\u043a\u0430\u0446\u0438\u0435\u0432\u043e\u0435 \u0431\u0440\u0435\u0432\u043d\u043e",
    tab: [[4, 54]]
  },
  128: {
    id: "128",
    type: "minecraft:stripped_cherry_log",
    name: "\u041e\u0431\u0442\u0451\u0441\u0430\u043d\u043d\u043e\u0435 \u0432\u0438\u0448\u043d\u0451\u0432\u043e\u0435 \u0431\u0440\u0435\u0432\u043d\u043e",
    tab: [[4, 93]]
  },
  129: {
    id: "129",
    type: "minecraft:stripped_dark_oak_log",
    name: "\u041e\u0431\u0442\u0451\u0441\u0430\u043d\u043d\u043e\u0435 \u0431\u0440\u0435\u0432\u043d\u043e \u0442\u0451\u043c\u043d\u043e\u0433\u043e \u0434\u0443\u0431\u0430",
    tab: [[4, 67]]
  },
  130: {
    id: "130",
    type: "minecraft:stripped_mangrove_log",
    name: "\u041e\u0431\u0442\u0451\u0441\u0430\u043d\u043d\u043e\u0435 \u043c\u0430\u043d\u0433\u0440\u043e\u0432\u043e\u0435 \u0431\u0440\u0435\u0432\u043d\u043e",
    tab: [[4, 80]]
  },
  131: {
    id: "131",
    type: "minecraft:stripped_crimson_stem",
    name: "\u041e\u0447\u0438\u0449\u0435\u043d\u043d\u044b\u0439 \u0431\u0430\u0433\u0440\u043e\u0432\u044b\u0439 \u0441\u0442\u0435\u0431\u0435\u043b\u044c",
    tab: [[4, 120]]
  },
  132: {
    id: "132",
    type: "minecraft:stripped_warped_stem",
    name: "\u041e\u0447\u0438\u0449\u0435\u043d\u043d\u044b\u0439 \u0438\u0441\u043a\u0430\u0436\u0451\u043d\u043d\u044b\u0439 \u0441\u0442\u0435\u0431\u0435\u043b\u044c",
    tab: [[4, 133]]
  },
  133: {
    id: "133",
    type: "minecraft:stripped_oak_wood",
    name: "\u041e\u0431\u0442\u0451\u0441\u0430\u043d\u043d\u0430\u044f \u0434\u0443\u0431\u043e\u0432\u0430\u044f \u0434\u0440\u0435\u0432\u0435\u0441\u0438\u043d\u0430",
    tab: [[4, 3]]
  },
  134: {
    id: "134",
    type: "minecraft:stripped_spruce_wood",
    name: "\u041e\u0431\u0442\u0451\u0441\u0430\u043d\u043d\u0430\u044f \u0435\u043b\u043e\u0432\u0430\u044f \u0434\u0440\u0435\u0432\u0435\u0441\u0438\u043d\u0430",
    tab: [[4, 16]]
  },
  135: {
    id: "135",
    type: "minecraft:stripped_birch_wood",
    name: "\u041e\u0431\u0442\u0451\u0441\u0430\u043d\u043d\u0430\u044f \u0431\u0435\u0440\u0451\u0437\u043e\u0432\u0430\u044f \u0434\u0440\u0435\u0432\u0435\u0441\u0438\u043d\u0430",
    tab: [[4, 29]]
  },
  136: {
    id: "136",
    type: "minecraft:stripped_jungle_wood",
    name: "\u041e\u0431\u0442\u0451\u0441\u0430\u043d\u043d\u0430\u044f \u0442\u0440\u043e\u043f\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u0434\u0440\u0435\u0432\u0435\u0441\u0438\u043d\u0430",
    tab: [[4, 42]]
  },
  137: {
    id: "137",
    type: "minecraft:stripped_acacia_wood",
    name: "\u041e\u0431\u0442\u0451\u0441\u0430\u043d\u043d\u0430\u044f \u0430\u043a\u0430\u0446\u0438\u0435\u0432\u0430\u044f \u0434\u0440\u0435\u0432\u0435\u0441\u0438\u043d\u0430",
    tab: [[4, 55]]
  },
  138: {
    id: "138",
    type: "minecraft:stripped_cherry_wood",
    name: "\u041e\u0431\u0442\u0451\u0441\u0430\u043d\u043d\u0430\u044f \u0432\u0438\u0448\u043d\u0451\u0432\u0430\u044f \u0434\u0440\u0435\u0432\u0435\u0441\u0438\u043d\u0430",
    tab: [[4, 94]]
  },
  139: {
    id: "139",
    type: "minecraft:stripped_dark_oak_wood",
    name: "\u041e\u0431\u0442\u0451\u0441\u0430\u043d\u043d\u0430\u044f \u0434\u0440\u0435\u0432\u0435\u0441\u0438\u043d\u0430 \u0442\u0451\u043c\u043d\u043e\u0433\u043e \u0434\u0443\u0431\u0430",
    tab: [[4, 68]]
  },
  140: {
    id: "140",
    type: "minecraft:stripped_mangrove_wood",
    name: "\u041e\u0431\u0442\u0451\u0441\u0430\u043d\u043d\u0430\u044f \u043c\u0430\u043d\u0433\u0440\u043e\u0432\u0430\u044f \u0434\u0440\u0435\u0432\u0435\u0441\u0438\u043d\u0430",
    tab: [[4, 81]]
  },
  141: {
    id: "141",
    type: "minecraft:stripped_crimson_hyphae",
    name: "\u041e\u0447\u0438\u0449\u0435\u043d\u043d\u044b\u0435 \u0431\u0430\u0433\u0440\u043e\u0432\u044b\u0435 \u0433\u0438\u0444\u044b",
    tab: [[4, 121]]
  },
  142: {
    id: "142",
    type: "minecraft:stripped_warped_hyphae",
    name: "\u041e\u0447\u0438\u0449\u0435\u043d\u043d\u044b\u0435 \u0438\u0441\u043a\u0430\u0436\u0451\u043d\u043d\u044b\u0435 \u0433\u0438\u0444\u044b",
    tab: [[4, 134]]
  },
  143: {
    id: "143",
    type: "minecraft:stripped_bamboo_block",
    name: "\u0411\u043b\u043e\u043a \u043e\u0431\u0442\u0451\u0441\u0430\u043d\u043d\u043e\u0433\u043e \u0431\u0430\u043c\u0431\u0443\u043a\u0430",
    tab: [[4, 105]]
  },
  144: {id: "144", type: "minecraft:oak_wood", name: "\u0414\u0443\u0431", tab: [[4, 1]]},
  145: {id: "145", type: "minecraft:spruce_wood", name: "\u0415\u043b\u044c", tab: [[4, 14]]},
  146: {id: "146", type: "minecraft:birch_wood", name: "\u0411\u0435\u0440\u0451\u0437\u0430", tab: [[4, 27]]},
  147: {
    id: "147",
    type: "minecraft:jungle_wood",
    name: "\u0422\u0440\u043e\u043f\u0438\u0447\u0435\u0441\u043a\u043e\u0435 \u0434\u0435\u0440\u0435\u0432\u043e",
    tab: [[4, 40]]
  },
  148: {
    id: "148", type: "minecraft:acacia_wood", name: "\u0410\u043a\u0430\u0446\u0438\u044f",
    tab: [[4, 53]]
  },
  149: {id: "149", type: "minecraft:cherry_wood", name: "\u0412\u0438\u0448\u043d\u044f", tab: [[4, 92]]},
  150: {
    id: "150",
    type: "minecraft:dark_oak_wood",
    name: "\u0422\u0451\u043c\u043d\u044b\u0439 \u0434\u0443\u0431",
    tab: [[4, 66]]
  },
  151: {
    id: "151",
    type: "minecraft:mangrove_wood",
    name: "\u041c\u0430\u043d\u0433\u0440\u043e\u0432\u043e\u0435 \u0434\u0435\u0440\u0435\u0432\u043e",
    tab: [[4, 79]]
  },
  152: {
    id: "152",
    type: "minecraft:crimson_hyphae",
    name: "\u0411\u0430\u0433\u0440\u043e\u0432\u044b\u0435 \u0433\u0438\u0444\u044b",
    tab: [[4, 119]]
  },
  153: {
    id: "153",
    type: "minecraft:warped_hyphae",
    name: "\u0418\u0441\u043a\u0430\u0436\u0451\u043d\u043d\u044b\u0435 \u0433\u0438\u0444\u044b",
    tab: [[4, 132]]
  },
  154: {
    id: "154",
    type: "minecraft:oak_leaves",
    name: "\u0414\u0443\u0431\u043e\u0432\u044b\u0435 \u043b\u0438\u0441\u0442\u044c\u044f",
    tab: [[8, 87]]
  },
  155: {id: "155", type: "minecraft:spruce_leaves", name: "\u0425\u0432\u043e\u044f", tab: [[8, 88]]},
  156: {
    id: "156",
    type: "minecraft:birch_leaves",
    name: "\u0411\u0435\u0440\u0451\u0437\u043e\u0432\u044b\u0435 \u043b\u0438\u0441\u0442\u044c\u044f",
    tab: [[8, 89]]
  },
  157: {
    id: "157",
    type: "minecraft:jungle_leaves",
    name: "\u041b\u0438\u0441\u0442\u044c\u044f \u0442\u0440\u043e\u043f\u0438\u0447\u0435\u0441\u043a\u043e\u0433\u043e \u0434\u0435\u0440\u0435\u0432\u0430",
    tab: [[8, 90]]
  },
  158: {
    id: "158",
    type: "minecraft:acacia_leaves",
    name: "\u041b\u0438\u0441\u0442\u044c\u044f \u0430\u043a\u0430\u0446\u0438\u0438",
    tab: [[8, 91]]
  },
  159: {
    id: "159",
    type: "minecraft:cherry_leaves",
    name: "\u0412\u0438\u0448\u043d\u0451\u0432\u044b\u0435 \u043b\u0438\u0441\u0442\u044c\u044f",
    tab: [[8, 94]]
  },
  160: {
    id: "160",
    type: "minecraft:dark_oak_leaves",
    name: "\u041b\u0438\u0441\u0442\u044c\u044f \u0442\u0451\u043c\u043d\u043e\u0433\u043e \u0434\u0443\u0431\u0430",
    tab: [[8, 92]]
  },
  161: {
    id: "161",
    type: "minecraft:mangrove_leaves",
    name: "\u041c\u0430\u043d\u0433\u0440\u043e\u0432\u044b\u0435 \u043b\u0438\u0441\u0442\u044c\u044f",
    tab: [[8, 93]]
  },
  162: {
    id: "162",
    type: "minecraft:azalea_leaves",
    name: "\u041b\u0438\u0441\u0442\u044c\u044f \u0430\u0437\u0430\u043b\u0438\u0438",
    tab: [[8, 95]]
  },
  163: {
    id: "163",
    type: "minecraft:flowering_azalea_leaves",
    name: "\u041b\u0438\u0441\u0442\u044c\u044f \u0446\u0432\u0435\u0442\u0443\u0449\u0435\u0439 \u0430\u0437\u0430\u043b\u0438\u0438",
    tab: [[8, 96]]
  },
  164: {id: "164", type: "minecraft:sponge", name: "\u0413\u0443\u0431\u043a\u0430", tab: [[8, 205]]},
  165: {
    id: "165",
    type: "minecraft:wet_sponge",
    name: "\u041c\u043e\u043a\u0440\u0430\u044f \u0433\u0443\u0431\u043a\u0430",
    tab: [[8, 206]]
  },
  166: {id: "166", type: "minecraft:glass", name: "\u0421\u0442\u0435\u043a\u043b\u043e", tab: [[5, 97]]},
  167: {
    id: "167",
    type: "minecraft:tinted_glass",
    name: "\u0422\u043e\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u0435 \u0441\u0442\u0435\u043a\u043b\u043e",
    tab: [[5, 98], [6, 85]]
  },
  168: {
    id: "168",
    type: "minecraft:lapis_block",
    name: "\u041b\u0430\u0437\u0443\u0440\u0438\u0442\u043e\u0432\u044b\u0439 \u0431\u043b\u043e\u043a",
    tab: [[4, 303]]
  },
  169: {
    id: "169",
    type: "minecraft:sandstone",
    name: "\u041f\u0435\u0441\u0447\u0430\u043d\u0438\u043a",
    tab: [[4, 220], [8, 12]]
  },
  170: {
    id: "170", type: "minecraft:chiseled_sandstone",
    name: "\u0420\u0435\u0437\u043d\u043e\u0439 \u043f\u0435\u0441\u0447\u0430\u043d\u0438\u043a", tab: [[4, 224]]
  },
  171: {
    id: "171",
    type: "minecraft:cut_sandstone",
    name: "\u041f\u0438\u043b\u0435\u043d\u044b\u0439 \u043f\u0435\u0441\u0447\u0430\u043d\u0438\u043a",
    tab: [[4, 228]]
  },
  172: {id: "172", type: "minecraft:cobweb", name: "\u041f\u0430\u0443\u0442\u0438\u043d\u0430", tab: [[8, 224]]},
  173: {id: "173", type: "minecraft:grass", name: "\u0422\u0440\u0430\u0432\u0430", tab: [[8, 116]]},
  174: {
    id: "174", type: "minecraft:fern", name: "\u041f\u0430\u043f\u043e\u0440\u043e\u0442\u043d\u0438\u043a",
    tab: [[8, 117]]
  },
  175: {id: "175", type: "minecraft:azalea", name: "\u0410\u0437\u0430\u043b\u0438\u044f", tab: [[8, 110]]},
  176: {
    id: "176",
    type: "minecraft:flowering_azalea",
    name: "\u0426\u0432\u0435\u0442\u0443\u0449\u0430\u044f \u0430\u0437\u0430\u043b\u0438\u044f",
    tab: [[8, 111]]
  },
  177: {
    id: "177",
    type: "minecraft:dead_bush",
    name: "\u041c\u0451\u0440\u0442\u0432\u044b\u0439 \u043a\u0443\u0441\u0442",
    tab: [[8, 118]]
  },
  178: {
    id: "178",
    type: "minecraft:seagrass",
    name: "\u041c\u043e\u0440\u0441\u043a\u0430\u044f \u0442\u0440\u0430\u0432\u0430",
    tab: [[8, 171]]
  },
  179: {
    id: "179",
    type: "minecraft:sea_pickle",
    name: "\u041c\u043e\u0440\u0441\u043a\u043e\u0439 \u043e\u0433\u0443\u0440\u0435\u0446",
    tab: [[8, 172]]
  },
  180: {
    id: "180",
    type: "minecraft:white_wool",
    name: "\u0411\u0435\u043b\u0430\u044f \u0448\u0435\u0440\u0441\u0442\u044c",
    tab: [[5, 0], [7, 17]]
  },
  181: {
    id: "181",
    type: "minecraft:orange_wool",
    name: "\u041e\u0440\u0430\u043d\u0436\u0435\u0432\u0430\u044f \u0448\u0435\u0440\u0441\u0442\u044c",
    tab: [[5, 6]]
  },
  182: {
    id: "182",
    type: "minecraft:magenta_wool",
    name: "\u041f\u0443\u0440\u043f\u0443\u0440\u043d\u0430\u044f \u0448\u0435\u0440\u0441\u0442\u044c",
    tab: [[5, 14]]
  },
  183: {
    id: "183",
    type: "minecraft:light_blue_wool",
    name: "\u0413\u043e\u043b\u0443\u0431\u0430\u044f \u0448\u0435\u0440\u0441\u0442\u044c",
    tab: [[5, 11]]
  },
  184: {
    id: "184",
    type: "minecraft:yellow_wool",
    name: "\u0416\u0451\u043b\u0442\u0430\u044f \u0448\u0435\u0440\u0441\u0442\u044c",
    tab: [[5, 7]]
  },
  185: {
    id: "185",
    type: "minecraft:lime_wool",
    name: "\u041b\u0430\u0439\u043c\u043e\u0432\u0430\u044f \u0448\u0435\u0440\u0441\u0442\u044c",
    tab: [[5, 8]]
  },
  186: {
    id: "186",
    type: "minecraft:pink_wool",
    name: "\u0420\u043e\u0437\u043e\u0432\u0430\u044f \u0448\u0435\u0440\u0441\u0442\u044c",
    tab: [[5, 15]]
  },
  187: {
    id: "187",
    type: "minecraft:gray_wool",
    name: "\u0421\u0435\u0440\u0430\u044f \u0448\u0435\u0440\u0441\u0442\u044c",
    tab: [[5, 2]]
  },
  188: {
    id: "188",
    type: "minecraft:light_gray_wool",
    name: "\u0421\u0432\u0435\u0442\u043b\u043e-\u0441\u0435\u0440\u0430\u044f \u0448\u0435\u0440\u0441\u0442\u044c",
    tab: [[5, 1]]
  },
  189: {
    id: "189",
    type: "minecraft:cyan_wool",
    name: "\u0411\u0438\u0440\u044e\u0437\u043e\u0432\u0430\u044f \u0448\u0435\u0440\u0441\u0442\u044c",
    tab: [[5, 10]]
  },
  190: {
    id: "190",
    type: "minecraft:purple_wool",
    name: "\u0424\u0438\u043e\u043b\u0435\u0442\u043e\u0432\u0430\u044f \u0448\u0435\u0440\u0441\u0442\u044c",
    tab: [[5, 13]]
  },
  191: {
    id: "191",
    type: "minecraft:blue_wool",
    name: "\u0421\u0438\u043d\u044f\u044f \u0448\u0435\u0440\u0441\u0442\u044c",
    tab: [[5, 12]]
  },
  192: {
    id: "192",
    type: "minecraft:brown_wool",
    name: "\u041a\u043e\u0440\u0438\u0447\u043d\u0435\u0432\u0430\u044f \u0448\u0435\u0440\u0441\u0442\u044c",
    tab: [[5, 4]]
  },
  193: {
    id: "193",
    type: "minecraft:green_wool",
    name: "\u0417\u0435\u043b\u0451\u043d\u0430\u044f \u0448\u0435\u0440\u0441\u0442\u044c",
    tab: [[5, 9]]
  },
  194: {
    id: "194",
    type: "minecraft:red_wool",
    name: "\u041a\u0440\u0430\u0441\u043d\u0430\u044f \u0448\u0435\u0440\u0441\u0442\u044c",
    tab: [[5, 5]]
  },
  195: {
    id: "195",
    type: "minecraft:black_wool",
    name: "\u0427\u0451\u0440\u043d\u0430\u044f \u0448\u0435\u0440\u0441\u0442\u044c",
    tab: [[5, 3]]
  },
  196: {
    id: "196",
    type: "minecraft:dandelion",
    name: "\u041e\u0434\u0443\u0432\u0430\u043d\u0447\u0438\u043a",
    tab: [[8, 119]]
  },
  197: {id: "197", type: "minecraft:poppy", name: "\u041c\u0430\u043a", tab: [[8, 120]]},
  198: {
    id: "198", type: "minecraft:blue_orchid",
    name: "\u0421\u0438\u043d\u044f\u044f \u043e\u0440\u0445\u0438\u0434\u0435\u044f", tab: [[8, 121]]
  },
  199: {
    id: "199",
    type: "minecraft:allium",
    name: "\u041b\u0443\u043a-\u0431\u0430\u0442\u0443\u043d",
    tab: [[8, 122]]
  },
  200: {
    id: "200",
    type: "minecraft:azure_bluet",
    name: "\u0425\u0430\u0443\u0441\u0442\u043e\u043d\u0438\u044f \u0441\u0435\u0440\u0430\u044f",
    tab: [[8, 123]]
  },
  201: {
    id: "201",
    type: "minecraft:red_tulip",
    name: "\u041a\u0440\u0430\u0441\u043d\u044b\u0439 \u0442\u044e\u043b\u044c\u043f\u0430\u043d",
    tab: [[8, 124]]
  },
  202: {
    id: "202",
    type: "minecraft:orange_tulip",
    name: "\u041e\u0440\u0430\u043d\u0436\u0435\u0432\u044b\u0439 \u0442\u044e\u043b\u044c\u043f\u0430\u043d",
    tab: [[8, 125]]
  },
  203: {
    id: "203",
    type: "minecraft:white_tulip",
    name: "\u0411\u0435\u043b\u044b\u0439 \u0442\u044e\u043b\u044c\u043f\u0430\u043d",
    tab: [[8, 126]]
  },
  204: {
    id: "204",
    type: "minecraft:pink_tulip",
    name: "\u0420\u043e\u0437\u043e\u0432\u044b\u0439 \u0442\u044e\u043b\u044c\u043f\u0430\u043d",
    tab: [[8, 127]]
  },
  205: {
    id: "205", type: "minecraft:oxeye_daisy", name: "\u0420\u043e\u043c\u0430\u0448\u043a\u0430",
    tab: [[8, 128]]
  },
  206: {
    id: "206",
    type: "minecraft:cornflower",
    name: "\u0421\u0438\u043d\u0438\u0439 \u0432\u0430\u0441\u0438\u043b\u0451\u043a",
    tab: [[8, 129]]
  },
  207: {id: "207", type: "minecraft:lily_of_the_valley", name: "\u041b\u0430\u043d\u0434\u044b\u0448", tab: [[8, 130]]},
  208: {
    id: "208",
    type: "minecraft:wither_rose",
    name: "\u0420\u043e\u0437\u0430 \u0432\u0438\u0437\u0435\u0440\u0430",
    tab: [[8, 132]]
  },
  209: {
    id: "209", type: "minecraft:torchflower", name: "\u0424\u0430\u043a\u0435\u043b\u044c\u043d\u0438\u043a", tab: [[8,
      131]]
  },
  210: {
    id: "210",
    type: "minecraft:pitcher_plant",
    name: "\u041a\u0443\u0432\u0448\u0438\u043d\u043d\u0438\u0446\u0430",
    tab: [[8, 150]]
  },
  211: {
    id: "211",
    type: "minecraft:spore_blossom",
    name: "\u0421\u043f\u043e\u0440\u043e\u0446\u0432\u0435\u0442",
    tab: [[8, 134]]
  },
  212: {
    id: "212",
    type: "minecraft:brown_mushroom",
    name: "\u041a\u043e\u0440\u0438\u0447\u043d\u0435\u0432\u044b\u0439 \u0433\u0440\u0438\u0431",
    tab: [[8, 112]]
  },
  213: {
    id: "213",
    type: "minecraft:red_mushroom",
    name: "\u041a\u0440\u0430\u0441\u043d\u044b\u0439 \u0433\u0440\u0438\u0431",
    tab: [[8, 113]]
  },
  214: {
    id: "214",
    type: "minecraft:crimson_fungus",
    name: "\u0411\u0430\u0433\u0440\u043e\u0432\u044b\u0439 \u0433\u0440\u0438\u0431",
    tab: [[8, 114]]
  },
  215: {
    id: "215",
    type: "minecraft:warped_fungus",
    name: "\u0418\u0441\u043a\u0430\u0436\u0451\u043d\u043d\u044b\u0439 \u0433\u0440\u0438\u0431",
    tab: [[8, 115]]
  },
  216: {
    id: "216",
    type: "minecraft:crimson_roots",
    name: "\u0411\u0430\u0433\u0440\u043e\u0432\u044b\u0435 \u043a\u043e\u0440\u043d\u0438",
    tab: [[8, 138]]
  },
  217: {
    id: "217", type: "minecraft:warped_roots",
    name: "\u0418\u0441\u043a\u0430\u0436\u0451\u043d\u043d\u044b\u0435 \u043a\u043e\u0440\u043d\u0438", tab: [[8, 139]]
  },
  218: {
    id: "218",
    type: "minecraft:nether_sprouts",
    name: "\u041d\u0435\u0437\u0435\u0440\u0441\u043a\u0438\u0435 \u0440\u043e\u0441\u0442\u043a\u0438",
    tab: [[8, 140]]
  },
  219: {
    id: "219",
    type: "minecraft:weeping_vines",
    name: "\u041f\u043b\u0430\u043a\u0443\u0447\u0430\u044f \u043b\u043e\u0437\u0430",
    tab: [[8, 141]]
  },
  220: {
    id: "220",
    type: "minecraft:twisting_vines",
    name: "\u0412\u044c\u044e\u0449\u0430\u044f\u0441\u044f \u043b\u043e\u0437\u0430",
    tab: [[8, 142]]
  },
  221: {
    id: "221",
    type: "minecraft:sugar_cane",
    name: "\u0421\u0430\u0445\u0430\u0440\u043d\u044b\u0439 \u0442\u0440\u043e\u0441\u0442\u043d\u0438\u043a",
    tab: [[8, 136]]
  },
  222: {
    id: "222",
    type: "minecraft:kelp",
    name: "\u041b\u0430\u043c\u0438\u043d\u0430\u0440\u0438\u044f",
    tab: [[8, 173]]
  },
  223: {
    id: "223",
    type: "minecraft:moss_carpet",
    name: "\u041c\u043e\u0445\u043e\u0432\u043e\u0439 \u043a\u043e\u0432\u0451\u0440",
    tab: [[8, 21]]
  },
  224: {
    id: "224",
    type: "minecraft:pink_petals",
    name: "\u0420\u043e\u0437\u043e\u0432\u044b\u0435 \u043b\u0435\u043f\u0435\u0441\u0442\u043a\u0438",
    tab: [[8, 133]]
  },
  225: {id: "225", type: "minecraft:moss_block", name: "\u0411\u043b\u043e\u043a \u043c\u0445\u0430", tab: [[8, 20]]},
  226: {
    id: "226",
    type: "minecraft:hanging_roots",
    name: "\u0421\u0432\u0438\u0441\u0430\u044e\u0449\u0438\u0435 \u043a\u043e\u0440\u043d\u0438",
    tab: [[8, 156]]
  },
  227: {
    id: "227",
    type: "minecraft:big_dripleaf",
    name: "\u0411\u043e\u043b\u044c\u0448\u0430\u044f \u0431\u0440\u043e\u0441\u044f\u043d\u043a\u0430",
    tab: [[8, 151], [7, 59]]
  },
  228: {
    id: "228",
    type: "minecraft:small_dripleaf",
    name: "\u041c\u0430\u043b\u0435\u043d\u044c\u043a\u0430\u044f \u0431\u0440\u043e\u0441\u044f\u043d\u043a\u0430",
    tab: [[8, 152]]
  },
  229: {id: "229", type: "minecraft:bamboo", name: "\u0411\u0430\u043c\u0431\u0443\u043a", tab: [[8, 135]]},
  230: {
    id: "230",
    type: "minecraft:oak_slab",
    name: "\u0414\u0443\u0431\u043e\u0432\u0430\u044f \u043f\u043b\u0438\u0442\u0430",
    tab: [[4, 6]]
  },
  231: {
    id: "231",
    type: "minecraft:spruce_slab",
    name: "\u0415\u043b\u043e\u0432\u0430\u044f \u043f\u043b\u0438\u0442\u0430",
    tab: [[4, 19]]
  },
  232: {
    id: "232",
    type: "minecraft:birch_slab",
    name: "\u0411\u0435\u0440\u0451\u0437\u043e\u0432\u0430\u044f \u043f\u043b\u0438\u0442\u0430",
    tab: [[4, 32]]
  },
  233: {
    id: "233",
    type: "minecraft:jungle_slab",
    name: "\u041f\u043b\u0438\u0442\u0430 \u0438\u0437 \u0442\u0440\u043e\u043f\u0438\u0447\u0435\u0441\u043a\u043e\u0433\u043e \u0434\u0435\u0440\u0435\u0432\u0430",
    tab: [[4, 45]]
  },
  234: {
    id: "234",
    type: "minecraft:acacia_slab",
    name: "\u0410\u043a\u0430\u0446\u0438\u0435\u0432\u0430\u044f \u043f\u043b\u0438\u0442\u0430",
    tab: [[4, 58]]
  },
  235: {
    id: "235",
    type: "minecraft:cherry_slab",
    name: "\u0412\u0438\u0448\u043d\u0451\u0432\u0430\u044f \u043f\u043b\u0438\u0442\u0430",
    tab: [[4, 97]]
  },
  236: {
    id: "236",
    type: "minecraft:dark_oak_slab",
    name: "\u041f\u043b\u0438\u0442\u0430 \u0438\u0437 \u0442\u0451\u043c\u043d\u043e\u0433\u043e \u0434\u0443\u0431\u0430",
    tab: [[4, 71]]
  },
  237: {
    id: "237",
    type: "minecraft:mangrove_slab",
    name: "\u041c\u0430\u043d\u0433\u0440\u043e\u0432\u0430\u044f \u043f\u043b\u0438\u0442\u0430",
    tab: [[4, 84]]
  },
  238: {
    id: "238",
    type: "minecraft:bamboo_slab",
    name: "\u0411\u0430\u043c\u0431\u0443\u043a\u043e\u0432\u0430\u044f \u043f\u043b\u0438\u0442\u0430",
    tab: [[4, 110]]
  },
  239: {
    id: "239",
    type: "minecraft:bamboo_mosaic_slab",
    name: "\u041f\u043b\u0438\u0442\u0430 \u0438\u0437 \u0431\u0430\u043c\u0431\u0443\u043a\u043e\u0432\u043e\u0439 \u043c\u043e\u0437\u0430\u0438\u043a\u0438",
    tab: [[4, 111]]
  },
  240: {
    id: "240",
    type: "minecraft:crimson_slab",
    name: "\u0411\u0430\u0433\u0440\u043e\u0432\u0430\u044f \u043f\u043b\u0438\u0442\u0430",
    tab: [[4, 124]]
  },
  241: {
    id: "241",
    type: "minecraft:warped_slab",
    name: "\u0418\u0441\u043a\u0430\u0436\u0451\u043d\u043d\u0430\u044f \u043f\u043b\u0438\u0442\u0430",
    tab: [[4, 137]]
  },
  242: {
    id: "242",
    type: "minecraft:stone_slab",
    name: "\u041a\u0430\u043c\u0435\u043d\u043d\u0430\u044f \u043f\u043b\u0438\u0442\u0430",
    tab: [[4, 146]]
  },
  243: {
    id: "243",
    type: "minecraft:smooth_stone_slab",
    name: "\u041f\u043b\u0438\u0442\u0430 \u0438\u0437 \u0433\u043b\u0430\u0434\u043a\u043e\u0433\u043e \u043a\u0430\u043c\u043d\u044f",
    tab: [[4, 158]]
  },
  244: {
    id: "244",
    type: "minecraft:sandstone_slab",
    name: "\u041f\u0435\u0441\u0447\u0430\u043d\u0438\u043a\u043e\u0432\u0430\u044f \u043f\u043b\u0438\u0442\u0430",
    tab: [[4, 222]]
  },
  245: {
    id: "245",
    type: "minecraft:cut_sandstone_slab",
    name: "\u041f\u043b\u0438\u0442\u0430 \u0438\u0437 \u043f\u0438\u043b\u0435\u043d\u043e\u0433\u043e \u043f\u0435\u0441\u0447\u0430\u043d\u0438\u043a\u0430",
    tab: [[4, 229]]
  },
  246: {
    id: "246",
    type: "minecraft:petrified_oak_slab",
    name: "\u041e\u043a\u0430\u043c\u0435\u043d\u0435\u0432\u0448\u0430\u044f \u0434\u0443\u0431\u043e\u0432\u0430\u044f \u043f\u043b\u0438\u0442\u0430"
  },
  247: {
    id: "247",
    type: "minecraft:cobblestone_slab",
    name: "\u0411\u0443\u043b\u044b\u0436\u043d\u0430\u044f \u043f\u043b\u0438\u0442\u0430",
    tab: [[4, 151]]
  },
  248: {
    id: "248",
    type: "minecraft:brick_slab",
    name: "\u041a\u0438\u0440\u043f\u0438\u0447\u043d\u0430\u044f \u043f\u043b\u0438\u0442\u0430",
    tab: [[4, 213]]
  },
  249: {
    id: "249",
    type: "minecraft:stone_brick_slab",
    name: "\u041f\u043b\u0438\u0442\u0430 \u0438\u0437 \u043a\u0430\u043c\u0435\u043d\u043d\u043e\u0433\u043e \u043a\u0438\u0440\u043f\u0438\u0447\u0430",
    tab: [[4, 162]]
  },
  250: {
    id: "250",
    type: "minecraft:mud_brick_slab",
    name: "\u0421\u0430\u043c\u0430\u043d\u043d\u0430\u044f \u043f\u043b\u0438\u0442\u0430",
    tab: [[4, 218]]
  },
  251: {
    id: "251",
    type: "minecraft:nether_brick_slab",
    name: "\u041f\u043b\u0438\u0442\u0430 \u0438\u0437 \u043d\u0435\u0437\u0435\u0440\u0441\u043a\u043e\u0433\u043e \u043a\u0438\u0440\u043f\u0438\u0447\u0430",
    tab: [[4, 255]]
  },
  252: {
    id: "252",
    type: "minecraft:quartz_slab",
    name: "\u041a\u0432\u0430\u0440\u0446\u0435\u0432\u0430\u044f \u043f\u043b\u0438\u0442\u0430",
    tab: [[4, 308]]
  },
  253: {
    id: "253",
    type: "minecraft:red_sandstone_slab",
    name: "\u041f\u043b\u0438\u0442\u0430 \u0438\u0437 \u043a\u0440\u0430\u0441\u043d\u043e\u0433\u043e \u043f\u0435\u0441\u0447\u0430\u043d\u0438\u043a\u0430",
    tab: [[4, 232]]
  },
  254: {
    id: "254",
    type: "minecraft:cut_red_sandstone_slab",
    name: "\u041f\u043b\u0438\u0442\u0430 \u0438\u0437 \u043f\u0438\u043b\u0435\u043d\u043e\u0433\u043e \u043a\u0440\u0430\u0441\u043d\u043e\u0433\u043e \u043f\u0435\u0441\u0447\u0430\u043d\u0438\u043a\u0430",
    tab: [[4, 239]]
  },
  255: {
    id: "255",
    type: "minecraft:purpur_slab",
    name: "\u041f\u0443\u0440\u043f\u0443\u0440\u043e\u0432\u0430\u044f \u043f\u043b\u0438\u0442\u0430",
    tab: [[4, 291]]
  },
  256: {
    id: "256",
    type: "minecraft:prismarine_slab",
    name: "\u041f\u0440\u0438\u0437\u043c\u0430\u0440\u0438\u043d\u043e\u0432\u0430\u044f \u043f\u043b\u0438\u0442\u0430",
    tab: [[4, 243]]
  },
  257: {
    id: "257",
    type: "minecraft:prismarine_brick_slab",
    name: "\u041f\u043b\u0438\u0442\u0430 \u0438\u0437 \u043f\u0440\u0438\u0437\u043c\u0430\u0440\u0438\u043d\u043e\u0432\u043e\u0433\u043e \u043a\u0438\u0440\u043f\u0438\u0447\u0430",
    tab: [[4, 247]]
  },
  258: {
    id: "258",
    type: "minecraft:dark_prismarine_slab",
    name: "\u041f\u043b\u0438\u0442\u0430 \u0438\u0437 \u0442\u0451\u043c\u043d\u043e\u0433\u043e \u043f\u0440\u0438\u0437\u043c\u0430\u0440\u0438\u043d\u0430",
    tab: [[4, 250]]
  },
  259: {
    id: "259", type: "minecraft:smooth_quartz",
    name: "\u0413\u043b\u0430\u0434\u043a\u0438\u0439 \u043a\u0432\u0430\u0440\u0446", tab: [[4, 312]]
  },
  260: {
    id: "260",
    type: "minecraft:smooth_red_sandstone",
    name: "\u0413\u043b\u0430\u0434\u043a\u0438\u0439 \u043a\u0440\u0430\u0441\u043d\u044b\u0439 \u043f\u0435\u0441\u0447\u0430\u043d\u0438\u043a",
    tab: [[4, 235]]
  },
  261: {
    id: "261",
    type: "minecraft:smooth_sandstone",
    name: "\u0413\u043b\u0430\u0434\u043a\u0438\u0439 \u043f\u0435\u0441\u0447\u0430\u043d\u0438\u043a",
    tab: [[4, 225]]
  },
  262: {
    id: "262", type: "minecraft:smooth_stone",
    name: "\u0413\u043b\u0430\u0434\u043a\u0438\u0439 \u043a\u0430\u043c\u0435\u043d\u044c", tab: [[4, 157]]
  },
  263: {id: "263", type: "minecraft:bricks", name: "\u041a\u0438\u0440\u043f\u0438\u0447\u0438", tab: [[4, 211]]},
  264: {
    id: "264",
    type: "minecraft:bookshelf",
    name: "\u041a\u043d\u0438\u0436\u043d\u0430\u044f \u043f\u043e\u043b\u043a\u0430",
    tab: [[6, 82]]
  },
  265: {
    id: "265",
    type: "minecraft:chiseled_bookshelf",
    name: "\u0420\u0435\u0437\u043d\u0430\u044f \u043a\u043d\u0438\u0436\u043d\u0430\u044f \u043f\u043e\u043b\u043a\u0430",
    tab: [[6, 83], [7, 32]]
  },
  266: {
    id: "266",
    type: "minecraft:decorated_pot",
    name: "\u0423\u0437\u043e\u0440\u0447\u0430\u0442\u0430\u044f \u0432\u0430\u0437\u0430",
    tab: [[6, 51]]
  },
  267: {
    id: "267",
    type: "minecraft:mossy_cobblestone",
    name: "\u0417\u0430\u043c\u0448\u0435\u043b\u044b\u0439 \u0431\u0443\u043b\u044b\u0436\u043d\u0438\u043a",
    tab: [[4, 153]]
  },
  268: {
    id: "268",
    type: "minecraft:obsidian",
    name: "\u041e\u0431\u0441\u0438\u0434\u0438\u0430\u043d",
    tab: [[8, 33]]
  },
  269: {
    id: "269", type: "minecraft:torch", name: "\u0424\u0430\u043a\u0435\u043b",
    tab: [[6, 0]]
  },
  270: {
    id: "270",
    type: "minecraft:end_rod",
    name: "\u0421\u0442\u0435\u0440\u0436\u0435\u043d\u044c \u042d\u043d\u0434\u0430",
    tab: [[6, 6]]
  },
  271: {id: "271", type: "minecraft:chorus_plant", name: "\u0425\u043e\u0440\u0443\u0441", tab: [[8, 153]]},
  272: {
    id: "272",
    type: "minecraft:chorus_flower",
    name: "\u0426\u0432\u0435\u0442\u043e\u043a \u0445\u043e\u0440\u0443\u0441\u0430",
    tab: [[8, 154]]
  },
  273: {id: "273", type: "minecraft:purpur_block", name: "\u041f\u0443\u0440\u043f\u0443\u0440", tab: [[4, 288]]},
  274: {
    id: "274",
    type: "minecraft:purpur_pillar",
    name: "\u041f\u0443\u0440\u043f\u0443\u0440\u043e\u0432\u044b\u0439 \u043f\u0438\u043b\u043e\u043d",
    tab: [[4, 289]]
  },
  275: {
    id: "275",
    type: "minecraft:purpur_stairs",
    name: "\u041f\u0443\u0440\u043f\u0443\u0440\u043e\u0432\u044b\u0435 \u0441\u0442\u0443\u043f\u0435\u043d\u044c\u043a\u0438",
    tab: [[4, 290]]
  },
  276: {
    id: "276",
    type: "minecraft:spawner",
    name: "\u0420\u0430\u0441\u0441\u0430\u0434\u043d\u0438\u043a \u043c\u043e\u043d\u0441\u0442\u0440\u043e\u0432",
    tab: [[10, 0]]
  },
  277: {
    id: "277",
    type: "minecraft:chest", name: "\u0421\u0443\u043d\u0434\u0443\u043a", tab: [[6, 108], [7, 30]]
  },
  278: {
    id: "278",
    type: "minecraft:crafting_table",
    name: "\u0412\u0435\u0440\u0441\u0442\u0430\u043a",
    tab: [[6, 17]]
  },
  279: {id: "279", type: "minecraft:farmland", name: "\u041f\u0430\u0448\u043d\u044f", tab: [[8, 7]]},
  280: {id: "280", type: "minecraft:furnace", name: "\u041f\u0435\u0447\u044c", tab: [[6, 24], [7, 33]]},
  281: {id: "281", type: "minecraft:ladder", name: "\u041b\u0435\u0441\u0442\u043d\u0438\u0446\u0430", tab: [[6, 43]]},
  282: {
    id: "282",
    type: "minecraft:cobblestone_stairs",
    name: "\u0411\u0443\u043b\u044b\u0436\u043d\u044b\u0435 \u0441\u0442\u0443\u043f\u0435\u043d\u044c\u043a\u0438",
    tab: [[4, 150]]
  },
  283: {id: "283", type: "minecraft:snow", name: "\u0421\u043d\u0435\u0433", tab: [[8, 19]]},
  284: {id: "284", type: "minecraft:ice", name: "\u041b\u0451\u0434", tab: [[8, 15]]},
  285: {
    id: "285",
    type: "minecraft:snow_block",
    name: "\u0411\u043b\u043e\u043a \u0441\u043d\u0435\u0433\u0430",
    tab: [[8, 18]]
  },
  286: {
    id: "286", type: "minecraft:cactus", name: "\u041a\u0430\u043a\u0442\u0443\u0441",
    tab: [[8, 137]]
  },
  287: {id: "287", type: "minecraft:clay", name: "\u0413\u043b\u0438\u043d\u0430", tab: [[8, 9]]},
  288: {
    id: "288",
    type: "minecraft:jukebox",
    name: "\u041f\u0440\u043e\u0438\u0433\u0440\u044b\u0432\u0430\u0442\u0435\u043b\u044c",
    tab: [[6, 34], [7, 35]]
  },
  289: {
    id: "289",
    type: "minecraft:oak_fence",
    name: "\u0414\u0443\u0431\u043e\u0432\u044b\u0439 \u0437\u0430\u0431\u043e\u0440",
    tab: [[4, 7]]
  },
  290: {
    id: "290",
    type: "minecraft:spruce_fence",
    name: "\u0415\u043b\u043e\u0432\u044b\u0439 \u0437\u0430\u0431\u043e\u0440",
    tab: [[4, 20]]
  },
  291: {
    id: "291",
    type: "minecraft:birch_fence",
    name: "\u0411\u0435\u0440\u0451\u0437\u043e\u0432\u044b\u0439 \u0437\u0430\u0431\u043e\u0440",
    tab: [[4, 33]]
  },
  292: {
    id: "292",
    type: "minecraft:jungle_fence",
    name: "\u0417\u0430\u0431\u043e\u0440 \u0438\u0437 \u0442\u0440\u043e\u043f\u0438\u0447\u0435\u0441\u043a\u043e\u0433\u043e \u0434\u0435\u0440\u0435\u0432\u0430",
    tab: [[4, 46]]
  },
  293: {
    id: "293",
    type: "minecraft:acacia_fence",
    name: "\u0410\u043a\u0430\u0446\u0438\u0435\u0432\u044b\u0439 \u0437\u0430\u0431\u043e\u0440",
    tab: [[4, 59]]
  },
  294: {
    id: "294",
    type: "minecraft:cherry_fence",
    name: "\u0412\u0438\u0448\u043d\u0451\u0432\u044b\u0439 \u0437\u0430\u0431\u043e\u0440",
    tab: [[4, 98]]
  },
  295: {
    id: "295",
    type: "minecraft:dark_oak_fence",
    name: "\u0417\u0430\u0431\u043e\u0440 \u0438\u0437 \u0442\u0451\u043c\u043d\u043e\u0433\u043e \u0434\u0443\u0431\u0430",
    tab: [[4, 72]]
  },
  296: {
    id: "296",
    type: "minecraft:mangrove_fence",
    name: "\u041c\u0430\u043d\u0433\u0440\u043e\u0432\u044b\u0439 \u0437\u0430\u0431\u043e\u0440",
    tab: [[4, 85]]
  },
  297: {
    id: "297",
    type: "minecraft:bamboo_fence",
    name: "\u0411\u0430\u043c\u0431\u0443\u043a\u043e\u0432\u044b\u0439 \u0437\u0430\u0431\u043e\u0440",
    tab: [[4, 112]]
  },
  298: {
    id: "298",
    type: "minecraft:crimson_fence",
    name: "\u0411\u0430\u0433\u0440\u043e\u0432\u044b\u0439 \u0437\u0430\u0431\u043e\u0440",
    tab: [[4, 125]]
  },
  299: {
    id: "299",
    type: "minecraft:warped_fence",
    name: "\u0418\u0441\u043a\u0430\u0436\u0451\u043d\u043d\u044b\u0439 \u0437\u0430\u0431\u043e\u0440",
    tab: [[4, 138]]
  },
  300: {
    id: "300", type: "minecraft:pumpkin", name: "\u0422\u044b\u043a\u0432\u0430",
    tab: [[8, 208]]
  },
  301: {
    id: "301",
    type: "minecraft:carved_pumpkin",
    name: "\u0412\u044b\u0440\u0435\u0437\u0430\u043d\u043d\u0430\u044f \u0442\u044b\u043a\u0432\u0430",
    tab: [[8, 209]]
  },
  302: {
    id: "302",
    type: "minecraft:jack_o_lantern",
    name: "\u0421\u0432\u0435\u0442\u0438\u043b\u044c\u043d\u0438\u043a \u0414\u0436\u0435\u043a\u0430",
    tab: [[8, 210]]
  },
  303: {
    id: "303",
    type: "minecraft:netherrack",
    name: "\u041d\u0435\u0437\u0435\u0440\u0430\u043a",
    tab: [[4, 251], [8, 35]]
  },
  304: {
    id: "304", type: "minecraft:soul_sand", name: "\u041f\u0435\u0441\u043e\u043a \u0434\u0443\u0448",
    tab: [[8, 38]]
  },
  305: {
    id: "305",
    type: "minecraft:soul_soil",
    name: "\u041f\u043e\u0447\u0432\u0430 \u0434\u0443\u0448",
    tab: [[8, 39]]
  },
  306: {
    id: "306",
    type: "minecraft:basalt",
    name: "\u0411\u0430\u0437\u0430\u043b\u044c\u0442",
    tab: [[4, 263], [8, 42]]
  },
  307: {
    id: "307",
    type: "minecraft:polished_basalt",
    name: "\u041f\u043e\u043b\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0439 \u0431\u0430\u0437\u0430\u043b\u044c\u0442",
    tab: [[4, 265]]
  },
  308: {
    id: "308",
    type: "minecraft:smooth_basalt",
    name: "\u0413\u043b\u0430\u0434\u043a\u0438\u0439 \u0431\u0430\u0437\u0430\u043b\u044c\u0442",
    tab: [[4, 264], [8, 43]]
  },
  309: {
    id: "309",
    type: "minecraft:soul_torch",
    name: "\u0424\u0430\u043a\u0435\u043b \u0434\u0443\u0448",
    tab: [[6, 1]]
  },
  310: {
    id: "310",
    type: "minecraft:glowstone",
    name: "\u0421\u0432\u0435\u0442\u043e\u043a\u0430\u043c\u0435\u043d\u044c",
    tab: [[8, 67], [6, 9]]
  },
  311: {
    id: "311",
    type: "minecraft:infested_stone",
    name: "\u0417\u0430\u0440\u0430\u0436\u0451\u043d\u043d\u044b\u0439 \u043a\u0430\u043c\u0435\u043d\u044c",
    tab: [[6, 189]]
  },
  312: {
    id: "312",
    type: "minecraft:infested_cobblestone",
    name: "\u0417\u0430\u0440\u0430\u0436\u0451\u043d\u043d\u044b\u0439 \u0431\u0443\u043b\u044b\u0436\u043d\u0438\u043a",
    tab: [[6, 190]]
  },
  313: {
    id: "313",
    type: "minecraft:infested_stone_bricks",
    name: "\u0417\u0430\u0440\u0430\u0436\u0451\u043d\u043d\u044b\u0435 \u043a\u0430\u043c\u0435\u043d\u043d\u044b\u0435 \u043a\u0438\u0440\u043f\u0438\u0447\u0438",
    tab: [[6, 191]]
  },
  314: {
    id: "314",
    type: "minecraft:infested_mossy_stone_bricks",
    name: "\u0417\u0430\u0440\u0430\u0436\u0451\u043d\u043d\u044b\u0435 \u0437\u0430\u043c\u0448\u0435\u043b\u044b\u0435 \u043a\u0430\u043c\u0435\u043d\u043d\u044b\u0435 \u043a\u0438\u0440\u043f\u0438\u0447\u0438",
    tab: [[6, 192]]
  },
  315: {
    id: "315",
    type: "minecraft:infested_cracked_stone_bricks",
    name: "\u0417\u0430\u0440\u0430\u0436\u0451\u043d\u043d\u044b\u0435 \u043f\u043e\u0442\u0440\u0435\u0441\u043a\u0430\u0432\u0448\u0438\u0435\u0441\u044f \u043a\u0430\u043c\u0435\u043d\u043d\u044b\u0435 \u043a\u0438\u0440\u043f\u0438\u0447\u0438",
    tab: [[6, 193]]
  },
  316: {
    id: "316",
    type: "minecraft:infested_chiseled_stone_bricks",
    name: "\u0417\u0430\u0440\u0430\u0436\u0451\u043d\u043d\u044b\u0435 \u0440\u0435\u0437\u043d\u044b\u0435 \u043a\u0430\u043c\u0435\u043d\u043d\u044b\u0435 \u043a\u0438\u0440\u043f\u0438\u0447\u0438",
    tab: [[6, 194]]
  },
  317: {
    id: "317",
    type: "minecraft:infested_deepslate",
    name: "\u0417\u0430\u0440\u0430\u0436\u0451\u043d\u043d\u044b\u0439 \u0433\u043b\u0443\u0431\u0438\u043d\u043d\u044b\u0439 \u0441\u043b\u0430\u043d\u0435\u0446",
    tab: [[6, 195]]
  },
  318: {
    id: "318",
    type: "minecraft:stone_bricks",
    name: "\u041a\u0430\u043c\u0435\u043d\u043d\u044b\u0435 \u043a\u0438\u0440\u043f\u0438\u0447\u0438",
    tab: [[4, 159]]
  },
  319: {
    id: "319",
    type: "minecraft:mossy_stone_bricks",
    name: "\u0417\u0430\u043c\u0448\u0435\u043b\u044b\u0435 \u043a\u0430\u043c\u0435\u043d\u043d\u044b\u0435 \u043a\u0438\u0440\u043f\u0438\u0447\u0438",
    tab: [[4, 165]]
  },
  320: {
    id: "320",
    type: "minecraft:cracked_stone_bricks",
    name: "\u041f\u043e\u0442\u0440\u0435\u0441\u043a\u0430\u0432\u0448\u0438\u0435\u0441\u044f \u043a\u0430\u043c\u0435\u043d\u043d\u044b\u0435 \u043a\u0438\u0440\u043f\u0438\u0447\u0438",
    tab: [[4, 160]]
  },
  321: {
    id: "321",
    type: "minecraft:chiseled_stone_bricks",
    name: "\u0420\u0435\u0437\u043d\u044b\u0435 \u043a\u0430\u043c\u0435\u043d\u043d\u044b\u0435 \u043a\u0438\u0440\u043f\u0438\u0447\u0438",
    tab: [[4, 164]]
  },
  322: {
    id: "322", type: "minecraft:packed_mud",
    name: "\u041f\u043b\u043e\u0442\u043d\u0430\u044f \u0433\u0440\u044f\u0437\u044c", tab: [[4, 215]]
  },
  323: {
    id: "323",
    type: "minecraft:mud_bricks",
    name: "\u0421\u0430\u043c\u0430\u043d\u043d\u044b\u0435 \u043a\u0438\u0440\u043f\u0438\u0447\u0438",
    tab: [[4, 216]]
  },
  324: {
    id: "324",
    type: "minecraft:deepslate_bricks",
    name: "\u0413\u043b\u0443\u0431\u0438\u043d\u043d\u043e\u0441\u043b\u0430\u043d\u0446\u0435\u0432\u044b\u0435 \u043a\u0438\u0440\u043f\u0438\u0447\u0438",
    tab: [[4, 200]]
  },
  325: {
    id: "325",
    type: "minecraft:cracked_deepslate_bricks",
    name: "\u041f\u043e\u0442\u0440\u0435\u0441\u043a\u0430\u0432\u0448\u0438\u0435\u0441\u044f \u0433\u043b\u0443\u0431\u0438\u043d\u043d\u043e\u0441\u043b\u0430\u043d\u0446\u0435\u0432\u044b\u0435 \u043a\u0438\u0440\u043f\u0438\u0447\u0438",
    tab: [[4, 201]]
  },
  326: {
    id: "326",
    type: "minecraft:deepslate_tiles",
    name: "\u0413\u043b\u0443\u0431\u0438\u043d\u043d\u043e\u0441\u043b\u0430\u043d\u0446\u0435\u0432\u044b\u0439 \u043f\u043b\u0438\u0442\u043d\u044f\u043a",
    tab: [[4, 205]]
  },
  327: {
    id: "327",
    type: "minecraft:cracked_deepslate_tiles",
    name: "\u041f\u043e\u0442\u0440\u0435\u0441\u043a\u0430\u0432\u0448\u0438\u0439\u0441\u044f \u0433\u043b\u0443\u0431\u0438\u043d\u043d\u043e\u0441\u043b\u0430\u043d\u0446\u0435\u0432\u044b\u0439 \u043f\u043b\u0438\u0442\u043d\u044f\u043a",
    tab: [[4, 206]]
  },
  328: {
    id: "328",
    type: "minecraft:chiseled_deepslate",
    name: "\u0420\u0435\u0437\u043d\u043e\u0439 \u0433\u043b\u0443\u0431\u0438\u043d\u043d\u044b\u0439 \u0441\u043b\u0430\u043d\u0435\u0446",
    tab: [[4, 195]]
  },
  329: {
    id: "329",
    type: "minecraft:reinforced_deepslate",
    name: "\u0423\u043a\u0440\u0435\u043f\u043b\u0451\u043d\u043d\u044b\u0439 \u0433\u043b\u0443\u0431\u0438\u043d\u043d\u044b\u0439 \u0441\u043b\u0430\u043d\u0435\u0446",
    tab: [[4, 210]]
  },
  330: {
    id: "330",
    type: "minecraft:brown_mushroom_block",
    name: "\u0411\u043b\u043e\u043a \u043a\u043e\u0440\u0438\u0447\u043d\u0435\u0432\u043e\u0433\u043e \u0433\u0440\u0438\u0431\u0430",
    tab: [[8, 97]]
  },
  331: {
    id: "331",
    type: "minecraft:red_mushroom_block",
    name: "\u0411\u043b\u043e\u043a \u043a\u0440\u0430\u0441\u043d\u043e\u0433\u043e \u0433\u0440\u0438\u0431\u0430",
    tab: [[8, 98]]
  },
  332: {
    id: "332",
    type: "minecraft:mushroom_stem",
    name: "\u041d\u043e\u0436\u043a\u0430 \u0433\u0440\u0438\u0431\u0430",
    tab: [[8, 84]]
  },
  333: {
    id: "333",
    type: "minecraft:iron_bars",
    name: "\u0416\u0435\u043b\u0435\u0437\u043d\u044b\u0435 \u043f\u0440\u0443\u0442\u044c\u044f",
    tab: [[4, 294]]
  },
  334: {id: "334", type: "minecraft:chain", name: "\u0426\u0435\u043f\u044c", tab: [[4, 298], [6, 5]]},
  335: {
    id: "335",
    type: "minecraft:glass_pane",
    name: "\u0421\u0442\u0435\u043a\u043b\u044f\u043d\u043d\u0430\u044f \u043f\u0430\u043d\u0435\u043b\u044c",
    tab: [[5, 115]]
  },
  336: {id: "336", type: "minecraft:melon", name: "\u0410\u0440\u0431\u0443\u0437", tab: [[8, 207]]},
  337: {id: "337", type: "minecraft:vine", name: "\u041b\u0438\u0430\u043d\u044b", tab: [[8, 143]]},
  338: {
    id: "338",
    type: "minecraft:glow_lichen",
    name: "\u0421\u0432\u0435\u0442\u044f\u0449\u0438\u0439\u0441\u044f \u043b\u0438\u0448\u0430\u0439\u043d\u0438\u043a",
    tab: [[8, 155], [6, 15]]
  },
  339: {
    id: "339",
    type: "minecraft:brick_stairs",
    name: "\u041a\u0438\u0440\u043f\u0438\u0447\u043d\u044b\u0435 \u0441\u0442\u0443\u043f\u0435\u043d\u044c\u043a\u0438",
    tab: [[4, 212]]
  },
  340: {
    id: "340",
    type: "minecraft:stone_brick_stairs",
    name: "\u0421\u0442\u0443\u043f\u0435\u043d\u044c\u043a\u0438 \u0438\u0437 \u043a\u0430\u043c\u0435\u043d\u043d\u043e\u0433\u043e \u043a\u0438\u0440\u043f\u0438\u0447\u0430",
    tab: [[4, 161]]
  },
  341: {
    id: "341",
    type: "minecraft:mud_brick_stairs",
    name: "\u0421\u0430\u043c\u0430\u043d\u043d\u044b\u0435 \u0441\u0442\u0443\u043f\u0435\u043d\u044c\u043a\u0438",
    tab: [[4, 217]]
  },
  342: {
    id: "342", type: "minecraft:mycelium", name: "\u041c\u0438\u0446\u0435\u043b\u0438\u0439",
    tab: [[8, 2]]
  },
  343: {
    id: "343",
    type: "minecraft:lily_pad",
    name: "\u041a\u0443\u0432\u0448\u0438\u043d\u043a\u0430",
    tab: [[8, 170]]
  },
  344: {
    id: "344",
    type: "minecraft:nether_bricks",
    name: "\u041d\u0435\u0437\u0435\u0440\u0441\u043a\u0438\u0435 \u043a\u0438\u0440\u043f\u0438\u0447\u0438",
    tab: [[4, 252]]
  },
  345: {
    id: "345",
    type: "minecraft:cracked_nether_bricks",
    name: "\u041f\u043e\u0442\u0440\u0435\u0441\u043a\u0430\u0432\u0448\u0438\u0435\u0441\u044f \u043d\u0435\u0437\u0435\u0440\u0441\u043a\u0438\u0435 \u043a\u0438\u0440\u043f\u0438\u0447\u0438",
    tab: [[4, 253]]
  },
  346: {
    id: "346",
    type: "minecraft:chiseled_nether_bricks",
    name: "\u0420\u0435\u0437\u043d\u044b\u0435 \u043d\u0435\u0437\u0435\u0440\u0441\u043a\u0438\u0435 \u043a\u0438\u0440\u043f\u0438\u0447\u0438",
    tab: [[4, 258]]
  },
  347: {
    id: "347",
    type: "minecraft:nether_brick_fence",
    name: "\u0417\u0430\u0431\u043e\u0440 \u0438\u0437 \u043d\u0435\u0437\u0435\u0440\u0441\u043a\u043e\u0433\u043e \u043a\u0438\u0440\u043f\u0438\u0447\u0430",
    tab: [[4, 257]]
  },
  348: {
    id: "348",
    type: "minecraft:nether_brick_stairs",
    name: "\u0421\u0442\u0443\u043f\u0435\u043d\u044c\u043a\u0438 \u0438\u0437 \u043d\u0435\u0437\u0435\u0440\u0441\u043a\u043e\u0433\u043e \u043a\u0438\u0440\u043f\u0438\u0447\u0430",
    tab: [[4, 254]]
  },
  349: {id: "349", type: "minecraft:sculk", name: "\u0421\u043a\u0430\u043b\u043a", tab: [[8, 219]]},
  350: {
    id: "350",
    type: "minecraft:sculk_vein",
    name: "\u0421\u043a\u0430\u043b\u043a\u043e\u0432\u0430\u044f \u0436\u0438\u043b\u0430",
    tab: [[8, 220]]
  },
  351: {
    id: "351",
    type: "minecraft:sculk_catalyst",
    name: "\u0421\u043a\u0430\u043b\u043a\u043e\u0432\u044b\u0439 \u043a\u0430\u0442\u0430\u043b\u0438\u0437\u0430\u0442\u043e\u0440",
    tab: [[8, 221]]
  },
  352: {
    id: "352",
    type: "minecraft:sculk_shrieker",
    name: "\u0421\u043a\u0430\u043b\u043a\u043e\u0432\u044b\u0439 \u043a\u0440\u0438\u043a\u0443\u043d",
    tab: [[8, 222], [7, 15]]
  },
  353: {
    id: "353",
    type: "minecraft:enchanting_table",
    name: "\u0427\u0430\u0440\u043e\u0434\u0435\u0439\u0441\u043a\u0438\u0439 \u0441\u0442\u043e\u043b",
    tab: [[6, 35]]
  },
  354: {
    id: "354",
    type: "minecraft:end_portal_frame",
    name: "\u0420\u0430\u043c\u043a\u0430 \u043f\u043e\u0440\u0442\u0430\u043b\u0430 \u0432 \u042d\u043d\u0434",
    tab: [[6, 187]]
  },
  355: {
    id: "355",
    type: "minecraft:end_stone",
    name: "\u042d\u043d\u0434\u0435\u0440\u043d\u044f\u043a",
    tab: [[4, 283], [8, 44]]
  },
  356: {
    id: "356",
    type: "minecraft:end_stone_bricks",
    name: "\u042d\u043d\u0434\u0435\u0440\u043d\u044f\u043a\u043e\u0432\u044b\u0435 \u043a\u0438\u0440\u043f\u0438\u0447\u0438",
    tab: [[4, 284]]
  },
  357: {
    id: "357",
    type: "minecraft:dragon_egg",
    name: "\u042f\u0439\u0446\u043e \u0434\u0440\u0430\u043a\u043e\u043d\u0430",
    tab: [[6, 186]]
  },
  358: {
    id: "358",
    type: "minecraft:sandstone_stairs",
    name: "\u041f\u0435\u0441\u0447\u0430\u043d\u0438\u043a\u043e\u0432\u044b\u0435 \u0441\u0442\u0443\u043f\u0435\u043d\u044c\u043a\u0438",
    tab: [[4, 221]]
  },
  359: {
    id: "359", type: "minecraft:ender_chest",
    name: "\u042d\u043d\u0434\u0435\u0440-\u0441\u0443\u043d\u0434\u0443\u043a", tab: [[6, 110]]
  },
  360: {
    id: "360",
    type: "minecraft:emerald_block",
    name: "\u0418\u0437\u0443\u043c\u0440\u0443\u0434\u043d\u044b\u0439 \u0431\u043b\u043e\u043a",
    tab: [[4, 302]]
  },
  361: {
    id: "361",
    type: "minecraft:oak_stairs",
    name: "\u0414\u0443\u0431\u043e\u0432\u044b\u0435 \u0441\u0442\u0443\u043f\u0435\u043d\u044c\u043a\u0438",
    tab: [[4, 5]]
  },
  362: {
    id: "362",
    type: "minecraft:spruce_stairs",
    name: "\u0415\u043b\u043e\u0432\u044b\u0435 \u0441\u0442\u0443\u043f\u0435\u043d\u044c\u043a\u0438",
    tab: [[4, 18]]
  },
  363: {
    id: "363",
    type: "minecraft:birch_stairs",
    name: "\u0411\u0435\u0440\u0451\u0437\u043e\u0432\u044b\u0435 \u0441\u0442\u0443\u043f\u0435\u043d\u044c\u043a\u0438",
    tab: [[4, 31]]
  },
  364: {
    id: "364",
    type: "minecraft:jungle_stairs",
    name: "\u0421\u0442\u0443\u043f\u0435\u043d\u044c\u043a\u0438 \u0438\u0437 \u0442\u0440\u043e\u043f\u0438\u0447\u0435\u0441\u043a\u043e\u0433\u043e \u0434\u0435\u0440\u0435\u0432\u0430",
    tab: [[4, 44]]
  },
  365: {
    id: "365",
    type: "minecraft:acacia_stairs",
    name: "\u0410\u043a\u0430\u0446\u0438\u0435\u0432\u044b\u0435 \u0441\u0442\u0443\u043f\u0435\u043d\u044c\u043a\u0438",
    tab: [[4, 57]]
  },
  366: {
    id: "366",
    type: "minecraft:cherry_stairs",
    name: "\u0412\u0438\u0448\u043d\u0451\u0432\u044b\u0435 \u0441\u0442\u0443\u043f\u0435\u043d\u044c\u043a\u0438",
    tab: [[4, 96]]
  },
  367: {
    id: "367",
    type: "minecraft:dark_oak_stairs",
    name: "\u0421\u0442\u0443\u043f\u0435\u043d\u044c\u043a\u0438 \u0438\u0437 \u0442\u0451\u043c\u043d\u043e\u0433\u043e \u0434\u0443\u0431\u0430",
    tab: [[4, 70]]
  },
  368: {
    id: "368",
    type: "minecraft:mangrove_stairs",
    name: "\u041c\u0430\u043d\u0433\u0440\u043e\u0432\u044b\u0435 \u0441\u0442\u0443\u043f\u0435\u043d\u044c\u043a\u0438",
    tab: [[4, 83]]
  },
  369: {
    id: "369",
    type: "minecraft:bamboo_stairs",
    name: "\u0411\u0430\u043c\u0431\u0443\u043a\u043e\u0432\u044b\u0435 \u0441\u0442\u0443\u043f\u0435\u043d\u044c\u043a\u0438",
    tab: [[4, 108]]
  },
  370: {
    id: "370",
    type: "minecraft:bamboo_mosaic_stairs",
    name: "\u0421\u0442\u0443\u043f\u0435\u043d\u044c\u043a\u0438 \u0438\u0437 \u0431\u0430\u043c\u0431\u0443\u043a\u043e\u0432\u043e\u0439 \u043c\u043e\u0437\u0430\u0438\u043a\u0438",
    tab: [[4, 109]]
  },
  371: {
    id: "371",
    type: "minecraft:crimson_stairs",
    name: "\u0411\u0430\u0433\u0440\u043e\u0432\u044b\u0435 \u0441\u0442\u0443\u043f\u0435\u043d\u044c\u043a\u0438",
    tab: [[4, 123]]
  },
  372: {
    id: "372",
    type: "minecraft:warped_stairs",
    name: "\u0418\u0441\u043a\u0430\u0436\u0451\u043d\u043d\u044b\u0435 \u0441\u0442\u0443\u043f\u0435\u043d\u044c\u043a\u0438",
    tab: [[4, 136]]
  },
  373: {
    id: "373",
    type: "minecraft:command_block",
    name: "\u041a\u043e\u043c\u0430\u043d\u0434\u043d\u044b\u0439 \u0431\u043b\u043e\u043a"
  },
  374: {id: "374", type: "minecraft:beacon", name: "\u041c\u0430\u044f\u043a", tab: [[6, 40]]},
  375: {
    id: "375",
    type: "minecraft:cobblestone_wall",
    name: "\u0411\u0443\u043b\u044b\u0436\u043d\u0430\u044f \u043e\u0433\u0440\u0430\u0434\u0430",
    tab: [[4, 152]]
  },
  376: {
    id: "376",
    type: "minecraft:mossy_cobblestone_wall",
    name: "\u0417\u0430\u043c\u0448\u0435\u043b\u0430\u044f \u0431\u0443\u043b\u044b\u0436\u043d\u0430\u044f \u043e\u0433\u0440\u0430\u0434\u0430",
    tab: [[4, 156]]
  },
  377: {
    id: "377",
    type: "minecraft:brick_wall",
    name: "\u041a\u0438\u0440\u043f\u0438\u0447\u043d\u0430\u044f \u043e\u0433\u0440\u0430\u0434\u0430",
    tab: [[4, 214]]
  },
  378: {
    id: "378",
    type: "minecraft:prismarine_wall",
    name: "\u041f\u0440\u0438\u0437\u043c\u0430\u0440\u0438\u043d\u043e\u0432\u0430\u044f \u043e\u0433\u0440\u0430\u0434\u0430",
    tab: [[4, 244]]
  },
  379: {
    id: "379",
    type: "minecraft:red_sandstone_wall",
    name: "\u041e\u0433\u0440\u0430\u0434\u0430 \u0438\u0437 \u043a\u0440\u0430\u0441\u043d\u043e\u0433\u043e \u043f\u0435\u0441\u0447\u0430\u043d\u0438\u043a\u0430",
    tab: [[4, 233]]
  },
  380: {
    id: "380",
    type: "minecraft:mossy_stone_brick_wall",
    name: "\u041e\u0433\u0440\u0430\u0434\u0430 \u0438\u0437 \u0437\u0430\u043c\u0448\u0435\u043b\u043e\u0433\u043e \u043a\u0430\u043c\u0435\u043d\u043d\u043e\u0433\u043e \u043a\u0438\u0440\u043f\u0438\u0447\u0430",
    tab: [[4, 168]]
  },
  381: {
    id: "381",
    type: "minecraft:granite_wall",
    name: "\u0413\u0440\u0430\u043d\u0438\u0442\u043d\u0430\u044f \u043e\u0433\u0440\u0430\u0434\u0430",
    tab: [[4, 172]]
  },
  382: {
    id: "382",
    type: "minecraft:stone_brick_wall",
    name: "\u041e\u0433\u0440\u0430\u0434\u0430 \u0438\u0437 \u043a\u0430\u043c\u0435\u043d\u043d\u043e\u0433\u043e \u043a\u0438\u0440\u043f\u0438\u0447\u0430",
    tab: [[4, 163]]
  },
  383: {
    id: "383",
    type: "minecraft:mud_brick_wall",
    name: "\u0421\u0430\u043c\u0430\u043d\u043d\u0430\u044f \u043e\u0433\u0440\u0430\u0434\u0430",
    tab: [[4, 219]]
  },
  384: {
    id: "384",
    type: "minecraft:nether_brick_wall",
    name: "\u041e\u0433\u0440\u0430\u0434\u0430 \u0438\u0437 \u043d\u0435\u0437\u0435\u0440\u0441\u043a\u043e\u0433\u043e \u043a\u0438\u0440\u043f\u0438\u0447\u0430",
    tab: [[4, 256]]
  },
  385: {
    id: "385",
    type: "minecraft:andesite_wall",
    name: "\u0410\u043d\u0434\u0435\u0437\u0438\u0442\u043e\u0432\u0430\u044f \u043e\u0433\u0440\u0430\u0434\u0430",
    tab: [[4, 186]]
  },
  386: {
    id: "386",
    type: "minecraft:red_nether_brick_wall",
    name: "\u041e\u0433\u0440\u0430\u0434\u0430 \u0438\u0437 \u043a\u0440\u0430\u0441\u043d\u043e\u0433\u043e \u043d\u0435\u0437\u0435\u0440\u0441\u043a\u043e\u0433\u043e \u043a\u0438\u0440\u043f\u0438\u0447\u0430",
    tab: [[4, 262]]
  },
  387: {
    id: "387",
    type: "minecraft:sandstone_wall",
    name: "\u041f\u0435\u0441\u0447\u0430\u043d\u0438\u043a\u043e\u0432\u0430\u044f \u043e\u0433\u0440\u0430\u0434\u0430",
    tab: [[4, 223]]
  },
  388: {
    id: "388",
    type: "minecraft:end_stone_brick_wall",
    name: "\u041e\u0433\u0440\u0430\u0434\u0430 \u0438\u0437 \u044d\u043d\u0434\u0435\u0440\u043d\u044f\u043a\u043e\u0432\u043e\u0433\u043e \u043a\u0438\u0440\u043f\u0438\u0447\u0430",
    tab: [[4, 287]]
  },
  389: {
    id: "389",
    type: "minecraft:diorite_wall",
    name: "\u0414\u0438\u043e\u0440\u0438\u0442\u043e\u0432\u0430\u044f \u043e\u0433\u0440\u0430\u0434\u0430",
    tab: [[4, 179]]
  },
  390: {
    id: "390",
    type: "minecraft:blackstone_wall",
    name: "\u0427\u0435\u0440\u043d\u0438\u0442\u043d\u0430\u044f \u043e\u0433\u0440\u0430\u0434\u0430",
    tab: [[4, 270]]
  },
  391: {
    id: "391",
    type: "minecraft:polished_blackstone_wall",
    name: "\u041e\u0433\u0440\u0430\u0434\u0430 \u0438\u0437 \u043f\u043e\u043b\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u0433\u043e \u0447\u0435\u0440\u043d\u0438\u0442\u0430",
    tab: [[4, 275]]
  },
  392: {
    id: "392",
    type: "minecraft:polished_blackstone_brick_wall",
    name: "\u041e\u0433\u0440\u0430\u0434\u0430 \u0438\u0437 \u043f\u043e\u043b\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e-\u0447\u0435\u0440\u043d\u0438\u0442\u043d\u043e\u0433\u043e \u043a\u0438\u0440\u043f\u0438\u0447\u0430",
    tab: [[4, 282]]
  },
  393: {
    id: "393",
    type: "minecraft:cobbled_deepslate_wall",
    name: "\u041e\u0433\u0440\u0430\u0434\u0430 \u0438\u0437 \u043a\u043e\u043b\u043e\u0442\u043e\u0433\u043e \u0433\u043b\u0443\u0431\u0438\u043d\u043d\u043e\u0433\u043e \u0441\u043b\u0430\u043d\u0446\u0430",
    tab: [[4, 194]]
  },
  394: {
    id: "394",
    type: "minecraft:polished_deepslate_wall",
    name: "\u041e\u0433\u0440\u0430\u0434\u0430 \u0438\u0437 \u043f\u043e\u043b\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u0433\u043e \u0433\u043b\u0443\u0431\u0438\u043d\u043d\u043e\u0433\u043e \u0441\u043b\u0430\u043d\u0446\u0430",
    tab: [[4, 199]]
  },
  395: {
    id: "395",
    type: "minecraft:deepslate_brick_wall",
    name: "\u041e\u0433\u0440\u0430\u0434\u0430 \u0438\u0437 \u0433\u043b\u0443\u0431\u0438\u043d\u043d\u043e\u0441\u043b\u0430\u043d\u0446\u0435\u0432\u043e\u0433\u043e \u043a\u0438\u0440\u043f\u0438\u0447\u0430",
    tab: [[4, 204]]
  },
  396: {
    id: "396",
    type: "minecraft:deepslate_tile_wall",
    name: "\u041e\u0433\u0440\u0430\u0434\u0430 \u0438\u0437 \u0433\u043b\u0443\u0431\u0438\u043d\u043d\u043e\u0441\u043b\u0430\u043d\u0446\u0435\u0432\u043e\u0433\u043e \u043f\u043b\u0438\u0442\u043d\u044f\u043a\u0430",
    tab: [[4, 209]]
  },
  397: {
    id: "397",
    type: "minecraft:anvil",
    name: "\u041d\u0430\u043a\u043e\u0432\u0430\u043b\u044c\u043d\u044f",
    tab: [[6, 29]]
  },
  398: {
    id: "398",
    type: "minecraft:chipped_anvil",
    name: "\u041f\u043e\u0432\u0440\u0435\u0436\u0434\u0451\u043d\u043d\u0430\u044f \u043d\u0430\u043a\u043e\u0432\u0430\u043b\u044c\u043d\u044f",
    tab: [[6, 30]]
  },
  399: {
    id: "399",
    type: "minecraft:damaged_anvil",
    name: "\u0420\u0430\u0437\u0431\u0438\u0442\u0430\u044f \u043d\u0430\u043a\u043e\u0432\u0430\u043b\u044c\u043d\u044f",
    tab: [[6,
      31]]
  },
  400: {
    id: "400",
    type: "minecraft:chiseled_quartz_block",
    name: "\u0420\u0435\u0437\u043d\u043e\u0439 \u043a\u0432\u0430\u0440\u0446\u0435\u0432\u044b\u0439 \u0431\u043b\u043e\u043a",
    tab: [[4, 309]]
  },
  401: {
    id: "401",
    type: "minecraft:quartz_block",
    name: "\u041a\u0432\u0430\u0440\u0446\u0435\u0432\u044b\u0439 \u0431\u043b\u043e\u043a",
    tab: [[4, 306]]
  },
  402: {
    id: "402",
    type: "minecraft:quartz_bricks",
    name: "\u041a\u0432\u0430\u0440\u0446\u0435\u0432\u044b\u0435 \u043a\u0438\u0440\u043f\u0438\u0447\u0438",
    tab: [[4,
      310]]
  },
  403: {
    id: "403",
    type: "minecraft:quartz_pillar",
    name: "\u041a\u0432\u0430\u0440\u0446\u0435\u0432\u0430\u044f \u043a\u043e\u043b\u043e\u043d\u043d\u0430",
    tab: [[4, 311]]
  },
  404: {
    id: "404",
    type: "minecraft:quartz_stairs",
    name: "\u041a\u0432\u0430\u0440\u0446\u0435\u0432\u044b\u0435 \u0441\u0442\u0443\u043f\u0435\u043d\u044c\u043a\u0438",
    tab: [[4, 307]]
  },
  405: {
    id: "405",
    type: "minecraft:white_terracotta",
    name: "\u0411\u0435\u043b\u0430\u044f \u043a\u0435\u0440\u0430\u043c\u0438\u043a\u0430",
    tab: [[5, 33]]
  },
  406: {
    id: "406",
    type: "minecraft:orange_terracotta",
    name: "\u041e\u0440\u0430\u043d\u0436\u0435\u0432\u0430\u044f \u043a\u0435\u0440\u0430\u043c\u0438\u043a\u0430",
    tab: [[5, 39]]
  },
  407: {
    id: "407",
    type: "minecraft:magenta_terracotta",
    name: "\u041f\u0443\u0440\u043f\u0443\u0440\u043d\u0430\u044f \u043a\u0435\u0440\u0430\u043c\u0438\u043a\u0430",
    tab: [[5, 47]]
  },
  408: {
    id: "408",
    type: "minecraft:light_blue_terracotta",
    name: "\u0413\u043e\u043b\u0443\u0431\u0430\u044f \u043a\u0435\u0440\u0430\u043c\u0438\u043a\u0430",
    tab: [[5, 44]]
  },
  409: {
    id: "409",
    type: "minecraft:yellow_terracotta",
    name: "\u0416\u0451\u043b\u0442\u0430\u044f \u043a\u0435\u0440\u0430\u043c\u0438\u043a\u0430",
    tab: [[5, 40]]
  },
  410: {
    id: "410",
    type: "minecraft:lime_terracotta",
    name: "\u041b\u0430\u0439\u043c\u043e\u0432\u0430\u044f \u043a\u0435\u0440\u0430\u043c\u0438\u043a\u0430",
    tab: [[5, 41]]
  },
  411: {
    id: "411",
    type: "minecraft:pink_terracotta",
    name: "\u0420\u043e\u0437\u043e\u0432\u0430\u044f \u043a\u0435\u0440\u0430\u043c\u0438\u043a\u0430",
    tab: [[5, 48]]
  },
  412: {
    id: "412", type: "minecraft:gray_terracotta",
    name: "\u0421\u0435\u0440\u0430\u044f \u043a\u0435\u0440\u0430\u043c\u0438\u043a\u0430", tab: [[5, 35]]
  },
  413: {
    id: "413",
    type: "minecraft:light_gray_terracotta",
    name: "\u0421\u0432\u0435\u0442\u043b\u043e-\u0441\u0435\u0440\u0430\u044f \u043a\u0435\u0440\u0430\u043c\u0438\u043a\u0430",
    tab: [[5, 34]]
  },
  414: {
    id: "414",
    type: "minecraft:cyan_terracotta",
    name: "\u0411\u0438\u0440\u044e\u0437\u043e\u0432\u0430\u044f \u043a\u0435\u0440\u0430\u043c\u0438\u043a\u0430",
    tab: [[5, 43]]
  },
  415: {
    id: "415",
    type: "minecraft:purple_terracotta",
    name: "\u0424\u0438\u043e\u043b\u0435\u0442\u043e\u0432\u0430\u044f \u043a\u0435\u0440\u0430\u043c\u0438\u043a\u0430",
    tab: [[5, 46]]
  },
  416: {
    id: "416",
    type: "minecraft:blue_terracotta",
    name: "\u0421\u0438\u043d\u044f\u044f \u043a\u0435\u0440\u0430\u043c\u0438\u043a\u0430",
    tab: [[5, 45]]
  },
  417: {
    id: "417",
    type: "minecraft:brown_terracotta",
    name: "\u041a\u043e\u0440\u0438\u0447\u043d\u0435\u0432\u0430\u044f \u043a\u0435\u0440\u0430\u043c\u0438\u043a\u0430",
    tab: [[5, 37]]
  },
  418: {
    id: "418", type: "minecraft:green_terracotta",
    name: "\u0417\u0435\u043b\u0451\u043d\u0430\u044f \u043a\u0435\u0440\u0430\u043c\u0438\u043a\u0430", tab: [[5, 42]]
  },
  419: {
    id: "419",
    type: "minecraft:red_terracotta",
    name: "\u041a\u0440\u0430\u0441\u043d\u0430\u044f \u043a\u0435\u0440\u0430\u043c\u0438\u043a\u0430",
    tab: [[5, 38]]
  },
  420: {
    id: "420",
    type: "minecraft:black_terracotta",
    name: "\u0427\u0451\u0440\u043d\u0430\u044f \u043a\u0435\u0440\u0430\u043c\u0438\u043a\u0430",
    tab: [[5, 36]]
  },
  421: {id: "421", type: "minecraft:barrier", name: "\u0411\u0430\u0440\u044c\u0435\u0440"},
  422: {id: "422", type: "minecraft:light", name: "\u0421\u0432\u0435\u0442"},
  423: {
    id: "423",
    type: "minecraft:hay_block",
    name: "\u0421\u043d\u043e\u043f \u0441\u0435\u043d\u0430",
    tab: [[8, 211]]
  },
  424: {
    id: "424",
    type: "minecraft:white_carpet",
    name: "\u0411\u0435\u043b\u044b\u0439 \u043a\u043e\u0432\u0451\u0440",
    tab: [[5, 16]]
  },
  425: {
    id: "425",
    type: "minecraft:orange_carpet",
    name: "\u041e\u0440\u0430\u043d\u0436\u0435\u0432\u044b\u0439 \u043a\u043e\u0432\u0451\u0440",
    tab: [[5, 22]]
  },
  426: {
    id: "426", type: "minecraft:magenta_carpet",
    name: "\u041f\u0443\u0440\u043f\u0443\u0440\u043d\u044b\u0439 \u043a\u043e\u0432\u0451\u0440", tab: [[5, 30]]
  },
  427: {
    id: "427",
    type: "minecraft:light_blue_carpet",
    name: "\u0413\u043e\u043b\u0443\u0431\u043e\u0439 \u043a\u043e\u0432\u0451\u0440",
    tab: [[5, 27]]
  },
  428: {
    id: "428",
    type: "minecraft:yellow_carpet",
    name: "\u0416\u0451\u043b\u0442\u044b\u0439 \u043a\u043e\u0432\u0451\u0440",
    tab: [[5, 23]]
  },
  429: {
    id: "429",
    type: "minecraft:lime_carpet",
    name: "\u041b\u0430\u0439\u043c\u043e\u0432\u044b\u0439 \u043a\u043e\u0432\u0451\u0440",
    tab: [[5, 24]]
  },
  430: {
    id: "430",
    type: "minecraft:pink_carpet",
    name: "\u0420\u043e\u0437\u043e\u0432\u044b\u0439 \u043a\u043e\u0432\u0451\u0440",
    tab: [[5, 31]]
  },
  431: {
    id: "431",
    type: "minecraft:gray_carpet",
    name: "\u0421\u0435\u0440\u044b\u0439 \u043a\u043e\u0432\u0451\u0440",
    tab: [[5, 18]]
  },
  432: {
    id: "432",
    type: "minecraft:light_gray_carpet",
    name: "\u0421\u0432\u0435\u0442\u043b\u043e-\u0441\u0435\u0440\u044b\u0439 \u043a\u043e\u0432\u0451\u0440",
    tab: [[5, 17]]
  },
  433: {
    id: "433",
    type: "minecraft:cyan_carpet",
    name: "\u0411\u0438\u0440\u044e\u0437\u043e\u0432\u044b\u0439 \u043a\u043e\u0432\u0451\u0440",
    tab: [[5, 26]]
  },
  434: {
    id: "434",
    type: "minecraft:purple_carpet",
    name: "\u0424\u0438\u043e\u043b\u0435\u0442\u043e\u0432\u044b\u0439 \u043a\u043e\u0432\u0451\u0440",
    tab: [[5, 29]]
  },
  435: {
    id: "435",
    type: "minecraft:blue_carpet",
    name: "\u0421\u0438\u043d\u0438\u0439 \u043a\u043e\u0432\u0451\u0440",
    tab: [[5, 28]]
  },
  436: {
    id: "436",
    type: "minecraft:brown_carpet",
    name: "\u041a\u043e\u0440\u0438\u0447\u043d\u0435\u0432\u044b\u0439 \u043a\u043e\u0432\u0451\u0440",
    tab: [[5, 20]]
  },
  437: {
    id: "437",
    type: "minecraft:green_carpet",
    name: "\u0417\u0435\u043b\u0451\u043d\u044b\u0439 \u043a\u043e\u0432\u0451\u0440",
    tab: [[5, 25]]
  },
  438: {
    id: "438",
    type: "minecraft:red_carpet",
    name: "\u041a\u0440\u0430\u0441\u043d\u044b\u0439 \u043a\u043e\u0432\u0451\u0440",
    tab: [[5, 21]]
  },
  439: {
    id: "439",
    type: "minecraft:black_carpet",
    name: "\u0427\u0451\u0440\u043d\u044b\u0439 \u043a\u043e\u0432\u0451\u0440",
    tab: [[5, 19]]
  },
  440: {
    id: "440",
    type: "minecraft:terracotta",
    name: "\u0422\u0435\u0440\u0440\u0430\u043a\u043e\u0442\u0430",
    tab: [[5, 32]]
  },
  441: {
    id: "441", type: "minecraft:packed_ice", name: "\u041f\u043b\u043e\u0442\u043d\u044b\u0439 \u043b\u0451\u0434",
    tab: [[8, 16]]
  },
  442: {
    id: "442",
    type: "minecraft:dirt_path",
    name: "\u0422\u0440\u043e\u043f\u0438\u043d\u043a\u0430",
    tab: [[8, 3]]
  },
  443: {
    id: "443",
    type: "minecraft:sunflower",
    name: "\u041f\u043e\u0434\u0441\u043e\u043b\u043d\u0443\u0445",
    tab: [[8, 146]]
  },
  444: {id: "444", type: "minecraft:lilac", name: "\u0421\u0438\u0440\u0435\u043d\u044c", tab: [[8, 147]]},
  445: {
    id: "445",
    type: "minecraft:rose_bush",
    name: "\u0420\u043e\u0437\u043e\u0432\u044b\u0439 \u043a\u0443\u0441\u0442",
    tab: [[8, 148]]
  },
  446: {
    id: "446", type: "minecraft:peony",
    name: "\u041f\u0438\u043e\u043d", tab: [[8, 149]]
  },
  447: {
    id: "447",
    type: "minecraft:tall_grass",
    name: "\u0412\u044b\u0441\u043e\u043a\u0430\u044f \u0442\u0440\u0430\u0432\u0430",
    tab: [[8, 144]]
  },
  448: {
    id: "448",
    type: "minecraft:large_fern",
    name: "\u0420\u0430\u0441\u043a\u0438\u0434\u0438\u0441\u0442\u044b\u0439 \u043f\u0430\u043f\u043e\u0440\u043e\u0442\u043d\u0438\u043a",
    tab: [[8, 145]]
  },
  449: {
    id: "449",
    type: "minecraft:white_stained_glass",
    name: "\u0411\u0435\u043b\u043e\u0435 \u0441\u0442\u0435\u043a\u043b\u043e",
    tab: [[5, 99]]
  },
  450: {
    id: "450",
    type: "minecraft:orange_stained_glass",
    name: "\u041e\u0440\u0430\u043d\u0436\u0435\u0432\u043e\u0435 \u0441\u0442\u0435\u043a\u043b\u043e",
    tab: [[5, 105]]
  },
  451: {
    id: "451",
    type: "minecraft:magenta_stained_glass",
    name: "\u041f\u0443\u0440\u043f\u0443\u0440\u043d\u043e\u0435 \u0441\u0442\u0435\u043a\u043b\u043e",
    tab: [[5, 113]]
  },
  452: {
    id: "452",
    type: "minecraft:light_blue_stained_glass",
    name: "\u0413\u043e\u043b\u0443\u0431\u043e\u0435 \u0441\u0442\u0435\u043a\u043b\u043e",
    tab: [[5, 110]]
  },
  453: {
    id: "453",
    type: "minecraft:yellow_stained_glass",
    name: "\u0416\u0451\u043b\u0442\u043e\u0435 \u0441\u0442\u0435\u043a\u043b\u043e",
    tab: [[5, 106]]
  },
  454: {
    id: "454",
    type: "minecraft:lime_stained_glass",
    name: "\u041b\u0430\u0439\u043c\u043e\u0432\u043e\u0435 \u0441\u0442\u0435\u043a\u043b\u043e",
    tab: [[5, 107]]
  },
  455: {
    id: "455",
    type: "minecraft:pink_stained_glass",
    name: "\u0420\u043e\u0437\u043e\u0432\u043e\u0435 \u0441\u0442\u0435\u043a\u043b\u043e",
    tab: [[5, 114]]
  },
  456: {
    id: "456", type: "minecraft:gray_stained_glass",
    name: "\u0421\u0435\u0440\u043e\u0435 \u0441\u0442\u0435\u043a\u043b\u043e", tab: [[5, 101]]
  },
  457: {
    id: "457",
    type: "minecraft:light_gray_stained_glass",
    name: "\u0421\u0432\u0435\u0442\u043b\u043e-\u0441\u0435\u0440\u043e\u0435 \u0441\u0442\u0435\u043a\u043b\u043e",
    tab: [[5, 100]]
  },
  458: {
    id: "458",
    type: "minecraft:cyan_stained_glass",
    name: "\u0411\u0438\u0440\u044e\u0437\u043e\u0432\u043e\u0435 \u0441\u0442\u0435\u043a\u043b\u043e",
    tab: [[5, 109]]
  },
  459: {
    id: "459",
    type: "minecraft:purple_stained_glass",
    name: "\u0424\u0438\u043e\u043b\u0435\u0442\u043e\u0432\u043e\u0435 \u0441\u0442\u0435\u043a\u043b\u043e",
    tab: [[5, 112]]
  },
  460: {
    id: "460",
    type: "minecraft:blue_stained_glass",
    name: "\u0421\u0438\u043d\u0435\u0435 \u0441\u0442\u0435\u043a\u043b\u043e",
    tab: [[5, 111]]
  },
  461: {
    id: "461",
    type: "minecraft:brown_stained_glass",
    name: "\u041a\u043e\u0440\u0438\u0447\u043d\u0435\u0432\u043e\u0435 \u0441\u0442\u0435\u043a\u043b\u043e",
    tab: [[5, 103]]
  },
  462: {
    id: "462",
    type: "minecraft:green_stained_glass",
    name: "\u0417\u0435\u043b\u0451\u043d\u043e\u0435 \u0441\u0442\u0435\u043a\u043b\u043e",
    tab: [[5, 108]]
  },
  463: {
    id: "463", type: "minecraft:red_stained_glass",
    name: "\u041a\u0440\u0430\u0441\u043d\u043e\u0435 \u0441\u0442\u0435\u043a\u043b\u043e", tab: [[5, 104]]
  },
  464: {
    id: "464",
    type: "minecraft:black_stained_glass",
    name: "\u0427\u0451\u0440\u043d\u043e\u0435 \u0441\u0442\u0435\u043a\u043b\u043e",
    tab: [[5, 102]]
  },
  465: {
    id: "465",
    type: "minecraft:white_stained_glass_pane",
    name: "\u0411\u0435\u043b\u0430\u044f \u0441\u0442\u0435\u043a\u043b\u044f\u043d\u043d\u0430\u044f \u043f\u0430\u043d\u0435\u043b\u044c",
    tab: [[5, 116]]
  },
  466: {
    id: "466",
    type: "minecraft:orange_stained_glass_pane",
    name: "\u041e\u0440\u0430\u043d\u0436\u0435\u0432\u0430\u044f \u0441\u0442\u0435\u043a\u043b\u044f\u043d\u043d\u0430\u044f \u043f\u0430\u043d\u0435\u043b\u044c",
    tab: [[5, 122]]
  },
  467: {
    id: "467",
    type: "minecraft:magenta_stained_glass_pane",
    name: "\u041f\u0443\u0440\u043f\u0443\u0440\u043d\u0430\u044f \u0441\u0442\u0435\u043a\u043b\u044f\u043d\u043d\u0430\u044f \u043f\u0430\u043d\u0435\u043b\u044c",
    tab: [[5, 130]]
  },
  468: {
    id: "468",
    type: "minecraft:light_blue_stained_glass_pane",
    name: "\u0413\u043e\u043b\u0443\u0431\u0430\u044f \u0441\u0442\u0435\u043a\u043b\u044f\u043d\u043d\u0430\u044f \u043f\u0430\u043d\u0435\u043b\u044c",
    tab: [[5, 127]]
  },
  469: {
    id: "469",
    type: "minecraft:yellow_stained_glass_pane",
    name: "\u0416\u0451\u043b\u0442\u0430\u044f \u0441\u0442\u0435\u043a\u043b\u044f\u043d\u043d\u0430\u044f \u043f\u0430\u043d\u0435\u043b\u044c",
    tab: [[5, 123]]
  },
  470: {
    id: "470",
    type: "minecraft:lime_stained_glass_pane",
    name: "\u041b\u0430\u0439\u043c\u043e\u0432\u0430\u044f \u0441\u0442\u0435\u043a\u043b\u044f\u043d\u043d\u0430\u044f \u043f\u0430\u043d\u0435\u043b\u044c",
    tab: [[5, 124]]
  },
  471: {
    id: "471",
    type: "minecraft:pink_stained_glass_pane",
    name: "\u0420\u043e\u0437\u043e\u0432\u0430\u044f \u0441\u0442\u0435\u043a\u043b\u044f\u043d\u043d\u0430\u044f \u043f\u0430\u043d\u0435\u043b\u044c",
    tab: [[5, 131]]
  },
  472: {
    id: "472",
    type: "minecraft:gray_stained_glass_pane",
    name: "\u0421\u0435\u0440\u0430\u044f \u0441\u0442\u0435\u043a\u043b\u044f\u043d\u043d\u0430\u044f \u043f\u0430\u043d\u0435\u043b\u044c",
    tab: [[5, 118]]
  },
  473: {
    id: "473",
    type: "minecraft:light_gray_stained_glass_pane",
    name: "\u0421\u0432\u0435\u0442\u043b\u043e-\u0441\u0435\u0440\u0430\u044f \u0441\u0442\u0435\u043a\u043b\u044f\u043d\u043d\u0430\u044f \u043f\u0430\u043d\u0435\u043b\u044c",
    tab: [[5, 117]]
  },
  474: {
    id: "474",
    type: "minecraft:cyan_stained_glass_pane",
    name: "\u0411\u0438\u0440\u044e\u0437\u043e\u0432\u0430\u044f \u0441\u0442\u0435\u043a\u043b\u044f\u043d\u043d\u0430\u044f \u043f\u0430\u043d\u0435\u043b\u044c",
    tab: [[5, 126]]
  },
  475: {
    id: "475",
    type: "minecraft:purple_stained_glass_pane",
    name: "\u0424\u0438\u043e\u043b\u0435\u0442\u043e\u0432\u0430\u044f \u0441\u0442\u0435\u043a\u043b\u044f\u043d\u043d\u0430\u044f \u043f\u0430\u043d\u0435\u043b\u044c",
    tab: [[5, 129]]
  },
  476: {
    id: "476",
    type: "minecraft:blue_stained_glass_pane",
    name: "\u0421\u0438\u043d\u044f\u044f \u0441\u0442\u0435\u043a\u043b\u044f\u043d\u043d\u0430\u044f \u043f\u0430\u043d\u0435\u043b\u044c",
    tab: [[5, 128]]
  },
  477: {
    id: "477",
    type: "minecraft:brown_stained_glass_pane",
    name: "\u041a\u043e\u0440\u0438\u0447\u043d\u0435\u0432\u0430\u044f \u0441\u0442\u0435\u043a\u043b\u044f\u043d\u043d\u0430\u044f \u043f\u0430\u043d\u0435\u043b\u044c",
    tab: [[5, 120]]
  },
  478: {
    id: "478",
    type: "minecraft:green_stained_glass_pane",
    name: "\u0417\u0435\u043b\u0451\u043d\u0430\u044f \u0441\u0442\u0435\u043a\u043b\u044f\u043d\u043d\u0430\u044f \u043f\u0430\u043d\u0435\u043b\u044c",
    tab: [[5, 125]]
  },
  479: {
    id: "479",
    type: "minecraft:red_stained_glass_pane",
    name: "\u041a\u0440\u0430\u0441\u043d\u0430\u044f \u0441\u0442\u0435\u043a\u043b\u044f\u043d\u043d\u0430\u044f \u043f\u0430\u043d\u0435\u043b\u044c",
    tab: [[5, 121]]
  },
  480: {
    id: "480",
    type: "minecraft:black_stained_glass_pane",
    name: "\u0427\u0451\u0440\u043d\u0430\u044f \u0441\u0442\u0435\u043a\u043b\u044f\u043d\u043d\u0430\u044f \u043f\u0430\u043d\u0435\u043b\u044c",
    tab: [[5, 119]]
  },
  481: {
    id: "481", type: "minecraft:prismarine", name: "\u041f\u0440\u0438\u0437\u043c\u0430\u0440\u0438\u043d",
    tab: [[4, 241], [8, 31]]
  },
  482: {
    id: "482",
    type: "minecraft:prismarine_bricks",
    name: "\u041f\u0440\u0438\u0437\u043c\u0430\u0440\u0438\u043d\u043e\u0432\u044b\u0435 \u043a\u0438\u0440\u043f\u0438\u0447\u0438",
    tab: [[4, 245]]
  },
  483: {
    id: "483",
    type: "minecraft:dark_prismarine",
    name: "\u0422\u0451\u043c\u043d\u044b\u0439 \u043f\u0440\u0438\u0437\u043c\u0430\u0440\u0438\u043d",
    tab: [[4, 248]]
  },
  484: {
    id: "484",
    type: "minecraft:prismarine_stairs",
    name: "\u041f\u0440\u0438\u0437\u043c\u0430\u0440\u0438\u043d\u043e\u0432\u044b\u0435 \u0441\u0442\u0443\u043f\u0435\u043d\u044c\u043a\u0438",
    tab: [[4, 242]]
  },
  485: {
    id: "485",
    type: "minecraft:prismarine_brick_stairs",
    name: "\u0421\u0442\u0443\u043f\u0435\u043d\u044c\u043a\u0438 \u0438\u0437 \u043f\u0440\u0438\u0437\u043c\u0430\u0440\u0438\u043d\u043e\u0432\u043e\u0433\u043e \u043a\u0438\u0440\u043f\u0438\u0447\u0430",
    tab: [[4, 246]]
  },
  486: {
    id: "486",
    type: "minecraft:dark_prismarine_stairs",
    name: "\u0421\u0442\u0443\u043f\u0435\u043d\u044c\u043a\u0438 \u0438\u0437 \u0442\u0451\u043c\u043d\u043e\u0433\u043e \u043f\u0440\u0438\u0437\u043c\u0430\u0440\u0438\u043d\u0430",
    tab: [[4, 249]]
  },
  487: {
    id: "487",
    type: "minecraft:sea_lantern",
    name: "\u041c\u043e\u0440\u0441\u043a\u043e\u0439 \u0444\u043e\u043d\u0430\u0440\u044c",
    tab: [[4, 240], [6, 7]]
  },
  488: {
    id: "488",
    type: "minecraft:red_sandstone",
    name: "\u041a\u0440\u0430\u0441\u043d\u044b\u0439 \u043f\u0435\u0441\u0447\u0430\u043d\u0438\u043a",
    tab: [[4, 230], [8, 14]]
  },
  489: {
    id: "489",
    type: "minecraft:chiseled_red_sandstone",
    name: "\u0420\u0435\u0437\u043d\u043e\u0439 \u043a\u0440\u0430\u0441\u043d\u044b\u0439 \u043f\u0435\u0441\u0447\u0430\u043d\u0438\u043a",
    tab: [[4, 234]]
  },
  490: {
    id: "490",
    type: "minecraft:cut_red_sandstone",
    name: "\u041f\u0438\u043b\u0435\u043d\u044b\u0439 \u043a\u0440\u0430\u0441\u043d\u044b\u0439 \u043f\u0435\u0441\u0447\u0430\u043d\u0438\u043a",
    tab: [[4, 238]]
  },
  491: {
    id: "491",
    type: "minecraft:red_sandstone_stairs",
    name: "\u0421\u0442\u0443\u043f\u0435\u043d\u044c\u043a\u0438 \u0438\u0437 \u043a\u0440\u0430\u0441\u043d\u043e\u0433\u043e \u043f\u0435\u0441\u0447\u0430\u043d\u0438\u043a\u0430",
    tab: [[4, 231]]
  },
  492: {
    id: "492", type: "minecraft:repeating_command_block",
    name: "\u041f\u043e\u0432\u0442\u043e\u0440\u044f\u044e\u0449\u0438\u0439 \u043a\u043e\u043c\u0430\u043d\u0434\u043d\u044b\u0439 \u0431\u043b\u043e\u043a"
  },
  493: {
    id: "493",
    type: "minecraft:chain_command_block",
    name: "\u041f\u043e\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u043a\u043e\u043c\u0430\u043d\u0434\u043d\u044b\u0439 \u0431\u043b\u043e\u043a"
  },
  494: {id: "494", type: "minecraft:magma_block", name: "\u041c\u0430\u0433\u043c\u0430", tab: [[8, 32], [6, 16]]},
  495: {
    id: "495",
    type: "minecraft:nether_wart_block",
    name: "\u0411\u043b\u043e\u043a \u043d\u0435\u0437\u0435\u0440\u0441\u043a\u043e\u0433\u043e \u043d\u0430\u0440\u043e\u0441\u0442\u0430",
    tab: [[8, 99]]
  },
  496: {
    id: "496",
    type: "minecraft:warped_wart_block",
    name: "\u0411\u043b\u043e\u043a \u0438\u0441\u043a\u0430\u0436\u0451\u043d\u043d\u043e\u0433\u043e \u043d\u0430\u0440\u043e\u0441\u0442\u0430",
    tab: [[8, 100]]
  },
  497: {
    id: "497",
    type: "minecraft:red_nether_bricks",
    name: "\u041a\u0440\u0430\u0441\u043d\u044b\u0435 \u043d\u0435\u0437\u0435\u0440\u0441\u043a\u0438\u0435 \u043a\u0438\u0440\u043f\u0438\u0447\u0438",
    tab: [[4, 259]]
  },
  498: {
    id: "498",
    type: "minecraft:bone_block",
    name: "\u041a\u043e\u0441\u0442\u043d\u044b\u0439 \u0431\u043b\u043e\u043a",
    tab: [[8, 40]]
  },
  499: {
    id: "499",
    type: "minecraft:structure_void",
    name: "\u041f\u0443\u0441\u0442\u043e\u0439 \u0431\u043b\u043e\u043a"
  },
  500: {
    id: "500",
    type: "minecraft:shulker_box",
    name: "\u0428\u0430\u043b\u043a\u0435\u0440\u043e\u0432\u044b\u0439 \u044f\u0449\u0438\u043a",
    tab: [[5, 132], [6, 111]]
  },
  501: {
    id: "501",
    type: "minecraft:white_shulker_box",
    name: "\u0411\u0435\u043b\u044b\u0439 \u0448\u0430\u043b\u043a\u0435\u0440\u043e\u0432\u044b\u0439 \u044f\u0449\u0438\u043a",
    tab: [[5, 133], [6, 112]]
  },
  502: {
    id: "502",
    type: "minecraft:orange_shulker_box",
    name: "\u041e\u0440\u0430\u043d\u0436\u0435\u0432\u044b\u0439 \u0448\u0430\u043b\u043a\u0435\u0440\u043e\u0432\u044b\u0439 \u044f\u0449\u0438\u043a",
    tab: [[5, 139], [6, 118]]
  },
  503: {
    id: "503",
    type: "minecraft:magenta_shulker_box",
    name: "\u041f\u0443\u0440\u043f\u0443\u0440\u043d\u044b\u0439 \u0448\u0430\u043b\u043a\u0435\u0440\u043e\u0432\u044b\u0439 \u044f\u0449\u0438\u043a",
    tab: [[5, 147], [6, 126]]
  },
  504: {
    id: "504",
    type: "minecraft:light_blue_shulker_box",
    name: "\u0413\u043e\u043b\u0443\u0431\u043e\u0439 \u0448\u0430\u043b\u043a\u0435\u0440\u043e\u0432\u044b\u0439 \u044f\u0449\u0438\u043a",
    tab: [[5, 144], [6, 123]]
  },
  505: {
    id: "505",
    type: "minecraft:yellow_shulker_box",
    name: "\u0416\u0451\u043b\u0442\u044b\u0439 \u0448\u0430\u043b\u043a\u0435\u0440\u043e\u0432\u044b\u0439 \u044f\u0449\u0438\u043a",
    tab: [[5, 140], [6, 119]]
  },
  506: {
    id: "506",
    type: "minecraft:lime_shulker_box",
    name: "\u041b\u0430\u0439\u043c\u043e\u0432\u044b\u0439 \u0448\u0430\u043b\u043a\u0435\u0440\u043e\u0432\u044b\u0439 \u044f\u0449\u0438\u043a",
    tab: [[5, 141], [6, 120]]
  },
  507: {
    id: "507",
    type: "minecraft:pink_shulker_box",
    name: "\u0420\u043e\u0437\u043e\u0432\u044b\u0439 \u0448\u0430\u043b\u043a\u0435\u0440\u043e\u0432\u044b\u0439 \u044f\u0449\u0438\u043a",
    tab: [[5, 148], [6, 127]]
  },
  508: {
    id: "508",
    type: "minecraft:gray_shulker_box",
    name: "\u0421\u0435\u0440\u044b\u0439 \u0448\u0430\u043b\u043a\u0435\u0440\u043e\u0432\u044b\u0439 \u044f\u0449\u0438\u043a",
    tab: [[5, 135], [6, 114]]
  },
  509: {
    id: "509",
    type: "minecraft:light_gray_shulker_box",
    name: "\u0421\u0432\u0435\u0442\u043b\u043e-\u0441\u0435\u0440\u044b\u0439 \u0448\u0430\u043b\u043a\u0435\u0440\u043e\u0432\u044b\u0439 \u044f\u0449\u0438\u043a",
    tab: [[5, 134], [6, 113]]
  },
  510: {
    id: "510",
    type: "minecraft:cyan_shulker_box",
    name: "\u0411\u0438\u0440\u044e\u0437\u043e\u0432\u044b\u0439 \u0448\u0430\u043b\u043a\u0435\u0440\u043e\u0432\u044b\u0439 \u044f\u0449\u0438\u043a",
    tab: [[5, 143], [6, 122]]
  },
  511: {
    id: "511",
    type: "minecraft:purple_shulker_box",
    name: "\u0424\u0438\u043e\u043b\u0435\u0442\u043e\u0432\u044b\u0439 \u0448\u0430\u043b\u043a\u0435\u0440\u043e\u0432\u044b\u0439 \u044f\u0449\u0438\u043a",
    tab: [[5, 146], [6, 125]]
  },
  512: {
    id: "512",
    type: "minecraft:blue_shulker_box",
    name: "\u0421\u0438\u043d\u0438\u0439 \u0448\u0430\u043b\u043a\u0435\u0440\u043e\u0432\u044b\u0439 \u044f\u0449\u0438\u043a",
    tab: [[5, 145], [6, 124]]
  },
  513: {
    id: "513",
    type: "minecraft:brown_shulker_box",
    name: "\u041a\u043e\u0440\u0438\u0447\u043d\u0435\u0432\u044b\u0439 \u0448\u0430\u043b\u043a\u0435\u0440\u043e\u0432\u044b\u0439 \u044f\u0449\u0438\u043a",
    tab: [[5, 137], [6, 116]]
  },
  514: {
    id: "514",
    type: "minecraft:green_shulker_box",
    name: "\u0417\u0435\u043b\u0451\u043d\u044b\u0439 \u0448\u0430\u043b\u043a\u0435\u0440\u043e\u0432\u044b\u0439 \u044f\u0449\u0438\u043a",
    tab: [[5, 142], [6, 121]]
  },
  515: {
    id: "515",
    type: "minecraft:red_shulker_box",
    name: "\u041a\u0440\u0430\u0441\u043d\u044b\u0439 \u0448\u0430\u043b\u043a\u0435\u0440\u043e\u0432\u044b\u0439 \u044f\u0449\u0438\u043a",
    tab: [[5, 138], [6, 117]]
  },
  516: {
    id: "516",
    type: "minecraft:black_shulker_box",
    name: "\u0427\u0451\u0440\u043d\u044b\u0439 \u0448\u0430\u043b\u043a\u0435\u0440\u043e\u0432\u044b\u0439 \u044f\u0449\u0438\u043a",
    tab: [[5, 136], [6, 115]]
  },
  517: {
    id: "517",
    type: "minecraft:white_glazed_terracotta",
    name: "\u0411\u0435\u043b\u0430\u044f \u0433\u043b\u0430\u0437\u0443\u0440\u043e\u0432\u0430\u043d\u043d\u0430\u044f \u043a\u0435\u0440\u0430\u043c\u0438\u043a\u0430",
    tab: [[5, 81]]
  },
  518: {
    id: "518",
    type: "minecraft:orange_glazed_terracotta",
    name: "\u041e\u0440\u0430\u043d\u0436\u0435\u0432\u0430\u044f \u0433\u043b\u0430\u0437\u0443\u0440\u043e\u0432\u0430\u043d\u043d\u0430\u044f \u043a\u0435\u0440\u0430\u043c\u0438\u043a\u0430",
    tab: [[5, 87]]
  },
  519: {
    id: "519",
    type: "minecraft:magenta_glazed_terracotta",
    name: "\u041f\u0443\u0440\u043f\u0443\u0440\u043d\u0430\u044f \u0433\u043b\u0430\u0437\u0443\u0440\u043e\u0432\u0430\u043d\u043d\u0430\u044f \u043a\u0435\u0440\u0430\u043c\u0438\u043a\u0430",
    tab: [[5, 95]]
  },
  520: {
    id: "520",
    type: "minecraft:light_blue_glazed_terracotta",
    name: "\u0413\u043e\u043b\u0443\u0431\u0430\u044f \u0433\u043b\u0430\u0437\u0443\u0440\u043e\u0432\u0430\u043d\u043d\u0430\u044f \u043a\u0435\u0440\u0430\u043c\u0438\u043a\u0430",
    tab: [[5, 92]]
  },
  521: {
    id: "521",
    type: "minecraft:yellow_glazed_terracotta",
    name: "\u0416\u0451\u043b\u0442\u0430\u044f \u0433\u043b\u0430\u0437\u0443\u0440\u043e\u0432\u0430\u043d\u043d\u0430\u044f \u043a\u0435\u0440\u0430\u043c\u0438\u043a\u0430",
    tab: [[5,
      88]]
  },
  522: {
    id: "522",
    type: "minecraft:lime_glazed_terracotta",
    name: "\u041b\u0430\u0439\u043c\u043e\u0432\u0430\u044f \u0433\u043b\u0430\u0437\u0443\u0440\u043e\u0432\u0430\u043d\u043d\u0430\u044f \u043a\u0435\u0440\u0430\u043c\u0438\u043a\u0430",
    tab: [[5, 89]]
  },
  523: {
    id: "523",
    type: "minecraft:pink_glazed_terracotta",
    name: "\u0420\u043e\u0437\u043e\u0432\u0430\u044f \u0433\u043b\u0430\u0437\u0443\u0440\u043e\u0432\u0430\u043d\u043d\u0430\u044f \u043a\u0435\u0440\u0430\u043c\u0438\u043a\u0430",
    tab: [[5, 96]]
  },
  524: {
    id: "524",
    type: "minecraft:gray_glazed_terracotta",
    name: "\u0421\u0435\u0440\u0430\u044f \u0433\u043b\u0430\u0437\u0443\u0440\u043e\u0432\u0430\u043d\u043d\u0430\u044f \u043a\u0435\u0440\u0430\u043c\u0438\u043a\u0430",
    tab: [[5, 83]]
  },
  525: {
    id: "525",
    type: "minecraft:light_gray_glazed_terracotta",
    name: "\u0421\u0432\u0435\u0442\u043b\u043e-\u0441\u0435\u0440\u0430\u044f \u0433\u043b\u0430\u0437\u0443\u0440\u043e\u0432\u0430\u043d\u043d\u0430\u044f \u043a\u0435\u0440\u0430\u043c\u0438\u043a\u0430",
    tab: [[5,
      82]]
  },
  526: {
    id: "526",
    type: "minecraft:cyan_glazed_terracotta",
    name: "\u0411\u0438\u0440\u044e\u0437\u043e\u0432\u0430\u044f \u0433\u043b\u0430\u0437\u0443\u0440\u043e\u0432\u0430\u043d\u043d\u0430\u044f \u043a\u0435\u0440\u0430\u043c\u0438\u043a\u0430",
    tab: [[5, 91]]
  },
  527: {
    id: "527",
    type: "minecraft:purple_glazed_terracotta",
    name: "\u0424\u0438\u043e\u043b\u0435\u0442\u043e\u0432\u0430\u044f \u0433\u043b\u0430\u0437\u0443\u0440\u043e\u0432\u0430\u043d\u043d\u0430\u044f \u043a\u0435\u0440\u0430\u043c\u0438\u043a\u0430",
    tab: [[5, 94]]
  },
  528: {
    id: "528",
    type: "minecraft:blue_glazed_terracotta",
    name: "\u0421\u0438\u043d\u044f\u044f \u0433\u043b\u0430\u0437\u0443\u0440\u043e\u0432\u0430\u043d\u043d\u0430\u044f \u043a\u0435\u0440\u0430\u043c\u0438\u043a\u0430",
    tab: [[5, 93]]
  },
  529: {
    id: "529",
    type: "minecraft:brown_glazed_terracotta",
    name: "\u041a\u043e\u0440\u0438\u0447\u043d\u0435\u0432\u0430\u044f \u0433\u043b\u0430\u0437\u0443\u0440\u043e\u0432\u0430\u043d\u043d\u0430\u044f \u043a\u0435\u0440\u0430\u043c\u0438\u043a\u0430",
    tab: [[5,
      85]]
  },
  530: {
    id: "530",
    type: "minecraft:green_glazed_terracotta",
    name: "\u0417\u0435\u043b\u0451\u043d\u0430\u044f \u0433\u043b\u0430\u0437\u0443\u0440\u043e\u0432\u0430\u043d\u043d\u0430\u044f \u043a\u0435\u0440\u0430\u043c\u0438\u043a\u0430",
    tab: [[5, 90]]
  },
  531: {
    id: "531",
    type: "minecraft:red_glazed_terracotta",
    name: "\u041a\u0440\u0430\u0441\u043d\u0430\u044f \u0433\u043b\u0430\u0437\u0443\u0440\u043e\u0432\u0430\u043d\u043d\u0430\u044f \u043a\u0435\u0440\u0430\u043c\u0438\u043a\u0430",
    tab: [[5, 86]]
  },
  532: {
    id: "532",
    type: "minecraft:black_glazed_terracotta",
    name: "\u0427\u0451\u0440\u043d\u0430\u044f \u0433\u043b\u0430\u0437\u0443\u0440\u043e\u0432\u0430\u043d\u043d\u0430\u044f \u043a\u0435\u0440\u0430\u043c\u0438\u043a\u0430",
    tab: [[5, 84]]
  },
  533: {
    id: "533",
    type: "minecraft:white_concrete",
    name: "\u0411\u0435\u043b\u044b\u0439 \u0431\u0435\u0442\u043e\u043d",
    tab: [[5, 49]]
  },
  534: {
    id: "534",
    type: "minecraft:orange_concrete",
    name: "\u041e\u0440\u0430\u043d\u0436\u0435\u0432\u044b\u0439 \u0431\u0435\u0442\u043e\u043d",
    tab: [[5,
      55]]
  },
  535: {
    id: "535",
    type: "minecraft:magenta_concrete",
    name: "\u041f\u0443\u0440\u043f\u0443\u0440\u043d\u044b\u0439 \u0431\u0435\u0442\u043e\u043d",
    tab: [[5, 63]]
  },
  536: {
    id: "536",
    type: "minecraft:light_blue_concrete",
    name: "\u0413\u043e\u043b\u0443\u0431\u043e\u0439 \u0431\u0435\u0442\u043e\u043d",
    tab: [[5, 60]]
  },
  537: {
    id: "537",
    type: "minecraft:yellow_concrete",
    name: "\u0416\u0451\u043b\u0442\u044b\u0439 \u0431\u0435\u0442\u043e\u043d",
    tab: [[5, 56]]
  },
  538: {
    id: "538",
    type: "minecraft:lime_concrete",
    name: "\u041b\u0430\u0439\u043c\u043e\u0432\u044b\u0439 \u0431\u0435\u0442\u043e\u043d",
    tab: [[5, 57]]
  },
  539: {
    id: "539",
    type: "minecraft:pink_concrete",
    name: "\u0420\u043e\u0437\u043e\u0432\u044b\u0439 \u0431\u0435\u0442\u043e\u043d",
    tab: [[5, 64]]
  },
  540: {
    id: "540",
    type: "minecraft:gray_concrete",
    name: "\u0421\u0435\u0440\u044b\u0439 \u0431\u0435\u0442\u043e\u043d",
    tab: [[5, 51]]
  },
  541: {
    id: "541",
    type: "minecraft:light_gray_concrete",
    name: "\u0421\u0432\u0435\u0442\u043b\u043e-\u0441\u0435\u0440\u044b\u0439 \u0431\u0435\u0442\u043e\u043d",
    tab: [[5, 50]]
  },
  542: {
    id: "542",
    type: "minecraft:cyan_concrete",
    name: "\u0411\u0438\u0440\u044e\u0437\u043e\u0432\u044b\u0439 \u0431\u0435\u0442\u043e\u043d",
    tab: [[5, 59]]
  },
  543: {
    id: "543",
    type: "minecraft:purple_concrete",
    name: "\u0424\u0438\u043e\u043b\u0435\u0442\u043e\u0432\u044b\u0439 \u0431\u0435\u0442\u043e\u043d",
    tab: [[5, 62]]
  },
  544: {
    id: "544",
    type: "minecraft:blue_concrete",
    name: "\u0421\u0438\u043d\u0438\u0439 \u0431\u0435\u0442\u043e\u043d",
    tab: [[5, 61]]
  },
  545: {
    id: "545",
    type: "minecraft:brown_concrete",
    name: "\u041a\u043e\u0440\u0438\u0447\u043d\u0435\u0432\u044b\u0439 \u0431\u0435\u0442\u043e\u043d",
    tab: [[5, 53]]
  },
  546: {
    id: "546", type: "minecraft:green_concrete",
    name: "\u0417\u0435\u043b\u0451\u043d\u044b\u0439 \u0431\u0435\u0442\u043e\u043d", tab: [[5, 58]]
  },
  547: {
    id: "547",
    type: "minecraft:red_concrete",
    name: "\u041a\u0440\u0430\u0441\u043d\u044b\u0439 \u0431\u0435\u0442\u043e\u043d",
    tab: [[5, 54]]
  },
  548: {
    id: "548",
    type: "minecraft:black_concrete",
    name: "\u0427\u0451\u0440\u043d\u044b\u0439 \u0431\u0435\u0442\u043e\u043d",
    tab: [[5, 52]]
  },
  549: {
    id: "549",
    type: "minecraft:white_concrete_powder",
    name: "\u0411\u0435\u043b\u044b\u0439 \u0441\u0443\u0445\u043e\u0439 \u0431\u0435\u0442\u043e\u043d",
    tab: [[5, 65]]
  },
  550: {
    id: "550",
    type: "minecraft:orange_concrete_powder",
    name: "\u041e\u0440\u0430\u043d\u0436\u0435\u0432\u044b\u0439 \u0441\u0443\u0445\u043e\u0439 \u0431\u0435\u0442\u043e\u043d",
    tab: [[5, 71]]
  },
  551: {
    id: "551",
    type: "minecraft:magenta_concrete_powder",
    name: "\u041f\u0443\u0440\u043f\u0443\u0440\u043d\u044b\u0439 \u0441\u0443\u0445\u043e\u0439 \u0431\u0435\u0442\u043e\u043d",
    tab: [[5, 79]]
  },
  552: {
    id: "552",
    type: "minecraft:light_blue_concrete_powder",
    name: "\u0413\u043e\u043b\u0443\u0431\u043e\u0439 \u0441\u0443\u0445\u043e\u0439 \u0431\u0435\u0442\u043e\u043d",
    tab: [[5, 76]]
  },
  553: {
    id: "553",
    type: "minecraft:yellow_concrete_powder",
    name: "\u0416\u0451\u043b\u0442\u044b\u0439 \u0441\u0443\u0445\u043e\u0439 \u0431\u0435\u0442\u043e\u043d",
    tab: [[5, 72]]
  },
  554: {
    id: "554",
    type: "minecraft:lime_concrete_powder",
    name: "\u041b\u0430\u0439\u043c\u043e\u0432\u044b\u0439 \u0441\u0443\u0445\u043e\u0439 \u0431\u0435\u0442\u043e\u043d",
    tab: [[5, 73]]
  },
  555: {
    id: "555",
    type: "minecraft:pink_concrete_powder",
    name: "\u0420\u043e\u0437\u043e\u0432\u044b\u0439 \u0441\u0443\u0445\u043e\u0439 \u0431\u0435\u0442\u043e\u043d",
    tab: [[5, 80]]
  },
  556: {
    id: "556",
    type: "minecraft:gray_concrete_powder",
    name: "\u0421\u0435\u0440\u044b\u0439 \u0441\u0443\u0445\u043e\u0439 \u0431\u0435\u0442\u043e\u043d",
    tab: [[5, 67]]
  },
  557: {
    id: "557",
    type: "minecraft:light_gray_concrete_powder",
    name: "\u0421\u0432\u0435\u0442\u043b\u043e-\u0441\u0435\u0440\u044b\u0439 \u0441\u0443\u0445\u043e\u0439 \u0431\u0435\u0442\u043e\u043d",
    tab: [[5, 66]]
  },
  558: {
    id: "558",
    type: "minecraft:cyan_concrete_powder",
    name: "\u0411\u0438\u0440\u044e\u0437\u043e\u0432\u044b\u0439 \u0441\u0443\u0445\u043e\u0439 \u0431\u0435\u0442\u043e\u043d",
    tab: [[5, 75]]
  },
  559: {
    id: "559",
    type: "minecraft:purple_concrete_powder",
    name: "\u0424\u0438\u043e\u043b\u0435\u0442\u043e\u0432\u044b\u0439 \u0441\u0443\u0445\u043e\u0439 \u0431\u0435\u0442\u043e\u043d",
    tab: [[5, 78]]
  },
  560: {
    id: "560",
    type: "minecraft:blue_concrete_powder",
    name: "\u0421\u0438\u043d\u0438\u0439 \u0441\u0443\u0445\u043e\u0439 \u0431\u0435\u0442\u043e\u043d",
    tab: [[5, 77]]
  },
  561: {
    id: "561",
    type: "minecraft:brown_concrete_powder",
    name: "\u041a\u043e\u0440\u0438\u0447\u043d\u0435\u0432\u044b\u0439 \u0441\u0443\u0445\u043e\u0439 \u0431\u0435\u0442\u043e\u043d",
    tab: [[5, 69]]
  },
  562: {
    id: "562",
    type: "minecraft:green_concrete_powder",
    name: "\u0417\u0435\u043b\u0451\u043d\u044b\u0439 \u0441\u0443\u0445\u043e\u0439 \u0431\u0435\u0442\u043e\u043d",
    tab: [[5, 74]]
  },
  563: {
    id: "563",
    type: "minecraft:red_concrete_powder",
    name: "\u041a\u0440\u0430\u0441\u043d\u044b\u0439 \u0441\u0443\u0445\u043e\u0439 \u0431\u0435\u0442\u043e\u043d",
    tab: [[5, 70]]
  },
  564: {
    id: "564",
    type: "minecraft:black_concrete_powder",
    name: "\u0427\u0451\u0440\u043d\u044b\u0439 \u0441\u0443\u0445\u043e\u0439 \u0431\u0435\u0442\u043e\u043d",
    tab: [[5, 68]]
  },
  565: {
    id: "565",
    type: "minecraft:turtle_egg",
    name: "\u0427\u0435\u0440\u0435\u043f\u0430\u0448\u044c\u0435 \u044f\u0439\u0446\u043e",
    tab: [[8, 158]]
  },
  566: {
    id: "566",
    type: "minecraft:sniffer_egg",
    name: "\u042f\u0439\u0446\u043e \u043d\u044e\u0445\u0430\u0447\u0430",
    tab: [[8, 159]]
  },
  567: {
    id: "567",
    type: "minecraft:dead_tube_coral_block",
    name: "\u0411\u043b\u043e\u043a \u043c\u0451\u0440\u0442\u0432\u043e\u0433\u043e \u0442\u0440\u0443\u0431\u0447\u0430\u0442\u043e\u0433\u043e \u043a\u043e\u0440\u0430\u043b\u043b\u0430",
    tab: [[8, 180]]
  },
  568: {
    id: "568",
    type: "minecraft:dead_brain_coral_block",
    name: "\u0411\u043b\u043e\u043a \u043c\u0451\u0440\u0442\u0432\u043e\u0433\u043e \u043a\u043e\u0440\u0430\u043b\u043b\u0430-\u043c\u043e\u0437\u0433\u043e\u0432\u0438\u043a\u0430",
    tab: [[8, 181]]
  },
  569: {
    id: "569",
    type: "minecraft:dead_bubble_coral_block",
    name: "\u0411\u043b\u043e\u043a \u043c\u0451\u0440\u0442\u0432\u043e\u0433\u043e \u043f\u0443\u0437\u044b\u0440\u0447\u0430\u0442\u043e\u0433\u043e \u043a\u043e\u0440\u0430\u043b\u043b\u0430",
    tab: [[8, 182]]
  },
  570: {
    id: "570",
    type: "minecraft:dead_fire_coral_block",
    name: "\u0411\u043b\u043e\u043a \u043c\u0451\u0440\u0442\u0432\u043e\u0433\u043e \u043e\u0433\u043d\u0435\u043d\u043d\u043e\u0433\u043e \u043a\u043e\u0440\u0430\u043b\u043b\u0430",
    tab: [[8, 183]]
  },
  571: {
    id: "571",
    type: "minecraft:dead_horn_coral_block",
    name: "\u0411\u043b\u043e\u043a \u043c\u0451\u0440\u0442\u0432\u043e\u0433\u043e \u0440\u043e\u0433\u043e\u0432\u043e\u0433\u043e \u043a\u043e\u0440\u0430\u043b\u043b\u0430",
    tab: [[8, 184]]
  },
  572: {
    id: "572",
    type: "minecraft:tube_coral_block",
    name: "\u0411\u043b\u043e\u043a \u0442\u0440\u0443\u0431\u0447\u0430\u0442\u043e\u0433\u043e \u043a\u043e\u0440\u0430\u043b\u043b\u0430",
    tab: [[8, 175]]
  },
  573: {
    id: "573",
    type: "minecraft:brain_coral_block",
    name: "\u0411\u043b\u043e\u043a \u043a\u043e\u0440\u0430\u043b\u043b\u0430-\u043c\u043e\u0437\u0433\u043e\u0432\u0438\u043a\u0430",
    tab: [[8, 176]]
  },
  574: {
    id: "574",
    type: "minecraft:bubble_coral_block",
    name: "\u0411\u043b\u043e\u043a \u043f\u0443\u0437\u044b\u0440\u0447\u0430\u0442\u043e\u0433\u043e \u043a\u043e\u0440\u0430\u043b\u043b\u0430",
    tab: [[8, 177]]
  },
  575: {
    id: "575",
    type: "minecraft:fire_coral_block",
    name: "\u0411\u043b\u043e\u043a \u043e\u0433\u043d\u0435\u043d\u043d\u043e\u0433\u043e \u043a\u043e\u0440\u0430\u043b\u043b\u0430",
    tab: [[8, 178]]
  },
  576: {
    id: "576",
    type: "minecraft:horn_coral_block",
    name: "\u0411\u043b\u043e\u043a \u0440\u043e\u0433\u043e\u0432\u043e\u0433\u043e \u043a\u043e\u0440\u0430\u043b\u043b\u0430",
    tab: [[8, 179]]
  },
  577: {
    id: "577",
    type: "minecraft:tube_coral",
    name: "\u0422\u0440\u0443\u0431\u0447\u0430\u0442\u044b\u0439 \u043a\u043e\u0440\u0430\u043b\u043b",
    tab: [[8, 185]]
  },
  578: {
    id: "578",
    type: "minecraft:brain_coral",
    name: "\u041a\u043e\u0440\u0430\u043b\u043b-\u043c\u043e\u0437\u0433\u043e\u0432\u0438\u043a",
    tab: [[8, 186]]
  },
  579: {
    id: "579",
    type: "minecraft:bubble_coral",
    name: "\u041f\u0443\u0437\u044b\u0440\u0447\u0430\u0442\u044b\u0439 \u043a\u043e\u0440\u0430\u043b\u043b",
    tab: [[8, 187]]
  },
  580: {
    id: "580",
    type: "minecraft:fire_coral",
    name: "\u041e\u0433\u043d\u0435\u043d\u043d\u044b\u0439 \u043a\u043e\u0440\u0430\u043b\u043b",
    tab: [[8, 188]]
  },
  581: {
    id: "581", type: "minecraft:horn_coral",
    name: "\u0420\u043e\u0433\u043e\u0432\u043e\u0439 \u043a\u043e\u0440\u0430\u043b\u043b", tab: [[8, 189]]
  },
  582: {
    id: "582",
    type: "minecraft:dead_brain_coral",
    name: "\u041c\u0451\u0440\u0442\u0432\u044b\u0439 \u043a\u043e\u0440\u0430\u043b\u043b-\u043c\u043e\u0437\u0433\u043e\u0432\u0438\u043a",
    tab: [[8, 191]]
  },
  583: {
    id: "583",
    type: "minecraft:dead_bubble_coral",
    name: "\u041c\u0451\u0440\u0442\u0432\u044b\u0439 \u043f\u0443\u0437\u044b\u0440\u0447\u0430\u0442\u044b\u0439 \u043a\u043e\u0440\u0430\u043b\u043b",
    tab: [[8,
      192]]
  },
  584: {
    id: "584",
    type: "minecraft:dead_fire_coral",
    name: "\u041c\u0451\u0440\u0442\u0432\u044b\u0439 \u043e\u0433\u043d\u0435\u043d\u043d\u044b\u0439 \u043a\u043e\u0440\u0430\u043b\u043b",
    tab: [[8, 193]]
  },
  585: {
    id: "585",
    type: "minecraft:dead_horn_coral",
    name: "\u041c\u0451\u0440\u0442\u0432\u044b\u0439 \u0440\u043e\u0433\u043e\u0432\u044b\u0439 \u043a\u043e\u0440\u0430\u043b\u043b",
    tab: [[8, 194]]
  },
  586: {
    id: "586",
    type: "minecraft:dead_tube_coral",
    name: "\u041c\u0451\u0440\u0442\u0432\u044b\u0439 \u0442\u0440\u0443\u0431\u0447\u0430\u0442\u044b\u0439 \u043a\u043e\u0440\u0430\u043b\u043b",
    tab: [[8, 190]]
  },
  587: {
    id: "587",
    type: "minecraft:tube_coral_fan",
    name: "\u0412\u0435\u0435\u0440\u043d\u044b\u0439 \u0442\u0440\u0443\u0431\u0447\u0430\u0442\u044b\u0439 \u043a\u043e\u0440\u0430\u043b\u043b",
    tab: [[8, 195]]
  },
  588: {
    id: "588",
    type: "minecraft:brain_coral_fan",
    name: "\u0412\u0435\u0435\u0440\u043d\u044b\u0439 \u043a\u043e\u0440\u0430\u043b\u043b-\u043c\u043e\u0437\u0433\u043e\u0432\u0438\u043a",
    tab: [[8, 196]]
  },
  589: {
    id: "589",
    type: "minecraft:bubble_coral_fan",
    name: "\u0412\u0435\u0435\u0440\u043d\u044b\u0439 \u043f\u0443\u0437\u044b\u0440\u0447\u0430\u0442\u044b\u0439 \u043a\u043e\u0440\u0430\u043b\u043b",
    tab: [[8, 197]]
  },
  590: {
    id: "590",
    type: "minecraft:fire_coral_fan",
    name: "\u0412\u0435\u0435\u0440\u043d\u044b\u0439 \u043e\u0433\u043d\u0435\u043d\u043d\u044b\u0439 \u043a\u043e\u0440\u0430\u043b\u043b",
    tab: [[8, 198]]
  },
  591: {
    id: "591",
    type: "minecraft:horn_coral_fan",
    name: "\u0412\u0435\u0435\u0440\u043d\u044b\u0439 \u0440\u043e\u0433\u043e\u0432\u044b\u0439 \u043a\u043e\u0440\u0430\u043b\u043b",
    tab: [[8, 199]]
  },
  592: {
    id: "592",
    type: "minecraft:dead_tube_coral_fan",
    name: "\u041c\u0451\u0440\u0442\u0432\u044b\u0439 \u0432\u0435\u0435\u0440\u043d\u044b\u0439 \u0442\u0440\u0443\u0431\u0447\u0430\u0442\u044b\u0439 \u043a\u043e\u0440\u0430\u043b\u043b",
    tab: [[8, 200]]
  },
  593: {
    id: "593",
    type: "minecraft:dead_brain_coral_fan",
    name: "\u041c\u0451\u0440\u0442\u0432\u044b\u0439 \u0432\u0435\u0435\u0440\u043d\u044b\u0439 \u043a\u043e\u0440\u0430\u043b\u043b-\u043c\u043e\u0437\u0433\u043e\u0432\u0438\u043a",
    tab: [[8, 201]]
  },
  594: {
    id: "594",
    type: "minecraft:dead_bubble_coral_fan",
    name: "\u041c\u0451\u0440\u0442\u0432\u044b\u0439 \u0432\u0435\u0435\u0440\u043d\u044b\u0439 \u043f\u0443\u0437\u044b\u0440\u0447\u0430\u0442\u044b\u0439 \u043a\u043e\u0440\u0430\u043b\u043b",
    tab: [[8, 202]]
  },
  595: {
    id: "595",
    type: "minecraft:dead_fire_coral_fan",
    name: "\u041c\u0451\u0440\u0442\u0432\u044b\u0439 \u0432\u0435\u0435\u0440\u043d\u044b\u0439 \u043e\u0433\u043d\u0435\u043d\u043d\u044b\u0439 \u043a\u043e\u0440\u0430\u043b\u043b",
    tab: [[8, 203]]
  },
  596: {
    id: "596",
    type: "minecraft:dead_horn_coral_fan",
    name: "\u041c\u0451\u0440\u0442\u0432\u044b\u0439 \u0432\u0435\u0435\u0440\u043d\u044b\u0439 \u0440\u043e\u0433\u043e\u0432\u044b\u0439 \u043a\u043e\u0440\u0430\u043b\u043b",
    tab: [[8, 204]]
  },
  597: {
    id: "597",
    type: "minecraft:blue_ice", name: "\u0421\u0438\u043d\u0438\u0439 \u043b\u0451\u0434", tab: [[8, 17]]
  },
  598: {
    id: "598",
    type: "minecraft:conduit",
    name: "\u041c\u043e\u0440\u0441\u043a\u043e\u0439 \u0438\u0441\u0442\u043e\u0447\u043d\u0438\u043a",
    tab: [[6, 41]]
  },
  599: {
    id: "599",
    type: "minecraft:polished_granite_stairs",
    name: "\u0421\u0442\u0443\u043f\u0435\u043d\u044c\u043a\u0438 \u0438\u0437 \u043f\u043e\u043b\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u0433\u043e \u0433\u0440\u0430\u043d\u0438\u0442\u0430",
    tab: [[4, 174]]
  },
  600: {
    id: "600",
    type: "minecraft:smooth_red_sandstone_stairs",
    name: "\u0421\u0442\u0443\u043f\u0435\u043d\u044c\u043a\u0438 \u0438\u0437 \u0433\u043b\u0430\u0434\u043a\u043e\u0433\u043e \u043a\u0440\u0430\u0441\u043d\u043e\u0433\u043e \u043f\u0435\u0441\u0447\u0430\u043d\u0438\u043a\u0430",
    tab: [[4, 236]]
  },
  601: {
    id: "601",
    type: "minecraft:mossy_stone_brick_stairs",
    name: "\u0421\u0442\u0443\u043f\u0435\u043d\u044c\u043a\u0438 \u0438\u0437 \u0437\u0430\u043c\u0448\u0435\u043b\u043e\u0433\u043e \u043a\u0430\u043c\u0435\u043d\u043d\u043e\u0433\u043e \u043a\u0438\u0440\u043f\u0438\u0447\u0430",
    tab: [[4, 166]]
  },
  602: {
    id: "602",
    type: "minecraft:polished_diorite_stairs",
    name: "\u0421\u0442\u0443\u043f\u0435\u043d\u044c\u043a\u0438 \u0438\u0437 \u043f\u043e\u043b\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u0433\u043e \u0434\u0438\u043e\u0440\u0438\u0442\u0430",
    tab: [[4, 181]]
  },
  603: {
    id: "603",
    type: "minecraft:mossy_cobblestone_stairs",
    name: "\u0417\u0430\u043c\u0448\u0435\u043b\u044b\u0435 \u0431\u0443\u043b\u044b\u0436\u043d\u044b\u0435 \u0441\u0442\u0443\u043f\u0435\u043d\u044c\u043a\u0438",
    tab: [[4,
      154]]
  },
  604: {
    id: "604",
    type: "minecraft:end_stone_brick_stairs",
    name: "\u0421\u0442\u0443\u043f\u0435\u043d\u044c\u043a\u0438 \u0438\u0437 \u044d\u043d\u0434\u0435\u0440\u043d\u044f\u043a\u043e\u0432\u043e\u0433\u043e \u043a\u0438\u0440\u043f\u0438\u0447\u0430",
    tab: [[4, 285]]
  },
  605: {
    id: "605",
    type: "minecraft:stone_stairs",
    name: "\u041a\u0430\u043c\u0435\u043d\u043d\u044b\u0435 \u0441\u0442\u0443\u043f\u0435\u043d\u044c\u043a\u0438",
    tab: [[4, 145]]
  },
  606: {
    id: "606",
    type: "minecraft:smooth_sandstone_stairs",
    name: "\u0421\u0442\u0443\u043f\u0435\u043d\u044c\u043a\u0438 \u0438\u0437 \u0433\u043b\u0430\u0434\u043a\u043e\u0433\u043e \u043f\u0435\u0441\u0447\u0430\u043d\u0438\u043a\u0430",
    tab: [[4, 226]]
  },
  607: {
    id: "607",
    type: "minecraft:smooth_quartz_stairs",
    name: "\u0421\u0442\u0443\u043f\u0435\u043d\u044c\u043a\u0438 \u0438\u0437 \u0433\u043b\u0430\u0434\u043a\u043e\u0433\u043e \u043a\u0432\u0430\u0440\u0446\u0430",
    tab: [[4, 313]]
  },
  608: {
    id: "608",
    type: "minecraft:granite_stairs",
    name: "\u0413\u0440\u0430\u043d\u0438\u0442\u043d\u044b\u0435 \u0441\u0442\u0443\u043f\u0435\u043d\u044c\u043a\u0438",
    tab: [[4, 170]]
  },
  609: {
    id: "609",
    type: "minecraft:andesite_stairs",
    name: "\u0410\u043d\u0434\u0435\u0437\u0438\u0442\u043e\u0432\u044b\u0435 \u0441\u0442\u0443\u043f\u0435\u043d\u044c\u043a\u0438",
    tab: [[4, 184]]
  },
  610: {
    id: "610",
    type: "minecraft:red_nether_brick_stairs",
    name: "\u0421\u0442\u0443\u043f\u0435\u043d\u044c\u043a\u0438 \u0438\u0437 \u043a\u0440\u0430\u0441\u043d\u043e\u0433\u043e \u043d\u0435\u0437\u0435\u0440\u0441\u043a\u043e\u0433\u043e \u043a\u0438\u0440\u043f\u0438\u0447\u0430",
    tab: [[4, 260]]
  },
  611: {
    id: "611",
    type: "minecraft:polished_andesite_stairs",
    name: "\u0421\u0442\u0443\u043f\u0435\u043d\u044c\u043a\u0438 \u0438\u0437 \u043f\u043e\u043b\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u0433\u043e \u0430\u043d\u0434\u0435\u0437\u0438\u0442\u0430",
    tab: [[4, 188]]
  },
  612: {
    id: "612",
    type: "minecraft:diorite_stairs",
    name: "\u0414\u0438\u043e\u0440\u0438\u0442\u043e\u0432\u044b\u0435 \u0441\u0442\u0443\u043f\u0435\u043d\u044c\u043a\u0438",
    tab: [[4, 177]]
  },
  613: {
    id: "613",
    type: "minecraft:cobbled_deepslate_stairs",
    name: "\u0421\u0442\u0443\u043f\u0435\u043d\u044c\u043a\u0438 \u0438\u0437 \u043a\u043e\u043b\u043e\u0442\u043e\u0433\u043e \u0433\u043b\u0443\u0431\u0438\u043d\u043d\u043e\u0433\u043e \u0441\u043b\u0430\u043d\u0446\u0430",
    tab: [[4, 192]]
  },
  614: {
    id: "614",
    type: "minecraft:polished_deepslate_stairs",
    name: "\u0421\u0442\u0443\u043f\u0435\u043d\u044c\u043a\u0438 \u0438\u0437 \u043f\u043e\u043b\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u0433\u043e \u0433\u043b\u0443\u0431\u0438\u043d\u043d\u043e\u0433\u043e \u0441\u043b\u0430\u043d\u0446\u0430",
    tab: [[4, 197]]
  },
  615: {
    id: "615",
    type: "minecraft:deepslate_brick_stairs",
    name: "\u0421\u0442\u0443\u043f\u0435\u043d\u044c\u043a\u0438 \u0438\u0437 \u0433\u043b\u0443\u0431\u0438\u043d\u043d\u043e\u0441\u043b\u0430\u043d\u0446\u0435\u0432\u043e\u0433\u043e \u043a\u0438\u0440\u043f\u0438\u0447\u0430",
    tab: [[4, 202]]
  },
  616: {
    id: "616",
    type: "minecraft:deepslate_tile_stairs",
    name: "\u0421\u0442\u0443\u043f\u0435\u043d\u044c\u043a\u0438 \u0438\u0437 \u0433\u043b\u0443\u0431\u0438\u043d\u043d\u043e\u0441\u043b\u0430\u043d\u0446\u0435\u0432\u043e\u0433\u043e \u043f\u043b\u0438\u0442\u043d\u044f\u043a\u0430",
    tab: [[4, 207]]
  },
  617: {
    id: "617",
    type: "minecraft:polished_granite_slab",
    name: "\u041f\u043b\u0438\u0442\u0430 \u0438\u0437 \u043f\u043e\u043b\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u0433\u043e \u0433\u0440\u0430\u043d\u0438\u0442\u0430",
    tab: [[4, 175]]
  },
  618: {
    id: "618",
    type: "minecraft:smooth_red_sandstone_slab",
    name: "\u041f\u043b\u0438\u0442\u0430 \u0438\u0437 \u0433\u043b\u0430\u0434\u043a\u043e\u0433\u043e \u043a\u0440\u0430\u0441\u043d\u043e\u0433\u043e \u043f\u0435\u0441\u0447\u0430\u043d\u0438\u043a\u0430",
    tab: [[4, 237]]
  },
  619: {
    id: "619",
    type: "minecraft:mossy_stone_brick_slab",
    name: "\u041f\u043b\u0438\u0442\u0430 \u0438\u0437 \u0437\u0430\u043c\u0448\u0435\u043b\u043e\u0433\u043e \u043a\u0430\u043c\u0435\u043d\u043d\u043e\u0433\u043e \u043a\u0438\u0440\u043f\u0438\u0447\u0430",
    tab: [[4, 167]]
  },
  620: {
    id: "620",
    type: "minecraft:polished_diorite_slab",
    name: "\u041f\u043b\u0438\u0442\u0430 \u0438\u0437 \u043f\u043e\u043b\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u0433\u043e \u0434\u0438\u043e\u0440\u0438\u0442\u0430",
    tab: [[4, 182]]
  },
  621: {
    id: "621",
    type: "minecraft:mossy_cobblestone_slab",
    name: "\u0417\u0430\u043c\u0448\u0435\u043b\u0430\u044f \u0431\u0443\u043b\u044b\u0436\u043d\u0430\u044f \u043f\u043b\u0438\u0442\u0430",
    tab: [[4, 155]]
  },
  622: {
    id: "622",
    type: "minecraft:end_stone_brick_slab",
    name: "\u041f\u043b\u0438\u0442\u0430 \u0438\u0437 \u044d\u043d\u0434\u0435\u0440\u043d\u044f\u043a\u043e\u0432\u043e\u0433\u043e \u043a\u0438\u0440\u043f\u0438\u0447\u0430",
    tab: [[4, 286]]
  },
  623: {
    id: "623",
    type: "minecraft:smooth_sandstone_slab",
    name: "\u041f\u043b\u0438\u0442\u0430 \u0438\u0437 \u0433\u043b\u0430\u0434\u043a\u043e\u0433\u043e \u043f\u0435\u0441\u0447\u0430\u043d\u0438\u043a\u0430",
    tab: [[4, 227]]
  },
  624: {
    id: "624",
    type: "minecraft:smooth_quartz_slab",
    name: "\u041f\u043b\u0438\u0442\u0430 \u0438\u0437 \u0433\u043b\u0430\u0434\u043a\u043e\u0433\u043e \u043a\u0432\u0430\u0440\u0446\u0430",
    tab: [[4, 314]]
  },
  625: {
    id: "625",
    type: "minecraft:granite_slab",
    name: "\u0413\u0440\u0430\u043d\u0438\u0442\u043d\u0430\u044f \u043f\u043b\u0438\u0442\u0430",
    tab: [[4, 171]]
  },
  626: {
    id: "626",
    type: "minecraft:andesite_slab",
    name: "\u0410\u043d\u0434\u0435\u0437\u0438\u0442\u043e\u0432\u0430\u044f \u043f\u043b\u0438\u0442\u0430",
    tab: [[4, 185]]
  },
  627: {
    id: "627",
    type: "minecraft:red_nether_brick_slab",
    name: "\u041f\u043b\u0438\u0442\u0430 \u0438\u0437 \u043a\u0440\u0430\u0441\u043d\u043e\u0433\u043e \u043d\u0435\u0437\u0435\u0440\u0441\u043a\u043e\u0433\u043e \u043a\u0438\u0440\u043f\u0438\u0447\u0430",
    tab: [[4, 261]]
  },
  628: {
    id: "628",
    type: "minecraft:polished_andesite_slab",
    name: "\u041f\u043b\u0438\u0442\u0430 \u0438\u0437 \u043f\u043e\u043b\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u0433\u043e \u0430\u043d\u0434\u0435\u0437\u0438\u0442\u0430",
    tab: [[4, 189]]
  },
  629: {
    id: "629",
    type: "minecraft:diorite_slab",
    name: "\u0414\u0438\u043e\u0440\u0438\u0442\u043e\u0432\u0430\u044f \u043f\u043b\u0438\u0442\u0430",
    tab: [[4, 178]]
  },
  630: {
    id: "630",
    type: "minecraft:cobbled_deepslate_slab",
    name: "\u041f\u043b\u0438\u0442\u0430 \u0438\u0437 \u043a\u043e\u043b\u043e\u0442\u043e\u0433\u043e \u0433\u043b\u0443\u0431\u0438\u043d\u043d\u043e\u0433\u043e \u0441\u043b\u0430\u043d\u0446\u0430",
    tab: [[4, 193]]
  },
  631: {
    id: "631",
    type: "minecraft:polished_deepslate_slab",
    name: "\u041f\u043b\u0438\u0442\u0430 \u0438\u0437 \u043f\u043e\u043b\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u0433\u043e \u0433\u043b\u0443\u0431\u0438\u043d\u043d\u043e\u0433\u043e \u0441\u043b\u0430\u043d\u0446\u0430",
    tab: [[4, 198]]
  },
  632: {
    id: "632",
    type: "minecraft:deepslate_brick_slab",
    name: "\u041f\u043b\u0438\u0442\u0430 \u0438\u0437 \u0433\u043b\u0443\u0431\u0438\u043d\u043d\u043e\u0441\u043b\u0430\u043d\u0446\u0435\u0432\u043e\u0433\u043e \u043a\u0438\u0440\u043f\u0438\u0447\u0430",
    tab: [[4, 203]]
  },
  633: {
    id: "633",
    type: "minecraft:deepslate_tile_slab",
    name: "\u041f\u043b\u0438\u0442\u0430 \u0438\u0437 \u0433\u043b\u0443\u0431\u0438\u043d\u043d\u043e\u0441\u043b\u0430\u043d\u0446\u0435\u0432\u043e\u0433\u043e \u043f\u043b\u0438\u0442\u043d\u044f\u043a\u0430",
    tab: [[4, 208]]
  },
  634: {
    id: "634",
    type: "minecraft:scaffolding",
    name: "\u041f\u043e\u0434\u043c\u043e\u0441\u0442\u043a\u0438",
    tab: [[6, 44]]
  },
  635: {
    id: "635",
    type: "minecraft:redstone",
    name: "\u0420\u0435\u0434\u0441\u0442\u043e\u0443\u043d\u043e\u0432\u0430\u044f \u043f\u044b\u043b\u044c",
    tab: [[7, 0], [9, 72]]
  },
  636: {
    id: "636",
    type: "minecraft:redstone_torch",
    name: "\u0420\u0435\u0434\u0441\u0442\u043e\u0443\u043d\u043e\u0432\u044b\u0439 \u0444\u0430\u043a\u0435\u043b",
    tab: [[6, 2], [7, 1]]
  },
  637: {
    id: "637",
    type: "minecraft:redstone_block",
    name: "\u0420\u0435\u0434\u0441\u0442\u043e\u0443\u043d\u043e\u0432\u044b\u0439 \u0431\u043b\u043e\u043a",
    tab: [[4, 301], [7, 2]]
  },
  638: {
    id: "638",
    type: "minecraft:repeater",
    name: "\u0420\u0435\u0434\u0441\u0442\u043e\u0443\u043d\u043e\u0432\u044b\u0439 \u043f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0435\u043b\u044c",
    tab: [[7, 3]]
  },
  639: {
    id: "639",
    type: "minecraft:comparator",
    name: "\u0420\u0435\u0434\u0441\u0442\u043e\u0443\u043d\u043e\u0432\u044b\u0439 \u043a\u043e\u043c\u043f\u0430\u0440\u0430\u0442\u043e\u0440",
    tab: [[7, 4]]
  },
  640: {id: "640", type: "minecraft:piston", name: "\u041f\u043e\u0440\u0448\u0435\u043d\u044c", tab: [[7, 23]]},
  641: {
    id: "641",
    type: "minecraft:sticky_piston",
    name: "\u041b\u0438\u043f\u043a\u0438\u0439 \u043f\u043e\u0440\u0448\u0435\u043d\u044c",
    tab: [[7, 24]]
  },
  642: {
    id: "642", type: "minecraft:slime_block", name: "\u0411\u043b\u043e\u043a \u0441\u043b\u0438\u0437\u0438",
    tab: [[8, 214], [7, 25]]
  },
  643: {
    id: "643",
    type: "minecraft:honey_block",
    name: "\u0411\u043b\u043e\u043a \u043c\u0451\u0434\u0430",
    tab: [[8, 215], [7, 26]]
  },
  644: {
    id: "644",
    type: "minecraft:observer",
    name: "\u041d\u0430\u0431\u043b\u044e\u0434\u0430\u0442\u0435\u043b\u044c",
    tab: [[7, 36]]
  },
  645: {id: "645", type: "minecraft:hopper", name: "\u0412\u043e\u0440\u043e\u043d\u043a\u0430", tab: [[7, 29]]},
  646: {
    id: "646",
    type: "minecraft:dispenser",
    name: "\u0420\u0430\u0437\u0434\u0430\u0442\u0447\u0438\u043a",
    tab: [[7, 27]]
  },
  647: {
    id: "647",
    type: "minecraft:dropper",
    name: "\u0412\u044b\u0431\u0440\u0430\u0441\u044b\u0432\u0430\u0442\u0435\u043b\u044c",
    tab: [[7, 28]]
  },
  648: {
    id: "648",
    type: "minecraft:lectern",
    name: "\u041a\u0430\u0444\u0435\u0434\u0440\u0430",
    tab: [[6, 84], [7, 20]]
  },
  649: {id: "649", type: "minecraft:target", name: "\u041c\u0438\u0448\u0435\u043d\u044c", tab: [[7, 5]]},
  650: {id: "650", type: "minecraft:lever", name: "\u0420\u044b\u0447\u0430\u0433", tab: [[7, 6]]},
  651: {
    id: "651", type: "minecraft:lightning_rod", name: "\u0413\u0440\u043e\u043c\u043e\u043e\u0442\u0432\u043e\u0434",
    tab: [[6, 49], [7, 22]]
  },
  652: {
    id: "652",
    type: "minecraft:daylight_detector",
    name: "\u0414\u0430\u0442\u0447\u0438\u043a \u0434\u043d\u0435\u0432\u043d\u043e\u0433\u043e \u0441\u0432\u0435\u0442\u0430",
    tab: [[7, 21]]
  },
  653: {
    id: "653",
    type: "minecraft:sculk_sensor",
    name: "\u0421\u043a\u0430\u043b\u043a-\u0441\u0435\u043d\u0441\u043e\u0440",
    tab: [[8, 223], [7, 13]]
  },
  654: {
    id: "654",
    type: "minecraft:calibrated_sculk_sensor",
    name: "\u041e\u0442\u043a\u0430\u043b\u0438\u0431\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0439 \u0441\u043a\u0430\u043b\u043a-\u0441\u0435\u043d\u0441\u043e\u0440",
    tab: [[7, 14]]
  },
  655: {id: "655", type: "minecraft:tripwire_hook", name: "\u041a\u0440\u044e\u043a", tab: [[7, 18]]},
  656: {
    id: "656",
    type: "minecraft:trapped_chest",
    name: "\u0421\u0443\u043d\u0434\u0443\u043a-\u043b\u043e\u0432\u0443\u0448\u043a\u0430",
    tab: [[7, 34]]
  },
  657: {id: "657", type: "minecraft:tnt", name: "\u0414\u0438\u043d\u0430\u043c\u0438\u0442", tab: [[7, 56], [3, 44]]},
  658: {
    id: "658",
    type: "minecraft:redstone_lamp",
    name: "\u0420\u0435\u0434\u0441\u0442\u043e\u0443\u043d\u043e\u0432\u044b\u0439 \u0444\u043e\u043d\u0430\u0440\u044c",
    tab: [[6, 8], [7, 57]]
  },
  659: {
    id: "659",
    type: "minecraft:note_block",
    name: "\u041d\u043e\u0442\u043d\u044b\u0439 \u0431\u043b\u043e\u043a",
    tab: [[6, 33], [7, 37]]
  },
  660: {
    id: "660",
    type: "minecraft:stone_button",
    name: "\u041a\u0430\u043c\u0435\u043d\u043d\u0430\u044f \u043a\u043d\u043e\u043f\u043a\u0430",
    tab: [[4, 148], [7, 8]]
  },
  661: {
    id: "661",
    type: "minecraft:polished_blackstone_button",
    name: "\u041a\u043d\u043e\u043f\u043a\u0430 \u0438\u0437 \u043f\u043e\u043b\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u0433\u043e \u0447\u0435\u0440\u043d\u0438\u0442\u0430",
    tab: [[4, 277]]
  },
  662: {
    id: "662",
    type: "minecraft:oak_button",
    name: "\u0414\u0443\u0431\u043e\u0432\u0430\u044f \u043a\u043d\u043e\u043f\u043a\u0430",
    tab: [[4, 12], [7, 7]]
  },
  663: {
    id: "663",
    type: "minecraft:spruce_button",
    name: "\u0415\u043b\u043e\u0432\u0430\u044f \u043a\u043d\u043e\u043f\u043a\u0430",
    tab: [[4, 25]]
  },
  664: {
    id: "664",
    type: "minecraft:birch_button",
    name: "\u0411\u0435\u0440\u0451\u0437\u043e\u0432\u0430\u044f \u043a\u043d\u043e\u043f\u043a\u0430",
    tab: [[4, 38]]
  },
  665: {
    id: "665",
    type: "minecraft:jungle_button",
    name: "\u041a\u043d\u043e\u043f\u043a\u0430 \u0438\u0437 \u0442\u0440\u043e\u043f\u0438\u0447\u0435\u0441\u043a\u043e\u0433\u043e \u0434\u0435\u0440\u0435\u0432\u0430",
    tab: [[4, 51]]
  },
  666: {
    id: "666",
    type: "minecraft:acacia_button",
    name: "\u0410\u043a\u0430\u0446\u0438\u0435\u0432\u0430\u044f \u043a\u043d\u043e\u043f\u043a\u0430",
    tab: [[4, 64]]
  },
  667: {
    id: "667",
    type: "minecraft:cherry_button",
    name: "\u0412\u0438\u0448\u043d\u0451\u0432\u0430\u044f \u043a\u043d\u043e\u043f\u043a\u0430",
    tab: [[4, 103]]
  },
  668: {
    id: "668",
    type: "minecraft:dark_oak_button",
    name: "\u041a\u043d\u043e\u043f\u043a\u0430 \u0438\u0437 \u0442\u0451\u043c\u043d\u043e\u0433\u043e \u0434\u0443\u0431\u0430",
    tab: [[4, 77]]
  },
  669: {
    id: "669",
    type: "minecraft:mangrove_button",
    name: "\u041c\u0430\u043d\u0433\u0440\u043e\u0432\u0430\u044f \u043a\u043d\u043e\u043f\u043a\u0430",
    tab: [[4, 90]]
  },
  670: {
    id: "670",
    type: "minecraft:bamboo_button",
    name: "\u0411\u0430\u043c\u0431\u0443\u043a\u043e\u0432\u0430\u044f \u043a\u043d\u043e\u043f\u043a\u0430",
    tab: [[4, 117]]
  },
  671: {
    id: "671",
    type: "minecraft:crimson_button",
    name: "\u0411\u0430\u0433\u0440\u043e\u0432\u0430\u044f \u043a\u043d\u043e\u043f\u043a\u0430",
    tab: [[4, 130]]
  },
  672: {
    id: "672",
    type: "minecraft:warped_button",
    name: "\u0418\u0441\u043a\u0430\u0436\u0451\u043d\u043d\u0430\u044f \u043a\u043d\u043e\u043f\u043a\u0430",
    tab: [[4, 143]]
  },
  673: {
    id: "673",
    type: "minecraft:stone_pressure_plate",
    name: "\u041a\u0430\u043c\u0435\u043d\u043d\u0430\u044f \u043d\u0430\u0436\u0438\u043c\u043d\u0430\u044f \u043f\u043b\u0438\u0442\u0430",
    tab: [[4,
      147], [7, 10]]
  },
  674: {
    id: "674",
    type: "minecraft:polished_blackstone_pressure_plate",
    name: "\u041d\u0430\u0436\u0438\u043c\u043d\u0430\u044f \u043f\u043b\u0438\u0442\u0430 \u0438\u0437 \u043f\u043e\u043b\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u0433\u043e \u0447\u0435\u0440\u043d\u0438\u0442\u0430",
    tab: [[4, 276]]
  },
  675: {
    id: "675",
    type: "minecraft:light_weighted_pressure_plate",
    name: "\u0412\u0435\u0441\u043e\u0432\u0430\u044f \u043f\u043b\u0430\u0441\u0442\u0438\u043d\u0430",
    tab: [[4, 300], [7, 11]]
  },
  676: {
    id: "676",
    type: "minecraft:heavy_weighted_pressure_plate",
    name: "\u0411\u043e\u043b\u044c\u0448\u0435\u0433\u0440\u0443\u0437\u043d\u0430\u044f \u0432\u0435\u0441\u043e\u0432\u0430\u044f \u043f\u043b\u0430\u0441\u0442\u0438\u043d\u0430",
    tab: [[4, 297], [7, 12]]
  },
  677: {
    id: "677",
    type: "minecraft:oak_pressure_plate",
    name: "\u0414\u0443\u0431\u043e\u0432\u0430\u044f \u043d\u0430\u0436\u0438\u043c\u043d\u0430\u044f \u043f\u043b\u0438\u0442\u0430",
    tab: [[4, 11], [7, 9]]
  },
  678: {
    id: "678",
    type: "minecraft:spruce_pressure_plate",
    name: "\u0415\u043b\u043e\u0432\u0430\u044f \u043d\u0430\u0436\u0438\u043c\u043d\u0430\u044f \u043f\u043b\u0438\u0442\u0430",
    tab: [[4, 24]]
  },
  679: {
    id: "679",
    type: "minecraft:birch_pressure_plate",
    name: "\u0411\u0435\u0440\u0451\u0437\u043e\u0432\u0430\u044f \u043d\u0430\u0436\u0438\u043c\u043d\u0430\u044f \u043f\u043b\u0438\u0442\u0430",
    tab: [[4, 37]]
  },
  680: {
    id: "680",
    type: "minecraft:jungle_pressure_plate",
    name: "\u041d\u0430\u0436\u0438\u043c\u043d\u0430\u044f \u043f\u043b\u0438\u0442\u0430 \u0438\u0437 \u0442\u0440\u043e\u043f\u0438\u0447\u0435\u0441\u043a\u043e\u0433\u043e \u0434\u0435\u0440\u0435\u0432\u0430",
    tab: [[4, 50]]
  },
  681: {
    id: "681",
    type: "minecraft:acacia_pressure_plate",
    name: "\u0410\u043a\u0430\u0446\u0438\u0435\u0432\u0430\u044f \u043d\u0430\u0436\u0438\u043c\u043d\u0430\u044f \u043f\u043b\u0438\u0442\u0430",
    tab: [[4, 63]]
  },
  682: {
    id: "682",
    type: "minecraft:cherry_pressure_plate",
    name: "\u0412\u0438\u0448\u043d\u0451\u0432\u0430\u044f \u043d\u0430\u0436\u0438\u043c\u043d\u0430\u044f \u043f\u043b\u0438\u0442\u0430",
    tab: [[4, 102]]
  },
  683: {
    id: "683",
    type: "minecraft:dark_oak_pressure_plate",
    name: "\u041d\u0430\u0436\u0438\u043c\u043d\u0430\u044f \u043f\u043b\u0438\u0442\u0430 \u0438\u0437 \u0442\u0451\u043c\u043d\u043e\u0433\u043e \u0434\u0443\u0431\u0430",
    tab: [[4, 76]]
  },
  684: {
    id: "684",
    type: "minecraft:mangrove_pressure_plate",
    name: "\u041c\u0430\u043d\u0433\u0440\u043e\u0432\u0430\u044f \u043d\u0430\u0436\u0438\u043c\u043d\u0430\u044f \u043f\u043b\u0438\u0442\u0430",
    tab: [[4, 89]]
  },
  685: {
    id: "685",
    type: "minecraft:bamboo_pressure_plate",
    name: "\u0411\u0430\u043c\u0431\u0443\u043a\u043e\u0432\u0430\u044f \u043d\u0430\u0436\u0438\u043c\u043d\u0430\u044f \u043f\u043b\u0438\u0442\u0430",
    tab: [[4, 116]]
  },
  686: {
    id: "686",
    type: "minecraft:crimson_pressure_plate",
    name: "\u0411\u0430\u0433\u0440\u043e\u0432\u0430\u044f \u043d\u0430\u0436\u0438\u043c\u043d\u0430\u044f \u043f\u043b\u0438\u0442\u0430",
    tab: [[4, 129]]
  },
  687: {
    id: "687",
    type: "minecraft:warped_pressure_plate",
    name: "\u0418\u0441\u043a\u0430\u0436\u0451\u043d\u043d\u0430\u044f \u043d\u0430\u0436\u0438\u043c\u043d\u0430\u044f \u043f\u043b\u0438\u0442\u0430",
    tab: [[4, 142]]
  },
  688: {
    id: "688",
    type: "minecraft:iron_door",
    name: "\u0416\u0435\u043b\u0435\u0437\u043d\u0430\u044f \u0434\u0432\u0435\u0440\u044c",
    tab: [[4, 295], [7, 52]]
  },
  689: {
    id: "689",
    type: "minecraft:oak_door",
    name: "\u0414\u0443\u0431\u043e\u0432\u0430\u044f \u0434\u0432\u0435\u0440\u044c",
    tab: [[4, 9], [7, 51]]
  },
  690: {
    id: "690",
    type: "minecraft:spruce_door",
    name: "\u0415\u043b\u043e\u0432\u0430\u044f \u0434\u0432\u0435\u0440\u044c",
    tab: [[4, 22]]
  },
  691: {
    id: "691",
    type: "minecraft:birch_door",
    name: "\u0411\u0435\u0440\u0451\u0437\u043e\u0432\u0430\u044f \u0434\u0432\u0435\u0440\u044c",
    tab: [[4, 35]]
  },
  692: {
    id: "692",
    type: "minecraft:jungle_door",
    name: "\u0414\u0432\u0435\u0440\u044c \u0438\u0437 \u0442\u0440\u043e\u043f\u0438\u0447\u0435\u0441\u043a\u043e\u0433\u043e \u0434\u0435\u0440\u0435\u0432\u0430",
    tab: [[4, 48]]
  },
  693: {
    id: "693",
    type: "minecraft:acacia_door",
    name: "\u0410\u043a\u0430\u0446\u0438\u0435\u0432\u0430\u044f \u0434\u0432\u0435\u0440\u044c",
    tab: [[4, 61]]
  },
  694: {
    id: "694",
    type: "minecraft:cherry_door",
    name: "\u0412\u0438\u0448\u043d\u0451\u0432\u0430\u044f \u0434\u0432\u0435\u0440\u044c",
    tab: [[4, 100]]
  },
  695: {
    id: "695",
    type: "minecraft:dark_oak_door",
    name: "\u0414\u0432\u0435\u0440\u044c \u0438\u0437 \u0442\u0451\u043c\u043d\u043e\u0433\u043e \u0434\u0443\u0431\u0430",
    tab: [[4, 74]]
  },
  696: {
    id: "696",
    type: "minecraft:mangrove_door",
    name: "\u041c\u0430\u043d\u0433\u0440\u043e\u0432\u0430\u044f \u0434\u0432\u0435\u0440\u044c",
    tab: [[4, 87]]
  },
  697: {
    id: "697",
    type: "minecraft:bamboo_door",
    name: "\u0411\u0430\u043c\u0431\u0443\u043a\u043e\u0432\u0430\u044f \u0434\u0432\u0435\u0440\u044c",
    tab: [[4, 114]]
  },
  698: {
    id: "698",
    type: "minecraft:crimson_door",
    name: "\u0411\u0430\u0433\u0440\u043e\u0432\u0430\u044f \u0434\u0432\u0435\u0440\u044c",
    tab: [[4, 127]]
  },
  699: {
    id: "699",
    type: "minecraft:warped_door",
    name: "\u0418\u0441\u043a\u0430\u0436\u0451\u043d\u043d\u0430\u044f \u0434\u0432\u0435\u0440\u044c",
    tab: [[4, 140]]
  },
  700: {
    id: "700",
    type: "minecraft:iron_trapdoor",
    name: "\u0416\u0435\u043b\u0435\u0437\u043d\u044b\u0439 \u043b\u044e\u043a",
    tab: [[4, 296], [7, 55]]
  },
  701: {
    id: "701",
    type: "minecraft:oak_trapdoor",
    name: "\u0414\u0443\u0431\u043e\u0432\u044b\u0439 \u043b\u044e\u043a",
    tab: [[4, 10], [7, 54]]
  },
  702: {
    id: "702",
    type: "minecraft:spruce_trapdoor",
    name: "\u0415\u043b\u043e\u0432\u044b\u0439 \u043b\u044e\u043a",
    tab: [[4, 23]]
  },
  703: {
    id: "703",
    type: "minecraft:birch_trapdoor",
    name: "\u0411\u0435\u0440\u0451\u0437\u043e\u0432\u044b\u0439 \u043b\u044e\u043a",
    tab: [[4, 36]]
  },
  704: {
    id: "704",
    type: "minecraft:jungle_trapdoor",
    name: "\u041b\u044e\u043a \u0438\u0437 \u0442\u0440\u043e\u043f\u0438\u0447\u0435\u0441\u043a\u043e\u0433\u043e \u0434\u0435\u0440\u0435\u0432\u0430",
    tab: [[4, 49]]
  },
  705: {
    id: "705",
    type: "minecraft:acacia_trapdoor",
    name: "\u0410\u043a\u0430\u0446\u0438\u0435\u0432\u044b\u0439 \u043b\u044e\u043a",
    tab: [[4, 62]]
  },
  706: {
    id: "706",
    type: "minecraft:cherry_trapdoor",
    name: "\u0412\u0438\u0448\u043d\u0451\u0432\u044b\u0439 \u043b\u044e\u043a",
    tab: [[4, 101]]
  },
  707: {
    id: "707",
    type: "minecraft:dark_oak_trapdoor",
    name: "\u041b\u044e\u043a \u0438\u0437 \u0442\u0451\u043c\u043d\u043e\u0433\u043e \u0434\u0443\u0431\u0430",
    tab: [[4, 75]]
  },
  708: {
    id: "708",
    type: "minecraft:mangrove_trapdoor",
    name: "\u041c\u0430\u043d\u0433\u0440\u043e\u0432\u044b\u0439 \u043b\u044e\u043a",
    tab: [[4, 88]]
  },
  709: {
    id: "709",
    type: "minecraft:bamboo_trapdoor",
    name: "\u0411\u0430\u043c\u0431\u0443\u043a\u043e\u0432\u044b\u0439 \u043b\u044e\u043a",
    tab: [[4, 115]]
  },
  710: {
    id: "710", type: "minecraft:crimson_trapdoor",
    name: "\u0411\u0430\u0433\u0440\u043e\u0432\u044b\u0439 \u043b\u044e\u043a", tab: [[4, 128]]
  },
  711: {
    id: "711",
    type: "minecraft:warped_trapdoor",
    name: "\u0418\u0441\u043a\u0430\u0436\u0451\u043d\u043d\u044b\u0439 \u043b\u044e\u043a",
    tab: [[4, 141]]
  },
  712: {
    id: "712",
    type: "minecraft:oak_fence_gate",
    name: "\u0414\u0443\u0431\u043e\u0432\u0430\u044f \u043a\u0430\u043b\u0438\u0442\u043a\u0430",
    tab: [[4, 8], [7, 53]]
  },
  713: {
    id: "713",
    type: "minecraft:spruce_fence_gate",
    name: "\u0415\u043b\u043e\u0432\u0430\u044f \u043a\u0430\u043b\u0438\u0442\u043a\u0430",
    tab: [[4, 21]]
  },
  714: {
    id: "714",
    type: "minecraft:birch_fence_gate",
    name: "\u0411\u0435\u0440\u0451\u0437\u043e\u0432\u0430\u044f \u043a\u0430\u043b\u0438\u0442\u043a\u0430",
    tab: [[4, 34]]
  },
  715: {
    id: "715",
    type: "minecraft:jungle_fence_gate",
    name: "\u041a\u0430\u043b\u0438\u0442\u043a\u0430 \u0438\u0437 \u0442\u0440\u043e\u043f\u0438\u0447\u0435\u0441\u043a\u043e\u0433\u043e \u0434\u0435\u0440\u0435\u0432\u0430",
    tab: [[4, 47]]
  },
  716: {
    id: "716",
    type: "minecraft:acacia_fence_gate",
    name: "\u0410\u043a\u0430\u0446\u0438\u0435\u0432\u0430\u044f \u043a\u0430\u043b\u0438\u0442\u043a\u0430",
    tab: [[4, 60]]
  },
  717: {
    id: "717",
    type: "minecraft:cherry_fence_gate",
    name: "\u0412\u0438\u0448\u043d\u0451\u0432\u0430\u044f \u043a\u0430\u043b\u0438\u0442\u043a\u0430",
    tab: [[4, 99]]
  },
  718: {
    id: "718",
    type: "minecraft:dark_oak_fence_gate",
    name: "\u041a\u0430\u043b\u0438\u0442\u043a\u0430 \u0438\u0437 \u0442\u0451\u043c\u043d\u043e\u0433\u043e \u0434\u0443\u0431\u0430",
    tab: [[4, 73]]
  },
  719: {
    id: "719",
    type: "minecraft:mangrove_fence_gate",
    name: "\u041c\u0430\u043d\u0433\u0440\u043e\u0432\u0430\u044f \u043a\u0430\u043b\u0438\u0442\u043a\u0430",
    tab: [[4, 86]]
  },
  720: {
    id: "720",
    type: "minecraft:bamboo_fence_gate",
    name: "\u0411\u0430\u043c\u0431\u0443\u043a\u043e\u0432\u0430\u044f \u043a\u0430\u043b\u0438\u0442\u043a\u0430",
    tab: [[4, 113]]
  },
  721: {
    id: "721",
    type: "minecraft:crimson_fence_gate",
    name: "\u0411\u0430\u0433\u0440\u043e\u0432\u0430\u044f \u043a\u0430\u043b\u0438\u0442\u043a\u0430",
    tab: [[4, 126]]
  },
  722: {
    id: "722",
    type: "minecraft:warped_fence_gate",
    name: "\u0418\u0441\u043a\u0430\u0436\u0451\u043d\u043d\u0430\u044f \u043a\u0430\u043b\u0438\u0442\u043a\u0430",
    tab: [[4, 139]]
  },
  723: {
    id: "723",
    type: "minecraft:powered_rail",
    name: "\u042d\u043d\u0435\u0440\u0433\u043e\u0440\u0435\u043b\u044c\u0441\u044b",
    tab: [[7, 41], [2, 77]]
  },
  724: {
    id: "724",
    type: "minecraft:detector_rail",
    name: "\u0420\u0435\u043b\u044c\u0441\u044b \u0441 \u0434\u0430\u0442\u0447\u0438\u043a\u043e\u043c",
    tab: [[7, 42], [2, 78]]
  },
  725: {id: "725", type: "minecraft:rail", name: "\u0420\u0435\u043b\u044c\u0441\u044b", tab: [[7, 40], [2, 76]]},
  726: {
    id: "726",
    type: "minecraft:activator_rail",
    name: "\u0410\u043a\u0442\u0438\u0432\u0438\u0440\u0443\u044e\u0449\u0438\u0435 \u0440\u0435\u043b\u044c\u0441\u044b",
    tab: [[7, 43], [2, 79]]
  },
  727: {id: "727", type: "minecraft:saddle", name: "\u0421\u0435\u0434\u043b\u043e", tab: [[2, 55]]},
  728: {
    id: "728",
    type: "minecraft:minecart",
    name: "\u0412\u0430\u0433\u043e\u043d\u0435\u0442\u043a\u0430",
    tab: [[7, 44], [2, 80]]
  },
  729: {
    id: "729",
    type: "minecraft:chest_minecart",
    name: "\u0413\u0440\u0443\u0437\u043e\u0432\u0430\u044f \u0432\u0430\u0433\u043e\u043d\u0435\u0442\u043a\u0430",
    tab: [[7, 46], [2, 82]]
  },
  730: {
    id: "730",
    type: "minecraft:furnace_minecart",
    name: "\u0421\u0430\u043c\u043e\u0445\u043e\u0434\u043d\u0430\u044f \u0432\u0430\u0433\u043e\u043d\u0435\u0442\u043a\u0430",
    tab: [[7, 47], [2, 83]]
  },
  731: {
    id: "731",
    type: "minecraft:tnt_minecart",
    name: "\u0412\u0430\u0433\u043e\u043d\u0435\u0442\u043a\u0430 \u0441 \u0434\u0438\u043d\u0430\u043c\u0438\u0442\u043e\u043c",
    tab: [[7, 48], [2, 84]]
  },
  732: {
    id: "732",
    type: "minecraft:hopper_minecart",
    name: "\u0417\u0430\u0433\u0440\u0443\u0437\u043e\u0447\u043d\u0430\u044f \u0432\u0430\u0433\u043e\u043d\u0435\u0442\u043a\u0430",
    tab: [[7, 45], [2, 81]]
  },
  733: {
    id: "733",
    type: "minecraft:carrot_on_a_stick",
    name: "\u0423\u0434\u043e\u0447\u043a\u0430 \u0441 \u043c\u043e\u0440\u043a\u043e\u0432\u043a\u043e\u0439",
    tab: [[2, 56]]
  },
  734: {
    id: "734",
    type: "minecraft:warped_fungus_on_a_stick",
    name: "\u0423\u0434\u043e\u0447\u043a\u0430 \u0441 \u0438\u0441\u043a\u0430\u0436\u0451\u043d\u043d\u044b\u043c \u0433\u0440\u0438\u0431\u043e\u043c",
    tab: [[2, 57]]
  },
  735: {id: "735", type: "minecraft:elytra", name: "\u042d\u043b\u0438\u0442\u0440\u044b", tab: [[2, 51]]},
  736: {
    id: "736",
    type: "minecraft:oak_boat",
    name: "\u0414\u0443\u0431\u043e\u0432\u0430\u044f \u043b\u043e\u0434\u043a\u0430",
    tab: [[2, 58]]
  },
  737: {
    id: "737",
    type: "minecraft:oak_chest_boat",
    name: "\u0414\u0443\u0431\u043e\u0432\u0430\u044f \u0433\u0440\u0443\u0437\u043e\u0432\u0430\u044f \u043b\u043e\u0434\u043a\u0430",
    tab: [[7, 49], [2, 59]]
  },
  738: {
    id: "738",
    type: "minecraft:spruce_boat",
    name: "\u0415\u043b\u043e\u0432\u0430\u044f \u043b\u043e\u0434\u043a\u0430",
    tab: [[2, 60]]
  },
  739: {
    id: "739",
    type: "minecraft:spruce_chest_boat",
    name: "\u0415\u043b\u043e\u0432\u0430\u044f \u0433\u0440\u0443\u0437\u043e\u0432\u0430\u044f \u043b\u043e\u0434\u043a\u0430",
    tab: [[2, 61]]
  },
  740: {
    id: "740", type: "minecraft:birch_boat",
    name: "\u0411\u0435\u0440\u0451\u0437\u043e\u0432\u0430\u044f \u043b\u043e\u0434\u043a\u0430", tab: [[2, 62]]
  },
  741: {
    id: "741",
    type: "minecraft:birch_chest_boat",
    name: "\u0411\u0435\u0440\u0451\u0437\u043e\u0432\u0430\u044f \u0433\u0440\u0443\u0437\u043e\u0432\u0430\u044f \u043b\u043e\u0434\u043a\u0430",
    tab: [[2, 63]]
  },
  742: {
    id: "742",
    type: "minecraft:jungle_boat",
    name: "\u041b\u043e\u0434\u043a\u0430 \u0438\u0437 \u0442\u0440\u043e\u043f\u0438\u0447\u0435\u0441\u043a\u043e\u0433\u043e \u0434\u0435\u0440\u0435\u0432\u0430",
    tab: [[2, 64]]
  },
  743: {
    id: "743",
    type: "minecraft:jungle_chest_boat",
    name: "\u0413\u0440\u0443\u0437\u043e\u0432\u0430\u044f \u043b\u043e\u0434\u043a\u0430 \u0438\u0437 \u0442\u0440\u043e\u043f\u0438\u0447\u0435\u0441\u043a\u043e\u0433\u043e \u0434\u0435\u0440\u0435\u0432\u0430",
    tab: [[2, 65]]
  },
  744: {
    id: "744",
    type: "minecraft:acacia_boat",
    name: "\u0410\u043a\u0430\u0446\u0438\u0435\u0432\u0430\u044f \u043b\u043e\u0434\u043a\u0430",
    tab: [[2, 66]]
  },
  745: {
    id: "745",
    type: "minecraft:acacia_chest_boat",
    name: "\u0410\u043a\u0430\u0446\u0438\u0435\u0432\u0430\u044f \u0433\u0440\u0443\u0437\u043e\u0432\u0430\u044f \u043b\u043e\u0434\u043a\u0430",
    tab: [[2, 67]]
  },
  746: {
    id: "746",
    type: "minecraft:cherry_boat",
    name: "\u0412\u0438\u0448\u043d\u0451\u0432\u0430\u044f \u043b\u043e\u0434\u043a\u0430",
    tab: [[2, 72]]
  },
  747: {
    id: "747",
    type: "minecraft:cherry_chest_boat",
    name: "\u0412\u0438\u0448\u043d\u0451\u0432\u0430\u044f \u0433\u0440\u0443\u0437\u043e\u0432\u0430\u044f \u043b\u043e\u0434\u043a\u0430",
    tab: [[2, 73]]
  },
  748: {
    id: "748",
    type: "minecraft:dark_oak_boat",
    name: "\u041b\u043e\u0434\u043a\u0430 \u0438\u0437 \u0442\u0451\u043c\u043d\u043e\u0433\u043e \u0434\u0443\u0431\u0430",
    tab: [[2, 68]]
  },
  749: {
    id: "749",
    type: "minecraft:dark_oak_chest_boat",
    name: "\u0413\u0440\u0443\u0437\u043e\u0432\u0430\u044f \u043b\u043e\u0434\u043a\u0430 \u0438\u0437 \u0442\u0451\u043c\u043d\u043e\u0433\u043e \u0434\u0443\u0431\u0430",
    tab: [[2, 69]]
  },
  750: {
    id: "750",
    type: "minecraft:mangrove_boat",
    name: "\u041c\u0430\u043d\u0433\u0440\u043e\u0432\u0430\u044f \u043b\u043e\u0434\u043a\u0430",
    tab: [[2, 70]]
  },
  751: {
    id: "751",
    type: "minecraft:mangrove_chest_boat",
    name: "\u041c\u0430\u043d\u0433\u0440\u043e\u0432\u0430\u044f \u0433\u0440\u0443\u0437\u043e\u0432\u0430\u044f \u043b\u043e\u0434\u043a\u0430",
    tab: [[2, 71]]
  },
  752: {
    id: "752",
    type: "minecraft:bamboo_raft",
    name: "\u0411\u0430\u043c\u0431\u0443\u043a\u043e\u0432\u044b\u0439 \u043f\u043b\u043e\u0442",
    tab: [[2, 74]]
  },
  753: {
    id: "753",
    type: "minecraft:bamboo_chest_raft",
    name: "\u0413\u0440\u0443\u0437\u043e\u0432\u043e\u0439 \u0431\u0430\u043c\u0431\u0443\u043a\u043e\u0432\u044b\u0439 \u043f\u043b\u043e\u0442",
    tab: [[7, 50], [2, 75]]
  },
  754: {
    id: "754",
    type: "minecraft:structure_block",
    name: "\u0411\u043b\u043e\u043a-\u043a\u043e\u043d\u0441\u0442\u0440\u0443\u043a\u0442\u043e\u0440"
  },
  755: {id: "755", type: "minecraft:jigsaw", name: "\u041f\u0430\u0437\u043b"},
  756: {
    id: "756",
    type: "minecraft:turtle_helmet",
    name: "\u0427\u0435\u0440\u0435\u043f\u0430\u0448\u0438\u0439 \u043f\u0430\u043d\u0446\u0438\u0440\u044c",
    tab: [[3, 38], [9, 86]]
  },
  757: {id: "757", type: "minecraft:scute", name: "\u0429\u0438\u0442\u043e\u043a", tab: [[9, 32]]},
  758: {id: "758", type: "minecraft:flint_and_steel", name: "\u041e\u0433\u043d\u0438\u0432\u043e", tab: [[2, 36]]},
  759: {
    id: "759", type: "minecraft:apple", name: "\u042f\u0431\u043b\u043e\u043a\u043e",
    tab: [[1, 0]]
  },
  760: {id: "760", type: "minecraft:bow", name: "\u041b\u0443\u043a", tab: [[3, 48]]},
  761: {id: "761", type: "minecraft:arrow", name: "\u0421\u0442\u0440\u0435\u043b\u0430", tab: [[3, 53]]},
  762: {id: "762", type: "minecraft:coal", name: "\u0423\u0433\u043e\u043b\u044c", tab: [[9, 0]]},
  763: {
    id: "763",
    type: "minecraft:charcoal",
    name: "\u0414\u0440\u0435\u0432\u0435\u0441\u043d\u044b\u0439 \u0443\u0433\u043e\u043b\u044c",
    tab: [[9, 1]]
  },
  764: {
    id: "764", type: "minecraft:diamond", name: "\u0410\u043b\u043c\u0430\u0437", tab: [[9,
      7]]
  },
  765: {id: "765", type: "minecraft:emerald", name: "\u0418\u0437\u0443\u043c\u0440\u0443\u0434", tab: [[9, 5]]},
  766: {id: "766", type: "minecraft:lapis_lazuli", name: "\u041b\u0430\u0437\u0443\u0440\u0438\u0442", tab: [[9, 6]]},
  767: {
    id: "767",
    type: "minecraft:quartz",
    name: "\u041d\u0435\u0437\u0435\u0440-\u043a\u0432\u0430\u0440\u0446",
    tab: [[9, 9]]
  },
  768: {
    id: "768",
    type: "minecraft:amethyst_shard",
    name: "\u041e\u0441\u043a\u043e\u043b\u043e\u043a \u0430\u043c\u0435\u0442\u0438\u0441\u0442\u0430",
    tab: [[9, 10]]
  },
  769: {
    id: "769",
    type: "minecraft:raw_iron",
    name: "\u0420\u0443\u0434\u043d\u043e\u0435 \u0436\u0435\u043b\u0435\u0437\u043e",
    tab: [[9, 2]]
  },
  770: {
    id: "770",
    type: "minecraft:iron_ingot",
    name: "\u0416\u0435\u043b\u0435\u0437\u043d\u044b\u0439 \u0441\u043b\u0438\u0442\u043e\u043a",
    tab: [[9, 13]]
  },
  771: {
    id: "771",
    type: "minecraft:raw_copper",
    name: "\u0420\u0443\u0434\u043d\u0430\u044f \u043c\u0435\u0434\u044c",
    tab: [[9, 3]]
  },
  772: {
    id: "772",
    type: "minecraft:copper_ingot",
    name: "\u041c\u0435\u0434\u043d\u044b\u0439 \u0441\u043b\u0438\u0442\u043e\u043a",
    tab: [[9, 14]]
  },
  773: {
    id: "773",
    type: "minecraft:raw_gold",
    name: "\u0420\u0443\u0434\u043d\u043e\u0435 \u0437\u043e\u043b\u043e\u0442\u043e",
    tab: [[9, 4]]
  },
  774: {
    id: "774",
    type: "minecraft:gold_ingot",
    name: "\u0417\u043e\u043b\u043e\u0442\u043e\u0439 \u0441\u043b\u0438\u0442\u043e\u043a",
    tab: [[9, 15]]
  },
  775: {
    id: "775",
    type: "minecraft:netherite_ingot",
    name: "\u041d\u0435\u0437\u0435\u0440\u0438\u0442\u043e\u0432\u044b\u0439 \u0441\u043b\u0438\u0442\u043e\u043a",
    tab: [[9, 17]]
  },
  776: {
    id: "776", type: "minecraft:netherite_scrap",
    name: "\u041d\u0435\u0437\u0435\u0440\u0438\u0442\u043e\u0432\u044b\u0439 \u043b\u043e\u043c", tab: [[9, 16]]
  },
  777: {
    id: "777",
    type: "minecraft:wooden_sword",
    name: "\u0414\u0435\u0440\u0435\u0432\u044f\u043d\u043d\u044b\u0439 \u043c\u0435\u0447",
    tab: [[3, 0]]
  },
  778: {
    id: "778",
    type: "minecraft:wooden_shovel",
    name: "\u0414\u0435\u0440\u0435\u0432\u044f\u043d\u043d\u0430\u044f \u043b\u043e\u043f\u0430\u0442\u0430",
    tab: [[2, 0]]
  },
  779: {
    id: "779",
    type: "minecraft:wooden_pickaxe",
    name: "\u0414\u0435\u0440\u0435\u0432\u044f\u043d\u043d\u0430\u044f \u043a\u0438\u0440\u043a\u0430",
    tab: [[2, 1]]
  },
  780: {
    id: "780",
    type: "minecraft:wooden_axe",
    name: "\u0414\u0435\u0440\u0435\u0432\u044f\u043d\u043d\u044b\u0439 \u0442\u043e\u043f\u043e\u0440",
    tab: [[2, 2], [3, 6]]
  },
  781: {
    id: "781",
    type: "minecraft:wooden_hoe",
    name: "\u0414\u0435\u0440\u0435\u0432\u044f\u043d\u043d\u0430\u044f \u043c\u043e\u0442\u044b\u0433\u0430",
    tab: [[2, 3]]
  },
  782: {
    id: "782",
    type: "minecraft:stone_sword",
    name: "\u041a\u0430\u043c\u0435\u043d\u043d\u044b\u0439 \u043c\u0435\u0447",
    tab: [[3, 1]]
  },
  783: {
    id: "783", type: "minecraft:stone_shovel",
    name: "\u041a\u0430\u043c\u0435\u043d\u043d\u0430\u044f \u043b\u043e\u043f\u0430\u0442\u0430", tab: [[2, 4]]
  },
  784: {
    id: "784",
    type: "minecraft:stone_pickaxe",
    name: "\u041a\u0430\u043c\u0435\u043d\u043d\u0430\u044f \u043a\u0438\u0440\u043a\u0430",
    tab: [[2, 5]]
  },
  785: {
    id: "785",
    type: "minecraft:stone_axe",
    name: "\u041a\u0430\u043c\u0435\u043d\u043d\u044b\u0439 \u0442\u043e\u043f\u043e\u0440",
    tab: [[2, 6], [3, 7]]
  },
  786: {
    id: "786",
    type: "minecraft:stone_hoe",
    name: "\u041a\u0430\u043c\u0435\u043d\u043d\u0430\u044f \u043c\u043e\u0442\u044b\u0433\u0430",
    tab: [[2, 7]]
  },
  787: {
    id: "787",
    type: "minecraft:golden_sword",
    name: "\u0417\u043e\u043b\u043e\u0442\u043e\u0439 \u043c\u0435\u0447",
    tab: [[3, 3]]
  },
  788: {
    id: "788",
    type: "minecraft:golden_shovel",
    name: "\u0417\u043e\u043b\u043e\u0442\u0430\u044f \u043b\u043e\u043f\u0430\u0442\u0430",
    tab: [[2, 12]]
  },
  789: {
    id: "789",
    type: "minecraft:golden_pickaxe",
    name: "\u0417\u043e\u043b\u043e\u0442\u0430\u044f \u043a\u0438\u0440\u043a\u0430",
    tab: [[2, 13]]
  },
  790: {
    id: "790",
    type: "minecraft:golden_axe",
    name: "\u0417\u043e\u043b\u043e\u0442\u043e\u0439 \u0442\u043e\u043f\u043e\u0440",
    tab: [[2, 14], [3, 9]]
  },
  791: {
    id: "791",
    type: "minecraft:golden_hoe",
    name: "\u0417\u043e\u043b\u043e\u0442\u0430\u044f \u043c\u043e\u0442\u044b\u0433\u0430",
    tab: [[2, 15]]
  },
  792: {
    id: "792",
    type: "minecraft:iron_sword",
    name: "\u0416\u0435\u043b\u0435\u0437\u043d\u044b\u0439 \u043c\u0435\u0447",
    tab: [[3, 2]]
  },
  793: {
    id: "793",
    type: "minecraft:iron_shovel",
    name: "\u0416\u0435\u043b\u0435\u0437\u043d\u0430\u044f \u043b\u043e\u043f\u0430\u0442\u0430",
    tab: [[2, 8]]
  },
  794: {
    id: "794",
    type: "minecraft:iron_pickaxe",
    name: "\u0416\u0435\u043b\u0435\u0437\u043d\u0430\u044f \u043a\u0438\u0440\u043a\u0430",
    tab: [[2, 9]]
  },
  795: {
    id: "795",
    type: "minecraft:iron_axe",
    name: "\u0416\u0435\u043b\u0435\u0437\u043d\u044b\u0439 \u0442\u043e\u043f\u043e\u0440",
    tab: [[2, 10], [3, 8]]
  },
  796: {
    id: "796",
    type: "minecraft:iron_hoe",
    name: "\u0416\u0435\u043b\u0435\u0437\u043d\u0430\u044f \u043c\u043e\u0442\u044b\u0433\u0430",
    tab: [[2, 11]]
  },
  797: {
    id: "797",
    type: "minecraft:diamond_sword",
    name: "\u0410\u043b\u043c\u0430\u0437\u043d\u044b\u0439 \u043c\u0435\u0447",
    tab: [[3, 4]]
  },
  798: {
    id: "798",
    type: "minecraft:diamond_shovel",
    name: "\u0410\u043b\u043c\u0430\u0437\u043d\u0430\u044f \u043b\u043e\u043f\u0430\u0442\u0430",
    tab: [[2, 16]]
  },
  799: {
    id: "799",
    type: "minecraft:diamond_pickaxe",
    name: "\u0410\u043b\u043c\u0430\u0437\u043d\u0430\u044f \u043a\u0438\u0440\u043a\u0430",
    tab: [[2, 17]]
  },
  800: {
    id: "800",
    type: "minecraft:diamond_axe",
    name: "\u0410\u043b\u043c\u0430\u0437\u043d\u044b\u0439 \u0442\u043e\u043f\u043e\u0440",
    tab: [[2, 18], [3, 10]]
  },
  801: {
    id: "801",
    type: "minecraft:diamond_hoe",
    name: "\u0410\u043b\u043c\u0430\u0437\u043d\u0430\u044f \u043c\u043e\u0442\u044b\u0433\u0430",
    tab: [[2, 19]]
  },
  802: {
    id: "802", type: "minecraft:netherite_sword",
    name: "\u041d\u0435\u0437\u0435\u0440\u0438\u0442\u043e\u0432\u044b\u0439 \u043c\u0435\u0447", tab: [[3, 5]]
  },
  803: {
    id: "803",
    type: "minecraft:netherite_shovel",
    name: "\u041d\u0435\u0437\u0435\u0440\u0438\u0442\u043e\u0432\u0430\u044f \u043b\u043e\u043f\u0430\u0442\u0430",
    tab: [[2, 20]]
  },
  804: {
    id: "804",
    type: "minecraft:netherite_pickaxe",
    name: "\u041d\u0435\u0437\u0435\u0440\u0438\u0442\u043e\u0432\u0430\u044f \u043a\u0438\u0440\u043a\u0430",
    tab: [[2, 21]]
  },
  805: {
    id: "805",
    type: "minecraft:netherite_axe",
    name: "\u041d\u0435\u0437\u0435\u0440\u0438\u0442\u043e\u0432\u044b\u0439 \u0442\u043e\u043f\u043e\u0440",
    tab: [[2, 22], [3, 11]]
  },
  806: {
    id: "806",
    type: "minecraft:netherite_hoe",
    name: "\u041d\u0435\u0437\u0435\u0440\u0438\u0442\u043e\u0432\u0430\u044f \u043c\u043e\u0442\u044b\u0433\u0430",
    tab: [[2, 23]]
  },
  807: {id: "807", type: "minecraft:stick", name: "\u041f\u0430\u043b\u043a\u0430", tab: [[9, 18]]},
  808: {id: "808", type: "minecraft:bowl", name: "\u041c\u0438\u0441\u043a\u0430", tab: [[9, 64]]},
  809: {
    id: "809",
    type: "minecraft:mushroom_stew",
    name: "\u0422\u0443\u0448\u0451\u043d\u044b\u0435 \u0433\u0440\u0438\u0431\u044b",
    tab: [[1,
      36]]
  },
  810: {id: "810", type: "minecraft:string", name: "\u041d\u0438\u0442\u044c", tab: [[7, 19], [9, 23]]},
  811: {id: "811", type: "minecraft:feather", name: "\u041f\u0435\u0440\u043e", tab: [[9, 24]]},
  812: {id: "812", type: "minecraft:gunpowder", name: "\u041f\u043e\u0440\u043e\u0445", tab: [[9, 74]]},
  813: {
    id: "813",
    type: "minecraft:wheat_seeds",
    name: "\u0421\u0435\u043c\u0435\u043d\u0430 \u043f\u0448\u0435\u043d\u0438\u0446\u044b",
    tab: [[8, 160]]
  },
  814: {
    id: "814", type: "minecraft:wheat", name: "\u041f\u0448\u0435\u043d\u0438\u0446\u0430",
    tab: [[9, 20]]
  },
  815: {id: "815", type: "minecraft:bread", name: "\u0425\u043b\u0435\u0431", tab: [[1, 30]]},
  816: {
    id: "816",
    type: "minecraft:leather_helmet",
    name: "\u041a\u043e\u0436\u0430\u043d\u044b\u0439 \u0448\u043b\u0435\u043c",
    tab: [[3, 14]]
  },
  817: {
    id: "817",
    type: "minecraft:leather_chestplate",
    name: "\u041a\u043e\u0436\u0430\u043d\u0430\u044f \u043a\u0443\u0440\u0442\u043a\u0430",
    tab: [[3, 15]]
  },
  818: {
    id: "818",
    type: "minecraft:leather_leggings",
    name: "\u041a\u043e\u0436\u0430\u043d\u044b\u0435 \u0448\u0442\u0430\u043d\u044b",
    tab: [[3, 16]]
  },
  819: {
    id: "819",
    type: "minecraft:leather_boots",
    name: "\u041a\u043e\u0436\u0430\u043d\u044b\u0435 \u0431\u043e\u0442\u0438\u043d\u043a\u0438",
    tab: [[3, 17]]
  },
  820: {id: "820", type: "minecraft:chainmail_helmet", name: "\u041a\u043e\u0439\u0444", tab: [[3, 18]]},
  821: {
    id: "821",
    type: "minecraft:chainmail_chestplate",
    name: "\u041a\u043e\u043b\u044c\u0447\u0443\u0433\u0430",
    tab: [[3, 19]]
  },
  822: {
    id: "822",
    type: "minecraft:chainmail_leggings",
    name: "\u041a\u043e\u043b\u044c\u0447\u0443\u0436\u043d\u044b\u0435 \u043f\u043e\u043d\u043e\u0436\u0438",
    tab: [[3, 20]]
  },
  823: {
    id: "823",
    type: "minecraft:chainmail_boots",
    name: "\u041a\u043e\u043b\u044c\u0447\u0443\u0436\u043d\u044b\u0435 \u0431\u043e\u0442\u0438\u043d\u043a\u0438",
    tab: [[3, 21]]
  },
  824: {
    id: "824",
    type: "minecraft:iron_helmet",
    name: "\u0416\u0435\u043b\u0435\u0437\u043d\u044b\u0439 \u0448\u043b\u0435\u043c",
    tab: [[3, 22]]
  },
  825: {
    id: "825",
    type: "minecraft:iron_chestplate",
    name: "\u0416\u0435\u043b\u0435\u0437\u043d\u044b\u0439 \u043d\u0430\u0433\u0440\u0443\u0434\u043d\u0438\u043a",
    tab: [[3, 23]]
  },
  826: {
    id: "826",
    type: "minecraft:iron_leggings",
    name: "\u0416\u0435\u043b\u0435\u0437\u043d\u044b\u0435 \u043f\u043e\u043d\u043e\u0436\u0438",
    tab: [[3, 24]]
  },
  827: {
    id: "827",
    type: "minecraft:iron_boots",
    name: "\u0416\u0435\u043b\u0435\u0437\u043d\u044b\u0435 \u0431\u043e\u0442\u0438\u043d\u043a\u0438",
    tab: [[3, 25]]
  },
  828: {
    id: "828",
    type: "minecraft:diamond_helmet",
    name: "\u0410\u043b\u043c\u0430\u0437\u043d\u044b\u0439 \u0448\u043b\u0435\u043c",
    tab: [[3, 30]]
  },
  829: {
    id: "829",
    type: "minecraft:diamond_chestplate",
    name: "\u0410\u043b\u043c\u0430\u0437\u043d\u044b\u0439 \u043d\u0430\u0433\u0440\u0443\u0434\u043d\u0438\u043a",
    tab: [[3, 31]]
  },
  830: {
    id: "830",
    type: "minecraft:diamond_leggings",
    name: "\u0410\u043b\u043c\u0430\u0437\u043d\u044b\u0435 \u043f\u043e\u043d\u043e\u0436\u0438",
    tab: [[3, 32]]
  },
  831: {
    id: "831",
    type: "minecraft:diamond_boots",
    name: "\u0410\u043b\u043c\u0430\u0437\u043d\u044b\u0435 \u0431\u043e\u0442\u0438\u043d\u043a\u0438",
    tab: [[3, 33]]
  },
  832: {
    id: "832",
    type: "minecraft:golden_helmet",
    name: "\u0417\u043e\u043b\u043e\u0442\u043e\u0439 \u0448\u043b\u0435\u043c",
    tab: [[3, 26]]
  },
  833: {
    id: "833",
    type: "minecraft:golden_chestplate",
    name: "\u0417\u043e\u043b\u043e\u0442\u043e\u0439 \u043d\u0430\u0433\u0440\u0443\u0434\u043d\u0438\u043a",
    tab: [[3, 27]]
  },
  834: {
    id: "834",
    type: "minecraft:golden_leggings",
    name: "\u0417\u043e\u043b\u043e\u0442\u044b\u0435 \u043f\u043e\u043d\u043e\u0436\u0438",
    tab: [[3, 28]]
  },
  835: {
    id: "835",
    type: "minecraft:golden_boots",
    name: "\u0417\u043e\u043b\u043e\u0442\u044b\u0435 \u0431\u043e\u0442\u0438\u043d\u043a\u0438",
    tab: [[3, 29]]
  },
  836: {
    id: "836",
    type: "minecraft:netherite_helmet",
    name: "\u041d\u0435\u0437\u0435\u0440\u0438\u0442\u043e\u0432\u044b\u0439 \u0448\u043b\u0435\u043c",
    tab: [[3, 34]]
  },
  837: {
    id: "837",
    type: "minecraft:netherite_chestplate",
    name: "\u041d\u0435\u0437\u0435\u0440\u0438\u0442\u043e\u0432\u044b\u0439 \u043d\u0430\u0433\u0440\u0443\u0434\u043d\u0438\u043a",
    tab: [[3, 35]]
  },
  838: {
    id: "838",
    type: "minecraft:netherite_leggings",
    name: "\u041d\u0435\u0437\u0435\u0440\u0438\u0442\u043e\u0432\u044b\u0435 \u043f\u043e\u043d\u043e\u0436\u0438",
    tab: [[3, 36]]
  },
  839: {
    id: "839",
    type: "minecraft:netherite_boots",
    name: "\u041d\u0435\u0437\u0435\u0440\u0438\u0442\u043e\u0432\u044b\u0435 \u0431\u043e\u0442\u0438\u043d\u043a\u0438",
    tab: [[3, 37]]
  },
  840: {id: "840", type: "minecraft:flint", name: "\u041a\u0440\u0435\u043c\u0435\u043d\u044c", tab: [[9, 19]]},
  841: {
    id: "841",
    type: "minecraft:porkchop",
    name: "\u0421\u044b\u0440\u0430\u044f \u0441\u0432\u0438\u043d\u0438\u043d\u0430",
    tab: [[1, 16]]
  },
  842: {
    id: "842",
    type: "minecraft:cooked_porkchop",
    name: "\u0416\u0430\u0440\u0435\u043d\u0430\u044f \u0441\u0432\u0438\u043d\u0438\u043d\u0430",
    tab: [[1, 17]]
  },
  843: {
    id: "843", type: "minecraft:painting", name: "\u041a\u0430\u0440\u0442\u0438\u043d\u0430", tab: [[6,
      55]]
  },
  844: {
    id: "844",
    type: "minecraft:golden_apple",
    name: "\u0417\u043e\u043b\u043e\u0442\u043e\u0435 \u044f\u0431\u043b\u043e\u043a\u043e",
    tab: [[1, 1]]
  },
  845: {
    id: "845",
    type: "minecraft:enchanted_golden_apple",
    name: "\u0417\u0430\u0447\u0430\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u0435 \u0437\u043e\u043b\u043e\u0442\u043e\u0435 \u044f\u0431\u043b\u043e\u043a\u043e",
    tab: [[1, 2]]
  },
  846: {
    id: "846",
    type: "minecraft:oak_sign",
    name: "\u0414\u0443\u0431\u043e\u0432\u0430\u044f \u0442\u0430\u0431\u043b\u0438\u0447\u043a\u0430",
    tab: [[6, 86]]
  },
  847: {
    id: "847",
    type: "minecraft:spruce_sign",
    name: "\u0415\u043b\u043e\u0432\u0430\u044f \u0442\u0430\u0431\u043b\u0438\u0447\u043a\u0430",
    tab: [[6, 88]]
  },
  848: {
    id: "848",
    type: "minecraft:birch_sign",
    name: "\u0411\u0435\u0440\u0451\u0437\u043e\u0432\u0430\u044f \u0442\u0430\u0431\u043b\u0438\u0447\u043a\u0430",
    tab: [[6, 90]]
  },
  849: {
    id: "849",
    type: "minecraft:jungle_sign",
    name: "\u0422\u0430\u0431\u043b\u0438\u0447\u043a\u0430 \u0438\u0437 \u0442\u0440\u043e\u043f\u0438\u0447\u0435\u0441\u043a\u043e\u0433\u043e \u0434\u0435\u0440\u0435\u0432\u0430",
    tab: [[6, 92]]
  },
  850: {
    id: "850",
    type: "minecraft:acacia_sign",
    name: "\u0410\u043a\u0430\u0446\u0438\u0435\u0432\u0430\u044f \u0442\u0430\u0431\u043b\u0438\u0447\u043a\u0430",
    tab: [[6, 94]]
  },
  851: {
    id: "851",
    type: "minecraft:cherry_sign",
    name: "\u0412\u0438\u0448\u043d\u0451\u0432\u0430\u044f \u0442\u0430\u0431\u043b\u0438\u0447\u043a\u0430",
    tab: [[6, 100]]
  },
  852: {
    id: "852",
    type: "minecraft:dark_oak_sign",
    name: "\u0422\u0430\u0431\u043b\u0438\u0447\u043a\u0430 \u0438\u0437 \u0442\u0451\u043c\u043d\u043e\u0433\u043e \u0434\u0443\u0431\u0430",
    tab: [[6, 96]]
  },
  853: {
    id: "853",
    type: "minecraft:mangrove_sign",
    name: "\u041c\u0430\u043d\u0433\u0440\u043e\u0432\u0430\u044f \u0442\u0430\u0431\u043b\u0438\u0447\u043a\u0430",
    tab: [[6, 98]]
  },
  854: {
    id: "854",
    type: "minecraft:bamboo_sign",
    name: "\u0411\u0430\u043c\u0431\u0443\u043a\u043e\u0432\u0430\u044f \u0442\u0430\u0431\u043b\u0438\u0447\u043a\u0430",
    tab: [[6, 102]]
  },
  855: {
    id: "855",
    type: "minecraft:crimson_sign",
    name: "\u0411\u0430\u0433\u0440\u043e\u0432\u0430\u044f \u0442\u0430\u0431\u043b\u0438\u0447\u043a\u0430",
    tab: [[6, 104]]
  },
  856: {
    id: "856",
    type: "minecraft:warped_sign",
    name: "\u0418\u0441\u043a\u0430\u0436\u0451\u043d\u043d\u0430\u044f \u0442\u0430\u0431\u043b\u0438\u0447\u043a\u0430",
    tab: [[6, 106]]
  },
  857: {
    id: "857",
    type: "minecraft:oak_hanging_sign",
    name: "\u0414\u0443\u0431\u043e\u0432\u0430\u044f \u043f\u043e\u0434\u0432\u0435\u0441\u043d\u0430\u044f \u0442\u0430\u0431\u043b\u0438\u0447\u043a\u0430",
    tab: [[6, 87]]
  },
  858: {
    id: "858",
    type: "minecraft:spruce_hanging_sign",
    name: "\u0415\u043b\u043e\u0432\u0430\u044f \u043f\u043e\u0434\u0432\u0435\u0441\u043d\u0430\u044f \u0442\u0430\u0431\u043b\u0438\u0447\u043a\u0430",
    tab: [[6, 89]]
  },
  859: {
    id: "859",
    type: "minecraft:birch_hanging_sign",
    name: "\u0411\u0435\u0440\u0451\u0437\u043e\u0432\u0430\u044f \u043f\u043e\u0434\u0432\u0435\u0441\u043d\u0430\u044f \u0442\u0430\u0431\u043b\u0438\u0447\u043a\u0430",
    tab: [[6, 91]]
  },
  860: {
    id: "860",
    type: "minecraft:jungle_hanging_sign",
    name: "\u041f\u043e\u0434\u0432\u0435\u0441\u043d\u0430\u044f \u0442\u0430\u0431\u043b\u0438\u0447\u043a\u0430 \u0438\u0437 \u0442\u0440\u043e\u043f\u0438\u0447\u0435\u0441\u043a\u043e\u0433\u043e \u0434\u0435\u0440\u0435\u0432\u0430",
    tab: [[6, 93]]
  },
  861: {
    id: "861",
    type: "minecraft:acacia_hanging_sign",
    name: "\u0410\u043a\u0430\u0446\u0438\u0435\u0432\u0430\u044f \u043f\u043e\u0434\u0432\u0435\u0441\u043d\u0430\u044f \u0442\u0430\u0431\u043b\u0438\u0447\u043a\u0430",
    tab: [[6, 95]]
  },
  862: {
    id: "862",
    type: "minecraft:cherry_hanging_sign",
    name: "\u0412\u0438\u0448\u043d\u0451\u0432\u0430\u044f \u043f\u043e\u0434\u0432\u0435\u0441\u043d\u0430\u044f \u0442\u0430\u0431\u043b\u0438\u0447\u043a\u0430",
    tab: [[6, 101]]
  },
  863: {
    id: "863",
    type: "minecraft:dark_oak_hanging_sign",
    name: "\u041f\u043e\u0434\u0432\u0435\u0441\u043d\u0430\u044f \u0442\u0430\u0431\u043b\u0438\u0447\u043a\u0430 \u0438\u0437 \u0442\u0451\u043c\u043d\u043e\u0433\u043e \u0434\u0443\u0431\u0430",
    tab: [[6, 97]]
  },
  864: {
    id: "864",
    type: "minecraft:mangrove_hanging_sign",
    name: "\u041c\u0430\u043d\u0433\u0440\u043e\u0432\u0430\u044f \u043f\u043e\u0434\u0432\u0435\u0441\u043d\u0430\u044f \u0442\u0430\u0431\u043b\u0438\u0447\u043a\u0430",
    tab: [[6, 99]]
  },
  865: {
    id: "865",
    type: "minecraft:bamboo_hanging_sign",
    name: "\u0411\u0430\u043c\u0431\u0443\u043a\u043e\u0432\u0430\u044f \u043f\u043e\u0434\u0432\u0435\u0441\u043d\u0430\u044f \u0442\u0430\u0431\u043b\u0438\u0447\u043a\u0430",
    tab: [[6, 103]]
  },
  866: {
    id: "866",
    type: "minecraft:crimson_hanging_sign",
    name: "\u0411\u0430\u0433\u0440\u043e\u0432\u0430\u044f \u043f\u043e\u0434\u0432\u0435\u0441\u043d\u0430\u044f \u0442\u0430\u0431\u043b\u0438\u0447\u043a\u0430",
    tab: [[6, 105]]
  },
  867: {
    id: "867",
    type: "minecraft:warped_hanging_sign",
    name: "\u0418\u0441\u043a\u0430\u0436\u0451\u043d\u043d\u0430\u044f \u043f\u043e\u0434\u0432\u0435\u0441\u043d\u0430\u044f \u0442\u0430\u0431\u043b\u0438\u0447\u043a\u0430",
    tab: [[6, 107]]
  },
  868: {
    id: "868", type: "minecraft:bucket",
    name: "\u0412\u0435\u0434\u0440\u043e", tab: [[2, 24]]
  },
  869: {
    id: "869",
    type: "minecraft:water_bucket",
    name: "\u0412\u0435\u0434\u0440\u043e \u0432\u043e\u0434\u044b",
    tab: [[2, 25]]
  },
  870: {
    id: "870",
    type: "minecraft:lava_bucket",
    name: "\u0412\u0435\u0434\u0440\u043e \u043b\u0430\u0432\u044b",
    tab: [[2, 32]]
  },
  871: {
    id: "871",
    type: "minecraft:powder_snow_bucket",
    name: "\u0412\u0435\u0434\u0440\u043e \u0441 \u0440\u044b\u0445\u043b\u044b\u043c \u0441\u043d\u0435\u0433\u043e\u043c",
    tab: [[2, 33]]
  },
  872: {
    id: "872", type: "minecraft:snowball",
    name: "\u0421\u043d\u0435\u0436\u043e\u043a", tab: [[3, 46], [9, 25]]
  },
  873: {id: "873", type: "minecraft:leather", name: "\u041a\u043e\u0436\u0430", tab: [[9, 27]]},
  874: {
    id: "874",
    type: "minecraft:milk_bucket",
    name: "\u0412\u0435\u0434\u0440\u043e \u043c\u043e\u043b\u043e\u043a\u0430",
    tab: [[2, 34], [1, 48]]
  },
  875: {
    id: "875",
    type: "minecraft:pufferfish_bucket",
    name: "\u0418\u0433\u043b\u043e\u0431\u0440\u044e\u0445 \u0432 \u0432\u0435\u0434\u0440\u0435",
    tab: [[2, 29]]
  },
  876: {
    id: "876",
    type: "minecraft:salmon_bucket",
    name: "\u041b\u043e\u0441\u043e\u0441\u044c \u0432 \u0432\u0435\u0434\u0440\u0435",
    tab: [[2, 27]]
  },
  877: {
    id: "877",
    type: "minecraft:cod_bucket",
    name: "\u0422\u0440\u0435\u0441\u043a\u0430 \u0432 \u0432\u0435\u0434\u0440\u0435",
    tab: [[2, 26]]
  },
  878: {
    id: "878",
    type: "minecraft:tropical_fish_bucket",
    name: "\u0422\u0440\u043e\u043f\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u0440\u044b\u0431\u0430 \u0432 \u0432\u0435\u0434\u0440\u0435",
    tab: [[2, 28]]
  },
  879: {
    id: "879",
    type: "minecraft:axolotl_bucket",
    name: "\u0410\u043a\u0441\u043e\u043b\u043e\u0442\u043b\u044c \u0432 \u0432\u0435\u0434\u0440\u0435",
    tab: [[2, 30]]
  },
  880: {
    id: "880",
    type: "minecraft:tadpole_bucket",
    name: "\u0413\u043e\u043b\u043e\u0432\u0430\u0441\u0442\u0438\u043a \u0432 \u0432\u0435\u0434\u0440\u0435",
    tab: [[2, 31]]
  },
  881: {id: "881", type: "minecraft:brick", name: "\u041a\u0438\u0440\u043f\u0438\u0447", tab: [[9, 65]]},
  882: {
    id: "882",
    type: "minecraft:clay_ball",
    name: "\u041a\u043e\u043c\u043e\u043a \u0433\u043b\u0438\u043d\u044b",
    tab: [[9, 34]]
  },
  883: {
    id: "883",
    type: "minecraft:dried_kelp_block",
    name: "\u0411\u043b\u043e\u043a \u0441\u0443\u0448\u0451\u043d\u043e\u0439 \u043b\u0430\u043c\u0438\u043d\u0430\u0440\u0438\u0438",
    tab: [[8, 174]]
  },
  884: {id: "884", type: "minecraft:paper", name: "\u0411\u0443\u043c\u0430\u0433\u0430", tab: [[9, 67]]},
  885: {id: "885", type: "minecraft:book", name: "\u041a\u043d\u0438\u0433\u0430", tab: [[9, 68]]},
  886: {
    id: "886",
    type: "minecraft:slime_ball",
    name: "\u0421\u0433\u0443\u0441\u0442\u043e\u043a \u0441\u043b\u0438\u0437\u0438",
    tab: [[9, 33]]
  },
  887: {id: "887", type: "minecraft:egg", name: "\u042f\u0439\u0446\u043e", tab: [[3, 47], [9, 26]]},
  888: {
    id: "888", type: "minecraft:compass", name: "\u041a\u043e\u043c\u043f\u0430\u0441",
    tab: [[2, 43]]
  },
  889: {
    id: "889",
    type: "minecraft:recovery_compass",
    name: "\u0412\u043e\u0437\u0432\u0440\u0430\u0442\u043d\u044b\u0439 \u043a\u043e\u043c\u043f\u0430\u0441",
    tab: [[2, 44]]
  },
  890: {id: "890", type: "minecraft:bundle", name: "\u041c\u0435\u0448\u043e\u043a"},
  891: {id: "891", type: "minecraft:fishing_rod", name: "\u0423\u0434\u043e\u0447\u043a\u0430", tab: [[2, 35]]},
  892: {id: "892", type: "minecraft:clock", name: "\u0427\u0430\u0441\u044b", tab: [[2, 45]]},
  893: {
    id: "893",
    type: "minecraft:spyglass",
    name: "\u041f\u043e\u0434\u0437\u043e\u0440\u043d\u0430\u044f \u0442\u0440\u0443\u0431\u0430",
    tab: [[2, 46]]
  },
  894: {
    id: "894",
    type: "minecraft:glowstone_dust",
    name: "\u0421\u0432\u0435\u0442\u043e\u043a\u0430\u043c\u0435\u043d\u043d\u0430\u044f \u043f\u044b\u043b\u044c",
    tab: [[9, 73]]
  },
  895: {
    id: "895",
    type: "minecraft:cod",
    name: "\u0421\u044b\u0440\u0430\u044f \u0442\u0440\u0435\u0441\u043a\u0430",
    tab: [[1, 24]]
  },
  896: {
    id: "896",
    type: "minecraft:salmon",
    name: "\u0421\u044b\u0440\u043e\u0439 \u043b\u043e\u0441\u043e\u0441\u044c",
    tab: [[1, 26]]
  },
  897: {
    id: "897",
    type: "minecraft:tropical_fish",
    name: "\u0422\u0440\u043e\u043f\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u0440\u044b\u0431\u0430",
    tab: [[1, 28]]
  },
  898: {
    id: "898",
    type: "minecraft:pufferfish",
    name: "\u0418\u0433\u043b\u043e\u0431\u0440\u044e\u0445",
    tab: [[1, 29], [9, 82]]
  },
  899: {
    id: "899",
    type: "minecraft:cooked_cod",
    name: "\u0416\u0430\u0440\u0435\u043d\u0430\u044f \u0442\u0440\u0435\u0441\u043a\u0430",
    tab: [[1, 25]]
  },
  900: {
    id: "900",
    type: "minecraft:cooked_salmon",
    name: "\u0416\u0430\u0440\u0435\u043d\u044b\u0439 \u043b\u043e\u0441\u043e\u0441\u044c",
    tab: [[1, 27]]
  },
  901: {
    id: "901",
    type: "minecraft:ink_sac",
    name: "\u0427\u0435\u0440\u043d\u0438\u043b\u044c\u043d\u044b\u0439 \u043c\u0435\u0448\u043e\u043a",
    tab: [[9, 30]]
  },
  902: {
    id: "902",
    type: "minecraft:glow_ink_sac",
    name: "\u0421\u0432\u0435\u0442\u044f\u0449\u0438\u0439\u0441\u044f \u0447\u0435\u0440\u043d\u0438\u043b\u044c\u043d\u044b\u0439 \u043c\u0435\u0448\u043e\u043a",
    tab: [[9, 31]]
  },
  903: {
    id: "903",
    type: "minecraft:cocoa_beans",
    name: "\u041a\u0430\u043a\u0430\u043e-\u0431\u043e\u0431\u044b",
    tab: [[8, 161]]
  },
  904: {
    id: "904",
    type: "minecraft:white_dye",
    name: "\u0411\u0435\u043b\u044b\u0439 \u043a\u0440\u0430\u0441\u0438\u0442\u0435\u043b\u044c",
    tab: [[9, 48]]
  },
  905: {
    id: "905",
    type: "minecraft:orange_dye",
    name: "\u041e\u0440\u0430\u043d\u0436\u0435\u0432\u044b\u0439 \u043a\u0440\u0430\u0441\u0438\u0442\u0435\u043b\u044c",
    tab: [[9, 54]]
  },
  906: {
    id: "906",
    type: "minecraft:magenta_dye",
    name: "\u041f\u0443\u0440\u043f\u0443\u0440\u043d\u044b\u0439 \u043a\u0440\u0430\u0441\u0438\u0442\u0435\u043b\u044c",
    tab: [[9, 62]]
  },
  907: {
    id: "907",
    type: "minecraft:light_blue_dye",
    name: "\u0413\u043e\u043b\u0443\u0431\u043e\u0439 \u043a\u0440\u0430\u0441\u0438\u0442\u0435\u043b\u044c",
    tab: [[9,
      59]]
  },
  908: {
    id: "908",
    type: "minecraft:yellow_dye",
    name: "\u0416\u0451\u043b\u0442\u044b\u0439 \u043a\u0440\u0430\u0441\u0438\u0442\u0435\u043b\u044c",
    tab: [[9, 55]]
  },
  909: {
    id: "909",
    type: "minecraft:lime_dye",
    name: "\u041b\u0430\u0439\u043c\u043e\u0432\u044b\u0439 \u043a\u0440\u0430\u0441\u0438\u0442\u0435\u043b\u044c",
    tab: [[9, 56]]
  },
  910: {
    id: "910",
    type: "minecraft:pink_dye",
    name: "\u0420\u043e\u0437\u043e\u0432\u044b\u0439 \u043a\u0440\u0430\u0441\u0438\u0442\u0435\u043b\u044c",
    tab: [[9, 63]]
  },
  911: {
    id: "911", type: "minecraft:gray_dye",
    name: "\u0421\u0435\u0440\u044b\u0439 \u043a\u0440\u0430\u0441\u0438\u0442\u0435\u043b\u044c", tab: [[9, 50]]
  },
  912: {
    id: "912",
    type: "minecraft:light_gray_dye",
    name: "\u0421\u0432\u0435\u0442\u043b\u043e-\u0441\u0435\u0440\u044b\u0439 \u043a\u0440\u0430\u0441\u0438\u0442\u0435\u043b\u044c",
    tab: [[9, 49]]
  },
  913: {
    id: "913",
    type: "minecraft:cyan_dye",
    name: "\u0411\u0438\u0440\u044e\u0437\u043e\u0432\u044b\u0439 \u043a\u0440\u0430\u0441\u0438\u0442\u0435\u043b\u044c",
    tab: [[9, 58]]
  },
  914: {
    id: "914",
    type: "minecraft:purple_dye",
    name: "\u0424\u0438\u043e\u043b\u0435\u0442\u043e\u0432\u044b\u0439 \u043a\u0440\u0430\u0441\u0438\u0442\u0435\u043b\u044c",
    tab: [[9, 61]]
  },
  915: {
    id: "915",
    type: "minecraft:blue_dye",
    name: "\u0421\u0438\u043d\u0438\u0439 \u043a\u0440\u0430\u0441\u0438\u0442\u0435\u043b\u044c",
    tab: [[9, 60]]
  },
  916: {
    id: "916",
    type: "minecraft:brown_dye",
    name: "\u041a\u043e\u0440\u0438\u0447\u043d\u0435\u0432\u044b\u0439 \u043a\u0440\u0430\u0441\u0438\u0442\u0435\u043b\u044c",
    tab: [[9, 52]]
  },
  917: {
    id: "917",
    type: "minecraft:green_dye",
    name: "\u0417\u0435\u043b\u0451\u043d\u044b\u0439 \u043a\u0440\u0430\u0441\u0438\u0442\u0435\u043b\u044c",
    tab: [[9, 57]]
  },
  918: {
    id: "918",
    type: "minecraft:red_dye",
    name: "\u041a\u0440\u0430\u0441\u043d\u044b\u0439 \u043a\u0440\u0430\u0441\u0438\u0442\u0435\u043b\u044c",
    tab: [[9, 53]]
  },
  919: {
    id: "919",
    type: "minecraft:black_dye",
    name: "\u0427\u0451\u0440\u043d\u044b\u0439 \u043a\u0440\u0430\u0441\u0438\u0442\u0435\u043b\u044c",
    tab: [[9, 51]]
  },
  920: {
    id: "920", type: "minecraft:bone_meal", name: "\u041a\u043e\u0441\u0442\u043d\u0430\u044f \u043c\u0443\u043a\u0430",
    tab: [[2, 38], [9, 22]]
  },
  921: {id: "921", type: "minecraft:bone", name: "\u041a\u043e\u0441\u0442\u044c", tab: [[9, 21]]},
  922: {id: "922", type: "minecraft:sugar", name: "\u0421\u0430\u0445\u0430\u0440", tab: [[9, 78]]},
  923: {id: "923", type: "minecraft:cake", name: "\u0422\u043e\u0440\u0442", tab: [[1, 32]]},
  924: {
    id: "924",
    type: "minecraft:white_bed",
    name: "\u0411\u0435\u043b\u0430\u044f \u043a\u0440\u043e\u0432\u0430\u0442\u044c",
    tab: [[5, 149], [6, 129]]
  },
  925: {
    id: "925",
    type: "minecraft:orange_bed",
    name: "\u041e\u0440\u0430\u043d\u0436\u0435\u0432\u0430\u044f \u043a\u0440\u043e\u0432\u0430\u0442\u044c",
    tab: [[5, 155], [6, 135]]
  },
  926: {
    id: "926",
    type: "minecraft:magenta_bed",
    name: "\u041f\u0443\u0440\u043f\u0443\u0440\u043d\u0430\u044f \u043a\u0440\u043e\u0432\u0430\u0442\u044c",
    tab: [[5, 163], [6, 143]]
  },
  927: {
    id: "927",
    type: "minecraft:light_blue_bed",
    name: "\u0413\u043e\u043b\u0443\u0431\u0430\u044f \u043a\u0440\u043e\u0432\u0430\u0442\u044c",
    tab: [[5, 160], [6, 140]]
  },
  928: {
    id: "928",
    type: "minecraft:yellow_bed",
    name: "\u0416\u0451\u043b\u0442\u0430\u044f \u043a\u0440\u043e\u0432\u0430\u0442\u044c",
    tab: [[5, 156], [6,
      136]]
  },
  929: {
    id: "929",
    type: "minecraft:lime_bed",
    name: "\u041b\u0430\u0439\u043c\u043e\u0432\u0430\u044f \u043a\u0440\u043e\u0432\u0430\u0442\u044c",
    tab: [[5, 157], [6, 137]]
  },
  930: {
    id: "930",
    type: "minecraft:pink_bed",
    name: "\u0420\u043e\u0437\u043e\u0432\u0430\u044f \u043a\u0440\u043e\u0432\u0430\u0442\u044c",
    tab: [[5, 164], [6, 144]]
  },
  931: {
    id: "931",
    type: "minecraft:gray_bed",
    name: "\u0421\u0435\u0440\u0430\u044f \u043a\u0440\u043e\u0432\u0430\u0442\u044c",
    tab: [[5, 151], [6, 131]]
  },
  932: {
    id: "932",
    type: "minecraft:light_gray_bed",
    name: "\u0421\u0432\u0435\u0442\u043b\u043e-\u0441\u0435\u0440\u0430\u044f \u043a\u0440\u043e\u0432\u0430\u0442\u044c",
    tab: [[5, 150], [6, 130]]
  },
  933: {
    id: "933",
    type: "minecraft:cyan_bed",
    name: "\u0411\u0438\u0440\u044e\u0437\u043e\u0432\u0430\u044f \u043a\u0440\u043e\u0432\u0430\u0442\u044c",
    tab: [[5, 159], [6, 139]]
  },
  934: {
    id: "934",
    type: "minecraft:purple_bed",
    name: "\u0424\u0438\u043e\u043b\u0435\u0442\u043e\u0432\u0430\u044f \u043a\u0440\u043e\u0432\u0430\u0442\u044c",
    tab: [[5, 162], [6, 142]]
  },
  935: {
    id: "935", type: "minecraft:blue_bed",
    name: "\u0421\u0438\u043d\u044f\u044f \u043a\u0440\u043e\u0432\u0430\u0442\u044c", tab: [[5, 161], [6, 141]]
  },
  936: {
    id: "936",
    type: "minecraft:brown_bed",
    name: "\u041a\u043e\u0440\u0438\u0447\u043d\u0435\u0432\u0430\u044f \u043a\u0440\u043e\u0432\u0430\u0442\u044c",
    tab: [[5, 153], [6, 133]]
  },
  937: {
    id: "937",
    type: "minecraft:green_bed",
    name: "\u0417\u0435\u043b\u0451\u043d\u0430\u044f \u043a\u0440\u043e\u0432\u0430\u0442\u044c",
    tab: [[5, 158], [6, 138]]
  },
  938: {
    id: "938",
    type: "minecraft:red_bed",
    name: "\u041a\u0440\u0430\u0441\u043d\u0430\u044f \u043a\u0440\u043e\u0432\u0430\u0442\u044c",
    tab: [[5, 154], [6, 134]]
  },
  939: {
    id: "939",
    type: "minecraft:black_bed",
    name: "\u0427\u0451\u0440\u043d\u0430\u044f \u043a\u0440\u043e\u0432\u0430\u0442\u044c",
    tab: [[5, 152], [6, 132]]
  },
  940: {id: "940", type: "minecraft:cookie", name: "\u041f\u0435\u0447\u0435\u043d\u044c\u0435", tab: [[1, 31]]},
  941: {id: "941", type: "minecraft:filled_map", name: "\u041a\u0430\u0440\u0442\u0430"},
  942: {id: "942", type: "minecraft:shears", name: "\u041d\u043e\u0436\u043d\u0438\u0446\u044b", tab: [[2, 39]]},
  943: {
    id: "943", type: "minecraft:melon_slice",
    name: "\u041b\u043e\u043c\u0442\u0438\u043a \u0430\u0440\u0431\u0443\u0437\u0430", tab: [[1, 3]]
  },
  944: {
    id: "944",
    type: "minecraft:dried_kelp",
    name: "\u0421\u0443\u0448\u0451\u043d\u0430\u044f \u043b\u0430\u043c\u0438\u043d\u0430\u0440\u0438\u044f",
    tab: [[1, 13]]
  },
  945: {
    id: "945",
    type: "minecraft:pumpkin_seeds",
    name: "\u0421\u0435\u043c\u0435\u043d\u0430 \u0442\u044b\u043a\u0432\u044b",
    tab: [[8, 162]]
  },
  946: {
    id: "946",
    type: "minecraft:melon_seeds",
    name: "\u0421\u0435\u043c\u0435\u043d\u0430 \u0430\u0440\u0431\u0443\u0437\u0430",
    tab: [[8, 163]]
  },
  947: {
    id: "947",
    type: "minecraft:beef",
    name: "\u0421\u044b\u0440\u0430\u044f \u0433\u043e\u0432\u044f\u0434\u0438\u043d\u0430",
    tab: [[1, 14]]
  },
  948: {id: "948", type: "minecraft:cooked_beef", name: "\u0421\u0442\u0435\u0439\u043a", tab: [[1, 15]]},
  949: {id: "949", type: "minecraft:chicken", name: "\u041a\u0443\u0440\u044f\u0442\u0438\u043d\u0430", tab: [[1, 20]]},
  950: {
    id: "950",
    type: "minecraft:cooked_chicken",
    name: "\u0416\u0430\u0440\u0435\u043d\u0430\u044f \u043a\u0443\u0440\u0438\u0446\u0430",
    tab: [[1, 21]]
  },
  951: {
    id: "951",
    type: "minecraft:rotten_flesh",
    name: "\u0413\u043d\u0438\u043b\u0430\u044f \u043f\u043b\u043e\u0442\u044c",
    tab: [[1, 34]]
  },
  952: {
    id: "952",
    type: "minecraft:ender_pearl",
    name: "\u042d\u043d\u0434\u0435\u0440-\u0436\u0435\u043c\u0447\u0443\u0433",
    tab: [[2, 49], [9, 42]]
  },
  953: {
    id: "953",
    type: "minecraft:blaze_rod",
    name: "\u041e\u0433\u043d\u0435\u043d\u043d\u044b\u0439 \u0441\u0442\u0435\u0440\u0436\u0435\u043d\u044c",
    tab: [[9, 40]]
  },
  954: {
    id: "954", type: "minecraft:ghast_tear", name: "\u0421\u043b\u0435\u0437\u0430 \u0433\u0430\u0441\u0442\u0430",
    tab: [[9, 85]]
  },
  955: {
    id: "955",
    type: "minecraft:gold_nugget",
    name: "\u041a\u0443\u0441\u043e\u0447\u0435\u043a \u0437\u043e\u043b\u043e\u0442\u0430",
    tab: [[9, 12]]
  },
  956: {
    id: "956",
    type: "minecraft:nether_wart",
    name: "\u041d\u0435\u0437\u0435\u0440\u0441\u043a\u0438\u0439 \u043d\u0430\u0440\u043e\u0441\u0442",
    tab: [[8, 169], [9, 71]]
  },
  "957-water": {
    id: "957-water",
    type: "minecraft:potion",
    name: "\u0411\u0443\u0442\u044b\u043b\u043e\u0447\u043a\u0430 \u0432\u043e\u0434\u044b",
    tab: [[1, 50]],
    potion: "water"
  },
  "957-mundane": {
    id: "957-mundane",
    type: "minecraft:potion",
    name: "\u0417\u0430\u0443\u0440\u044f\u0434\u043d\u043e\u0435 \u0437\u0435\u043b\u044c\u0435",
    tab: [[1, 50]],
    potion: "mundane"
  },
  "957-thick": {
    id: "957-thick",
    type: "minecraft:potion",
    name: "\u0413\u0443\u0441\u0442\u043e\u0435 \u0437\u0435\u043b\u044c\u0435",
    tab: [[1, 50]],
    potion: "thick"
  },
  "957-awkward": {
    id: "957-awkward",
    type: "minecraft:potion",
    name: "\u041c\u0443\u0442\u043d\u043e\u0435 \u0437\u0435\u043b\u044c\u0435",
    tab: [[1, 50]],
    potion: "awkward"
  },
  "957-night_vision": {
    id: "957-night_vision",
    type: "minecraft:potion",
    name: "\u0417\u0435\u043b\u044c\u0435 \u043d\u043e\u0447\u043d\u043e\u0433\u043e \u0437\u0440\u0435\u043d\u0438\u044f",
    tab: [[1, 50]],
    potion: "night_vision"
  },
  "957-long_night_vision": {
    id: "957-long_night_vision",
    type: "minecraft:potion",
    name: "\u0417\u0435\u043b\u044c\u0435 \u043d\u043e\u0447\u043d\u043e\u0433\u043e \u0437\u0440\u0435\u043d\u0438\u044f",
    tab: [[1, 50]],
    potion: "long_night_vision"
  },
  "957-invisibility": {
    id: "957-invisibility",
    type: "minecraft:potion",
    name: "\u0417\u0435\u043b\u044c\u0435 \u043d\u0435\u0432\u0438\u0434\u0438\u043c\u043e\u0441\u0442\u0438",
    tab: [[1, 50]],
    potion: "invisibility"
  },
  "957-long_invisibility": {
    id: "957-long_invisibility",
    type: "minecraft:potion",
    name: "\u0417\u0435\u043b\u044c\u0435 \u043d\u0435\u0432\u0438\u0434\u0438\u043c\u043e\u0441\u0442\u0438",
    tab: [[1, 50]],
    potion: "long_invisibility"
  },
  "957-leaping": {
    id: "957-leaping",
    type: "minecraft:potion",
    name: "\u0417\u0435\u043b\u044c\u0435 \u043f\u0440\u044b\u0433\u0443\u0447\u0435\u0441\u0442\u0438",
    tab: [[1, 50]],
    potion: "leaping"
  },
  "957-long_leaping": {
    id: "957-long_leaping",
    type: "minecraft:potion",
    name: "\u0417\u0435\u043b\u044c\u0435 \u043f\u0440\u044b\u0433\u0443\u0447\u0435\u0441\u0442\u0438",
    tab: [[1, 50]],
    potion: "long_leaping"
  },
  "957-strong_leaping": {
    id: "957-strong_leaping",
    type: "minecraft:potion",
    name: "\u0417\u0435\u043b\u044c\u0435 \u043f\u0440\u044b\u0433\u0443\u0447\u0435\u0441\u0442\u0438",
    tab: [[1, 50]],
    potion: "strong_leaping"
  },
  "957-fire_resistance": {
    id: "957-fire_resistance",
    type: "minecraft:potion",
    name: "\u0417\u0435\u043b\u044c\u0435 \u043e\u0433\u043d\u0435\u0441\u0442\u043e\u0439\u043a\u043e\u0441\u0442\u0438",
    tab: [[1, 50]],
    potion: "fire_resistance"
  },
  "957-long_fire_resistance": {
    id: "957-long_fire_resistance",
    type: "minecraft:potion",
    name: "\u0417\u0435\u043b\u044c\u0435 \u043e\u0433\u043d\u0435\u0441\u0442\u043e\u0439\u043a\u043e\u0441\u0442\u0438",
    tab: [[1, 50]],
    potion: "long_fire_resistance"
  },
  "957-swiftness": {
    id: "957-swiftness",
    type: "minecraft:potion",
    name: "\u0417\u0435\u043b\u044c\u0435 \u0441\u0442\u0440\u0435\u043c\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0438",
    tab: [[1, 50]],
    potion: "swiftness"
  },
  "957-long_swiftness": {
    id: "957-long_swiftness",
    type: "minecraft:potion",
    name: "\u0417\u0435\u043b\u044c\u0435 \u0441\u0442\u0440\u0435\u043c\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0438",
    tab: [[1, 50]],
    potion: "long_swiftness"
  },
  "957-strong_swiftness": {
    id: "957-strong_swiftness",
    type: "minecraft:potion",
    name: "\u0417\u0435\u043b\u044c\u0435 \u0441\u0442\u0440\u0435\u043c\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0438",
    tab: [[1, 50]],
    potion: "strong_swiftness"
  },
  "957-slowness": {
    id: "957-slowness",
    type: "minecraft:potion",
    name: "\u0417\u0435\u043b\u044c\u0435 \u0437\u0430\u043c\u0435\u0434\u043b\u0435\u043d\u0438\u044f",
    tab: [[1, 50]],
    potion: "slowness"
  },
  "957-long_slowness": {
    id: "957-long_slowness",
    type: "minecraft:potion",
    name: "\u0417\u0435\u043b\u044c\u0435 \u0437\u0430\u043c\u0435\u0434\u043b\u0435\u043d\u0438\u044f",
    tab: [[1, 50]],
    potion: "long_slowness"
  },
  "957-strong_slowness": {
    id: "957-strong_slowness",
    type: "minecraft:potion",
    name: "\u0417\u0435\u043b\u044c\u0435 \u0437\u0430\u043c\u0435\u0434\u043b\u0435\u043d\u0438\u044f",
    tab: [[1, 50]],
    potion: "strong_slowness"
  },
  "957-turtle_master": {
    id: "957-turtle_master",
    type: "minecraft:potion",
    name: "\u0417\u0435\u043b\u044c\u0435 \u0447\u0435\u0440\u0435\u043f\u0430\u0448\u044c\u0435\u0439 \u043c\u043e\u0449\u0438",
    tab: [[1, 50]],
    potion: "turtle_master"
  },
  "957-long_turtle_master": {
    id: "957-long_turtle_master",
    type: "minecraft:potion",
    name: "\u0417\u0435\u043b\u044c\u0435 \u0447\u0435\u0440\u0435\u043f\u0430\u0448\u044c\u0435\u0439 \u043c\u043e\u0449\u0438",
    tab: [[1, 50]],
    potion: "long_turtle_master"
  },
  "957-strong_turtle_master": {
    id: "957-strong_turtle_master",
    type: "minecraft:potion",
    name: "\u0417\u0435\u043b\u044c\u0435 \u0447\u0435\u0440\u0435\u043f\u0430\u0448\u044c\u0435\u0439 \u043c\u043e\u0449\u0438",
    tab: [[1, 50]],
    potion: "strong_turtle_master"
  },
  "957-water_breathing": {
    id: "957-water_breathing",
    type: "minecraft:potion",
    name: "\u0417\u0435\u043b\u044c\u0435 \u0432\u043e\u0434\u043d\u043e\u0433\u043e \u0434\u044b\u0445\u0430\u043d\u0438\u044f",
    tab: [[1, 50]],
    potion: "water_breathing"
  },
  "957-long_water_breathing": {
    id: "957-long_water_breathing",
    type: "minecraft:potion",
    name: "\u0417\u0435\u043b\u044c\u0435 \u0432\u043e\u0434\u043d\u043e\u0433\u043e \u0434\u044b\u0445\u0430\u043d\u0438\u044f",
    tab: [[1, 50]],
    potion: "long_water_breathing"
  },
  "957-healing": {
    id: "957-healing",
    type: "minecraft:potion",
    name: "\u0417\u0435\u043b\u044c\u0435 \u0438\u0441\u0446\u0435\u043b\u0435\u043d\u0438\u044f",
    tab: [[1, 50]],
    potion: "healing"
  },
  "957-strong_healing": {
    id: "957-strong_healing",
    type: "minecraft:potion",
    name: "\u0417\u0435\u043b\u044c\u0435 \u0438\u0441\u0446\u0435\u043b\u0435\u043d\u0438\u044f",
    tab: [[1, 50]],
    potion: "strong_healing"
  },
  "957-harming": {
    id: "957-harming",
    type: "minecraft:potion",
    name: "\u0417\u0435\u043b\u044c\u0435 \u0432\u0440\u0435\u0434\u0430",
    tab: [[1, 50]],
    potion: "harming"
  },
  "957-strong_harming": {
    id: "957-strong_harming",
    type: "minecraft:potion",
    name: "\u0417\u0435\u043b\u044c\u0435 \u0432\u0440\u0435\u0434\u0430",
    tab: [[1, 50]],
    potion: "strong_harming"
  },
  "957-poison": {
    id: "957-poison",
    type: "minecraft:potion",
    name: "\u0417\u0435\u043b\u044c\u0435 \u043e\u0442\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f",
    tab: [[1, 50]],
    potion: "poison"
  },
  "957-long_poison": {
    id: "957-long_poison",
    type: "minecraft:potion",
    name: "\u0417\u0435\u043b\u044c\u0435 \u043e\u0442\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f",
    tab: [[1, 50]],
    potion: "long_poison"
  },
  "957-strong_poison": {
    id: "957-strong_poison",
    type: "minecraft:potion",
    name: "\u0417\u0435\u043b\u044c\u0435 \u043e\u0442\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f",
    tab: [[1, 50]],
    potion: "strong_poison"
  },
  "957-regeneration": {
    id: "957-regeneration",
    type: "minecraft:potion",
    name: "\u0417\u0435\u043b\u044c\u0435 \u0440\u0435\u0433\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u0438",
    tab: [[1, 50]],
    potion: "regeneration"
  },
  "957-long_regeneration": {
    id: "957-long_regeneration",
    type: "minecraft:potion",
    name: "\u0417\u0435\u043b\u044c\u0435 \u0440\u0435\u0433\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u0438",
    tab: [[1, 50]],
    potion: "long_regeneration"
  },
  "957-strong_regeneration": {
    id: "957-strong_regeneration",
    type: "minecraft:potion",
    name: "\u0417\u0435\u043b\u044c\u0435 \u0440\u0435\u0433\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u0438",
    tab: [[1, 50]],
    potion: "strong_regeneration"
  },
  "957-strength": {
    id: "957-strength",
    type: "minecraft:potion",
    name: "\u0417\u0435\u043b\u044c\u0435 \u0441\u0438\u043b\u044b",
    tab: [[1, 50]],
    potion: "strength"
  },
  "957-long_strength": {
    id: "957-long_strength",
    type: "minecraft:potion",
    name: "\u0417\u0435\u043b\u044c\u0435 \u0441\u0438\u043b\u044b",
    tab: [[1, 50]],
    potion: "long_strength"
  },
  "957-strong_strength": {
    id: "957-strong_strength",
    type: "minecraft:potion",
    name: "\u0417\u0435\u043b\u044c\u0435 \u0441\u0438\u043b\u044b",
    tab: [[1, 50]],
    potion: "strong_strength"
  },
  "957-weakness": {
    id: "957-weakness",
    type: "minecraft:potion",
    name: "\u0417\u0435\u043b\u044c\u0435 \u0441\u043b\u0430\u0431\u043e\u0441\u0442\u0438",
    tab: [[1, 50]],
    potion: "weakness"
  },
  "957-long_weakness": {
    id: "957-long_weakness",
    type: "minecraft:potion",
    name: "\u0417\u0435\u043b\u044c\u0435 \u0441\u043b\u0430\u0431\u043e\u0441\u0442\u0438",
    tab: [[1, 50]],
    potion: "long_weakness"
  },
  "957-luck": {
    id: "957-luck",
    type: "minecraft:potion",
    name: "\u0417\u0435\u043b\u044c\u0435 \u0432\u0435\u0437\u0435\u043d\u0438\u044f",
    tab: [[1, 50]],
    potion: "luck"
  },
  "957-slow_falling": {
    id: "957-slow_falling",
    type: "minecraft:potion",
    name: "\u0417\u0435\u043b\u044c\u0435 \u043f\u043b\u0430\u0432\u043d\u043e\u0433\u043e \u043f\u0430\u0434\u0435\u043d\u0438\u044f",
    tab: [[1, 50]],
    potion: "slow_falling"
  },
  "957-long_slow_falling": {
    id: "957-long_slow_falling",
    type: "minecraft:potion",
    name: "\u0417\u0435\u043b\u044c\u0435 \u043f\u043b\u0430\u0432\u043d\u043e\u0433\u043e \u043f\u0430\u0434\u0435\u043d\u0438\u044f",
    tab: [[1, 50]],
    potion: "long_slow_falling"
  },
  958: {
    id: "958", type: "minecraft:glass_bottle", name: "\u0411\u0443\u0442\u044b\u043b\u043e\u0447\u043a\u0430",
    tab: [[9, 70]]
  },
  959: {
    id: "959",
    type: "minecraft:spider_eye",
    name: "\u041f\u0430\u0443\u0447\u0438\u0439 \u0433\u043b\u0430\u0437",
    tab: [[1, 35], [9, 81]]
  },
  960: {
    id: "960",
    type: "minecraft:fermented_spider_eye",
    name: "\u041c\u0430\u0440\u0438\u043d\u043e\u0432\u0430\u043d\u043d\u044b\u0439 \u043f\u0430\u0443\u0447\u0438\u0439 \u0433\u043b\u0430\u0437",
    tab: [[9, 76]]
  },
  961: {
    id: "961",
    type: "minecraft:blaze_powder",
    name: "\u041e\u0433\u043d\u0435\u043d\u043d\u044b\u0439 \u043f\u043e\u0440\u043e\u0448\u043e\u043a",
    tab: [[9,
      77]]
  },
  962: {
    id: "962",
    type: "minecraft:magma_cream",
    name: "\u0421\u0433\u0443\u0441\u0442\u043e\u043a \u043c\u0430\u0433\u043c\u044b",
    tab: [[9, 83]]
  },
  963: {
    id: "963",
    type: "minecraft:brewing_stand",
    name: "\u0417\u0435\u043b\u044c\u0435\u0432\u0430\u0440\u043a\u0430",
    tab: [[6, 37]]
  },
  964: {id: "964", type: "minecraft:cauldron", name: "\u041a\u043e\u0442\u0451\u043b", tab: [[6, 38], [7, 39]]},
  965: {
    id: "965",
    type: "minecraft:ender_eye",
    name: "\u041e\u043a\u043e \u042d\u043d\u0434\u0435\u0440\u0430",
    tab: [[6, 188], [2, 50], [9, 43]]
  },
  966: {
    id: "966",
    type: "minecraft:glistering_melon_slice",
    name: "\u0421\u0432\u0435\u0440\u043a\u0430\u044e\u0449\u0438\u0439 \u043b\u043e\u043c\u0442\u0438\u043a \u0430\u0440\u0431\u0443\u0437\u0430",
    tab: [[9, 80]]
  },
  967: {
    id: "967",
    type: "minecraft:allay_spawn_egg",
    name: "\u042f\u0439\u0446\u043e \u043f\u0440\u0438\u0437\u044b\u0432\u0430 \u0442\u0438\u0445\u043e\u043d\u0438",
    tab: [[10, 1]]
  },
  968: {
    id: "968",
    type: "minecraft:axolotl_spawn_egg",
    name: "\u042f\u0439\u0446\u043e \u043f\u0440\u0438\u0437\u044b\u0432\u0430 \u0430\u043a\u0441\u043e\u043b\u043e\u0442\u043b\u044f",
    tab: [[10, 2]]
  },
  969: {
    id: "969",
    type: "minecraft:bat_spawn_egg",
    name: "\u042f\u0439\u0446\u043e \u043f\u0440\u0438\u0437\u044b\u0432\u0430 \u043b\u0435\u0442\u0443\u0447\u0435\u0439 \u043c\u044b\u0448\u0438",
    tab: [[10, 3]]
  },
  970: {
    id: "970",
    type: "minecraft:bee_spawn_egg",
    name: "\u042f\u0439\u0446\u043e \u043f\u0440\u0438\u0437\u044b\u0432\u0430 \u043f\u0447\u0435\u043b\u044b",
    tab: [[10, 4]]
  },
  971: {
    id: "971",
    type: "minecraft:blaze_spawn_egg",
    name: "\u042f\u0439\u0446\u043e \u043f\u0440\u0438\u0437\u044b\u0432\u0430 \u0432\u0441\u043f\u043e\u043b\u043e\u0445\u0430",
    tab: [[10, 5]]
  },
  972: {
    id: "972",
    type: "minecraft:cat_spawn_egg",
    name: "\u042f\u0439\u0446\u043e \u043f\u0440\u0438\u0437\u044b\u0432\u0430 \u043a\u043e\u0448\u043a\u0438",
    tab: [[10, 7]]
  },
  973: {
    id: "973",
    type: "minecraft:camel_spawn_egg",
    name: "\u042f\u0439\u0446\u043e \u043f\u0440\u0438\u0437\u044b\u0432\u0430 \u0432\u0435\u0440\u0431\u043b\u044e\u0434\u0430",
    tab: [[10, 6]]
  },
  974: {
    id: "974",
    type: "minecraft:cave_spider_spawn_egg",
    name: "\u042f\u0439\u0446\u043e \u043f\u0440\u0438\u0437\u044b\u0432\u0430 \u043f\u0435\u0449\u0435\u0440\u043d\u043e\u0433\u043e \u043f\u0430\u0443\u043a\u0430",
    tab: [[10, 8]]
  },
  975: {
    id: "975",
    type: "minecraft:chicken_spawn_egg",
    name: "\u042f\u0439\u0446\u043e \u043f\u0440\u0438\u0437\u044b\u0432\u0430 \u043a\u0443\u0440\u0438\u0446\u044b",
    tab: [[10, 9]]
  },
  976: {
    id: "976",
    type: "minecraft:cod_spawn_egg",
    name: "\u042f\u0439\u0446\u043e \u043f\u0440\u0438\u0437\u044b\u0432\u0430 \u0442\u0440\u0435\u0441\u043a\u0438",
    tab: [[10, 10]]
  },
  977: {
    id: "977",
    type: "minecraft:cow_spawn_egg",
    name: "\u042f\u0439\u0446\u043e \u043f\u0440\u0438\u0437\u044b\u0432\u0430 \u043a\u043e\u0440\u043e\u0432\u044b",
    tab: [[10, 11]]
  },
  978: {
    id: "978",
    type: "minecraft:creeper_spawn_egg",
    name: "\u042f\u0439\u0446\u043e \u043f\u0440\u0438\u0437\u044b\u0432\u0430 \u043a\u0440\u0438\u043f\u0435\u0440\u0430",
    tab: [[10, 12]]
  },
  979: {
    id: "979",
    type: "minecraft:dolphin_spawn_egg",
    name: "\u042f\u0439\u0446\u043e \u043f\u0440\u0438\u0437\u044b\u0432\u0430 \u0434\u0435\u043b\u044c\u0444\u0438\u043d\u0430",
    tab: [[10, 13]]
  },
  980: {
    id: "980",
    type: "minecraft:donkey_spawn_egg",
    name: "\u042f\u0439\u0446\u043e \u043f\u0440\u0438\u0437\u044b\u0432\u0430 \u043e\u0441\u043b\u0430",
    tab: [[10, 14]]
  },
  981: {
    id: "981",
    type: "minecraft:drowned_spawn_egg",
    name: "\u042f\u0439\u0446\u043e \u043f\u0440\u0438\u0437\u044b\u0432\u0430 \u0443\u0442\u043e\u043f\u043b\u0435\u043d\u043d\u0438\u043a\u0430",
    tab: [[10, 15]]
  },
  982: {
    id: "982",
    type: "minecraft:elder_guardian_spawn_egg",
    name: "\u042f\u0439\u0446\u043e \u043f\u0440\u0438\u0437\u044b\u0432\u0430 \u0434\u0440\u0435\u0432\u043d\u0435\u0433\u043e \u0441\u0442\u0440\u0430\u0436\u0430",
    tab: [[10, 16]]
  },
  983: {
    id: "983", type: "minecraft:ender_dragon_spawn_egg",
    name: "\u042f\u0439\u0446\u043e \u043f\u0440\u0438\u0437\u044b\u0432\u0430 \u042d\u043d\u0434\u0435\u0440-\u0434\u0440\u0430\u043a\u043e\u043d\u0430"
  },
  984: {
    id: "984",
    type: "minecraft:enderman_spawn_egg",
    name: "\u042f\u0439\u0446\u043e \u043f\u0440\u0438\u0437\u044b\u0432\u0430 \u044d\u043d\u0434\u0435\u0440\u043c\u0435\u043d\u0430",
    tab: [[10, 17]]
  },
  985: {
    id: "985",
    type: "minecraft:endermite_spawn_egg",
    name: "\u042f\u0439\u0446\u043e \u043f\u0440\u0438\u0437\u044b\u0432\u0430 \u044d\u043d\u0434\u0435\u0440\u043c\u0438\u0442\u0430",
    tab: [[10, 18]]
  },
  986: {
    id: "986",
    type: "minecraft:evoker_spawn_egg",
    name: "\u042f\u0439\u0446\u043e \u043f\u0440\u0438\u0437\u044b\u0432\u0430 \u0437\u0430\u043a\u043b\u0438\u043d\u0430\u0442\u0435\u043b\u044f",
    tab: [[10, 19]]
  },
  987: {
    id: "987",
    type: "minecraft:fox_spawn_egg",
    name: "\u042f\u0439\u0446\u043e \u043f\u0440\u0438\u0437\u044b\u0432\u0430 \u043b\u0438\u0441\u0438\u0446\u044b",
    tab: [[10, 20]]
  },
  988: {
    id: "988",
    type: "minecraft:frog_spawn_egg",
    name: "\u042f\u0439\u0446\u043e \u043f\u0440\u0438\u0437\u044b\u0432\u0430 \u043b\u044f\u0433\u0443\u0448\u043a\u0438",
    tab: [[10, 21]]
  },
  989: {
    id: "989",
    type: "minecraft:ghast_spawn_egg",
    name: "\u042f\u0439\u0446\u043e \u043f\u0440\u0438\u0437\u044b\u0432\u0430 \u0433\u0430\u0441\u0442\u0430",
    tab: [[10, 22]]
  },
  990: {
    id: "990",
    type: "minecraft:glow_squid_spawn_egg",
    name: "\u042f\u0439\u0446\u043e \u043f\u0440\u0438\u0437\u044b\u0432\u0430 \u0441\u0432\u0435\u0442\u044f\u0449\u0435\u0433\u043e\u0441\u044f \u0441\u043f\u0440\u0443\u0442\u0430",
    tab: [[10, 23]]
  },
  991: {
    id: "991",
    type: "minecraft:goat_spawn_egg",
    name: "\u042f\u0439\u0446\u043e \u043f\u0440\u0438\u0437\u044b\u0432\u0430 \u043a\u043e\u0437\u044b",
    tab: [[10, 24]]
  },
  992: {
    id: "992",
    type: "minecraft:guardian_spawn_egg",
    name: "\u042f\u0439\u0446\u043e \u043f\u0440\u0438\u0437\u044b\u0432\u0430 \u0441\u0442\u0440\u0430\u0436\u0430",
    tab: [[10, 25]]
  },
  993: {
    id: "993",
    type: "minecraft:hoglin_spawn_egg",
    name: "\u042f\u0439\u0446\u043e \u043f\u0440\u0438\u0437\u044b\u0432\u0430 \u0445\u043e\u0433\u043b\u0438\u043d\u0430",
    tab: [[10, 26]]
  },
  994: {
    id: "994",
    type: "minecraft:horse_spawn_egg",
    name: "\u042f\u0439\u0446\u043e \u043f\u0440\u0438\u0437\u044b\u0432\u0430 \u043b\u043e\u0448\u0430\u0434\u0438",
    tab: [[10, 27]]
  },
  995: {
    id: "995",
    type: "minecraft:husk_spawn_egg",
    name: "\u042f\u0439\u0446\u043e \u043f\u0440\u0438\u0437\u044b\u0432\u0430 \u043a\u0430\u0434\u0430\u0432\u0440\u0430",
    tab: [[10, 28]]
  },
  996: {
    id: "996",
    type: "minecraft:iron_golem_spawn_egg",
    name: "\u042f\u0439\u0446\u043e \u043f\u0440\u0438\u0437\u044b\u0432\u0430 \u0436\u0435\u043b\u0435\u0437\u043d\u043e\u0433\u043e \u0433\u043e\u043b\u0435\u043c\u0430",
    tab: [[10, 29]]
  },
  997: {
    id: "997",
    type: "minecraft:llama_spawn_egg",
    name: "\u042f\u0439\u0446\u043e \u043f\u0440\u0438\u0437\u044b\u0432\u0430 \u043b\u0430\u043c\u044b",
    tab: [[10, 30]]
  },
  998: {
    id: "998",
    type: "minecraft:magma_cube_spawn_egg",
    name: "\u042f\u0439\u0446\u043e \u043f\u0440\u0438\u0437\u044b\u0432\u0430 \u043c\u0430\u0433\u043c\u043e\u0432\u043e\u0433\u043e \u043a\u0443\u0431\u0430",
    tab: [[10, 31]]
  },
  999: {
    id: "999",
    type: "minecraft:mooshroom_spawn_egg",
    name: "\u042f\u0439\u0446\u043e \u043f\u0440\u0438\u0437\u044b\u0432\u0430 \u043c\u0443\u0443\u0445\u043e\u043c\u043e\u0440\u0430",
    tab: [[10, 32]]
  },
  1E3: {
    id: "1000",
    type: "minecraft:mule_spawn_egg",
    name: "\u042f\u0439\u0446\u043e \u043f\u0440\u0438\u0437\u044b\u0432\u0430 \u043c\u0443\u043b\u0430",
    tab: [[10, 33]]
  },
  1001: {
    id: "1001",
    type: "minecraft:ocelot_spawn_egg",
    name: "\u042f\u0439\u0446\u043e \u043f\u0440\u0438\u0437\u044b\u0432\u0430 \u043e\u0446\u0435\u043b\u043e\u0442\u0430",
    tab: [[10, 34]]
  },
  1002: {
    id: "1002",
    type: "minecraft:panda_spawn_egg",
    name: "\u042f\u0439\u0446\u043e \u043f\u0440\u0438\u0437\u044b\u0432\u0430 \u043f\u0430\u043d\u0434\u044b",
    tab: [[10, 35]]
  },
  1003: {
    id: "1003",
    type: "minecraft:parrot_spawn_egg",
    name: "\u042f\u0439\u0446\u043e \u043f\u0440\u0438\u0437\u044b\u0432\u0430 \u043f\u043e\u043f\u0443\u0433\u0430\u044f",
    tab: [[10, 36]]
  },
  1004: {
    id: "1004",
    type: "minecraft:phantom_spawn_egg",
    name: "\u042f\u0439\u0446\u043e \u043f\u0440\u0438\u0437\u044b\u0432\u0430 \u0444\u0430\u043d\u0442\u043e\u043c\u0430",
    tab: [[10, 37]]
  },
  1005: {
    id: "1005",
    type: "minecraft:pig_spawn_egg",
    name: "\u042f\u0439\u0446\u043e \u043f\u0440\u0438\u0437\u044b\u0432\u0430 \u0441\u0432\u0438\u043d\u044c\u0438",
    tab: [[10, 38]]
  },
  1006: {
    id: "1006",
    type: "minecraft:piglin_spawn_egg",
    name: "\u042f\u0439\u0446\u043e \u043f\u0440\u0438\u0437\u044b\u0432\u0430 \u043f\u0438\u0433\u043b\u0438\u043d\u0430",
    tab: [[10, 39]]
  },
  1007: {
    id: "1007",
    type: "minecraft:piglin_brute_spawn_egg",
    name: "\u042f\u0439\u0446\u043e \u043f\u0440\u0438\u0437\u044b\u0432\u0430 \u0431\u0440\u0443\u0442\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u043f\u0438\u0433\u043b\u0438\u043d\u0430",
    tab: [[10, 40]]
  },
  1008: {
    id: "1008",
    type: "minecraft:pillager_spawn_egg",
    name: "\u042f\u0439\u0446\u043e \u043f\u0440\u0438\u0437\u044b\u0432\u0430 \u0440\u0430\u0437\u0431\u043e\u0439\u043d\u0438\u043a\u0430",
    tab: [[10, 41]]
  },
  1009: {
    id: "1009",
    type: "minecraft:polar_bear_spawn_egg",
    name: "\u042f\u0439\u0446\u043e \u043f\u0440\u0438\u0437\u044b\u0432\u0430 \u0431\u0435\u043b\u043e\u0433\u043e \u043c\u0435\u0434\u0432\u0435\u0434\u044f",
    tab: [[10, 42]]
  },
  1010: {
    id: "1010",
    type: "minecraft:pufferfish_spawn_egg",
    name: "\u042f\u0439\u0446\u043e \u043f\u0440\u0438\u0437\u044b\u0432\u0430 \u0438\u0433\u043b\u043e\u0431\u0440\u044e\u0445\u0430",
    tab: [[10, 43]]
  },
  1011: {
    id: "1011",
    type: "minecraft:rabbit_spawn_egg",
    name: "\u042f\u0439\u0446\u043e \u043f\u0440\u0438\u0437\u044b\u0432\u0430 \u043a\u0440\u043e\u043b\u0438\u043a\u0430",
    tab: [[10, 44]]
  },
  1012: {
    id: "1012",
    type: "minecraft:ravager_spawn_egg",
    name: "\u042f\u0439\u0446\u043e \u043f\u0440\u0438\u0437\u044b\u0432\u0430 \u0440\u0430\u0437\u043e\u0440\u0438\u0442\u0435\u043b\u044f",
    tab: [[10, 45]]
  },
  1013: {
    id: "1013",
    type: "minecraft:salmon_spawn_egg",
    name: "\u042f\u0439\u0446\u043e \u043f\u0440\u0438\u0437\u044b\u0432\u0430 \u043b\u043e\u0441\u043e\u0441\u044f",
    tab: [[10, 46]]
  },
  1014: {
    id: "1014",
    type: "minecraft:sheep_spawn_egg",
    name: "\u042f\u0439\u0446\u043e \u043f\u0440\u0438\u0437\u044b\u0432\u0430 \u043e\u0432\u0446\u044b",
    tab: [[10, 47]]
  },
  1015: {
    id: "1015",
    type: "minecraft:shulker_spawn_egg",
    name: "\u042f\u0439\u0446\u043e \u043f\u0440\u0438\u0437\u044b\u0432\u0430 \u0448\u0430\u043b\u043a\u0435\u0440\u0430",
    tab: [[10, 48]]
  },
  1016: {
    id: "1016",
    type: "minecraft:silverfish_spawn_egg",
    name: "\u042f\u0439\u0446\u043e \u043f\u0440\u0438\u0437\u044b\u0432\u0430 \u0447\u0435\u0448\u0443\u0439\u043d\u0438\u0446\u044b",
    tab: [[10, 49]]
  },
  1017: {
    id: "1017",
    type: "minecraft:skeleton_spawn_egg",
    name: "\u042f\u0439\u0446\u043e \u043f\u0440\u0438\u0437\u044b\u0432\u0430 \u0441\u043a\u0435\u043b\u0435\u0442\u0430",
    tab: [[10, 50]]
  },
  1018: {
    id: "1018",
    type: "minecraft:skeleton_horse_spawn_egg",
    name: "\u042f\u0439\u0446\u043e \u043f\u0440\u0438\u0437\u044b\u0432\u0430 \u043b\u043e\u0448\u0430\u0434\u0438-\u0441\u043a\u0435\u043b\u0435\u0442\u0430",
    tab: [[10, 51]]
  },
  1019: {
    id: "1019",
    type: "minecraft:slime_spawn_egg",
    name: "\u042f\u0439\u0446\u043e \u043f\u0440\u0438\u0437\u044b\u0432\u0430 \u0441\u043b\u0438\u0437\u043d\u044f",
    tab: [[10, 52]]
  },
  1020: {
    id: "1020",
    type: "minecraft:sniffer_spawn_egg",
    name: "\u042f\u0439\u0446\u043e \u043f\u0440\u0438\u0437\u044b\u0432\u0430 \u043d\u044e\u0445\u0430\u0447\u0430",
    tab: [[10, 53]]
  },
  1021: {
    id: "1021",
    type: "minecraft:snow_golem_spawn_egg",
    name: "\u042f\u0439\u0446\u043e \u043f\u0440\u0438\u0437\u044b\u0432\u0430 \u0441\u043d\u0435\u0436\u043d\u043e\u0433\u043e \u0433\u043e\u043b\u0435\u043c\u0430",
    tab: [[10, 54]]
  },
  1022: {
    id: "1022",
    type: "minecraft:spider_spawn_egg",
    name: "\u042f\u0439\u0446\u043e \u043f\u0440\u0438\u0437\u044b\u0432\u0430 \u043f\u0430\u0443\u043a\u0430",
    tab: [[10, 55]]
  },
  1023: {
    id: "1023",
    type: "minecraft:squid_spawn_egg",
    name: "\u042f\u0439\u0446\u043e \u043f\u0440\u0438\u0437\u044b\u0432\u0430 \u0441\u043f\u0440\u0443\u0442\u0430",
    tab: [[10, 56]]
  },
  1024: {
    id: "1024",
    type: "minecraft:stray_spawn_egg",
    name: "\u042f\u0439\u0446\u043e \u043f\u0440\u0438\u0437\u044b\u0432\u0430 \u0437\u0438\u043c\u043e\u0433\u043e\u0440\u0430",
    tab: [[10, 57]]
  },
  1025: {
    id: "1025",
    type: "minecraft:strider_spawn_egg",
    name: "\u042f\u0439\u0446\u043e \u043f\u0440\u0438\u0437\u044b\u0432\u0430 \u043b\u0430\u0432\u043e\u043c\u0435\u0440\u043a\u0438",
    tab: [[10, 58]]
  },
  1026: {
    id: "1026",
    type: "minecraft:tadpole_spawn_egg",
    name: "\u042f\u0439\u0446\u043e \u043f\u0440\u0438\u0437\u044b\u0432\u0430 \u0433\u043e\u043b\u043e\u0432\u0430\u0441\u0442\u0438\u043a\u0430",
    tab: [[10, 59]]
  },
  1027: {
    id: "1027",
    type: "minecraft:trader_llama_spawn_egg",
    name: "\u042f\u0439\u0446\u043e \u043f\u0440\u0438\u0437\u044b\u0432\u0430 \u043b\u0430\u043c\u044b \u0442\u043e\u0440\u0433\u043e\u0432\u0446\u0430",
    tab: [[10, 60]]
  },
  1028: {
    id: "1028",
    type: "minecraft:tropical_fish_spawn_egg",
    name: "\u042f\u0439\u0446\u043e \u043f\u0440\u0438\u0437\u044b\u0432\u0430 \u0442\u0440\u043e\u043f\u0438\u0447\u0435\u0441\u043a\u043e\u0439 \u0440\u044b\u0431\u044b",
    tab: [[10, 61]]
  },
  1029: {
    id: "1029",
    type: "minecraft:turtle_spawn_egg",
    name: "\u042f\u0439\u0446\u043e \u043f\u0440\u0438\u0437\u044b\u0432\u0430 \u0447\u0435\u0440\u0435\u043f\u0430\u0445\u0438",
    tab: [[10, 62]]
  },
  1030: {
    id: "1030",
    type: "minecraft:vex_spawn_egg",
    name: "\u042f\u0439\u0446\u043e \u043f\u0440\u0438\u0437\u044b\u0432\u0430 \u0432\u0440\u0435\u0434\u0438\u043d\u044b",
    tab: [[10, 63]]
  },
  1031: {
    id: "1031",
    type: "minecraft:villager_spawn_egg",
    name: "\u042f\u0439\u0446\u043e \u043f\u0440\u0438\u0437\u044b\u0432\u0430 \u043a\u0440\u0435\u0441\u0442\u044c\u044f\u043d\u0438\u043d\u0430",
    tab: [[10, 64]]
  },
  1032: {
    id: "1032",
    type: "minecraft:vindicator_spawn_egg",
    name: "\u042f\u0439\u0446\u043e \u043f\u0440\u0438\u0437\u044b\u0432\u0430 \u043f\u043e\u0431\u043e\u0440\u043d\u0438\u043a\u0430",
    tab: [[10, 65]]
  },
  1033: {
    id: "1033",
    type: "minecraft:wandering_trader_spawn_egg",
    name: "\u042f\u0439\u0446\u043e \u043f\u0440\u0438\u0437\u044b\u0432\u0430 \u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u0443\u044e\u0449\u0435\u0433\u043e \u0442\u043e\u0440\u0433\u043e\u0432\u0446\u0430",
    tab: [[10, 66]]
  },
  1034: {
    id: "1034",
    type: "minecraft:warden_spawn_egg",
    name: "\u042f\u0439\u0446\u043e \u043f\u0440\u0438\u0437\u044b\u0432\u0430 \u0445\u0440\u0430\u043d\u0438\u0442\u0435\u043b\u044f",
    tab: [[10, 67]]
  },
  1035: {
    id: "1035",
    type: "minecraft:witch_spawn_egg",
    name: "\u042f\u0439\u0446\u043e \u043f\u0440\u0438\u0437\u044b\u0432\u0430 \u0432\u0435\u0434\u044c\u043c\u044b",
    tab: [[10, 68]]
  },
  1036: {
    id: "1036",
    type: "minecraft:wither_spawn_egg",
    name: "\u042f\u0439\u0446\u043e \u043f\u0440\u0438\u0437\u044b\u0432\u0430 \u0432\u0438\u0437\u0435\u0440\u0430"
  },
  1037: {
    id: "1037",
    type: "minecraft:wither_skeleton_spawn_egg",
    name: "\u042f\u0439\u0446\u043e \u043f\u0440\u0438\u0437\u044b\u0432\u0430 \u0432\u0438\u0437\u0435\u0440-\u0441\u043a\u0435\u043b\u0435\u0442\u0430",
    tab: [[10, 69]]
  },
  1038: {
    id: "1038",
    type: "minecraft:wolf_spawn_egg",
    name: "\u042f\u0439\u0446\u043e \u043f\u0440\u0438\u0437\u044b\u0432\u0430 \u0432\u043e\u043b\u043a\u0430",
    tab: [[10, 70]]
  },
  1039: {
    id: "1039",
    type: "minecraft:zoglin_spawn_egg",
    name: "\u042f\u0439\u0446\u043e \u043f\u0440\u0438\u0437\u044b\u0432\u0430 \u0437\u043e\u0433\u043b\u0438\u043d\u0430",
    tab: [[10, 71]]
  },
  1040: {
    id: "1040",
    type: "minecraft:zombie_spawn_egg",
    name: "\u042f\u0439\u0446\u043e \u043f\u0440\u0438\u0437\u044b\u0432\u0430 \u0437\u043e\u043c\u0431\u0438",
    tab: [[10, 72]]
  },
  1041: {
    id: "1041",
    type: "minecraft:zombie_horse_spawn_egg",
    name: "\u042f\u0439\u0446\u043e \u043f\u0440\u0438\u0437\u044b\u0432\u0430 \u043b\u043e\u0448\u0430\u0434\u0438-\u0437\u043e\u043c\u0431\u0438",
    tab: [[10, 73]]
  },
  1042: {
    id: "1042",
    type: "minecraft:zombie_villager_spawn_egg",
    name: "\u042f\u0439\u0446\u043e \u043f\u0440\u0438\u0437\u044b\u0432\u0430 \u043a\u0440\u0435\u0441\u0442\u044c\u044f\u043d\u0438\u043d\u0430-\u0437\u043e\u043c\u0431\u0438",
    tab: [[10, 74]]
  },
  1043: {
    id: "1043",
    type: "minecraft:zombified_piglin_spawn_egg",
    name: "\u042f\u0439\u0446\u043e \u043f\u0440\u0438\u0437\u044b\u0432\u0430 \u0437\u043e\u043c\u0431\u0438\u0444\u0438\u0446\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u0433\u043e \u043f\u0438\u0433\u043b\u0438\u043d\u0430",
    tab: [[10, 75]]
  },
  1044: {
    id: "1044",
    type: "minecraft:experience_bottle",
    name: "\u041f\u0443\u0437\u044b\u0440\u0451\u043a \u043e\u043f\u044b\u0442\u0430",
    tab: [[9, 131]]
  },
  1045: {
    id: "1045", type: "minecraft:fire_charge",
    name: "\u041e\u0433\u043d\u0435\u043d\u043d\u044b\u0439 \u0437\u0430\u0440\u044f\u0434", tab: [[2, 37], [9, 39]]
  },
  1046: {
    id: "1046",
    type: "minecraft:writable_book",
    name: "\u041a\u043d\u0438\u0433\u0430 \u0438 \u043f\u0435\u0440\u043e",
    tab: [[2, 48]]
  },
  1047: {
    id: "1047",
    type: "minecraft:written_book",
    name: "\u0417\u0430\u0432\u0435\u0440\u0448\u0451\u043d\u043d\u0430\u044f \u043a\u043d\u0438\u0433\u0430"
  },
  1048: {id: "1048", type: "minecraft:item_frame", name: "\u0420\u0430\u043c\u043a\u0430", tab: [[6, 53]]},
  1049: {
    id: "1049",
    type: "minecraft:glow_item_frame",
    name: "\u0421\u0432\u0435\u0442\u044f\u0449\u0430\u044f\u0441\u044f \u0440\u0430\u043c\u043a\u0430",
    tab: [[6, 54]]
  },
  1050: {
    id: "1050",
    type: "minecraft:flower_pot",
    name: "\u0426\u0432\u0435\u0442\u043e\u0447\u043d\u044b\u0439 \u0433\u043e\u0440\u0448\u043e\u043a",
    tab: [[6, 50]]
  },
  1051: {id: "1051", type: "minecraft:carrot", name: "\u041c\u043e\u0440\u043a\u043e\u0432\u044c", tab: [[1, 7]]},
  1052: {
    id: "1052", type: "minecraft:potato", name: "\u041a\u0430\u0440\u0442\u043e\u0444\u0435\u043b\u044c",
    tab: [[1, 9]]
  },
  1053: {
    id: "1053",
    type: "minecraft:baked_potato",
    name: "\u041f\u0435\u0447\u0451\u043d\u044b\u0439 \u043a\u0430\u0440\u0442\u043e\u0444\u0435\u043b\u044c",
    tab: [[1, 10]]
  },
  1054: {
    id: "1054",
    type: "minecraft:poisonous_potato",
    name: "\u042f\u0434\u043e\u0432\u0438\u0442\u044b\u0439 \u043a\u0430\u0440\u0442\u043e\u0444\u0435\u043b\u044c",
    tab: [[1, 11]]
  },
  1055: {
    id: "1055",
    type: "minecraft:map",
    name: "\u0427\u0438\u0441\u0442\u0430\u044f \u043a\u0430\u0440\u0442\u0430",
    tab: [[2, 47]]
  },
  1056: {
    id: "1056",
    type: "minecraft:golden_carrot",
    name: "\u0417\u043e\u043b\u043e\u0442\u0430\u044f \u043c\u043e\u0440\u043a\u043e\u0432\u044c",
    tab: [[1, 8], [9, 84]]
  },
  1057: {id: "1057", type: "minecraft:skeleton_skull", name: "\u0427\u0435\u0440\u0435\u043f", tab: [[6, 179]]},
  1058: {
    id: "1058",
    type: "minecraft:wither_skeleton_skull",
    name: "\u0427\u0435\u0440\u0435\u043f \u0432\u0438\u0437\u0435\u0440-\u0441\u043a\u0435\u043b\u0435\u0442\u0430",
    tab: [[6, 180]]
  },
  1059: {
    id: "1059",
    type: "minecraft:player_head",
    name: "\u0413\u043e\u043b\u043e\u0432\u0430 \u0438\u0433\u0440\u043e\u043a\u0430",
    tab: [[6, 181]]
  },
  1060: {
    id: "1060",
    type: "minecraft:zombie_head",
    name: "\u0413\u043e\u043b\u043e\u0432\u0430 \u0437\u043e\u043c\u0431\u0438",
    tab: [[6, 182]]
  },
  1061: {
    id: "1061",
    type: "minecraft:creeper_head",
    name: "\u0413\u043e\u043b\u043e\u0432\u0430 \u043a\u0440\u0438\u043f\u0435\u0440\u0430",
    tab: [[6, 183]]
  },
  1062: {
    id: "1062",
    type: "minecraft:dragon_head",
    name: "\u0413\u043e\u043b\u043e\u0432\u0430 \u0434\u0440\u0430\u043a\u043e\u043d\u0430",
    tab: [[6, 185]]
  },
  1063: {
    id: "1063",
    type: "minecraft:piglin_head",
    name: "\u0413\u043e\u043b\u043e\u0432\u0430 \u043f\u0438\u0433\u043b\u0438\u043d\u0430",
    tab: [[6, 184]]
  },
  1064: {
    id: "1064",
    type: "minecraft:nether_star",
    name: "\u0417\u0432\u0435\u0437\u0434\u0430 \u041d\u0435\u0437\u0435\u0440\u0430",
    tab: [[9, 41]]
  },
  1065: {
    id: "1065",
    type: "minecraft:pumpkin_pie",
    name: "\u0422\u044b\u043a\u0432\u0435\u043d\u043d\u044b\u0439 \u043f\u0438\u0440\u043e\u0433",
    tab: [[1, 33]]
  },
  1066: {
    id: "1066",
    type: "minecraft:firework_rocket",
    name: "\u0424\u0435\u0439\u0435\u0440\u0432\u0435\u0440\u043a",
    tab: [[2, 52], [3, 50]]
  },
  1067: {
    id: "1067",
    type: "minecraft:firework_star",
    name: "\u041f\u0438\u0440\u043e\u0442\u0435\u0445\u043d\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u0437\u0432\u0435\u0437\u0434\u0430",
    tab: [[9, 69]]
  },
  1068: {
    id: "1068",
    type: "minecraft:enchanted_book",
    name: "\u0427\u0430\u0440\u043e\u0434\u0435\u0439\u0441\u043a\u0430\u044f \u043a\u043d\u0438\u0433\u0430",
    tab: [[9, 132]]
  },
  1069: {
    id: "1069",
    type: "minecraft:nether_brick",
    name: "\u041d\u0435\u0437\u0435\u0440\u0441\u043a\u0438\u0439 \u043a\u0438\u0440\u043f\u0438\u0447",
    tab: [[9, 66]]
  },
  1070: {
    id: "1070",
    type: "minecraft:prismarine_shard",
    name: "\u041e\u0441\u043a\u043e\u043b\u043e\u043a \u043f\u0440\u0438\u0437\u043c\u0430\u0440\u0438\u043d\u0430",
    tab: [[9, 35]]
  },
  1071: {
    id: "1071",
    type: "minecraft:prismarine_crystals",
    name: "\u041a\u0440\u0438\u0441\u0442\u0430\u043b\u043b \u043f\u0440\u0438\u0437\u043c\u0430\u0440\u0438\u043d\u0430",
    tab: [[9, 36]]
  },
  1072: {
    id: "1072",
    type: "minecraft:rabbit",
    name: "\u0421\u044b\u0440\u0430\u044f \u043a\u0440\u043e\u043b\u044c\u0447\u0430\u0442\u0438\u043d\u0430",
    tab: [[1, 22]]
  },
  1073: {
    id: "1073",
    type: "minecraft:cooked_rabbit",
    name: "\u0416\u0430\u0440\u0435\u043d\u0430\u044f \u043a\u0440\u043e\u043b\u044c\u0447\u0430\u0442\u0438\u043d\u0430",
    tab: [[1, 23]]
  },
  1074: {
    id: "1074",
    type: "minecraft:rabbit_stew",
    name: "\u0422\u0443\u0448\u0451\u043d\u044b\u0439 \u043a\u0440\u043e\u043b\u0438\u043a",
    tab: [[1, 38]]
  },
  1075: {
    id: "1075",
    type: "minecraft:rabbit_foot",
    name: "\u041a\u0440\u043e\u043b\u0438\u0447\u044c\u044f \u043b\u0430\u043f\u043a\u0430",
    tab: [[9, 79]]
  },
  1076: {
    id: "1076",
    type: "minecraft:rabbit_hide",
    name: "\u041a\u0440\u043e\u043b\u0438\u0447\u044c\u044f \u0448\u043a\u0443\u0440\u043a\u0430",
    tab: [[9, 28]]
  },
  1077: {
    id: "1077",
    type: "minecraft:armor_stand",
    name: "\u0421\u0442\u043e\u0439\u043a\u0430 \u0434\u043b\u044f \u0431\u0440\u043e\u043d\u0438",
    tab: [[6, 52], [7, 60]]
  },
  1078: {
    id: "1078",
    type: "minecraft:iron_horse_armor",
    name: "\u0416\u0435\u043b\u0435\u0437\u043d\u0430\u044f \u043a\u043e\u043d\u0441\u043a\u0430\u044f \u0431\u0440\u043e\u043d\u044f",
    tab: [[3, 40]]
  },
  1079: {
    id: "1079",
    type: "minecraft:golden_horse_armor",
    name: "\u0417\u043e\u043b\u043e\u0442\u0430\u044f \u043a\u043e\u043d\u0441\u043a\u0430\u044f \u0431\u0440\u043e\u043d\u044f",
    tab: [[3, 41]]
  },
  1080: {
    id: "1080",
    type: "minecraft:diamond_horse_armor",
    name: "\u0410\u043b\u043c\u0430\u0437\u043d\u0430\u044f \u043a\u043e\u043d\u0441\u043a\u0430\u044f \u0431\u0440\u043e\u043d\u044f",
    tab: [[3, 42]]
  },
  1081: {
    id: "1081",
    type: "minecraft:leather_horse_armor",
    name: "\u041a\u043e\u0436\u0430\u043d\u0430\u044f \u043a\u043e\u043d\u0441\u043a\u0430\u044f \u0431\u0440\u043e\u043d\u044f",
    tab: [[3, 39]]
  },
  1082: {id: "1082", type: "minecraft:lead", name: "\u041f\u043e\u0432\u043e\u0434\u043e\u043a", tab: [[2, 42]]},
  1083: {
    id: "1083", type: "minecraft:name_tag",
    name: "\u0411\u0438\u0440\u043a\u0430", tab: [[2, 41]]
  },
  1084: {
    id: "1084",
    type: "minecraft:command_block_minecart",
    name: "\u0412\u0430\u0433\u043e\u043d\u0435\u0442\u043a\u0430 \u0441 \u043a\u043e\u043c\u0430\u043d\u0434\u043d\u044b\u043c \u0431\u043b\u043e\u043a\u043e\u043c"
  },
  1085: {
    id: "1085",
    type: "minecraft:mutton",
    name: "\u0421\u044b\u0440\u0430\u044f \u0431\u0430\u0440\u0430\u043d\u0438\u043d\u0430",
    tab: [[1, 18]]
  },
  1086: {
    id: "1086",
    type: "minecraft:cooked_mutton",
    name: "\u0416\u0430\u0440\u0435\u043d\u0430\u044f \u0431\u0430\u0440\u0430\u043d\u0438\u043d\u0430",
    tab: [[1, 19]]
  },
  1087: {
    id: "1087",
    type: "minecraft:white_banner",
    name: "\u0411\u0435\u043b\u044b\u0439 \u0444\u043b\u0430\u0433",
    tab: [[5, 182], [6, 162]]
  },
  1088: {
    id: "1088",
    type: "minecraft:orange_banner",
    name: "\u041e\u0440\u0430\u043d\u0436\u0435\u0432\u044b\u0439 \u0444\u043b\u0430\u0433",
    tab: [[5, 188], [6, 168]]
  },
  1089: {
    id: "1089",
    type: "minecraft:magenta_banner",
    name: "\u041f\u0443\u0440\u043f\u0443\u0440\u043d\u044b\u0439 \u0444\u043b\u0430\u0433",
    tab: [[5, 196], [6, 176]]
  },
  1090: {
    id: "1090", type: "minecraft:light_blue_banner",
    name: "\u0413\u043e\u043b\u0443\u0431\u043e\u0439 \u0444\u043b\u0430\u0433", tab: [[5, 193], [6, 173]]
  },
  1091: {
    id: "1091",
    type: "minecraft:yellow_banner",
    name: "\u0416\u0451\u043b\u0442\u044b\u0439 \u0444\u043b\u0430\u0433",
    tab: [[5, 189], [6, 169]]
  },
  1092: {
    id: "1092",
    type: "minecraft:lime_banner",
    name: "\u041b\u0430\u0439\u043c\u043e\u0432\u044b\u0439 \u0444\u043b\u0430\u0433",
    tab: [[5, 190], [6, 170]]
  },
  1093: {
    id: "1093",
    type: "minecraft:pink_banner",
    name: "\u0420\u043e\u0437\u043e\u0432\u044b\u0439 \u0444\u043b\u0430\u0433",
    tab: [[5, 197], [6, 177]]
  },
  1094: {
    id: "1094",
    type: "minecraft:gray_banner",
    name: "\u0421\u0435\u0440\u044b\u0439 \u0444\u043b\u0430\u0433",
    tab: [[5, 184], [6, 164]]
  },
  1095: {
    id: "1095",
    type: "minecraft:light_gray_banner",
    name: "\u0421\u0432\u0435\u0442\u043b\u043e-\u0441\u0435\u0440\u044b\u0439 \u0444\u043b\u0430\u0433",
    tab: [[5, 183], [6, 163]]
  },
  1096: {
    id: "1096",
    type: "minecraft:cyan_banner",
    name: "\u0411\u0438\u0440\u044e\u0437\u043e\u0432\u044b\u0439 \u0444\u043b\u0430\u0433",
    tab: [[5, 192], [6, 172]]
  },
  1097: {
    id: "1097",
    type: "minecraft:purple_banner",
    name: "\u0424\u0438\u043e\u043b\u0435\u0442\u043e\u0432\u044b\u0439 \u0444\u043b\u0430\u0433",
    tab: [[5, 195], [6, 175]]
  },
  1098: {
    id: "1098",
    type: "minecraft:blue_banner",
    name: "\u0421\u0438\u043d\u0438\u0439 \u0444\u043b\u0430\u0433",
    tab: [[5, 194], [6, 174]]
  },
  1099: {
    id: "1099",
    type: "minecraft:brown_banner",
    name: "\u041a\u043e\u0440\u0438\u0447\u043d\u0435\u0432\u044b\u0439 \u0444\u043b\u0430\u0433",
    tab: [[5, 186], [6, 166]]
  },
  1100: {
    id: "1100",
    type: "minecraft:green_banner",
    name: "\u0417\u0435\u043b\u0451\u043d\u044b\u0439 \u0444\u043b\u0430\u0433",
    tab: [[5, 191], [6, 171]]
  },
  1101: {
    id: "1101",
    type: "minecraft:red_banner",
    name: "\u041a\u0440\u0430\u0441\u043d\u044b\u0439 \u0444\u043b\u0430\u0433",
    tab: [[5, 187], [6, 167]]
  },
  1102: {
    id: "1102",
    type: "minecraft:black_banner",
    name: "\u0427\u0451\u0440\u043d\u044b\u0439 \u0444\u043b\u0430\u0433",
    tab: [[5, 185], [6, 165]]
  },
  1103: {
    id: "1103",
    type: "minecraft:end_crystal",
    name: "\u041a\u0440\u0438\u0441\u0442\u0430\u043b\u043b \u042d\u043d\u0434\u0430",
    tab: [[6, 36], [3, 45]]
  },
  1104: {
    id: "1104", type: "minecraft:chorus_fruit", name: "\u041f\u043b\u043e\u0434 \u0445\u043e\u0440\u0443\u0441\u0430",
    tab: [[1, 6]]
  },
  1105: {
    id: "1105",
    type: "minecraft:popped_chorus_fruit",
    name: "\u041f\u0440\u043e\u0436\u0430\u0440\u0435\u043d\u043d\u044b\u0439 \u043f\u043b\u043e\u0434 \u0445\u043e\u0440\u0443\u0441\u0430",
    tab: [[9, 45]]
  },
  1106: {
    id: "1106",
    type: "minecraft:torchflower_seeds",
    name: "\u0421\u0435\u043c\u0435\u043d\u0430 \u0444\u0430\u043a\u0435\u043b\u044c\u043d\u0438\u043a\u0430",
    tab: [[8, 165]]
  },
  1107: {
    id: "1107",
    type: "minecraft:pitcher_pod",
    name: "\u0421\u0442\u0440\u0443\u0447\u043e\u043a \u043a\u0443\u0432\u0448\u0438\u043d\u043d\u0438\u0446\u044b",
    tab: [[8, 166]]
  },
  1108: {id: "1108", type: "minecraft:beetroot", name: "\u0421\u0432\u0451\u043a\u043b\u0430", tab: [[1, 12]]},
  1109: {
    id: "1109",
    type: "minecraft:beetroot_seeds",
    name: "\u0421\u0435\u043c\u0435\u043d\u0430 \u0441\u0432\u0451\u043a\u043b\u044b",
    tab: [[8, 164]]
  },
  1110: {
    id: "1110",
    type: "minecraft:beetroot_soup",
    name: "\u0421\u0432\u0435\u043a\u043e\u043b\u044c\u043d\u044b\u0439 \u0441\u0443\u043f",
    tab: [[1, 37]]
  },
  1111: {
    id: "1111",
    type: "minecraft:dragon_breath",
    name: "\u0414\u0440\u0430\u043a\u043e\u043d\u044c\u0435 \u0434\u044b\u0445\u0430\u043d\u0438\u0435",
    tab: [[9, 75]]
  },
  "1112-water": {
    id: "1112-water",
    type: "minecraft:splash_potion",
    name: "\u0412\u0437\u0440\u044b\u0432\u043d\u0430\u044f \u0431\u0443\u0442\u044b\u043b\u043e\u0447\u043a\u0430 \u0432\u043e\u0434\u044b",
    tab: [[1, 92]],
    potion: "water"
  },
  "1112-mundane": {
    id: "1112-mundane",
    type: "minecraft:splash_potion",
    name: "\u0417\u0430\u0443\u0440\u044f\u0434\u043d\u043e\u0435 \u0432\u0437\u0440\u044b\u0432\u043d\u043e\u0435 \u0437\u0435\u043b\u044c\u0435",
    tab: [[1, 92]],
    potion: "mundane"
  },
  "1112-thick": {
    id: "1112-thick",
    type: "minecraft:splash_potion",
    name: "\u0413\u0443\u0441\u0442\u043e\u0435 \u0432\u0437\u0440\u044b\u0432\u043d\u043e\u0435 \u0437\u0435\u043b\u044c\u0435",
    tab: [[1, 92]],
    potion: "thick"
  },
  "1112-awkward": {
    id: "1112-awkward",
    type: "minecraft:splash_potion",
    name: "\u041c\u0443\u0442\u043d\u043e\u0435 \u0432\u0437\u0440\u044b\u0432\u043d\u043e\u0435 \u0437\u0435\u043b\u044c\u0435",
    tab: [[1, 92]],
    potion: "awkward"
  },
  "1112-night_vision": {
    id: "1112-night_vision",
    type: "minecraft:splash_potion",
    name: "\u0412\u0437\u0440\u044b\u0432\u043d\u043e\u0435 \u0437\u0435\u043b\u044c\u0435 \u043d\u043e\u0447\u043d\u043e\u0433\u043e \u0437\u0440\u0435\u043d\u0438\u044f",
    tab: [[1, 92]],
    potion: "night_vision"
  },
  "1112-long_night_vision": {
    id: "1112-long_night_vision",
    type: "minecraft:splash_potion",
    name: "\u0412\u0437\u0440\u044b\u0432\u043d\u043e\u0435 \u0437\u0435\u043b\u044c\u0435 \u043d\u043e\u0447\u043d\u043e\u0433\u043e \u0437\u0440\u0435\u043d\u0438\u044f",
    tab: [[1, 92]],
    potion: "long_night_vision"
  },
  "1112-invisibility": {
    id: "1112-invisibility",
    type: "minecraft:splash_potion",
    name: "\u0412\u0437\u0440\u044b\u0432\u043d\u043e\u0435 \u0437\u0435\u043b\u044c\u0435 \u043d\u0435\u0432\u0438\u0434\u0438\u043c\u043e\u0441\u0442\u0438",
    tab: [[1, 92]],
    potion: "invisibility"
  },
  "1112-long_invisibility": {
    id: "1112-long_invisibility",
    type: "minecraft:splash_potion",
    name: "\u0412\u0437\u0440\u044b\u0432\u043d\u043e\u0435 \u0437\u0435\u043b\u044c\u0435 \u043d\u0435\u0432\u0438\u0434\u0438\u043c\u043e\u0441\u0442\u0438",
    tab: [[1, 92]],
    potion: "long_invisibility"
  },
  "1112-leaping": {
    id: "1112-leaping",
    type: "minecraft:splash_potion",
    name: "\u0412\u0437\u0440\u044b\u0432\u043d\u043e\u0435 \u0437\u0435\u043b\u044c\u0435 \u043f\u0440\u044b\u0433\u0443\u0447\u0435\u0441\u0442\u0438",
    tab: [[1, 92]],
    potion: "leaping"
  },
  "1112-long_leaping": {
    id: "1112-long_leaping",
    type: "minecraft:splash_potion",
    name: "\u0412\u0437\u0440\u044b\u0432\u043d\u043e\u0435 \u0437\u0435\u043b\u044c\u0435 \u043f\u0440\u044b\u0433\u0443\u0447\u0435\u0441\u0442\u0438",
    tab: [[1, 92]],
    potion: "long_leaping"
  },
  "1112-strong_leaping": {
    id: "1112-strong_leaping",
    type: "minecraft:splash_potion",
    name: "\u0412\u0437\u0440\u044b\u0432\u043d\u043e\u0435 \u0437\u0435\u043b\u044c\u0435 \u043f\u0440\u044b\u0433\u0443\u0447\u0435\u0441\u0442\u0438",
    tab: [[1, 92]],
    potion: "strong_leaping"
  },
  "1112-fire_resistance": {
    id: "1112-fire_resistance",
    type: "minecraft:splash_potion",
    name: "\u0412\u0437\u0440\u044b\u0432\u043d\u043e\u0435 \u0437\u0435\u043b\u044c\u0435 \u043e\u0433\u043d\u0435\u0441\u0442\u043e\u0439\u043a\u043e\u0441\u0442\u0438",
    tab: [[1, 92]],
    potion: "fire_resistance"
  },
  "1112-long_fire_resistance": {
    id: "1112-long_fire_resistance",
    type: "minecraft:splash_potion",
    name: "\u0412\u0437\u0440\u044b\u0432\u043d\u043e\u0435 \u0437\u0435\u043b\u044c\u0435 \u043e\u0433\u043d\u0435\u0441\u0442\u043e\u0439\u043a\u043e\u0441\u0442\u0438",
    tab: [[1, 92]],
    potion: "long_fire_resistance"
  },
  "1112-swiftness": {
    id: "1112-swiftness",
    type: "minecraft:splash_potion",
    name: "\u0412\u0437\u0440\u044b\u0432\u043d\u043e\u0435 \u0437\u0435\u043b\u044c\u0435 \u0441\u0442\u0440\u0435\u043c\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0438",
    tab: [[1, 92]],
    potion: "swiftness"
  },
  "1112-long_swiftness": {
    id: "1112-long_swiftness",
    type: "minecraft:splash_potion",
    name: "\u0412\u0437\u0440\u044b\u0432\u043d\u043e\u0435 \u0437\u0435\u043b\u044c\u0435 \u0441\u0442\u0440\u0435\u043c\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0438",
    tab: [[1, 92]],
    potion: "long_swiftness"
  },
  "1112-strong_swiftness": {
    id: "1112-strong_swiftness",
    type: "minecraft:splash_potion",
    name: "\u0412\u0437\u0440\u044b\u0432\u043d\u043e\u0435 \u0437\u0435\u043b\u044c\u0435 \u0441\u0442\u0440\u0435\u043c\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0438",
    tab: [[1, 92]],
    potion: "strong_swiftness"
  },
  "1112-slowness": {
    id: "1112-slowness",
    type: "minecraft:splash_potion",
    name: "\u0412\u0437\u0440\u044b\u0432\u043d\u043e\u0435 \u0437\u0435\u043b\u044c\u0435 \u0437\u0430\u043c\u0435\u0434\u043b\u0435\u043d\u0438\u044f",
    tab: [[1, 92]],
    potion: "slowness"
  },
  "1112-long_slowness": {
    id: "1112-long_slowness",
    type: "minecraft:splash_potion",
    name: "\u0412\u0437\u0440\u044b\u0432\u043d\u043e\u0435 \u0437\u0435\u043b\u044c\u0435 \u0437\u0430\u043c\u0435\u0434\u043b\u0435\u043d\u0438\u044f",
    tab: [[1, 92]],
    potion: "long_slowness"
  },
  "1112-strong_slowness": {
    id: "1112-strong_slowness",
    type: "minecraft:splash_potion",
    name: "\u0412\u0437\u0440\u044b\u0432\u043d\u043e\u0435 \u0437\u0435\u043b\u044c\u0435 \u0437\u0430\u043c\u0435\u0434\u043b\u0435\u043d\u0438\u044f",
    tab: [[1, 92]],
    potion: "strong_slowness"
  },
  "1112-turtle_master": {
    id: "1112-turtle_master",
    type: "minecraft:splash_potion",
    name: "\u0412\u0437\u0440\u044b\u0432\u043d\u043e\u0435 \u0437\u0435\u043b\u044c\u0435 \u0447\u0435\u0440\u0435\u043f\u0430\u0448\u044c\u0435\u0439 \u043c\u043e\u0449\u0438",
    tab: [[1, 92]],
    potion: "turtle_master"
  },
  "1112-long_turtle_master": {
    id: "1112-long_turtle_master",
    type: "minecraft:splash_potion",
    name: "\u0412\u0437\u0440\u044b\u0432\u043d\u043e\u0435 \u0437\u0435\u043b\u044c\u0435 \u0447\u0435\u0440\u0435\u043f\u0430\u0448\u044c\u0435\u0439 \u043c\u043e\u0449\u0438",
    tab: [[1, 92]],
    potion: "long_turtle_master"
  },
  "1112-strong_turtle_master": {
    id: "1112-strong_turtle_master",
    type: "minecraft:splash_potion",
    name: "\u0412\u0437\u0440\u044b\u0432\u043d\u043e\u0435 \u0437\u0435\u043b\u044c\u0435 \u0447\u0435\u0440\u0435\u043f\u0430\u0448\u044c\u0435\u0439 \u043c\u043e\u0449\u0438",
    tab: [[1, 92]],
    potion: "strong_turtle_master"
  },
  "1112-water_breathing": {
    id: "1112-water_breathing",
    type: "minecraft:splash_potion",
    name: "\u0412\u0437\u0440\u044b\u0432\u043d\u043e\u0435 \u0437\u0435\u043b\u044c\u0435 \u0432\u043e\u0434\u043d\u043e\u0433\u043e \u0434\u044b\u0445\u0430\u043d\u0438\u044f",
    tab: [[1, 92]],
    potion: "water_breathing"
  },
  "1112-long_water_breathing": {
    id: "1112-long_water_breathing",
    type: "minecraft:splash_potion",
    name: "\u0412\u0437\u0440\u044b\u0432\u043d\u043e\u0435 \u0437\u0435\u043b\u044c\u0435 \u0432\u043e\u0434\u043d\u043e\u0433\u043e \u0434\u044b\u0445\u0430\u043d\u0438\u044f",
    tab: [[1, 92]],
    potion: "long_water_breathing"
  },
  "1112-healing": {
    id: "1112-healing",
    type: "minecraft:splash_potion",
    name: "\u0412\u0437\u0440\u044b\u0432\u043d\u043e\u0435 \u0437\u0435\u043b\u044c\u0435 \u0438\u0441\u0446\u0435\u043b\u0435\u043d\u0438\u044f",
    tab: [[1, 92]],
    potion: "healing"
  },
  "1112-strong_healing": {
    id: "1112-strong_healing",
    type: "minecraft:splash_potion",
    name: "\u0412\u0437\u0440\u044b\u0432\u043d\u043e\u0435 \u0437\u0435\u043b\u044c\u0435 \u0438\u0441\u0446\u0435\u043b\u0435\u043d\u0438\u044f",
    tab: [[1, 92]],
    potion: "strong_healing"
  },
  "1112-harming": {
    id: "1112-harming",
    type: "minecraft:splash_potion",
    name: "\u0412\u0437\u0440\u044b\u0432\u043d\u043e\u0435 \u0437\u0435\u043b\u044c\u0435 \u0432\u0440\u0435\u0434\u0430",
    tab: [[1, 92]],
    potion: "harming"
  },
  "1112-strong_harming": {
    id: "1112-strong_harming",
    type: "minecraft:splash_potion",
    name: "\u0412\u0437\u0440\u044b\u0432\u043d\u043e\u0435 \u0437\u0435\u043b\u044c\u0435 \u0432\u0440\u0435\u0434\u0430",
    tab: [[1, 92]],
    potion: "strong_harming"
  },
  "1112-poison": {
    id: "1112-poison",
    type: "minecraft:splash_potion",
    name: "\u0412\u0437\u0440\u044b\u0432\u043d\u043e\u0435 \u0437\u0435\u043b\u044c\u0435 \u043e\u0442\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f",
    tab: [[1, 92]],
    potion: "poison"
  },
  "1112-long_poison": {
    id: "1112-long_poison",
    type: "minecraft:splash_potion",
    name: "\u0412\u0437\u0440\u044b\u0432\u043d\u043e\u0435 \u0437\u0435\u043b\u044c\u0435 \u043e\u0442\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f",
    tab: [[1, 92]],
    potion: "long_poison"
  },
  "1112-strong_poison": {
    id: "1112-strong_poison",
    type: "minecraft:splash_potion",
    name: "\u0412\u0437\u0440\u044b\u0432\u043d\u043e\u0435 \u0437\u0435\u043b\u044c\u0435 \u043e\u0442\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f",
    tab: [[1, 92]],
    potion: "strong_poison"
  },
  "1112-regeneration": {
    id: "1112-regeneration",
    type: "minecraft:splash_potion",
    name: "\u0412\u0437\u0440\u044b\u0432\u043d\u043e\u0435 \u0437\u0435\u043b\u044c\u0435 \u0440\u0435\u0433\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u0438",
    tab: [[1, 92]],
    potion: "regeneration"
  },
  "1112-long_regeneration": {
    id: "1112-long_regeneration",
    type: "minecraft:splash_potion",
    name: "\u0412\u0437\u0440\u044b\u0432\u043d\u043e\u0435 \u0437\u0435\u043b\u044c\u0435 \u0440\u0435\u0433\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u0438",
    tab: [[1, 92]],
    potion: "long_regeneration"
  },
  "1112-strong_regeneration": {
    id: "1112-strong_regeneration",
    type: "minecraft:splash_potion",
    name: "\u0412\u0437\u0440\u044b\u0432\u043d\u043e\u0435 \u0437\u0435\u043b\u044c\u0435 \u0440\u0435\u0433\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u0438",
    tab: [[1, 92]],
    potion: "strong_regeneration"
  },
  "1112-strength": {
    id: "1112-strength",
    type: "minecraft:splash_potion",
    name: "\u0412\u0437\u0440\u044b\u0432\u043d\u043e\u0435 \u0437\u0435\u043b\u044c\u0435 \u0441\u0438\u043b\u044b",
    tab: [[1, 92]],
    potion: "strength"
  },
  "1112-long_strength": {
    id: "1112-long_strength",
    type: "minecraft:splash_potion",
    name: "\u0412\u0437\u0440\u044b\u0432\u043d\u043e\u0435 \u0437\u0435\u043b\u044c\u0435 \u0441\u0438\u043b\u044b",
    tab: [[1, 92]],
    potion: "long_strength"
  },
  "1112-strong_strength": {
    id: "1112-strong_strength",
    type: "minecraft:splash_potion",
    name: "\u0412\u0437\u0440\u044b\u0432\u043d\u043e\u0435 \u0437\u0435\u043b\u044c\u0435 \u0441\u0438\u043b\u044b",
    tab: [[1, 92]],
    potion: "strong_strength"
  },
  "1112-weakness": {
    id: "1112-weakness",
    type: "minecraft:splash_potion",
    name: "\u0412\u0437\u0440\u044b\u0432\u043d\u043e\u0435 \u0437\u0435\u043b\u044c\u0435 \u0441\u043b\u0430\u0431\u043e\u0441\u0442\u0438",
    tab: [[1, 92]],
    potion: "weakness"
  },
  "1112-long_weakness": {
    id: "1112-long_weakness",
    type: "minecraft:splash_potion",
    name: "\u0412\u0437\u0440\u044b\u0432\u043d\u043e\u0435 \u0437\u0435\u043b\u044c\u0435 \u0441\u043b\u0430\u0431\u043e\u0441\u0442\u0438",
    tab: [[1, 92]],
    potion: "long_weakness"
  },
  "1112-luck": {
    id: "1112-luck",
    type: "minecraft:splash_potion",
    name: "\u0412\u0437\u0440\u044b\u0432\u043d\u043e\u0435 \u0437\u0435\u043b\u044c\u0435 \u0432\u0435\u0437\u0435\u043d\u0438\u044f",
    tab: [[1, 92]],
    potion: "luck"
  },
  "1112-slow_falling": {
    id: "1112-slow_falling",
    type: "minecraft:splash_potion",
    name: "\u0412\u0437\u0440\u044b\u0432\u043d\u043e\u0435 \u0437\u0435\u043b\u044c\u0435 \u043f\u043b\u0430\u0432\u043d\u043e\u0433\u043e \u043f\u0430\u0434\u0435\u043d\u0438\u044f",
    tab: [[1, 92]],
    potion: "slow_falling"
  },
  "1112-long_slow_falling": {
    id: "1112-long_slow_falling",
    type: "minecraft:splash_potion",
    name: "\u0412\u0437\u0440\u044b\u0432\u043d\u043e\u0435 \u0437\u0435\u043b\u044c\u0435 \u043f\u043b\u0430\u0432\u043d\u043e\u0433\u043e \u043f\u0430\u0434\u0435\u043d\u0438\u044f",
    tab: [[1, 92]],
    potion: "long_slow_falling"
  },
  1113: {
    id: "1113",
    type: "minecraft:spectral_arrow",
    name: "\u0421\u043f\u0435\u043a\u0442\u0440\u0430\u043b\u044c\u043d\u0430\u044f \u0441\u0442\u0440\u0435\u043b\u0430",
    tab: [[3, 54]]
  },
  "1114-water": {
    id: "1114-water",
    type: "minecraft:tipped_arrow",
    name: "\u0412\u0437\u0440\u044b\u0432\u043d\u0430\u044f \u0441\u0442\u0440\u0435\u043b\u0430",
    tab: [[3, 55]],
    potion: "water"
  },
  "1114-mundane": {
    id: "1114-mundane",
    type: "minecraft:tipped_arrow",
    name: "\u041e\u0431\u0440\u0430\u0431\u043e\u0442\u0430\u043d\u043d\u0430\u044f \u0441\u0442\u0440\u0435\u043b\u0430",
    tab: [[3, 55]],
    potion: "mundane"
  },
  "1114-thick": {
    id: "1114-thick",
    type: "minecraft:tipped_arrow",
    name: "\u041e\u0431\u0440\u0430\u0431\u043e\u0442\u0430\u043d\u043d\u0430\u044f \u0441\u0442\u0440\u0435\u043b\u0430",
    tab: [[3, 55]],
    potion: "thick"
  },
  "1114-awkward": {
    id: "1114-awkward",
    type: "minecraft:tipped_arrow",
    name: "\u041e\u0431\u0440\u0430\u0431\u043e\u0442\u0430\u043d\u043d\u0430\u044f \u0441\u0442\u0440\u0435\u043b\u0430",
    tab: [[3, 55]],
    potion: "awkward"
  },
  "1114-night_vision": {
    id: "1114-night_vision",
    type: "minecraft:tipped_arrow",
    name: "\u0421\u0442\u0440\u0435\u043b\u0430 \u043d\u043e\u0447\u043d\u043e\u0433\u043e \u0437\u0440\u0435\u043d\u0438\u044f",
    tab: [[3, 55]],
    potion: "night_vision"
  },
  "1114-long_night_vision": {
    id: "1114-long_night_vision",
    type: "minecraft:tipped_arrow",
    name: "\u0421\u0442\u0440\u0435\u043b\u0430 \u043d\u043e\u0447\u043d\u043e\u0433\u043e \u0437\u0440\u0435\u043d\u0438\u044f",
    tab: [[3, 55]],
    potion: "long_night_vision"
  },
  "1114-invisibility": {
    id: "1114-invisibility",
    type: "minecraft:tipped_arrow",
    name: "\u0421\u0442\u0440\u0435\u043b\u0430 \u043d\u0435\u0432\u0438\u0434\u0438\u043c\u043e\u0441\u0442\u0438",
    tab: [[3, 55]],
    potion: "invisibility"
  },
  "1114-long_invisibility": {
    id: "1114-long_invisibility",
    type: "minecraft:tipped_arrow",
    name: "\u0421\u0442\u0440\u0435\u043b\u0430 \u043d\u0435\u0432\u0438\u0434\u0438\u043c\u043e\u0441\u0442\u0438",
    tab: [[3, 55]],
    potion: "long_invisibility"
  },
  "1114-leaping": {
    id: "1114-leaping",
    type: "minecraft:tipped_arrow",
    name: "\u0421\u0442\u0440\u0435\u043b\u0430 \u043f\u0440\u044b\u0433\u0443\u0447\u0435\u0441\u0442\u0438",
    tab: [[3, 55]],
    potion: "leaping"
  },
  "1114-long_leaping": {
    id: "1114-long_leaping",
    type: "minecraft:tipped_arrow",
    name: "\u0421\u0442\u0440\u0435\u043b\u0430 \u043f\u0440\u044b\u0433\u0443\u0447\u0435\u0441\u0442\u0438",
    tab: [[3, 55]],
    potion: "long_leaping"
  },
  "1114-strong_leaping": {
    id: "1114-strong_leaping",
    type: "minecraft:tipped_arrow",
    name: "\u0421\u0442\u0440\u0435\u043b\u0430 \u043f\u0440\u044b\u0433\u0443\u0447\u0435\u0441\u0442\u0438",
    tab: [[3, 55]],
    potion: "strong_leaping"
  },
  "1114-fire_resistance": {
    id: "1114-fire_resistance",
    type: "minecraft:tipped_arrow",
    name: "\u0421\u0442\u0440\u0435\u043b\u0430 \u043e\u0433\u043d\u0435\u0441\u0442\u043e\u0439\u043a\u043e\u0441\u0442\u0438",
    tab: [[3, 55]],
    potion: "fire_resistance"
  },
  "1114-long_fire_resistance": {
    id: "1114-long_fire_resistance",
    type: "minecraft:tipped_arrow",
    name: "\u0421\u0442\u0440\u0435\u043b\u0430 \u043e\u0433\u043d\u0435\u0441\u0442\u043e\u0439\u043a\u043e\u0441\u0442\u0438",
    tab: [[3, 55]],
    potion: "long_fire_resistance"
  },
  "1114-swiftness": {
    id: "1114-swiftness",
    type: "minecraft:tipped_arrow",
    name: "\u0421\u0442\u0440\u0435\u043b\u0430 \u0441\u0442\u0440\u0435\u043c\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0438",
    tab: [[3,
      55]],
    potion: "swiftness"
  },
  "1114-long_swiftness": {
    id: "1114-long_swiftness",
    type: "minecraft:tipped_arrow",
    name: "\u0421\u0442\u0440\u0435\u043b\u0430 \u0441\u0442\u0440\u0435\u043c\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0438",
    tab: [[3, 55]],
    potion: "long_swiftness"
  },
  "1114-strong_swiftness": {
    id: "1114-strong_swiftness",
    type: "minecraft:tipped_arrow",
    name: "\u0421\u0442\u0440\u0435\u043b\u0430 \u0441\u0442\u0440\u0435\u043c\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0438",
    tab: [[3,
      55]],
    potion: "strong_swiftness"
  },
  "1114-slowness": {
    id: "1114-slowness",
    type: "minecraft:tipped_arrow",
    name: "\u0421\u0442\u0440\u0435\u043b\u0430 \u0437\u0430\u043c\u0435\u0434\u043b\u0435\u043d\u0438\u044f",
    tab: [[3, 55]],
    potion: "slowness"
  },
  "1114-long_slowness": {
    id: "1114-long_slowness",
    type: "minecraft:tipped_arrow",
    name: "\u0421\u0442\u0440\u0435\u043b\u0430 \u0437\u0430\u043c\u0435\u0434\u043b\u0435\u043d\u0438\u044f",
    tab: [[3, 55]],
    potion: "long_slowness"
  },
  "1114-strong_slowness": {
    id: "1114-strong_slowness",
    type: "minecraft:tipped_arrow",
    name: "\u0421\u0442\u0440\u0435\u043b\u0430 \u0437\u0430\u043c\u0435\u0434\u043b\u0435\u043d\u0438\u044f",
    tab: [[3, 55]],
    potion: "strong_slowness"
  },
  "1114-turtle_master": {
    id: "1114-turtle_master",
    type: "minecraft:tipped_arrow",
    name: "\u0421\u0442\u0440\u0435\u043b\u0430 \u0447\u0435\u0440\u0435\u043f\u0430\u0448\u044c\u0435\u0439 \u043c\u043e\u0449\u0438",
    tab: [[3, 55]],
    potion: "turtle_master"
  },
  "1114-long_turtle_master": {
    id: "1114-long_turtle_master",
    type: "minecraft:tipped_arrow",
    name: "\u0421\u0442\u0440\u0435\u043b\u0430 \u0447\u0435\u0440\u0435\u043f\u0430\u0448\u044c\u0435\u0439 \u043c\u043e\u0449\u0438",
    tab: [[3, 55]],
    potion: "long_turtle_master"
  },
  "1114-strong_turtle_master": {
    id: "1114-strong_turtle_master",
    type: "minecraft:tipped_arrow",
    name: "\u0421\u0442\u0440\u0435\u043b\u0430 \u0447\u0435\u0440\u0435\u043f\u0430\u0448\u044c\u0435\u0439 \u043c\u043e\u0449\u0438",
    tab: [[3, 55]],
    potion: "strong_turtle_master"
  },
  "1114-water_breathing": {
    id: "1114-water_breathing",
    type: "minecraft:tipped_arrow",
    name: "\u0421\u0442\u0440\u0435\u043b\u0430 \u0432\u043e\u0434\u043d\u043e\u0433\u043e \u0434\u044b\u0445\u0430\u043d\u0438\u044f",
    tab: [[3, 55]],
    potion: "water_breathing"
  },
  "1114-long_water_breathing": {
    id: "1114-long_water_breathing",
    type: "minecraft:tipped_arrow",
    name: "\u0421\u0442\u0440\u0435\u043b\u0430 \u0432\u043e\u0434\u043d\u043e\u0433\u043e \u0434\u044b\u0445\u0430\u043d\u0438\u044f",
    tab: [[3, 55]],
    potion: "long_water_breathing"
  },
  "1114-healing": {
    id: "1114-healing",
    type: "minecraft:tipped_arrow",
    name: "\u0421\u0442\u0440\u0435\u043b\u0430 \u0438\u0441\u0446\u0435\u043b\u0435\u043d\u0438\u044f",
    tab: [[3, 55]],
    potion: "healing"
  },
  "1114-strong_healing": {
    id: "1114-strong_healing",
    type: "minecraft:tipped_arrow",
    name: "\u0421\u0442\u0440\u0435\u043b\u0430 \u0438\u0441\u0446\u0435\u043b\u0435\u043d\u0438\u044f",
    tab: [[3, 55]],
    potion: "strong_healing"
  },
  "1114-harming": {
    id: "1114-harming",
    type: "minecraft:tipped_arrow",
    name: "\u0421\u0442\u0440\u0435\u043b\u0430 \u0432\u0440\u0435\u0434\u0430",
    tab: [[3, 55]],
    potion: "harming"
  },
  "1114-strong_harming": {
    id: "1114-strong_harming",
    type: "minecraft:tipped_arrow",
    name: "\u0421\u0442\u0440\u0435\u043b\u0430 \u0432\u0440\u0435\u0434\u0430",
    tab: [[3, 55]],
    potion: "strong_harming"
  },
  "1114-poison": {
    id: "1114-poison",
    type: "minecraft:tipped_arrow",
    name: "\u0421\u0442\u0440\u0435\u043b\u0430 \u043e\u0442\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f",
    tab: [[3, 55]],
    potion: "poison"
  },
  "1114-long_poison": {
    id: "1114-long_poison",
    type: "minecraft:tipped_arrow",
    name: "\u0421\u0442\u0440\u0435\u043b\u0430 \u043e\u0442\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f",
    tab: [[3, 55]],
    potion: "long_poison"
  },
  "1114-strong_poison": {
    id: "1114-strong_poison",
    type: "minecraft:tipped_arrow",
    name: "\u0421\u0442\u0440\u0435\u043b\u0430 \u043e\u0442\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f",
    tab: [[3, 55]],
    potion: "strong_poison"
  },
  "1114-regeneration": {
    id: "1114-regeneration",
    type: "minecraft:tipped_arrow",
    name: "\u0421\u0442\u0440\u0435\u043b\u0430 \u0440\u0435\u0433\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u0438",
    tab: [[3, 55]],
    potion: "regeneration"
  },
  "1114-long_regeneration": {
    id: "1114-long_regeneration",
    type: "minecraft:tipped_arrow",
    name: "\u0421\u0442\u0440\u0435\u043b\u0430 \u0440\u0435\u0433\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u0438",
    tab: [[3, 55]],
    potion: "long_regeneration"
  },
  "1114-strong_regeneration": {
    id: "1114-strong_regeneration",
    type: "minecraft:tipped_arrow",
    name: "\u0421\u0442\u0440\u0435\u043b\u0430 \u0440\u0435\u0433\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u0438",
    tab: [[3, 55]],
    potion: "strong_regeneration"
  },
  "1114-strength": {
    id: "1114-strength",
    type: "minecraft:tipped_arrow",
    name: "\u0421\u0442\u0440\u0435\u043b\u0430 \u0441\u0438\u043b\u044b",
    tab: [[3, 55]],
    potion: "strength"
  },
  "1114-long_strength": {
    id: "1114-long_strength", type: "minecraft:tipped_arrow",
    name: "\u0421\u0442\u0440\u0435\u043b\u0430 \u0441\u0438\u043b\u044b", tab: [[3, 55]], potion: "long_strength"
  },
  "1114-strong_strength": {
    id: "1114-strong_strength",
    type: "minecraft:tipped_arrow",
    name: "\u0421\u0442\u0440\u0435\u043b\u0430 \u0441\u0438\u043b\u044b",
    tab: [[3, 55]],
    potion: "strong_strength"
  },
  "1114-weakness": {
    id: "1114-weakness",
    type: "minecraft:tipped_arrow",
    name: "\u0421\u0442\u0440\u0435\u043b\u0430 \u0441\u043b\u0430\u0431\u043e\u0441\u0442\u0438",
    tab: [[3, 55]],
    potion: "weakness"
  },
  "1114-long_weakness": {
    id: "1114-long_weakness",
    type: "minecraft:tipped_arrow",
    name: "\u0421\u0442\u0440\u0435\u043b\u0430 \u0441\u043b\u0430\u0431\u043e\u0441\u0442\u0438",
    tab: [[3, 55]],
    potion: "long_weakness"
  },
  "1114-luck": {
    id: "1114-luck",
    type: "minecraft:tipped_arrow",
    name: "\u0421\u0442\u0440\u0435\u043b\u0430 \u0432\u0435\u0437\u0435\u043d\u0438\u044f",
    tab: [[3, 55]],
    potion: "luck"
  },
  "1114-slow_falling": {
    id: "1114-slow_falling",
    type: "minecraft:tipped_arrow",
    name: "\u0421\u0442\u0440\u0435\u043b\u0430 \u043f\u043b\u0430\u0432\u043d\u043e\u0433\u043e \u043f\u0430\u0434\u0435\u043d\u0438\u044f",
    tab: [[3, 55]],
    potion: "slow_falling"
  },
  "1114-long_slow_falling": {
    id: "1114-long_slow_falling",
    type: "minecraft:tipped_arrow",
    name: "\u0421\u0442\u0440\u0435\u043b\u0430 \u043f\u043b\u0430\u0432\u043d\u043e\u0433\u043e \u043f\u0430\u0434\u0435\u043d\u0438\u044f",
    tab: [[3, 55]],
    potion: "long_slow_falling"
  },
  "1115-water": {
    id: "1115-water",
    type: "minecraft:lingering_potion",
    name: "\u0411\u0443\u0442\u044b\u043b\u043e\u0447\u043a\u0430 \u0441 \u0432\u043e\u0434\u044f\u043d\u043e\u0439 \u0432\u0437\u0432\u0435\u0441\u044c\u044e",
    tab: [[1, 134]],
    potion: "water"
  },
  "1115-mundane": {
    id: "1115-mundane",
    type: "minecraft:lingering_potion",
    name: "\u0417\u0430\u0443\u0440\u044f\u0434\u043d\u043e\u0435 \u0442\u0443\u043c\u0430\u043d\u043d\u043e\u0435 \u0437\u0435\u043b\u044c\u0435",
    tab: [[1, 134]],
    potion: "mundane"
  },
  "1115-thick": {
    id: "1115-thick",
    type: "minecraft:lingering_potion",
    name: "\u0413\u0443\u0441\u0442\u043e\u0435 \u0442\u0443\u043c\u0430\u043d\u043d\u043e\u0435 \u0437\u0435\u043b\u044c\u0435",
    tab: [[1, 134]],
    potion: "thick"
  },
  "1115-awkward": {
    id: "1115-awkward",
    type: "minecraft:lingering_potion",
    name: "\u041c\u0443\u0442\u043d\u043e\u0435 \u0442\u0443\u043c\u0430\u043d\u043d\u043e\u0435 \u0437\u0435\u043b\u044c\u0435",
    tab: [[1, 134]],
    potion: "awkward"
  },
  "1115-night_vision": {
    id: "1115-night_vision",
    type: "minecraft:lingering_potion",
    name: "\u0422\u0443\u043c\u0430\u043d\u043d\u043e\u0435 \u0437\u0435\u043b\u044c\u0435 \u043d\u043e\u0447\u043d\u043e\u0433\u043e \u0437\u0440\u0435\u043d\u0438\u044f",
    tab: [[1, 134]],
    potion: "night_vision"
  },
  "1115-long_night_vision": {
    id: "1115-long_night_vision",
    type: "minecraft:lingering_potion",
    name: "\u0422\u0443\u043c\u0430\u043d\u043d\u043e\u0435 \u0437\u0435\u043b\u044c\u0435 \u043d\u043e\u0447\u043d\u043e\u0433\u043e \u0437\u0440\u0435\u043d\u0438\u044f",
    tab: [[1, 134]],
    potion: "long_night_vision"
  },
  "1115-invisibility": {
    id: "1115-invisibility",
    type: "minecraft:lingering_potion",
    name: "\u0422\u0443\u043c\u0430\u043d\u043d\u043e\u0435 \u0437\u0435\u043b\u044c\u0435 \u043d\u0435\u0432\u0438\u0434\u0438\u043c\u043e\u0441\u0442\u0438",
    tab: [[1, 134]],
    potion: "invisibility"
  },
  "1115-long_invisibility": {
    id: "1115-long_invisibility",
    type: "minecraft:lingering_potion",
    name: "\u0422\u0443\u043c\u0430\u043d\u043d\u043e\u0435 \u0437\u0435\u043b\u044c\u0435 \u043d\u0435\u0432\u0438\u0434\u0438\u043c\u043e\u0441\u0442\u0438",
    tab: [[1, 134]],
    potion: "long_invisibility"
  },
  "1115-leaping": {
    id: "1115-leaping",
    type: "minecraft:lingering_potion",
    name: "\u0422\u0443\u043c\u0430\u043d\u043d\u043e\u0435 \u0437\u0435\u043b\u044c\u0435 \u043f\u0440\u044b\u0433\u0443\u0447\u0435\u0441\u0442\u0438",
    tab: [[1,
      134]],
    potion: "leaping"
  },
  "1115-long_leaping": {
    id: "1115-long_leaping",
    type: "minecraft:lingering_potion",
    name: "\u0422\u0443\u043c\u0430\u043d\u043d\u043e\u0435 \u0437\u0435\u043b\u044c\u0435 \u043f\u0440\u044b\u0433\u0443\u0447\u0435\u0441\u0442\u0438",
    tab: [[1, 134]],
    potion: "long_leaping"
  },
  "1115-strong_leaping": {
    id: "1115-strong_leaping",
    type: "minecraft:lingering_potion",
    name: "\u0422\u0443\u043c\u0430\u043d\u043d\u043e\u0435 \u0437\u0435\u043b\u044c\u0435 \u043f\u0440\u044b\u0433\u0443\u0447\u0435\u0441\u0442\u0438",
    tab: [[1, 134]],
    potion: "strong_leaping"
  },
  "1115-fire_resistance": {
    id: "1115-fire_resistance",
    type: "minecraft:lingering_potion",
    name: "\u0422\u0443\u043c\u0430\u043d\u043d\u043e\u0435 \u0437\u0435\u043b\u044c\u0435 \u043e\u0433\u043d\u0435\u0441\u0442\u043e\u0439\u043a\u043e\u0441\u0442\u0438",
    tab: [[1, 134]],
    potion: "fire_resistance"
  },
  "1115-long_fire_resistance": {
    id: "1115-long_fire_resistance",
    type: "minecraft:lingering_potion",
    name: "\u0422\u0443\u043c\u0430\u043d\u043d\u043e\u0435 \u0437\u0435\u043b\u044c\u0435 \u043e\u0433\u043d\u0435\u0441\u0442\u043e\u0439\u043a\u043e\u0441\u0442\u0438",
    tab: [[1, 134]],
    potion: "long_fire_resistance"
  },
  "1115-swiftness": {
    id: "1115-swiftness",
    type: "minecraft:lingering_potion",
    name: "\u0422\u0443\u043c\u0430\u043d\u043d\u043e\u0435 \u0437\u0435\u043b\u044c\u0435 \u0441\u0442\u0440\u0435\u043c\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0438",
    tab: [[1, 134]],
    potion: "swiftness"
  },
  "1115-long_swiftness": {
    id: "1115-long_swiftness",
    type: "minecraft:lingering_potion",
    name: "\u0422\u0443\u043c\u0430\u043d\u043d\u043e\u0435 \u0437\u0435\u043b\u044c\u0435 \u0441\u0442\u0440\u0435\u043c\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0438",
    tab: [[1, 134]],
    potion: "long_swiftness"
  },
  "1115-strong_swiftness": {
    id: "1115-strong_swiftness",
    type: "minecraft:lingering_potion",
    name: "\u0422\u0443\u043c\u0430\u043d\u043d\u043e\u0435 \u0437\u0435\u043b\u044c\u0435 \u0441\u0442\u0440\u0435\u043c\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0438",
    tab: [[1, 134]],
    potion: "strong_swiftness"
  },
  "1115-slowness": {
    id: "1115-slowness",
    type: "minecraft:lingering_potion",
    name: "\u0422\u0443\u043c\u0430\u043d\u043d\u043e\u0435 \u0437\u0435\u043b\u044c\u0435 \u0437\u0430\u043c\u0435\u0434\u043b\u0435\u043d\u0438\u044f",
    tab: [[1, 134]],
    potion: "slowness"
  },
  "1115-long_slowness": {
    id: "1115-long_slowness",
    type: "minecraft:lingering_potion",
    name: "\u0422\u0443\u043c\u0430\u043d\u043d\u043e\u0435 \u0437\u0435\u043b\u044c\u0435 \u0437\u0430\u043c\u0435\u0434\u043b\u0435\u043d\u0438\u044f",
    tab: [[1, 134]],
    potion: "long_slowness"
  },
  "1115-strong_slowness": {
    id: "1115-strong_slowness",
    type: "minecraft:lingering_potion",
    name: "\u0422\u0443\u043c\u0430\u043d\u043d\u043e\u0435 \u0437\u0435\u043b\u044c\u0435 \u0437\u0430\u043c\u0435\u0434\u043b\u0435\u043d\u0438\u044f",
    tab: [[1, 134]],
    potion: "strong_slowness"
  },
  "1115-turtle_master": {
    id: "1115-turtle_master",
    type: "minecraft:lingering_potion",
    name: "\u0422\u0443\u043c\u0430\u043d\u043d\u043e\u0435 \u0437\u0435\u043b\u044c\u0435 \u0447\u0435\u0440\u0435\u043f\u0430\u0448\u044c\u0435\u0439 \u043c\u043e\u0449\u0438",
    tab: [[1, 134]],
    potion: "turtle_master"
  },
  "1115-long_turtle_master": {
    id: "1115-long_turtle_master",
    type: "minecraft:lingering_potion",
    name: "\u0422\u0443\u043c\u0430\u043d\u043d\u043e\u0435 \u0437\u0435\u043b\u044c\u0435 \u0447\u0435\u0440\u0435\u043f\u0430\u0448\u044c\u0435\u0439 \u043c\u043e\u0449\u0438",
    tab: [[1, 134]],
    potion: "long_turtle_master"
  },
  "1115-strong_turtle_master": {
    id: "1115-strong_turtle_master",
    type: "minecraft:lingering_potion",
    name: "\u0422\u0443\u043c\u0430\u043d\u043d\u043e\u0435 \u0437\u0435\u043b\u044c\u0435 \u0447\u0435\u0440\u0435\u043f\u0430\u0448\u044c\u0435\u0439 \u043c\u043e\u0449\u0438",
    tab: [[1, 134]],
    potion: "strong_turtle_master"
  },
  "1115-water_breathing": {
    id: "1115-water_breathing",
    type: "minecraft:lingering_potion",
    name: "\u0422\u0443\u043c\u0430\u043d\u043d\u043e\u0435 \u0437\u0435\u043b\u044c\u0435 \u0432\u043e\u0434\u043d\u043e\u0433\u043e \u0434\u044b\u0445\u0430\u043d\u0438\u044f",
    tab: [[1, 134]],
    potion: "water_breathing"
  },
  "1115-long_water_breathing": {
    id: "1115-long_water_breathing",
    type: "minecraft:lingering_potion",
    name: "\u0422\u0443\u043c\u0430\u043d\u043d\u043e\u0435 \u0437\u0435\u043b\u044c\u0435 \u0432\u043e\u0434\u043d\u043e\u0433\u043e \u0434\u044b\u0445\u0430\u043d\u0438\u044f",
    tab: [[1, 134]],
    potion: "long_water_breathing"
  },
  "1115-healing": {
    id: "1115-healing",
    type: "minecraft:lingering_potion",
    name: "\u0422\u0443\u043c\u0430\u043d\u043d\u043e\u0435 \u0437\u0435\u043b\u044c\u0435 \u0438\u0441\u0446\u0435\u043b\u0435\u043d\u0438\u044f",
    tab: [[1, 134]],
    potion: "healing"
  },
  "1115-strong_healing": {
    id: "1115-strong_healing",
    type: "minecraft:lingering_potion",
    name: "\u0422\u0443\u043c\u0430\u043d\u043d\u043e\u0435 \u0437\u0435\u043b\u044c\u0435 \u0438\u0441\u0446\u0435\u043b\u0435\u043d\u0438\u044f",
    tab: [[1, 134]],
    potion: "strong_healing"
  },
  "1115-harming": {
    id: "1115-harming",
    type: "minecraft:lingering_potion",
    name: "\u0422\u0443\u043c\u0430\u043d\u043d\u043e\u0435 \u0437\u0435\u043b\u044c\u0435 \u0432\u0440\u0435\u0434\u0430",
    tab: [[1, 134]],
    potion: "harming"
  },
  "1115-strong_harming": {
    id: "1115-strong_harming",
    type: "minecraft:lingering_potion",
    name: "\u0422\u0443\u043c\u0430\u043d\u043d\u043e\u0435 \u0437\u0435\u043b\u044c\u0435 \u0432\u0440\u0435\u0434\u0430",
    tab: [[1, 134]],
    potion: "strong_harming"
  },
  "1115-poison": {
    id: "1115-poison",
    type: "minecraft:lingering_potion",
    name: "\u0422\u0443\u043c\u0430\u043d\u043d\u043e\u0435 \u0437\u0435\u043b\u044c\u0435 \u043e\u0442\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f",
    tab: [[1, 134]],
    potion: "poison"
  },
  "1115-long_poison": {
    id: "1115-long_poison",
    type: "minecraft:lingering_potion",
    name: "\u0422\u0443\u043c\u0430\u043d\u043d\u043e\u0435 \u0437\u0435\u043b\u044c\u0435 \u043e\u0442\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f",
    tab: [[1, 134]],
    potion: "long_poison"
  },
  "1115-strong_poison": {
    id: "1115-strong_poison",
    type: "minecraft:lingering_potion",
    name: "\u0422\u0443\u043c\u0430\u043d\u043d\u043e\u0435 \u0437\u0435\u043b\u044c\u0435 \u043e\u0442\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f",
    tab: [[1, 134]],
    potion: "strong_poison"
  },
  "1115-regeneration": {
    id: "1115-regeneration",
    type: "minecraft:lingering_potion",
    name: "\u0422\u0443\u043c\u0430\u043d\u043d\u043e\u0435 \u0437\u0435\u043b\u044c\u0435 \u0440\u0435\u0433\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u0438",
    tab: [[1, 134]],
    potion: "regeneration"
  },
  "1115-long_regeneration": {
    id: "1115-long_regeneration",
    type: "minecraft:lingering_potion",
    name: "\u0422\u0443\u043c\u0430\u043d\u043d\u043e\u0435 \u0437\u0435\u043b\u044c\u0435 \u0440\u0435\u0433\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u0438",
    tab: [[1, 134]],
    potion: "long_regeneration"
  },
  "1115-strong_regeneration": {
    id: "1115-strong_regeneration",
    type: "minecraft:lingering_potion",
    name: "\u0422\u0443\u043c\u0430\u043d\u043d\u043e\u0435 \u0437\u0435\u043b\u044c\u0435 \u0440\u0435\u0433\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u0438",
    tab: [[1, 134]],
    potion: "strong_regeneration"
  },
  "1115-strength": {
    id: "1115-strength",
    type: "minecraft:lingering_potion",
    name: "\u0422\u0443\u043c\u0430\u043d\u043d\u043e\u0435 \u0437\u0435\u043b\u044c\u0435 \u0441\u0438\u043b\u044b",
    tab: [[1, 134]],
    potion: "strength"
  },
  "1115-long_strength": {
    id: "1115-long_strength",
    type: "minecraft:lingering_potion",
    name: "\u0422\u0443\u043c\u0430\u043d\u043d\u043e\u0435 \u0437\u0435\u043b\u044c\u0435 \u0441\u0438\u043b\u044b",
    tab: [[1, 134]],
    potion: "long_strength"
  },
  "1115-strong_strength": {
    id: "1115-strong_strength",
    type: "minecraft:lingering_potion",
    name: "\u0422\u0443\u043c\u0430\u043d\u043d\u043e\u0435 \u0437\u0435\u043b\u044c\u0435 \u0441\u0438\u043b\u044b",
    tab: [[1, 134]],
    potion: "strong_strength"
  },
  "1115-weakness": {
    id: "1115-weakness",
    type: "minecraft:lingering_potion",
    name: "\u0422\u0443\u043c\u0430\u043d\u043d\u043e\u0435 \u0437\u0435\u043b\u044c\u0435 \u0441\u043b\u0430\u0431\u043e\u0441\u0442\u0438",
    tab: [[1, 134]],
    potion: "weakness"
  },
  "1115-long_weakness": {
    id: "1115-long_weakness",
    type: "minecraft:lingering_potion",
    name: "\u0422\u0443\u043c\u0430\u043d\u043d\u043e\u0435 \u0437\u0435\u043b\u044c\u0435 \u0441\u043b\u0430\u0431\u043e\u0441\u0442\u0438",
    tab: [[1, 134]],
    potion: "long_weakness"
  },
  "1115-luck": {
    id: "1115-luck",
    type: "minecraft:lingering_potion",
    name: "\u0422\u0443\u043c\u0430\u043d\u043d\u043e\u0435 \u0437\u0435\u043b\u044c\u0435 \u0432\u0435\u0437\u0435\u043d\u0438\u044f",
    tab: [[1, 134]],
    potion: "luck"
  },
  "1115-slow_falling": {
    id: "1115-slow_falling",
    type: "minecraft:lingering_potion",
    name: "\u0422\u0443\u043c\u0430\u043d\u043d\u043e\u0435 \u0437\u0435\u043b\u044c\u0435 \u043f\u043b\u0430\u0432\u043d\u043e\u0433\u043e \u043f\u0430\u0434\u0435\u043d\u0438\u044f",
    tab: [[1, 134]],
    potion: "slow_falling"
  },
  "1115-long_slow_falling": {
    id: "1115-long_slow_falling",
    type: "minecraft:lingering_potion",
    name: "\u0422\u0443\u043c\u0430\u043d\u043d\u043e\u0435 \u0437\u0435\u043b\u044c\u0435 \u043f\u043b\u0430\u0432\u043d\u043e\u0433\u043e \u043f\u0430\u0434\u0435\u043d\u0438\u044f",
    tab: [[1, 134]],
    potion: "long_slow_falling"
  },
  1116: {id: "1116", type: "minecraft:shield", name: "\u0429\u0438\u0442", tab: [[3, 13]]},
  1117: {
    id: "1117",
    type: "minecraft:totem_of_undying",
    name: "\u0422\u043e\u0442\u0435\u043c \u0431\u0435\u0441\u0441\u043c\u0435\u0440\u0442\u0438\u044f",
    tab: [[3, 43]]
  },
  1118: {
    id: "1118",
    type: "minecraft:shulker_shell",
    name: "\u041f\u0430\u043d\u0446\u0438\u0440\u044c \u0448\u0430\u043b\u043a\u0435\u0440\u0430",
    tab: [[9, 44]]
  },
  1119: {
    id: "1119",
    type: "minecraft:iron_nugget",
    name: "\u041a\u0443\u0441\u043e\u0447\u0435\u043a \u0436\u0435\u043b\u0435\u0437\u0430",
    tab: [[9, 11]]
  },
  1120: {
    id: "1120",
    type: "minecraft:knowledge_book",
    name: "\u041a\u043d\u0438\u0433\u0430 \u0437\u043d\u0430\u043d\u0438\u0439"
  },
  1121: {
    id: "1121",
    type: "minecraft:debug_stick",
    name: "\u041f\u0430\u043b\u043e\u0447\u043a\u0430 \u043e\u0442\u043b\u0430\u0434\u043a\u0438"
  },
  1122: {
    id: "1122",
    type: "minecraft:music_disc_13",
    name: "\u041f\u043b\u0430\u0441\u0442\u0438\u043d\u043a\u0430",
    tab: [[2, 93]]
  },
  1123: {
    id: "1123",
    type: "minecraft:music_disc_cat",
    name: "\u041f\u043b\u0430\u0441\u0442\u0438\u043d\u043a\u0430",
    tab: [[2, 94]]
  },
  1124: {
    id: "1124",
    type: "minecraft:music_disc_blocks",
    name: "\u041f\u043b\u0430\u0441\u0442\u0438\u043d\u043a\u0430",
    tab: [[2, 95]]
  },
  1125: {
    id: "1125",
    type: "minecraft:music_disc_chirp",
    name: "\u041f\u043b\u0430\u0441\u0442\u0438\u043d\u043a\u0430",
    tab: [[2, 96]]
  },
  1126: {
    id: "1126",
    type: "minecraft:music_disc_far", name: "\u041f\u043b\u0430\u0441\u0442\u0438\u043d\u043a\u0430", tab: [[2, 97]]
  },
  1127: {
    id: "1127",
    type: "minecraft:music_disc_mall",
    name: "\u041f\u043b\u0430\u0441\u0442\u0438\u043d\u043a\u0430",
    tab: [[2, 98]]
  },
  1128: {
    id: "1128",
    type: "minecraft:music_disc_mellohi",
    name: "\u041f\u043b\u0430\u0441\u0442\u0438\u043d\u043a\u0430",
    tab: [[2, 99]]
  },
  1129: {
    id: "1129",
    type: "minecraft:music_disc_stal",
    name: "\u041f\u043b\u0430\u0441\u0442\u0438\u043d\u043a\u0430",
    tab: [[2, 100]]
  },
  1130: {
    id: "1130",
    type: "minecraft:music_disc_strad", name: "\u041f\u043b\u0430\u0441\u0442\u0438\u043d\u043a\u0430", tab: [[2, 101]]
  },
  1131: {
    id: "1131",
    type: "minecraft:music_disc_ward",
    name: "\u041f\u043b\u0430\u0441\u0442\u0438\u043d\u043a\u0430",
    tab: [[2, 102]]
  },
  1132: {
    id: "1132",
    type: "minecraft:music_disc_11",
    name: "\u041f\u043b\u0430\u0441\u0442\u0438\u043d\u043a\u0430",
    tab: [[2, 103]]
  },
  1133: {
    id: "1133",
    type: "minecraft:music_disc_wait",
    name: "\u041f\u043b\u0430\u0441\u0442\u0438\u043d\u043a\u0430",
    tab: [[2, 104]]
  },
  1134: {
    id: "1134",
    type: "minecraft:music_disc_otherside",
    name: "\u041f\u043b\u0430\u0441\u0442\u0438\u043d\u043a\u0430",
    tab: [[2, 105]]
  },
  1135: {
    id: "1135",
    type: "minecraft:music_disc_relic",
    name: "\u041f\u043b\u0430\u0441\u0442\u0438\u043d\u043a\u0430",
    tab: [[2, 108]]
  },
  1136: {
    id: "1136",
    type: "minecraft:music_disc_5",
    name: "\u041f\u043b\u0430\u0441\u0442\u0438\u043d\u043a\u0430",
    tab: [[2, 106]]
  },
  1137: {
    id: "1137",
    type: "minecraft:music_disc_pigstep",
    name: "\u041f\u043b\u0430\u0441\u0442\u0438\u043d\u043a\u0430",
    tab: [[2, 107]]
  },
  1138: {
    id: "1138",
    type: "minecraft:disc_fragment_5",
    name: "\u041e\u0441\u043a\u043e\u043b\u043e\u043a \u043f\u043b\u0430\u0441\u0442\u0438\u043d\u043a\u0438",
    tab: [[9, 47]]
  },
  1139: {
    id: "1139",
    type: "minecraft:trident",
    name: "\u0422\u0440\u0435\u0437\u0443\u0431\u0435\u0446",
    tab: [[3, 12]]
  },
  1140: {
    id: "1140",
    type: "minecraft:phantom_membrane",
    name: "\u041c\u0435\u043c\u0431\u0440\u0430\u043d\u0430 \u0444\u0430\u043d\u0442\u043e\u043c\u0430",
    tab: [[9, 87]]
  },
  1141: {
    id: "1141",
    type: "minecraft:nautilus_shell",
    name: "\u0420\u0430\u043a\u043e\u0432\u0438\u043d\u0430 \u043d\u0430\u0443\u0442\u0438\u043b\u0443\u0441\u0430",
    tab: [[9, 37]]
  },
  1142: {
    id: "1142",
    type: "minecraft:heart_of_the_sea",
    name: "\u0421\u0435\u0440\u0434\u0446\u0435 \u043c\u043e\u0440\u044f",
    tab: [[9, 38]]
  },
  1143: {id: "1143", type: "minecraft:crossbow", name: "\u0410\u0440\u0431\u0430\u043b\u0435\u0442", tab: [[3, 49]]},
  1144: {
    id: "1144",
    type: "minecraft:suspicious_stew",
    name: "\u0417\u0430\u0433\u0430\u0434\u043e\u0447\u043d\u043e\u0435 \u0440\u0430\u0433\u0443",
    tab: [[1, 39]]
  },
  1145: {
    id: "1145",
    type: "minecraft:loom",
    name: "\u0422\u043a\u0430\u0446\u043a\u0438\u0439 \u0441\u0442\u0430\u043d\u043e\u043a",
    tab: [[6, 23]]
  },
  1146: {
    id: "1146",
    type: "minecraft:flower_banner_pattern",
    name: "\u0423\u0437\u043e\u0440 \u0444\u043b\u0430\u0433\u0430",
    tab: [[9, 88]]
  },
  1147: {
    id: "1147",
    type: "minecraft:creeper_banner_pattern",
    name: "\u0423\u0437\u043e\u0440 \u0444\u043b\u0430\u0433\u0430",
    tab: [[9, 89]]
  },
  1148: {
    id: "1148",
    type: "minecraft:skull_banner_pattern",
    name: "\u0423\u0437\u043e\u0440 \u0444\u043b\u0430\u0433\u0430",
    tab: [[9, 90]]
  },
  1149: {
    id: "1149",
    type: "minecraft:mojang_banner_pattern",
    name: "\u0423\u0437\u043e\u0440 \u0444\u043b\u0430\u0433\u0430",
    tab: [[9, 91]]
  },
  1150: {
    id: "1150",
    type: "minecraft:globe_banner_pattern",
    name: "\u0423\u0437\u043e\u0440 \u0444\u043b\u0430\u0433\u0430",
    tab: [[9, 92]]
  },
  1151: {
    id: "1151",
    type: "minecraft:piglin_banner_pattern",
    name: "\u0423\u0437\u043e\u0440 \u0444\u043b\u0430\u0433\u0430",
    tab: [[9, 93]]
  },
  1152: {
    id: "1152",
    type: "minecraft:goat_horn",
    name: "\u041a\u043e\u0437\u0438\u0439 \u0440\u043e\u0433",
    tab: [[2, 85]]
  },
  1153: {
    id: "1153", type: "minecraft:composter", name: "\u041a\u043e\u043c\u043f\u043e\u0441\u0442\u043d\u0438\u0446\u0430",
    tab: [[6, 32], [7, 38]]
  },
  1154: {id: "1154", type: "minecraft:barrel", name: "\u0411\u043e\u0447\u043a\u0430", tab: [[6, 109], [7, 31]]},
  1155: {
    id: "1155",
    type: "minecraft:smoker",
    name: "\u041a\u043e\u043f\u0442\u0438\u043b\u044c\u043d\u044f",
    tab: [[6, 25]]
  },
  1156: {
    id: "1156",
    type: "minecraft:blast_furnace",
    name: "\u041f\u043b\u0430\u0432\u0438\u043b\u044c\u043d\u0430\u044f \u043f\u0435\u0447\u044c",
    tab: [[6, 26]]
  },
  1157: {
    id: "1157",
    type: "minecraft:cartography_table",
    name: "\u0421\u0442\u043e\u043b \u043a\u0430\u0440\u0442\u043e\u0433\u0440\u0430\u0444\u0430",
    tab: [[6, 19]]
  },
  1158: {
    id: "1158",
    type: "minecraft:fletching_table",
    name: "\u0421\u0442\u043e\u043b \u043b\u0443\u0447\u043d\u0438\u043a\u0430",
    tab: [[6, 20]]
  },
  1159: {id: "1159", type: "minecraft:grindstone", name: "\u0422\u043e\u0447\u0438\u043b\u043e", tab: [[6, 22]]},
  1160: {
    id: "1160",
    type: "minecraft:smithing_table",
    name: "\u0421\u0442\u043e\u043b \u043a\u0443\u0437\u043d\u0435\u0446\u0430",
    tab: [[6, 21]]
  },
  1161: {
    id: "1161",
    type: "minecraft:stonecutter",
    name: "\u041a\u0430\u043c\u043d\u0435\u0440\u0435\u0437",
    tab: [[6, 18]]
  },
  1162: {
    id: "1162",
    type: "minecraft:bell",
    name: "\u041a\u043e\u043b\u043e\u043a\u043e\u043b",
    tab: [[6, 39], [7, 58]]
  },
  1163: {id: "1163", type: "minecraft:lantern", name: "\u0424\u043e\u043d\u0430\u0440\u044c", tab: [[6, 3]]},
  1164: {
    id: "1164",
    type: "minecraft:soul_lantern",
    name: "\u0424\u043e\u043d\u0430\u0440\u044c \u0434\u0443\u0448",
    tab: [[6, 4]]
  },
  1165: {
    id: "1165",
    type: "minecraft:sweet_berries",
    name: "\u0421\u043b\u0430\u0434\u043a\u0438\u0435 \u044f\u0433\u043e\u0434\u044b",
    tab: [[8, 168], [1, 4]]
  },
  1166: {
    id: "1166",
    type: "minecraft:glow_berries",
    name: "\u0421\u0432\u0435\u0442\u044f\u0449\u0438\u0435\u0441\u044f \u044f\u0433\u043e\u0434\u044b",
    tab: [[8, 167], [1, 5]]
  },
  1167: {id: "1167", type: "minecraft:campfire", name: "\u041a\u043e\u0441\u0442\u0451\u0440", tab: [[6, 27]]},
  1168: {
    id: "1168",
    type: "minecraft:soul_campfire",
    name: "\u041a\u043e\u0441\u0442\u0451\u0440 \u0434\u0443\u0448",
    tab: [[6, 28]]
  },
  1169: {
    id: "1169",
    type: "minecraft:shroomlight",
    name: "\u0413\u0440\u0438\u0431\u043e\u0441\u0432\u0435\u0442",
    tab: [[8, 101], [6, 10]]
  },
  1170: {
    id: "1170", type: "minecraft:honeycomb",
    name: "\u041f\u0447\u0435\u043b\u0438\u043d\u044b\u0435 \u0441\u043e\u0442\u044b", tab: [[9, 29]]
  },
  1171: {
    id: "1171",
    type: "minecraft:bee_nest",
    name: "\u041f\u0447\u0435\u043b\u0438\u043d\u043e\u0435 \u0433\u043d\u0435\u0437\u0434\u043e",
    tab: [[8, 212], [6, 45]]
  },
  1172: {id: "1172", type: "minecraft:beehive", name: "\u0423\u043b\u0435\u0439", tab: [[6, 46]]},
  1173: {
    id: "1173",
    type: "minecraft:honey_bottle",
    name: "\u0411\u0443\u0442\u044b\u043b\u043e\u0447\u043a\u0430 \u043c\u0451\u0434\u0430",
    tab: [[1, 49]]
  },
  1174: {
    id: "1174",
    type: "minecraft:honeycomb_block",
    name: "\u0411\u043b\u043e\u043a \u043f\u0447\u0435\u043b\u0438\u043d\u044b\u0445 \u0441\u043e\u0442",
    tab: [[8, 213]]
  },
  1175: {
    id: "1175",
    type: "minecraft:lodestone",
    name: "\u041c\u0430\u0433\u043d\u0435\u0442\u0438\u0442",
    tab: [[6, 42]]
  },
  1176: {
    id: "1176",
    type: "minecraft:crying_obsidian",
    name: "\u041f\u043b\u0430\u0447\u0443\u0449\u0438\u0439 \u043e\u0431\u0441\u0438\u0434\u0438\u0430\u043d",
    tab: [[8, 34], [6, 14]]
  },
  1177: {
    id: "1177", type: "minecraft:blackstone", name: "\u0427\u0435\u0440\u043d\u0438\u0442",
    tab: [[4, 266], [8, 41]]
  },
  1178: {
    id: "1178",
    type: "minecraft:blackstone_slab",
    name: "\u0427\u0435\u0440\u043d\u0438\u0442\u043d\u0430\u044f \u043f\u043b\u0438\u0442\u0430",
    tab: [[4, 269]]
  },
  1179: {
    id: "1179",
    type: "minecraft:blackstone_stairs",
    name: "\u0427\u0435\u0440\u043d\u0438\u0442\u043d\u044b\u0435 \u0441\u0442\u0443\u043f\u0435\u043d\u044c\u043a\u0438",
    tab: [[4, 268]]
  },
  1180: {
    id: "1180",
    type: "minecraft:gilded_blackstone",
    name: "\u0417\u043e\u043b\u043e\u0447\u0451\u043d\u044b\u0439 \u0447\u0435\u0440\u043d\u0438\u0442",
    tab: [[4, 267]]
  },
  1181: {
    id: "1181",
    type: "minecraft:polished_blackstone",
    name: "\u041f\u043e\u043b\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0439 \u0447\u0435\u0440\u043d\u0438\u0442",
    tab: [[4, 272]]
  },
  1182: {
    id: "1182",
    type: "minecraft:polished_blackstone_slab",
    name: "\u041f\u043b\u0438\u0442\u0430 \u0438\u0437 \u043f\u043e\u043b\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u0433\u043e \u0447\u0435\u0440\u043d\u0438\u0442\u0430",
    tab: [[4, 274]]
  },
  1183: {
    id: "1183",
    type: "minecraft:polished_blackstone_stairs",
    name: "\u0421\u0442\u0443\u043f\u0435\u043d\u044c\u043a\u0438 \u0438\u0437 \u043f\u043e\u043b\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u0433\u043e \u0447\u0435\u0440\u043d\u0438\u0442\u0430",
    tab: [[4, 273]]
  },
  1184: {
    id: "1184",
    type: "minecraft:chiseled_polished_blackstone",
    name: "\u0420\u0435\u0437\u043d\u043e\u0439 \u043f\u043e\u043b\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0439 \u0447\u0435\u0440\u043d\u0438\u0442",
    tab: [[4, 271]]
  },
  1185: {
    id: "1185",
    type: "minecraft:polished_blackstone_bricks",
    name: "\u041f\u043e\u043b\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e-\u0447\u0435\u0440\u043d\u0438\u0442\u043d\u044b\u0435 \u043a\u0438\u0440\u043f\u0438\u0447\u0438",
    tab: [[4, 278]]
  },
  1186: {
    id: "1186",
    type: "minecraft:polished_blackstone_brick_slab",
    name: "\u041f\u043b\u0438\u0442\u0430 \u0438\u0437 \u043f\u043e\u043b\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e-\u0447\u0435\u0440\u043d\u0438\u0442\u043d\u043e\u0433\u043e \u043a\u0438\u0440\u043f\u0438\u0447\u0430",
    tab: [[4, 281]]
  },
  1187: {
    id: "1187",
    type: "minecraft:polished_blackstone_brick_stairs",
    name: "\u0421\u0442\u0443\u043f\u0435\u043d\u044c\u043a\u0438 \u0438\u0437 \u043f\u043e\u043b\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e-\u0447\u0435\u0440\u043d\u0438\u0442\u043d\u043e\u0433\u043e \u043a\u0438\u0440\u043f\u0438\u0447\u0430",
    tab: [[4, 280]]
  },
  1188: {
    id: "1188",
    type: "minecraft:cracked_polished_blackstone_bricks",
    name: "\u041f\u043e\u0442\u0440\u0435\u0441\u043a\u0430\u0432\u0448\u0438\u0435\u0441\u044f \u043f\u043e\u043b\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e-\u0447\u0435\u0440\u043d\u0438\u0442\u043d\u044b\u0435 \u043a\u0438\u0440\u043f\u0438\u0447\u0438",
    tab: [[4, 279]]
  },
  1189: {
    id: "1189",
    type: "minecraft:respawn_anchor",
    name: "\u042f\u043a\u043e\u0440\u044c \u0432\u043e\u0437\u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f",
    tab: [[6, 128]]
  },
  1190: {id: "1190", type: "minecraft:candle", name: "\u0421\u0432\u0435\u0447\u0430", tab: [[5, 165], [6, 145]]},
  1191: {
    id: "1191",
    type: "minecraft:white_candle",
    name: "\u0411\u0435\u043b\u0430\u044f \u0441\u0432\u0435\u0447\u0430",
    tab: [[5, 166], [6, 146]]
  },
  1192: {
    id: "1192",
    type: "minecraft:orange_candle",
    name: "\u041e\u0440\u0430\u043d\u0436\u0435\u0432\u0430\u044f \u0441\u0432\u0435\u0447\u0430",
    tab: [[5, 172], [6, 152]]
  },
  1193: {
    id: "1193",
    type: "minecraft:magenta_candle",
    name: "\u041f\u0443\u0440\u043f\u0443\u0440\u043d\u0430\u044f \u0441\u0432\u0435\u0447\u0430",
    tab: [[5, 180], [6, 160]]
  },
  1194: {
    id: "1194",
    type: "minecraft:light_blue_candle",
    name: "\u0413\u043e\u043b\u0443\u0431\u0430\u044f \u0441\u0432\u0435\u0447\u0430",
    tab: [[5, 177], [6, 157]]
  },
  1195: {
    id: "1195",
    type: "minecraft:yellow_candle",
    name: "\u0416\u0451\u043b\u0442\u0430\u044f \u0441\u0432\u0435\u0447\u0430",
    tab: [[5, 173], [6, 153]]
  },
  1196: {
    id: "1196",
    type: "minecraft:lime_candle",
    name: "\u041b\u0430\u0439\u043c\u043e\u0432\u0430\u044f \u0441\u0432\u0435\u0447\u0430",
    tab: [[5, 174], [6, 154]]
  },
  1197: {
    id: "1197",
    type: "minecraft:pink_candle",
    name: "\u0420\u043e\u0437\u043e\u0432\u0430\u044f \u0441\u0432\u0435\u0447\u0430",
    tab: [[5, 181], [6, 161]]
  },
  1198: {
    id: "1198",
    type: "minecraft:gray_candle",
    name: "\u0421\u0435\u0440\u0430\u044f \u0441\u0432\u0435\u0447\u0430",
    tab: [[5, 168], [6, 148]]
  },
  1199: {
    id: "1199",
    type: "minecraft:light_gray_candle",
    name: "\u0421\u0432\u0435\u0442\u043b\u043e-\u0441\u0435\u0440\u0430\u044f \u0441\u0432\u0435\u0447\u0430",
    tab: [[5, 167], [6, 147]]
  },
  1200: {
    id: "1200",
    type: "minecraft:cyan_candle",
    name: "\u0411\u0438\u0440\u044e\u0437\u043e\u0432\u0430\u044f \u0441\u0432\u0435\u0447\u0430",
    tab: [[5, 176], [6, 156]]
  },
  1201: {
    id: "1201",
    type: "minecraft:purple_candle",
    name: "\u0424\u0438\u043e\u043b\u0435\u0442\u043e\u0432\u0430\u044f \u0441\u0432\u0435\u0447\u0430",
    tab: [[5, 179], [6, 159]]
  },
  1202: {
    id: "1202",
    type: "minecraft:blue_candle",
    name: "\u0421\u0438\u043d\u044f\u044f \u0441\u0432\u0435\u0447\u0430",
    tab: [[5, 178], [6, 158]]
  },
  1203: {
    id: "1203",
    type: "minecraft:brown_candle",
    name: "\u041a\u043e\u0440\u0438\u0447\u043d\u0435\u0432\u0430\u044f \u0441\u0432\u0435\u0447\u0430",
    tab: [[5, 170], [6, 150]]
  },
  1204: {
    id: "1204",
    type: "minecraft:green_candle",
    name: "\u0417\u0435\u043b\u0451\u043d\u0430\u044f \u0441\u0432\u0435\u0447\u0430",
    tab: [[5, 175], [6, 155]]
  },
  1205: {
    id: "1205",
    type: "minecraft:red_candle",
    name: "\u041a\u0440\u0430\u0441\u043d\u0430\u044f \u0441\u0432\u0435\u0447\u0430",
    tab: [[5, 171], [6, 151]]
  },
  1206: {
    id: "1206",
    type: "minecraft:black_candle",
    name: "\u0427\u0451\u0440\u043d\u0430\u044f \u0441\u0432\u0435\u0447\u0430",
    tab: [[5, 169], [6, 149]]
  },
  1207: {
    id: "1207",
    type: "minecraft:small_amethyst_bud",
    name: "\u041c\u0430\u043b\u044b\u0439 \u0430\u043c\u0435\u0442\u0438\u0441\u0442\u043e\u0432\u044b\u0439 \u0431\u0443\u0442\u043e\u043d",
    tab: [[8, 70]]
  },
  1208: {
    id: "1208",
    type: "minecraft:medium_amethyst_bud",
    name: "\u0421\u0440\u0435\u0434\u043d\u0438\u0439 \u0430\u043c\u0435\u0442\u0438\u0441\u0442\u043e\u0432\u044b\u0439 \u0431\u0443\u0442\u043e\u043d",
    tab: [[8, 71]]
  },
  1209: {
    id: "1209",
    type: "minecraft:large_amethyst_bud",
    name: "\u0411\u043e\u043b\u044c\u0448\u043e\u0439 \u0430\u043c\u0435\u0442\u0438\u0441\u0442\u043e\u0432\u044b\u0439 \u0431\u0443\u0442\u043e\u043d",
    tab: [[8, 72]]
  },
  1210: {
    id: "1210",
    type: "minecraft:amethyst_cluster",
    name: "\u0410\u043c\u0435\u0442\u0438\u0441\u0442\u043e\u0432\u0430\u044f \u0434\u0440\u0443\u0437\u0430",
    tab: [[8, 73]]
  },
  1211: {
    id: "1211",
    type: "minecraft:pointed_dripstone",
    name: "\u041a\u0430\u043f\u0435\u043b\u044c\u043d\u0438\u043a",
    tab: [[8, 30]]
  },
  1212: {
    id: "1212",
    type: "minecraft:ochre_froglight",
    name: "\u041e\u0445\u0440\u0438\u0441\u0442\u0430\u044f \u043a\u0432\u0430\u043c\u043f\u0430",
    tab: [[8, 216], [6, 11]]
  },
  1213: {
    id: "1213",
    type: "minecraft:verdant_froglight",
    name: "\u041c\u0430\u043b\u0430\u0445\u0438\u0442\u043e\u0432\u0430\u044f \u043a\u0432\u0430\u043c\u043f\u0430",
    tab: [[8, 217], [6, 12]]
  },
  1214: {
    id: "1214",
    type: "minecraft:pearlescent_froglight",
    name: "\u041f\u0435\u0440\u043b\u0430\u043c\u0443\u0442\u0440\u043e\u0432\u0430\u044f \u043a\u0432\u0430\u043c\u043f\u0430",
    tab: [[8, 218], [6, 13]]
  },
  1215: {
    id: "1215",
    type: "minecraft:frogspawn",
    name: "\u041b\u044f\u0433\u0443\u0448\u0430\u0447\u044c\u044f \u0438\u043a\u0440\u0430",
    tab: [[8, 157]]
  },
  1216: {
    id: "1216", type: "minecraft:echo_shard",
    name: "\u041e\u0441\u043a\u043e\u043b\u043e\u043a \u044d\u0445\u0430", tab: [[9, 46]]
  },
  1217: {id: "1217", type: "minecraft:brush", name: "\u041a\u0438\u0441\u0442\u044c", tab: [[2, 40]]},
  1218: {
    id: "1218",
    type: "minecraft:netherite_upgrade_smithing_template",
    name: "\u041a\u0443\u0437\u043d\u0435\u0447\u043d\u044b\u0439 \u0448\u0430\u0431\u043b\u043e\u043d",
    tab: [[9, 114]]
  },
  1219: {
    id: "1219",
    type: "minecraft:sentry_armor_trim_smithing_template",
    name: "\u041a\u0443\u0437\u043d\u0435\u0447\u043d\u044b\u0439 \u0448\u0430\u0431\u043b\u043e\u043d",
    tab: [[9, 115]]
  },
  1220: {
    id: "1220",
    type: "minecraft:dune_armor_trim_smithing_template",
    name: "\u041a\u0443\u0437\u043d\u0435\u0447\u043d\u044b\u0439 \u0448\u0430\u0431\u043b\u043e\u043d",
    tab: [[9, 119]]
  },
  1221: {
    id: "1221",
    type: "minecraft:coast_armor_trim_smithing_template",
    name: "\u041a\u0443\u0437\u043d\u0435\u0447\u043d\u044b\u0439 \u0448\u0430\u0431\u043b\u043e\u043d",
    tab: [[9, 118]]
  },
  1222: {
    id: "1222",
    type: "minecraft:wild_armor_trim_smithing_template",
    name: "\u041a\u0443\u0437\u043d\u0435\u0447\u043d\u044b\u0439 \u0448\u0430\u0431\u043b\u043e\u043d",
    tab: [[9, 117]]
  },
  1223: {
    id: "1223",
    type: "minecraft:ward_armor_trim_smithing_template",
    name: "\u041a\u0443\u0437\u043d\u0435\u0447\u043d\u044b\u0439 \u0448\u0430\u0431\u043b\u043e\u043d",
    tab: [[9, 124]]
  },
  1224: {
    id: "1224",
    type: "minecraft:eye_armor_trim_smithing_template",
    name: "\u041a\u0443\u0437\u043d\u0435\u0447\u043d\u044b\u0439 \u0448\u0430\u0431\u043b\u043e\u043d",
    tab: [[9, 129]]
  },
  1225: {
    id: "1225",
    type: "minecraft:vex_armor_trim_smithing_template",
    name: "\u041a\u0443\u0437\u043d\u0435\u0447\u043d\u044b\u0439 \u0448\u0430\u0431\u043b\u043e\u043d",
    tab: [[9, 116]]
  },
  1226: {
    id: "1226",
    type: "minecraft:tide_armor_trim_smithing_template",
    name: "\u041a\u0443\u0437\u043d\u0435\u0447\u043d\u044b\u0439 \u0448\u0430\u0431\u043b\u043e\u043d",
    tab: [[9, 126]]
  },
  1227: {
    id: "1227",
    type: "minecraft:snout_armor_trim_smithing_template",
    name: "\u041a\u0443\u0437\u043d\u0435\u0447\u043d\u044b\u0439 \u0448\u0430\u0431\u043b\u043e\u043d",
    tab: [[9, 127]]
  },
  1228: {
    id: "1228",
    type: "minecraft:rib_armor_trim_smithing_template",
    name: "\u041a\u0443\u0437\u043d\u0435\u0447\u043d\u044b\u0439 \u0448\u0430\u0431\u043b\u043e\u043d",
    tab: [[9, 128]]
  },
  1229: {
    id: "1229",
    type: "minecraft:spire_armor_trim_smithing_template",
    name: "\u041a\u0443\u0437\u043d\u0435\u0447\u043d\u044b\u0439 \u0448\u0430\u0431\u043b\u043e\u043d",
    tab: [[9, 130]]
  },
  1230: {
    id: "1230",
    type: "minecraft:wayfinder_armor_trim_smithing_template",
    name: "\u041a\u0443\u0437\u043d\u0435\u0447\u043d\u044b\u0439 \u0448\u0430\u0431\u043b\u043e\u043d",
    tab: [[9, 120]]
  },
  1231: {
    id: "1231",
    type: "minecraft:shaper_armor_trim_smithing_template",
    name: "\u041a\u0443\u0437\u043d\u0435\u0447\u043d\u044b\u0439 \u0448\u0430\u0431\u043b\u043e\u043d",
    tab: [[9, 122]]
  },
  1232: {
    id: "1232",
    type: "minecraft:silence_armor_trim_smithing_template",
    name: "\u041a\u0443\u0437\u043d\u0435\u0447\u043d\u044b\u0439 \u0448\u0430\u0431\u043b\u043e\u043d",
    tab: [[9, 125]]
  },
  1233: {
    id: "1233",
    type: "minecraft:raiser_armor_trim_smithing_template",
    name: "\u041a\u0443\u0437\u043d\u0435\u0447\u043d\u044b\u0439 \u0448\u0430\u0431\u043b\u043e\u043d",
    tab: [[9, 121]]
  },
  1234: {
    id: "1234",
    type: "minecraft:host_armor_trim_smithing_template",
    name: "\u041a\u0443\u0437\u043d\u0435\u0447\u043d\u044b\u0439 \u0448\u0430\u0431\u043b\u043e\u043d",
    tab: [[9, 123]]
  },
  1235: {
    id: "1235",
    type: "minecraft:angler_pottery_sherd",
    name: "\u0413\u043b\u0438\u043d\u044f\u043d\u044b\u0439 \u0447\u0435\u0440\u0435\u043f\u043e\u043a \u00ab\u0420\u044b\u0431\u0430\u043a\u00bb",
    tab: [[9, 94]]
  },
  1236: {
    id: "1236",
    type: "minecraft:archer_pottery_sherd",
    name: "\u0413\u043b\u0438\u043d\u044f\u043d\u044b\u0439 \u0447\u0435\u0440\u0435\u043f\u043e\u043a \u00ab\u041b\u0443\u0447\u043d\u0438\u043a\u00bb",
    tab: [[9, 95]]
  },
  1237: {
    id: "1237",
    type: "minecraft:arms_up_pottery_sherd",
    name: "\u0413\u043b\u0438\u043d\u044f\u043d\u044b\u0439 \u0447\u0435\u0440\u0435\u043f\u043e\u043a \u00ab\u0420\u0443\u043a\u0438 \u0432\u0432\u0435\u0440\u0445\u00bb",
    tab: [[9, 96]]
  },
  1238: {
    id: "1238",
    type: "minecraft:blade_pottery_sherd",
    name: "\u0413\u043b\u0438\u043d\u044f\u043d\u044b\u0439 \u0447\u0435\u0440\u0435\u043f\u043e\u043a \u00ab\u041a\u043b\u0438\u043d\u043e\u043a\u00bb",
    tab: [[9, 97]]
  },
  1239: {
    id: "1239",
    type: "minecraft:brewer_pottery_sherd",
    name: "\u0413\u043b\u0438\u043d\u044f\u043d\u044b\u0439 \u0447\u0435\u0440\u0435\u043f\u043e\u043a \u00ab\u0417\u0435\u043b\u044c\u0435\u0432\u0430\u0440\u00bb",
    tab: [[9, 98]]
  },
  1240: {
    id: "1240",
    type: "minecraft:burn_pottery_sherd",
    name: "\u0413\u043b\u0438\u043d\u044f\u043d\u044b\u0439 \u0447\u0435\u0440\u0435\u043f\u043e\u043a \u00ab\u041f\u043b\u0430\u043c\u044f\u00bb",
    tab: [[9, 99]]
  },
  1241: {
    id: "1241",
    type: "minecraft:danger_pottery_sherd",
    name: "\u0413\u043b\u0438\u043d\u044f\u043d\u044b\u0439 \u0447\u0435\u0440\u0435\u043f\u043e\u043a \u00ab\u041e\u043f\u0430\u0441\u043d\u043e\u0441\u0442\u044c\u00bb",
    tab: [[9, 100]]
  },
  1242: {
    id: "1242",
    type: "minecraft:explorer_pottery_sherd",
    name: "\u0413\u043b\u0438\u043d\u044f\u043d\u044b\u0439 \u0447\u0435\u0440\u0435\u043f\u043e\u043a \u00ab\u0418\u0441\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u00bb",
    tab: [[9, 101]]
  },
  1243: {
    id: "1243",
    type: "minecraft:friend_pottery_sherd",
    name: "\u0413\u043b\u0438\u043d\u044f\u043d\u044b\u0439 \u0447\u0435\u0440\u0435\u043f\u043e\u043a \u00ab\u0414\u0440\u0443\u0433\u00bb",
    tab: [[9, 102]]
  },
  1244: {
    id: "1244",
    type: "minecraft:heart_pottery_sherd",
    name: "\u0413\u043b\u0438\u043d\u044f\u043d\u044b\u0439 \u0447\u0435\u0440\u0435\u043f\u043e\u043a \u00ab\u0421\u0435\u0440\u0434\u0446\u0435\u00bb",
    tab: [[9, 103]]
  },
  1245: {
    id: "1245",
    type: "minecraft:heartbreak_pottery_sherd",
    name: "\u0413\u043b\u0438\u043d\u044f\u043d\u044b\u0439 \u0447\u0435\u0440\u0435\u043f\u043e\u043a \u00ab\u0420\u0430\u0437\u0431\u0438\u0442\u043e\u0435 \u0441\u0435\u0440\u0434\u0446\u0435\u00bb",
    tab: [[9, 104]]
  },
  1246: {
    id: "1246",
    type: "minecraft:howl_pottery_sherd",
    name: "\u0413\u043b\u0438\u043d\u044f\u043d\u044b\u0439 \u0447\u0435\u0440\u0435\u043f\u043e\u043a \u00ab\u0412\u043e\u0439\u00bb",
    tab: [[9, 105]]
  },
  1247: {
    id: "1247",
    type: "minecraft:miner_pottery_sherd",
    name: "\u0413\u043b\u0438\u043d\u044f\u043d\u044b\u0439 \u0447\u0435\u0440\u0435\u043f\u043e\u043a \u00ab\u0428\u0430\u0445\u0442\u0451\u0440\u00bb",
    tab: [[9, 106]]
  },
  1248: {
    id: "1248",
    type: "minecraft:mourner_pottery_sherd",
    name: "\u0413\u043b\u0438\u043d\u044f\u043d\u044b\u0439 \u0447\u0435\u0440\u0435\u043f\u043e\u043a \u00ab\u0421\u043a\u043e\u0440\u0431\u044c\u00bb",
    tab: [[9, 107]]
  },
  1249: {
    id: "1249",
    type: "minecraft:plenty_pottery_sherd",
    name: "\u0413\u043b\u0438\u043d\u044f\u043d\u044b\u0439 \u0447\u0435\u0440\u0435\u043f\u043e\u043a \u00ab\u0418\u0437\u043e\u0431\u0438\u043b\u0438\u0435\u00bb",
    tab: [[9, 108]]
  },
  1250: {
    id: "1250",
    type: "minecraft:prize_pottery_sherd",
    name: "\u0413\u043b\u0438\u043d\u044f\u043d\u044b\u0439 \u0447\u0435\u0440\u0435\u043f\u043e\u043a \u00ab\u041d\u0430\u0433\u0440\u0430\u0434\u0430\u00bb",
    tab: [[9, 109]]
  },
  1251: {
    id: "1251",
    type: "minecraft:sheaf_pottery_sherd",
    name: "\u0413\u043b\u0438\u043d\u044f\u043d\u044b\u0439 \u0447\u0435\u0440\u0435\u043f\u043e\u043a \u00ab\u041f\u0443\u0447\u043e\u043a\u00bb",
    tab: [[9, 110]]
  },
  1252: {
    id: "1252",
    type: "minecraft:shelter_pottery_sherd",
    name: "\u0413\u043b\u0438\u043d\u044f\u043d\u044b\u0439 \u0447\u0435\u0440\u0435\u043f\u043e\u043a \u00ab\u0423\u0431\u0435\u0436\u0438\u0449\u0435\u00bb",
    tab: [[9, 111]]
  },
  1253: {
    id: "1253",
    type: "minecraft:skull_pottery_sherd",
    name: "\u0413\u043b\u0438\u043d\u044f\u043d\u044b\u0439 \u0447\u0435\u0440\u0435\u043f\u043e\u043a \u00ab\u0427\u0435\u0440\u0435\u043f\u00bb",
    tab: [[9, 112]]
  },
  1254: {
    id: "1254",
    type: "minecraft:snort_pottery_sherd",
    name: "\u0413\u043b\u0438\u043d\u044f\u043d\u044b\u0439 \u0447\u0435\u0440\u0435\u043f\u043e\u043a \u00ab\u041d\u044e\u0445\u0430\u0447\u00bb",
    tab: [[9, 113]]
  }
};

const keyMappings = {
  id: 'id',
  type: 'type',
  name: 'item_name_ru'
};

const result = Object.values(db_mine).map(obj => {
  const filteredObj = {};
  Object.entries(obj).forEach(([key, value]) => {
    if (key === 'tab') return; // Пропустить свойство 'tab'
    const newKey = keyMappings[key] || key;
    filteredObj[newKey] = key === 'type' ? value.replace('minecraft:', '') : value;
  });
  return filteredObj;
});

const item_name_data = JSON.stringify(result, null, 2);

fs.writeFile('item_name_data.js', `const transformedArray = ${item_name_data}; \n\nmodule.exports.transformedArray = transformedArray;`, err => {
  if (err) {
    console.error('Ошибка при записи файла:', err);
    return;
  }
  console.log('Файл item_name_data.js успешно создан!');
});