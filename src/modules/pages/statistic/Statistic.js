import React, {useEffect, useState, useMemo} from "react";
import AOS from "aos";
import {useAxios} from '../../../DataProvider';
import Preload from "../../components/preloader/Preload";
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

import "./Statistic.scss";
import "aos/dist/aos.css";

const Statistic = () => {
  const containerStyle = useMemo(() => ({ width: '100%', height: '100%' }), []);
  const gridStyle = useMemo(() => ({ height: '100%', width: '100%' }), []);

  const resParams = useAxios(
    "/api/get_statistics",
    'GET',
    {}
  );

  const numberSort = (num1, num2) => {
    return num1 - num2;
  };

  const [columns, setColumnDefs] = useState([
    { headerName: 'Ник', field: 'name', filter: true, sortable: true },
    { headerName: 'Активное время игры', field: 'active_playtime', sortable: true, valueFormatter: params => timeFormat(params), comparator: numberSort},
    { headerName: 'АФК', field: 'afk', sortable: true,  valueFormatter: params => timeFormat(params), comparator: numberSort},
    { headerName: 'Смерти', field: 'deaths', sortable: true, comparator: numberSort },
    { headerName: 'Убито мобов', field: 'mobs', sortable: true, comparator: numberSort },
    { headerName: 'Сломано блоков', field: 'broken', sortable: true, comparator: numberSort, valueFormatter: ({value}) => !value ? 0 : value },
    { headerName: 'Установлено блоков', field: 'supplied', sortable: true, comparator: numberSort, valueFormatter: ({value}) => !value ? 0 : value },
  ]);

  useEffect(() => {
    AOS.init({duration: 1000});
  }, []);

  if (resParams.loading) {
    return <Preload/>;
  }

  function timeFormat(params) {
    const value = params.value;
    const cd = 24 * 60 * 60 * 1000;
    const ch = 60 * 60 * 1000;

    let d = Math.floor(value / cd);
    let h = Math.floor((value - d * cd) / ch);
    let m = Math.round((value - d * cd - h * ch) / 60000);
    const pad = (n) => n < 10 ? '0' + n : n;

    if( m === 60 ){
      h++;
      m = 0;
    }
    if( h === 24 ){
      d++;
      h = 0;
    }

    if (d == 0 && h > 0) {
      return pad(h) + "ч " + pad(m) + "м";
    } 

    if (d == 0 && h == 0 && m > 0) {
      return pad(m) + "м";
    }

    if (d == 0 && h == 0 && m == 0) {
      return "< 00м";
    }

    return d + "д " + pad(h) + "ч " + pad(m) + "м";
  }

  const data = [
    {
        "name": "Niksa_Viento",
        "active_playtime": "11734267599",
        "afk": "10498506607",
        "deaths": "8",
        "mobs": "1350615",
        "broken": 20523355,
        "supplied": 13670970
    },
    {
        "name": "SoftPanda3",
        "active_playtime": "9617434226",
        "afk": "17406833287",
        "deaths": "12",
        "mobs": "1980000",
        "broken": 25335470,
        "supplied": 8340828
    },
    {
        "name": "prestig9110",
        "active_playtime": "5446310907",
        "afk": "5667927981",
        "deaths": "62",
        "mobs": "105720",
        "broken": 2257669,
        "supplied": 1657010
    },
    {
        "name": "Li_Ora",
        "active_playtime": "5144602150",
        "afk": "2989354542",
        "deaths": "1",
        "mobs": "27492",
        "broken": 1807152,
        "supplied": 664312
    },
    {
        "name": "GMhub",
        "active_playtime": "4439285613",
        "afk": "13008670429",
        "deaths": "3",
        "mobs": "33",
        "broken": 653302,
        "supplied": 188956
    },
    {
        "name": "Dalandis",
        "active_playtime": "3093680789",
        "afk": "5352681961",
        "deaths": "2",
        "mobs": "228",
        "broken": 5836991,
        "supplied": 713775
    },
    {
        "name": "BlackPirat",
        "active_playtime": "3024552618",
        "afk": "5189729742",
        "deaths": "0",
        "mobs": "673820",
        "broken": 1844356,
        "supplied": 1206512
    },
    {
        "name": "Cytrynid",
        "active_playtime": "2563202188",
        "afk": "768896571",
        "deaths": "2",
        "mobs": "4896",
        "broken": 1325659,
        "supplied": 674362
    },
    {
        "name": "gerhugwsif",
        "active_playtime": "2531154329",
        "afk": "558755896",
        "deaths": "10",
        "mobs": "6657",
        "broken": 481479,
        "supplied": 590097
    },
    {
        "name": "ChancellorIkseew",
        "active_playtime": "2488278694",
        "afk": "395312840",
        "deaths": "0",
        "mobs": "39270",
        "broken": 752353,
        "supplied": 702940
    },
    {
        "name": "ytka_sorry_t9",
        "active_playtime": "2415931224",
        "afk": "1891607468",
        "deaths": "8",
        "mobs": "683",
        "broken": 2079788,
        "supplied": 1024310
    },
    {
        "name": "Blackirita",
        "active_playtime": "2342969532",
        "afk": "886156031",
        "deaths": "0",
        "mobs": "183",
        "broken": 1474883,
        "supplied": 1586911
    },
    {
        "name": "Wapwolf",
        "active_playtime": "2012369229",
        "afk": "705102990",
        "deaths": "49",
        "mobs": "9985",
        "broken": 286151,
        "supplied": 513043
    },
    {
        "name": "TheMuvin",
        "active_playtime": "1977442368",
        "afk": "1997585547",
        "deaths": "9",
        "mobs": "61239",
        "broken": 105059,
        "supplied": 165089
    },
    {
        "name": "_Kerubifi_",
        "active_playtime": "1533040764",
        "afk": "1592562972",
        "deaths": "3",
        "mobs": "4648",
        "broken": 1152033,
        "supplied": 596383
    },
    {
        "name": "WiCry",
        "active_playtime": "1478210737",
        "afk": "1106706693",
        "deaths": "3",
        "mobs": "96504",
        "broken": 691111,
        "supplied": 368340
    },
    {
        "name": "vio",
        "active_playtime": "1228692991",
        "afk": "628274544",
        "deaths": "20",
        "mobs": "38934",
        "broken": 457165,
        "supplied": 358786
    },
    {
        "name": "kermitik",
        "active_playtime": "1136852813",
        "afk": "352284140",
        "deaths": "73",
        "mobs": "29429",
        "broken": 573823,
        "supplied": 329822
    },
    {
        "name": "wanier680",
        "active_playtime": "957839951",
        "afk": "83346255",
        "deaths": "6",
        "mobs": "26230",
        "broken": 540542,
        "supplied": 354259
    },
    {
        "name": "Mad_Chiffa",
        "active_playtime": "864646812",
        "afk": "191855294",
        "deaths": "23",
        "mobs": "7499",
        "broken": 659441,
        "supplied": 515426
    },
    {
        "name": "Ubivets",
        "active_playtime": "833105438",
        "afk": "262435867",
        "deaths": "40",
        "mobs": "1218",
        "broken": 216930,
        "supplied": 84488
    },
    {
        "name": "Lucky_Sword",
        "active_playtime": "782920545",
        "afk": "450230178",
        "deaths": "10",
        "mobs": "3617",
        "broken": 377249,
        "supplied": 756584
    },
    {
        "name": "artim112",
        "active_playtime": "771896695",
        "afk": "439860395",
        "deaths": "19",
        "mobs": "227538",
        "broken": 571183,
        "supplied": 99068
    },
    {
        "name": "Quilstin",
        "active_playtime": "767041181",
        "afk": "173910505",
        "deaths": "7",
        "mobs": "1118427",
        "broken": 140703,
        "supplied": 90877
    },
    {
        "name": "mirage3000",
        "active_playtime": "707296689",
        "afk": "153206133",
        "deaths": "4",
        "mobs": "3411",
        "broken": 191775,
        "supplied": 24637
    },
    {
        "name": "_JohngeaR_",
        "active_playtime": "700666143",
        "afk": "555110725",
        "deaths": "6",
        "mobs": "144183",
        "broken": 186806,
        "supplied": 59385
    },
    {
        "name": "Qberty22",
        "active_playtime": "658121672",
        "afk": "130216052",
        "deaths": "4",
        "mobs": "71285",
        "broken": 310469,
        "supplied": 201307
    },
    {
        "name": "_BaXy_",
        "active_playtime": "647206165",
        "afk": "669898576",
        "deaths": "2",
        "mobs": "624",
        "broken": 726592,
        "supplied": 508476
    },
    {
        "name": "Vonderan",
        "active_playtime": "619323459",
        "afk": "108508771",
        "deaths": "15",
        "mobs": "551",
        "broken": 180562,
        "supplied": 172776
    },
    {
        "name": "Tifler",
        "active_playtime": "531840740",
        "afk": "564076181",
        "deaths": "9",
        "mobs": "11207",
        "broken": 731092,
        "supplied": 96753
    },
    {
        "name": "HuDreY",
        "active_playtime": "477200241",
        "afk": "796052459",
        "deaths": "5",
        "mobs": "3753",
        "broken": 462473,
        "supplied": 92825
    },
    {
        "name": "lus7",
        "active_playtime": "474472077",
        "afk": "42886480",
        "deaths": "9",
        "mobs": "721",
        "broken": 132194,
        "supplied": 72550
    },
    {
        "name": "roy_frost",
        "active_playtime": "472602375",
        "afk": "68911610",
        "deaths": "85",
        "mobs": "405",
        "broken": 118462,
        "supplied": 96838
    },
    {
        "name": "SolyankaXD",
        "active_playtime": "468623512",
        "afk": "326426374",
        "deaths": "20",
        "mobs": "4052",
        "broken": 180974,
        "supplied": 138509
    },
    {
        "name": "G1eb04k0",
        "active_playtime": "389320707",
        "afk": "196169708",
        "deaths": "9",
        "mobs": "7582",
        "broken": 79024,
        "supplied": 105054
    },
    {
        "name": "Oxana__",
        "active_playtime": "383760924",
        "afk": "45966472",
        "deaths": "8",
        "mobs": "325",
        "broken": 483089,
        "supplied": 332920
    },
    {
        "name": "IronCAT_",
        "active_playtime": "359995749",
        "afk": "307076019",
        "deaths": "2",
        "mobs": "1394",
        "broken": 381010,
        "supplied": 70711
    },
    {
        "name": "Koldobina",
        "active_playtime": "356828128",
        "afk": "123888535",
        "deaths": "17",
        "mobs": "7428",
        "broken": 52979,
        "supplied": 49357
    },
    {
        "name": "Solyara0",
        "active_playtime": "356632955",
        "afk": "125618516",
        "deaths": "10",
        "mobs": "13169",
        "broken": 137304,
        "supplied": 21304
    },
    {
        "name": "SabLi",
        "active_playtime": "342830034",
        "afk": "29716134",
        "deaths": "1",
        "mobs": "5626",
        "broken": 171360,
        "supplied": 133088
    },
    {
        "name": "K0hNk_Yt",
        "active_playtime": "318004086",
        "afk": "54433824",
        "deaths": "6",
        "mobs": "17074",
        "broken": 49770,
        "supplied": 10901
    },
    {
        "name": "dooDUDKA",
        "active_playtime": "311668608",
        "afk": "148717645",
        "deaths": "11",
        "mobs": "245",
        "broken": 45942,
        "supplied": 76560
    },
    {
        "name": "GlitchCringe",
        "active_playtime": "303757616",
        "afk": "82108147",
        "deaths": "25",
        "mobs": "4273",
        "broken": 177587,
        "supplied": 80734
    },
    {
        "name": "Bivrat",
        "active_playtime": "298937607",
        "afk": "25893621",
        "deaths": "6",
        "mobs": "16510",
        "broken": 650856,
        "supplied": 214869
    },
    {
        "name": "Awan_Weller",
        "active_playtime": "282762709",
        "afk": "19247378",
        "deaths": "36",
        "mobs": "775",
        "broken": 176410,
        "supplied": 16555
    },
    {
        "name": "gefest",
        "active_playtime": "277993570",
        "afk": "81152548",
        "deaths": "10",
        "mobs": "554",
        "broken": 334120,
        "supplied": 96137
    },
    {
        "name": "George160",
        "active_playtime": "255268125",
        "afk": "11351409",
        "deaths": "37",
        "mobs": "2623",
        "broken": 192582,
        "supplied": 27241
    },
    {
        "name": "GMgame",
        "active_playtime": "252409841",
        "afk": "1342606874",
        "deaths": "14",
        "mobs": "260",
        "broken": 235395,
        "supplied": 284723
    },
    {
        "name": "GioliRaed",
        "active_playtime": "243811057",
        "afk": "22274175",
        "deaths": "3",
        "mobs": "799",
        "broken": 107753,
        "supplied": 172242
    },
    {
        "name": "MrBiba27",
        "active_playtime": "236326994",
        "afk": "18293914",
        "deaths": "14",
        "mobs": "1137",
        "broken": 441248,
        "supplied": 10044
    },
    {
        "name": "SenSid",
        "active_playtime": "231796741",
        "afk": "12689086",
        "deaths": "20",
        "mobs": "1430",
        "broken": 75236,
        "supplied": 182958
    },
    {
        "name": "OMNIONI",
        "active_playtime": "230763803",
        "afk": "7274267",
        "deaths": "0",
        "mobs": "699",
        "broken": 40720,
        "supplied": 16584
    },
    {
        "name": "UTKNSS",
        "active_playtime": "218039015",
        "afk": "110492346",
        "deaths": "27",
        "mobs": "283",
        "broken": 30378,
        "supplied": 10910
    },
    {
        "name": "Clausewitz",
        "active_playtime": "216734825",
        "afk": "20474246",
        "deaths": "36",
        "mobs": "184",
        "broken": 116864,
        "supplied": 85389
    },
    {
        "name": "_Mekhanit_",
        "active_playtime": "211022259",
        "afk": "136328073",
        "deaths": "0",
        "mobs": "76",
        "broken": 64161,
        "supplied": 15207
    },
    {
        "name": "sufLesh",
        "active_playtime": "177407705",
        "afk": "31037514",
        "deaths": "11",
        "mobs": "3321",
        "broken": 77917,
        "supplied": 19301
    },
    {
        "name": "M1notaur_",
        "active_playtime": "176317919",
        "afk": "12316067",
        "deaths": "11",
        "mobs": "12473",
        "broken": 66887,
        "supplied": 44363
    },
    {
        "name": "Steinyasha",
        "active_playtime": "173704074",
        "afk": "12039642",
        "deaths": "4",
        "mobs": "1253",
        "broken": 230672,
        "supplied": 135692
    },
    {
        "name": "Pure_VesseI",
        "active_playtime": "169234274",
        "afk": "10247384",
        "deaths": "0",
        "mobs": "5538",
        "broken": 164891,
        "supplied": 21038
    },
    {
        "name": "EUGENlJUS",
        "active_playtime": "168831511",
        "afk": "17745066",
        "deaths": "6",
        "mobs": "95",
        "broken": 80965,
        "supplied": 43693
    },
    {
        "name": "Barten_cofeek",
        "active_playtime": "164282598",
        "afk": "8944850",
        "deaths": "19",
        "mobs": "5554",
        "broken": 102586,
        "supplied": 30196
    },
    {
        "name": "EagleRu",
        "active_playtime": "159111158",
        "afk": "18222645",
        "deaths": "12",
        "mobs": "101",
        "broken": 49308,
        "supplied": 58047
    },
    {
        "name": "Ksemetan",
        "active_playtime": "158336679",
        "afk": "66693082",
        "deaths": "2",
        "mobs": "232",
        "broken": 128481,
        "supplied": 33805
    },
    {
        "name": "NIEROL",
        "active_playtime": "156666131",
        "afk": "59448646",
        "deaths": "2",
        "mobs": "254",
        "broken": 181419,
        "supplied": 12777
    },
    {
        "name": "Filigan",
        "active_playtime": "154571209",
        "afk": "8293316",
        "deaths": "10",
        "mobs": "643",
        "broken": 72363,
        "supplied": 42058
    },
    {
        "name": "adeeda",
        "active_playtime": "136845845",
        "afk": "17586830",
        "deaths": "6",
        "mobs": "394",
        "broken": 323476,
        "supplied": 240943
    },
    {
        "name": "Warp159",
        "active_playtime": "129410580",
        "afk": "88667693",
        "deaths": "4",
        "mobs": "299",
        "broken": 33671,
        "supplied": 12876
    },
    {
        "name": "Jean_Viento",
        "active_playtime": "129379477",
        "afk": "282810864",
        "deaths": "0",
        "mobs": "7",
        "broken": 596820,
        "supplied": 347406
    },
    {
        "name": "Melimops",
        "active_playtime": "128126738",
        "afk": "17444424",
        "deaths": "0",
        "mobs": "2484",
        "broken": 110659,
        "supplied": 27711
    },
    {
        "name": "Zuziarine",
        "active_playtime": "125401295",
        "afk": "22278107",
        "deaths": "13",
        "mobs": "784",
        "broken": 48503,
        "supplied": 7358
    },
    {
        "name": "Faskat",
        "active_playtime": "121754131",
        "afk": "17828723",
        "deaths": "4",
        "mobs": "1559",
        "broken": 344542,
        "supplied": 159457
    },
    {
        "name": "Aina_Cingar",
        "active_playtime": "116909732",
        "afk": "8581387",
        "deaths": "9",
        "mobs": "10979",
        "broken": 195020,
        "supplied": 12027
    },
    {
        "name": "Masha3005",
        "active_playtime": "113517677",
        "afk": "21170732",
        "deaths": "8",
        "mobs": "1117",
        "broken": 2104,
        "supplied": 6171
    },
    {
        "name": "PD_LEDER",
        "active_playtime": "111943191",
        "afk": "6603452",
        "deaths": "20",
        "mobs": "989",
        "broken": 48192,
        "supplied": 27884
    },
    {
        "name": "MURFAN",
        "active_playtime": "106093668",
        "afk": "20092202",
        "deaths": "2",
        "mobs": "339",
        "broken": 30717,
        "supplied": 26871
    },
    {
        "name": "HesDell",
        "active_playtime": "99530964",
        "afk": "14494741",
        "deaths": "17",
        "mobs": "4718",
        "broken": 38164,
        "supplied": 46644
    },
    {
        "name": "_YOtosakaY_",
        "active_playtime": "93260936",
        "afk": "5421284",
        "deaths": "0",
        "mobs": "245",
        "broken": 39079,
        "supplied": 12766
    },
    {
        "name": "MishkaUMBA",
        "active_playtime": "85990207",
        "afk": "71239196",
        "deaths": "29",
        "mobs": "1416",
        "broken": 767,
        "supplied": 8983
    },
    {
        "name": "Egorizik",
        "active_playtime": "83891324",
        "afk": "6507435",
        "deaths": "0",
        "mobs": "271",
        "broken": 87751,
        "supplied": 28300
    },
    {
        "name": "dZenWood",
        "active_playtime": "82840246",
        "afk": "40708568",
        "deaths": "0",
        "mobs": "24",
        "broken": 7286,
        "supplied": 36560
    },
    {
        "name": "Chegeuvara",
        "active_playtime": "80651064",
        "afk": "19672757",
        "deaths": "3",
        "mobs": "33",
        "broken": null,
        "supplied": null
    },
    {
        "name": "Unlucky_KOT",
        "active_playtime": "72427583",
        "afk": "29602311",
        "deaths": "4",
        "mobs": "1137",
        "broken": 343599,
        "supplied": 137850
    },
    {
        "name": "BandiFix",
        "active_playtime": "70402059",
        "afk": "2658778",
        "deaths": "3",
        "mobs": "260",
        "broken": 28709,
        "supplied": 5484
    },
    {
        "name": "Signature_Rubick",
        "active_playtime": "69633536",
        "afk": "7615616",
        "deaths": "4",
        "mobs": "26",
        "broken": null,
        "supplied": null
    },
    {
        "name": "Star_Braid",
        "active_playtime": "67740006",
        "afk": "7597950",
        "deaths": "2",
        "mobs": "291",
        "broken": 57965,
        "supplied": 19378
    },
    {
        "name": "Rasp1d",
        "active_playtime": "67726768",
        "afk": "2625937",
        "deaths": "5",
        "mobs": "47",
        "broken": 5671,
        "supplied": 30310
    },
    {
        "name": "Schocker_Face",
        "active_playtime": "66635226",
        "afk": "7473718",
        "deaths": "33",
        "mobs": "1921",
        "broken": 56285,
        "supplied": 1
    },
    {
        "name": "Gradiented",
        "active_playtime": "66469849",
        "afk": "6220831",
        "deaths": "29",
        "mobs": "76",
        "broken": 4446,
        "supplied": 5281
    },
    {
        "name": "NesiW",
        "active_playtime": "60035906",
        "afk": "68967128",
        "deaths": "0",
        "mobs": "629",
        "broken": 2642,
        "supplied": 9046
    },
    {
        "name": "MissAnnet",
        "active_playtime": "53300516",
        "afk": "3622207",
        "deaths": "1",
        "mobs": "572",
        "broken": 16785,
        "supplied": 27577
    },
    {
        "name": "ItzClandex",
        "active_playtime": "51244251",
        "afk": "19820222",
        "deaths": "0",
        "mobs": "183",
        "broken": 462580,
        "supplied": 211528
    },
    {
        "name": "Kari_m",
        "active_playtime": "50404345",
        "afk": "5015831",
        "deaths": "9",
        "mobs": "159",
        "broken": 64723,
        "supplied": 0
    },
    {
        "name": "astr07",
        "active_playtime": "50365143",
        "afk": "3591469",
        "deaths": "5",
        "mobs": "199",
        "broken": 43988,
        "supplied": 152
    },
    {
        "name": "AMFIBIYA",
        "active_playtime": "48722547",
        "afk": "92259168",
        "deaths": "4",
        "mobs": "430",
        "broken": 30992,
        "supplied": 2565
    },
    {
        "name": "Fantazium",
        "active_playtime": "47656907",
        "afk": "4405535",
        "deaths": "0",
        "mobs": "4372",
        "broken": 22790,
        "supplied": 15555
    },
    {
        "name": "Kwa",
        "active_playtime": "47303026",
        "afk": "4787745",
        "deaths": "0",
        "mobs": "31",
        "broken": 4767,
        "supplied": 11223
    },
    {
        "name": "lifemars",
        "active_playtime": "47162137",
        "afk": "1582578",
        "deaths": "4",
        "mobs": "962",
        "broken": 26371,
        "supplied": 1586
    },
    {
        "name": "eldalomeo",
        "active_playtime": "44863457",
        "afk": "212048626",
        "deaths": "1",
        "mobs": "848",
        "broken": 56851,
        "supplied": 37000
    },
    {
        "name": "Krasul1a",
        "active_playtime": "44313719",
        "afk": "13408132",
        "deaths": "8",
        "mobs": "33",
        "broken": 43890,
        "supplied": 7160
    },
    {
        "name": "egor442",
        "active_playtime": "43159926",
        "afk": "5924766",
        "deaths": "7",
        "mobs": "137",
        "broken": 7733,
        "supplied": 8
    },
    {
        "name": "Jackonez",
        "active_playtime": "42627431",
        "afk": "2797865",
        "deaths": "11",
        "mobs": "73",
        "broken": 4134,
        "supplied": 10853
    },
    {
        "name": "maksfax",
        "active_playtime": "42493506",
        "afk": "6000523",
        "deaths": "0",
        "mobs": "47",
        "broken": 0,
        "supplied": 10345
    },
    {
        "name": "Krogut",
        "active_playtime": "40521109",
        "afk": "2891980",
        "deaths": "0",
        "mobs": "387",
        "broken": 16294,
        "supplied": 5988
    },
    {
        "name": "GamerOOx",
        "active_playtime": "40253266",
        "afk": "1271131",
        "deaths": "10",
        "mobs": "25",
        "broken": 0,
        "supplied": 6915
    },
    {
        "name": "gefest_hu",
        "active_playtime": "38987795",
        "afk": "1033462",
        "deaths": "0",
        "mobs": "74",
        "broken": 25141,
        "supplied": 22050
    },
    {
        "name": "YasuYa",
        "active_playtime": "37256847",
        "afk": "16742103",
        "deaths": "11",
        "mobs": "15",
        "broken": 38,
        "supplied": 31
    },
    {
        "name": "KorJik__",
        "active_playtime": "34283868",
        "afk": "1874032",
        "deaths": "7",
        "mobs": "299",
        "broken": 5087,
        "supplied": 12166
    },
    {
        "name": "Tumart123",
        "active_playtime": "32551728",
        "afk": "3059427",
        "deaths": "6",
        "mobs": "28",
        "broken": 7,
        "supplied": 1524
    },
    {
        "name": "Landish",
        "active_playtime": "32376696",
        "afk": "281897",
        "deaths": "16",
        "mobs": "30",
        "broken": 11,
        "supplied": 7
    },
    {
        "name": "L_exa_",
        "active_playtime": "32238763",
        "afk": "634934",
        "deaths": "1",
        "mobs": "57",
        "broken": 0,
        "supplied": 9850
    },
    {
        "name": "iRuhart",
        "active_playtime": "31495767",
        "afk": "3526712",
        "deaths": "1",
        "mobs": "164",
        "broken": 19642,
        "supplied": 6596
    },
    {
        "name": "matttvey",
        "active_playtime": "31137610",
        "afk": "982341",
        "deaths": "4",
        "mobs": "123",
        "broken": 6,
        "supplied": 8
    },
    {
        "name": "OlegVapnik",
        "active_playtime": "29826094",
        "afk": "0",
        "deaths": "3",
        "mobs": "394",
        "broken": 90605,
        "supplied": 1597
    },
    {
        "name": "BlackAngelsTy",
        "active_playtime": "29476810",
        "afk": "1157763",
        "deaths": "6",
        "mobs": "67",
        "broken": 3998,
        "supplied": 1
    },
    {
        "name": "mas2002_",
        "active_playtime": "29181911",
        "afk": "3904843",
        "deaths": "2",
        "mobs": "48",
        "broken": 318,
        "supplied": 87
    },
    {
        "name": "_3_SyPheR_7_",
        "active_playtime": "29037636",
        "afk": "441049",
        "deaths": "8",
        "mobs": "67",
        "broken": 9536,
        "supplied": 4005
    },
    {
        "name": "Hazquard",
        "active_playtime": "28790636",
        "afk": "1408161",
        "deaths": "0",
        "mobs": "2",
        "broken": 77520,
        "supplied": 16422
    },
    {
        "name": "nikachanka",
        "active_playtime": "27847157",
        "afk": "3684646",
        "deaths": "4",
        "mobs": "32",
        "broken": 0,
        "supplied": 2
    },
    {
        "name": "Fire315",
        "active_playtime": "26802856",
        "afk": "4114570",
        "deaths": "0",
        "mobs": "114",
        "broken": 1983,
        "supplied": 2938
    },
    {
        "name": "Hexol",
        "active_playtime": "26009519",
        "afk": "0",
        "deaths": "39",
        "mobs": "51",
        "broken": 3,
        "supplied": 2508
    },
    {
        "name": "Evgen51",
        "active_playtime": "24738585",
        "afk": "69289543",
        "deaths": "3",
        "mobs": "235",
        "broken": 27338,
        "supplied": 18347
    },
    {
        "name": "laSouf1883",
        "active_playtime": "23967018",
        "afk": "6446397",
        "deaths": "0",
        "mobs": "360",
        "broken": 17424,
        "supplied": 32
    },
    {
        "name": "Daesael",
        "active_playtime": "22653041",
        "afk": "1070177",
        "deaths": "0",
        "mobs": "7",
        "broken": null,
        "supplied": null
    },
    {
        "name": "DANEEEL",
        "active_playtime": "22119958",
        "afk": "8530652",
        "deaths": "1",
        "mobs": "162",
        "broken": 6503,
        "supplied": 10872
    },
    {
        "name": "koronaantider",
        "active_playtime": "21737832",
        "afk": "12831032",
        "deaths": "0",
        "mobs": "22",
        "broken": 20,
        "supplied": 16
    },
    {
        "name": "shawergel",
        "active_playtime": "20487467",
        "afk": "6336091",
        "deaths": "0",
        "mobs": "17",
        "broken": 2402,
        "supplied": 1949
    },
    {
        "name": "BombachH",
        "active_playtime": "19951237",
        "afk": "6224990",
        "deaths": "6",
        "mobs": "555",
        "broken": 681,
        "supplied": 31
    },
    {
        "name": "Pigse",
        "active_playtime": "19786229",
        "afk": "2158576",
        "deaths": "1",
        "mobs": "4",
        "broken": null,
        "supplied": null
    },
    {
        "name": "H0Rs1s",
        "active_playtime": "18593318",
        "afk": "5247499",
        "deaths": "0",
        "mobs": "16",
        "broken": 1527,
        "supplied": 6280
    },
    {
        "name": "KoT_YMNOT",
        "active_playtime": "18493932",
        "afk": "1364189",
        "deaths": "0",
        "mobs": "0",
        "broken": null,
        "supplied": null
    },
    {
        "name": "amogyss",
        "active_playtime": "18377557",
        "afk": "656340",
        "deaths": "0",
        "mobs": "1",
        "broken": null,
        "supplied": null
    },
    {
        "name": "dky_",
        "active_playtime": "17340465",
        "afk": "912142",
        "deaths": "1",
        "mobs": "2",
        "broken": null,
        "supplied": null
    },
    {
        "name": "Mrkocmocc",
        "active_playtime": "16976116",
        "afk": "1131183",
        "deaths": "0",
        "mobs": "77",
        "broken": 1844,
        "supplied": 1571
    },
    {
        "name": "policeruss",
        "active_playtime": "16894581",
        "afk": "674989",
        "deaths": "1",
        "mobs": "0",
        "broken": null,
        "supplied": null
    },
    {
        "name": "kuzkonn",
        "active_playtime": "16814485",
        "afk": "9948342",
        "deaths": "0",
        "mobs": "2",
        "broken": null,
        "supplied": null
    },
    {
        "name": "alexina4ka",
        "active_playtime": "15723472",
        "afk": "828167",
        "deaths": "2",
        "mobs": "39",
        "broken": 2268,
        "supplied": 1179
    },
    {
        "name": "WildCat",
        "active_playtime": "14799966",
        "afk": "1552022",
        "deaths": "1",
        "mobs": "17",
        "broken": null,
        "supplied": null
    },
    {
        "name": "Mallard_Jr",
        "active_playtime": "14660843",
        "afk": "2144722",
        "deaths": "1",
        "mobs": "77",
        "broken": null,
        "supplied": null
    },
    {
        "name": "YasuYa",
        "active_playtime": "14565368",
        "afk": "11503025",
        "deaths": "4",
        "mobs": "20",
        "broken": 38,
        "supplied": 31
    },
    {
        "name": "EagleRu",
        "active_playtime": "14405182",
        "afk": "0",
        "deaths": "0",
        "mobs": "3",
        "broken": 49308,
        "supplied": 58047
    },
    {
        "name": "kkate",
        "active_playtime": "14164525",
        "afk": "733037",
        "deaths": "3",
        "mobs": "0",
        "broken": null,
        "supplied": null
    },
    {
        "name": "zxczhelaniye",
        "active_playtime": "13816084",
        "afk": "1233407",
        "deaths": "1",
        "mobs": "2",
        "broken": null,
        "supplied": null
    },
    {
        "name": "I_Dameron",
        "active_playtime": "13137885",
        "afk": "1828831",
        "deaths": "0",
        "mobs": "25",
        "broken": null,
        "supplied": null
    },
    {
        "name": "FrizKoks",
        "active_playtime": "12970495",
        "afk": "1490083",
        "deaths": "0",
        "mobs": "7",
        "broken": 5715,
        "supplied": 985
    },
    {
        "name": "Lemonka",
        "active_playtime": "12911507",
        "afk": "3919527",
        "deaths": "0",
        "mobs": "19",
        "broken": 782,
        "supplied": 1
    },
    {
        "name": "KLauncher_sworrx",
        "active_playtime": "12818643",
        "afk": "788756",
        "deaths": "0",
        "mobs": "0",
        "broken": null,
        "supplied": null
    },
    {
        "name": "HellAress",
        "active_playtime": "12015466",
        "afk": "1728220",
        "deaths": "0",
        "mobs": "30",
        "broken": null,
        "supplied": null
    },
    {
        "name": "SFastikF",
        "active_playtime": "11285535",
        "afk": "228732",
        "deaths": "4",
        "mobs": "21",
        "broken": 47,
        "supplied": 45
    },
    {
        "name": "TRC_SONote",
        "active_playtime": "10420379",
        "afk": "0",
        "deaths": "6",
        "mobs": "106",
        "broken": null,
        "supplied": null
    },
    {
        "name": "Stillbo",
        "active_playtime": "10314595",
        "afk": "0",
        "deaths": "1",
        "mobs": "58",
        "broken": 5909,
        "supplied": 14751
    },
    {
        "name": "venicce",
        "active_playtime": "10172673",
        "afk": "0",
        "deaths": "5",
        "mobs": "95",
        "broken": 174,
        "supplied": 16
    },
    {
        "name": "Lotus_Moon",
        "active_playtime": "10018574",
        "afk": "1463712",
        "deaths": "2",
        "mobs": "32",
        "broken": 422,
        "supplied": 161
    },
    {
        "name": "Argolo_",
        "active_playtime": "9918952",
        "afk": "0",
        "deaths": "2",
        "mobs": "20",
        "broken": 3422,
        "supplied": 0
    },
    {
        "name": "Hatch58",
        "active_playtime": "9493034",
        "afk": "2959401",
        "deaths": "0",
        "mobs": "3",
        "broken": null,
        "supplied": null
    },
    {
        "name": "KotTiz",
        "active_playtime": "9286746",
        "afk": "910256",
        "deaths": "5",
        "mobs": "21",
        "broken": 8823,
        "supplied": 0
    },
    {
        "name": "bab4nura",
        "active_playtime": "9168536",
        "afk": "0",
        "deaths": "0",
        "mobs": "16",
        "broken": 2212,
        "supplied": 0
    },
    {
        "name": "Awan_Weller",
        "active_playtime": "9063199",
        "afk": "898475",
        "deaths": "2",
        "mobs": "0",
        "broken": 176410,
        "supplied": 16555
    },
    {
        "name": "VanDerWelde1215",
        "active_playtime": "8501386",
        "afk": "1515973",
        "deaths": "0",
        "mobs": "21",
        "broken": 1577,
        "supplied": 0
    },
    {
        "name": "mahartet",
        "active_playtime": "8497045",
        "afk": "242199",
        "deaths": "3",
        "mobs": "1",
        "broken": 2,
        "supplied": 2
    },
    {
        "name": "AndyKaledin",
        "active_playtime": "8241828",
        "afk": "1380202",
        "deaths": "1",
        "mobs": "1",
        "broken": null,
        "supplied": null
    },
    {
        "name": "AlexMERCHANT6032",
        "active_playtime": "7911763",
        "afk": "2791715",
        "deaths": "3",
        "mobs": "12",
        "broken": null,
        "supplied": null
    },
    {
        "name": "RAKIM_0NE",
        "active_playtime": "7825895",
        "afk": "979352",
        "deaths": "0",
        "mobs": "17",
        "broken": 26,
        "supplied": 27
    },
    {
        "name": "Techno_Ded",
        "active_playtime": "7617977",
        "afk": "0",
        "deaths": "0",
        "mobs": "0",
        "broken": null,
        "supplied": null
    },
    {
        "name": "NT_NightYue",
        "active_playtime": "7562800",
        "afk": "354860",
        "deaths": "0",
        "mobs": "12",
        "broken": null,
        "supplied": null
    },
    {
        "name": "Tunaber",
        "active_playtime": "7525271",
        "afk": "726752",
        "deaths": "0",
        "mobs": "9",
        "broken": 992,
        "supplied": 0
    },
    {
        "name": "findeq",
        "active_playtime": "7220134",
        "afk": "0",
        "deaths": "2",
        "mobs": "2",
        "broken": null,
        "supplied": null
    },
    {
        "name": "Vuvuzela",
        "active_playtime": "7162466",
        "afk": "0",
        "deaths": "2",
        "mobs": "8",
        "broken": null,
        "supplied": null
    },
    {
        "name": "L3tf1",
        "active_playtime": "6857466",
        "afk": "3354283",
        "deaths": "1",
        "mobs": "2",
        "broken": null,
        "supplied": null
    },
    {
        "name": "ramil",
        "active_playtime": "6806602",
        "afk": "2785209",
        "deaths": "0",
        "mobs": "0",
        "broken": null,
        "supplied": null
    },
    {
        "name": "Xlkay",
        "active_playtime": "6784765",
        "afk": "424694",
        "deaths": "1",
        "mobs": "21",
        "broken": 1200,
        "supplied": 247
    },
    {
        "name": "sanya",
        "active_playtime": "6726660",
        "afk": "475",
        "deaths": "0",
        "mobs": "2",
        "broken": null,
        "supplied": null
    },
    {
        "name": "MrS135",
        "active_playtime": "6634587",
        "afk": "1002187",
        "deaths": "0",
        "mobs": "0",
        "broken": null,
        "supplied": null
    },
    {
        "name": "lGospodinl",
        "active_playtime": "6582634",
        "afk": "1203521",
        "deaths": "1",
        "mobs": "16",
        "broken": 266,
        "supplied": 476
    },
    {
        "name": "2paragvay",
        "active_playtime": "6356300",
        "afk": "1802027",
        "deaths": "1",
        "mobs": "17",
        "broken": null,
        "supplied": null
    },
    {
        "name": "Faaanii",
        "active_playtime": "6165786",
        "afk": "0",
        "deaths": "0",
        "mobs": "14",
        "broken": null,
        "supplied": null
    },
    {
        "name": "BlackDaun",
        "active_playtime": "5696596",
        "afk": "265094",
        "deaths": "5",
        "mobs": "10",
        "broken": 26,
        "supplied": 0
    },
    {
        "name": "ReyFeat",
        "active_playtime": "5614601",
        "afk": "18879880",
        "deaths": "1",
        "mobs": "5",
        "broken": null,
        "supplied": null
    },
    {
        "name": "Your_Friend",
        "active_playtime": "5492947",
        "afk": "0",
        "deaths": "0",
        "mobs": "0",
        "broken": null,
        "supplied": null
    },
    {
        "name": "StainlessKnight",
        "active_playtime": "5351124",
        "afk": "601399",
        "deaths": "0",
        "mobs": "2",
        "broken": 5,
        "supplied": 2008
    },
    {
        "name": "kol1yan",
        "active_playtime": "5055477",
        "afk": "1240598",
        "deaths": "2",
        "mobs": "0",
        "broken": 2,
        "supplied": 2
    },
    {
        "name": "RyumaSK",
        "active_playtime": "4982466",
        "afk": "889752",
        "deaths": "0",
        "mobs": "2",
        "broken": null,
        "supplied": null
    },
    {
        "name": "3opurTo",
        "active_playtime": "4702567",
        "afk": "293832",
        "deaths": "0",
        "mobs": "0",
        "broken": 1,
        "supplied": 1
    },
    {
        "name": "RokdarPlay",
        "active_playtime": "4567344",
        "afk": "287873",
        "deaths": "1",
        "mobs": "0",
        "broken": null,
        "supplied": null
    },
    {
        "name": "VessAy",
        "active_playtime": "4498581",
        "afk": "0",
        "deaths": "1",
        "mobs": "0",
        "broken": 346765,
        "supplied": 251314
    },
    {
        "name": "IcePowerInc",
        "active_playtime": "4257745",
        "afk": "0",
        "deaths": "3",
        "mobs": "0",
        "broken": 3,
        "supplied": 3
    },
    {
        "name": "PIKO8",
        "active_playtime": "4255692",
        "afk": "378827",
        "deaths": "2",
        "mobs": "1",
        "broken": 2611,
        "supplied": 2088
    },
    {
        "name": "Voronov45",
        "active_playtime": "4250504",
        "afk": "1252031",
        "deaths": "2",
        "mobs": "18",
        "broken": null,
        "supplied": null
    },
    {
        "name": "Liroik72",
        "active_playtime": "4229154",
        "afk": "248124",
        "deaths": "1",
        "mobs": "42",
        "broken": null,
        "supplied": null
    },
    {
        "name": "the_Loeyy",
        "active_playtime": "4130745",
        "afk": "0",
        "deaths": "0",
        "mobs": "0",
        "broken": 2,
        "supplied": 1
    },
    {
        "name": "Haro339",
        "active_playtime": "4018209",
        "afk": "0",
        "deaths": "0",
        "mobs": "5",
        "broken": 4752,
        "supplied": 1878
    },
    {
        "name": "Lardon",
        "active_playtime": "4012916",
        "afk": "0",
        "deaths": "0",
        "mobs": "0",
        "broken": null,
        "supplied": null
    },
    {
        "name": "OMNIONI",
        "active_playtime": "3947869",
        "afk": "359758",
        "deaths": "0",
        "mobs": "0",
        "broken": 40720,
        "supplied": 16584
    },
    {
        "name": "YDF228",
        "active_playtime": "3939400",
        "afk": "181900",
        "deaths": "1",
        "mobs": "0",
        "broken": null,
        "supplied": null
    },
    {
        "name": "Pro100Antoxa",
        "active_playtime": "3910670",
        "afk": "451899",
        "deaths": "0",
        "mobs": "0",
        "broken": 177,
        "supplied": 52
    },
    {
        "name": "negzhf",
        "active_playtime": "3835510",
        "afk": "0",
        "deaths": "0",
        "mobs": "0",
        "broken": null,
        "supplied": null
    }
  ]

  const localText = {
    // for filter panel
    page: 'Страница',
    more: 'ещё',
    to: 'к',
    of: 'из',
    next: 'Следующая',
    last: 'Последняя',
    first: 'Первая',
    previous: 'Предыдущая',
    loadingOoo: 'Загрузка...',

    // for set filter
    selectAll: 'Выделить всё',
    searchOoo: 'Поиск...',
    blanks: 'Ничего не найдено',

    // for number filter and text filter
    filterOoo: 'Фильтровать...',
    applyFilter: 'Применить фильтр...',
    equals: 'Равно',
    notEqual: 'Не равно',

    // for number filter
    lessThan: 'Меньше чем',
    greaterThan: 'Больше чем',
    lessThanOrEqual: 'Меньше или равно',
    greaterThanOrEqual: 'Больше или равно',
    inRange: 'В промежутке',

    // for text filter
    contains: 'Содержит',
    notContains: 'Не содержит',
    startsWith: 'Начинается с',
    endsWith: 'Заканчивается',

    // filter conditions
    andCondition: '"И"',
    orCondition: '"ИЛИ"',

    // the header of the default group column
    group: 'Группа',

    // tool panel
    columns: 'Столбцы',
    filters: 'Фильтры',
    rowGroupColumns: 'Столбцы группировки по строкам',
    rowGroupColumnsEmptyMessage: 'Перетащите сюда для группировки по строкам',
    valueColumns: 'Столбцы со значениями',
    pivotMode: 'Режим сводной таблицы',
    groups: 'Группы',
    values: 'Значения',
    pivots: 'Заголовки столбцов',
    valueColumnsEmptyMessage: 'Перетащите сюда для агрегации',
    pivotColumnsEmptyMessage: 'Перетащите сюда, чтобы задать заголовки столбам',
    toolPanelButton: 'Панель инструментов',

    // other
    noRowsToShow: 'Нет данных',

    // enterprise menu
    pinColumn: 'Закрепить колонку',
    valueAggregation: 'Агрегация по значению',
    autosizeThiscolumn: 'Автоматически задавать размер этой колонки',
    autosizeAllColumns: 'Автоматически задавать размер всем колонкам',
    groupBy: 'Группировать по',
    ungroupBy: 'Разгруппировать по',
    resetColumns: 'Сбросить столбцы',
    expandAll: 'Развернуть всё',
    collapseAll: 'Свернуть всё',
    toolPanel: 'Панель инструментов',
    export: 'Экспорт',
    csvExport: 'Экспорт в CSV',
    excelExport: 'Экспорт в Excel (.xlsx)',
    excelXmlExport: 'Экспорт в XML (.xml)',

    // enterprise menu pinning
    pinLeft: 'Закрепить слева <<',
    pinRight: 'Закрепить справа >>',
    noPin: 'Не закреплять <>',

    // enterprise menu aggregation and status bar
    sum: 'Сумма',
    min: 'Минимум',
    max: 'Максимум',
    none: 'Пусто',
    count: 'Количество',
    average: 'Среднее значение',
    filteredRows: 'Отфильтрованные',
    selectedRows: 'Выделенные',
    totalRows: 'Всего строк',
    totalAndFilteredRows: 'Строк',

    // standard menu
    copy: 'Копировать',
    copyWithHeaders: 'Копировать с заголовком',
    ctrlC: 'Ctrl+C',
    paste: 'Вставить',
    ctrlV: 'Ctrl+V'
}

  return (
    <div className="main-statistic" data-aos="fade-up">
      <div className="statistic">
        <h4>ух какая пиздатая статка</h4>
        <div style={containerStyle}>
          <div style={gridStyle} className="ag-theme-alpine">
            <AgGridReact
              rowData={data} // resParams.data
              columnDefs={columns}
              animateRows={true}
              pagination={true}
              paginationPageSize={15}
              localeText={localText}
            >
            </AgGridReact>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistic;
