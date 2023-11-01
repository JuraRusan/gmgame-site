import classNames from "classnames";
import React, {useMemo, useState} from "react";
import {useAxios} from '../../../DataProvider';
import Preload from "../../components/preloader/Preload";
import {AgGridReact} from 'ag-grid-react';
import useLoading from "../../loading/useLoading";

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

import styles from "./Statistic.module.scss";
import "../../custon-modules/ag-grid.scss";

const Statistic = () => {

  const isLoading = useLoading();

  const containerStyle = useMemo(() => ({width: '100%', height: '100%'}), []);
  const gridStyle = useMemo(() => ({height: '100%', width: '100%'}), []);

  const resParams = useAxios(
    "/api/get_statistics",
    'GET',
    {}
  );

  const numberSort = (num1, num2) => {
    return num1 - num2;
  };

  const [columns] = useState([
    {
      headerName: 'Ник',
      field: 'name',
      filter: true,
      sortable: true
    },
    {
      headerName: 'Активное время игры',
      field: 'active_playtime',
      sortable: true,
      valueFormatter: params => timeFormat(params),
      comparator: numberSort
    },
    {
      headerName: 'АФК',
      field: 'afk',
      sortable: true,
      valueFormatter: params => timeFormat(params),
      comparator: numberSort
    },
    {
      headerName: 'Смерти',
      field: 'deaths',
      sortable: true,
      comparator: numberSort
    },
    {
      headerName: 'Убито мобов',
      field: 'mobs',
      sortable: true,
      comparator: numberSort,
      valueFormatter: ({value}) => Intl.NumberFormat('en-US').format(value)
    },
    {
      headerName: 'Сломано блоков',
      field: 'broken',
      sortable: true,
      comparator: numberSort,
      valueFormatter: ({value}) => Intl.NumberFormat('en-US').format(!value ? 0 : value)
    },
    {
      headerName: 'Установлено блоков',
      field: 'supplied',
      sortable: true,
      comparator: numberSort,
      valueFormatter: ({value}) => Intl.NumberFormat('en-US').format(!value ? 0 : value)
    },
  ]);

  if (resParams.loading || isLoading) {
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

    if (m === 60) {
      h++;
      m = 0;
    }
    if (h === 24) {
      d++;
      h = 0;
    }

    if (d === 0 && h > 0) {
      return pad(h) + "ч " + pad(m) + "м";
    }

    if (d === 0 && h === 0 && m > 0) {
      return pad(m) + "м";
    }

    if (d === 0 && h === 0 && m === 0) {
      return "< 00м";
    }

    return d + "д " + pad(h) + "ч " + pad(m) + "м";
  }

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
    <div className={classNames(styles["mainStatistic"])}>
      <div className={classNames(styles["statistic"])}>
        <h4 className={classNames(styles["title"])}>Статистика игроков сервера</h4>
        <div style={containerStyle}>
          <div style={gridStyle} className="ag-theme-alpine-dark">
            <AgGridReact
              rowData={resParams.data}
              columnDefs={columns}
              animateRows={true}
              pagination={true}
              paginationPageSize={20} // Если меняем это значение то, нужно еще менять значение в файле стилей на строке 62, а именно в тексте &:nth-child(20)
              localeText={localText}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistic;
