import classNames from "classnames";
import React, {useMemo, useState, useRef} from "react";
import Preload from "../../components/preloader/Preload";
import {AgGridReact} from 'ag-grid-react';
import useLoading from "../../loading/useLoading";

import {mineStatus} from "./data/mine";
import {playerStatus} from "./data/player";
import {tree1Status} from "./data/tree1";
import {tree4Status} from "./data/tree4";
import {tree3Status} from "./data/tree3";
import {tree2Status} from "./data/tree2";
import {sphere1Status} from "./data/sphere1";
import {sphere3Status} from "./data/sphere3";
import {sphere2Status} from "./data/sphere2";
import {house1Status} from "./data/house1";
import {house2Status} from "./data/house2";
import {house3Status} from "./data/house3";
import {house4Status} from "./data/house4";
import {house5Status} from "./data/house5";
import {house6Status} from "./data/house6";
import {house7Status} from "./data/house7";
import {house8Status} from "./data/house8";
import {house9Status} from "./data/house9";
import {house10Status} from "./data/house10";
import {house11Status} from "./data/house11";
import {house12Status} from "./data/house12";
import {house13Status} from "./data/house13";
import {house14Status} from "./data/house14";
import {house15Status} from "./data/house15";
import {portalStatus} from "./data/portal";
import {decorationsStatus} from "./data/decorations";
import {allStatsPlayer} from "./data/st";
import {finals, NoFinal} from "./data/finals";
import {house} from "./data/house";

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

import styles from "./EventStatistic.module.scss";
import "../../custon-modules/ag-grid.scss";

const LOCAL_TEXT = {
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

const EventStatistic = () => {

  const isLoading = useLoading();

  const [show, setShow] = useState(true)

  const containerStyle = useMemo(() => ({width: '100%', height: '947px'}), []);
  const gridStyle = useMemo(() => ({height: '100%', width: '100%'}), []);

  const elementRefs = {
    element1: useRef(null),
    element2: useRef(null),
    element3: useRef(null),
    element4: useRef(null),
    element5: useRef(null),
    element6: useRef(null),
    element7: useRef(null),
    element8: useRef(null),
    element9: useRef(null),
    element10: useRef(null),
    element11: useRef(null),
    element12: useRef(null),
    element13: useRef(null),
    element14: useRef(null),
    element15: useRef(null),
    element16: useRef(null),
    element17: useRef(null),
    element18: useRef(null),
    element19: useRef(null),
    element20: useRef(null),
    element21: useRef(null),
    element22: useRef(null),
    element23: useRef(null),
    element24: useRef(null),
    element25: useRef(null),
    element26: useRef(null),
    element27: useRef(null),
    element28: useRef(null),
    element29: useRef(null),
    element30: useRef(null),
  };

  const scrollToElement = (elementId, offset = 88) => {
    const element = elementRefs[elementId].current;
    const rect = element.getBoundingClientRect();

    window.scrollTo({
      top: rect.top + window.scrollY - offset,
      behavior: 'smooth',
    });
  };

  const numberSort = (num1, num2) => {
    return num1 - num2;
  };

  const [columnsMine] = useState([
    {
      headerName: 'Ник',
      field: 'name',
      filter: true,
      sortable: true
    },
    {
      headerName: 'Снежная шахта',
      field: 'christmas_unlock_mine_1_present_item_lead',
      sortable: true,
      comparator: numberSort
    },
    {
      headerName: 'Ледяная шахта',
      field: 'christmas_unlock_mine_2_present_item_lead',
      sortable: true,
      comparator: numberSort
    },
    {
      headerName: 'Деревяная шахта',
      field: 'christmas_unlock_mine_3_present_item_lead',
      sortable: true,
      comparator: numberSort
    }
  ]);

  const [columnsPlayer] = useState([
    {
      headerName: 'Ник',
      field: 'name',
      filter: true,
      sortable: true
    },
    {
      headerName: 'Собрано подарков',
      field: 'player_present_item_lead',
      sortable: true,
      valueFormatter: ({value}) => Intl.NumberFormat('en-US').format(value),
      comparator: numberSort
    },
    {
      headerName: 'Собрано снеговиков',
      field: 'player_snowman_lead',
      sortable: true,
      valueFormatter: ({value}) => Intl.NumberFormat('en-US').format(value),
      comparator: numberSort
    },
    {
      headerName: 'Собрано снега',
      field: 'player_snow_block_lead',
      sortable: true,
      valueFormatter: ({value}) => Intl.NumberFormat('en-US').format(value),
      comparator: numberSort
    },
    {
      headerName: 'Собрано льда',
      field: 'player_ice_block_lead',
      sortable: true,
      valueFormatter: ({value}) => Intl.NumberFormat('en-US').format(value),
      comparator: numberSort
    },
    {
      headerName: 'Собрано дерева',
      field: 'player_wood_block_lead',
      sortable: true,
      valueFormatter: ({value}) => Intl.NumberFormat('en-US').format(value),
      comparator: numberSort
    },
    {
      headerName: 'Суммарно',
      valueGetter: 'data.player_snow_block_lead + data.player_ice_block_lead + data.player_wood_block_lead',
      editable: false,
      sortable: true,
      aggFunc: 'sum',
      cellClass: 'total-col',
      valueFormatter: ({value}) => Intl.NumberFormat('en-US').format(value),
      comparator: numberSort
    },
  ]);

  const [columnsTree1] = useState([
    {
      headerName: 'Ник',
      field: 'name',
      filter: true,
      sortable: true
    },
    {
      headerName: 'Серпантина',
      field: 'christmas_tree_1_present_item_lead',
      sortable: true,
      valueFormatter: ({value}) => Intl.NumberFormat('en-US').format(value),
      comparator: numberSort
    },
    {
      headerName: 'Снеговиков',
      field: 'christmas_tree_1_snowman_lead',
      sortable: true,
      valueFormatter: ({value}) => Intl.NumberFormat('en-US').format(value),
      comparator: numberSort
    },
    {
      headerName: 'Снежных блоков',
      field: 'christmas_tree_1_snow_block_lead',
      sortable: true,
      valueFormatter: ({value}) => Intl.NumberFormat('en-US').format(value),
      comparator: numberSort
    },
    {
      headerName: 'Ледяных блоков',
      field: 'christmas_tree_1_ice_block_lead',
      sortable: true,
      valueFormatter: ({value}) => Intl.NumberFormat('en-US').format(value),
      comparator: numberSort
    },
    {
      headerName: 'Деревянных блоков',
      field: 'christmas_tree_1_wood_block_lead',
      sortable: true,
      valueFormatter: ({value}) => Intl.NumberFormat('en-US').format(value),
      comparator: numberSort
    },
  ]);
  const [columnsTree2] = useState([
    {
      headerName: 'Ник',
      field: 'name',
      filter: true,
      sortable: true
    },
    {
      headerName: 'Серпантина',
      field: 'christmas_tree_2_present_item_lead',
      sortable: true,
      valueFormatter: ({value}) => Intl.NumberFormat('en-US').format(value),
      comparator: numberSort
    },
    {
      headerName: 'Снеговиков',
      field: 'christmas_tree_2_snowman_lead',
      sortable: true,
      valueFormatter: ({value}) => Intl.NumberFormat('en-US').format(value),
      comparator: numberSort
    },
    {
      headerName: 'Снежных блоков',
      field: 'christmas_tree_2_snow_block_lead',
      sortable: true,
      valueFormatter: ({value}) => Intl.NumberFormat('en-US').format(value),
      comparator: numberSort
    },
    {
      headerName: 'Ледяных блоков',
      field: 'christmas_tree_2_ice_block_lead',
      sortable: true,
      valueFormatter: ({value}) => Intl.NumberFormat('en-US').format(value),
      comparator: numberSort
    },
    {
      headerName: 'Деревянных блоков',
      field: 'christmas_tree_2_wood_block_lead',
      sortable: true,
      valueFormatter: ({value}) => Intl.NumberFormat('en-US').format(value),
      comparator: numberSort
    },
  ]);
  const [columnsTree3] = useState([
    {
      headerName: 'Ник',
      field: 'name',
      filter: true,
      sortable: true
    },
    {
      headerName: 'Серпантина',
      field: 'christmas_tree_3_present_item_lead',
      sortable: true,
      valueFormatter: ({value}) => Intl.NumberFormat('en-US').format(value),
      comparator: numberSort
    },
    {
      headerName: 'Снеговиков',
      field: 'christmas_tree_3_snowman_lead',
      sortable: true,
      valueFormatter: ({value}) => Intl.NumberFormat('en-US').format(value),
      comparator: numberSort
    },
    {
      headerName: 'Снежных блоков',
      field: 'christmas_tree_3_snow_block_lead',
      sortable: true,
      valueFormatter: ({value}) => Intl.NumberFormat('en-US').format(value),
      comparator: numberSort
    },
    {
      headerName: 'Ледяных блоков',
      field: 'christmas_tree_3_ice_block_lead',
      sortable: true,
      valueFormatter: ({value}) => Intl.NumberFormat('en-US').format(value),
      comparator: numberSort
    },
    {
      headerName: 'Деревянных блоков',
      field: 'christmas_tree_3_wood_block_lead',
      sortable: true,
      valueFormatter: ({value}) => Intl.NumberFormat('en-US').format(value),
      comparator: numberSort
    },
  ]);
  const [columnsTree4] = useState([
    {
      headerName: 'Ник',
      field: 'name',
      filter: true,
      sortable: true
    },
    {
      headerName: 'Серпантина',
      field: 'christmas_tree_4_present_item_lead',
      sortable: true,
      valueFormatter: ({value}) => Intl.NumberFormat('en-US').format(value),
      comparator: numberSort
    },
    {
      headerName: 'Снеговиков',
      field: 'christmas_tree_4_snowman_lead',
      sortable: true,
      valueFormatter: ({value}) => Intl.NumberFormat('en-US').format(value),
      comparator: numberSort
    },
    {
      headerName: 'Снежных блоков',
      field: 'christmas_tree_4_snow_block_lead',
      sortable: true,
      valueFormatter: ({value}) => Intl.NumberFormat('en-US').format(value),
      comparator: numberSort
    },
    {
      headerName: 'Ледяных блоков',
      field: 'christmas_tree_4_ice_block_lead',
      sortable: true,
      valueFormatter: ({value}) => Intl.NumberFormat('en-US').format(value),
      comparator: numberSort
    },
    {
      headerName: 'Деревянных блоков',
      field: 'christmas_tree_4_wood_block_lead',
      sortable: true,
      valueFormatter: ({value}) => Intl.NumberFormat('en-US').format(value),
      comparator: numberSort
    },
  ]);

  const [columnsSphere1] = useState([
    {
      headerName: 'Ник',
      field: 'name',
      filter: true,
      sortable: true
    },
    {
      headerName: 'Серпантина',
      field: 'christmas_sphere_1_present_item_lead',
      sortable: true,
      valueFormatter: ({value}) => Intl.NumberFormat('en-US').format(value),
      comparator: numberSort
    },
    {
      headerName: 'Снеговиков',
      field: 'christmas_sphere_1_snowman_lead',
      sortable: true,
      valueFormatter: ({value}) => Intl.NumberFormat('en-US').format(value),
      comparator: numberSort
    },
    {
      headerName: 'Снежных блоков',
      field: 'christmas_sphere_1_snow_block_lead',
      sortable: true,
      valueFormatter: ({value}) => Intl.NumberFormat('en-US').format(value),
      comparator: numberSort
    },
    {
      headerName: 'Ледяных блоков',
      field: 'christmas_sphere_1_ice_block_lead',
      sortable: true,
      valueFormatter: ({value}) => Intl.NumberFormat('en-US').format(value),
      comparator: numberSort
    },
    {
      headerName: 'Деревянных блоков',
      field: 'christmas_sphere_1_wood_block_lead',
      sortable: true,
      valueFormatter: ({value}) => Intl.NumberFormat('en-US').format(value),
      comparator: numberSort
    },
  ]);
  const [columnsSphere2] = useState([
    {
      headerName: 'Ник',
      field: 'name',
      filter: true,
      sortable: true
    },
    {
      headerName: 'Серпантина',
      field: 'christmas_sphere_2_present_item_lead',
      sortable: true,
      valueFormatter: ({value}) => Intl.NumberFormat('en-US').format(value),
      comparator: numberSort
    },
    {
      headerName: 'Снеговиков',
      field: 'christmas_sphere_2_snowman_lead',
      sortable: true,
      valueFormatter: ({value}) => Intl.NumberFormat('en-US').format(value),
      comparator: numberSort
    },
    {
      headerName: 'Снежных блоков',
      field: 'christmas_sphere_2_snow_block_lead',
      sortable: true,
      valueFormatter: ({value}) => Intl.NumberFormat('en-US').format(value),
      comparator: numberSort
    },
    {
      headerName: 'Ледяных блоков',
      field: 'christmas_sphere_2_ice_block_lead',
      sortable: true,
      valueFormatter: ({value}) => Intl.NumberFormat('en-US').format(value),
      comparator: numberSort
    },
    {
      headerName: 'Деревянных блоков',
      field: 'christmas_sphere_2_wood_block_lead',
      sortable: true,
      valueFormatter: ({value}) => Intl.NumberFormat('en-US').format(value),
      comparator: numberSort
    },
  ]);
  const [columnsSphere3] = useState([
    {
      headerName: 'Ник',
      field: 'name',
      filter: true,
      sortable: true
    },
    {
      headerName: 'Серпантина',
      field: 'christmas_sphere_3_present_item_lead',
      sortable: true,
      valueFormatter: ({value}) => Intl.NumberFormat('en-US').format(value),
      comparator: numberSort
    },
    {
      headerName: 'Снеговиков',
      field: 'christmas_sphere_3_snowman_lead',
      sortable: true,
      valueFormatter: ({value}) => Intl.NumberFormat('en-US').format(value),
      comparator: numberSort
    },
    {
      headerName: 'Снежных блоков',
      field: 'christmas_sphere_3_snow_block_lead',
      sortable: true,
      valueFormatter: ({value}) => Intl.NumberFormat('en-US').format(value),
      comparator: numberSort
    },
    {
      headerName: 'Ледяных блоков',
      field: 'christmas_sphere_3_ice_block_lead',
      sortable: true,
      valueFormatter: ({value}) => Intl.NumberFormat('en-US').format(value),
      comparator: numberSort
    },
    {
      headerName: 'Деревянных блоков',
      field: 'christmas_sphere_3_wood_block_lead',
      sortable: true,
      valueFormatter: ({value}) => Intl.NumberFormat('en-US').format(value),
      comparator: numberSort
    },
  ]);

  const [columnsHouse1] = useState([
    {
      headerName: 'Ник',
      field: 'name',
      filter: true,
      sortable: true
    },
    {
      headerName: 'Серпантина',
      field: 'christmas_house_1_present_item_lead',
      sortable: true,
      valueFormatter: ({value}) => Intl.NumberFormat('en-US').format(value),
      comparator: numberSort
    },
    {
      headerName: 'Снеговиков',
      field: 'christmas_house_1_snowman_lead',
      sortable: true,
      valueFormatter: ({value}) => Intl.NumberFormat('en-US').format(value),
      comparator: numberSort
    },
    {
      headerName: 'Снежных блоков',
      field: 'christmas_house_1_snow_block_lead',
      sortable: true,
      valueFormatter: ({value}) => Intl.NumberFormat('en-US').format(value),
      comparator: numberSort
    },
    {
      headerName: 'Ледяных блоков',
      field: 'christmas_house_1_ice_block_lead',
      sortable: true,
      valueFormatter: ({value}) => Intl.NumberFormat('en-US').format(value),
      comparator: numberSort
    },
    {
      headerName: 'Деревянных блоков',
      field: 'christmas_house_1_wood_block_lead',
      sortable: true,
      valueFormatter: ({value}) => Intl.NumberFormat('en-US').format(value),
      comparator: numberSort
    },
  ]);
  const [columnsHouse2] = useState([
    {
      headerName: 'Ник',
      field: 'name',
      filter: true,
      sortable: true
    },
    {
      headerName: 'Серпантина',
      field: 'christmas_house_2_present_item_lead',
      sortable: true,
      valueFormatter: ({value}) => Intl.NumberFormat('en-US').format(value),
      comparator: numberSort
    },
    {
      headerName: 'Снеговиков',
      field: 'christmas_house_2_snowman_lead',
      sortable: true,
      valueFormatter: ({value}) => Intl.NumberFormat('en-US').format(value),
      comparator: numberSort
    },
    {
      headerName: 'Снежных блоков',
      field: 'christmas_house_2_snow_block_lead',
      sortable: true,
      valueFormatter: ({value}) => Intl.NumberFormat('en-US').format(value),
      comparator: numberSort
    },
    {
      headerName: 'Ледяных блоков',
      field: 'christmas_house_2_ice_block_lead',
      sortable: true,
      valueFormatter: ({value}) => Intl.NumberFormat('en-US').format(value),
      comparator: numberSort
    },
    {
      headerName: 'Деревянных блоков',
      field: 'christmas_house_2_wood_block_lead',
      sortable: true,
      valueFormatter: ({value}) => Intl.NumberFormat('en-US').format(value),
      comparator: numberSort
    },
  ]);
  const [columnsHouse3] = useState([
    {
      headerName: 'Ник',
      field: 'name',
      filter: true,
      sortable: true
    },
    {
      headerName: 'Серпантина',
      field: 'christmas_house_3_present_item_lead',
      sortable: true,
      valueFormatter: ({value}) => Intl.NumberFormat('en-US').format(value),
      comparator: numberSort
    },
    {
      headerName: 'Снеговиков',
      field: 'christmas_house_3_snowman_lead',
      sortable: true,
      valueFormatter: ({value}) => Intl.NumberFormat('en-US').format(value),
      comparator: numberSort
    },
    {
      headerName: 'Снежных блоков',
      field: 'christmas_house_3_snow_block_lead',
      sortable: true,
      valueFormatter: ({value}) => Intl.NumberFormat('en-US').format(value),
      comparator: numberSort
    },
    {
      headerName: 'Ледяных блоков',
      field: 'christmas_house_3_ice_block_lead',
      sortable: true,
      valueFormatter: ({value}) => Intl.NumberFormat('en-US').format(value),
      comparator: numberSort
    },
    {
      headerName: 'Деревянных блоков',
      field: 'christmas_house_3_wood_block_lead',
      sortable: true,
      valueFormatter: ({value}) => Intl.NumberFormat('en-US').format(value),
      comparator: numberSort
    },
  ]);
  const [columnsHouse4] = useState([
    {
      headerName: 'Ник',
      field: 'name',
      filter: true,
      sortable: true
    },
    {
      headerName: 'Серпантина',
      field: 'christmas_house_4_present_item_lead',
      sortable: true,
      valueFormatter: ({value}) => Intl.NumberFormat('en-US').format(value),
      comparator: numberSort
    },
    {
      headerName: 'Снеговиков',
      field: 'christmas_house_4_snowman_lead',
      sortable: true,
      valueFormatter: ({value}) => Intl.NumberFormat('en-US').format(value),
      comparator: numberSort
    },
    {
      headerName: 'Снежных блоков',
      field: 'christmas_house_4_snow_block_lead',
      sortable: true,
      valueFormatter: ({value}) => Intl.NumberFormat('en-US').format(value),
      comparator: numberSort
    },
    {
      headerName: 'Ледяных блоков',
      field: 'christmas_house_4_ice_block_lead',
      sortable: true,
      valueFormatter: ({value}) => Intl.NumberFormat('en-US').format(value),
      comparator: numberSort
    },
    {
      headerName: 'Деревянных блоков',
      field: 'christmas_house_4_wood_block_lead',
      sortable: true,
      valueFormatter: ({value}) => Intl.NumberFormat('en-US').format(value),
      comparator: numberSort
    },
  ]);
  const [columnsHouse5] = useState([
    {
      headerName: 'Ник',
      field: 'name',
      filter: true,
      sortable: true
    },
    {
      headerName: 'Серпантина',
      field: 'christmas_house_5_present_item_lead',
      sortable: true,
      valueFormatter: ({value}) => Intl.NumberFormat('en-US').format(value),
      comparator: numberSort
    },
    {
      headerName: 'Снеговиков',
      field: 'christmas_house_5_snowman_lead',
      sortable: true,
      valueFormatter: ({value}) => Intl.NumberFormat('en-US').format(value),
      comparator: numberSort
    },
    {
      headerName: 'Снежных блоков',
      field: 'christmas_house_5_snow_block_lead',
      sortable: true,
      valueFormatter: ({value}) => Intl.NumberFormat('en-US').format(value),
      comparator: numberSort
    },
    {
      headerName: 'Ледяных блоков',
      field: 'christmas_house_5_ice_block_lead',
      sortable: true,
      valueFormatter: ({value}) => Intl.NumberFormat('en-US').format(value),
      comparator: numberSort
    },
    {
      headerName: 'Деревянных блоков',
      field: 'christmas_house_5_wood_block_lead',
      sortable: true,
      valueFormatter: ({value}) => Intl.NumberFormat('en-US').format(value),
      comparator: numberSort
    },
  ]);
  const [columnsHouse6] = useState([
    {
      headerName: 'Ник',
      field: 'name',
      filter: true,
      sortable: true
    },
    {
      headerName: 'Серпантина',
      field: 'christmas_house_6_present_item_lead',
      sortable: true,
      valueFormatter: ({value}) => Intl.NumberFormat('en-US').format(value),
      comparator: numberSort
    },
    {
      headerName: 'Снеговиков',
      field: 'christmas_house_6_snowman_lead',
      sortable: true,
      valueFormatter: ({value}) => Intl.NumberFormat('en-US').format(value),
      comparator: numberSort
    },
    {
      headerName: 'Снежных блоков',
      field: 'christmas_house_6_snow_block_lead',
      sortable: true,
      valueFormatter: ({value}) => Intl.NumberFormat('en-US').format(value),
      comparator: numberSort
    },
    {
      headerName: 'Ледяных блоков',
      field: 'christmas_house_6_ice_block_lead',
      sortable: true,
      valueFormatter: ({value}) => Intl.NumberFormat('en-US').format(value),
      comparator: numberSort
    },
    {
      headerName: 'Деревянных блоков',
      field: 'christmas_house_6_wood_block_lead',
      sortable: true,
      valueFormatter: ({value}) => Intl.NumberFormat('en-US').format(value),
      comparator: numberSort
    },
  ]);
  const [columnsHouse7] = useState([
    {
      headerName: 'Ник',
      field: 'name',
      filter: true,
      sortable: true
    },
    {
      headerName: 'Серпантина',
      field: 'christmas_house_7_present_item_lead',
      sortable: true,
      valueFormatter: ({value}) => Intl.NumberFormat('en-US').format(value),
      comparator: numberSort
    },
    {
      headerName: 'Снеговиков',
      field: 'christmas_house_7_snowman_lead',
      sortable: true,
      valueFormatter: ({value}) => Intl.NumberFormat('en-US').format(value),
      comparator: numberSort
    },
    {
      headerName: 'Снежных блоков',
      field: 'christmas_house_7_snow_block_lead',
      sortable: true,
      valueFormatter: ({value}) => Intl.NumberFormat('en-US').format(value),
      comparator: numberSort
    },
    {
      headerName: 'Ледяных блоков',
      field: 'christmas_house_7_ice_block_lead',
      sortable: true,
      valueFormatter: ({value}) => Intl.NumberFormat('en-US').format(value),
      comparator: numberSort
    },
    {
      headerName: 'Деревянных блоков',
      field: 'christmas_house_7_wood_block_lead',
      sortable: true,
      valueFormatter: ({value}) => Intl.NumberFormat('en-US').format(value),
      comparator: numberSort
    },
  ]);
  const [columnsHouse8] = useState([
    {
      headerName: 'Ник',
      field: 'name',
      filter: true,
      sortable: true
    },
    {
      headerName: 'Серпантина',
      field: 'christmas_house_8_present_item_lead',
      sortable: true,
      valueFormatter: ({value}) => Intl.NumberFormat('en-US').format(value),
      comparator: numberSort
    },
    {
      headerName: 'Снеговиков',
      field: 'christmas_house_8_snowman_lead',
      sortable: true,
      valueFormatter: ({value}) => Intl.NumberFormat('en-US').format(value),
      comparator: numberSort
    },
    {
      headerName: 'Снежных блоков',
      field: 'christmas_house_8_snow_block_lead',
      sortable: true,
      valueFormatter: ({value}) => Intl.NumberFormat('en-US').format(value),
      comparator: numberSort
    },
    {
      headerName: 'Ледяных блоков',
      field: 'christmas_house_8_ice_block_lead',
      sortable: true,
      valueFormatter: ({value}) => Intl.NumberFormat('en-US').format(value),
      comparator: numberSort
    },
    {
      headerName: 'Деревянных блоков',
      field: 'christmas_house_8_wood_block_lead',
      sortable: true,
      valueFormatter: ({value}) => Intl.NumberFormat('en-US').format(value),
      comparator: numberSort
    },
  ]);
  const [columnsHouse9] = useState([
    {
      headerName: 'Ник',
      field: 'name',
      filter: true,
      sortable: true
    },
    {
      headerName: 'Серпантина',
      field: 'christmas_house_9_present_item_lead',
      sortable: true,
      valueFormatter: ({value}) => Intl.NumberFormat('en-US').format(value),
      comparator: numberSort
    },
    {
      headerName: 'Снеговиков',
      field: 'christmas_house_9_snowman_lead',
      sortable: true,
      valueFormatter: ({value}) => Intl.NumberFormat('en-US').format(value),
      comparator: numberSort
    },
    {
      headerName: 'Снежных блоков',
      field: 'christmas_house_9_snow_block_lead',
      sortable: true,
      valueFormatter: ({value}) => Intl.NumberFormat('en-US').format(value),
      comparator: numberSort
    },
    {
      headerName: 'Ледяных блоков',
      field: 'christmas_house_9_ice_block_lead',
      sortable: true,
      valueFormatter: ({value}) => Intl.NumberFormat('en-US').format(value),
      comparator: numberSort
    },
    {
      headerName: 'Деревянных блоков',
      field: 'christmas_house_9_wood_block_lead',
      sortable: true,
      valueFormatter: ({value}) => Intl.NumberFormat('en-US').format(value),
      comparator: numberSort
    },
  ]);
  const [columnsHouse10] = useState([
    {
      headerName: 'Ник',
      field: 'name',
      filter: true,
      sortable: true
    },
    {
      headerName: 'Серпантина',
      field: 'christmas_house_10_present_item_lead',
      sortable: true,
      valueFormatter: ({value}) => Intl.NumberFormat('en-US').format(value),
      comparator: numberSort
    },
    {
      headerName: 'Снеговиков',
      field: 'christmas_house_10_snowman_lead',
      sortable: true,
      valueFormatter: ({value}) => Intl.NumberFormat('en-US').format(value),
      comparator: numberSort
    },
    {
      headerName: 'Снежных блоков',
      field: 'christmas_house_10_snow_block_lead',
      sortable: true,
      valueFormatter: ({value}) => Intl.NumberFormat('en-US').format(value),
      comparator: numberSort
    },
    {
      headerName: 'Ледяных блоков',
      field: 'christmas_house_10_ice_block_lead',
      sortable: true,
      valueFormatter: ({value}) => Intl.NumberFormat('en-US').format(value),
      comparator: numberSort
    },
    {
      headerName: 'Деревянных блоков',
      field: 'christmas_house_10_wood_block_lead',
      sortable: true,
      valueFormatter: ({value}) => Intl.NumberFormat('en-US').format(value),
      comparator: numberSort
    },
  ]);
  const [columnsHouse11] = useState([
    {
      headerName: 'Ник',
      field: 'name',
      filter: true,
      sortable: true
    },
    {
      headerName: 'Серпантина',
      field: 'christmas_house_11_present_item_lead',
      sortable: true,
      valueFormatter: ({value}) => Intl.NumberFormat('en-US').format(value),
      comparator: numberSort
    },
    {
      headerName: 'Снеговиков',
      field: 'christmas_house_11_snowman_lead',
      sortable: true,
      valueFormatter: ({value}) => Intl.NumberFormat('en-US').format(value),
      comparator: numberSort
    },
    {
      headerName: 'Снежных блоков',
      field: 'christmas_house_11_snow_block_lead',
      sortable: true,
      valueFormatter: ({value}) => Intl.NumberFormat('en-US').format(value),
      comparator: numberSort
    },
    {
      headerName: 'Ледяных блоков',
      field: 'christmas_house_11_ice_block_lead',
      sortable: true,
      valueFormatter: ({value}) => Intl.NumberFormat('en-US').format(value),
      comparator: numberSort
    },
    {
      headerName: 'Деревянных блоков',
      field: 'christmas_house_11_wood_block_lead',
      sortable: true,
      valueFormatter: ({value}) => Intl.NumberFormat('en-US').format(value),
      comparator: numberSort
    },
  ]);
  const [columnsHouse12] = useState([
    {
      headerName: 'Ник',
      field: 'name',
      filter: true,
      sortable: true
    },
    {
      headerName: 'Серпантина',
      field: 'christmas_house_12_present_item_lead',
      sortable: true,
      valueFormatter: ({value}) => Intl.NumberFormat('en-US').format(value),
      comparator: numberSort
    },
    {
      headerName: 'Снеговиков',
      field: 'christmas_house_12_snowman_lead',
      sortable: true,
      valueFormatter: ({value}) => Intl.NumberFormat('en-US').format(value),
      comparator: numberSort
    },
    {
      headerName: 'Снежных блоков',
      field: 'christmas_house_12_snow_block_lead',
      sortable: true,
      valueFormatter: ({value}) => Intl.NumberFormat('en-US').format(value),
      comparator: numberSort
    },
    {
      headerName: 'Ледяных блоков',
      field: 'christmas_house_12_ice_block_lead',
      sortable: true,
      valueFormatter: ({value}) => Intl.NumberFormat('en-US').format(value),
      comparator: numberSort
    },
    {
      headerName: 'Деревянных блоков',
      field: 'christmas_house_12_wood_block_lead',
      sortable: true,
      valueFormatter: ({value}) => Intl.NumberFormat('en-US').format(value),
      comparator: numberSort
    },
  ]);
  const [columnsHouse13] = useState([
    {
      headerName: 'Ник',
      field: 'name',
      filter: true,
      sortable: true
    },
    {
      headerName: 'Серпантина',
      field: 'christmas_house_13_present_item_lead',
      sortable: true,
      valueFormatter: ({value}) => Intl.NumberFormat('en-US').format(value),
      comparator: numberSort
    },
    {
      headerName: 'Снеговиков',
      field: 'christmas_house_13_snowman_lead',
      sortable: true,
      valueFormatter: ({value}) => Intl.NumberFormat('en-US').format(value),
      comparator: numberSort
    },
    {
      headerName: 'Снежных блоков',
      field: 'christmas_house_13_snow_block_lead',
      sortable: true,
      valueFormatter: ({value}) => Intl.NumberFormat('en-US').format(value),
      comparator: numberSort
    },
    {
      headerName: 'Ледяных блоков',
      field: 'christmas_house_13_ice_block_lead',
      sortable: true,
      valueFormatter: ({value}) => Intl.NumberFormat('en-US').format(value),
      comparator: numberSort
    },
    {
      headerName: 'Деревянных блоков',
      field: 'christmas_house_13_wood_block_lead',
      sortable: true,
      valueFormatter: ({value}) => Intl.NumberFormat('en-US').format(value),
      comparator: numberSort
    },
  ]);
  const [columnsHouse14] = useState([
    {
      headerName: 'Ник',
      field: 'name',
      filter: true,
      sortable: true
    },
    {
      headerName: 'Серпантина',
      field: 'christmas_house_14_present_item_lead',
      sortable: true,
      valueFormatter: ({value}) => Intl.NumberFormat('en-US').format(value),
      comparator: numberSort
    },
    {
      headerName: 'Снеговиков',
      field: 'christmas_house_14_snowman_lead',
      sortable: true,
      valueFormatter: ({value}) => Intl.NumberFormat('en-US').format(value),
      comparator: numberSort
    },
    {
      headerName: 'Снежных блоков',
      field: 'christmas_house_14_snow_block_lead',
      sortable: true,
      valueFormatter: ({value}) => Intl.NumberFormat('en-US').format(value),
      comparator: numberSort
    },
    {
      headerName: 'Ледяных блоков',
      field: 'christmas_house_14_ice_block_lead',
      sortable: true,
      valueFormatter: ({value}) => Intl.NumberFormat('en-US').format(value),
      comparator: numberSort
    },
    {
      headerName: 'Деревянных блоков',
      field: 'christmas_house_14_wood_block_lead',
      sortable: true,
      valueFormatter: ({value}) => Intl.NumberFormat('en-US').format(value),
      comparator: numberSort
    },
  ]);
  const [columnsHouse15] = useState([
    {
      headerName: 'Ник',
      field: 'name',
      filter: true,
      sortable: true
    },
    {
      headerName: 'Серпантина',
      field: 'christmas_house_15_present_item_lead',
      sortable: true,
      valueFormatter: ({value}) => Intl.NumberFormat('en-US').format(value),
      comparator: numberSort
    },
    {
      headerName: 'Снеговиков',
      field: 'christmas_house_15_snowman_lead',
      sortable: true,
      valueFormatter: ({value}) => Intl.NumberFormat('en-US').format(value),
      comparator: numberSort
    },
    {
      headerName: 'Снежных блоков',
      field: 'christmas_house_15_snow_block_lead',
      sortable: true,
      valueFormatter: ({value}) => Intl.NumberFormat('en-US').format(value),
      comparator: numberSort
    },
    {
      headerName: 'Ледяных блоков',
      field: 'christmas_house_15_ice_block_lead',
      sortable: true,
      valueFormatter: ({value}) => Intl.NumberFormat('en-US').format(value),
      comparator: numberSort
    },
    {
      headerName: 'Деревянных блоков',
      field: 'christmas_house_15_wood_block_lead',
      sortable: true,
      valueFormatter: ({value}) => Intl.NumberFormat('en-US').format(value),
      comparator: numberSort
    },
  ]);

  const [columnsDecorations] = useState([
    {
      headerName: 'Ник',
      field: 'name',
      filter: true,
      sortable: true
    },
    {
      headerName: 'Серпантина',
      field: 'christmas_all_decorations_present_item_lead',
      sortable: true,
      valueFormatter: ({value}) => Intl.NumberFormat('en-US').format(value),
      comparator: numberSort
    },
    {
      headerName: 'Снеговиков',
      field: 'christmas_all_decorations_snowman_lead',
      sortable: true,
      valueFormatter: ({value}) => Intl.NumberFormat('en-US').format(value),
      comparator: numberSort
    },
    {
      headerName: 'Снежных блоков',
      field: 'christmas_all_decorations_snow_block_lead',
      sortable: true,
      valueFormatter: ({value}) => Intl.NumberFormat('en-US').format(value),
      comparator: numberSort
    },
    {
      headerName: 'Ледяных блоков',
      field: 'christmas_all_decorations_ice_block_lead',
      sortable: true,
      valueFormatter: ({value}) => Intl.NumberFormat('en-US').format(value),
      comparator: numberSort
    },
    {
      headerName: 'Деревянных блоков',
      field: 'christmas_all_decorations_wood_block_lead',
      sortable: true,
      valueFormatter: ({value}) => Intl.NumberFormat('en-US').format(value),
      comparator: numberSort
    },
  ]);
  const [columnsPortals] = useState([
    {
      headerName: 'Ник',
      field: 'name',
      filter: true,
      sortable: true
    },
    {
      headerName: 'Серпантина',
      field: 'christmas_teleport_portal_present_item_lead',
      sortable: true,
      valueFormatter: ({value}) => Intl.NumberFormat('en-US').format(value),
      comparator: numberSort
    },
    {
      headerName: 'Снеговиков',
      field: 'christmas_teleport_portal_snowman_lead',
      sortable: true,
      valueFormatter: ({value}) => Intl.NumberFormat('en-US').format(value),
      comparator: numberSort
    },
    {
      headerName: 'Снежных блоков',
      field: 'christmas_teleport_portal_snow_block_lead',
      sortable: true,
      valueFormatter: ({value}) => Intl.NumberFormat('en-US').format(value),
      comparator: numberSort
    },
    {
      headerName: 'Ледяных блоков',
      field: 'christmas_teleport_portal_ice_block_lead',
      sortable: true,
      valueFormatter: ({value}) => Intl.NumberFormat('en-US').format(value),
      comparator: numberSort
    },
    {
      headerName: 'Деревянных блоков',
      field: 'christmas_teleport_portal_wood_block_lead',
      sortable: true,
      valueFormatter: ({value}) => Intl.NumberFormat('en-US').format(value),
      comparator: numberSort
    },
  ]);

  const [columnsLevitationHouse] = useState([
    {
      headerName: 'Ник',
      field: 'name',
      filter: true,
      sortable: true
    },
    {
      headerName: 'Количество штук /48',
      field: 'count',
      sortable: true,
      valueFormatter: ({value}) => Intl.NumberFormat('en-US').format(value),
      comparator: numberSort
    }
  ]);

  const [columnsAll] = useState([
    {
      headerName: 'Ник',
      field: 'name',
      filter: true,
      sortable: true
    },
    {
      headerName: 'Наигранно времени (минут)',
      field: 'stats_play_time',
      sortable: true,
      valueFormatter: ({value}) => Intl.NumberFormat('en-US').format(value),
      comparator: numberSort
    },
    {
      headerName: 'Прыжков',
      field: 'stats_jump',
      sortable: true,
      valueFormatter: ({value}) => Intl.NumberFormat('en-US').format(value),
      comparator: numberSort
    },
    {
      headerName: 'Убито снежных големов',
      field: 'stats_killed_snow_golem',
      sortable: true,
      valueFormatter: ({value}) => Intl.NumberFormat('en-US').format(value),
      comparator: numberSort
    },
    {
      headerName: 'Убито кроликов',
      field: 'stats_killed_rabbit',
      sortable: true,
      valueFormatter: ({value}) => Intl.NumberFormat('en-US').format(value),
      comparator: numberSort
    },
    {
      headerName: 'Убито белых медведей',
      field: 'stats_killed_polar_bear',
      sortable: true,
      valueFormatter: ({value}) => Intl.NumberFormat('en-US').format(value),
      comparator: numberSort
    },
    {
      headerName: 'Сломано снега',
      field: 'stats_mined_snow_block',
      sortable: true,
      valueFormatter: ({value}) => Intl.NumberFormat('en-US').format(value),
      comparator: numberSort
    },
    {
      headerName: 'Сломано льда',
      field: 'stats_mined_packed_ice',
      sortable: true,
      valueFormatter: ({value}) => Intl.NumberFormat('en-US').format(value),
      comparator: numberSort
    },
    {
      headerName: 'Сломано дерева',
      field: 'stats_mined_stripped_cherry_wood',
      sortable: true,
      valueFormatter: ({value}) => Intl.NumberFormat('en-US').format(value),
      comparator: numberSort
    }
  ]);

  const [columnsFinal] = useState([
    {
      headerName: 'Ник',
      field: 'name',
      filter: true,
      sortable: true
    },
    {
      headerName: 'top-блоков',
      field: 'sum_player_block',
      sortable: true,
      valueFormatter: ({value}) => Intl.NumberFormat('en-US').format(value),
      comparator: numberSort
    },
    {
      headerName: 'top-серпантина',
      field: 'player_present_item_lead',
      sortable: true,
      valueFormatter: ({value}) => Intl.NumberFormat('en-US').format(value),
      comparator: numberSort
    },
    {
      headerName: 'top-снеговиков',
      field: 'player_snowman_lead',
      sortable: true,
      valueFormatter: ({value}) => Intl.NumberFormat('en-US').format(value),
      comparator: numberSort
    }
  ]);

  if (isLoading) {
    return <Preload full={false}/>;
  }

  return (
    <div className={classNames(styles["stat"])}>
      <h3 className={classNames(styles["inf"])}>Извините, статистика доступна на екранах ширина которых больше 1024px</h3>
      <div className={classNames(styles["box_nav"])}>
        <div className={classNames(styles["box_btn"])}>
          <button onClick={()=> {setShow(true)}} className={classNames(styles["btn"])}>Открыть</button>
          <button onClick={()=> {setShow(false)}} className={classNames(styles["btn"])}>Закрыть</button>
        </div>
        {show &&
          <ul className={classNames(styles["nav"])}>
            <li className={classNames(styles["line"])} onClick={() => scrollToElement('element1')}>Шахты</li>
            <li className={classNames(styles["line"])} onClick={() => scrollToElement('element2')}>Материалы</li>
            <li className={classNames(styles["line"])} onClick={() => scrollToElement('element3')}>Новогодняя ёлка #1</li>
            <li className={classNames(styles["line"])} onClick={() => scrollToElement('element4')}>Новогодняя ёлка #2</li>
            <li className={classNames(styles["line"])} onClick={() => scrollToElement('element5')}>Новогодняя ёлка #3</li>
            <li className={classNames(styles["line"])} onClick={() => scrollToElement('element6')}>Новогодняя ёлка #4</li>
            <li className={classNames(styles["line"])} onClick={() => scrollToElement('element7')}>Новогодний шар #1</li>
            <li className={classNames(styles["line"])} onClick={() => scrollToElement('element8')}>Новогодний шар #2</li>
            <li className={classNames(styles["line"])} onClick={() => scrollToElement('element9')}>Новогодний шар #3</li>
            <li className={classNames(styles["line"])} onClick={() => scrollToElement('element10')}>Новогодний дом #1</li>
            <li className={classNames(styles["line"])} onClick={() => scrollToElement('element11')}>Новогодний дом #2</li>
            <li className={classNames(styles["line"])} onClick={() => scrollToElement('element12')}>Новогодний дом #3</li>
            <li className={classNames(styles["line"])} onClick={() => scrollToElement('element13')}>Новогодний дом #4</li>
            <li className={classNames(styles["line"])} onClick={() => scrollToElement('element14')}>Новогодний дом #5</li>
            <li className={classNames(styles["line"])} onClick={() => scrollToElement('element15')}>Новогодний дом #6</li>
            <li className={classNames(styles["line"])} onClick={() => scrollToElement('element16')}>Новогодний дом #7</li>
            <li className={classNames(styles["line"])} onClick={() => scrollToElement('element17')}>Новогодний дом #8</li>
            <li className={classNames(styles["line"])} onClick={() => scrollToElement('element18')}>Новогодний дом #9</li>
            <li className={classNames(styles["line"])} onClick={() => scrollToElement('element19')}>Новогодний дом #10</li>
            <li className={classNames(styles["line"])} onClick={() => scrollToElement('element20')}>Новогодний дом #11</li>
            <li className={classNames(styles["line"])} onClick={() => scrollToElement('element21')}>Новогодний дом #12</li>
            <li className={classNames(styles["line"])} onClick={() => scrollToElement('element22')}>Новогодний дом #13</li>
            <li className={classNames(styles["line"])} onClick={() => scrollToElement('element23')}>Новогодний дом #14</li>
            <li className={classNames(styles["line"])} onClick={() => scrollToElement('element24')}>Новогодний дом #15</li>
            <li className={classNames(styles["line"])} onClick={() => scrollToElement('element25')}>Декорации</li>
            <li className={classNames(styles["line"])} onClick={() => scrollToElement('element26')}>Портал</li>
            <li className={classNames(styles["line"])} onClick={() => scrollToElement('element27')}>Статистика игрока</li>
            <li className={classNames(styles["line"])} onClick={() => scrollToElement('element28')}>Парящие дома</li>
            <li className={classNames(styles["line"])} onClick={() => scrollToElement('element29')}>FINAL</li>
            <li className={classNames(styles["line"])} onClick={() => scrollToElement('element30')}>NO - FINAL</li>
          </ul>
        }
      </div>
      <div className={classNames(styles["stat_box"])}>
        <h4 ref={elementRefs.element1} className={classNames(styles["title"])}>Статистика кто сколько вложил ресурсов в разблокировку шахт</h4>
        <div className={classNames(styles["box_wight_1"])}>
          <div style={containerStyle}>
            <div style={gridStyle} className="ag-theme-alpine-dark">
              <AgGridReact
                rowData={mineStatus}
                columnDefs={columnsMine}
                animateRows={true}
                pagination={true}
                paginationPageSize={20}
                localeText={LOCAL_TEXT}
              />
            </div>
          </div>
        </div>
        <h4 ref={elementRefs.element2} className={classNames(styles["title"])}>Статистика собранных очков (блоки суммируются)</h4>
        <div className={classNames(styles["box_wight_2"])}>
          <div style={containerStyle}>
            <div style={gridStyle} className="ag-theme-alpine-dark">
              <AgGridReact
                rowData={playerStatus}
                columnDefs={columnsPlayer}
                animateRows={true}
                pagination={true}
                paginationPageSize={20}
                localeText={LOCAL_TEXT}
              />
            </div>
          </div>
        </div>

        <h4 ref={elementRefs.element3} className={classNames(styles["title"])}>Статистика вложенных ресурсов в новогоднюю ёлку #1</h4>
        <div className={classNames(styles["box_wight_3"])}>
          <div style={containerStyle}>
            <div style={gridStyle} className="ag-theme-alpine-dark">
              <AgGridReact
                rowData={tree1Status}
                columnDefs={columnsTree1}
                animateRows={true}
                pagination={true}
                paginationPageSize={20}
                localeText={LOCAL_TEXT}
              />
            </div>
          </div>
        </div>
        <h4 ref={elementRefs.element4} className={classNames(styles["title"])}>Статистика вложенных ресурсов в новогоднюю ёлку #2</h4>
        <div className={classNames(styles["box_wight_3"])}>
          <div style={containerStyle}>
            <div style={gridStyle} className="ag-theme-alpine-dark">
              <AgGridReact
                rowData={tree2Status}
                columnDefs={columnsTree2}
                animateRows={true}
                pagination={true}
                paginationPageSize={20}
                localeText={LOCAL_TEXT}
              />
            </div>
          </div>
        </div>
        <h4 ref={elementRefs.element5} className={classNames(styles["title"])}>Статистика вложенных ресурсов в новогоднюю ёлку #3</h4>
        <div className={classNames(styles["box_wight_3"])}>
          <div style={containerStyle}>
            <div style={gridStyle} className="ag-theme-alpine-dark">
              <AgGridReact
                rowData={tree3Status}
                columnDefs={columnsTree3}
                animateRows={true}
                pagination={true}
                paginationPageSize={20}
                localeText={LOCAL_TEXT}
              />
            </div>
          </div>
        </div>
        <h4 ref={elementRefs.element6} className={classNames(styles["title"])}>Статистика вложенных ресурсов в новогоднюю ёлку #4</h4>
        <div className={classNames(styles["box_wight_3"])}>
          <div style={containerStyle}>
            <div style={gridStyle} className="ag-theme-alpine-dark">
              <AgGridReact
                rowData={tree4Status}
                columnDefs={columnsTree4}
                animateRows={true}
                pagination={true}
                paginationPageSize={20}
                localeText={LOCAL_TEXT}
              />
            </div>
          </div>
        </div>

        <h4 ref={elementRefs.element7} className={classNames(styles["title"])}>Статистика вложенных ресурсов в новогодний шар #1</h4>
        <div className={classNames(styles["box_wight_3"])}>
          <div style={containerStyle}>
            <div style={gridStyle} className="ag-theme-alpine-dark">
              <AgGridReact
                rowData={sphere1Status}
                columnDefs={columnsSphere1}
                animateRows={true}
                pagination={true}
                paginationPageSize={20}
                localeText={LOCAL_TEXT}
              />
            </div>
          </div>
        </div>
        <h4 ref={elementRefs.element8} className={classNames(styles["title"])}>Статистика вложенных ресурсов в новогодний шар #2</h4>
        <div className={classNames(styles["box_wight_3"])}>
          <div style={containerStyle}>
            <div style={gridStyle} className="ag-theme-alpine-dark">
              <AgGridReact
                rowData={sphere2Status}
                columnDefs={columnsSphere2}
                animateRows={true}
                pagination={true}
                paginationPageSize={20}
                localeText={LOCAL_TEXT}
              />
            </div>
          </div>
        </div>
        <h4 ref={elementRefs.element9} className={classNames(styles["title"])}>Статистика вложенных ресурсов в новогодний шар #3</h4>
        <div className={classNames(styles["box_wight_3"])}>
          <div style={containerStyle}>
            <div style={gridStyle} className="ag-theme-alpine-dark">
              <AgGridReact
                rowData={sphere3Status}
                columnDefs={columnsSphere3}
                animateRows={true}
                pagination={true}
                paginationPageSize={20}
                localeText={LOCAL_TEXT}
              />
            </div>
          </div>
        </div>

        <h4 ref={elementRefs.element10} className={classNames(styles["title"])}>Статистика вложенных ресурсов в новогодний дом #1</h4>
        <div className={classNames(styles["box_wight_3"])}>
          <div style={containerStyle}>
            <div style={gridStyle} className="ag-theme-alpine-dark">
              <AgGridReact
                rowData={house1Status}
                columnDefs={columnsHouse1}
                animateRows={true}
                pagination={true}
                paginationPageSize={20}
                localeText={LOCAL_TEXT}
              />
            </div>
          </div>
        </div>
        <h4 ref={elementRefs.element11} className={classNames(styles["title"])}>Статистика вложенных ресурсов в новогодний дом #2</h4>
        <div className={classNames(styles["box_wight_3"])}>
          <div style={containerStyle}>
            <div style={gridStyle} className="ag-theme-alpine-dark">
              <AgGridReact
                rowData={house2Status}
                columnDefs={columnsHouse2}
                animateRows={true}
                pagination={true}
                paginationPageSize={20}
                localeText={LOCAL_TEXT}
              />
            </div>
          </div>
        </div>
        <h4 ref={elementRefs.element12} className={classNames(styles["title"])}>Статистика вложенных ресурсов в новогодний дом #3</h4>
        <div className={classNames(styles["box_wight_3"])}>
          <div style={containerStyle}>
            <div style={gridStyle} className="ag-theme-alpine-dark">
              <AgGridReact
                rowData={house3Status}
                columnDefs={columnsHouse3}
                animateRows={true}
                pagination={true}
                paginationPageSize={20}
                localeText={LOCAL_TEXT}
              />
            </div>
          </div>
        </div>
        <h4 ref={elementRefs.element13} className={classNames(styles["title"])}>Статистика вложенных ресурсов в новогодний дом #4</h4>
        <div className={classNames(styles["box_wight_3"])}>
          <div style={containerStyle}>
            <div style={gridStyle} className="ag-theme-alpine-dark">
              <AgGridReact
                rowData={house4Status}
                columnDefs={columnsHouse4}
                animateRows={true}
                pagination={true}
                paginationPageSize={20}
                localeText={LOCAL_TEXT}
              />
            </div>
          </div>
        </div>
        <h4 ref={elementRefs.element14} className={classNames(styles["title"])}>Статистика вложенных ресурсов в новогодний дом #5</h4>
        <div className={classNames(styles["box_wight_3"])}>
          <div style={containerStyle}>
            <div style={gridStyle} className="ag-theme-alpine-dark">
              <AgGridReact
                rowData={house5Status}
                columnDefs={columnsHouse5}
                animateRows={true}
                pagination={true}
                paginationPageSize={20}
                localeText={LOCAL_TEXT}
              />
            </div>
          </div>
        </div>
        <h4 ref={elementRefs.element15} className={classNames(styles["title"])}>Статистика вложенных ресурсов в новогодний дом #6</h4>
        <div className={classNames(styles["box_wight_3"])}>
          <div style={containerStyle}>
            <div style={gridStyle} className="ag-theme-alpine-dark">
              <AgGridReact
                rowData={house6Status}
                columnDefs={columnsHouse6}
                animateRows={true}
                pagination={true}
                paginationPageSize={20}
                localeText={LOCAL_TEXT}
              />
            </div>
          </div>
        </div>
        <h4 ref={elementRefs.element16} className={classNames(styles["title"])}>Статистика вложенных ресурсов в новогодний дом #7</h4>
        <div className={classNames(styles["box_wight_3"])}>
          <div style={containerStyle}>
            <div style={gridStyle} className="ag-theme-alpine-dark">
              <AgGridReact
                rowData={house7Status}
                columnDefs={columnsHouse7}
                animateRows={true}
                pagination={true}
                paginationPageSize={20}
                localeText={LOCAL_TEXT}
              />
            </div>
          </div>
        </div>
        <h4 ref={elementRefs.element17} className={classNames(styles["title"])}>Статистика вложенных ресурсов в новогодний дом #8</h4>
        <div className={classNames(styles["box_wight_3"])}>
          <div style={containerStyle}>
            <div style={gridStyle} className="ag-theme-alpine-dark">
              <AgGridReact
                rowData={house8Status}
                columnDefs={columnsHouse8}
                animateRows={true}
                pagination={true}
                paginationPageSize={20}
                localeText={LOCAL_TEXT}
              />
            </div>
          </div>
        </div>
        <h4 ref={elementRefs.element18} className={classNames(styles["title"])}>Статистика вложенных ресурсов в новогодний дом #9</h4>
        <div className={classNames(styles["box_wight_3"])}>
          <div style={containerStyle}>
            <div style={gridStyle} className="ag-theme-alpine-dark">
              <AgGridReact
                rowData={house9Status}
                columnDefs={columnsHouse9}
                animateRows={true}
                pagination={true}
                paginationPageSize={20}
                localeText={LOCAL_TEXT}
              />
            </div>
          </div>
        </div>
        <h4 ref={elementRefs.element19} className={classNames(styles["title"])}>Статистика вложенных ресурсов в новогодний дом #10</h4>
        <div className={classNames(styles["box_wight_3"])}>
          <div style={containerStyle}>
            <div style={gridStyle} className="ag-theme-alpine-dark">
              <AgGridReact
                rowData={house10Status}
                columnDefs={columnsHouse10}
                animateRows={true}
                pagination={true}
                paginationPageSize={20}
                localeText={LOCAL_TEXT}
              />
            </div>
          </div>
        </div>
        <h4 ref={elementRefs.element20} className={classNames(styles["title"])}>Статистика вложенных ресурсов в новогодний дом #11</h4>
        <div className={classNames(styles["box_wight_3"])}>
          <div style={containerStyle}>
            <div style={gridStyle} className="ag-theme-alpine-dark">
              <AgGridReact
                rowData={house11Status}
                columnDefs={columnsHouse11}
                animateRows={true}
                pagination={true}
                paginationPageSize={20}
                localeText={LOCAL_TEXT}
              />
            </div>
          </div>
        </div>
        <h4 ref={elementRefs.element21} className={classNames(styles["title"])}>Статистика вложенных ресурсов в новогодний дом #12</h4>
        <div className={classNames(styles["box_wight_3"])}>
          <div style={containerStyle}>
            <div style={gridStyle} className="ag-theme-alpine-dark">
              <AgGridReact
                rowData={house12Status}
                columnDefs={columnsHouse12}
                animateRows={true}
                pagination={true}
                paginationPageSize={20}
                localeText={LOCAL_TEXT}
              />
            </div>
          </div>
        </div>
        <h4 ref={elementRefs.element22} className={classNames(styles["title"])}>Статистика вложенных ресурсов в новогодний дом #13</h4>
        <div className={classNames(styles["box_wight_3"])}>
          <div style={containerStyle}>
            <div style={gridStyle} className="ag-theme-alpine-dark">
              <AgGridReact
                rowData={house13Status}
                columnDefs={columnsHouse13}
                animateRows={true}
                pagination={true}
                paginationPageSize={20}
                localeText={LOCAL_TEXT}
              />
            </div>
          </div>
        </div>
        <h4 ref={elementRefs.element23} className={classNames(styles["title"])}>Статистика вложенных ресурсов в новогодний дом #14</h4>
        <div className={classNames(styles["box_wight_3"])}>
          <div style={containerStyle}>
            <div style={gridStyle} className="ag-theme-alpine-dark">
              <AgGridReact
                rowData={house14Status}
                columnDefs={columnsHouse14}
                animateRows={true}
                pagination={true}
                paginationPageSize={20}
                localeText={LOCAL_TEXT}
              />
            </div>
          </div>
        </div>
        <h4 ref={elementRefs.element24} className={classNames(styles["title"])}>Статистика вложенных ресурсов в новогодний дом #15</h4>
        <div className={classNames(styles["box_wight_3"])}>
          <div style={containerStyle}>
            <div style={gridStyle} className="ag-theme-alpine-dark">
              <AgGridReact
                rowData={house15Status}
                columnDefs={columnsHouse15}
                animateRows={true}
                pagination={true}
                paginationPageSize={20}
                localeText={LOCAL_TEXT}
              />
            </div>
          </div>
        </div>

        <h4 ref={elementRefs.element25} className={classNames(styles["title"])}>Статистика вложенных ресурсов в окружающие декорации новогодней деревушки</h4>
        <div className={classNames(styles["box_wight_3"])}>
          <div style={containerStyle}>
            <div style={gridStyle} className="ag-theme-alpine-dark">
              <AgGridReact
                rowData={decorationsStatus}
                columnDefs={columnsDecorations}
                animateRows={true}
                pagination={true}
                paginationPageSize={20}
                localeText={LOCAL_TEXT}
              />
            </div>
          </div>
        </div>
        <h4 ref={elementRefs.element26} className={classNames(styles["title"])}>Статистика вложенных ресурсов в портал</h4>
        <div className={classNames(styles["box_wight_3"])}>
          <div style={containerStyle}>
            <div style={gridStyle} className="ag-theme-alpine-dark">
              <AgGridReact
                rowData={portalStatus}
                columnDefs={columnsPortals}
                animateRows={true}
                pagination={true}
                paginationPageSize={20}
                localeText={LOCAL_TEXT}
              />
            </div>
          </div>
        </div>

        <h4 ref={elementRefs.element27} className={classNames(styles["title"])}>Статистика исключительно игрока</h4>
        <div className={classNames(styles["box_wight_4"])}>
          <div style={containerStyle}>
            <div style={gridStyle} className="ag-theme-alpine-dark">
              <AgGridReact
                rowData={allStatsPlayer}
                columnDefs={columnsAll}
                animateRows={true}
                pagination={true}
                paginationPageSize={20}
                localeText={LOCAL_TEXT}
              />
            </div>
          </div>
        </div>
        <h4 ref={elementRefs.element28} className={classNames(styles["title"])}>Статистика сколько раз было доставленно новогоднее чудо</h4>
        <div className={classNames(styles["box_wight_5"])}>
          <div style={containerStyle}>
            <div style={gridStyle} className="ag-theme-alpine-dark">
              <AgGridReact
                rowData={house}
                columnDefs={columnsLevitationHouse}
                animateRows={true}
                pagination={true}
                paginationPageSize={20}
                localeText={LOCAL_TEXT}
              />
            </div>
          </div>
        </div>

        <h4 ref={elementRefs.element29} className={classNames(styles["title"])}>Финальная итоговая статистика победителей</h4>
        <div className={classNames(styles["box_wight_6"])}>
          <div style={containerStyle}>
            <div style={gridStyle} className="ag-theme-alpine-dark">
              <AgGridReact
                rowData={finals}
                columnDefs={columnsFinal}
                animateRows={true}
                pagination={true}
                paginationPageSize={20}
                localeText={LOCAL_TEXT}
              />
            </div>
          </div>
        </div>
        <h4 ref={elementRefs.element30} className={classNames(styles["title"])}>Исключенные игроки из финальной статистики</h4>
        <div className={classNames(styles["box_wight_6"])}>
          <div style={containerStyle}>
            <div style={gridStyle} className="ag-theme-alpine-dark">
              <AgGridReact
                rowData={NoFinal}
                columnDefs={columnsFinal}
                animateRows={true}
                pagination={true}
                paginationPageSize={20}
                localeText={LOCAL_TEXT}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventStatistic;
