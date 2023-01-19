import React, {useEffect, useState} from "react";
import {useAxios} from '../../../DataProvider';
import Preload from "../../components/preloader/Preload";

import "./Shopkeepers.scss";
import ShulkerBox from "../../components/[0_grouped_0]-shopkeepers/shulker-box/Shulker-box";
import OneSuggestions from "../../components/[0_grouped_0]-shopkeepers/one-suggestions/One-suggestions.js";

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

  const [selectedItem, setSelectedItem] = useState(null);
  const [queryData, setQueryData] = useState("");

  const data = [
    {
      "name": "_BaXy_",
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
      "name": "SoftPanda3",
      "offers": [
        {
          "name": "ELYTRA",
          "content": [
            {
              "enchants": {
                "MENDING": 1,
                "DURABILITY": 3
              }
            }
          ],
          "amount": 32,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "SPORE_BLOSSOM",
          "content": [],
          "amount": 2,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "NETHER_STAR",
          "content": [],
          "amount": 3,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "WITHER_SKELETON_SKULL",
          "content": [],
          "amount": 1,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "DRAGON_HEAD",
          "content": [],
          "amount": 12,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "ELYTRA",
          "content": [
            {
              "enchants": {
                "MENDING": 1,
                "DURABILITY": 10
              }
            }
          ],
          "amount": 24,
          "currency": "NETHERITE_BLOCK"
        },
        {
          "name": "ENCHANTED_BOOK",
          "content": [],
          "amount": 12,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "SPONGE",
          "content": [],
          "amount": 1,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        }
      ]
    },
    {
      "name": "Niksa_Viento",
      "offers": [
        {
          "name": "WHITE_SHULKER_BOX",
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
          "name": "ORANGE_SHULKER_BOX",
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
          "name": "CYAN_SHULKER_BOX",
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
          "name": "GREEN_SHULKER_BOX",
          "content": [
            {
              "slot": "0",
              "id": "oak_leaves",
              "count": "64"
            },
            {
              "slot": "1",
              "id": "oak_leaves",
              "count": "64"
            },
            {
              "slot": "2",
              "id": "oak_leaves",
              "count": "64"
            },
            {
              "slot": "3",
              "id": "oak_leaves",
              "count": "64"
            },
            {
              "slot": "4",
              "id": "oak_leaves",
              "count": "64"
            },
            {
              "slot": "5",
              "id": "oak_leaves",
              "count": "64"
            },
            {
              "slot": "6",
              "id": "oak_leaves",
              "count": "64"
            },
            {
              "slot": "7",
              "id": "oak_leaves",
              "count": "64"
            },
            {
              "slot": "8",
              "id": "oak_leaves",
              "count": "64"
            },
            {
              "slot": "9",
              "id": "oak_leaves",
              "count": "64"
            },
            {
              "slot": "10",
              "id": "oak_leaves",
              "count": "64"
            },
            {
              "slot": "11",
              "id": "oak_leaves",
              "count": "64"
            },
            {
              "slot": "12",
              "id": "oak_leaves",
              "count": "64"
            },
            {
              "slot": "13",
              "id": "oak_leaves",
              "count": "64"
            },
            {
              "slot": "14",
              "id": "oak_leaves",
              "count": "64"
            },
            {
              "slot": "15",
              "id": "oak_leaves",
              "count": "64"
            },
            {
              "slot": "16",
              "id": "oak_leaves",
              "count": "64"
            },
            {
              "slot": "17",
              "id": "oak_leaves",
              "count": "64"
            },
            {
              "slot": "18",
              "id": "oak_leaves",
              "count": "64"
            },
            {
              "slot": "19",
              "id": "oak_leaves",
              "count": "64"
            },
            {
              "slot": "20",
              "id": "oak_leaves",
              "count": "64"
            },
            {
              "slot": "21",
              "id": "oak_leaves",
              "count": "64"
            },
            {
              "slot": "22",
              "id": "oak_leaves",
              "count": "64"
            },
            {
              "slot": "23",
              "id": "oak_leaves",
              "count": "64"
            },
            {
              "slot": "24",
              "id": "oak_leaves",
              "count": "64"
            },
            {
              "slot": "25",
              "id": "oak_leaves",
              "count": "64"
            },
            {
              "slot": "26",
              "id": "oak_leaves",
              "count": "64"
            }
          ],
          "amount": 18,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "OAK_LEAVES",
          "content": [],
          "amount": 2,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "SPRUCE_LEAVES",
          "content": [],
          "amount": 2,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "BIRCH_LEAVES",
          "content": [],
          "amount": 2,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "JUNGLE_LEAVES",
          "content": [],
          "amount": 3,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "DARK_OAK_LEAVES",
          "content": [],
          "amount": 3,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "AZALEA_LEAVES",
          "content": [],
          "amount": 2,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "FLOWERING_AZALEA_LEAVES",
          "content": [],
          "amount": 3,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "BLACK_SHULKER_BOX",
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
        },
        {
          "name": "BROWN_SHULKER_BOX",
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
          "name": "PINK_SHULKER_BOX",
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
          "name": "OAK_SAPLING",
          "content": [],
          "amount": 2,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "JUNGLE_SAPLING",
          "content": [],
          "amount": 3,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "ACACIA_SAPLING",
          "content": [],
          "amount": 2,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "DARK_OAK_SAPLING",
          "content": [],
          "amount": 3,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "AZALEA",
          "content": [],
          "amount": 4,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "BIRCH_SAPLING",
          "content": [],
          "amount": 2,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "SPRUCE_SAPLING",
          "content": [],
          "amount": 2,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "FLOWERING_AZALEA",
          "content": [],
          "amount": 4,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "MAGENTA_SHULKER_BOX",
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
          "name": "MANGROVE_PROPAGULE",
          "content": [],
          "amount": 3,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "RED_SHULKER_BOX",
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
          "name": "LIME_SHULKER_BOX",
          "content": [
            {
              "slot": "0",
              "id": "azalea_leaves",
              "count": "64"
            },
            {
              "slot": "1",
              "id": "azalea_leaves",
              "count": "64"
            },
            {
              "slot": "2",
              "id": "azalea_leaves",
              "count": "64"
            },
            {
              "slot": "3",
              "id": "azalea_leaves",
              "count": "64"
            },
            {
              "slot": "4",
              "id": "azalea_leaves",
              "count": "64"
            },
            {
              "slot": "5",
              "id": "azalea_leaves",
              "count": "64"
            },
            {
              "slot": "6",
              "id": "azalea_leaves",
              "count": "64"
            },
            {
              "slot": "7",
              "id": "azalea_leaves",
              "count": "64"
            },
            {
              "slot": "8",
              "id": "azalea_leaves",
              "count": "64"
            },
            {
              "slot": "9",
              "id": "azalea_leaves",
              "count": "64"
            },
            {
              "slot": "10",
              "id": "azalea_leaves",
              "count": "64"
            },
            {
              "slot": "11",
              "id": "azalea_leaves",
              "count": "64"
            },
            {
              "slot": "12",
              "id": "azalea_leaves",
              "count": "64"
            },
            {
              "slot": "13",
              "id": "azalea_leaves",
              "count": "64"
            },
            {
              "slot": "14",
              "id": "azalea_leaves",
              "count": "64"
            },
            {
              "slot": "15",
              "id": "azalea_leaves",
              "count": "64"
            },
            {
              "slot": "16",
              "id": "azalea_leaves",
              "count": "64"
            },
            {
              "slot": "17",
              "id": "azalea_leaves",
              "count": "64"
            },
            {
              "slot": "18",
              "id": "azalea_leaves",
              "count": "64"
            },
            {
              "slot": "19",
              "id": "azalea_leaves",
              "count": "64"
            },
            {
              "slot": "20",
              "id": "azalea_leaves",
              "count": "64"
            },
            {
              "slot": "21",
              "id": "azalea_leaves",
              "count": "64"
            },
            {
              "slot": "22",
              "id": "azalea_leaves",
              "count": "64"
            },
            {
              "slot": "23",
              "id": "azalea_leaves",
              "count": "64"
            },
            {
              "slot": "24",
              "id": "azalea_leaves",
              "count": "64"
            },
            {
              "slot": "25",
              "id": "azalea_leaves",
              "count": "64"
            },
            {
              "slot": "26",
              "id": "azalea_leaves",
              "count": "64"
            }
          ],
          "amount": 18,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "GREEN_SHULKER_BOX",
          "content": [
            {
              "slot": "0",
              "id": "mangrove_leaves",
              "count": "64"
            },
            {
              "slot": "1",
              "id": "mangrove_leaves",
              "count": "64"
            },
            {
              "slot": "2",
              "id": "mangrove_leaves",
              "count": "64"
            },
            {
              "slot": "3",
              "id": "mangrove_leaves",
              "count": "64"
            },
            {
              "slot": "4",
              "id": "mangrove_leaves",
              "count": "64"
            },
            {
              "slot": "5",
              "id": "mangrove_leaves",
              "count": "64"
            },
            {
              "slot": "6",
              "id": "mangrove_leaves",
              "count": "64"
            },
            {
              "slot": "7",
              "id": "mangrove_leaves",
              "count": "64"
            },
            {
              "slot": "8",
              "id": "mangrove_leaves",
              "count": "64"
            },
            {
              "slot": "9",
              "id": "mangrove_leaves",
              "count": "64"
            },
            {
              "slot": "10",
              "id": "mangrove_leaves",
              "count": "64"
            },
            {
              "slot": "11",
              "id": "mangrove_leaves",
              "count": "64"
            },
            {
              "slot": "12",
              "id": "mangrove_leaves",
              "count": "64"
            },
            {
              "slot": "13",
              "id": "mangrove_leaves",
              "count": "64"
            },
            {
              "slot": "14",
              "id": "mangrove_leaves",
              "count": "64"
            },
            {
              "slot": "15",
              "id": "mangrove_leaves",
              "count": "64"
            },
            {
              "slot": "16",
              "id": "mangrove_leaves",
              "count": "64"
            },
            {
              "slot": "17",
              "id": "mangrove_leaves",
              "count": "64"
            },
            {
              "slot": "18",
              "id": "mangrove_leaves",
              "count": "64"
            },
            {
              "slot": "19",
              "id": "mangrove_leaves",
              "count": "64"
            },
            {
              "slot": "20",
              "id": "mangrove_leaves",
              "count": "64"
            },
            {
              "slot": "21",
              "id": "mangrove_leaves",
              "count": "64"
            },
            {
              "slot": "22",
              "id": "mangrove_leaves",
              "count": "64"
            },
            {
              "slot": "23",
              "id": "mangrove_leaves",
              "count": "64"
            },
            {
              "slot": "24",
              "id": "mangrove_leaves",
              "count": "64"
            },
            {
              "slot": "25",
              "id": "mangrove_leaves",
              "count": "64"
            },
            {
              "slot": "26",
              "id": "mangrove_leaves",
              "count": "64"
            }
          ],
          "amount": 18,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "MAGENTA_SHULKER_BOX",
          "content": [
            {
              "slot": "0",
              "id": "flowering_azalea_leaves",
              "count": "64"
            },
            {
              "slot": "1",
              "id": "flowering_azalea_leaves",
              "count": "64"
            },
            {
              "slot": "2",
              "id": "flowering_azalea_leaves",
              "count": "64"
            },
            {
              "slot": "3",
              "id": "flowering_azalea_leaves",
              "count": "64"
            },
            {
              "slot": "4",
              "id": "flowering_azalea_leaves",
              "count": "64"
            },
            {
              "slot": "5",
              "id": "flowering_azalea_leaves",
              "count": "64"
            },
            {
              "slot": "6",
              "id": "flowering_azalea_leaves",
              "count": "64"
            },
            {
              "slot": "7",
              "id": "flowering_azalea_leaves",
              "count": "64"
            },
            {
              "slot": "8",
              "id": "flowering_azalea_leaves",
              "count": "64"
            },
            {
              "slot": "9",
              "id": "flowering_azalea_leaves",
              "count": "64"
            },
            {
              "slot": "10",
              "id": "flowering_azalea_leaves",
              "count": "64"
            },
            {
              "slot": "11",
              "id": "flowering_azalea_leaves",
              "count": "64"
            },
            {
              "slot": "12",
              "id": "flowering_azalea_leaves",
              "count": "64"
            },
            {
              "slot": "13",
              "id": "flowering_azalea_leaves",
              "count": "64"
            },
            {
              "slot": "14",
              "id": "flowering_azalea_leaves",
              "count": "64"
            },
            {
              "slot": "15",
              "id": "flowering_azalea_leaves",
              "count": "64"
            },
            {
              "slot": "16",
              "id": "flowering_azalea_leaves",
              "count": "64"
            },
            {
              "slot": "17",
              "id": "flowering_azalea_leaves",
              "count": "64"
            },
            {
              "slot": "18",
              "id": "flowering_azalea_leaves",
              "count": "64"
            },
            {
              "slot": "19",
              "id": "flowering_azalea_leaves",
              "count": "64"
            },
            {
              "slot": "20",
              "id": "flowering_azalea_leaves",
              "count": "64"
            },
            {
              "slot": "21",
              "id": "flowering_azalea_leaves",
              "count": "64"
            },
            {
              "slot": "22",
              "id": "flowering_azalea_leaves",
              "count": "64"
            },
            {
              "slot": "23",
              "id": "flowering_azalea_leaves",
              "count": "64"
            },
            {
              "slot": "24",
              "id": "flowering_azalea_leaves",
              "count": "64"
            },
            {
              "slot": "25",
              "id": "flowering_azalea_leaves",
              "count": "64"
            },
            {
              "slot": "26",
              "id": "flowering_azalea_leaves",
              "count": "64"
            }
          ],
          "amount": 48,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "LIGHT_GRAY_SHULKER_BOX",
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
        }
      ]
    },
    {
      "name": "Niksa_Viento",
      "offers": [
        {
          "name": "YELLOW_SHULKER_BOX",
          "content": [
            {
              "slot": "0",
              "id": "experience_bottle",
              "count": "64"
            },
            {
              "slot": "1",
              "id": "experience_bottle",
              "count": "64"
            },
            {
              "slot": "2",
              "id": "experience_bottle",
              "count": "64"
            },
            {
              "slot": "3",
              "id": "experience_bottle",
              "count": "64"
            },
            {
              "slot": "4",
              "id": "experience_bottle",
              "count": "64"
            },
            {
              "slot": "5",
              "id": "experience_bottle",
              "count": "64"
            },
            {
              "slot": "6",
              "id": "experience_bottle",
              "count": "64"
            },
            {
              "slot": "7",
              "id": "experience_bottle",
              "count": "64"
            },
            {
              "slot": "8",
              "id": "experience_bottle",
              "count": "64"
            },
            {
              "slot": "9",
              "id": "experience_bottle",
              "count": "64"
            },
            {
              "slot": "10",
              "id": "experience_bottle",
              "count": "64"
            },
            {
              "slot": "11",
              "id": "experience_bottle",
              "count": "64"
            },
            {
              "slot": "12",
              "id": "experience_bottle",
              "count": "64"
            },
            {
              "slot": "13",
              "id": "experience_bottle",
              "count": "64"
            },
            {
              "slot": "14",
              "id": "experience_bottle",
              "count": "64"
            },
            {
              "slot": "15",
              "id": "experience_bottle",
              "count": "64"
            },
            {
              "slot": "16",
              "id": "experience_bottle",
              "count": "64"
            },
            {
              "slot": "17",
              "id": "experience_bottle",
              "count": "64"
            },
            {
              "slot": "18",
              "id": "experience_bottle",
              "count": "64"
            },
            {
              "slot": "19",
              "id": "experience_bottle",
              "count": "64"
            },
            {
              "slot": "20",
              "id": "experience_bottle",
              "count": "64"
            },
            {
              "slot": "21",
              "id": "experience_bottle",
              "count": "64"
            },
            {
              "slot": "22",
              "id": "experience_bottle",
              "count": "64"
            },
            {
              "slot": "23",
              "id": "experience_bottle",
              "count": "64"
            },
            {
              "slot": "24",
              "id": "experience_bottle",
              "count": "64"
            },
            {
              "slot": "25",
              "id": "experience_bottle",
              "count": "64"
            },
            {
              "slot": "26",
              "id": "experience_bottle",
              "count": "64"
            }
          ],
          "amount": 64,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "ORANGE_SHULKER_BOX",
          "content": [
            {
              "slot": "0",
              "id": "golden_carrot",
              "count": "64"
            },
            {
              "slot": "1",
              "id": "golden_carrot",
              "count": "64"
            },
            {
              "slot": "2",
              "id": "golden_carrot",
              "count": "64"
            },
            {
              "slot": "3",
              "id": "golden_carrot",
              "count": "64"
            },
            {
              "slot": "4",
              "id": "golden_carrot",
              "count": "64"
            },
            {
              "slot": "5",
              "id": "golden_carrot",
              "count": "64"
            },
            {
              "slot": "6",
              "id": "golden_carrot",
              "count": "64"
            },
            {
              "slot": "7",
              "id": "golden_carrot",
              "count": "64"
            },
            {
              "slot": "8",
              "id": "golden_carrot",
              "count": "64"
            },
            {
              "slot": "9",
              "id": "golden_carrot",
              "count": "64"
            },
            {
              "slot": "10",
              "id": "golden_carrot",
              "count": "64"
            },
            {
              "slot": "11",
              "id": "golden_carrot",
              "count": "64"
            },
            {
              "slot": "12",
              "id": "golden_carrot",
              "count": "64"
            },
            {
              "slot": "13",
              "id": "golden_carrot",
              "count": "64"
            },
            {
              "slot": "14",
              "id": "golden_carrot",
              "count": "64"
            },
            {
              "slot": "15",
              "id": "golden_carrot",
              "count": "64"
            },
            {
              "slot": "16",
              "id": "golden_carrot",
              "count": "64"
            },
            {
              "slot": "17",
              "id": "golden_carrot",
              "count": "64"
            },
            {
              "slot": "18",
              "id": "golden_carrot",
              "count": "64"
            },
            {
              "slot": "19",
              "id": "golden_carrot",
              "count": "64"
            },
            {
              "slot": "20",
              "id": "golden_carrot",
              "count": "64"
            },
            {
              "slot": "21",
              "id": "golden_carrot",
              "count": "64"
            },
            {
              "slot": "22",
              "id": "golden_carrot",
              "count": "64"
            },
            {
              "slot": "23",
              "id": "golden_carrot",
              "count": "64"
            },
            {
              "slot": "24",
              "id": "golden_carrot",
              "count": "64"
            },
            {
              "slot": "25",
              "id": "golden_carrot",
              "count": "64"
            },
            {
              "slot": "26",
              "id": "golden_carrot",
              "count": "64"
            }
          ],
          "amount": 16,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "TURTLE_EGG",
          "content": [],
          "amount": 4,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "GLOW_INK_SAC",
          "content": [],
          "amount": 1,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "RED_SHULKER_BOX",
          "content": [
            {
              "slot": "0",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "1",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "2",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "3",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "4",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "5",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "6",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "7",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "8",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "9",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "10",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "11",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "12",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "13",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "14",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "15",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "16",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "17",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "18",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "19",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "20",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "21",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "22",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "23",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "24",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "25",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "26",
              "id": "firework_rocket",
              "count": "64"
            }
          ],
          "amount": 12,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "LIGHT_GRAY_SHULKER_BOX",
          "content": [
            {
              "slot": "0",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "1",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "2",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "3",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "4",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "5",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "6",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "7",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "8",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "9",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "10",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "11",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "12",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "13",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "14",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "15",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "16",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "17",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "18",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "19",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "20",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "21",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "22",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "23",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "24",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "25",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "26",
              "id": "firework_rocket",
              "count": "64"
            }
          ],
          "amount": 8,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "WHITE_SHULKER_BOX",
          "content": [
            {
              "slot": "0",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "1",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "2",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "3",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "4",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "5",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "6",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "7",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "8",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "9",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "10",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "11",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "12",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "13",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "14",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "15",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "16",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "17",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "18",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "19",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "20",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "21",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "22",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "23",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "24",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "25",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "26",
              "id": "firework_rocket",
              "count": "64"
            }
          ],
          "amount": 4,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "GRAY_SHULKER_BOX",
          "content": [
            {
              "slot": "0",
              "id": "cobbled_deepslate",
              "count": "64"
            },
            {
              "slot": "1",
              "id": "cobbled_deepslate",
              "count": "64"
            },
            {
              "slot": "2",
              "id": "cobbled_deepslate",
              "count": "64"
            },
            {
              "slot": "3",
              "id": "cobbled_deepslate",
              "count": "64"
            },
            {
              "slot": "4",
              "id": "cobbled_deepslate",
              "count": "64"
            },
            {
              "slot": "5",
              "id": "cobbled_deepslate",
              "count": "64"
            },
            {
              "slot": "6",
              "id": "cobbled_deepslate",
              "count": "64"
            },
            {
              "slot": "7",
              "id": "cobbled_deepslate",
              "count": "64"
            },
            {
              "slot": "8",
              "id": "cobbled_deepslate",
              "count": "64"
            },
            {
              "slot": "9",
              "id": "cobbled_deepslate",
              "count": "64"
            },
            {
              "slot": "10",
              "id": "cobbled_deepslate",
              "count": "64"
            },
            {
              "slot": "11",
              "id": "cobbled_deepslate",
              "count": "64"
            },
            {
              "slot": "12",
              "id": "cobbled_deepslate",
              "count": "64"
            },
            {
              "slot": "13",
              "id": "cobbled_deepslate",
              "count": "64"
            },
            {
              "slot": "14",
              "id": "cobbled_deepslate",
              "count": "64"
            },
            {
              "slot": "15",
              "id": "cobbled_deepslate",
              "count": "64"
            },
            {
              "slot": "16",
              "id": "cobbled_deepslate",
              "count": "64"
            },
            {
              "slot": "17",
              "id": "cobbled_deepslate",
              "count": "64"
            },
            {
              "slot": "18",
              "id": "cobbled_deepslate",
              "count": "64"
            },
            {
              "slot": "19",
              "id": "cobbled_deepslate",
              "count": "64"
            },
            {
              "slot": "20",
              "id": "cobbled_deepslate",
              "count": "64"
            },
            {
              "slot": "21",
              "id": "cobbled_deepslate",
              "count": "64"
            },
            {
              "slot": "22",
              "id": "cobbled_deepslate",
              "count": "64"
            },
            {
              "slot": "23",
              "id": "cobbled_deepslate",
              "count": "64"
            },
            {
              "slot": "24",
              "id": "cobbled_deepslate",
              "count": "64"
            },
            {
              "slot": "25",
              "id": "cobbled_deepslate",
              "count": "64"
            },
            {
              "slot": "26",
              "id": "cobbled_deepslate",
              "count": "64"
            }
          ],
          "amount": 12,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "BLUE_SHULKER_BOX",
          "content": [
            {
              "slot": "0",
              "id": "ochre_froglight",
              "count": "64"
            },
            {
              "slot": "1",
              "id": "ochre_froglight",
              "count": "64"
            },
            {
              "slot": "2",
              "id": "ochre_froglight",
              "count": "64"
            },
            {
              "slot": "3",
              "id": "ochre_froglight",
              "count": "64"
            },
            {
              "slot": "4",
              "id": "ochre_froglight",
              "count": "64"
            },
            {
              "slot": "5",
              "id": "ochre_froglight",
              "count": "64"
            },
            {
              "slot": "6",
              "id": "ochre_froglight",
              "count": "64"
            },
            {
              "slot": "7",
              "id": "ochre_froglight",
              "count": "64"
            },
            {
              "slot": "8",
              "id": "ochre_froglight",
              "count": "64"
            },
            {
              "slot": "9",
              "id": "verdant_froglight",
              "count": "64"
            },
            {
              "slot": "10",
              "id": "verdant_froglight",
              "count": "64"
            },
            {
              "slot": "11",
              "id": "verdant_froglight",
              "count": "64"
            },
            {
              "slot": "12",
              "id": "verdant_froglight",
              "count": "64"
            },
            {
              "slot": "13",
              "id": "verdant_froglight",
              "count": "64"
            },
            {
              "slot": "14",
              "id": "verdant_froglight",
              "count": "64"
            },
            {
              "slot": "15",
              "id": "verdant_froglight",
              "count": "64"
            },
            {
              "slot": "16",
              "id": "verdant_froglight",
              "count": "64"
            },
            {
              "slot": "17",
              "id": "verdant_froglight",
              "count": "64"
            },
            {
              "slot": "18",
              "id": "pearlescent_froglight",
              "count": "64"
            },
            {
              "slot": "19",
              "id": "pearlescent_froglight",
              "count": "64"
            },
            {
              "slot": "20",
              "id": "pearlescent_froglight",
              "count": "64"
            },
            {
              "slot": "21",
              "id": "pearlescent_froglight",
              "count": "64"
            },
            {
              "slot": "22",
              "id": "pearlescent_froglight",
              "count": "64"
            },
            {
              "slot": "23",
              "id": "pearlescent_froglight",
              "count": "64"
            },
            {
              "slot": "24",
              "id": "pearlescent_froglight",
              "count": "64"
            },
            {
              "slot": "25",
              "id": "pearlescent_froglight",
              "count": "64"
            },
            {
              "slot": "26",
              "id": "pearlescent_froglight",
              "count": "64"
            }
          ],
          "amount": 12,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "PURPLE_SHULKER_BOX",
          "content": [
            {
              "slot": "0",
              "id": "pearlescent_froglight",
              "count": "64"
            },
            {
              "slot": "1",
              "id": "pearlescent_froglight",
              "count": "64"
            },
            {
              "slot": "2",
              "id": "pearlescent_froglight",
              "count": "64"
            },
            {
              "slot": "3",
              "id": "pearlescent_froglight",
              "count": "64"
            },
            {
              "slot": "4",
              "id": "pearlescent_froglight",
              "count": "64"
            },
            {
              "slot": "5",
              "id": "pearlescent_froglight",
              "count": "64"
            },
            {
              "slot": "6",
              "id": "pearlescent_froglight",
              "count": "64"
            },
            {
              "slot": "7",
              "id": "pearlescent_froglight",
              "count": "64"
            },
            {
              "slot": "8",
              "id": "pearlescent_froglight",
              "count": "64"
            },
            {
              "slot": "9",
              "id": "pearlescent_froglight",
              "count": "64"
            },
            {
              "slot": "10",
              "id": "pearlescent_froglight",
              "count": "64"
            },
            {
              "slot": "11",
              "id": "pearlescent_froglight",
              "count": "64"
            },
            {
              "slot": "12",
              "id": "pearlescent_froglight",
              "count": "64"
            },
            {
              "slot": "13",
              "id": "pearlescent_froglight",
              "count": "64"
            },
            {
              "slot": "14",
              "id": "pearlescent_froglight",
              "count": "64"
            },
            {
              "slot": "15",
              "id": "pearlescent_froglight",
              "count": "64"
            },
            {
              "slot": "16",
              "id": "pearlescent_froglight",
              "count": "64"
            },
            {
              "slot": "17",
              "id": "pearlescent_froglight",
              "count": "64"
            },
            {
              "slot": "18",
              "id": "pearlescent_froglight",
              "count": "64"
            },
            {
              "slot": "19",
              "id": "pearlescent_froglight",
              "count": "64"
            },
            {
              "slot": "20",
              "id": "pearlescent_froglight",
              "count": "64"
            },
            {
              "slot": "21",
              "id": "pearlescent_froglight",
              "count": "64"
            },
            {
              "slot": "22",
              "id": "pearlescent_froglight",
              "count": "64"
            },
            {
              "slot": "23",
              "id": "pearlescent_froglight",
              "count": "64"
            },
            {
              "slot": "24",
              "id": "pearlescent_froglight",
              "count": "64"
            },
            {
              "slot": "25",
              "id": "pearlescent_froglight",
              "count": "64"
            },
            {
              "slot": "26",
              "id": "pearlescent_froglight",
              "count": "64"
            }
          ],
          "amount": 12,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "PEARLESCENT_FROGLIGHT",
          "content": [],
          "amount": 2,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "GREEN_SHULKER_BOX",
          "content": [
            {
              "slot": "0",
              "id": "verdant_froglight",
              "count": "64"
            },
            {
              "slot": "1",
              "id": "verdant_froglight",
              "count": "64"
            },
            {
              "slot": "2",
              "id": "verdant_froglight",
              "count": "64"
            },
            {
              "slot": "3",
              "id": "verdant_froglight",
              "count": "64"
            },
            {
              "slot": "4",
              "id": "verdant_froglight",
              "count": "64"
            },
            {
              "slot": "5",
              "id": "verdant_froglight",
              "count": "64"
            },
            {
              "slot": "6",
              "id": "verdant_froglight",
              "count": "64"
            },
            {
              "slot": "7",
              "id": "verdant_froglight",
              "count": "64"
            },
            {
              "slot": "8",
              "id": "verdant_froglight",
              "count": "64"
            },
            {
              "slot": "9",
              "id": "verdant_froglight",
              "count": "64"
            },
            {
              "slot": "10",
              "id": "verdant_froglight",
              "count": "64"
            },
            {
              "slot": "11",
              "id": "verdant_froglight",
              "count": "64"
            },
            {
              "slot": "12",
              "id": "verdant_froglight",
              "count": "64"
            },
            {
              "slot": "13",
              "id": "verdant_froglight",
              "count": "64"
            },
            {
              "slot": "14",
              "id": "verdant_froglight",
              "count": "64"
            },
            {
              "slot": "15",
              "id": "verdant_froglight",
              "count": "64"
            },
            {
              "slot": "16",
              "id": "verdant_froglight",
              "count": "64"
            },
            {
              "slot": "17",
              "id": "verdant_froglight",
              "count": "64"
            },
            {
              "slot": "18",
              "id": "verdant_froglight",
              "count": "64"
            },
            {
              "slot": "19",
              "id": "verdant_froglight",
              "count": "64"
            },
            {
              "slot": "20",
              "id": "verdant_froglight",
              "count": "64"
            },
            {
              "slot": "21",
              "id": "verdant_froglight",
              "count": "64"
            },
            {
              "slot": "22",
              "id": "verdant_froglight",
              "count": "64"
            },
            {
              "slot": "23",
              "id": "verdant_froglight",
              "count": "64"
            },
            {
              "slot": "24",
              "id": "verdant_froglight",
              "count": "64"
            },
            {
              "slot": "25",
              "id": "verdant_froglight",
              "count": "64"
            },
            {
              "slot": "26",
              "id": "verdant_froglight",
              "count": "64"
            }
          ],
          "amount": 12,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "VERDANT_FROGLIGHT",
          "content": [],
          "amount": 2,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "YELLOW_SHULKER_BOX",
          "content": [
            {
              "slot": "0",
              "id": "ochre_froglight",
              "count": "64"
            },
            {
              "slot": "1",
              "id": "ochre_froglight",
              "count": "64"
            },
            {
              "slot": "2",
              "id": "ochre_froglight",
              "count": "64"
            },
            {
              "slot": "3",
              "id": "ochre_froglight",
              "count": "64"
            },
            {
              "slot": "4",
              "id": "ochre_froglight",
              "count": "64"
            },
            {
              "slot": "5",
              "id": "ochre_froglight",
              "count": "64"
            },
            {
              "slot": "6",
              "id": "ochre_froglight",
              "count": "64"
            },
            {
              "slot": "7",
              "id": "ochre_froglight",
              "count": "64"
            },
            {
              "slot": "8",
              "id": "ochre_froglight",
              "count": "64"
            },
            {
              "slot": "9",
              "id": "ochre_froglight",
              "count": "64"
            },
            {
              "slot": "10",
              "id": "ochre_froglight",
              "count": "64"
            },
            {
              "slot": "11",
              "id": "ochre_froglight",
              "count": "64"
            },
            {
              "slot": "12",
              "id": "ochre_froglight",
              "count": "64"
            },
            {
              "slot": "13",
              "id": "ochre_froglight",
              "count": "64"
            },
            {
              "slot": "14",
              "id": "ochre_froglight",
              "count": "64"
            },
            {
              "slot": "15",
              "id": "ochre_froglight",
              "count": "64"
            },
            {
              "slot": "16",
              "id": "ochre_froglight",
              "count": "64"
            },
            {
              "slot": "17",
              "id": "ochre_froglight",
              "count": "64"
            },
            {
              "slot": "18",
              "id": "ochre_froglight",
              "count": "64"
            },
            {
              "slot": "19",
              "id": "ochre_froglight",
              "count": "64"
            },
            {
              "slot": "20",
              "id": "ochre_froglight",
              "count": "64"
            },
            {
              "slot": "21",
              "id": "ochre_froglight",
              "count": "64"
            },
            {
              "slot": "22",
              "id": "ochre_froglight",
              "count": "64"
            },
            {
              "slot": "23",
              "id": "ochre_froglight",
              "count": "64"
            },
            {
              "slot": "24",
              "id": "ochre_froglight",
              "count": "64"
            },
            {
              "slot": "25",
              "id": "ochre_froglight",
              "count": "64"
            },
            {
              "slot": "26",
              "id": "ochre_froglight",
              "count": "64"
            }
          ],
          "amount": 12,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "OCHRE_FROGLIGHT",
          "content": [],
          "amount": 2,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "CYAN_SHULKER_BOX",
          "content": [
            {
              "slot": "0",
              "id": "sculk",
              "count": "64"
            },
            {
              "slot": "1",
              "id": "sculk",
              "count": "64"
            },
            {
              "slot": "2",
              "id": "sculk",
              "count": "64"
            },
            {
              "slot": "3",
              "id": "sculk",
              "count": "64"
            },
            {
              "slot": "4",
              "id": "sculk",
              "count": "64"
            },
            {
              "slot": "5",
              "id": "sculk",
              "count": "64"
            },
            {
              "slot": "6",
              "id": "sculk",
              "count": "64"
            },
            {
              "slot": "7",
              "id": "sculk",
              "count": "64"
            },
            {
              "slot": "8",
              "id": "sculk",
              "count": "64"
            },
            {
              "slot": "9",
              "id": "sculk",
              "count": "64"
            },
            {
              "slot": "10",
              "id": "sculk",
              "count": "64"
            },
            {
              "slot": "11",
              "id": "sculk",
              "count": "64"
            },
            {
              "slot": "12",
              "id": "sculk",
              "count": "64"
            },
            {
              "slot": "13",
              "id": "sculk",
              "count": "64"
            },
            {
              "slot": "14",
              "id": "sculk",
              "count": "64"
            },
            {
              "slot": "15",
              "id": "sculk",
              "count": "64"
            },
            {
              "slot": "16",
              "id": "sculk",
              "count": "64"
            },
            {
              "slot": "17",
              "id": "sculk",
              "count": "64"
            },
            {
              "slot": "18",
              "id": "sculk",
              "count": "64"
            },
            {
              "slot": "19",
              "id": "sculk",
              "count": "64"
            },
            {
              "slot": "20",
              "id": "sculk",
              "count": "64"
            },
            {
              "slot": "21",
              "id": "sculk",
              "count": "64"
            },
            {
              "slot": "22",
              "id": "sculk",
              "count": "64"
            },
            {
              "slot": "23",
              "id": "sculk",
              "count": "64"
            },
            {
              "slot": "24",
              "id": "sculk",
              "count": "64"
            },
            {
              "slot": "25",
              "id": "sculk",
              "count": "64"
            },
            {
              "slot": "26",
              "id": "sculk",
              "count": "64"
            }
          ],
          "amount": 16,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "SCULK_SENSOR",
          "content": [],
          "amount": 4,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "SCULK_SHRIEKER",
          "content": [],
          "amount": 2,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "SHROOMLIGHT",
          "content": [],
          "amount": 16,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "POINTED_DRIPSTONE",
          "content": [],
          "amount": 2,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "AMETHYST_CLUSTER",
          "content": [],
          "amount": 2,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "YELLOW_SHULKER_BOX",
          "content": [
            {
              "slot": "0",
              "id": "blaze_rod",
              "count": "64"
            },
            {
              "slot": "1",
              "id": "blaze_rod",
              "count": "64"
            },
            {
              "slot": "2",
              "id": "blaze_rod",
              "count": "64"
            },
            {
              "slot": "3",
              "id": "blaze_rod",
              "count": "64"
            },
            {
              "slot": "4",
              "id": "blaze_rod",
              "count": "64"
            },
            {
              "slot": "5",
              "id": "blaze_rod",
              "count": "64"
            },
            {
              "slot": "6",
              "id": "blaze_rod",
              "count": "64"
            },
            {
              "slot": "7",
              "id": "blaze_rod",
              "count": "64"
            },
            {
              "slot": "8",
              "id": "blaze_rod",
              "count": "64"
            },
            {
              "slot": "9",
              "id": "blaze_rod",
              "count": "64"
            },
            {
              "slot": "10",
              "id": "blaze_rod",
              "count": "64"
            },
            {
              "slot": "11",
              "id": "blaze_rod",
              "count": "64"
            },
            {
              "slot": "12",
              "id": "blaze_rod",
              "count": "64"
            },
            {
              "slot": "13",
              "id": "blaze_rod",
              "count": "64"
            },
            {
              "slot": "14",
              "id": "blaze_rod",
              "count": "64"
            },
            {
              "slot": "15",
              "id": "blaze_rod",
              "count": "64"
            },
            {
              "slot": "16",
              "id": "blaze_rod",
              "count": "64"
            },
            {
              "slot": "17",
              "id": "blaze_rod",
              "count": "64"
            },
            {
              "slot": "18",
              "id": "blaze_rod",
              "count": "64"
            },
            {
              "slot": "19",
              "id": "blaze_rod",
              "count": "64"
            },
            {
              "slot": "20",
              "id": "blaze_rod",
              "count": "64"
            },
            {
              "slot": "21",
              "id": "blaze_rod",
              "count": "64"
            },
            {
              "slot": "22",
              "id": "blaze_rod",
              "count": "64"
            },
            {
              "slot": "23",
              "id": "blaze_rod",
              "count": "64"
            },
            {
              "slot": "24",
              "id": "blaze_rod",
              "count": "64"
            },
            {
              "slot": "25",
              "id": "blaze_rod",
              "count": "64"
            },
            {
              "slot": "26",
              "id": "blaze_rod",
              "count": "64"
            }
          ],
          "amount": 8,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "MUD_BRICKS",
          "content": [],
          "amount": 2,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "PURPLE_SHULKER_BOX",
          "content": [
            {
              "slot": "0",
              "id": "amethyst_cluster",
              "count": "64"
            },
            {
              "slot": "1",
              "id": "amethyst_cluster",
              "count": "64"
            },
            {
              "slot": "2",
              "id": "amethyst_cluster",
              "count": "64"
            },
            {
              "slot": "3",
              "id": "amethyst_cluster",
              "count": "64"
            },
            {
              "slot": "4",
              "id": "amethyst_cluster",
              "count": "64"
            },
            {
              "slot": "5",
              "id": "amethyst_cluster",
              "count": "64"
            },
            {
              "slot": "6",
              "id": "amethyst_cluster",
              "count": "64"
            },
            {
              "slot": "7",
              "id": "amethyst_cluster",
              "count": "64"
            },
            {
              "slot": "8",
              "id": "amethyst_cluster",
              "count": "64"
            },
            {
              "slot": "9",
              "id": "amethyst_cluster",
              "count": "64"
            },
            {
              "slot": "10",
              "id": "amethyst_cluster",
              "count": "64"
            },
            {
              "slot": "11",
              "id": "amethyst_cluster",
              "count": "64"
            },
            {
              "slot": "12",
              "id": "amethyst_cluster",
              "count": "64"
            },
            {
              "slot": "13",
              "id": "amethyst_cluster",
              "count": "64"
            },
            {
              "slot": "14",
              "id": "amethyst_cluster",
              "count": "64"
            },
            {
              "slot": "15",
              "id": "amethyst_cluster",
              "count": "64"
            },
            {
              "slot": "16",
              "id": "amethyst_cluster",
              "count": "64"
            },
            {
              "slot": "17",
              "id": "amethyst_cluster",
              "count": "64"
            },
            {
              "slot": "18",
              "id": "amethyst_cluster",
              "count": "64"
            },
            {
              "slot": "19",
              "id": "amethyst_cluster",
              "count": "64"
            },
            {
              "slot": "20",
              "id": "amethyst_cluster",
              "count": "64"
            },
            {
              "slot": "21",
              "id": "amethyst_cluster",
              "count": "64"
            },
            {
              "slot": "22",
              "id": "amethyst_cluster",
              "count": "64"
            },
            {
              "slot": "23",
              "id": "amethyst_cluster",
              "count": "64"
            },
            {
              "slot": "24",
              "id": "amethyst_cluster",
              "count": "64"
            },
            {
              "slot": "25",
              "id": "amethyst_cluster",
              "count": "64"
            },
            {
              "slot": "26",
              "id": "amethyst_cluster",
              "count": "64"
            }
          ],
          "amount": 64,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "COBWEB",
          "content": [],
          "amount": 1,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "GOLDEN_APPLE",
          "content": [],
          "amount": 2,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "MAGENTA_SHULKER_BOX",
          "content": [
            {
              "slot": "0",
              "id": "red_dye",
              "count": "64"
            },
            {
              "slot": "1",
              "id": "orange_dye",
              "count": "64"
            },
            {
              "slot": "2",
              "id": "yellow_dye",
              "count": "64"
            },
            {
              "slot": "3",
              "id": "lime_dye",
              "count": "64"
            },
            {
              "slot": "4",
              "id": "green_dye",
              "count": "64"
            },
            {
              "slot": "5",
              "id": "cyan_dye",
              "count": "64"
            },
            {
              "slot": "6",
              "id": "light_blue_dye",
              "count": "64"
            },
            {
              "slot": "7",
              "id": "blue_dye",
              "count": "64"
            },
            {
              "slot": "8",
              "id": "purple_dye",
              "count": "64"
            },
            {
              "slot": "9",
              "id": "magenta_dye",
              "count": "64"
            },
            {
              "slot": "10",
              "id": "pink_dye",
              "count": "64"
            },
            {
              "slot": "11",
              "id": "white_dye",
              "count": "64"
            },
            {
              "slot": "12",
              "id": "light_gray_dye",
              "count": "64"
            },
            {
              "slot": "13",
              "id": "gray_dye",
              "count": "64"
            },
            {
              "slot": "14",
              "id": "black_dye",
              "count": "64"
            },
            {
              "slot": "15",
              "id": "brown_dye",
              "count": "64"
            },
            {
              "slot": "16",
              "id": "feather",
              "count": "64"
            },
            {
              "slot": "17",
              "id": "book",
              "count": "64"
            },
            {
              "slot": "18",
              "id": "dark_oak_sign",
              "count": "16"
            },
            {
              "slot": "19",
              "id": "spruce_sign",
              "count": "16"
            },
            {
              "slot": "20",
              "id": "oak_sign",
              "count": "16"
            },
            {
              "slot": "21",
              "id": "birch_sign",
              "count": "16"
            },
            {
              "slot": "22",
              "id": "jungle_sign",
              "count": "16"
            },
            {
              "slot": "23",
              "id": "acacia_sign",
              "count": "16"
            },
            {
              "slot": "24",
              "id": "warped_sign",
              "count": "16"
            },
            {
              "slot": "25",
              "id": "glow_ink_sac",
              "count": "64"
            },
            {
              "slot": "26",
              "id": "ink_sac",
              "count": "64"
            }
          ],
          "amount": 48,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "RED_SHULKER_BOX",
          "content": [
            {
              "slot": "0",
              "id": "golden_apple",
              "count": "64"
            },
            {
              "slot": "1",
              "id": "golden_apple",
              "count": "64"
            },
            {
              "slot": "2",
              "id": "golden_apple",
              "count": "64"
            },
            {
              "slot": "3",
              "id": "golden_apple",
              "count": "64"
            },
            {
              "slot": "4",
              "id": "golden_apple",
              "count": "64"
            },
            {
              "slot": "5",
              "id": "golden_apple",
              "count": "64"
            },
            {
              "slot": "6",
              "id": "golden_apple",
              "count": "64"
            },
            {
              "slot": "7",
              "id": "golden_apple",
              "count": "64"
            },
            {
              "slot": "8",
              "id": "golden_apple",
              "count": "64"
            },
            {
              "slot": "9",
              "id": "golden_apple",
              "count": "64"
            },
            {
              "slot": "10",
              "id": "golden_apple",
              "count": "64"
            },
            {
              "slot": "11",
              "id": "golden_apple",
              "count": "64"
            },
            {
              "slot": "12",
              "id": "golden_apple",
              "count": "64"
            },
            {
              "slot": "13",
              "id": "golden_apple",
              "count": "64"
            },
            {
              "slot": "14",
              "id": "golden_apple",
              "count": "64"
            },
            {
              "slot": "15",
              "id": "golden_apple",
              "count": "64"
            },
            {
              "slot": "16",
              "id": "golden_apple",
              "count": "64"
            },
            {
              "slot": "17",
              "id": "golden_apple",
              "count": "64"
            },
            {
              "slot": "18",
              "id": "golden_apple",
              "count": "64"
            },
            {
              "slot": "19",
              "id": "golden_apple",
              "count": "64"
            },
            {
              "slot": "20",
              "id": "golden_apple",
              "count": "64"
            },
            {
              "slot": "21",
              "id": "golden_apple",
              "count": "64"
            },
            {
              "slot": "22",
              "id": "golden_apple",
              "count": "64"
            },
            {
              "slot": "23",
              "id": "golden_apple",
              "count": "64"
            },
            {
              "slot": "24",
              "id": "golden_apple",
              "count": "64"
            },
            {
              "slot": "25",
              "id": "golden_apple",
              "count": "64"
            },
            {
              "slot": "26",
              "id": "golden_apple",
              "count": "64"
            }
          ],
          "amount": 64,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        }
      ]
    },
    {
      "name": "SoftPanda3",
      "offers": [
        {
          "name": "WHITE_SHULKER_BOX",
          "content": [
            {
              "slot": "0",
              "id": "white_stained_glass_pane",
              "count": "1"
            },
            {
              "slot": "1",
              "id": "music_disc_wait",
              "count": "1"
            },
            {
              "slot": "2",
              "id": "white_stained_glass_pane",
              "count": "1"
            },
            {
              "slot": "3",
              "id": "music_disc_mall",
              "count": "1"
            },
            {
              "slot": "4",
              "id": "white_stained_glass_pane",
              "count": "1"
            },
            {
              "slot": "5",
              "id": "music_disc_far",
              "count": "1"
            },
            {
              "slot": "6",
              "id": "white_stained_glass_pane",
              "count": "1"
            },
            {
              "slot": "7",
              "id": "music_disc_mellohi",
              "count": "1"
            },
            {
              "slot": "8",
              "id": "white_stained_glass_pane",
              "count": "1"
            },
            {
              "slot": "9",
              "id": "music_disc_stal",
              "count": "1"
            },
            {
              "slot": "10",
              "id": "white_stained_glass_pane",
              "count": "1"
            },
            {
              "slot": "11",
              "id": "music_disc_strad",
              "count": "1"
            },
            {
              "slot": "12",
              "id": "white_stained_glass_pane",
              "count": "1"
            },
            {
              "slot": "13",
              "id": "jukebox",
              "count": "1"
            },
            {
              "slot": "14",
              "id": "white_stained_glass_pane",
              "count": "1"
            },
            {
              "slot": "15",
              "id": "music_disc_13",
              "count": "1"
            },
            {
              "slot": "16",
              "id": "white_stained_glass_pane",
              "count": "1"
            },
            {
              "slot": "17",
              "id": "music_disc_cat",
              "count": "1"
            },
            {
              "slot": "18",
              "id": "white_stained_glass_pane",
              "count": "1"
            },
            {
              "slot": "19",
              "id": "music_disc_blocks",
              "count": "1"
            },
            {
              "slot": "20",
              "id": "white_stained_glass_pane",
              "count": "1"
            },
            {
              "slot": "21",
              "id": "music_disc_ward",
              "count": "1"
            },
            {
              "slot": "22",
              "id": "white_stained_glass_pane",
              "count": "1"
            },
            {
              "slot": "23",
              "id": "music_disc_11",
              "count": "1"
            },
            {
              "slot": "24",
              "id": "white_stained_glass_pane",
              "count": "1"
            },
            {
              "slot": "25",
              "id": "music_disc_chirp",
              "count": "1"
            },
            {
              "slot": "26",
              "id": "white_stained_glass_pane",
              "count": "1"
            }
          ],
          "amount": 32,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "MUSIC_DISC_PIGSTEP",
          "content": [],
          "amount": 64,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "MUSIC_DISC_5",
          "content": [],
          "amount": 42,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "MUSIC_DISC_OTHERSIDE",
          "content": [],
          "amount": 22,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        }
      ]
    },
    {
      "name": "Blackirita",
      "offers": [
        {
          "name": "NETHER_WART",
          "content": [],
          "amount": 2,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "WRITTEN_BOOK",
          "content": [],
          "amount": 10,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "GRAY_SHULKER_BOX",
          "content": [
            {
              "slot": "0",
              "id": "splash_potion",
              "count": "1"
            },
            {
              "slot": "1",
              "id": "splash_potion",
              "count": "1"
            },
            {
              "slot": "2",
              "id": "splash_potion",
              "count": "1"
            },
            {
              "slot": "3",
              "id": "splash_potion",
              "count": "1"
            },
            {
              "slot": "4",
              "id": "splash_potion",
              "count": "1"
            },
            {
              "slot": "5",
              "id": "splash_potion",
              "count": "1"
            },
            {
              "slot": "6",
              "id": "splash_potion",
              "count": "1"
            },
            {
              "slot": "7",
              "id": "splash_potion",
              "count": "1"
            },
            {
              "slot": "8",
              "id": "splash_potion",
              "count": "1"
            },
            {
              "slot": "9",
              "id": "splash_potion",
              "count": "1"
            },
            {
              "slot": "10",
              "id": "splash_potion",
              "count": "1"
            },
            {
              "slot": "11",
              "id": "splash_potion",
              "count": "1"
            },
            {
              "slot": "12",
              "id": "splash_potion",
              "count": "1"
            },
            {
              "slot": "13",
              "id": "splash_potion",
              "count": "1"
            },
            {
              "slot": "14",
              "id": "splash_potion",
              "count": "1"
            },
            {
              "slot": "15",
              "id": "splash_potion",
              "count": "1"
            },
            {
              "slot": "16",
              "id": "splash_potion",
              "count": "1"
            },
            {
              "slot": "17",
              "id": "splash_potion",
              "count": "1"
            },
            {
              "slot": "18",
              "id": "splash_potion",
              "count": "1"
            },
            {
              "slot": "19",
              "id": "splash_potion",
              "count": "1"
            },
            {
              "slot": "20",
              "id": "splash_potion",
              "count": "1"
            },
            {
              "slot": "21",
              "id": "splash_potion",
              "count": "1"
            },
            {
              "slot": "22",
              "id": "splash_potion",
              "count": "1"
            },
            {
              "slot": "23",
              "id": "splash_potion",
              "count": "1"
            },
            {
              "slot": "24",
              "id": "splash_potion",
              "count": "1"
            },
            {
              "slot": "25",
              "id": "splash_potion",
              "count": "1"
            },
            {
              "slot": "26",
              "id": "splash_potion",
              "count": "1"
            }
          ],
          "amount": 12,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "PURPLE_SHULKER_BOX",
          "content": [
            {
              "slot": "0",
              "id": "pufferfish",
              "count": "1"
            },
            {
              "slot": "1",
              "id": "potion",
              "count": "1"
            },
            {
              "slot": "2",
              "id": "potion",
              "count": "1"
            },
            {
              "slot": "3",
              "id": "potion",
              "count": "1"
            },
            {
              "slot": "4",
              "id": "ghast_tear",
              "count": "1"
            },
            {
              "slot": "5",
              "id": "potion",
              "count": "1"
            },
            {
              "slot": "6",
              "id": "potion",
              "count": "1"
            },
            {
              "slot": "7",
              "id": "potion",
              "count": "1"
            },
            {
              "slot": "8",
              "id": "pufferfish",
              "count": "1"
            },
            {
              "slot": "9",
              "id": "pufferfish",
              "count": "1"
            },
            {
              "slot": "10",
              "id": "rabbit_foot",
              "count": "2"
            },
            {
              "slot": "11",
              "id": "potion",
              "count": "1"
            },
            {
              "slot": "12",
              "id": "ghast_tear",
              "count": "1"
            },
            {
              "slot": "13",
              "id": "brewing_stand",
              "count": "1"
            },
            {
              "slot": "14",
              "id": "ghast_tear",
              "count": "1"
            },
            {
              "slot": "15",
              "id": "potion",
              "count": "1"
            },
            {
              "slot": "16",
              "id": "rabbit_foot",
              "count": "2"
            },
            {
              "slot": "17",
              "id": "pufferfish",
              "count": "1"
            },
            {
              "slot": "18",
              "id": "pufferfish",
              "count": "1"
            },
            {
              "slot": "19",
              "id": "potion",
              "count": "1"
            },
            {
              "slot": "20",
              "id": "potion",
              "count": "1"
            },
            {
              "slot": "21",
              "id": "potion",
              "count": "1"
            },
            {
              "slot": "22",
              "id": "ghast_tear",
              "count": "1"
            },
            {
              "slot": "23",
              "id": "potion",
              "count": "1"
            },
            {
              "slot": "24",
              "id": "potion",
              "count": "1"
            },
            {
              "slot": "25",
              "id": "potion",
              "count": "1"
            },
            {
              "slot": "26",
              "id": "pufferfish",
              "count": "1"
            }
          ],
          "amount": 16,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "ORANGE_SHULKER_BOX",
          "content": [
            {
              "slot": "0",
              "id": "potion",
              "count": "1"
            },
            {
              "slot": "1",
              "id": "potion",
              "count": "1"
            },
            {
              "slot": "2",
              "id": "potion",
              "count": "1"
            },
            {
              "slot": "3",
              "id": "potion",
              "count": "1"
            },
            {
              "slot": "4",
              "id": "potion",
              "count": "1"
            },
            {
              "slot": "5",
              "id": "potion",
              "count": "1"
            },
            {
              "slot": "6",
              "id": "potion",
              "count": "1"
            },
            {
              "slot": "7",
              "id": "potion",
              "count": "1"
            },
            {
              "slot": "8",
              "id": "potion",
              "count": "1"
            },
            {
              "slot": "9",
              "id": "potion",
              "count": "1"
            },
            {
              "slot": "10",
              "id": "potion",
              "count": "1"
            },
            {
              "slot": "11",
              "id": "potion",
              "count": "1"
            },
            {
              "slot": "12",
              "id": "potion",
              "count": "1"
            },
            {
              "slot": "13",
              "id": "potion",
              "count": "1"
            },
            {
              "slot": "14",
              "id": "potion",
              "count": "1"
            },
            {
              "slot": "15",
              "id": "potion",
              "count": "1"
            },
            {
              "slot": "16",
              "id": "potion",
              "count": "1"
            },
            {
              "slot": "17",
              "id": "potion",
              "count": "1"
            },
            {
              "slot": "18",
              "id": "potion",
              "count": "1"
            },
            {
              "slot": "19",
              "id": "potion",
              "count": "1"
            },
            {
              "slot": "20",
              "id": "potion",
              "count": "1"
            },
            {
              "slot": "21",
              "id": "potion",
              "count": "1"
            },
            {
              "slot": "22",
              "id": "potion",
              "count": "1"
            },
            {
              "slot": "23",
              "id": "potion",
              "count": "1"
            },
            {
              "slot": "24",
              "id": "potion",
              "count": "1"
            },
            {
              "slot": "25",
              "id": "potion",
              "count": "1"
            },
            {
              "slot": "26",
              "id": "potion",
              "count": "1"
            }
          ],
          "amount": 12,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "BLUE_SHULKER_BOX",
          "content": [
            {
              "slot": "0",
              "id": "potion",
              "count": "1"
            },
            {
              "slot": "1",
              "id": "potion",
              "count": "1"
            },
            {
              "slot": "2",
              "id": "potion",
              "count": "1"
            },
            {
              "slot": "3",
              "id": "potion",
              "count": "1"
            },
            {
              "slot": "4",
              "id": "potion",
              "count": "1"
            },
            {
              "slot": "5",
              "id": "potion",
              "count": "1"
            },
            {
              "slot": "6",
              "id": "potion",
              "count": "1"
            },
            {
              "slot": "7",
              "id": "potion",
              "count": "1"
            },
            {
              "slot": "8",
              "id": "potion",
              "count": "1"
            },
            {
              "slot": "9",
              "id": "potion",
              "count": "1"
            },
            {
              "slot": "10",
              "id": "potion",
              "count": "1"
            },
            {
              "slot": "11",
              "id": "potion",
              "count": "1"
            },
            {
              "slot": "12",
              "id": "potion",
              "count": "1"
            },
            {
              "slot": "13",
              "id": "potion",
              "count": "1"
            },
            {
              "slot": "14",
              "id": "potion",
              "count": "1"
            },
            {
              "slot": "15",
              "id": "potion",
              "count": "1"
            },
            {
              "slot": "16",
              "id": "potion",
              "count": "1"
            },
            {
              "slot": "17",
              "id": "potion",
              "count": "1"
            },
            {
              "slot": "18",
              "id": "potion",
              "count": "1"
            },
            {
              "slot": "19",
              "id": "potion",
              "count": "1"
            },
            {
              "slot": "20",
              "id": "potion",
              "count": "1"
            },
            {
              "slot": "21",
              "id": "potion",
              "count": "1"
            },
            {
              "slot": "22",
              "id": "potion",
              "count": "1"
            },
            {
              "slot": "23",
              "id": "potion",
              "count": "1"
            },
            {
              "slot": "24",
              "id": "potion",
              "count": "1"
            },
            {
              "slot": "25",
              "id": "potion",
              "count": "1"
            },
            {
              "slot": "26",
              "id": "potion",
              "count": "1"
            }
          ],
          "amount": 12,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "ORANGE_SHULKER_BOX",
          "content": [
            {
              "slot": "12",
              "id": "splash_potion",
              "count": "1"
            },
            {
              "slot": "13",
              "id": "splash_potion",
              "count": "1"
            },
            {
              "slot": "14",
              "id": "splash_potion",
              "count": "1"
            }
          ],
          "amount": 1,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "ORANGE_SHULKER_BOX",
          "content": [
            {
              "slot": "12",
              "id": "potion",
              "count": "1"
            },
            {
              "slot": "13",
              "id": "potion",
              "count": "1"
            },
            {
              "slot": "14",
              "id": "potion",
              "count": "1"
            }
          ],
          "amount": 1,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "BLUE_SHULKER_BOX",
          "content": [
            {
              "slot": "12",
              "id": "potion",
              "count": "1"
            },
            {
              "slot": "13",
              "id": "potion",
              "count": "1"
            },
            {
              "slot": "14",
              "id": "potion",
              "count": "1"
            }
          ],
          "amount": 1,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "MAGENTA_SHULKER_BOX",
          "content": [
            {
              "slot": "12",
              "id": "potion",
              "count": "1"
            },
            {
              "slot": "13",
              "id": "potion",
              "count": "1"
            },
            {
              "slot": "14",
              "id": "potion",
              "count": "1"
            }
          ],
          "amount": 1,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "LIGHT_BLUE_SHULKER_BOX",
          "content": [
            {
              "slot": "12",
              "id": "potion",
              "count": "1"
            },
            {
              "slot": "13",
              "id": "potion",
              "count": "1"
            },
            {
              "slot": "14",
              "id": "potion",
              "count": "1"
            }
          ],
          "amount": 1,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "CYAN_SHULKER_BOX",
          "content": [
            {
              "slot": "12",
              "id": "potion",
              "count": "1"
            },
            {
              "slot": "13",
              "id": "potion",
              "count": "1"
            },
            {
              "slot": "14",
              "id": "potion",
              "count": "1"
            }
          ],
          "amount": 1,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        }
      ]
    },
    {
      "name": "Niksa_Viento",
      "offers": [
        {
          "name": "VINE",
          "content": [],
          "amount": 2,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "HANGING_ROOTS",
          "content": [],
          "amount": 2,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "GLOW_BERRIES",
          "content": [],
          "amount": 2,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "BIG_DRIPLEAF",
          "content": [],
          "amount": 2,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "BLUE_ORCHID",
          "content": [],
          "amount": 2,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "RED_TULIP",
          "content": [],
          "amount": 2,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "ORANGE_TULIP",
          "content": [],
          "amount": 2,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "WHITE_TULIP",
          "content": [],
          "amount": 2,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "PINK_TULIP",
          "content": [],
          "amount": 2,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "LILY_OF_THE_VALLEY",
          "content": [],
          "amount": 2,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "ALLIUM",
          "content": [],
          "amount": 2,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "LILY_PAD",
          "content": [],
          "amount": 2,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "DEAD_BUSH",
          "content": [],
          "amount": 2,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "CORNFLOWER",
          "content": [],
          "amount": 2,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "CRIMSON_FUNGUS",
          "content": [],
          "amount": 1,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "WARPED_FUNGUS",
          "content": [],
          "amount": 1,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "GLOW_LICHEN",
          "content": [],
          "amount": 2,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "MOSS_BLOCK",
          "content": [],
          "amount": 4,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "FLOWER_POT",
          "content": [],
          "amount": 1,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "CRIMSON_ROOTS",
          "content": [],
          "amount": 2,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "BAMBOO",
          "content": [],
          "amount": 2,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "CACTUS",
          "content": [],
          "amount": 2,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "SCULK_VEIN",
          "content": [],
          "amount": 2,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "ROSE_BUSH",
          "content": [],
          "amount": 2,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "PEONY",
          "content": [],
          "amount": 2,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "SWEET_BERRIES",
          "content": [],
          "amount": 2,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "LIGHT_BLUE_SHULKER_BOX",
          "content": [
            {
              "slot": "0",
              "id": "tube_coral_block",
              "count": "64"
            },
            {
              "slot": "1",
              "id": "brain_coral_block",
              "count": "64"
            },
            {
              "slot": "2",
              "id": "bubble_coral_block",
              "count": "64"
            },
            {
              "slot": "3",
              "id": "fire_coral_block",
              "count": "64"
            },
            {
              "slot": "4",
              "id": "horn_coral_block",
              "count": "64"
            },
            {
              "slot": "5",
              "id": "sea_pickle",
              "count": "64"
            },
            {
              "slot": "6",
              "id": "sea_pickle",
              "count": "64"
            },
            {
              "slot": "7",
              "id": "tube_coral",
              "count": "64"
            },
            {
              "slot": "8",
              "id": "tube_coral",
              "count": "64"
            },
            {
              "slot": "9",
              "id": "brain_coral",
              "count": "64"
            },
            {
              "slot": "10",
              "id": "brain_coral",
              "count": "64"
            },
            {
              "slot": "11",
              "id": "bubble_coral",
              "count": "64"
            },
            {
              "slot": "12",
              "id": "bubble_coral",
              "count": "64"
            },
            {
              "slot": "13",
              "id": "fire_coral",
              "count": "64"
            },
            {
              "slot": "14",
              "id": "fire_coral",
              "count": "64"
            },
            {
              "slot": "15",
              "id": "horn_coral",
              "count": "64"
            },
            {
              "slot": "16",
              "id": "horn_coral",
              "count": "64"
            },
            {
              "slot": "17",
              "id": "tube_coral_fan",
              "count": "64"
            },
            {
              "slot": "18",
              "id": "tube_coral_fan",
              "count": "64"
            },
            {
              "slot": "19",
              "id": "brain_coral_fan",
              "count": "64"
            },
            {
              "slot": "20",
              "id": "brain_coral_fan",
              "count": "64"
            },
            {
              "slot": "21",
              "id": "bubble_coral_fan",
              "count": "64"
            },
            {
              "slot": "22",
              "id": "bubble_coral_fan",
              "count": "64"
            },
            {
              "slot": "23",
              "id": "fire_coral_fan",
              "count": "64"
            },
            {
              "slot": "24",
              "id": "fire_coral_fan",
              "count": "64"
            },
            {
              "slot": "25",
              "id": "horn_coral_fan",
              "count": "64"
            },
            {
              "slot": "26",
              "id": "horn_coral_fan",
              "count": "64"
            }
          ],
          "amount": 64,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "BROWN_SHULKER_BOX",
          "content": [
            {
              "slot": "0",
              "id": "wheat_seeds",
              "count": "64"
            },
            {
              "slot": "1",
              "id": "wheat_seeds",
              "count": "64"
            },
            {
              "slot": "2",
              "id": "wheat_seeds",
              "count": "64"
            },
            {
              "slot": "3",
              "id": "cocoa_beans",
              "count": "64"
            },
            {
              "slot": "4",
              "id": "pumpkin_seeds",
              "count": "64"
            },
            {
              "slot": "5",
              "id": "melon_seeds",
              "count": "64"
            },
            {
              "slot": "6",
              "id": "nether_wart",
              "count": "64"
            },
            {
              "slot": "7",
              "id": "nether_wart",
              "count": "64"
            },
            {
              "slot": "8",
              "id": "nether_wart",
              "count": "64"
            },
            {
              "slot": "9",
              "id": "beetroot_seeds",
              "count": "64"
            },
            {
              "slot": "10",
              "id": "beetroot_seeds",
              "count": "64"
            },
            {
              "slot": "11",
              "id": "beetroot_seeds",
              "count": "64"
            },
            {
              "slot": "12",
              "id": "carrot",
              "count": "64"
            },
            {
              "slot": "13",
              "id": "carrot",
              "count": "64"
            },
            {
              "slot": "14",
              "id": "carrot",
              "count": "64"
            },
            {
              "slot": "15",
              "id": "potato",
              "count": "64"
            },
            {
              "slot": "16",
              "id": "potato",
              "count": "64"
            },
            {
              "slot": "17",
              "id": "potato",
              "count": "64"
            },
            {
              "slot": "18",
              "id": "bone",
              "count": "64"
            },
            {
              "slot": "19",
              "id": "bone",
              "count": "64"
            },
            {
              "slot": "20",
              "id": "bone",
              "count": "64"
            },
            {
              "slot": "21",
              "id": "bone",
              "count": "64"
            },
            {
              "slot": "22",
              "id": "bone",
              "count": "64"
            },
            {
              "slot": "23",
              "id": "bone",
              "count": "64"
            },
            {
              "slot": "24",
              "id": "bone",
              "count": "64"
            },
            {
              "slot": "25",
              "id": "bone",
              "count": "64"
            },
            {
              "slot": "26",
              "id": "bone",
              "count": "64"
            }
          ],
          "amount": 12,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "MANGROVE_ROOTS",
          "content": [],
          "amount": 2,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "GRASS",
          "content": [],
          "amount": 2,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "FERN",
          "content": [],
          "amount": 2,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "WITHER_ROSE",
          "content": [],
          "amount": 1,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "BROWN_MUSHROOM",
          "content": [],
          "amount": 2,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "WARPED_ROOTS",
          "content": [],
          "amount": 2,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "WEEPING_VINES",
          "content": [],
          "amount": 2,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "TWISTING_VINES",
          "content": [],
          "amount": 2,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "CHORUS_FLOWER",
          "content": [],
          "amount": 3,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "SUNFLOWER",
          "content": [],
          "amount": 2,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "LILAC",
          "content": [],
          "amount": 2,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "WHITE_SHULKER_BOX",
          "content": [
            {
              "slot": "0",
              "id": "string",
              "count": "64"
            },
            {
              "slot": "1",
              "id": "string",
              "count": "64"
            },
            {
              "slot": "2",
              "id": "string",
              "count": "64"
            },
            {
              "slot": "3",
              "id": "string",
              "count": "64"
            },
            {
              "slot": "4",
              "id": "string",
              "count": "64"
            },
            {
              "slot": "5",
              "id": "string",
              "count": "64"
            },
            {
              "slot": "6",
              "id": "string",
              "count": "64"
            },
            {
              "slot": "7",
              "id": "string",
              "count": "64"
            },
            {
              "slot": "8",
              "id": "string",
              "count": "64"
            },
            {
              "slot": "9",
              "id": "string",
              "count": "64"
            },
            {
              "slot": "10",
              "id": "string",
              "count": "64"
            },
            {
              "slot": "11",
              "id": "string",
              "count": "64"
            },
            {
              "slot": "12",
              "id": "string",
              "count": "64"
            },
            {
              "slot": "13",
              "id": "string",
              "count": "64"
            },
            {
              "slot": "14",
              "id": "string",
              "count": "64"
            },
            {
              "slot": "15",
              "id": "string",
              "count": "64"
            },
            {
              "slot": "16",
              "id": "string",
              "count": "64"
            },
            {
              "slot": "17",
              "id": "string",
              "count": "64"
            },
            {
              "slot": "18",
              "id": "string",
              "count": "64"
            },
            {
              "slot": "19",
              "id": "string",
              "count": "64"
            },
            {
              "slot": "20",
              "id": "string",
              "count": "64"
            },
            {
              "slot": "21",
              "id": "string",
              "count": "64"
            },
            {
              "slot": "22",
              "id": "string",
              "count": "64"
            },
            {
              "slot": "23",
              "id": "string",
              "count": "64"
            },
            {
              "slot": "24",
              "id": "string",
              "count": "64"
            },
            {
              "slot": "25",
              "id": "string",
              "count": "64"
            },
            {
              "slot": "26",
              "id": "string",
              "count": "64"
            }
          ],
          "amount": 8,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "STRING",
          "content": [],
          "amount": 1,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        }
      ]
    },
    {
      "name": "Cytrynid",
      "offers": [
        {
          "name": "GRAY_SHULKER_BOX",
          "content": [
            {
              "slot": "0",
              "id": "deepslate",
              "count": "64"
            },
            {
              "slot": "1",
              "id": "deepslate",
              "count": "64"
            },
            {
              "slot": "2",
              "id": "deepslate",
              "count": "64"
            },
            {
              "slot": "3",
              "id": "deepslate",
              "count": "64"
            },
            {
              "slot": "4",
              "id": "deepslate",
              "count": "64"
            },
            {
              "slot": "5",
              "id": "deepslate",
              "count": "64"
            },
            {
              "slot": "6",
              "id": "deepslate",
              "count": "64"
            },
            {
              "slot": "7",
              "id": "deepslate",
              "count": "64"
            },
            {
              "slot": "8",
              "id": "deepslate",
              "count": "64"
            },
            {
              "slot": "9",
              "id": "deepslate",
              "count": "64"
            },
            {
              "slot": "10",
              "id": "deepslate",
              "count": "64"
            },
            {
              "slot": "11",
              "id": "deepslate",
              "count": "64"
            },
            {
              "slot": "12",
              "id": "deepslate",
              "count": "64"
            },
            {
              "slot": "13",
              "id": "deepslate",
              "count": "64"
            },
            {
              "slot": "14",
              "id": "deepslate",
              "count": "64"
            },
            {
              "slot": "15",
              "id": "deepslate",
              "count": "64"
            },
            {
              "slot": "16",
              "id": "deepslate",
              "count": "64"
            },
            {
              "slot": "17",
              "id": "deepslate",
              "count": "64"
            },
            {
              "slot": "18",
              "id": "deepslate",
              "count": "64"
            },
            {
              "slot": "19",
              "id": "deepslate",
              "count": "64"
            },
            {
              "slot": "20",
              "id": "deepslate",
              "count": "64"
            },
            {
              "slot": "21",
              "id": "deepslate",
              "count": "64"
            },
            {
              "slot": "22",
              "id": "deepslate",
              "count": "64"
            },
            {
              "slot": "23",
              "id": "deepslate",
              "count": "64"
            },
            {
              "slot": "24",
              "id": "deepslate",
              "count": "64"
            },
            {
              "slot": "25",
              "id": "deepslate",
              "count": "64"
            },
            {
              "slot": "26",
              "id": "deepslate",
              "count": "64"
            }
          ],
          "amount": 8,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "YELLOW_SHULKER_BOX",
          "content": [
            {
              "slot": "0",
              "id": "red_sand",
              "count": "64"
            },
            {
              "slot": "1",
              "id": "red_sand",
              "count": "64"
            },
            {
              "slot": "2",
              "id": "red_sand",
              "count": "64"
            },
            {
              "slot": "3",
              "id": "red_sand",
              "count": "64"
            },
            {
              "slot": "4",
              "id": "red_sand",
              "count": "64"
            },
            {
              "slot": "5",
              "id": "red_sand",
              "count": "64"
            },
            {
              "slot": "6",
              "id": "red_sand",
              "count": "64"
            },
            {
              "slot": "7",
              "id": "red_sand",
              "count": "64"
            },
            {
              "slot": "8",
              "id": "red_sand",
              "count": "64"
            },
            {
              "slot": "9",
              "id": "red_sand",
              "count": "64"
            },
            {
              "slot": "10",
              "id": "red_sand",
              "count": "64"
            },
            {
              "slot": "11",
              "id": "red_sand",
              "count": "64"
            },
            {
              "slot": "12",
              "id": "red_sand",
              "count": "64"
            },
            {
              "slot": "13",
              "id": "red_sand",
              "count": "64"
            },
            {
              "slot": "14",
              "id": "red_sand",
              "count": "64"
            },
            {
              "slot": "15",
              "id": "red_sand",
              "count": "64"
            },
            {
              "slot": "16",
              "id": "red_sand",
              "count": "64"
            },
            {
              "slot": "17",
              "id": "red_sand",
              "count": "64"
            },
            {
              "slot": "18",
              "id": "red_sand",
              "count": "64"
            },
            {
              "slot": "19",
              "id": "red_sand",
              "count": "64"
            },
            {
              "slot": "20",
              "id": "red_sand",
              "count": "64"
            },
            {
              "slot": "21",
              "id": "red_sand",
              "count": "64"
            },
            {
              "slot": "22",
              "id": "red_sand",
              "count": "64"
            },
            {
              "slot": "23",
              "id": "red_sand",
              "count": "64"
            },
            {
              "slot": "24",
              "id": "red_sand",
              "count": "64"
            },
            {
              "slot": "25",
              "id": "red_sand",
              "count": "64"
            },
            {
              "slot": "26",
              "id": "red_sand",
              "count": "64"
            }
          ],
          "amount": 12,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "YELLOW_SHULKER_BOX",
          "content": [
            {
              "slot": "0",
              "id": "red_sandstone",
              "count": "64"
            },
            {
              "slot": "1",
              "id": "red_sandstone",
              "count": "64"
            },
            {
              "slot": "2",
              "id": "red_sandstone",
              "count": "64"
            },
            {
              "slot": "3",
              "id": "red_sandstone",
              "count": "64"
            },
            {
              "slot": "4",
              "id": "red_sandstone",
              "count": "64"
            },
            {
              "slot": "5",
              "id": "red_sandstone",
              "count": "64"
            },
            {
              "slot": "6",
              "id": "red_sandstone",
              "count": "64"
            },
            {
              "slot": "7",
              "id": "red_sandstone",
              "count": "64"
            },
            {
              "slot": "8",
              "id": "red_sandstone",
              "count": "64"
            },
            {
              "slot": "9",
              "id": "red_sandstone",
              "count": "64"
            },
            {
              "slot": "10",
              "id": "red_sandstone",
              "count": "64"
            },
            {
              "slot": "11",
              "id": "red_sandstone",
              "count": "64"
            },
            {
              "slot": "12",
              "id": "red_sandstone",
              "count": "64"
            },
            {
              "slot": "13",
              "id": "red_sandstone",
              "count": "64"
            },
            {
              "slot": "14",
              "id": "red_sandstone",
              "count": "64"
            },
            {
              "slot": "15",
              "id": "red_sandstone",
              "count": "64"
            },
            {
              "slot": "16",
              "id": "red_sandstone",
              "count": "64"
            },
            {
              "slot": "17",
              "id": "red_sandstone",
              "count": "64"
            },
            {
              "slot": "18",
              "id": "red_sandstone",
              "count": "64"
            },
            {
              "slot": "19",
              "id": "red_sandstone",
              "count": "64"
            },
            {
              "slot": "20",
              "id": "red_sandstone",
              "count": "64"
            },
            {
              "slot": "21",
              "id": "red_sandstone",
              "count": "64"
            },
            {
              "slot": "22",
              "id": "red_sandstone",
              "count": "64"
            },
            {
              "slot": "23",
              "id": "red_sandstone",
              "count": "64"
            },
            {
              "slot": "24",
              "id": "red_sandstone",
              "count": "64"
            },
            {
              "slot": "25",
              "id": "red_sandstone",
              "count": "64"
            },
            {
              "slot": "26",
              "id": "red_sandstone",
              "count": "64"
            }
          ],
          "amount": 50,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "LIGHT_GRAY_SHULKER_BOX",
          "content": [
            {
              "slot": "0",
              "id": "mud",
              "count": "64"
            },
            {
              "slot": "1",
              "id": "mud",
              "count": "64"
            },
            {
              "slot": "2",
              "id": "mud",
              "count": "64"
            },
            {
              "slot": "3",
              "id": "mud",
              "count": "64"
            },
            {
              "slot": "4",
              "id": "mud",
              "count": "64"
            },
            {
              "slot": "5",
              "id": "mud",
              "count": "64"
            },
            {
              "slot": "6",
              "id": "mud",
              "count": "64"
            },
            {
              "slot": "7",
              "id": "mud",
              "count": "64"
            },
            {
              "slot": "8",
              "id": "mud",
              "count": "64"
            },
            {
              "slot": "9",
              "id": "mud",
              "count": "64"
            },
            {
              "slot": "10",
              "id": "mud",
              "count": "64"
            },
            {
              "slot": "11",
              "id": "mud",
              "count": "64"
            },
            {
              "slot": "12",
              "id": "mud",
              "count": "64"
            },
            {
              "slot": "13",
              "id": "mud",
              "count": "64"
            },
            {
              "slot": "14",
              "id": "mud",
              "count": "64"
            },
            {
              "slot": "15",
              "id": "mud",
              "count": "64"
            },
            {
              "slot": "16",
              "id": "mud",
              "count": "64"
            },
            {
              "slot": "17",
              "id": "mud",
              "count": "64"
            },
            {
              "slot": "18",
              "id": "mud",
              "count": "64"
            },
            {
              "slot": "19",
              "id": "mud",
              "count": "64"
            },
            {
              "slot": "20",
              "id": "mud",
              "count": "64"
            },
            {
              "slot": "21",
              "id": "mud",
              "count": "64"
            },
            {
              "slot": "22",
              "id": "mud",
              "count": "64"
            },
            {
              "slot": "23",
              "id": "mud",
              "count": "64"
            },
            {
              "slot": "24",
              "id": "mud",
              "count": "64"
            },
            {
              "slot": "25",
              "id": "mud",
              "count": "64"
            },
            {
              "slot": "26",
              "id": "mud",
              "count": "64"
            }
          ],
          "amount": 8,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "MUDDY_MANGROVE_ROOTS",
          "content": [],
          "amount": 2,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "MANGROVE_ROOTS",
          "content": [],
          "amount": 2,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        }
      ]
    },
    {
      "name": "_Kerubifi_",
      "offers": [
        {
          "name": "NETHERITE_INGOT",
          "content": [],
          "amount": 12,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "ENCHANTED_BOOK",
          "content": [],
          "amount": 12,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "SHIELD",
          "content": [
            {
              "enchants": {
                "MENDING": 1,
                "DURABILITY": 3
              }
            }
          ],
          "amount": 10,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "DIAMOND_HELMET",
          "content": [
            {
              "enchants": {
                "WATER_WORKER": 1,
                "MENDING": 1,
                "PROTECTION_ENVIRONMENTAL": 4,
                "OXYGEN": 3,
                "DURABILITY": 3
              }
            }
          ],
          "amount": 17,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "DIAMOND_HELMET",
          "content": [
            {
              "enchants": {
                "WATER_WORKER": 1,
                "MENDING": 1,
                "PROTECTION_ENVIRONMENTAL": 4,
                "OXYGEN": 3,
                "THORNS": 3,
                "DURABILITY": 3
              }
            }
          ],
          "amount": 19,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "TURTLE_HELMET",
          "content": [
            {
              "enchants": {
                "WATER_WORKER": 1,
                "MENDING": 1,
                "PROTECTION_ENVIRONMENTAL": 4,
                "OXYGEN": 3,
                "DURABILITY": 3
              }
            }
          ],
          "amount": 17,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "TURTLE_HELMET",
          "content": [
            {
              "enchants": {
                "WATER_WORKER": 1,
                "MENDING": 1,
                "PROTECTION_ENVIRONMENTAL": 4,
                "OXYGEN": 3,
                "THORNS": 3,
                "DURABILITY": 3
              }
            }
          ],
          "amount": 19,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "DIAMOND_CHESTPLATE",
          "content": [
            {
              "enchants": {
                "MENDING": 1,
                "PROTECTION_ENVIRONMENTAL": 4,
                "DURABILITY": 3
              }
            }
          ],
          "amount": 13,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "DIAMOND_CHESTPLATE",
          "content": [
            {
              "enchants": {
                "MENDING": 1,
                "PROTECTION_ENVIRONMENTAL": 4,
                "THORNS": 3,
                "DURABILITY": 3
              }
            }
          ],
          "amount": 15,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "DIAMOND_LEGGINGS",
          "content": [
            {
              "enchants": {
                "MENDING": 1,
                "PROTECTION_ENVIRONMENTAL": 4,
                "DURABILITY": 3
              }
            }
          ],
          "amount": 13,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "DIAMOND_LEGGINGS",
          "content": [
            {
              "enchants": {
                "MENDING": 1,
                "PROTECTION_ENVIRONMENTAL": 4,
                "THORNS": 3,
                "DURABILITY": 3
              }
            }
          ],
          "amount": 15,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "DIAMOND_BOOTS",
          "content": [
            {
              "enchants": {
                "PROTECTION_FALL": 4,
                "FROST_WALKER": 2,
                "MENDING": 1,
                "PROTECTION_ENVIRONMENTAL": 4,
                "SOUL_SPEED": 3,
                "DURABILITY": 3
              }
            }
          ],
          "amount": 17,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "DIAMOND_BOOTS",
          "content": [
            {
              "enchants": {
                "PROTECTION_FALL": 4,
                "FROST_WALKER": 2,
                "MENDING": 1,
                "PROTECTION_ENVIRONMENTAL": 4,
                "SOUL_SPEED": 3,
                "THORNS": 3,
                "DURABILITY": 3
              }
            }
          ],
          "amount": 19,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "DIAMOND_BOOTS",
          "content": [
            {
              "enchants": {
                "DEPTH_STRIDER": 3,
                "PROTECTION_FALL": 4,
                "MENDING": 1,
                "PROTECTION_ENVIRONMENTAL": 4,
                "SOUL_SPEED": 3,
                "DURABILITY": 3
              }
            }
          ],
          "amount": 17,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "DIAMOND_BOOTS",
          "content": [
            {
              "enchants": {
                "DEPTH_STRIDER": 3,
                "PROTECTION_FALL": 4,
                "MENDING": 1,
                "PROTECTION_ENVIRONMENTAL": 4,
                "SOUL_SPEED": 3,
                "THORNS": 3,
                "DURABILITY": 3
              }
            }
          ],
          "amount": 19,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        }
      ]
    },
    {
      "name": "Blackirita",
      "offers": [
        {
          "name": "TOTEM_OF_UNDYING",
          "content": [],
          "amount": 1,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "YELLOW_SHULKER_BOX",
          "content": [
            {
              "slot": "0",
              "id": "totem_of_undying",
              "count": "1"
            },
            {
              "slot": "1",
              "id": "totem_of_undying",
              "count": "1"
            },
            {
              "slot": "2",
              "id": "totem_of_undying",
              "count": "1"
            },
            {
              "slot": "3",
              "id": "totem_of_undying",
              "count": "1"
            },
            {
              "slot": "4",
              "id": "totem_of_undying",
              "count": "1"
            },
            {
              "slot": "5",
              "id": "totem_of_undying",
              "count": "1"
            },
            {
              "slot": "6",
              "id": "totem_of_undying",
              "count": "1"
            },
            {
              "slot": "7",
              "id": "totem_of_undying",
              "count": "1"
            },
            {
              "slot": "8",
              "id": "totem_of_undying",
              "count": "1"
            },
            {
              "slot": "9",
              "id": "totem_of_undying",
              "count": "1"
            },
            {
              "slot": "10",
              "id": "totem_of_undying",
              "count": "1"
            },
            {
              "slot": "11",
              "id": "totem_of_undying",
              "count": "1"
            },
            {
              "slot": "12",
              "id": "totem_of_undying",
              "count": "1"
            },
            {
              "slot": "13",
              "id": "totem_of_undying",
              "count": "1"
            },
            {
              "slot": "14",
              "id": "totem_of_undying",
              "count": "1"
            },
            {
              "slot": "15",
              "id": "totem_of_undying",
              "count": "1"
            },
            {
              "slot": "16",
              "id": "totem_of_undying",
              "count": "1"
            },
            {
              "slot": "17",
              "id": "totem_of_undying",
              "count": "1"
            },
            {
              "slot": "18",
              "id": "totem_of_undying",
              "count": "1"
            },
            {
              "slot": "19",
              "id": "totem_of_undying",
              "count": "1"
            },
            {
              "slot": "20",
              "id": "totem_of_undying",
              "count": "1"
            },
            {
              "slot": "21",
              "id": "totem_of_undying",
              "count": "1"
            },
            {
              "slot": "22",
              "id": "totem_of_undying",
              "count": "1"
            },
            {
              "slot": "23",
              "id": "totem_of_undying",
              "count": "1"
            },
            {
              "slot": "24",
              "id": "totem_of_undying",
              "count": "1"
            },
            {
              "slot": "25",
              "id": "totem_of_undying",
              "count": "1"
            },
            {
              "slot": "26",
              "id": "totem_of_undying",
              "count": "1"
            }
          ],
          "amount": 12,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "ENDER_CHEST",
          "content": [],
          "amount": 2,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "IRON_BLOCK",
          "content": [],
          "amount": 6,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "LIGHT_GRAY_SHULKER_BOX",
          "content": [
            {
              "slot": "0",
              "id": "stone",
              "count": "64"
            },
            {
              "slot": "1",
              "id": "stone",
              "count": "64"
            },
            {
              "slot": "2",
              "id": "stone",
              "count": "64"
            },
            {
              "slot": "3",
              "id": "stone",
              "count": "64"
            },
            {
              "slot": "4",
              "id": "stone",
              "count": "64"
            },
            {
              "slot": "5",
              "id": "stone",
              "count": "64"
            },
            {
              "slot": "6",
              "id": "stone",
              "count": "64"
            },
            {
              "slot": "7",
              "id": "stone",
              "count": "64"
            },
            {
              "slot": "8",
              "id": "stone",
              "count": "64"
            },
            {
              "slot": "9",
              "id": "stone",
              "count": "64"
            },
            {
              "slot": "10",
              "id": "stone",
              "count": "64"
            },
            {
              "slot": "11",
              "id": "stone",
              "count": "64"
            },
            {
              "slot": "12",
              "id": "stone",
              "count": "64"
            },
            {
              "slot": "13",
              "id": "stone",
              "count": "64"
            },
            {
              "slot": "14",
              "id": "stone",
              "count": "64"
            },
            {
              "slot": "15",
              "id": "stone",
              "count": "64"
            },
            {
              "slot": "16",
              "id": "stone",
              "count": "64"
            },
            {
              "slot": "17",
              "id": "stone",
              "count": "64"
            },
            {
              "slot": "18",
              "id": "stone",
              "count": "64"
            },
            {
              "slot": "19",
              "id": "stone",
              "count": "64"
            },
            {
              "slot": "20",
              "id": "stone",
              "count": "64"
            },
            {
              "slot": "21",
              "id": "stone",
              "count": "64"
            },
            {
              "slot": "22",
              "id": "stone",
              "count": "64"
            },
            {
              "slot": "23",
              "id": "stone",
              "count": "64"
            },
            {
              "slot": "24",
              "id": "stone",
              "count": "64"
            },
            {
              "slot": "25",
              "id": "stone",
              "count": "64"
            },
            {
              "slot": "26",
              "id": "stone",
              "count": "64"
            }
          ],
          "amount": 5,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "ELYTRA",
          "content": [
            {
              "enchants": {
                "MENDING": 1,
                "DURABILITY": 3
              }
            }
          ],
          "amount": 55,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "ELYTRA",
          "content": [
            {
              "enchants": {
                "MENDING": 1,
                "DURABILITY": 3
              }
            }
          ],
          "amount": 55,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "ELYTRA",
          "content": [
            {
              "enchants": {
                "MENDING": 1,
                "DURABILITY": 3
              }
            }
          ],
          "amount": 55,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "GOAT_HORN",
          "content": [],
          "amount": 8,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "GOAT_HORN",
          "content": [],
          "amount": 6,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "GOAT_HORN",
          "content": [],
          "amount": 8,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "GOAT_HORN",
          "content": [],
          "amount": 8,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "GOAT_HORN",
          "content": [],
          "amount": 20,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "GOAT_HORN",
          "content": [],
          "amount": 20,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "GOAT_HORN",
          "content": [],
          "amount": 20,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "GOAT_HORN",
          "content": [],
          "amount": 20,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        }
      ]
    },
    {
      "name": "_Kerubifi_",
      "offers": [
        {
          "name": "NETHERITE_INGOT",
          "content": [],
          "amount": 12,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "DIAMOND_SWORD",
          "content": [
            {
              "enchants": {
                "FIRE_ASPECT": 2,
                "KNOCKBACK": 2,
                "LOOT_BONUS_MOBS": 3,
                "MENDING": 1,
                "DAMAGE_ALL": 5,
                "SWEEPING_EDGE": 3,
                "DURABILITY": 3
              }
            }
          ],
          "amount": 20,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "DIAMOND_SWORD",
          "content": [
            {
              "enchants": {
                "FIRE_ASPECT": 2,
                "LOOT_BONUS_MOBS": 3,
                "MENDING": 1,
                "DAMAGE_ALL": 5,
                "SWEEPING_EDGE": 3,
                "DURABILITY": 3
              }
            }
          ],
          "amount": 19,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "DIAMOND_SWORD",
          "content": [
            {
              "enchants": {
                "FIRE_ASPECT": 2,
                "KNOCKBACK": 2,
                "LOOT_BONUS_MOBS": 3,
                "MENDING": 1,
                "DAMAGE_UNDEAD": 5,
                "SWEEPING_EDGE": 3,
                "DURABILITY": 3
              }
            }
          ],
          "amount": 20,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "DIAMOND_SWORD",
          "content": [
            {
              "enchants": {
                "FIRE_ASPECT": 2,
                "LOOT_BONUS_MOBS": 3,
                "MENDING": 1,
                "DAMAGE_UNDEAD": 5,
                "SWEEPING_EDGE": 3,
                "DURABILITY": 3
              }
            }
          ],
          "amount": 19,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "DIAMOND_SWORD",
          "content": [
            {
              "enchants": {
                "DAMAGE_ARTHROPODS": 5,
                "FIRE_ASPECT": 2,
                "KNOCKBACK": 2,
                "LOOT_BONUS_MOBS": 3,
                "MENDING": 1,
                "SWEEPING_EDGE": 3,
                "DURABILITY": 3
              }
            }
          ],
          "amount": 20,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "DIAMOND_SWORD",
          "content": [
            {
              "enchants": {
                "DAMAGE_ARTHROPODS": 5,
                "FIRE_ASPECT": 2,
                "LOOT_BONUS_MOBS": 3,
                "MENDING": 1,
                "SWEEPING_EDGE": 3,
                "DURABILITY": 3
              }
            }
          ],
          "amount": 19,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "DIAMOND_PICKAXE",
          "content": [
            {
              "enchants": {
                "DIG_SPEED": 5,
                "MENDING": 1,
                "SILK_TOUCH": 1,
                "DURABILITY": 3
              }
            }
          ],
          "amount": 13,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "DIAMOND_PICKAXE",
          "content": [
            {
              "enchants": {
                "DIG_SPEED": 5,
                "LOOT_BONUS_BLOCKS": 3,
                "MENDING": 1,
                "DURABILITY": 3
              }
            }
          ],
          "amount": 13,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "DIAMOND_SHOVEL",
          "content": [
            {
              "enchants": {
                "DIG_SPEED": 5,
                "MENDING": 1,
                "SILK_TOUCH": 1,
                "DURABILITY": 3
              }
            }
          ],
          "amount": 13,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "DIAMOND_SHOVEL",
          "content": [
            {
              "enchants": {
                "DIG_SPEED": 5,
                "LOOT_BONUS_BLOCKS": 3,
                "MENDING": 1,
                "DURABILITY": 3
              }
            }
          ],
          "amount": 13,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "DIAMOND_AXE",
          "content": [
            {
              "enchants": {
                "DIG_SPEED": 5,
                "MENDING": 1,
                "DAMAGE_ALL": 5,
                "SILK_TOUCH": 1,
                "DURABILITY": 3
              }
            }
          ],
          "amount": 15,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "DIAMOND_AXE",
          "content": [
            {
              "enchants": {
                "DIG_SPEED": 5,
                "LOOT_BONUS_BLOCKS": 3,
                "MENDING": 1,
                "DAMAGE_ALL": 5,
                "DURABILITY": 3
              }
            }
          ],
          "amount": 15,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "DIAMOND_AXE",
          "content": [
            {
              "enchants": {
                "DIG_SPEED": 5,
                "MENDING": 1,
                "SILK_TOUCH": 1,
                "DAMAGE_UNDEAD": 5,
                "DURABILITY": 3
              }
            }
          ],
          "amount": 15,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "DIAMOND_AXE",
          "content": [
            {
              "enchants": {
                "DIG_SPEED": 5,
                "LOOT_BONUS_BLOCKS": 3,
                "MENDING": 1,
                "DAMAGE_UNDEAD": 5,
                "DURABILITY": 3
              }
            }
          ],
          "amount": 15,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "DIAMOND_AXE",
          "content": [
            {
              "enchants": {
                "DAMAGE_ARTHROPODS": 5,
                "DIG_SPEED": 5,
                "MENDING": 1,
                "SILK_TOUCH": 1,
                "DURABILITY": 3
              }
            }
          ],
          "amount": 15,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "DIAMOND_AXE",
          "content": [
            {
              "enchants": {
                "DAMAGE_ARTHROPODS": 5,
                "DIG_SPEED": 5,
                "LOOT_BONUS_BLOCKS": 3,
                "MENDING": 1,
                "DURABILITY": 3
              }
            }
          ],
          "amount": 15,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "DIAMOND_HOE",
          "content": [
            {
              "enchants": {
                "DIG_SPEED": 5,
                "MENDING": 1,
                "SILK_TOUCH": 1,
                "DURABILITY": 3
              }
            }
          ],
          "amount": 13,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "DIAMOND_HOE",
          "content": [
            {
              "enchants": {
                "DIG_SPEED": 5,
                "LOOT_BONUS_BLOCKS": 3,
                "MENDING": 1,
                "DURABILITY": 3
              }
            }
          ],
          "amount": 13,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "BOW",
          "content": [
            {
              "enchants": {
                "ARROW_FIRE": 1,
                "ARROW_INFINITE": 1,
                "ARROW_DAMAGE": 5,
                "ARROW_KNOCKBACK": 2,
                "DURABILITY": 3
              }
            }
          ],
          "amount": 15,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "BOW",
          "content": [
            {
              "enchants": {
                "ARROW_FIRE": 1,
                "MENDING": 1,
                "ARROW_DAMAGE": 5,
                "ARROW_KNOCKBACK": 2,
                "DURABILITY": 3
              }
            }
          ],
          "amount": 15,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "CROSSBOW",
          "content": [
            {
              "enchants": {
                "MENDING": 1,
                "PIERCING": 4,
                "QUICK_CHARGE": 3,
                "DURABILITY": 3
              }
            }
          ],
          "amount": 15,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "CROSSBOW",
          "content": [
            {
              "enchants": {
                "MENDING": 1,
                "MULTISHOT": 1,
                "QUICK_CHARGE": 3,
                "DURABILITY": 3
              }
            }
          ],
          "amount": 15,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "TRIDENT",
          "content": [
            {
              "enchants": {
                "CHANNELING": 1,
                "IMPALING": 5,
                "LOYALTY": 3,
                "MENDING": 1,
                "DURABILITY": 3
              }
            }
          ],
          "amount": 15,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "TRIDENT",
          "content": [
            {
              "enchants": {
                "IMPALING": 5,
                "MENDING": 1,
                "RIPTIDE": 3,
                "DURABILITY": 3
              }
            }
          ],
          "amount": 15,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "FLINT_AND_STEEL",
          "content": [
            {
              "enchants": {
                "MENDING": 1,
                "DURABILITY": 3
              }
            }
          ],
          "amount": 6,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "SHEARS",
          "content": [
            {
              "enchants": {
                "DIG_SPEED": 5,
                "MENDING": 1,
                "DURABILITY": 3
              }
            }
          ],
          "amount": 8,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "FISHING_ROD",
          "content": [
            {
              "enchants": {
                "LUCK": 3,
                "LURE": 3,
                "MENDING": 1,
                "DURABILITY": 3
              }
            }
          ],
          "amount": 13,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "PURPLE_SHULKER_BOX",
          "content": [
            {
              "slot": "0",
              "id": "tipped_arrow",
              "count": "64"
            },
            {
              "slot": "1",
              "id": "spectral_arrow",
              "count": "64"
            },
            {
              "slot": "2",
              "id": "spectral_arrow",
              "count": "64"
            },
            {
              "slot": "3",
              "id": "arrow",
              "count": "64"
            },
            {
              "slot": "4",
              "id": "arrow",
              "count": "64"
            },
            {
              "slot": "5",
              "id": "arrow",
              "count": "64"
            },
            {
              "slot": "6",
              "id": "tipped_arrow",
              "count": "64"
            },
            {
              "slot": "7",
              "id": "tipped_arrow",
              "count": "64"
            },
            {
              "slot": "8",
              "id": "tipped_arrow",
              "count": "64"
            },
            {
              "slot": "9",
              "id": "tipped_arrow",
              "count": "64"
            },
            {
              "slot": "10",
              "id": "spectral_arrow",
              "count": "64"
            },
            {
              "slot": "11",
              "id": "spectral_arrow",
              "count": "64"
            },
            {
              "slot": "12",
              "id": "arrow",
              "count": "64"
            },
            {
              "slot": "13",
              "id": "arrow",
              "count": "64"
            },
            {
              "slot": "14",
              "id": "arrow",
              "count": "64"
            },
            {
              "slot": "15",
              "id": "tipped_arrow",
              "count": "64"
            },
            {
              "slot": "16",
              "id": "tipped_arrow",
              "count": "64"
            },
            {
              "slot": "17",
              "id": "tipped_arrow",
              "count": "64"
            },
            {
              "slot": "18",
              "id": "tipped_arrow",
              "count": "64"
            },
            {
              "slot": "19",
              "id": "tipped_arrow",
              "count": "64"
            },
            {
              "slot": "20",
              "id": "spectral_arrow",
              "count": "64"
            },
            {
              "slot": "21",
              "id": "spectral_arrow",
              "count": "64"
            },
            {
              "slot": "22",
              "id": "arrow",
              "count": "64"
            },
            {
              "slot": "23",
              "id": "tipped_arrow",
              "count": "64"
            },
            {
              "slot": "24",
              "id": "tipped_arrow",
              "count": "64"
            },
            {
              "slot": "25",
              "id": "tipped_arrow",
              "count": "64"
            },
            {
              "slot": "26",
              "id": "tipped_arrow",
              "count": "64"
            }
          ],
          "amount": 40,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "WHITE_SHULKER_BOX",
          "content": [
            {
              "slot": "0",
              "id": "arrow",
              "count": "64"
            },
            {
              "slot": "1",
              "id": "arrow",
              "count": "64"
            },
            {
              "slot": "2",
              "id": "arrow",
              "count": "64"
            },
            {
              "slot": "3",
              "id": "arrow",
              "count": "64"
            },
            {
              "slot": "4",
              "id": "arrow",
              "count": "64"
            },
            {
              "slot": "5",
              "id": "arrow",
              "count": "64"
            },
            {
              "slot": "6",
              "id": "arrow",
              "count": "64"
            },
            {
              "slot": "7",
              "id": "arrow",
              "count": "64"
            },
            {
              "slot": "8",
              "id": "arrow",
              "count": "64"
            },
            {
              "slot": "9",
              "id": "arrow",
              "count": "64"
            },
            {
              "slot": "10",
              "id": "arrow",
              "count": "64"
            },
            {
              "slot": "11",
              "id": "arrow",
              "count": "64"
            },
            {
              "slot": "12",
              "id": "arrow",
              "count": "64"
            },
            {
              "slot": "13",
              "id": "arrow",
              "count": "64"
            },
            {
              "slot": "14",
              "id": "arrow",
              "count": "64"
            },
            {
              "slot": "15",
              "id": "arrow",
              "count": "64"
            },
            {
              "slot": "16",
              "id": "arrow",
              "count": "64"
            },
            {
              "slot": "17",
              "id": "arrow",
              "count": "64"
            },
            {
              "slot": "18",
              "id": "arrow",
              "count": "64"
            },
            {
              "slot": "19",
              "id": "arrow",
              "count": "64"
            },
            {
              "slot": "20",
              "id": "arrow",
              "count": "64"
            },
            {
              "slot": "21",
              "id": "arrow",
              "count": "64"
            },
            {
              "slot": "22",
              "id": "arrow",
              "count": "64"
            },
            {
              "slot": "23",
              "id": "arrow",
              "count": "64"
            },
            {
              "slot": "24",
              "id": "arrow",
              "count": "64"
            },
            {
              "slot": "25",
              "id": "arrow",
              "count": "64"
            },
            {
              "slot": "26",
              "id": "arrow",
              "count": "64"
            }
          ],
          "amount": 5,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "ORANGE_SHULKER_BOX",
          "content": [
            {
              "slot": "0",
              "id": "spectral_arrow",
              "count": "64"
            },
            {
              "slot": "1",
              "id": "spectral_arrow",
              "count": "64"
            },
            {
              "slot": "2",
              "id": "spectral_arrow",
              "count": "64"
            },
            {
              "slot": "3",
              "id": "spectral_arrow",
              "count": "64"
            },
            {
              "slot": "4",
              "id": "spectral_arrow",
              "count": "64"
            },
            {
              "slot": "5",
              "id": "spectral_arrow",
              "count": "64"
            },
            {
              "slot": "6",
              "id": "spectral_arrow",
              "count": "64"
            },
            {
              "slot": "7",
              "id": "spectral_arrow",
              "count": "64"
            },
            {
              "slot": "8",
              "id": "spectral_arrow",
              "count": "64"
            },
            {
              "slot": "9",
              "id": "spectral_arrow",
              "count": "64"
            },
            {
              "slot": "10",
              "id": "spectral_arrow",
              "count": "64"
            },
            {
              "slot": "11",
              "id": "spectral_arrow",
              "count": "64"
            },
            {
              "slot": "12",
              "id": "spectral_arrow",
              "count": "64"
            },
            {
              "slot": "13",
              "id": "spectral_arrow",
              "count": "64"
            },
            {
              "slot": "14",
              "id": "spectral_arrow",
              "count": "64"
            },
            {
              "slot": "15",
              "id": "spectral_arrow",
              "count": "64"
            },
            {
              "slot": "16",
              "id": "spectral_arrow",
              "count": "64"
            },
            {
              "slot": "17",
              "id": "spectral_arrow",
              "count": "64"
            },
            {
              "slot": "18",
              "id": "spectral_arrow",
              "count": "64"
            },
            {
              "slot": "19",
              "id": "spectral_arrow",
              "count": "64"
            },
            {
              "slot": "20",
              "id": "spectral_arrow",
              "count": "64"
            },
            {
              "slot": "21",
              "id": "spectral_arrow",
              "count": "64"
            },
            {
              "slot": "22",
              "id": "spectral_arrow",
              "count": "64"
            },
            {
              "slot": "23",
              "id": "spectral_arrow",
              "count": "64"
            },
            {
              "slot": "24",
              "id": "spectral_arrow",
              "count": "64"
            },
            {
              "slot": "25",
              "id": "spectral_arrow",
              "count": "64"
            },
            {
              "slot": "26",
              "id": "spectral_arrow",
              "count": "64"
            }
          ],
          "amount": 5,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        }
      ]
    },
    {
      "name": "Vonderan",
      "offers": [
        {
          "name": "LIME_SHULKER_BOX",
          "content": [
            {
              "slot": "0",
              "id": "coal",
              "count": "64"
            },
            {
              "slot": "1",
              "id": "andesite",
              "count": "64"
            },
            {
              "slot": "2",
              "id": "iron_ingot",
              "count": "64"
            },
            {
              "slot": "3",
              "id": "diamond_chestplate",
              "count": "1"
            },
            {
              "slot": "4",
              "id": "cobblestone",
              "count": "64"
            },
            {
              "slot": "5",
              "id": "diamond_leggings",
              "count": "1"
            },
            {
              "slot": "6",
              "id": "iron_ingot",
              "count": "64"
            },
            {
              "slot": "7",
              "id": "andesite",
              "count": "64"
            },
            {
              "slot": "8",
              "id": "coal",
              "count": "64"
            },
            {
              "slot": "9",
              "id": "emerald",
              "count": "64"
            },
            {
              "slot": "10",
              "id": "stone_bricks",
              "count": "64"
            },
            {
              "slot": "11",
              "id": "diamond_helmet",
              "count": "1"
            },
            {
              "slot": "12",
              "id": "cooked_porkchop",
              "count": "49"
            },
            {
              "slot": "13",
              "id": "diamond",
              "count": "10"
            },
            {
              "slot": "14",
              "id": "cooked_porkchop",
              "count": "64"
            },
            {
              "slot": "15",
              "id": "diamond_boots",
              "count": "1"
            },
            {
              "slot": "16",
              "id": "stone_bricks",
              "count": "64"
            },
            {
              "slot": "17",
              "id": "emerald",
              "count": "64"
            },
            {
              "slot": "18",
              "id": "coal",
              "count": "64"
            },
            {
              "slot": "19",
              "id": "cobblestone",
              "count": "64"
            },
            {
              "slot": "20",
              "id": "stone",
              "count": "64"
            },
            {
              "slot": "21",
              "id": "oak_log",
              "count": "64"
            },
            {
              "slot": "22",
              "id": "diamond_pickaxe",
              "count": "1"
            },
            {
              "slot": "23",
              "id": "oak_log",
              "count": "64"
            },
            {
              "slot": "24",
              "id": "stone",
              "count": "64"
            },
            {
              "slot": "25",
              "id": "cobblestone",
              "count": "64"
            },
            {
              "slot": "26",
              "id": "coal",
              "count": "64"
            }
          ],
          "amount": 60,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "LIGHT_BLUE_SHULKER_BOX",
          "content": [
            {
              "slot": "4",
              "id": "diamond_pickaxe",
              "count": "1"
            },
            {
              "slot": "11",
              "id": "diamond_shovel",
              "count": "1"
            },
            {
              "slot": "15",
              "id": "diamond_axe",
              "count": "1"
            }
          ],
          "amount": 38,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "CYAN_SHULKER_BOX",
          "content": [
            {
              "slot": "4",
              "id": "diamond_pickaxe",
              "count": "1"
            },
            {
              "slot": "11",
              "id": "diamond_shovel",
              "count": "1"
            },
            {
              "slot": "15",
              "id": "diamond_axe",
              "count": "1"
            }
          ],
          "amount": 38,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "DIAMOND_PICKAXE",
          "content": [
            {
              "enchants": {
                "DIG_SPEED": 5,
                "MENDING": 1,
                "SILK_TOUCH": 1,
                "DURABILITY": 3
              }
            }
          ],
          "amount": 13,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "DIAMOND_PICKAXE",
          "content": [
            {
              "enchants": {
                "DIG_SPEED": 5,
                "LOOT_BONUS_BLOCKS": 3,
                "MENDING": 1,
                "DURABILITY": 3
              }
            }
          ],
          "amount": 13,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "DIAMOND_SHOVEL",
          "content": [
            {
              "enchants": {
                "DIG_SPEED": 5,
                "MENDING": 1,
                "SILK_TOUCH": 1,
                "DURABILITY": 3
              }
            }
          ],
          "amount": 13,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "DIAMOND_SHOVEL",
          "content": [
            {
              "enchants": {
                "DIG_SPEED": 5,
                "LOOT_BONUS_BLOCKS": 3,
                "MENDING": 1,
                "DURABILITY": 3
              }
            }
          ],
          "amount": 13,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "DIAMOND_AXE",
          "content": [
            {
              "enchants": {
                "DIG_SPEED": 5,
                "MENDING": 1,
                "DAMAGE_ALL": 5,
                "SILK_TOUCH": 1,
                "DURABILITY": 3
              }
            }
          ],
          "amount": 15,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "DIAMOND_AXE",
          "content": [
            {
              "enchants": {
                "DIG_SPEED": 5,
                "LOOT_BONUS_BLOCKS": 3,
                "MENDING": 1,
                "DAMAGE_ALL": 5,
                "DURABILITY": 3
              }
            }
          ],
          "amount": 15,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "DIAMOND_HOE",
          "content": [
            {
              "enchants": {
                "DIG_SPEED": 5,
                "MENDING": 1,
                "SILK_TOUCH": 1,
                "DURABILITY": 3
              }
            }
          ],
          "amount": 13,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "DIAMOND_HOE",
          "content": [
            {
              "enchants": {
                "DIG_SPEED": 5,
                "LOOT_BONUS_BLOCKS": 3,
                "MENDING": 1,
                "DURABILITY": 3
              }
            }
          ],
          "amount": 13,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "NETHERITE_INGOT",
          "content": [],
          "amount": 12,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "DIAMOND_SWORD",
          "content": [
            {
              "enchants": {
                "FIRE_ASPECT": 2,
                "KNOCKBACK": 2,
                "LOOT_BONUS_MOBS": 3,
                "MENDING": 1,
                "DAMAGE_ALL": 5,
                "SWEEPING_EDGE": 3,
                "DURABILITY": 3
              }
            }
          ],
          "amount": 20,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "BOW",
          "content": [
            {
              "enchants": {
                "ARROW_FIRE": 1,
                "ARROW_INFINITE": 1,
                "ARROW_DAMAGE": 5,
                "ARROW_KNOCKBACK": 2,
                "DURABILITY": 3
              }
            }
          ],
          "amount": 15,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "BOW",
          "content": [
            {
              "enchants": {
                "ARROW_FIRE": 1,
                "MENDING": 1,
                "ARROW_DAMAGE": 5,
                "ARROW_KNOCKBACK": 2,
                "DURABILITY": 3
              }
            }
          ],
          "amount": 15,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "GREEN_SHULKER_BOX",
          "content": [
            {
              "slot": "3",
              "id": "diamond_helmet",
              "count": "1"
            },
            {
              "slot": "5",
              "id": "diamond_chestplate",
              "count": "1"
            },
            {
              "slot": "11",
              "id": "diamond_leggings",
              "count": "1"
            },
            {
              "slot": "15",
              "id": "diamond_boots",
              "count": "1"
            },
            {
              "slot": "21",
              "id": "diamond_axe",
              "count": "1"
            },
            {
              "slot": "23",
              "id": "shield",
              "count": "1"
            }
          ],
          "amount": 60,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "GRAY_SHULKER_BOX",
          "content": [
            {
              "slot": "3",
              "id": "diamond_chestplate",
              "count": "1"
            },
            {
              "slot": "5",
              "id": "diamond_leggings",
              "count": "1"
            },
            {
              "slot": "11",
              "id": "diamond_helmet",
              "count": "1"
            },
            {
              "slot": "13",
              "id": "arrow",
              "count": "64"
            },
            {
              "slot": "15",
              "id": "diamond_boots",
              "count": "1"
            },
            {
              "slot": "21",
              "id": "diamond_sword",
              "count": "1"
            },
            {
              "slot": "23",
              "id": "bow",
              "count": "1"
            }
          ],
          "amount": 60,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "MAGENTA_SHULKER_BOX",
          "content": [
            {
              "slot": "0",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "1",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "2",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "3",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "4",
              "id": "elytra",
              "count": "1"
            },
            {
              "slot": "5",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "6",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "7",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "8",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "9",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "10",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "11",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "12",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "13",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "14",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "15",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "16",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "17",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "18",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "19",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "20",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "21",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "22",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "23",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "24",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "25",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "26",
              "id": "firework_rocket",
              "count": "64"
            }
          ],
          "amount": 41,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "PURPLE_SHULKER_BOX",
          "content": [
            {
              "slot": "0",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "1",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "2",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "3",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "4",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "5",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "6",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "7",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "8",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "9",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "10",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "11",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "12",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "13",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "14",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "15",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "16",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "17",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "18",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "19",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "20",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "21",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "22",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "23",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "24",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "25",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "26",
              "id": "firework_rocket",
              "count": "64"
            }
          ],
          "amount": 12,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "ELYTRA",
          "content": [
            {
              "enchants": {
                "MENDING": 1,
                "DURABILITY": 3
              }
            }
          ],
          "amount": 32,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "ORANGE_SHULKER_BOX",
          "content": [
            {
              "slot": "3",
              "id": "diamond_helmet",
              "count": "1"
            },
            {
              "slot": "5",
              "id": "diamond_chestplate",
              "count": "1"
            },
            {
              "slot": "21",
              "id": "diamond_leggings",
              "count": "1"
            },
            {
              "slot": "23",
              "id": "diamond_boots",
              "count": "1"
            }
          ],
          "amount": 60,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "DIAMOND_HELMET",
          "content": [
            {
              "enchants": {
                "WATER_WORKER": 1,
                "MENDING": 1,
                "PROTECTION_ENVIRONMENTAL": 4,
                "OXYGEN": 3,
                "THORNS": 3,
                "DURABILITY": 3
              }
            }
          ],
          "amount": 19,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "DIAMOND_CHESTPLATE",
          "content": [
            {
              "enchants": {
                "MENDING": 1,
                "PROTECTION_ENVIRONMENTAL": 4,
                "THORNS": 3,
                "DURABILITY": 3
              }
            }
          ],
          "amount": 15,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "DIAMOND_LEGGINGS",
          "content": [
            {
              "enchants": {
                "MENDING": 1,
                "PROTECTION_ENVIRONMENTAL": 4,
                "THORNS": 3,
                "DURABILITY": 3
              }
            }
          ],
          "amount": 15,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "DIAMOND_BOOTS",
          "content": [
            {
              "enchants": {
                "DEPTH_STRIDER": 3,
                "PROTECTION_FALL": 4,
                "MENDING": 1,
                "PROTECTION_ENVIRONMENTAL": 4,
                "SOUL_SPEED": 3,
                "THORNS": 3,
                "DURABILITY": 3
              }
            }
          ],
          "amount": 19,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "YELLOW_SHULKER_BOX",
          "content": [
            {
              "slot": "0",
              "id": "totem_of_undying",
              "count": "1"
            },
            {
              "slot": "1",
              "id": "totem_of_undying",
              "count": "1"
            },
            {
              "slot": "2",
              "id": "totem_of_undying",
              "count": "1"
            },
            {
              "slot": "3",
              "id": "totem_of_undying",
              "count": "1"
            },
            {
              "slot": "4",
              "id": "totem_of_undying",
              "count": "1"
            },
            {
              "slot": "5",
              "id": "totem_of_undying",
              "count": "1"
            },
            {
              "slot": "6",
              "id": "totem_of_undying",
              "count": "1"
            },
            {
              "slot": "7",
              "id": "totem_of_undying",
              "count": "1"
            },
            {
              "slot": "8",
              "id": "totem_of_undying",
              "count": "1"
            },
            {
              "slot": "9",
              "id": "totem_of_undying",
              "count": "1"
            },
            {
              "slot": "10",
              "id": "totem_of_undying",
              "count": "1"
            },
            {
              "slot": "11",
              "id": "totem_of_undying",
              "count": "1"
            },
            {
              "slot": "12",
              "id": "totem_of_undying",
              "count": "1"
            },
            {
              "slot": "13",
              "id": "totem_of_undying",
              "count": "1"
            },
            {
              "slot": "14",
              "id": "totem_of_undying",
              "count": "1"
            },
            {
              "slot": "15",
              "id": "totem_of_undying",
              "count": "1"
            },
            {
              "slot": "16",
              "id": "totem_of_undying",
              "count": "1"
            },
            {
              "slot": "17",
              "id": "totem_of_undying",
              "count": "1"
            },
            {
              "slot": "18",
              "id": "totem_of_undying",
              "count": "1"
            },
            {
              "slot": "19",
              "id": "totem_of_undying",
              "count": "1"
            },
            {
              "slot": "20",
              "id": "totem_of_undying",
              "count": "1"
            },
            {
              "slot": "21",
              "id": "totem_of_undying",
              "count": "1"
            },
            {
              "slot": "22",
              "id": "totem_of_undying",
              "count": "1"
            },
            {
              "slot": "23",
              "id": "totem_of_undying",
              "count": "1"
            },
            {
              "slot": "24",
              "id": "totem_of_undying",
              "count": "1"
            },
            {
              "slot": "25",
              "id": "totem_of_undying",
              "count": "1"
            },
            {
              "slot": "26",
              "id": "totem_of_undying",
              "count": "1"
            }
          ],
          "amount": 4,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "TOTEM_OF_UNDYING",
          "content": [],
          "amount": 1,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "EMERALD_BLOCK",
          "content": [],
          "amount": 3,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "LIGHT_BLUE_SHULKER_BOX",
          "content": [
            {
              "slot": "0",
              "id": "diamond_pickaxe",
              "count": "1"
            },
            {
              "slot": "1",
              "id": "diamond_pickaxe",
              "count": "1"
            },
            {
              "slot": "2",
              "id": "diamond_pickaxe",
              "count": "1"
            },
            {
              "slot": "3",
              "id": "diamond_pickaxe",
              "count": "1"
            },
            {
              "slot": "4",
              "id": "diamond_pickaxe",
              "count": "1"
            },
            {
              "slot": "5",
              "id": "diamond_pickaxe",
              "count": "1"
            },
            {
              "slot": "6",
              "id": "diamond_pickaxe",
              "count": "1"
            },
            {
              "slot": "7",
              "id": "diamond_pickaxe",
              "count": "1"
            },
            {
              "slot": "8",
              "id": "diamond_pickaxe",
              "count": "1"
            },
            {
              "slot": "9",
              "id": "diamond_pickaxe",
              "count": "1"
            },
            {
              "slot": "10",
              "id": "diamond_pickaxe",
              "count": "1"
            },
            {
              "slot": "11",
              "id": "diamond_pickaxe",
              "count": "1"
            },
            {
              "slot": "12",
              "id": "diamond_pickaxe",
              "count": "1"
            },
            {
              "slot": "13",
              "id": "diamond_pickaxe",
              "count": "1"
            },
            {
              "slot": "14",
              "id": "diamond_pickaxe",
              "count": "1"
            },
            {
              "slot": "15",
              "id": "diamond_pickaxe",
              "count": "1"
            },
            {
              "slot": "16",
              "id": "diamond_pickaxe",
              "count": "1"
            },
            {
              "slot": "17",
              "id": "diamond_pickaxe",
              "count": "1"
            },
            {
              "slot": "18",
              "id": "diamond_pickaxe",
              "count": "1"
            },
            {
              "slot": "19",
              "id": "diamond_pickaxe",
              "count": "1"
            },
            {
              "slot": "20",
              "id": "diamond_pickaxe",
              "count": "1"
            },
            {
              "slot": "21",
              "id": "diamond_pickaxe",
              "count": "1"
            },
            {
              "slot": "22",
              "id": "diamond_pickaxe",
              "count": "1"
            },
            {
              "slot": "23",
              "id": "diamond_pickaxe",
              "count": "1"
            },
            {
              "slot": "24",
              "id": "diamond_pickaxe",
              "count": "1"
            },
            {
              "slot": "25",
              "id": "diamond_pickaxe",
              "count": "1"
            },
            {
              "slot": "26",
              "id": "diamond_pickaxe",
              "count": "1"
            }
          ],
          "amount": 1,
          "currency": "SHULKER_BOX"
        },
        {
          "name": "CYAN_SHULKER_BOX",
          "content": [
            {
              "slot": "0",
              "id": "diamond_pickaxe",
              "count": "1"
            },
            {
              "slot": "1",
              "id": "diamond_pickaxe",
              "count": "1"
            },
            {
              "slot": "2",
              "id": "diamond_pickaxe",
              "count": "1"
            },
            {
              "slot": "3",
              "id": "diamond_pickaxe",
              "count": "1"
            },
            {
              "slot": "4",
              "id": "diamond_pickaxe",
              "count": "1"
            },
            {
              "slot": "5",
              "id": "diamond_pickaxe",
              "count": "1"
            },
            {
              "slot": "6",
              "id": "diamond_pickaxe",
              "count": "1"
            },
            {
              "slot": "7",
              "id": "diamond_pickaxe",
              "count": "1"
            },
            {
              "slot": "8",
              "id": "diamond_pickaxe",
              "count": "1"
            },
            {
              "slot": "9",
              "id": "diamond_pickaxe",
              "count": "1"
            },
            {
              "slot": "10",
              "id": "diamond_pickaxe",
              "count": "1"
            },
            {
              "slot": "11",
              "id": "diamond_pickaxe",
              "count": "1"
            },
            {
              "slot": "12",
              "id": "diamond_pickaxe",
              "count": "1"
            },
            {
              "slot": "13",
              "id": "diamond_pickaxe",
              "count": "1"
            },
            {
              "slot": "14",
              "id": "diamond_pickaxe",
              "count": "1"
            },
            {
              "slot": "15",
              "id": "diamond_pickaxe",
              "count": "1"
            },
            {
              "slot": "16",
              "id": "diamond_pickaxe",
              "count": "1"
            },
            {
              "slot": "17",
              "id": "diamond_pickaxe",
              "count": "1"
            },
            {
              "slot": "18",
              "id": "diamond_pickaxe",
              "count": "1"
            },
            {
              "slot": "19",
              "id": "diamond_pickaxe",
              "count": "1"
            },
            {
              "slot": "20",
              "id": "diamond_pickaxe",
              "count": "1"
            },
            {
              "slot": "21",
              "id": "diamond_pickaxe",
              "count": "1"
            },
            {
              "slot": "22",
              "id": "diamond_pickaxe",
              "count": "1"
            },
            {
              "slot": "23",
              "id": "diamond_pickaxe",
              "count": "1"
            },
            {
              "slot": "24",
              "id": "diamond_pickaxe",
              "count": "1"
            },
            {
              "slot": "25",
              "id": "diamond_pickaxe",
              "count": "1"
            },
            {
              "slot": "26",
              "id": "diamond_pickaxe",
              "count": "1"
            }
          ],
          "amount": 1,
          "currency": "SHULKER_BOX"
        },
        {
          "name": "LIME_SHULKER_BOX",
          "content": [
            {
              "slot": "0",
              "id": "diamond_shovel",
              "count": "1"
            },
            {
              "slot": "1",
              "id": "diamond_shovel",
              "count": "1"
            },
            {
              "slot": "2",
              "id": "diamond_shovel",
              "count": "1"
            },
            {
              "slot": "3",
              "id": "diamond_shovel",
              "count": "1"
            },
            {
              "slot": "4",
              "id": "diamond_shovel",
              "count": "1"
            },
            {
              "slot": "5",
              "id": "diamond_shovel",
              "count": "1"
            },
            {
              "slot": "6",
              "id": "diamond_shovel",
              "count": "1"
            },
            {
              "slot": "7",
              "id": "diamond_shovel",
              "count": "1"
            },
            {
              "slot": "8",
              "id": "diamond_shovel",
              "count": "1"
            },
            {
              "slot": "9",
              "id": "diamond_shovel",
              "count": "1"
            },
            {
              "slot": "10",
              "id": "diamond_shovel",
              "count": "1"
            },
            {
              "slot": "11",
              "id": "diamond_shovel",
              "count": "1"
            },
            {
              "slot": "12",
              "id": "diamond_shovel",
              "count": "1"
            },
            {
              "slot": "13",
              "id": "diamond_shovel",
              "count": "1"
            },
            {
              "slot": "14",
              "id": "diamond_shovel",
              "count": "1"
            },
            {
              "slot": "15",
              "id": "diamond_shovel",
              "count": "1"
            },
            {
              "slot": "16",
              "id": "diamond_shovel",
              "count": "1"
            },
            {
              "slot": "17",
              "id": "diamond_shovel",
              "count": "1"
            },
            {
              "slot": "18",
              "id": "diamond_shovel",
              "count": "1"
            },
            {
              "slot": "19",
              "id": "diamond_shovel",
              "count": "1"
            },
            {
              "slot": "20",
              "id": "diamond_shovel",
              "count": "1"
            },
            {
              "slot": "21",
              "id": "diamond_shovel",
              "count": "1"
            },
            {
              "slot": "22",
              "id": "diamond_shovel",
              "count": "1"
            },
            {
              "slot": "23",
              "id": "diamond_shovel",
              "count": "1"
            },
            {
              "slot": "24",
              "id": "diamond_shovel",
              "count": "1"
            },
            {
              "slot": "25",
              "id": "diamond_shovel",
              "count": "1"
            },
            {
              "slot": "26",
              "id": "diamond_shovel",
              "count": "1"
            }
          ],
          "amount": 1,
          "currency": "SHULKER_BOX"
        },
        {
          "name": "RED_SHULKER_BOX",
          "content": [
            {
              "slot": "0",
              "id": "diamond_axe",
              "count": "1"
            },
            {
              "slot": "1",
              "id": "diamond_axe",
              "count": "1"
            },
            {
              "slot": "2",
              "id": "diamond_axe",
              "count": "1"
            },
            {
              "slot": "3",
              "id": "diamond_axe",
              "count": "1"
            },
            {
              "slot": "4",
              "id": "diamond_axe",
              "count": "1"
            },
            {
              "slot": "5",
              "id": "diamond_axe",
              "count": "1"
            },
            {
              "slot": "6",
              "id": "diamond_axe",
              "count": "1"
            },
            {
              "slot": "7",
              "id": "diamond_axe",
              "count": "1"
            },
            {
              "slot": "8",
              "id": "diamond_axe",
              "count": "1"
            },
            {
              "slot": "9",
              "id": "diamond_axe",
              "count": "1"
            },
            {
              "slot": "10",
              "id": "diamond_axe",
              "count": "1"
            },
            {
              "slot": "11",
              "id": "diamond_axe",
              "count": "1"
            },
            {
              "slot": "12",
              "id": "diamond_axe",
              "count": "1"
            },
            {
              "slot": "13",
              "id": "diamond_axe",
              "count": "1"
            },
            {
              "slot": "14",
              "id": "diamond_axe",
              "count": "1"
            },
            {
              "slot": "15",
              "id": "diamond_axe",
              "count": "1"
            },
            {
              "slot": "16",
              "id": "diamond_axe",
              "count": "1"
            },
            {
              "slot": "17",
              "id": "diamond_axe",
              "count": "1"
            },
            {
              "slot": "18",
              "id": "diamond_axe",
              "count": "1"
            },
            {
              "slot": "19",
              "id": "diamond_axe",
              "count": "1"
            },
            {
              "slot": "20",
              "id": "diamond_axe",
              "count": "1"
            },
            {
              "slot": "21",
              "id": "diamond_axe",
              "count": "1"
            },
            {
              "slot": "22",
              "id": "diamond_axe",
              "count": "1"
            },
            {
              "slot": "23",
              "id": "diamond_axe",
              "count": "1"
            },
            {
              "slot": "24",
              "id": "diamond_axe",
              "count": "1"
            },
            {
              "slot": "25",
              "id": "diamond_axe",
              "count": "1"
            },
            {
              "slot": "26",
              "id": "diamond_axe",
              "count": "1"
            }
          ],
          "amount": 1,
          "currency": "SHULKER_BOX"
        }
      ]
    },
    {
      "name": "ChancellorIkseew",
      "offers": [
        {
          "name": "TNT",
          "content": [],
          "amount": 3,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "GOLDEN_APPLE",
          "content": [],
          "amount": 1,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "DEEPSLATE_DIAMOND_ORE",
          "content": [],
          "amount": 64,
          "currency": "EMERALD_BLOCK"
        },
        {
          "name": "DEAD_BUSH",
          "content": [],
          "amount": 1,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "NETHER_WART",
          "content": [],
          "amount": 1,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "DRAGON_BREATH",
          "content": [],
          "amount": 1,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "COAL_BLOCK",
          "content": [],
          "amount": 1,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "WITHER_SKELETON_SKULL",
          "content": [],
          "amount": 1,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "COBWEB",
          "content": [],
          "amount": 1,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "EMERALD_BLOCK",
          "content": [],
          "amount": 1,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "NAUTILUS_SHELL",
          "content": [],
          "amount": 1,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "CONDUIT",
          "content": [],
          "amount": 27,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "GHAST_TEAR",
          "content": [],
          "amount": 1,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        }
      ]
    },
    {
      "name": "Jean_Viento",
      "offers": [
        {
          "name": "SHULKER_BOX",
          "content": [
            {
              "slot": "0",
              "id": "deepslate_diamond_ore",
              "count": "10"
            }
          ],
          "amount": 1,
          "currency": "SHULKER_BOX"
        },
        {
          "name": "WHITE_SHULKER_BOX",
          "content": [
            {
              "slot": "0",
              "id": "glass",
              "count": "64"
            },
            {
              "slot": "1",
              "id": "glass",
              "count": "64"
            },
            {
              "slot": "2",
              "id": "glass",
              "count": "64"
            },
            {
              "slot": "3",
              "id": "glass",
              "count": "64"
            },
            {
              "slot": "4",
              "id": "glass",
              "count": "64"
            },
            {
              "slot": "5",
              "id": "glass",
              "count": "64"
            },
            {
              "slot": "6",
              "id": "glass",
              "count": "64"
            },
            {
              "slot": "7",
              "id": "glass",
              "count": "64"
            },
            {
              "slot": "8",
              "id": "glass",
              "count": "64"
            },
            {
              "slot": "9",
              "id": "glass",
              "count": "64"
            },
            {
              "slot": "10",
              "id": "glass",
              "count": "64"
            },
            {
              "slot": "11",
              "id": "glass",
              "count": "64"
            },
            {
              "slot": "12",
              "id": "glass",
              "count": "64"
            },
            {
              "slot": "13",
              "id": "glass",
              "count": "64"
            },
            {
              "slot": "14",
              "id": "glass",
              "count": "64"
            },
            {
              "slot": "15",
              "id": "glass",
              "count": "64"
            },
            {
              "slot": "16",
              "id": "glass",
              "count": "64"
            },
            {
              "slot": "17",
              "id": "glass",
              "count": "64"
            },
            {
              "slot": "18",
              "id": "glass",
              "count": "64"
            },
            {
              "slot": "19",
              "id": "glass",
              "count": "64"
            },
            {
              "slot": "20",
              "id": "glass",
              "count": "64"
            },
            {
              "slot": "21",
              "id": "glass",
              "count": "64"
            },
            {
              "slot": "22",
              "id": "glass",
              "count": "64"
            },
            {
              "slot": "23",
              "id": "glass",
              "count": "64"
            },
            {
              "slot": "24",
              "id": "glass",
              "count": "64"
            },
            {
              "slot": "25",
              "id": "glass",
              "count": "64"
            },
            {
              "slot": "26",
              "id": "glass",
              "count": "64"
            }
          ],
          "amount": 14,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "GLOW_INK_SAC",
          "content": [],
          "amount": 1,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "RED_SHULKER_BOX",
          "content": [
            {
              "slot": "0",
              "id": "red_dye",
              "count": "64"
            },
            {
              "slot": "1",
              "id": "red_dye",
              "count": "64"
            },
            {
              "slot": "2",
              "id": "red_dye",
              "count": "64"
            },
            {
              "slot": "3",
              "id": "red_dye",
              "count": "64"
            },
            {
              "slot": "4",
              "id": "red_dye",
              "count": "64"
            },
            {
              "slot": "5",
              "id": "red_dye",
              "count": "64"
            },
            {
              "slot": "6",
              "id": "red_dye",
              "count": "64"
            },
            {
              "slot": "7",
              "id": "red_dye",
              "count": "64"
            },
            {
              "slot": "8",
              "id": "red_dye",
              "count": "64"
            },
            {
              "slot": "9",
              "id": "red_dye",
              "count": "64"
            },
            {
              "slot": "10",
              "id": "red_dye",
              "count": "64"
            },
            {
              "slot": "11",
              "id": "red_dye",
              "count": "64"
            },
            {
              "slot": "12",
              "id": "red_dye",
              "count": "64"
            },
            {
              "slot": "13",
              "id": "red_dye",
              "count": "64"
            },
            {
              "slot": "14",
              "id": "red_dye",
              "count": "64"
            },
            {
              "slot": "15",
              "id": "red_dye",
              "count": "64"
            },
            {
              "slot": "16",
              "id": "red_dye",
              "count": "64"
            },
            {
              "slot": "17",
              "id": "red_dye",
              "count": "64"
            },
            {
              "slot": "18",
              "id": "red_dye",
              "count": "64"
            },
            {
              "slot": "19",
              "id": "red_dye",
              "count": "64"
            },
            {
              "slot": "20",
              "id": "red_dye",
              "count": "64"
            },
            {
              "slot": "21",
              "id": "red_dye",
              "count": "64"
            },
            {
              "slot": "22",
              "id": "red_dye",
              "count": "64"
            },
            {
              "slot": "23",
              "id": "red_dye",
              "count": "64"
            },
            {
              "slot": "24",
              "id": "red_dye",
              "count": "64"
            },
            {
              "slot": "25",
              "id": "red_dye",
              "count": "64"
            },
            {
              "slot": "26",
              "id": "red_dye",
              "count": "64"
            }
          ],
          "amount": 12,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "ORANGE_SHULKER_BOX",
          "content": [
            {
              "slot": "0",
              "id": "orange_dye",
              "count": "64"
            },
            {
              "slot": "1",
              "id": "orange_dye",
              "count": "64"
            },
            {
              "slot": "2",
              "id": "orange_dye",
              "count": "64"
            },
            {
              "slot": "3",
              "id": "orange_dye",
              "count": "64"
            },
            {
              "slot": "4",
              "id": "orange_dye",
              "count": "64"
            },
            {
              "slot": "5",
              "id": "orange_dye",
              "count": "64"
            },
            {
              "slot": "6",
              "id": "orange_dye",
              "count": "64"
            },
            {
              "slot": "7",
              "id": "orange_dye",
              "count": "64"
            },
            {
              "slot": "8",
              "id": "orange_dye",
              "count": "64"
            },
            {
              "slot": "9",
              "id": "orange_dye",
              "count": "64"
            },
            {
              "slot": "10",
              "id": "orange_dye",
              "count": "64"
            },
            {
              "slot": "11",
              "id": "orange_dye",
              "count": "64"
            },
            {
              "slot": "12",
              "id": "orange_dye",
              "count": "64"
            },
            {
              "slot": "13",
              "id": "orange_dye",
              "count": "64"
            },
            {
              "slot": "14",
              "id": "orange_dye",
              "count": "64"
            },
            {
              "slot": "15",
              "id": "orange_dye",
              "count": "64"
            },
            {
              "slot": "16",
              "id": "orange_dye",
              "count": "64"
            },
            {
              "slot": "17",
              "id": "orange_dye",
              "count": "64"
            },
            {
              "slot": "18",
              "id": "orange_dye",
              "count": "64"
            },
            {
              "slot": "19",
              "id": "orange_dye",
              "count": "64"
            },
            {
              "slot": "20",
              "id": "orange_dye",
              "count": "64"
            },
            {
              "slot": "21",
              "id": "orange_dye",
              "count": "64"
            },
            {
              "slot": "22",
              "id": "orange_dye",
              "count": "64"
            },
            {
              "slot": "23",
              "id": "orange_dye",
              "count": "64"
            },
            {
              "slot": "24",
              "id": "orange_dye",
              "count": "64"
            },
            {
              "slot": "25",
              "id": "orange_dye",
              "count": "64"
            },
            {
              "slot": "26",
              "id": "orange_dye",
              "count": "64"
            }
          ],
          "amount": 12,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "YELLOW_SHULKER_BOX",
          "content": [
            {
              "slot": "0",
              "id": "yellow_dye",
              "count": "64"
            },
            {
              "slot": "1",
              "id": "yellow_dye",
              "count": "64"
            },
            {
              "slot": "2",
              "id": "yellow_dye",
              "count": "64"
            },
            {
              "slot": "3",
              "id": "yellow_dye",
              "count": "64"
            },
            {
              "slot": "4",
              "id": "yellow_dye",
              "count": "64"
            },
            {
              "slot": "5",
              "id": "yellow_dye",
              "count": "64"
            },
            {
              "slot": "6",
              "id": "yellow_dye",
              "count": "64"
            },
            {
              "slot": "7",
              "id": "yellow_dye",
              "count": "64"
            },
            {
              "slot": "8",
              "id": "yellow_dye",
              "count": "64"
            },
            {
              "slot": "9",
              "id": "yellow_dye",
              "count": "64"
            },
            {
              "slot": "10",
              "id": "yellow_dye",
              "count": "64"
            },
            {
              "slot": "11",
              "id": "yellow_dye",
              "count": "64"
            },
            {
              "slot": "12",
              "id": "yellow_dye",
              "count": "64"
            },
            {
              "slot": "13",
              "id": "yellow_dye",
              "count": "64"
            },
            {
              "slot": "14",
              "id": "yellow_dye",
              "count": "64"
            },
            {
              "slot": "15",
              "id": "yellow_dye",
              "count": "64"
            },
            {
              "slot": "16",
              "id": "yellow_dye",
              "count": "64"
            },
            {
              "slot": "17",
              "id": "yellow_dye",
              "count": "64"
            },
            {
              "slot": "18",
              "id": "yellow_dye",
              "count": "64"
            },
            {
              "slot": "19",
              "id": "yellow_dye",
              "count": "64"
            },
            {
              "slot": "20",
              "id": "yellow_dye",
              "count": "64"
            },
            {
              "slot": "21",
              "id": "yellow_dye",
              "count": "64"
            },
            {
              "slot": "22",
              "id": "yellow_dye",
              "count": "64"
            },
            {
              "slot": "23",
              "id": "yellow_dye",
              "count": "64"
            },
            {
              "slot": "24",
              "id": "yellow_dye",
              "count": "64"
            },
            {
              "slot": "25",
              "id": "yellow_dye",
              "count": "64"
            },
            {
              "slot": "26",
              "id": "yellow_dye",
              "count": "64"
            }
          ],
          "amount": 12,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "LIME_SHULKER_BOX",
          "content": [
            {
              "slot": "0",
              "id": "lime_dye",
              "count": "64"
            },
            {
              "slot": "1",
              "id": "lime_dye",
              "count": "64"
            },
            {
              "slot": "2",
              "id": "lime_dye",
              "count": "64"
            },
            {
              "slot": "3",
              "id": "lime_dye",
              "count": "64"
            },
            {
              "slot": "4",
              "id": "lime_dye",
              "count": "64"
            },
            {
              "slot": "5",
              "id": "lime_dye",
              "count": "64"
            },
            {
              "slot": "6",
              "id": "lime_dye",
              "count": "64"
            },
            {
              "slot": "7",
              "id": "lime_dye",
              "count": "64"
            },
            {
              "slot": "8",
              "id": "lime_dye",
              "count": "64"
            },
            {
              "slot": "9",
              "id": "lime_dye",
              "count": "64"
            },
            {
              "slot": "10",
              "id": "lime_dye",
              "count": "64"
            },
            {
              "slot": "11",
              "id": "lime_dye",
              "count": "64"
            },
            {
              "slot": "12",
              "id": "lime_dye",
              "count": "64"
            },
            {
              "slot": "13",
              "id": "lime_dye",
              "count": "64"
            },
            {
              "slot": "14",
              "id": "lime_dye",
              "count": "64"
            },
            {
              "slot": "15",
              "id": "lime_dye",
              "count": "64"
            },
            {
              "slot": "16",
              "id": "lime_dye",
              "count": "64"
            },
            {
              "slot": "17",
              "id": "lime_dye",
              "count": "64"
            },
            {
              "slot": "18",
              "id": "lime_dye",
              "count": "64"
            },
            {
              "slot": "19",
              "id": "lime_dye",
              "count": "64"
            },
            {
              "slot": "20",
              "id": "lime_dye",
              "count": "64"
            },
            {
              "slot": "21",
              "id": "lime_dye",
              "count": "64"
            },
            {
              "slot": "22",
              "id": "lime_dye",
              "count": "64"
            },
            {
              "slot": "23",
              "id": "lime_dye",
              "count": "64"
            },
            {
              "slot": "24",
              "id": "lime_dye",
              "count": "64"
            },
            {
              "slot": "25",
              "id": "lime_dye",
              "count": "64"
            },
            {
              "slot": "26",
              "id": "lime_dye",
              "count": "64"
            }
          ],
          "amount": 12,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "GREEN_SHULKER_BOX",
          "content": [
            {
              "slot": "0",
              "id": "green_dye",
              "count": "64"
            },
            {
              "slot": "1",
              "id": "green_dye",
              "count": "64"
            },
            {
              "slot": "2",
              "id": "green_dye",
              "count": "64"
            },
            {
              "slot": "3",
              "id": "green_dye",
              "count": "64"
            },
            {
              "slot": "4",
              "id": "green_dye",
              "count": "64"
            },
            {
              "slot": "5",
              "id": "green_dye",
              "count": "64"
            },
            {
              "slot": "6",
              "id": "green_dye",
              "count": "64"
            },
            {
              "slot": "7",
              "id": "green_dye",
              "count": "64"
            },
            {
              "slot": "8",
              "id": "green_dye",
              "count": "64"
            },
            {
              "slot": "9",
              "id": "green_dye",
              "count": "64"
            },
            {
              "slot": "10",
              "id": "green_dye",
              "count": "64"
            },
            {
              "slot": "11",
              "id": "green_dye",
              "count": "64"
            },
            {
              "slot": "12",
              "id": "green_dye",
              "count": "64"
            },
            {
              "slot": "13",
              "id": "green_dye",
              "count": "64"
            },
            {
              "slot": "14",
              "id": "green_dye",
              "count": "64"
            },
            {
              "slot": "15",
              "id": "green_dye",
              "count": "64"
            },
            {
              "slot": "16",
              "id": "green_dye",
              "count": "64"
            },
            {
              "slot": "17",
              "id": "green_dye",
              "count": "64"
            },
            {
              "slot": "18",
              "id": "green_dye",
              "count": "64"
            },
            {
              "slot": "19",
              "id": "green_dye",
              "count": "64"
            },
            {
              "slot": "20",
              "id": "green_dye",
              "count": "64"
            },
            {
              "slot": "21",
              "id": "green_dye",
              "count": "64"
            },
            {
              "slot": "22",
              "id": "green_dye",
              "count": "64"
            },
            {
              "slot": "23",
              "id": "green_dye",
              "count": "64"
            },
            {
              "slot": "24",
              "id": "green_dye",
              "count": "64"
            },
            {
              "slot": "25",
              "id": "green_dye",
              "count": "64"
            },
            {
              "slot": "26",
              "id": "green_dye",
              "count": "64"
            }
          ],
          "amount": 12,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "CYAN_SHULKER_BOX",
          "content": [
            {
              "slot": "0",
              "id": "cyan_dye",
              "count": "64"
            },
            {
              "slot": "1",
              "id": "cyan_dye",
              "count": "64"
            },
            {
              "slot": "2",
              "id": "cyan_dye",
              "count": "64"
            },
            {
              "slot": "3",
              "id": "cyan_dye",
              "count": "64"
            },
            {
              "slot": "4",
              "id": "cyan_dye",
              "count": "64"
            },
            {
              "slot": "5",
              "id": "cyan_dye",
              "count": "64"
            },
            {
              "slot": "6",
              "id": "cyan_dye",
              "count": "64"
            },
            {
              "slot": "7",
              "id": "cyan_dye",
              "count": "64"
            },
            {
              "slot": "8",
              "id": "cyan_dye",
              "count": "64"
            },
            {
              "slot": "9",
              "id": "cyan_dye",
              "count": "64"
            },
            {
              "slot": "10",
              "id": "cyan_dye",
              "count": "64"
            },
            {
              "slot": "11",
              "id": "cyan_dye",
              "count": "64"
            },
            {
              "slot": "12",
              "id": "cyan_dye",
              "count": "64"
            },
            {
              "slot": "13",
              "id": "cyan_dye",
              "count": "64"
            },
            {
              "slot": "14",
              "id": "cyan_dye",
              "count": "64"
            },
            {
              "slot": "15",
              "id": "cyan_dye",
              "count": "64"
            },
            {
              "slot": "16",
              "id": "cyan_dye",
              "count": "64"
            },
            {
              "slot": "17",
              "id": "cyan_dye",
              "count": "64"
            },
            {
              "slot": "18",
              "id": "cyan_dye",
              "count": "64"
            },
            {
              "slot": "19",
              "id": "cyan_dye",
              "count": "64"
            },
            {
              "slot": "20",
              "id": "cyan_dye",
              "count": "64"
            },
            {
              "slot": "21",
              "id": "cyan_dye",
              "count": "64"
            },
            {
              "slot": "22",
              "id": "cyan_dye",
              "count": "64"
            },
            {
              "slot": "23",
              "id": "cyan_dye",
              "count": "64"
            },
            {
              "slot": "24",
              "id": "cyan_dye",
              "count": "64"
            },
            {
              "slot": "25",
              "id": "cyan_dye",
              "count": "64"
            },
            {
              "slot": "26",
              "id": "cyan_dye",
              "count": "64"
            }
          ],
          "amount": 12,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "LIGHT_BLUE_SHULKER_BOX",
          "content": [
            {
              "slot": "0",
              "id": "light_blue_dye",
              "count": "64"
            },
            {
              "slot": "1",
              "id": "light_blue_dye",
              "count": "64"
            },
            {
              "slot": "2",
              "id": "light_blue_dye",
              "count": "64"
            },
            {
              "slot": "3",
              "id": "light_blue_dye",
              "count": "64"
            },
            {
              "slot": "4",
              "id": "light_blue_dye",
              "count": "64"
            },
            {
              "slot": "5",
              "id": "light_blue_dye",
              "count": "64"
            },
            {
              "slot": "6",
              "id": "light_blue_dye",
              "count": "64"
            },
            {
              "slot": "7",
              "id": "light_blue_dye",
              "count": "64"
            },
            {
              "slot": "8",
              "id": "light_blue_dye",
              "count": "64"
            },
            {
              "slot": "9",
              "id": "light_blue_dye",
              "count": "64"
            },
            {
              "slot": "10",
              "id": "light_blue_dye",
              "count": "64"
            },
            {
              "slot": "11",
              "id": "light_blue_dye",
              "count": "64"
            },
            {
              "slot": "12",
              "id": "light_blue_dye",
              "count": "64"
            },
            {
              "slot": "13",
              "id": "light_blue_dye",
              "count": "64"
            },
            {
              "slot": "14",
              "id": "light_blue_dye",
              "count": "64"
            },
            {
              "slot": "15",
              "id": "light_blue_dye",
              "count": "64"
            },
            {
              "slot": "16",
              "id": "light_blue_dye",
              "count": "64"
            },
            {
              "slot": "17",
              "id": "light_blue_dye",
              "count": "64"
            },
            {
              "slot": "18",
              "id": "light_blue_dye",
              "count": "64"
            },
            {
              "slot": "19",
              "id": "light_blue_dye",
              "count": "64"
            },
            {
              "slot": "20",
              "id": "light_blue_dye",
              "count": "64"
            },
            {
              "slot": "21",
              "id": "light_blue_dye",
              "count": "64"
            },
            {
              "slot": "22",
              "id": "light_blue_dye",
              "count": "64"
            },
            {
              "slot": "23",
              "id": "light_blue_dye",
              "count": "64"
            },
            {
              "slot": "24",
              "id": "light_blue_dye",
              "count": "64"
            },
            {
              "slot": "25",
              "id": "light_blue_dye",
              "count": "64"
            },
            {
              "slot": "26",
              "id": "light_blue_dye",
              "count": "64"
            }
          ],
          "amount": 12,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "BLUE_SHULKER_BOX",
          "content": [
            {
              "slot": "0",
              "id": "blue_dye",
              "count": "64"
            },
            {
              "slot": "1",
              "id": "blue_dye",
              "count": "64"
            },
            {
              "slot": "2",
              "id": "blue_dye",
              "count": "64"
            },
            {
              "slot": "3",
              "id": "blue_dye",
              "count": "64"
            },
            {
              "slot": "4",
              "id": "blue_dye",
              "count": "64"
            },
            {
              "slot": "5",
              "id": "blue_dye",
              "count": "64"
            },
            {
              "slot": "6",
              "id": "blue_dye",
              "count": "64"
            },
            {
              "slot": "7",
              "id": "blue_dye",
              "count": "64"
            },
            {
              "slot": "8",
              "id": "blue_dye",
              "count": "64"
            },
            {
              "slot": "9",
              "id": "blue_dye",
              "count": "64"
            },
            {
              "slot": "10",
              "id": "blue_dye",
              "count": "64"
            },
            {
              "slot": "11",
              "id": "blue_dye",
              "count": "64"
            },
            {
              "slot": "12",
              "id": "blue_dye",
              "count": "64"
            },
            {
              "slot": "13",
              "id": "blue_dye",
              "count": "64"
            },
            {
              "slot": "14",
              "id": "blue_dye",
              "count": "64"
            },
            {
              "slot": "15",
              "id": "blue_dye",
              "count": "64"
            },
            {
              "slot": "16",
              "id": "blue_dye",
              "count": "64"
            },
            {
              "slot": "17",
              "id": "blue_dye",
              "count": "64"
            },
            {
              "slot": "18",
              "id": "blue_dye",
              "count": "64"
            },
            {
              "slot": "19",
              "id": "blue_dye",
              "count": "64"
            },
            {
              "slot": "20",
              "id": "blue_dye",
              "count": "64"
            },
            {
              "slot": "21",
              "id": "blue_dye",
              "count": "64"
            },
            {
              "slot": "22",
              "id": "blue_dye",
              "count": "64"
            },
            {
              "slot": "23",
              "id": "blue_dye",
              "count": "64"
            },
            {
              "slot": "24",
              "id": "blue_dye",
              "count": "64"
            },
            {
              "slot": "25",
              "id": "blue_dye",
              "count": "64"
            },
            {
              "slot": "26",
              "id": "blue_dye",
              "count": "64"
            }
          ],
          "amount": 12,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "PURPLE_SHULKER_BOX",
          "content": [
            {
              "slot": "0",
              "id": "purple_dye",
              "count": "64"
            },
            {
              "slot": "1",
              "id": "purple_dye",
              "count": "64"
            },
            {
              "slot": "2",
              "id": "purple_dye",
              "count": "64"
            },
            {
              "slot": "3",
              "id": "purple_dye",
              "count": "64"
            },
            {
              "slot": "4",
              "id": "purple_dye",
              "count": "64"
            },
            {
              "slot": "5",
              "id": "purple_dye",
              "count": "64"
            },
            {
              "slot": "6",
              "id": "purple_dye",
              "count": "64"
            },
            {
              "slot": "7",
              "id": "purple_dye",
              "count": "64"
            },
            {
              "slot": "8",
              "id": "purple_dye",
              "count": "64"
            },
            {
              "slot": "9",
              "id": "purple_dye",
              "count": "64"
            },
            {
              "slot": "10",
              "id": "purple_dye",
              "count": "64"
            },
            {
              "slot": "11",
              "id": "purple_dye",
              "count": "64"
            },
            {
              "slot": "12",
              "id": "purple_dye",
              "count": "64"
            },
            {
              "slot": "13",
              "id": "purple_dye",
              "count": "64"
            },
            {
              "slot": "14",
              "id": "purple_dye",
              "count": "64"
            },
            {
              "slot": "15",
              "id": "purple_dye",
              "count": "64"
            },
            {
              "slot": "16",
              "id": "purple_dye",
              "count": "64"
            },
            {
              "slot": "17",
              "id": "purple_dye",
              "count": "64"
            },
            {
              "slot": "18",
              "id": "purple_dye",
              "count": "64"
            },
            {
              "slot": "19",
              "id": "purple_dye",
              "count": "64"
            },
            {
              "slot": "20",
              "id": "purple_dye",
              "count": "64"
            },
            {
              "slot": "21",
              "id": "purple_dye",
              "count": "64"
            },
            {
              "slot": "22",
              "id": "purple_dye",
              "count": "64"
            },
            {
              "slot": "23",
              "id": "purple_dye",
              "count": "64"
            },
            {
              "slot": "24",
              "id": "purple_dye",
              "count": "64"
            },
            {
              "slot": "25",
              "id": "purple_dye",
              "count": "64"
            },
            {
              "slot": "26",
              "id": "purple_dye",
              "count": "64"
            }
          ],
          "amount": 12,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "MAGENTA_SHULKER_BOX",
          "content": [
            {
              "slot": "0",
              "id": "magenta_dye",
              "count": "64"
            },
            {
              "slot": "1",
              "id": "magenta_dye",
              "count": "64"
            },
            {
              "slot": "2",
              "id": "magenta_dye",
              "count": "64"
            },
            {
              "slot": "3",
              "id": "magenta_dye",
              "count": "64"
            },
            {
              "slot": "4",
              "id": "magenta_dye",
              "count": "64"
            },
            {
              "slot": "5",
              "id": "magenta_dye",
              "count": "64"
            },
            {
              "slot": "6",
              "id": "magenta_dye",
              "count": "64"
            },
            {
              "slot": "7",
              "id": "magenta_dye",
              "count": "64"
            },
            {
              "slot": "8",
              "id": "magenta_dye",
              "count": "64"
            },
            {
              "slot": "9",
              "id": "magenta_dye",
              "count": "64"
            },
            {
              "slot": "10",
              "id": "magenta_dye",
              "count": "64"
            },
            {
              "slot": "11",
              "id": "magenta_dye",
              "count": "64"
            },
            {
              "slot": "12",
              "id": "magenta_dye",
              "count": "64"
            },
            {
              "slot": "13",
              "id": "magenta_dye",
              "count": "64"
            },
            {
              "slot": "14",
              "id": "magenta_dye",
              "count": "64"
            },
            {
              "slot": "15",
              "id": "magenta_dye",
              "count": "64"
            },
            {
              "slot": "16",
              "id": "magenta_dye",
              "count": "64"
            },
            {
              "slot": "17",
              "id": "magenta_dye",
              "count": "64"
            },
            {
              "slot": "18",
              "id": "magenta_dye",
              "count": "64"
            },
            {
              "slot": "19",
              "id": "magenta_dye",
              "count": "64"
            },
            {
              "slot": "20",
              "id": "magenta_dye",
              "count": "64"
            },
            {
              "slot": "21",
              "id": "magenta_dye",
              "count": "64"
            },
            {
              "slot": "22",
              "id": "magenta_dye",
              "count": "64"
            },
            {
              "slot": "23",
              "id": "magenta_dye",
              "count": "64"
            },
            {
              "slot": "24",
              "id": "magenta_dye",
              "count": "64"
            },
            {
              "slot": "25",
              "id": "magenta_dye",
              "count": "64"
            },
            {
              "slot": "26",
              "id": "magenta_dye",
              "count": "64"
            }
          ],
          "amount": 12,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "PINK_SHULKER_BOX",
          "content": [
            {
              "slot": "0",
              "id": "pink_dye",
              "count": "64"
            },
            {
              "slot": "1",
              "id": "pink_dye",
              "count": "64"
            },
            {
              "slot": "2",
              "id": "pink_dye",
              "count": "64"
            },
            {
              "slot": "3",
              "id": "pink_dye",
              "count": "64"
            },
            {
              "slot": "4",
              "id": "pink_dye",
              "count": "64"
            },
            {
              "slot": "5",
              "id": "pink_dye",
              "count": "64"
            },
            {
              "slot": "6",
              "id": "pink_dye",
              "count": "64"
            },
            {
              "slot": "7",
              "id": "pink_dye",
              "count": "64"
            },
            {
              "slot": "8",
              "id": "pink_dye",
              "count": "64"
            },
            {
              "slot": "9",
              "id": "pink_dye",
              "count": "64"
            },
            {
              "slot": "10",
              "id": "pink_dye",
              "count": "64"
            },
            {
              "slot": "11",
              "id": "pink_dye",
              "count": "64"
            },
            {
              "slot": "12",
              "id": "pink_dye",
              "count": "64"
            },
            {
              "slot": "13",
              "id": "pink_dye",
              "count": "64"
            },
            {
              "slot": "14",
              "id": "pink_dye",
              "count": "64"
            },
            {
              "slot": "15",
              "id": "pink_dye",
              "count": "64"
            },
            {
              "slot": "16",
              "id": "pink_dye",
              "count": "64"
            },
            {
              "slot": "17",
              "id": "pink_dye",
              "count": "64"
            },
            {
              "slot": "18",
              "id": "pink_dye",
              "count": "64"
            },
            {
              "slot": "19",
              "id": "pink_dye",
              "count": "64"
            },
            {
              "slot": "20",
              "id": "pink_dye",
              "count": "64"
            },
            {
              "slot": "21",
              "id": "pink_dye",
              "count": "64"
            },
            {
              "slot": "22",
              "id": "pink_dye",
              "count": "64"
            },
            {
              "slot": "23",
              "id": "pink_dye",
              "count": "64"
            },
            {
              "slot": "24",
              "id": "pink_dye",
              "count": "64"
            },
            {
              "slot": "25",
              "id": "pink_dye",
              "count": "64"
            },
            {
              "slot": "26",
              "id": "pink_dye",
              "count": "64"
            }
          ],
          "amount": 12,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "WHITE_SHULKER_BOX",
          "content": [
            {
              "slot": "0",
              "id": "white_dye",
              "count": "64"
            },
            {
              "slot": "1",
              "id": "white_dye",
              "count": "64"
            },
            {
              "slot": "2",
              "id": "white_dye",
              "count": "64"
            },
            {
              "slot": "3",
              "id": "white_dye",
              "count": "64"
            },
            {
              "slot": "4",
              "id": "white_dye",
              "count": "64"
            },
            {
              "slot": "5",
              "id": "white_dye",
              "count": "64"
            },
            {
              "slot": "6",
              "id": "white_dye",
              "count": "64"
            },
            {
              "slot": "7",
              "id": "white_dye",
              "count": "64"
            },
            {
              "slot": "8",
              "id": "white_dye",
              "count": "64"
            },
            {
              "slot": "9",
              "id": "white_dye",
              "count": "64"
            },
            {
              "slot": "10",
              "id": "white_dye",
              "count": "64"
            },
            {
              "slot": "11",
              "id": "white_dye",
              "count": "64"
            },
            {
              "slot": "12",
              "id": "white_dye",
              "count": "64"
            },
            {
              "slot": "13",
              "id": "white_dye",
              "count": "64"
            },
            {
              "slot": "14",
              "id": "white_dye",
              "count": "64"
            },
            {
              "slot": "15",
              "id": "white_dye",
              "count": "64"
            },
            {
              "slot": "16",
              "id": "white_dye",
              "count": "64"
            },
            {
              "slot": "17",
              "id": "white_dye",
              "count": "64"
            },
            {
              "slot": "18",
              "id": "white_dye",
              "count": "64"
            },
            {
              "slot": "19",
              "id": "white_dye",
              "count": "64"
            },
            {
              "slot": "20",
              "id": "white_dye",
              "count": "64"
            },
            {
              "slot": "21",
              "id": "white_dye",
              "count": "64"
            },
            {
              "slot": "22",
              "id": "white_dye",
              "count": "64"
            },
            {
              "slot": "23",
              "id": "white_dye",
              "count": "64"
            },
            {
              "slot": "24",
              "id": "white_dye",
              "count": "64"
            },
            {
              "slot": "25",
              "id": "white_dye",
              "count": "64"
            },
            {
              "slot": "26",
              "id": "white_dye",
              "count": "64"
            }
          ],
          "amount": 12,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "LIGHT_GRAY_SHULKER_BOX",
          "content": [
            {
              "slot": "0",
              "id": "light_gray_dye",
              "count": "64"
            },
            {
              "slot": "1",
              "id": "light_gray_dye",
              "count": "64"
            },
            {
              "slot": "2",
              "id": "light_gray_dye",
              "count": "64"
            },
            {
              "slot": "3",
              "id": "light_gray_dye",
              "count": "64"
            },
            {
              "slot": "4",
              "id": "light_gray_dye",
              "count": "64"
            },
            {
              "slot": "5",
              "id": "light_gray_dye",
              "count": "64"
            },
            {
              "slot": "6",
              "id": "light_gray_dye",
              "count": "64"
            },
            {
              "slot": "7",
              "id": "light_gray_dye",
              "count": "64"
            },
            {
              "slot": "8",
              "id": "light_gray_dye",
              "count": "64"
            },
            {
              "slot": "9",
              "id": "light_gray_dye",
              "count": "64"
            },
            {
              "slot": "10",
              "id": "light_gray_dye",
              "count": "64"
            },
            {
              "slot": "11",
              "id": "light_gray_dye",
              "count": "64"
            },
            {
              "slot": "12",
              "id": "light_gray_dye",
              "count": "64"
            },
            {
              "slot": "13",
              "id": "light_gray_dye",
              "count": "64"
            },
            {
              "slot": "14",
              "id": "light_gray_dye",
              "count": "64"
            },
            {
              "slot": "15",
              "id": "light_gray_dye",
              "count": "64"
            },
            {
              "slot": "16",
              "id": "light_gray_dye",
              "count": "64"
            },
            {
              "slot": "17",
              "id": "light_gray_dye",
              "count": "64"
            },
            {
              "slot": "18",
              "id": "light_gray_dye",
              "count": "64"
            },
            {
              "slot": "19",
              "id": "light_gray_dye",
              "count": "64"
            },
            {
              "slot": "20",
              "id": "light_gray_dye",
              "count": "64"
            },
            {
              "slot": "21",
              "id": "light_gray_dye",
              "count": "64"
            },
            {
              "slot": "22",
              "id": "light_gray_dye",
              "count": "64"
            },
            {
              "slot": "23",
              "id": "light_gray_dye",
              "count": "64"
            },
            {
              "slot": "24",
              "id": "light_gray_dye",
              "count": "64"
            },
            {
              "slot": "25",
              "id": "light_gray_dye",
              "count": "64"
            },
            {
              "slot": "26",
              "id": "light_gray_dye",
              "count": "64"
            }
          ],
          "amount": 12,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "GRAY_SHULKER_BOX",
          "content": [
            {
              "slot": "0",
              "id": "gray_dye",
              "count": "64"
            },
            {
              "slot": "1",
              "id": "gray_dye",
              "count": "64"
            },
            {
              "slot": "2",
              "id": "gray_dye",
              "count": "64"
            },
            {
              "slot": "3",
              "id": "gray_dye",
              "count": "64"
            },
            {
              "slot": "4",
              "id": "gray_dye",
              "count": "64"
            },
            {
              "slot": "5",
              "id": "gray_dye",
              "count": "64"
            },
            {
              "slot": "6",
              "id": "gray_dye",
              "count": "64"
            },
            {
              "slot": "7",
              "id": "gray_dye",
              "count": "64"
            },
            {
              "slot": "8",
              "id": "gray_dye",
              "count": "64"
            },
            {
              "slot": "9",
              "id": "gray_dye",
              "count": "64"
            },
            {
              "slot": "10",
              "id": "gray_dye",
              "count": "64"
            },
            {
              "slot": "11",
              "id": "gray_dye",
              "count": "64"
            },
            {
              "slot": "12",
              "id": "gray_dye",
              "count": "64"
            },
            {
              "slot": "13",
              "id": "gray_dye",
              "count": "64"
            },
            {
              "slot": "14",
              "id": "gray_dye",
              "count": "64"
            },
            {
              "slot": "15",
              "id": "gray_dye",
              "count": "64"
            },
            {
              "slot": "16",
              "id": "gray_dye",
              "count": "64"
            },
            {
              "slot": "17",
              "id": "gray_dye",
              "count": "64"
            },
            {
              "slot": "18",
              "id": "gray_dye",
              "count": "64"
            },
            {
              "slot": "19",
              "id": "gray_dye",
              "count": "64"
            },
            {
              "slot": "20",
              "id": "gray_dye",
              "count": "64"
            },
            {
              "slot": "21",
              "id": "gray_dye",
              "count": "64"
            },
            {
              "slot": "22",
              "id": "gray_dye",
              "count": "64"
            },
            {
              "slot": "23",
              "id": "gray_dye",
              "count": "64"
            },
            {
              "slot": "24",
              "id": "gray_dye",
              "count": "64"
            },
            {
              "slot": "25",
              "id": "gray_dye",
              "count": "64"
            },
            {
              "slot": "26",
              "id": "gray_dye",
              "count": "64"
            }
          ],
          "amount": 12,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "BLACK_SHULKER_BOX",
          "content": [
            {
              "slot": "0",
              "id": "black_dye",
              "count": "64"
            },
            {
              "slot": "1",
              "id": "black_dye",
              "count": "64"
            },
            {
              "slot": "2",
              "id": "black_dye",
              "count": "64"
            },
            {
              "slot": "3",
              "id": "black_dye",
              "count": "64"
            },
            {
              "slot": "4",
              "id": "black_dye",
              "count": "64"
            },
            {
              "slot": "5",
              "id": "black_dye",
              "count": "64"
            },
            {
              "slot": "6",
              "id": "black_dye",
              "count": "64"
            },
            {
              "slot": "7",
              "id": "black_dye",
              "count": "64"
            },
            {
              "slot": "8",
              "id": "black_dye",
              "count": "64"
            },
            {
              "slot": "9",
              "id": "black_dye",
              "count": "64"
            },
            {
              "slot": "10",
              "id": "black_dye",
              "count": "64"
            },
            {
              "slot": "11",
              "id": "black_dye",
              "count": "64"
            },
            {
              "slot": "12",
              "id": "black_dye",
              "count": "64"
            },
            {
              "slot": "13",
              "id": "black_dye",
              "count": "64"
            },
            {
              "slot": "14",
              "id": "black_dye",
              "count": "64"
            },
            {
              "slot": "15",
              "id": "black_dye",
              "count": "64"
            },
            {
              "slot": "16",
              "id": "black_dye",
              "count": "64"
            },
            {
              "slot": "17",
              "id": "black_dye",
              "count": "64"
            },
            {
              "slot": "18",
              "id": "black_dye",
              "count": "64"
            },
            {
              "slot": "19",
              "id": "black_dye",
              "count": "64"
            },
            {
              "slot": "20",
              "id": "black_dye",
              "count": "64"
            },
            {
              "slot": "21",
              "id": "black_dye",
              "count": "64"
            },
            {
              "slot": "22",
              "id": "black_dye",
              "count": "64"
            },
            {
              "slot": "23",
              "id": "black_dye",
              "count": "64"
            },
            {
              "slot": "24",
              "id": "black_dye",
              "count": "64"
            },
            {
              "slot": "25",
              "id": "black_dye",
              "count": "64"
            },
            {
              "slot": "26",
              "id": "black_dye",
              "count": "64"
            }
          ],
          "amount": 12,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "BROWN_SHULKER_BOX",
          "content": [
            {
              "slot": "0",
              "id": "brown_dye",
              "count": "64"
            },
            {
              "slot": "1",
              "id": "brown_dye",
              "count": "64"
            },
            {
              "slot": "2",
              "id": "brown_dye",
              "count": "64"
            },
            {
              "slot": "3",
              "id": "brown_dye",
              "count": "64"
            },
            {
              "slot": "4",
              "id": "brown_dye",
              "count": "64"
            },
            {
              "slot": "5",
              "id": "brown_dye",
              "count": "64"
            },
            {
              "slot": "6",
              "id": "brown_dye",
              "count": "64"
            },
            {
              "slot": "7",
              "id": "brown_dye",
              "count": "64"
            },
            {
              "slot": "8",
              "id": "brown_dye",
              "count": "64"
            },
            {
              "slot": "9",
              "id": "brown_dye",
              "count": "64"
            },
            {
              "slot": "10",
              "id": "brown_dye",
              "count": "64"
            },
            {
              "slot": "11",
              "id": "brown_dye",
              "count": "64"
            },
            {
              "slot": "12",
              "id": "brown_dye",
              "count": "64"
            },
            {
              "slot": "13",
              "id": "brown_dye",
              "count": "64"
            },
            {
              "slot": "14",
              "id": "brown_dye",
              "count": "64"
            },
            {
              "slot": "15",
              "id": "brown_dye",
              "count": "64"
            },
            {
              "slot": "16",
              "id": "brown_dye",
              "count": "64"
            },
            {
              "slot": "17",
              "id": "brown_dye",
              "count": "64"
            },
            {
              "slot": "18",
              "id": "brown_dye",
              "count": "64"
            },
            {
              "slot": "19",
              "id": "brown_dye",
              "count": "64"
            },
            {
              "slot": "20",
              "id": "brown_dye",
              "count": "64"
            },
            {
              "slot": "21",
              "id": "brown_dye",
              "count": "64"
            },
            {
              "slot": "22",
              "id": "brown_dye",
              "count": "64"
            },
            {
              "slot": "23",
              "id": "brown_dye",
              "count": "64"
            },
            {
              "slot": "24",
              "id": "brown_dye",
              "count": "64"
            },
            {
              "slot": "25",
              "id": "brown_dye",
              "count": "64"
            },
            {
              "slot": "26",
              "id": "brown_dye",
              "count": "64"
            }
          ],
          "amount": 12,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        }
      ]
    },
    {
      "name": "ytka_sorry_t9",
      "offers": [
        {
          "name": "SHULKER_BOX",
          "content": [
            {
              "slot": "0",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "1",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "2",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "3",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "4",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "5",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "6",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "7",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "8",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "9",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "10",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "11",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "12",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "13",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "14",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "15",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "16",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "17",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "18",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "19",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "20",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "21",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "22",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "23",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "24",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "25",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "26",
              "id": "firework_rocket",
              "count": "64"
            }
          ],
          "amount": 4,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "SHULKER_BOX",
          "content": [
            {
              "slot": "0",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "1",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "2",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "3",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "4",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "5",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "6",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "7",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "8",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "9",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "10",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "11",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "12",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "13",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "14",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "15",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "16",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "17",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "18",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "19",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "20",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "21",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "22",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "23",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "24",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "25",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "26",
              "id": "firework_rocket",
              "count": "64"
            }
          ],
          "amount": 8,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "SHULKER_BOX",
          "content": [
            {
              "slot": "0",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "1",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "2",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "3",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "4",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "5",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "6",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "7",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "8",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "9",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "10",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "11",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "12",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "13",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "14",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "15",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "16",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "17",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "18",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "19",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "20",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "21",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "22",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "23",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "24",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "25",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "26",
              "id": "firework_rocket",
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
              "id": "tnt",
              "count": "64"
            },
            {
              "slot": "1",
              "id": "tnt",
              "count": "64"
            },
            {
              "slot": "2",
              "id": "tnt",
              "count": "64"
            },
            {
              "slot": "3",
              "id": "tnt",
              "count": "64"
            },
            {
              "slot": "4",
              "id": "tnt",
              "count": "64"
            },
            {
              "slot": "5",
              "id": "tnt",
              "count": "64"
            },
            {
              "slot": "6",
              "id": "tnt",
              "count": "64"
            },
            {
              "slot": "7",
              "id": "tnt",
              "count": "64"
            },
            {
              "slot": "8",
              "id": "tnt",
              "count": "64"
            },
            {
              "slot": "9",
              "id": "tnt",
              "count": "64"
            },
            {
              "slot": "10",
              "id": "tnt",
              "count": "64"
            },
            {
              "slot": "11",
              "id": "tnt",
              "count": "64"
            },
            {
              "slot": "12",
              "id": "tnt",
              "count": "64"
            },
            {
              "slot": "13",
              "id": "tnt",
              "count": "64"
            },
            {
              "slot": "14",
              "id": "tnt",
              "count": "64"
            },
            {
              "slot": "15",
              "id": "tnt",
              "count": "64"
            },
            {
              "slot": "16",
              "id": "tnt",
              "count": "64"
            },
            {
              "slot": "17",
              "id": "tnt",
              "count": "64"
            },
            {
              "slot": "18",
              "id": "tnt",
              "count": "64"
            },
            {
              "slot": "19",
              "id": "tnt",
              "count": "64"
            },
            {
              "slot": "20",
              "id": "tnt",
              "count": "64"
            },
            {
              "slot": "21",
              "id": "tnt",
              "count": "64"
            },
            {
              "slot": "22",
              "id": "tnt",
              "count": "64"
            },
            {
              "slot": "23",
              "id": "tnt",
              "count": "64"
            },
            {
              "slot": "24",
              "id": "tnt",
              "count": "64"
            },
            {
              "slot": "25",
              "id": "tnt",
              "count": "64"
            },
            {
              "slot": "26",
              "id": "tnt",
              "count": "64"
            }
          ],
          "amount": 64,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "SHULKER_BOX",
          "content": [
            {
              "slot": "0",
              "id": "tnt",
              "count": "64"
            },
            {
              "slot": "1",
              "id": "tnt",
              "count": "64"
            },
            {
              "slot": "2",
              "id": "tnt",
              "count": "64"
            },
            {
              "slot": "3",
              "id": "tnt",
              "count": "64"
            },
            {
              "slot": "4",
              "id": "tnt",
              "count": "64"
            },
            {
              "slot": "5",
              "id": "tnt",
              "count": "64"
            },
            {
              "slot": "6",
              "id": "tnt",
              "count": "64"
            },
            {
              "slot": "7",
              "id": "tnt",
              "count": "64"
            },
            {
              "slot": "8",
              "id": "tnt",
              "count": "64"
            },
            {
              "slot": "9",
              "id": "tnt",
              "count": "64"
            },
            {
              "slot": "10",
              "id": "tnt",
              "count": "64"
            },
            {
              "slot": "11",
              "id": "tnt",
              "count": "64"
            },
            {
              "slot": "12",
              "id": "tnt",
              "count": "64"
            },
            {
              "slot": "13",
              "id": "tnt",
              "count": "64"
            },
            {
              "slot": "14",
              "id": "tnt",
              "count": "64"
            },
            {
              "slot": "15",
              "id": "tnt",
              "count": "64"
            },
            {
              "slot": "16",
              "id": "tnt",
              "count": "64"
            },
            {
              "slot": "17",
              "id": "tnt",
              "count": "64"
            },
            {
              "slot": "18",
              "id": "potion",
              "count": "1"
            },
            {
              "slot": "19",
              "id": "potion",
              "count": "1"
            },
            {
              "slot": "20",
              "id": "potion",
              "count": "1"
            },
            {
              "slot": "21",
              "id": "potion",
              "count": "1"
            },
            {
              "slot": "22",
              "id": "potion",
              "count": "1"
            },
            {
              "slot": "23",
              "id": "potion",
              "count": "1"
            },
            {
              "slot": "24",
              "id": "potion",
              "count": "1"
            },
            {
              "slot": "25",
              "id": "potion",
              "count": "1"
            },
            {
              "slot": "26",
              "id": "potion",
              "count": "1"
            }
          ],
          "amount": 48,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "SHULKER_BOX",
          "content": [
            {
              "slot": "0",
              "id": "potion",
              "count": "1"
            },
            {
              "slot": "1",
              "id": "potion",
              "count": "1"
            },
            {
              "slot": "2",
              "id": "potion",
              "count": "1"
            },
            {
              "slot": "3",
              "id": "potion",
              "count": "1"
            },
            {
              "slot": "4",
              "id": "potion",
              "count": "1"
            },
            {
              "slot": "5",
              "id": "potion",
              "count": "1"
            },
            {
              "slot": "6",
              "id": "potion",
              "count": "1"
            },
            {
              "slot": "7",
              "id": "potion",
              "count": "1"
            },
            {
              "slot": "8",
              "id": "potion",
              "count": "1"
            },
            {
              "slot": "9",
              "id": "potion",
              "count": "1"
            },
            {
              "slot": "10",
              "id": "potion",
              "count": "1"
            },
            {
              "slot": "11",
              "id": "potion",
              "count": "1"
            },
            {
              "slot": "12",
              "id": "potion",
              "count": "1"
            },
            {
              "slot": "13",
              "id": "potion",
              "count": "1"
            },
            {
              "slot": "14",
              "id": "potion",
              "count": "1"
            },
            {
              "slot": "15",
              "id": "potion",
              "count": "1"
            },
            {
              "slot": "16",
              "id": "potion",
              "count": "1"
            },
            {
              "slot": "17",
              "id": "potion",
              "count": "1"
            },
            {
              "slot": "18",
              "id": "potion",
              "count": "1"
            },
            {
              "slot": "19",
              "id": "potion",
              "count": "1"
            },
            {
              "slot": "20",
              "id": "potion",
              "count": "1"
            },
            {
              "slot": "21",
              "id": "potion",
              "count": "1"
            },
            {
              "slot": "22",
              "id": "potion",
              "count": "1"
            },
            {
              "slot": "23",
              "id": "potion",
              "count": "1"
            },
            {
              "slot": "24",
              "id": "potion",
              "count": "1"
            },
            {
              "slot": "25",
              "id": "potion",
              "count": "1"
            },
            {
              "slot": "26",
              "id": "potion",
              "count": "1"
            }
          ],
          "amount": 16,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "SHULKER_BOX",
          "content": [
            {
              "slot": "0",
              "id": "totem_of_undying",
              "count": "1"
            },
            {
              "slot": "1",
              "id": "totem_of_undying",
              "count": "1"
            },
            {
              "slot": "2",
              "id": "totem_of_undying",
              "count": "1"
            },
            {
              "slot": "3",
              "id": "totem_of_undying",
              "count": "1"
            },
            {
              "slot": "4",
              "id": "totem_of_undying",
              "count": "1"
            },
            {
              "slot": "5",
              "id": "totem_of_undying",
              "count": "1"
            },
            {
              "slot": "6",
              "id": "totem_of_undying",
              "count": "1"
            },
            {
              "slot": "7",
              "id": "totem_of_undying",
              "count": "1"
            },
            {
              "slot": "8",
              "id": "totem_of_undying",
              "count": "1"
            },
            {
              "slot": "9",
              "id": "totem_of_undying",
              "count": "1"
            },
            {
              "slot": "10",
              "id": "totem_of_undying",
              "count": "1"
            },
            {
              "slot": "11",
              "id": "totem_of_undying",
              "count": "1"
            },
            {
              "slot": "12",
              "id": "totem_of_undying",
              "count": "1"
            },
            {
              "slot": "13",
              "id": "totem_of_undying",
              "count": "1"
            },
            {
              "slot": "14",
              "id": "totem_of_undying",
              "count": "1"
            },
            {
              "slot": "15",
              "id": "totem_of_undying",
              "count": "1"
            },
            {
              "slot": "16",
              "id": "totem_of_undying",
              "count": "1"
            },
            {
              "slot": "17",
              "id": "totem_of_undying",
              "count": "1"
            },
            {
              "slot": "18",
              "id": "totem_of_undying",
              "count": "1"
            },
            {
              "slot": "19",
              "id": "totem_of_undying",
              "count": "1"
            },
            {
              "slot": "20",
              "id": "totem_of_undying",
              "count": "1"
            },
            {
              "slot": "21",
              "id": "totem_of_undying",
              "count": "1"
            },
            {
              "slot": "22",
              "id": "totem_of_undying",
              "count": "1"
            },
            {
              "slot": "23",
              "id": "totem_of_undying",
              "count": "1"
            },
            {
              "slot": "24",
              "id": "totem_of_undying",
              "count": "1"
            },
            {
              "slot": "25",
              "id": "totem_of_undying",
              "count": "1"
            },
            {
              "slot": "26",
              "id": "totem_of_undying",
              "count": "1"
            }
          ],
          "amount": 18,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "SHULKER_BOX",
          "content": [
            {
              "slot": "0",
              "id": "honeycomb",
              "count": "64"
            },
            {
              "slot": "1",
              "id": "honeycomb",
              "count": "64"
            },
            {
              "slot": "2",
              "id": "honeycomb",
              "count": "64"
            },
            {
              "slot": "3",
              "id": "honeycomb",
              "count": "64"
            },
            {
              "slot": "4",
              "id": "honeycomb",
              "count": "64"
            },
            {
              "slot": "5",
              "id": "honeycomb",
              "count": "64"
            },
            {
              "slot": "6",
              "id": "honeycomb",
              "count": "64"
            },
            {
              "slot": "7",
              "id": "honeycomb",
              "count": "64"
            },
            {
              "slot": "8",
              "id": "honeycomb",
              "count": "64"
            },
            {
              "slot": "9",
              "id": "honeycomb",
              "count": "64"
            },
            {
              "slot": "10",
              "id": "honeycomb",
              "count": "64"
            },
            {
              "slot": "11",
              "id": "honeycomb",
              "count": "64"
            },
            {
              "slot": "12",
              "id": "honeycomb",
              "count": "64"
            },
            {
              "slot": "13",
              "id": "honeycomb",
              "count": "64"
            },
            {
              "slot": "14",
              "id": "honeycomb",
              "count": "64"
            },
            {
              "slot": "15",
              "id": "honeycomb",
              "count": "64"
            },
            {
              "slot": "16",
              "id": "honeycomb",
              "count": "64"
            },
            {
              "slot": "17",
              "id": "honeycomb",
              "count": "64"
            },
            {
              "slot": "18",
              "id": "honeycomb",
              "count": "64"
            },
            {
              "slot": "19",
              "id": "honeycomb",
              "count": "64"
            },
            {
              "slot": "20",
              "id": "honeycomb",
              "count": "64"
            },
            {
              "slot": "21",
              "id": "honeycomb",
              "count": "64"
            },
            {
              "slot": "22",
              "id": "honeycomb",
              "count": "64"
            },
            {
              "slot": "23",
              "id": "honeycomb",
              "count": "64"
            },
            {
              "slot": "24",
              "id": "honeycomb",
              "count": "64"
            },
            {
              "slot": "25",
              "id": "honeycomb",
              "count": "64"
            },
            {
              "slot": "26",
              "id": "honeycomb",
              "count": "64"
            }
          ],
          "amount": 32,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "HONEY_BLOCK",
          "content": [],
          "amount": 10,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "TRIDENT",
          "content": [
            {
              "enchants": {
                "MENDING": 1,
                "RIPTIDE": 3,
                "DURABILITY": 3
              }
            }
          ],
          "amount": 15,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "TRIDENT",
          "content": [
            {
              "enchants": {
                "CHANNELING": 1,
                "IMPALING": 5,
                "LOYALTY": 3,
                "MENDING": 1,
                "DURABILITY": 3
              }
            }
          ],
          "amount": 22,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "ELYTRA",
          "content": [],
          "amount": 64,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "ELYTRA",
          "content": [
            {
              "enchants": {
                "MENDING": 1,
                "DURABILITY": 3
              }
            }
          ],
          "amount": 64,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "NETHERITE_INGOT",
          "content": [],
          "amount": 13,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "DEEPSLATE_DIAMOND_ORE",
          "content": [],
          "amount": 1,
          "currency": "NETHERITE_INGOT"
        },
        {
          "name": "MUSIC_DISC_PIGSTEP",
          "content": [],
          "amount": 64,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "PIGLIN_BANNER_PATTERN",
          "content": [],
          "amount": 10,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "DRAGON_HEAD",
          "content": [],
          "amount": 10,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "POWDER_SNOW_BUCKET",
          "content": [],
          "amount": 10,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "ENCHANTED_GOLDEN_APPLE",
          "content": [],
          "amount": 64,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "SHULKER_BOX",
          "content": [
            {
              "slot": "0",
              "id": "amethyst_shard",
              "count": "64"
            },
            {
              "slot": "1",
              "id": "amethyst_shard",
              "count": "64"
            },
            {
              "slot": "2",
              "id": "amethyst_shard",
              "count": "64"
            },
            {
              "slot": "3",
              "id": "amethyst_shard",
              "count": "64"
            },
            {
              "slot": "4",
              "id": "amethyst_shard",
              "count": "64"
            },
            {
              "slot": "5",
              "id": "amethyst_shard",
              "count": "64"
            },
            {
              "slot": "6",
              "id": "amethyst_shard",
              "count": "64"
            },
            {
              "slot": "7",
              "id": "amethyst_shard",
              "count": "64"
            },
            {
              "slot": "8",
              "id": "amethyst_shard",
              "count": "64"
            },
            {
              "slot": "9",
              "id": "amethyst_shard",
              "count": "64"
            },
            {
              "slot": "10",
              "id": "amethyst_shard",
              "count": "64"
            },
            {
              "slot": "11",
              "id": "amethyst_shard",
              "count": "64"
            },
            {
              "slot": "12",
              "id": "amethyst_shard",
              "count": "64"
            },
            {
              "slot": "13",
              "id": "amethyst_shard",
              "count": "64"
            },
            {
              "slot": "14",
              "id": "amethyst_shard",
              "count": "64"
            },
            {
              "slot": "15",
              "id": "amethyst_shard",
              "count": "64"
            },
            {
              "slot": "16",
              "id": "amethyst_shard",
              "count": "64"
            },
            {
              "slot": "17",
              "id": "amethyst_shard",
              "count": "64"
            },
            {
              "slot": "18",
              "id": "amethyst_shard",
              "count": "64"
            },
            {
              "slot": "19",
              "id": "amethyst_shard",
              "count": "64"
            },
            {
              "slot": "20",
              "id": "amethyst_shard",
              "count": "64"
            },
            {
              "slot": "21",
              "id": "amethyst_shard",
              "count": "64"
            },
            {
              "slot": "22",
              "id": "amethyst_shard",
              "count": "64"
            },
            {
              "slot": "23",
              "id": "amethyst_shard",
              "count": "64"
            },
            {
              "slot": "24",
              "id": "amethyst_shard",
              "count": "64"
            },
            {
              "slot": "25",
              "id": "amethyst_shard",
              "count": "64"
            },
            {
              "slot": "26",
              "id": "amethyst_shard",
              "count": "64"
            }
          ],
          "amount": 64,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "ENCHANTED_BOOK",
          "content": [],
          "amount": 15,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        }
      ]
    },
    {
      "name": "SoftPanda3",
      "offers": [
        {
          "name": "DEEPSLATE_DIAMOND_ORE",
          "content": [],
          "amount": 12,
          "currency": "DIAMOND"
        },
        {
          "name": "SHULKER_BOX",
          "content": [
            {
              "slot": "0",
              "id": "deepslate_diamond_ore",
              "count": "10"
            }
          ],
          "amount": 1,
          "currency": "SHULKER_BOX"
        },
        {
          "name": "YELLOW_SHULKER_BOX",
          "content": [
            {
              "slot": "0",
              "id": "diamond_shovel",
              "count": "1"
            },
            {
              "slot": "1",
              "id": "diamond_shovel",
              "count": "1"
            },
            {
              "slot": "2",
              "id": "diamond_shovel",
              "count": "1"
            },
            {
              "slot": "3",
              "id": "diamond_shovel",
              "count": "1"
            },
            {
              "slot": "4",
              "id": "diamond_shovel",
              "count": "1"
            },
            {
              "slot": "5",
              "id": "diamond_shovel",
              "count": "1"
            },
            {
              "slot": "6",
              "id": "diamond_shovel",
              "count": "1"
            },
            {
              "slot": "7",
              "id": "diamond_shovel",
              "count": "1"
            },
            {
              "slot": "8",
              "id": "diamond_shovel",
              "count": "1"
            }
          ],
          "amount": 64,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        }
      ]
    },
    {
      "name": "prestig9110",
      "offers": [
        {
          "name": "PAPER",
          "content": [
            {
              "enchants": {
                "DURABILITY": 10
              }
            }
          ],
          "amount": 1,
          "currency": "PAPER"
        }
      ]
    },
    {
      "name": "SolyankaXD",
      "offers": [
        {
          "name": "TURTLE_EGG",
          "content": [],
          "amount": 2,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "SUNFLOWER",
          "content": [],
          "amount": 3,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "ORANGE_SHULKER_BOX",
          "content": [
            {
              "slot": "0",
              "id": "carrot",
              "count": "64"
            },
            {
              "slot": "1",
              "id": "carrot",
              "count": "64"
            },
            {
              "slot": "2",
              "id": "carrot",
              "count": "64"
            },
            {
              "slot": "3",
              "id": "carrot",
              "count": "64"
            },
            {
              "slot": "4",
              "id": "carrot",
              "count": "64"
            },
            {
              "slot": "5",
              "id": "carrot",
              "count": "64"
            },
            {
              "slot": "6",
              "id": "carrot",
              "count": "64"
            },
            {
              "slot": "7",
              "id": "carrot",
              "count": "64"
            },
            {
              "slot": "8",
              "id": "carrot",
              "count": "64"
            },
            {
              "slot": "9",
              "id": "carrot",
              "count": "64"
            },
            {
              "slot": "10",
              "id": "carrot",
              "count": "64"
            },
            {
              "slot": "11",
              "id": "carrot",
              "count": "64"
            },
            {
              "slot": "12",
              "id": "carrot",
              "count": "64"
            },
            {
              "slot": "13",
              "id": "carrot",
              "count": "64"
            },
            {
              "slot": "14",
              "id": "carrot",
              "count": "64"
            },
            {
              "slot": "15",
              "id": "carrot",
              "count": "64"
            },
            {
              "slot": "16",
              "id": "carrot",
              "count": "64"
            },
            {
              "slot": "17",
              "id": "carrot",
              "count": "64"
            },
            {
              "slot": "18",
              "id": "carrot",
              "count": "64"
            },
            {
              "slot": "19",
              "id": "carrot",
              "count": "64"
            },
            {
              "slot": "20",
              "id": "carrot",
              "count": "64"
            },
            {
              "slot": "21",
              "id": "carrot",
              "count": "64"
            },
            {
              "slot": "22",
              "id": "carrot",
              "count": "64"
            },
            {
              "slot": "23",
              "id": "carrot",
              "count": "64"
            },
            {
              "slot": "24",
              "id": "carrot",
              "count": "64"
            },
            {
              "slot": "25",
              "id": "carrot",
              "count": "64"
            },
            {
              "slot": "26",
              "id": "carrot",
              "count": "64"
            }
          ],
          "amount": 6,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "YELLOW_SHULKER_BOX",
          "content": [
            {
              "slot": "0",
              "id": "potato",
              "count": "64"
            },
            {
              "slot": "1",
              "id": "potato",
              "count": "64"
            },
            {
              "slot": "2",
              "id": "potato",
              "count": "64"
            },
            {
              "slot": "3",
              "id": "potato",
              "count": "64"
            },
            {
              "slot": "4",
              "id": "potato",
              "count": "64"
            },
            {
              "slot": "5",
              "id": "potato",
              "count": "64"
            },
            {
              "slot": "6",
              "id": "potato",
              "count": "64"
            },
            {
              "slot": "7",
              "id": "potato",
              "count": "64"
            },
            {
              "slot": "8",
              "id": "potato",
              "count": "64"
            },
            {
              "slot": "9",
              "id": "potato",
              "count": "64"
            },
            {
              "slot": "10",
              "id": "potato",
              "count": "64"
            },
            {
              "slot": "11",
              "id": "potato",
              "count": "64"
            },
            {
              "slot": "12",
              "id": "potato",
              "count": "64"
            },
            {
              "slot": "13",
              "id": "potato",
              "count": "64"
            },
            {
              "slot": "14",
              "id": "potato",
              "count": "64"
            },
            {
              "slot": "15",
              "id": "potato",
              "count": "64"
            },
            {
              "slot": "16",
              "id": "potato",
              "count": "64"
            },
            {
              "slot": "17",
              "id": "potato",
              "count": "64"
            },
            {
              "slot": "18",
              "id": "potato",
              "count": "64"
            },
            {
              "slot": "19",
              "id": "potato",
              "count": "64"
            },
            {
              "slot": "20",
              "id": "potato",
              "count": "64"
            },
            {
              "slot": "21",
              "id": "potato",
              "count": "64"
            },
            {
              "slot": "22",
              "id": "potato",
              "count": "64"
            },
            {
              "slot": "23",
              "id": "potato",
              "count": "64"
            },
            {
              "slot": "24",
              "id": "potato",
              "count": "64"
            },
            {
              "slot": "25",
              "id": "potato",
              "count": "64"
            },
            {
              "slot": "26",
              "id": "potato",
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
              "id": "wheat_seeds",
              "count": "64"
            },
            {
              "slot": "1",
              "id": "wheat_seeds",
              "count": "64"
            },
            {
              "slot": "2",
              "id": "wheat_seeds",
              "count": "64"
            },
            {
              "slot": "3",
              "id": "wheat_seeds",
              "count": "64"
            },
            {
              "slot": "4",
              "id": "wheat_seeds",
              "count": "64"
            },
            {
              "slot": "5",
              "id": "wheat_seeds",
              "count": "64"
            },
            {
              "slot": "6",
              "id": "wheat_seeds",
              "count": "64"
            },
            {
              "slot": "7",
              "id": "wheat_seeds",
              "count": "64"
            },
            {
              "slot": "8",
              "id": "wheat_seeds",
              "count": "64"
            },
            {
              "slot": "9",
              "id": "wheat_seeds",
              "count": "64"
            },
            {
              "slot": "10",
              "id": "wheat_seeds",
              "count": "64"
            },
            {
              "slot": "11",
              "id": "wheat_seeds",
              "count": "64"
            },
            {
              "slot": "12",
              "id": "wheat_seeds",
              "count": "64"
            },
            {
              "slot": "13",
              "id": "wheat_seeds",
              "count": "64"
            },
            {
              "slot": "14",
              "id": "wheat_seeds",
              "count": "64"
            },
            {
              "slot": "15",
              "id": "wheat_seeds",
              "count": "64"
            },
            {
              "slot": "16",
              "id": "wheat_seeds",
              "count": "64"
            },
            {
              "slot": "17",
              "id": "wheat_seeds",
              "count": "64"
            },
            {
              "slot": "18",
              "id": "wheat_seeds",
              "count": "64"
            },
            {
              "slot": "19",
              "id": "wheat_seeds",
              "count": "64"
            },
            {
              "slot": "20",
              "id": "wheat_seeds",
              "count": "64"
            },
            {
              "slot": "21",
              "id": "wheat_seeds",
              "count": "64"
            },
            {
              "slot": "22",
              "id": "wheat_seeds",
              "count": "64"
            },
            {
              "slot": "23",
              "id": "wheat_seeds",
              "count": "64"
            },
            {
              "slot": "24",
              "id": "wheat_seeds",
              "count": "64"
            },
            {
              "slot": "25",
              "id": "wheat_seeds",
              "count": "64"
            },
            {
              "slot": "26",
              "id": "wheat_seeds",
              "count": "64"
            }
          ],
          "amount": 6,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "MELON",
          "content": [],
          "amount": 3,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "TWISTING_VINES",
          "content": [],
          "amount": 2,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "WEEPING_VINES",
          "content": [],
          "amount": 3,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "GLOW_BERRIES",
          "content": [],
          "amount": 2,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "VINE",
          "content": [],
          "amount": 1,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "PUMPKIN",
          "content": [],
          "amount": 3,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "WHITE_SHULKER_BOX",
          "content": [
            {
              "slot": "0",
              "id": "wheat",
              "count": "64"
            },
            {
              "slot": "1",
              "id": "wheat",
              "count": "64"
            },
            {
              "slot": "2",
              "id": "wheat",
              "count": "64"
            },
            {
              "slot": "3",
              "id": "wheat",
              "count": "64"
            },
            {
              "slot": "4",
              "id": "wheat",
              "count": "64"
            },
            {
              "slot": "5",
              "id": "wheat",
              "count": "64"
            },
            {
              "slot": "6",
              "id": "wheat",
              "count": "64"
            },
            {
              "slot": "7",
              "id": "wheat",
              "count": "64"
            },
            {
              "slot": "8",
              "id": "wheat",
              "count": "64"
            },
            {
              "slot": "9",
              "id": "wheat",
              "count": "64"
            },
            {
              "slot": "10",
              "id": "wheat",
              "count": "64"
            },
            {
              "slot": "11",
              "id": "wheat",
              "count": "64"
            },
            {
              "slot": "12",
              "id": "wheat",
              "count": "64"
            },
            {
              "slot": "13",
              "id": "wheat",
              "count": "64"
            },
            {
              "slot": "14",
              "id": "wheat",
              "count": "64"
            },
            {
              "slot": "15",
              "id": "wheat",
              "count": "64"
            },
            {
              "slot": "16",
              "id": "wheat",
              "count": "64"
            },
            {
              "slot": "17",
              "id": "wheat",
              "count": "64"
            },
            {
              "slot": "18",
              "id": "wheat",
              "count": "64"
            },
            {
              "slot": "19",
              "id": "wheat",
              "count": "64"
            },
            {
              "slot": "20",
              "id": "wheat",
              "count": "64"
            },
            {
              "slot": "21",
              "id": "wheat",
              "count": "64"
            },
            {
              "slot": "22",
              "id": "wheat",
              "count": "64"
            },
            {
              "slot": "23",
              "id": "wheat",
              "count": "64"
            },
            {
              "slot": "24",
              "id": "wheat",
              "count": "64"
            },
            {
              "slot": "25",
              "id": "wheat",
              "count": "64"
            },
            {
              "slot": "26",
              "id": "wheat",
              "count": "64"
            }
          ],
          "amount": 25,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "FERN",
          "content": [],
          "amount": 2,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "MAGENTA_SHULKER_BOX",
          "content": [
            {
              "slot": "0",
              "id": "golden_carrot",
              "count": "64"
            },
            {
              "slot": "1",
              "id": "golden_carrot",
              "count": "64"
            },
            {
              "slot": "2",
              "id": "golden_carrot",
              "count": "64"
            },
            {
              "slot": "3",
              "id": "golden_carrot",
              "count": "64"
            },
            {
              "slot": "4",
              "id": "golden_carrot",
              "count": "64"
            },
            {
              "slot": "5",
              "id": "golden_carrot",
              "count": "64"
            },
            {
              "slot": "6",
              "id": "golden_carrot",
              "count": "64"
            },
            {
              "slot": "7",
              "id": "golden_carrot",
              "count": "64"
            },
            {
              "slot": "8",
              "id": "golden_carrot",
              "count": "64"
            },
            {
              "slot": "9",
              "id": "golden_carrot",
              "count": "64"
            },
            {
              "slot": "10",
              "id": "golden_carrot",
              "count": "64"
            },
            {
              "slot": "11",
              "id": "golden_carrot",
              "count": "64"
            },
            {
              "slot": "12",
              "id": "golden_carrot",
              "count": "64"
            },
            {
              "slot": "13",
              "id": "golden_carrot",
              "count": "64"
            },
            {
              "slot": "14",
              "id": "golden_carrot",
              "count": "64"
            },
            {
              "slot": "15",
              "id": "golden_carrot",
              "count": "64"
            },
            {
              "slot": "16",
              "id": "golden_carrot",
              "count": "64"
            },
            {
              "slot": "17",
              "id": "golden_carrot",
              "count": "64"
            },
            {
              "slot": "18",
              "id": "golden_carrot",
              "count": "64"
            },
            {
              "slot": "19",
              "id": "golden_carrot",
              "count": "64"
            },
            {
              "slot": "20",
              "id": "golden_carrot",
              "count": "64"
            },
            {
              "slot": "21",
              "id": "golden_carrot",
              "count": "64"
            },
            {
              "slot": "22",
              "id": "golden_carrot",
              "count": "64"
            },
            {
              "slot": "23",
              "id": "golden_carrot",
              "count": "64"
            },
            {
              "slot": "24",
              "id": "golden_carrot",
              "count": "64"
            },
            {
              "slot": "25",
              "id": "golden_carrot",
              "count": "64"
            },
            {
              "slot": "26",
              "id": "golden_carrot",
              "count": "64"
            }
          ],
          "amount": 19,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "SMALL_DRIPLEAF",
          "content": [],
          "amount": 4,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "SPORE_BLOSSOM",
          "content": [],
          "amount": 4,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        }
      ]
    },
    {
      "name": "gerhugwsif",
      "offers": [
        {
          "name": "SHULKER_BOX",
          "content": [
            {
              "slot": "0",
              "id": "powder_snow_bucket",
              "count": "1"
            },
            {
              "slot": "1",
              "id": "powder_snow_bucket",
              "count": "1"
            },
            {
              "slot": "2",
              "id": "powder_snow_bucket",
              "count": "1"
            },
            {
              "slot": "3",
              "id": "powder_snow_bucket",
              "count": "1"
            },
            {
              "slot": "4",
              "id": "powder_snow_bucket",
              "count": "1"
            },
            {
              "slot": "5",
              "id": "powder_snow_bucket",
              "count": "1"
            },
            {
              "slot": "6",
              "id": "powder_snow_bucket",
              "count": "1"
            },
            {
              "slot": "7",
              "id": "powder_snow_bucket",
              "count": "1"
            },
            {
              "slot": "8",
              "id": "powder_snow_bucket",
              "count": "1"
            },
            {
              "slot": "9",
              "id": "powder_snow_bucket",
              "count": "1"
            },
            {
              "slot": "10",
              "id": "powder_snow_bucket",
              "count": "1"
            },
            {
              "slot": "11",
              "id": "powder_snow_bucket",
              "count": "1"
            },
            {
              "slot": "12",
              "id": "powder_snow_bucket",
              "count": "1"
            },
            {
              "slot": "13",
              "id": "powder_snow_bucket",
              "count": "1"
            },
            {
              "slot": "14",
              "id": "powder_snow_bucket",
              "count": "1"
            },
            {
              "slot": "15",
              "id": "powder_snow_bucket",
              "count": "1"
            },
            {
              "slot": "16",
              "id": "powder_snow_bucket",
              "count": "1"
            },
            {
              "slot": "17",
              "id": "powder_snow_bucket",
              "count": "1"
            },
            {
              "slot": "18",
              "id": "powder_snow_bucket",
              "count": "1"
            },
            {
              "slot": "19",
              "id": "powder_snow_bucket",
              "count": "1"
            },
            {
              "slot": "20",
              "id": "powder_snow_bucket",
              "count": "1"
            },
            {
              "slot": "21",
              "id": "powder_snow_bucket",
              "count": "1"
            },
            {
              "slot": "22",
              "id": "powder_snow_bucket",
              "count": "1"
            },
            {
              "slot": "23",
              "id": "powder_snow_bucket",
              "count": "1"
            },
            {
              "slot": "24",
              "id": "powder_snow_bucket",
              "count": "1"
            },
            {
              "slot": "25",
              "id": "powder_snow_bucket",
              "count": "1"
            },
            {
              "slot": "26",
              "id": "powder_snow_bucket",
              "count": "1"
            }
          ],
          "amount": 20,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "CREEPER_HEAD",
          "content": [],
          "amount": 4,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "SKELETON_SKULL",
          "content": [],
          "amount": 4,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "ZOMBIE_HEAD",
          "content": [],
          "amount": 4,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "ENDER_EYE",
          "content": [],
          "amount": 1,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "ENDER_CHEST",
          "content": [],
          "amount": 2,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "DIAMOND_LEGGINGS",
          "content": [
            {
              "enchants": {
                "MENDING": 1,
                "PROTECTION_ENVIRONMENTAL": 4,
                "SWIFT_SNEAK": 3,
                "DURABILITY": 3
              }
            }
          ],
          "amount": 25,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "DIAMOND_LEGGINGS",
          "content": [
            {
              "enchants": {
                "MENDING": 1,
                "PROTECTION_ENVIRONMENTAL": 4,
                "SWIFT_SNEAK": 3,
                "DURABILITY": 3
              }
            }
          ],
          "amount": 25,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "DIAMOND_LEGGINGS",
          "content": [
            {
              "enchants": {
                "MENDING": 1,
                "PROTECTION_ENVIRONMENTAL": 4,
                "SWIFT_SNEAK": 3,
                "THORNS": 3,
                "DURABILITY": 3
              }
            }
          ],
          "amount": 26,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "AMETHYST_CLUSTER",
          "content": [],
          "amount": 1,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "LARGE_AMETHYST_BUD",
          "content": [],
          "amount": 1,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "MEDIUM_AMETHYST_BUD",
          "content": [],
          "amount": 1,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "SMALL_AMETHYST_BUD",
          "content": [],
          "amount": 1,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "DEEPSLATE_DIAMOND_ORE",
          "content": [],
          "amount": 1,
          "currency": "ELYTRA"
        },
        {
          "name": "SCULK_SENSOR",
          "content": [],
          "amount": 4,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "SCULK_SHRIEKER",
          "content": [],
          "amount": 4,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "SCULK_CATALYST",
          "content": [],
          "amount": 4,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "DISC_FRAGMENT_5",
          "content": [],
          "amount": 8,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "MUSIC_DISC_OTHERSIDE",
          "content": [],
          "amount": 32,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "ECHO_SHARD",
          "content": [],
          "amount": 8,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "SMALL_DRIPLEAF",
          "content": [],
          "amount": 4,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        }
      ]
    },
    {
      "name": "ytka_sorry_t9",
      "offers": [
        {
          "name": "AMETHYST_SHARD",
          "content": [],
          "amount": 16,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "GLOW_LICHEN",
          "content": [],
          "amount": 3,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "DEEPSLATE_DIAMOND_ORE",
          "content": [],
          "amount": 1,
          "currency": "SHULKER_BOX"
        },
        {
          "name": "SHULKER_BOX",
          "content": [
            {
              "slot": "0",
              "id": "gunpowder",
              "count": "64"
            },
            {
              "slot": "1",
              "id": "gunpowder",
              "count": "64"
            },
            {
              "slot": "2",
              "id": "gunpowder",
              "count": "64"
            },
            {
              "slot": "3",
              "id": "gunpowder",
              "count": "64"
            },
            {
              "slot": "4",
              "id": "gunpowder",
              "count": "64"
            },
            {
              "slot": "5",
              "id": "gunpowder",
              "count": "64"
            },
            {
              "slot": "6",
              "id": "gunpowder",
              "count": "64"
            },
            {
              "slot": "7",
              "id": "gunpowder",
              "count": "64"
            },
            {
              "slot": "8",
              "id": "gunpowder",
              "count": "64"
            },
            {
              "slot": "9",
              "id": "gunpowder",
              "count": "64"
            },
            {
              "slot": "10",
              "id": "gunpowder",
              "count": "64"
            },
            {
              "slot": "11",
              "id": "gunpowder",
              "count": "64"
            },
            {
              "slot": "12",
              "id": "gunpowder",
              "count": "64"
            },
            {
              "slot": "13",
              "id": "gunpowder",
              "count": "64"
            },
            {
              "slot": "14",
              "id": "gunpowder",
              "count": "64"
            },
            {
              "slot": "15",
              "id": "gunpowder",
              "count": "64"
            },
            {
              "slot": "16",
              "id": "gunpowder",
              "count": "64"
            },
            {
              "slot": "17",
              "id": "gunpowder",
              "count": "64"
            },
            {
              "slot": "18",
              "id": "gunpowder",
              "count": "64"
            },
            {
              "slot": "19",
              "id": "gunpowder",
              "count": "64"
            },
            {
              "slot": "20",
              "id": "gunpowder",
              "count": "64"
            },
            {
              "slot": "21",
              "id": "gunpowder",
              "count": "64"
            },
            {
              "slot": "22",
              "id": "gunpowder",
              "count": "64"
            },
            {
              "slot": "23",
              "id": "gunpowder",
              "count": "64"
            },
            {
              "slot": "24",
              "id": "gunpowder",
              "count": "64"
            },
            {
              "slot": "25",
              "id": "gunpowder",
              "count": "64"
            },
            {
              "slot": "26",
              "id": "gunpowder",
              "count": "64"
            }
          ],
          "amount": 3,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "SHULKER_BOX",
          "content": [
            {
              "slot": "0",
              "id": "sugar_cane",
              "count": "64"
            },
            {
              "slot": "1",
              "id": "sugar_cane",
              "count": "64"
            },
            {
              "slot": "2",
              "id": "sugar_cane",
              "count": "64"
            },
            {
              "slot": "3",
              "id": "sugar_cane",
              "count": "64"
            },
            {
              "slot": "4",
              "id": "sugar_cane",
              "count": "64"
            },
            {
              "slot": "5",
              "id": "sugar_cane",
              "count": "64"
            },
            {
              "slot": "6",
              "id": "sugar_cane",
              "count": "64"
            },
            {
              "slot": "7",
              "id": "sugar_cane",
              "count": "64"
            },
            {
              "slot": "8",
              "id": "sugar_cane",
              "count": "64"
            },
            {
              "slot": "9",
              "id": "sugar_cane",
              "count": "64"
            },
            {
              "slot": "10",
              "id": "sugar_cane",
              "count": "64"
            },
            {
              "slot": "11",
              "id": "sugar_cane",
              "count": "64"
            },
            {
              "slot": "12",
              "id": "sugar_cane",
              "count": "64"
            },
            {
              "slot": "13",
              "id": "sugar_cane",
              "count": "64"
            },
            {
              "slot": "14",
              "id": "sugar_cane",
              "count": "64"
            },
            {
              "slot": "15",
              "id": "sugar_cane",
              "count": "64"
            },
            {
              "slot": "16",
              "id": "sugar_cane",
              "count": "64"
            },
            {
              "slot": "17",
              "id": "sugar_cane",
              "count": "64"
            },
            {
              "slot": "18",
              "id": "sugar_cane",
              "count": "64"
            },
            {
              "slot": "19",
              "id": "sugar_cane",
              "count": "64"
            },
            {
              "slot": "20",
              "id": "sugar_cane",
              "count": "64"
            },
            {
              "slot": "21",
              "id": "sugar_cane",
              "count": "64"
            },
            {
              "slot": "22",
              "id": "sugar_cane",
              "count": "64"
            },
            {
              "slot": "23",
              "id": "sugar_cane",
              "count": "64"
            },
            {
              "slot": "24",
              "id": "sugar_cane",
              "count": "64"
            },
            {
              "slot": "25",
              "id": "sugar_cane",
              "count": "64"
            },
            {
              "slot": "26",
              "id": "sugar_cane",
              "count": "64"
            }
          ],
          "amount": 7,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "SHULKER_BOX",
          "content": [
            {
              "slot": "0",
              "id": "glow_lichen",
              "count": "64"
            },
            {
              "slot": "1",
              "id": "glow_lichen",
              "count": "64"
            },
            {
              "slot": "2",
              "id": "glow_lichen",
              "count": "64"
            },
            {
              "slot": "3",
              "id": "glow_lichen",
              "count": "64"
            },
            {
              "slot": "4",
              "id": "glow_lichen",
              "count": "64"
            },
            {
              "slot": "5",
              "id": "glow_lichen",
              "count": "64"
            },
            {
              "slot": "6",
              "id": "glow_lichen",
              "count": "64"
            },
            {
              "slot": "7",
              "id": "glow_lichen",
              "count": "64"
            },
            {
              "slot": "8",
              "id": "glow_lichen",
              "count": "64"
            },
            {
              "slot": "9",
              "id": "glow_lichen",
              "count": "64"
            },
            {
              "slot": "10",
              "id": "glow_lichen",
              "count": "64"
            },
            {
              "slot": "11",
              "id": "glow_lichen",
              "count": "64"
            },
            {
              "slot": "12",
              "id": "glow_lichen",
              "count": "64"
            },
            {
              "slot": "13",
              "id": "glow_lichen",
              "count": "64"
            },
            {
              "slot": "14",
              "id": "glow_lichen",
              "count": "64"
            },
            {
              "slot": "15",
              "id": "glow_lichen",
              "count": "64"
            },
            {
              "slot": "16",
              "id": "glow_lichen",
              "count": "64"
            },
            {
              "slot": "17",
              "id": "glow_lichen",
              "count": "64"
            },
            {
              "slot": "18",
              "id": "glow_lichen",
              "count": "64"
            },
            {
              "slot": "19",
              "id": "glow_lichen",
              "count": "64"
            },
            {
              "slot": "20",
              "id": "glow_lichen",
              "count": "64"
            },
            {
              "slot": "21",
              "id": "glow_lichen",
              "count": "64"
            },
            {
              "slot": "22",
              "id": "glow_lichen",
              "count": "64"
            },
            {
              "slot": "23",
              "id": "glow_lichen",
              "count": "64"
            },
            {
              "slot": "24",
              "id": "glow_lichen",
              "count": "64"
            },
            {
              "slot": "25",
              "id": "glow_lichen",
              "count": "64"
            },
            {
              "slot": "26",
              "id": "glow_lichen",
              "count": "64"
            }
          ],
          "amount": 30,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "SHULKER_BOX",
          "content": [
            {
              "slot": "0",
              "id": "trident",
              "count": "1"
            },
            {
              "slot": "1",
              "id": "trident",
              "count": "1"
            },
            {
              "slot": "2",
              "id": "trident",
              "count": "1"
            },
            {
              "slot": "3",
              "id": "trident",
              "count": "1"
            },
            {
              "slot": "4",
              "id": "trident",
              "count": "1"
            },
            {
              "slot": "5",
              "id": "trident",
              "count": "1"
            },
            {
              "slot": "6",
              "id": "trident",
              "count": "1"
            },
            {
              "slot": "7",
              "id": "trident",
              "count": "1"
            },
            {
              "slot": "8",
              "id": "trident",
              "count": "1"
            },
            {
              "slot": "9",
              "id": "trident",
              "count": "1"
            },
            {
              "slot": "10",
              "id": "trident",
              "count": "1"
            },
            {
              "slot": "11",
              "id": "trident",
              "count": "1"
            },
            {
              "slot": "12",
              "id": "trident",
              "count": "1"
            },
            {
              "slot": "13",
              "id": "trident",
              "count": "1"
            },
            {
              "slot": "14",
              "id": "trident",
              "count": "1"
            },
            {
              "slot": "15",
              "id": "trident",
              "count": "1"
            },
            {
              "slot": "16",
              "id": "trident",
              "count": "1"
            },
            {
              "slot": "17",
              "id": "trident",
              "count": "1"
            },
            {
              "slot": "18",
              "id": "trident",
              "count": "1"
            },
            {
              "slot": "19",
              "id": "trident",
              "count": "1"
            },
            {
              "slot": "20",
              "id": "trident",
              "count": "1"
            },
            {
              "slot": "21",
              "id": "trident",
              "count": "1"
            },
            {
              "slot": "22",
              "id": "trident",
              "count": "1"
            },
            {
              "slot": "23",
              "id": "trident",
              "count": "1"
            },
            {
              "slot": "24",
              "id": "trident",
              "count": "1"
            },
            {
              "slot": "25",
              "id": "trident",
              "count": "1"
            },
            {
              "slot": "26",
              "id": "trident",
              "count": "1"
            }
          ],
          "amount": 64,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "SHULKER_BOX",
          "content": [
            {
              "slot": "0",
              "id": "trident",
              "count": "1"
            },
            {
              "slot": "1",
              "id": "trident",
              "count": "1"
            },
            {
              "slot": "2",
              "id": "trident",
              "count": "1"
            },
            {
              "slot": "3",
              "id": "trident",
              "count": "1"
            },
            {
              "slot": "4",
              "id": "trident",
              "count": "1"
            },
            {
              "slot": "5",
              "id": "trident",
              "count": "1"
            },
            {
              "slot": "6",
              "id": "trident",
              "count": "1"
            },
            {
              "slot": "7",
              "id": "trident",
              "count": "1"
            },
            {
              "slot": "8",
              "id": "trident",
              "count": "1"
            },
            {
              "slot": "9",
              "id": "trident",
              "count": "1"
            },
            {
              "slot": "10",
              "id": "trident",
              "count": "1"
            },
            {
              "slot": "11",
              "id": "trident",
              "count": "1"
            },
            {
              "slot": "12",
              "id": "trident",
              "count": "1"
            },
            {
              "slot": "13",
              "id": "trident",
              "count": "1"
            },
            {
              "slot": "14",
              "id": "trident",
              "count": "1"
            },
            {
              "slot": "15",
              "id": "trident",
              "count": "1"
            },
            {
              "slot": "16",
              "id": "trident",
              "count": "1"
            },
            {
              "slot": "17",
              "id": "trident",
              "count": "1"
            },
            {
              "slot": "18",
              "id": "trident",
              "count": "1"
            },
            {
              "slot": "19",
              "id": "trident",
              "count": "1"
            },
            {
              "slot": "20",
              "id": "trident",
              "count": "1"
            },
            {
              "slot": "21",
              "id": "trident",
              "count": "1"
            },
            {
              "slot": "22",
              "id": "trident",
              "count": "1"
            },
            {
              "slot": "23",
              "id": "trident",
              "count": "1"
            },
            {
              "slot": "24",
              "id": "trident",
              "count": "1"
            },
            {
              "slot": "25",
              "id": "trident",
              "count": "1"
            },
            {
              "slot": "26",
              "id": "trident",
              "count": "1"
            }
          ],
          "amount": 64,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        }
      ]
    },
    {
      "name": "_Kerubifi_",
      "offers": [
        {
          "name": "SCULK_CATALYST",
          "content": [],
          "amount": 1,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "SCULK",
          "content": [],
          "amount": 1,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "SCULK_SENSOR",
          "content": [],
          "amount": 1,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "SCULK_SHRIEKER",
          "content": [],
          "amount": 1,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "DISC_FRAGMENT_5",
          "content": [],
          "amount": 8,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "ECHO_SHARD",
          "content": [],
          "amount": 6,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "MUSIC_DISC_5",
          "content": [],
          "amount": 64,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "MUSIC_DISC_OTHERSIDE",
          "content": [],
          "amount": 32,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "ENCHANTED_GOLDEN_APPLE",
          "content": [],
          "amount": 50,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "SKELETON_SKULL",
          "content": [],
          "amount": 8,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        }
      ]
    },
    {
      "name": "_JohngeaR_",
      "offers": [
        {
          "name": "RED_SHULKER_BOX",
          "content": [
            {
              "slot": "0",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "1",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "2",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "3",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "4",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "5",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "6",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "7",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "8",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "9",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "10",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "11",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "12",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "13",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "14",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "15",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "16",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "17",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "18",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "19",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "20",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "21",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "22",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "23",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "24",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "25",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "26",
              "id": "firework_rocket",
              "count": "64"
            }
          ],
          "amount": 4,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "RED_SHULKER_BOX",
          "content": [
            {
              "slot": "0",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "1",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "2",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "3",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "4",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "5",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "6",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "7",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "8",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "9",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "10",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "11",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "12",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "13",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "14",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "15",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "16",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "17",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "18",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "19",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "20",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "21",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "22",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "23",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "24",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "25",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "26",
              "id": "firework_rocket",
              "count": "64"
            }
          ],
          "amount": 8,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "RED_SHULKER_BOX",
          "content": [
            {
              "slot": "0",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "1",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "2",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "3",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "4",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "5",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "6",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "7",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "8",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "9",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "10",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "11",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "12",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "13",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "14",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "15",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "16",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "17",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "18",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "19",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "20",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "21",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "22",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "23",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "24",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "25",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "26",
              "id": "firework_rocket",
              "count": "64"
            }
          ],
          "amount": 12,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "ORANGE_SHULKER_BOX",
          "content": [
            {
              "slot": "0",
              "id": "golden_carrot",
              "count": "64"
            },
            {
              "slot": "1",
              "id": "golden_carrot",
              "count": "64"
            },
            {
              "slot": "2",
              "id": "golden_carrot",
              "count": "64"
            },
            {
              "slot": "3",
              "id": "golden_carrot",
              "count": "64"
            },
            {
              "slot": "4",
              "id": "golden_carrot",
              "count": "64"
            },
            {
              "slot": "5",
              "id": "golden_carrot",
              "count": "64"
            },
            {
              "slot": "6",
              "id": "golden_carrot",
              "count": "64"
            },
            {
              "slot": "7",
              "id": "golden_carrot",
              "count": "64"
            },
            {
              "slot": "8",
              "id": "golden_carrot",
              "count": "64"
            },
            {
              "slot": "9",
              "id": "golden_carrot",
              "count": "64"
            },
            {
              "slot": "10",
              "id": "golden_carrot",
              "count": "64"
            },
            {
              "slot": "11",
              "id": "golden_carrot",
              "count": "64"
            },
            {
              "slot": "12",
              "id": "golden_carrot",
              "count": "64"
            },
            {
              "slot": "13",
              "id": "golden_carrot",
              "count": "64"
            },
            {
              "slot": "14",
              "id": "golden_carrot",
              "count": "64"
            },
            {
              "slot": "15",
              "id": "golden_carrot",
              "count": "64"
            },
            {
              "slot": "16",
              "id": "golden_carrot",
              "count": "64"
            },
            {
              "slot": "17",
              "id": "golden_carrot",
              "count": "64"
            },
            {
              "slot": "18",
              "id": "golden_carrot",
              "count": "64"
            },
            {
              "slot": "19",
              "id": "golden_carrot",
              "count": "64"
            },
            {
              "slot": "20",
              "id": "golden_carrot",
              "count": "64"
            },
            {
              "slot": "21",
              "id": "golden_carrot",
              "count": "64"
            },
            {
              "slot": "22",
              "id": "golden_carrot",
              "count": "64"
            },
            {
              "slot": "23",
              "id": "golden_carrot",
              "count": "64"
            },
            {
              "slot": "24",
              "id": "golden_carrot",
              "count": "64"
            },
            {
              "slot": "25",
              "id": "golden_carrot",
              "count": "64"
            },
            {
              "slot": "26",
              "id": "golden_carrot",
              "count": "64"
            }
          ],
          "amount": 15,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "YELLOW_SHULKER_BOX",
          "content": [
            {
              "slot": "0",
              "id": "totem_of_undying",
              "count": "1"
            },
            {
              "slot": "1",
              "id": "totem_of_undying",
              "count": "1"
            },
            {
              "slot": "2",
              "id": "totem_of_undying",
              "count": "1"
            },
            {
              "slot": "3",
              "id": "totem_of_undying",
              "count": "1"
            },
            {
              "slot": "4",
              "id": "totem_of_undying",
              "count": "1"
            },
            {
              "slot": "5",
              "id": "totem_of_undying",
              "count": "1"
            },
            {
              "slot": "6",
              "id": "totem_of_undying",
              "count": "1"
            },
            {
              "slot": "7",
              "id": "totem_of_undying",
              "count": "1"
            },
            {
              "slot": "8",
              "id": "totem_of_undying",
              "count": "1"
            },
            {
              "slot": "9",
              "id": "totem_of_undying",
              "count": "1"
            },
            {
              "slot": "10",
              "id": "totem_of_undying",
              "count": "1"
            },
            {
              "slot": "11",
              "id": "totem_of_undying",
              "count": "1"
            },
            {
              "slot": "12",
              "id": "totem_of_undying",
              "count": "1"
            },
            {
              "slot": "13",
              "id": "totem_of_undying",
              "count": "1"
            },
            {
              "slot": "14",
              "id": "totem_of_undying",
              "count": "1"
            },
            {
              "slot": "15",
              "id": "totem_of_undying",
              "count": "1"
            },
            {
              "slot": "16",
              "id": "totem_of_undying",
              "count": "1"
            },
            {
              "slot": "17",
              "id": "totem_of_undying",
              "count": "1"
            },
            {
              "slot": "18",
              "id": "totem_of_undying",
              "count": "1"
            },
            {
              "slot": "19",
              "id": "totem_of_undying",
              "count": "1"
            },
            {
              "slot": "20",
              "id": "totem_of_undying",
              "count": "1"
            },
            {
              "slot": "21",
              "id": "totem_of_undying",
              "count": "1"
            },
            {
              "slot": "22",
              "id": "totem_of_undying",
              "count": "1"
            },
            {
              "slot": "23",
              "id": "totem_of_undying",
              "count": "1"
            },
            {
              "slot": "24",
              "id": "totem_of_undying",
              "count": "1"
            },
            {
              "slot": "25",
              "id": "totem_of_undying",
              "count": "1"
            },
            {
              "slot": "26",
              "id": "totem_of_undying",
              "count": "1"
            }
          ],
          "amount": 4,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "BLACK_SHULKER_BOX",
          "content": [
            {
              "slot": "0",
              "id": "tnt",
              "count": "64"
            },
            {
              "slot": "1",
              "id": "tnt",
              "count": "64"
            },
            {
              "slot": "2",
              "id": "tnt",
              "count": "64"
            },
            {
              "slot": "3",
              "id": "tnt",
              "count": "64"
            },
            {
              "slot": "4",
              "id": "tnt",
              "count": "64"
            },
            {
              "slot": "5",
              "id": "tnt",
              "count": "64"
            },
            {
              "slot": "6",
              "id": "tnt",
              "count": "64"
            },
            {
              "slot": "7",
              "id": "tnt",
              "count": "64"
            },
            {
              "slot": "8",
              "id": "tnt",
              "count": "64"
            },
            {
              "slot": "9",
              "id": "tnt",
              "count": "64"
            },
            {
              "slot": "10",
              "id": "tnt",
              "count": "64"
            },
            {
              "slot": "11",
              "id": "tnt",
              "count": "64"
            },
            {
              "slot": "12",
              "id": "tnt",
              "count": "64"
            },
            {
              "slot": "13",
              "id": "tnt",
              "count": "64"
            },
            {
              "slot": "14",
              "id": "tnt",
              "count": "64"
            },
            {
              "slot": "15",
              "id": "tnt",
              "count": "64"
            },
            {
              "slot": "16",
              "id": "tnt",
              "count": "64"
            },
            {
              "slot": "17",
              "id": "tnt",
              "count": "64"
            },
            {
              "slot": "18",
              "id": "tnt",
              "count": "64"
            },
            {
              "slot": "19",
              "id": "tnt",
              "count": "64"
            },
            {
              "slot": "20",
              "id": "tnt",
              "count": "64"
            },
            {
              "slot": "21",
              "id": "tnt",
              "count": "64"
            },
            {
              "slot": "22",
              "id": "tnt",
              "count": "64"
            },
            {
              "slot": "23",
              "id": "tnt",
              "count": "64"
            },
            {
              "slot": "24",
              "id": "tnt",
              "count": "64"
            },
            {
              "slot": "25",
              "id": "tnt",
              "count": "64"
            },
            {
              "slot": "26",
              "id": "tnt",
              "count": "64"
            }
          ],
          "amount": 64,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "NETHERITE_INGOT",
          "content": [],
          "amount": 10,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        }
      ]
    },
    {
      "name": "Li_Ora",
      "offers": [
        {
          "name": "MUSHROOM_STEM",
          "content": [],
          "amount": 8,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "SHULKER_BOX",
          "content": [
            {
              "slot": "0",
              "id": "wheat",
              "count": "64"
            },
            {
              "slot": "1",
              "id": "wheat",
              "count": "64"
            },
            {
              "slot": "2",
              "id": "wheat",
              "count": "64"
            },
            {
              "slot": "3",
              "id": "wheat",
              "count": "64"
            },
            {
              "slot": "4",
              "id": "wheat",
              "count": "64"
            },
            {
              "slot": "5",
              "id": "wheat",
              "count": "64"
            },
            {
              "slot": "6",
              "id": "wheat",
              "count": "64"
            },
            {
              "slot": "7",
              "id": "wheat",
              "count": "64"
            },
            {
              "slot": "8",
              "id": "wheat",
              "count": "64"
            },
            {
              "slot": "9",
              "id": "wheat",
              "count": "64"
            },
            {
              "slot": "10",
              "id": "wheat",
              "count": "64"
            },
            {
              "slot": "11",
              "id": "wheat",
              "count": "64"
            },
            {
              "slot": "12",
              "id": "wheat",
              "count": "64"
            },
            {
              "slot": "13",
              "id": "wheat",
              "count": "64"
            },
            {
              "slot": "14",
              "id": "wheat",
              "count": "64"
            },
            {
              "slot": "15",
              "id": "wheat",
              "count": "64"
            },
            {
              "slot": "16",
              "id": "wheat",
              "count": "64"
            },
            {
              "slot": "17",
              "id": "wheat",
              "count": "64"
            },
            {
              "slot": "18",
              "id": "wheat",
              "count": "64"
            },
            {
              "slot": "19",
              "id": "wheat",
              "count": "64"
            },
            {
              "slot": "20",
              "id": "wheat",
              "count": "64"
            },
            {
              "slot": "21",
              "id": "wheat",
              "count": "64"
            },
            {
              "slot": "22",
              "id": "wheat",
              "count": "64"
            },
            {
              "slot": "23",
              "id": "wheat",
              "count": "64"
            },
            {
              "slot": "24",
              "id": "wheat",
              "count": "64"
            },
            {
              "slot": "25",
              "id": "wheat",
              "count": "64"
            },
            {
              "slot": "26",
              "id": "wheat",
              "count": "64"
            }
          ],
          "amount": 24,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "HONEYCOMB",
          "content": [],
          "amount": 2,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "PACKED_MUD",
          "content": [],
          "amount": 3,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "MUD_BRICKS",
          "content": [],
          "amount": 3,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "HONEY_BLOCK",
          "content": [],
          "amount": 2,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "SHULKER_BOX",
          "content": [
            {
              "slot": "0",
              "id": "carrot",
              "count": "64"
            },
            {
              "slot": "1",
              "id": "carrot",
              "count": "64"
            },
            {
              "slot": "2",
              "id": "carrot",
              "count": "64"
            },
            {
              "slot": "3",
              "id": "carrot",
              "count": "64"
            },
            {
              "slot": "4",
              "id": "carrot",
              "count": "64"
            },
            {
              "slot": "5",
              "id": "carrot",
              "count": "64"
            },
            {
              "slot": "6",
              "id": "carrot",
              "count": "64"
            },
            {
              "slot": "7",
              "id": "carrot",
              "count": "64"
            },
            {
              "slot": "8",
              "id": "carrot",
              "count": "64"
            },
            {
              "slot": "9",
              "id": "carrot",
              "count": "64"
            },
            {
              "slot": "10",
              "id": "carrot",
              "count": "64"
            },
            {
              "slot": "11",
              "id": "carrot",
              "count": "64"
            },
            {
              "slot": "12",
              "id": "carrot",
              "count": "64"
            },
            {
              "slot": "13",
              "id": "carrot",
              "count": "64"
            },
            {
              "slot": "14",
              "id": "carrot",
              "count": "64"
            },
            {
              "slot": "15",
              "id": "carrot",
              "count": "64"
            },
            {
              "slot": "16",
              "id": "carrot",
              "count": "64"
            },
            {
              "slot": "17",
              "id": "carrot",
              "count": "64"
            },
            {
              "slot": "18",
              "id": "carrot",
              "count": "64"
            },
            {
              "slot": "19",
              "id": "carrot",
              "count": "64"
            },
            {
              "slot": "20",
              "id": "carrot",
              "count": "64"
            },
            {
              "slot": "21",
              "id": "carrot",
              "count": "64"
            },
            {
              "slot": "22",
              "id": "carrot",
              "count": "64"
            },
            {
              "slot": "23",
              "id": "carrot",
              "count": "64"
            },
            {
              "slot": "24",
              "id": "carrot",
              "count": "64"
            },
            {
              "slot": "25",
              "id": "carrot",
              "count": "64"
            },
            {
              "slot": "26",
              "id": "carrot",
              "count": "64"
            }
          ],
          "amount": 16,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "SHULKER_BOX",
          "content": [
            {
              "slot": "0",
              "id": "totem_of_undying",
              "count": "1"
            },
            {
              "slot": "1",
              "id": "totem_of_undying",
              "count": "1"
            },
            {
              "slot": "2",
              "id": "totem_of_undying",
              "count": "1"
            },
            {
              "slot": "3",
              "id": "totem_of_undying",
              "count": "1"
            },
            {
              "slot": "4",
              "id": "totem_of_undying",
              "count": "1"
            },
            {
              "slot": "5",
              "id": "totem_of_undying",
              "count": "1"
            },
            {
              "slot": "6",
              "id": "totem_of_undying",
              "count": "1"
            },
            {
              "slot": "7",
              "id": "totem_of_undying",
              "count": "1"
            },
            {
              "slot": "8",
              "id": "totem_of_undying",
              "count": "1"
            },
            {
              "slot": "9",
              "id": "totem_of_undying",
              "count": "1"
            },
            {
              "slot": "10",
              "id": "totem_of_undying",
              "count": "1"
            },
            {
              "slot": "11",
              "id": "totem_of_undying",
              "count": "1"
            },
            {
              "slot": "12",
              "id": "totem_of_undying",
              "count": "1"
            },
            {
              "slot": "13",
              "id": "totem_of_undying",
              "count": "1"
            },
            {
              "slot": "14",
              "id": "totem_of_undying",
              "count": "1"
            },
            {
              "slot": "15",
              "id": "totem_of_undying",
              "count": "1"
            },
            {
              "slot": "16",
              "id": "totem_of_undying",
              "count": "1"
            },
            {
              "slot": "17",
              "id": "totem_of_undying",
              "count": "1"
            },
            {
              "slot": "18",
              "id": "totem_of_undying",
              "count": "1"
            },
            {
              "slot": "19",
              "id": "totem_of_undying",
              "count": "1"
            },
            {
              "slot": "20",
              "id": "totem_of_undying",
              "count": "1"
            },
            {
              "slot": "21",
              "id": "totem_of_undying",
              "count": "1"
            },
            {
              "slot": "22",
              "id": "totem_of_undying",
              "count": "1"
            },
            {
              "slot": "23",
              "id": "totem_of_undying",
              "count": "1"
            },
            {
              "slot": "24",
              "id": "totem_of_undying",
              "count": "1"
            },
            {
              "slot": "25",
              "id": "totem_of_undying",
              "count": "1"
            },
            {
              "slot": "26",
              "id": "totem_of_undying",
              "count": "1"
            }
          ],
          "amount": 4,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        }
      ]
    },
    {
      "name": "BlackPirat",
      "offers": [
        {
          "name": "RAW_COPPER_BLOCK",
          "content": [],
          "amount": 8,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "EMERALD_BLOCK",
          "content": [],
          "amount": 8,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "TRIDENT",
          "content": [],
          "amount": 4,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "WAXED_COPPER_BLOCK",
          "content": [],
          "amount": 8,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "WAXED_EXPOSED_COPPER",
          "content": [],
          "amount": 8,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "WAXED_WEATHERED_COPPER",
          "content": [],
          "amount": 8,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "WAXED_OXIDIZED_COPPER",
          "content": [],
          "amount": 8,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "HONEYCOMB",
          "content": [],
          "amount": 4,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "HONEY_BOTTLE",
          "content": [],
          "amount": 2,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        }
      ]
    },
    {
      "name": "kermitik",
      "offers": [
        {
          "name": "TRIDENT",
          "content": [
            {
              "enchants": {
                "CHANNELING": 1,
                "IMPALING": 5,
                "LOYALTY": 3,
                "MENDING": 1,
                "DURABILITY": 3
              }
            }
          ],
          "amount": 13,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "TRIDENT",
          "content": [
            {
              "enchants": {
                "MENDING": 1,
                "RIPTIDE": 3,
                "DURABILITY": 3
              }
            }
          ],
          "amount": 13,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "SHULKER_BOX",
          "content": [
            {
              "slot": "0",
              "id": "sea_lantern",
              "count": "64"
            },
            {
              "slot": "1",
              "id": "sea_lantern",
              "count": "64"
            },
            {
              "slot": "2",
              "id": "sea_lantern",
              "count": "64"
            },
            {
              "slot": "3",
              "id": "sea_lantern",
              "count": "64"
            },
            {
              "slot": "4",
              "id": "sea_lantern",
              "count": "64"
            },
            {
              "slot": "5",
              "id": "sea_lantern",
              "count": "64"
            },
            {
              "slot": "6",
              "id": "sea_lantern",
              "count": "64"
            },
            {
              "slot": "7",
              "id": "sea_lantern",
              "count": "64"
            },
            {
              "slot": "8",
              "id": "sea_lantern",
              "count": "64"
            },
            {
              "slot": "9",
              "id": "sea_lantern",
              "count": "64"
            },
            {
              "slot": "10",
              "id": "sea_lantern",
              "count": "64"
            },
            {
              "slot": "11",
              "id": "sea_lantern",
              "count": "64"
            },
            {
              "slot": "12",
              "id": "sea_lantern",
              "count": "64"
            },
            {
              "slot": "13",
              "id": "sea_lantern",
              "count": "64"
            },
            {
              "slot": "14",
              "id": "sea_lantern",
              "count": "64"
            },
            {
              "slot": "15",
              "id": "sea_lantern",
              "count": "64"
            },
            {
              "slot": "16",
              "id": "sea_lantern",
              "count": "64"
            },
            {
              "slot": "17",
              "id": "sea_lantern",
              "count": "64"
            },
            {
              "slot": "18",
              "id": "sea_lantern",
              "count": "64"
            },
            {
              "slot": "19",
              "id": "sea_lantern",
              "count": "64"
            },
            {
              "slot": "20",
              "id": "sea_lantern",
              "count": "64"
            },
            {
              "slot": "21",
              "id": "sea_lantern",
              "count": "64"
            },
            {
              "slot": "22",
              "id": "sea_lantern",
              "count": "64"
            },
            {
              "slot": "23",
              "id": "sea_lantern",
              "count": "64"
            },
            {
              "slot": "24",
              "id": "sea_lantern",
              "count": "64"
            },
            {
              "slot": "25",
              "id": "sea_lantern",
              "count": "64"
            },
            {
              "slot": "26",
              "id": "sea_lantern",
              "count": "64"
            }
          ],
          "amount": 7,
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
          "amount": 7,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
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
          "amount": 7,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        }
      ]
    },
    {
      "name": "Vonderan",
      "offers": [
        {
          "name": "RED_SHULKER_BOX",
          "content": [
            {
              "slot": "4",
              "id": "arrow",
              "count": "64"
            },
            {
              "slot": "11",
              "id": "diamond_sword",
              "count": "1"
            },
            {
              "slot": "15",
              "id": "bow",
              "count": "1"
            }
          ],
          "amount": 31,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "ORANGE_SHULKER_BOX",
          "content": [
            {
              "slot": "4",
              "id": "arrow",
              "count": "64"
            },
            {
              "slot": "11",
              "id": "diamond_sword",
              "count": "1"
            },
            {
              "slot": "15",
              "id": "bow",
              "count": "1"
            }
          ],
          "amount": 30,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "DIAMOND_SWORD",
          "content": [
            {
              "enchants": {
                "FIRE_ASPECT": 2,
                "KNOCKBACK": 2,
                "LOOT_BONUS_MOBS": 3,
                "MENDING": 1,
                "DAMAGE_ALL": 5,
                "SWEEPING_EDGE": 3,
                "DURABILITY": 3
              }
            }
          ],
          "amount": 20,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "DIAMOND_SWORD",
          "content": [
            {
              "enchants": {
                "FIRE_ASPECT": 2,
                "LOOT_BONUS_MOBS": 3,
                "MENDING": 1,
                "DAMAGE_ALL": 5,
                "SWEEPING_EDGE": 3,
                "DURABILITY": 3
              }
            }
          ],
          "amount": 19,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "LIGHT_BLUE_SHULKER_BOX",
          "content": [
            {
              "slot": "4",
              "id": "arrow",
              "count": "64"
            },
            {
              "slot": "11",
              "id": "diamond_sword",
              "count": "1"
            },
            {
              "slot": "15",
              "id": "bow",
              "count": "1"
            }
          ],
          "amount": 31,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "CYAN_SHULKER_BOX",
          "content": [
            {
              "slot": "4",
              "id": "arrow",
              "count": "64"
            },
            {
              "slot": "11",
              "id": "diamond_sword",
              "count": "1"
            },
            {
              "slot": "15",
              "id": "bow",
              "count": "1"
            }
          ],
          "amount": 30,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "DIAMOND_SWORD",
          "content": [
            {
              "enchants": {
                "FIRE_ASPECT": 2,
                "KNOCKBACK": 2,
                "LOOT_BONUS_MOBS": 3,
                "MENDING": 1,
                "DAMAGE_UNDEAD": 5,
                "SWEEPING_EDGE": 3,
                "DURABILITY": 3
              }
            }
          ],
          "amount": 20,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "DIAMOND_SWORD",
          "content": [
            {
              "enchants": {
                "FIRE_ASPECT": 2,
                "LOOT_BONUS_MOBS": 3,
                "MENDING": 1,
                "DAMAGE_UNDEAD": 5,
                "SWEEPING_EDGE": 3,
                "DURABILITY": 3
              }
            }
          ],
          "amount": 19,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "GRAY_SHULKER_BOX",
          "content": [
            {
              "slot": "4",
              "id": "arrow",
              "count": "64"
            },
            {
              "slot": "11",
              "id": "diamond_sword",
              "count": "1"
            },
            {
              "slot": "15",
              "id": "bow",
              "count": "1"
            }
          ],
          "amount": 31,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "LIGHT_GRAY_SHULKER_BOX",
          "content": [
            {
              "slot": "4",
              "id": "arrow",
              "count": "64"
            },
            {
              "slot": "11",
              "id": "diamond_sword",
              "count": "1"
            },
            {
              "slot": "15",
              "id": "bow",
              "count": "1"
            }
          ],
          "amount": 30,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "DIAMOND_SWORD",
          "content": [
            {
              "enchants": {
                "DAMAGE_ARTHROPODS": 5,
                "FIRE_ASPECT": 2,
                "KNOCKBACK": 2,
                "LOOT_BONUS_MOBS": 3,
                "MENDING": 1,
                "SWEEPING_EDGE": 3,
                "DURABILITY": 3
              }
            }
          ],
          "amount": 20,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "DIAMOND_SWORD",
          "content": [
            {
              "enchants": {
                "DAMAGE_ARTHROPODS": 5,
                "FIRE_ASPECT": 2,
                "LOOT_BONUS_MOBS": 3,
                "MENDING": 1,
                "SWEEPING_EDGE": 3,
                "DURABILITY": 3
              }
            }
          ],
          "amount": 19,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "BOW",
          "content": [
            {
              "enchants": {
                "ARROW_FIRE": 1,
                "ARROW_INFINITE": 1,
                "ARROW_DAMAGE": 5,
                "ARROW_KNOCKBACK": 2,
                "DURABILITY": 3
              }
            }
          ],
          "amount": 15,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "BOW",
          "content": [
            {
              "enchants": {
                "ARROW_FIRE": 1,
                "MENDING": 1,
                "ARROW_DAMAGE": 5,
                "ARROW_KNOCKBACK": 2,
                "DURABILITY": 3
              }
            }
          ],
          "amount": 15,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "CROSSBOW",
          "content": [
            {
              "enchants": {
                "MENDING": 1,
                "MULTISHOT": 1,
                "QUICK_CHARGE": 3,
                "DURABILITY": 3
              }
            }
          ],
          "amount": 15,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "CROSSBOW",
          "content": [
            {
              "enchants": {
                "MENDING": 1,
                "PIERCING": 4,
                "QUICK_CHARGE": 3,
                "DURABILITY": 3
              }
            }
          ],
          "amount": 15,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "DIAMOND_AXE",
          "content": [
            {
              "enchants": {
                "DIG_SPEED": 5,
                "MENDING": 1,
                "SILK_TOUCH": 1,
                "DAMAGE_UNDEAD": 5,
                "DURABILITY": 3
              }
            }
          ],
          "amount": 15,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "DIAMOND_AXE",
          "content": [
            {
              "enchants": {
                "DIG_SPEED": 5,
                "LOOT_BONUS_BLOCKS": 3,
                "MENDING": 1,
                "DAMAGE_UNDEAD": 5,
                "DURABILITY": 3
              }
            }
          ],
          "amount": 15,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "DIAMOND_AXE",
          "content": [
            {
              "enchants": {
                "DAMAGE_ARTHROPODS": 5,
                "DIG_SPEED": 5,
                "MENDING": 1,
                "SILK_TOUCH": 1,
                "DURABILITY": 3
              }
            }
          ],
          "amount": 15,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "DIAMOND_AXE",
          "content": [
            {
              "enchants": {
                "DAMAGE_ARTHROPODS": 5,
                "DIG_SPEED": 5,
                "LOOT_BONUS_BLOCKS": 3,
                "MENDING": 1,
                "DURABILITY": 3
              }
            }
          ],
          "amount": 15,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "NETHERITE_INGOT",
          "content": [],
          "amount": 12,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "TRIDENT",
          "content": [
            {
              "enchants": {
                "CHANNELING": 1,
                "IMPALING": 5,
                "LOYALTY": 3,
                "MENDING": 1,
                "DURABILITY": 3
              }
            }
          ],
          "amount": 13,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "TRIDENT",
          "content": [
            {
              "enchants": {
                "IMPALING": 5,
                "MENDING": 1,
                "RIPTIDE": 3,
                "DURABILITY": 3
              }
            }
          ],
          "amount": 13,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        }
      ]
    },
    {
      "name": "Vonderan",
      "offers": [
        {
          "name": "RED_SHULKER_BOX",
          "content": [
            {
              "slot": "3",
              "id": "diamond_helmet",
              "count": "1"
            },
            {
              "slot": "5",
              "id": "diamond_chestplate",
              "count": "1"
            },
            {
              "slot": "21",
              "id": "diamond_leggings",
              "count": "1"
            },
            {
              "slot": "23",
              "id": "diamond_boots",
              "count": "1"
            }
          ],
          "amount": 60,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "DIAMOND_HELMET",
          "content": [
            {
              "enchants": {
                "WATER_WORKER": 1,
                "PROTECTION_FIRE": 4,
                "MENDING": 1,
                "OXYGEN": 3,
                "THORNS": 3,
                "DURABILITY": 3
              }
            }
          ],
          "amount": 19,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "DIAMOND_CHESTPLATE",
          "content": [
            {
              "enchants": {
                "PROTECTION_FIRE": 4,
                "MENDING": 1,
                "THORNS": 3,
                "DURABILITY": 3
              }
            }
          ],
          "amount": 15,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "DIAMOND_LEGGINGS",
          "content": [
            {
              "enchants": {
                "PROTECTION_FIRE": 4,
                "MENDING": 1,
                "THORNS": 3,
                "DURABILITY": 3
              }
            }
          ],
          "amount": 15,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "DIAMOND_BOOTS",
          "content": [
            {
              "enchants": {
                "DEPTH_STRIDER": 3,
                "PROTECTION_FALL": 4,
                "PROTECTION_FIRE": 4,
                "MENDING": 1,
                "SOUL_SPEED": 3,
                "THORNS": 3,
                "DURABILITY": 3
              }
            }
          ],
          "amount": 19,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "LIME_SHULKER_BOX",
          "content": [
            {
              "slot": "3",
              "id": "diamond_helmet",
              "count": "1"
            },
            {
              "slot": "5",
              "id": "diamond_chestplate",
              "count": "1"
            },
            {
              "slot": "21",
              "id": "diamond_leggings",
              "count": "1"
            },
            {
              "slot": "23",
              "id": "diamond_boots",
              "count": "1"
            }
          ],
          "amount": 60,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "DIAMOND_HELMET",
          "content": [
            {
              "enchants": {
                "WATER_WORKER": 1,
                "PROTECTION_EXPLOSIONS": 4,
                "MENDING": 1,
                "OXYGEN": 3,
                "THORNS": 3,
                "DURABILITY": 3
              }
            }
          ],
          "amount": 19,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "DIAMOND_CHESTPLATE",
          "content": [
            {
              "enchants": {
                "PROTECTION_EXPLOSIONS": 4,
                "MENDING": 1,
                "THORNS": 3,
                "DURABILITY": 3
              }
            }
          ],
          "amount": 15,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "DIAMOND_LEGGINGS",
          "content": [
            {
              "enchants": {
                "PROTECTION_EXPLOSIONS": 4,
                "MENDING": 1,
                "THORNS": 3,
                "DURABILITY": 3
              }
            }
          ],
          "amount": 15,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "DIAMOND_BOOTS",
          "content": [
            {
              "enchants": {
                "PROTECTION_EXPLOSIONS": 4,
                "DEPTH_STRIDER": 3,
                "PROTECTION_FALL": 4,
                "MENDING": 1,
                "SOUL_SPEED": 3,
                "THORNS": 3,
                "DURABILITY": 3
              }
            }
          ],
          "amount": 19,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "LIGHT_BLUE_SHULKER_BOX",
          "content": [
            {
              "slot": "3",
              "id": "diamond_helmet",
              "count": "1"
            },
            {
              "slot": "5",
              "id": "diamond_chestplate",
              "count": "1"
            },
            {
              "slot": "21",
              "id": "diamond_leggings",
              "count": "1"
            },
            {
              "slot": "23",
              "id": "diamond_boots",
              "count": "1"
            }
          ],
          "amount": 60,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "DIAMOND_HELMET",
          "content": [
            {
              "enchants": {
                "WATER_WORKER": 1,
                "MENDING": 1,
                "PROTECTION_PROJECTILE": 4,
                "OXYGEN": 3,
                "THORNS": 3,
                "DURABILITY": 3
              }
            }
          ],
          "amount": 19,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "DIAMOND_CHESTPLATE",
          "content": [
            {
              "enchants": {
                "MENDING": 1,
                "PROTECTION_PROJECTILE": 4,
                "THORNS": 3,
                "DURABILITY": 3
              }
            }
          ],
          "amount": 15,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "DIAMOND_LEGGINGS",
          "content": [
            {
              "enchants": {
                "MENDING": 1,
                "PROTECTION_PROJECTILE": 4,
                "THORNS": 3,
                "DURABILITY": 3
              }
            }
          ],
          "amount": 15,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "DIAMOND_BOOTS",
          "content": [
            {
              "enchants": {
                "DEPTH_STRIDER": 3,
                "PROTECTION_FALL": 4,
                "MENDING": 1,
                "PROTECTION_PROJECTILE": 4,
                "SOUL_SPEED": 3,
                "THORNS": 3,
                "DURABILITY": 3
              }
            }
          ],
          "amount": 19,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "NETHERITE_INGOT",
          "content": [],
          "amount": 12,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "YELLOW_SHULKER_BOX",
          "content": [
            {
              "slot": "4",
              "id": "diamond_helmet",
              "count": "1"
            },
            {
              "slot": "12",
              "id": "diamond_chestplate",
              "count": "1"
            },
            {
              "slot": "14",
              "id": "diamond_leggings",
              "count": "1"
            },
            {
              "slot": "22",
              "id": "diamond_boots",
              "count": "1"
            }
          ],
          "amount": 60,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "DIAMOND_HELMET",
          "content": [
            {
              "enchants": {
                "WATER_WORKER": 1,
                "MENDING": 1,
                "PROTECTION_ENVIRONMENTAL": 4,
                "OXYGEN": 3,
                "THORNS": 3,
                "DURABILITY": 3
              }
            }
          ],
          "amount": 19,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "DIAMOND_CHESTPLATE",
          "content": [
            {
              "enchants": {
                "MENDING": 1,
                "PROTECTION_ENVIRONMENTAL": 4,
                "THORNS": 3,
                "DURABILITY": 3
              }
            }
          ],
          "amount": 15,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "DIAMOND_LEGGINGS",
          "content": [
            {
              "enchants": {
                "MENDING": 1,
                "PROTECTION_ENVIRONMENTAL": 4,
                "THORNS": 3,
                "DURABILITY": 3
              }
            }
          ],
          "amount": 15,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "DIAMOND_BOOTS",
          "content": [
            {
              "enchants": {
                "DEPTH_STRIDER": 3,
                "PROTECTION_FALL": 4,
                "MENDING": 1,
                "PROTECTION_ENVIRONMENTAL": 4,
                "SOUL_SPEED": 3,
                "THORNS": 3,
                "DURABILITY": 3
              }
            }
          ],
          "amount": 19,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "DIAMOND_HORSE_ARMOR",
          "content": [],
          "amount": 4,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "GOLDEN_HORSE_ARMOR",
          "content": [],
          "amount": 3,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "IRON_HORSE_ARMOR",
          "content": [],
          "amount": 2,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "LEATHER_HORSE_ARMOR",
          "content": [],
          "amount": 1,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "SADDLE",
          "content": [],
          "amount": 1,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "SHIELD",
          "content": [
            {
              "enchants": {
                "MENDING": 1,
                "DURABILITY": 3
              }
            }
          ],
          "amount": 5,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "SHIELD",
          "content": [
            {
              "enchants": {
                "MENDING": 1,
                "DURABILITY": 3
              }
            }
          ],
          "amount": 5,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        }
      ]
    },
    {
      "name": "G1eb04k0",
      "offers": [
        {
          "name": "RED_SHULKER_BOX",
          "content": [
            {
              "slot": "0",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "1",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "2",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "3",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "4",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "5",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "6",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "7",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "8",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "9",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "10",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "11",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "12",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "13",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "14",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "15",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "16",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "17",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "18",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "19",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "20",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "21",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "22",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "23",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "24",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "25",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "26",
              "id": "firework_rocket",
              "count": "64"
            }
          ],
          "amount": 2,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "RED_SHULKER_BOX",
          "content": [
            {
              "slot": "0",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "1",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "2",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "3",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "4",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "5",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "6",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "7",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "8",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "9",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "10",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "11",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "12",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "13",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "14",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "15",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "16",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "17",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "18",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "19",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "20",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "21",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "22",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "23",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "24",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "25",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "26",
              "id": "firework_rocket",
              "count": "64"
            }
          ],
          "amount": 4,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "RED_SHULKER_BOX",
          "content": [
            {
              "slot": "0",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "1",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "2",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "3",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "4",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "5",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "6",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "7",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "8",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "9",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "10",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "11",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "12",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "13",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "14",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "15",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "16",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "17",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "18",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "19",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "20",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "21",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "22",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "23",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "24",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "25",
              "id": "firework_rocket",
              "count": "64"
            },
            {
              "slot": "26",
              "id": "firework_rocket",
              "count": "64"
            }
          ],
          "amount": 6,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "NETHERITE_INGOT",
          "content": [],
          "amount": 12,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        },
        {
          "name": "YELLOW_SHULKER_BOX",
          "content": [
            {
              "slot": "0",
              "id": "gold_block",
              "count": "64"
            },
            {
              "slot": "1",
              "id": "gold_block",
              "count": "64"
            },
            {
              "slot": "2",
              "id": "gold_block",
              "count": "64"
            },
            {
              "slot": "3",
              "id": "gold_block",
              "count": "64"
            },
            {
              "slot": "4",
              "id": "gold_block",
              "count": "64"
            },
            {
              "slot": "5",
              "id": "gold_block",
              "count": "64"
            },
            {
              "slot": "6",
              "id": "gold_block",
              "count": "64"
            },
            {
              "slot": "7",
              "id": "gold_block",
              "count": "64"
            },
            {
              "slot": "8",
              "id": "gold_block",
              "count": "64"
            },
            {
              "slot": "9",
              "id": "gold_block",
              "count": "64"
            },
            {
              "slot": "10",
              "id": "gold_block",
              "count": "64"
            },
            {
              "slot": "11",
              "id": "gold_block",
              "count": "64"
            },
            {
              "slot": "12",
              "id": "gold_block",
              "count": "64"
            },
            {
              "slot": "13",
              "id": "gold_block",
              "count": "64"
            },
            {
              "slot": "14",
              "id": "gold_block",
              "count": "64"
            },
            {
              "slot": "15",
              "id": "gold_block",
              "count": "64"
            },
            {
              "slot": "16",
              "id": "gold_block",
              "count": "64"
            },
            {
              "slot": "17",
              "id": "gold_block",
              "count": "64"
            },
            {
              "slot": "18",
              "id": "gold_block",
              "count": "64"
            },
            {
              "slot": "19",
              "id": "gold_block",
              "count": "64"
            },
            {
              "slot": "20",
              "id": "gold_block",
              "count": "64"
            },
            {
              "slot": "21",
              "id": "gold_block",
              "count": "64"
            },
            {
              "slot": "22",
              "id": "gold_block",
              "count": "64"
            },
            {
              "slot": "23",
              "id": "gold_block",
              "count": "64"
            },
            {
              "slot": "24",
              "id": "gold_block",
              "count": "64"
            },
            {
              "slot": "25",
              "id": "gold_block",
              "count": "64"
            },
            {
              "slot": "26",
              "id": "gold_block",
              "count": "64"
            }
          ],
          "amount": 40,
          "currency": "DEEPSLATE_DIAMOND_ORE"
        }
      ]
    },
    {
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
            className="search-input-items"
            id="search-input-items"
            placeholder="Найти..."
            onChange={(e) => setQueryData(e.target.value)}
          />

          {data.filter((fil) => fil.name.toLowerCase().includes(queryData)).map((el, index) => {
              return (
                el.offers.map((offer, index) => {
                    return (
                      <OneSuggestions key={index} {...offer} onClick={isItemInteractive(offer) ? () => {setSelectedItem(offer) } : undefined}/>
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

