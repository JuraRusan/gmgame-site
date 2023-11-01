import classNames from "classnames";
import React from "react";
import {LazyLoadImage} from "react-lazy-load-image-component";

import styles from "./Building_a_hyperloop.module.scss";
import 'react-lazy-load-image-component/src/effects/blur.css';

const BuildingAHyperloop = () => {
  return (
    <div className={classNames(styles["buildHyperloopBox"])}>
      <h3 className={classNames(styles["mainTitle"])}>Инструкция по постройке ответвления хайперлупа</h3>
      <h3 className={classNames(styles["miniTitle"])}>Введение</h3>
      <h3 className={classNames(styles["textAll"])}>Статья посвящена особенностям постройки ответвления хайперлупа, ведущего к базе или общественному месту, от главных веток системы хайперлупов Основного сервера в режиме Выживания.</h3>
      <h3 className={classNames(styles["miniTitle"])}>Определение координат портала в Overworld и Nether</h3>
      <h3 className={classNames(styles["textAll"])}>В первую очередь необходимо определиться с местоположением адского портала на выбранной Вами территории. Если Вы устанавливаете временный портал и после окончания строительства итоговый портал будет установлен в другом месте, то рекомендуется временный портал поставить максимально близко к этому месту.</h3>
      <h3 className={classNames(styles["textAll"])}>Далее необходимо определить координаты ответного портала в аду и правильно разместить его. Для этого, не зажигая адский портал в овере, встаньте в рамку портала, нажмите F3 и посмотрите на нижний блок обсидиана.</h3>
      <LazyLoadImage className={classNames(styles["image"])} alt="" effect="blur" src="./site_assets/pages/png/build/1.png" width="100%" height="100%"/>
      <h3 className={classNames(styles["textAll"])}>В правой части экрана параметра «Targeted Block» укажет точные координаты адского портала в овере. Разделите координаты X и Z на 8 и Вы получите приблизительные координаты будущего портала в аду. Координата Y не учитывается, так как порталы в ответвлениях хайперлупов устанавливаются на координате Y=45.</h3>
      <h3 className={classNames(styles["miniTitle"])}>Определение цвета главной ветки хайперлупа</h3>
      <h3 className={classNames(styles["textAll"])}>После определения координат предполагаемого ответного портала нужно определить цвет главной ветки системы хайперлупов, от которой будет идти Ваше ответвление.</h3>
      <h3 className={classNames(styles["textAll"])}>Для этого сравниваем координаты X и Z и выбираем наибольшую из них:</h3>
      <ul className={classNames(styles["listUl"])}>
        <li className={classNames(styles["stringList"])}>Положительная Z — Розовая ветка</li>
        <li className={classNames(styles["stringList"])}>Отрицательная Z — Оранжевая ветка</li>
        <li className={classNames(styles["stringList"])}>Положительная X — Лаймовая ветка</li>
        <li className={classNames(styles["stringList"])}>Отрицательная X — Бирюзовая ветка</li>
      </ul>
      <h3 className={classNames(styles["textAll"])}>Активируем портал в овере и, НЕ входя в него, добираемся до системы хайперлупов альтернативным путем — через спавн или портал ближайшего к Вам соседа с его разрешения. Поискать соседей можно на интерактивной карте <a className={classNames(styles["link"])} href="https://gmgame.ru/online_map" rel="noreferrer">https://gmgame.ru/online_map</a> установив флаг слева сверху «Территории игроков». Обратиться к соседу можно через дискорд, если не знаете тэга игрока, то напишите его игровой ник, другие участники дискорда помогут его найти.</h3>
      <h3 className={classNames(styles["miniTitle"])}>Ресурсы для построения кожуха будущего хайперлупа и поворота к нему</h3>
      <h3 className={classNames(styles["textAll"])}>Перед строительством хайперлупа можно взять ресурсы на общественных складах. Порталы к складам размещены на 600й координате каждой главной ветки системы хайперлупов.</h3>
      <h3 className={classNames(styles["textAll"])}>Для постройки кожуха понадобятся:</h3>
      <ul className={classNames(styles["listUl"])}>
        <li className={classNames(styles["stringList"])}>Камень</li>
        <li className={classNames(styles["stringList"])}>Лёд</li>
        <li className={classNames(styles["stringList"])}>Белый бетон</li>
        <li className={classNames(styles["stringList"])}>Обсидиан</li>
        <li className={classNames(styles["stringList"])}>Ковры из шерсти</li>
      </ul>
      <h3 className={classNames(styles["textAll"])}>Бетон и лёд берется в количестве приблизительно равном меньшей из координат X и Z, то есть по длине хайперлупа.</h3>
      <h3 className={classNames(styles["textAll"])}>Камень в 32 раза больше, чем длина хайперлупа + 2 стака. </h3>
      <h3 className={classNames(styles["textAll"])}>Ковры в 6 раз больше, чем льда.</h3>
      <h3 className={classNames(styles["textAll"])}>В последствие, когда Вы будете строить свой дизайн хайперлупа белый бетон можно заменить на другие плотные блоки, а лёд — на плотный или синий лёд только при условии дополнительного размещения поверх него предметов, исключающих спавн мобов (кнопки или рельсы).</h3>
      <h3 className={classNames(styles["textAll"])}>Для постройки поворота от главной ветки в Ваше ответвление понадобятся:</h3>
      <ul className={classNames(styles["listUl"])}>
        <li className={classNames(styles["stringList"])}>Белый бетон (6)</li>
        <li className={classNames(styles["stringList"])}>Лёд (5)</li>
        <li className={classNames(styles["stringList"])}>Ступеньки из тёмного дуба (10)</li>
        <li className={classNames(styles["stringList"])}>Черная стеклянная панель (10)</li>
        <li className={classNames(styles["stringList"])}>Ступеньки из полированно-чернитного кирпича (10)</li>
        <li className={classNames(styles["stringList"])}>Плита из полированного чернита (5)</li>
        <li className={classNames(styles["stringList"])}>Лестница (14)</li>
        <li className={classNames(styles["stringList"])}>Табличка из тёмного дуба (2)</li>
        <li className={classNames(styles["stringList"])}>Белый краситель (2)</li>
        <li className={classNames(styles["stringList"])}>Стекло под цвет ветки (4)</li>
      </ul>
      <h3 className={classNames(styles["textAll"])}>Эти ресурсы также доступны на общественных складах.</h3>
      <h3 className={classNames(styles["miniTitle"])}>Выбор секции для поворота</h3>
      <h3 className={classNames(styles["textAll"])}>Это очень ВАЖНЫЙ этап строительства. Если Вы выберете неправильную секцию для поворота и отстроете хайперлуп, то Вам в любом случае придется перестраивать весь хайперлуп целиком. Поэтому обратите особое внимание на следующую информацию:</h3>
      <h3 className={classNames(styles["textAll"])}>В главной ветке системы хайперлупов стены состоят из секций шириной 5 блоков, разделены они перегородкой в 1 блок. Середина Вашего ответвления должна быть ровно напротив серой шерсти, если ориентироваться по стенке. Середина каждой секции приходится поочередно на столб с маяком и ограду с редстоун-факелом. </h3>
      <h3 className={classNames(styles["textAll"])}>Необходимо подобрать редстоун-факел (НЕ маяк), ближайший к наибольшей координате Вашего портала в аду.</h3>
      <LazyLoadImage className={classNames(styles["image"])} alt="" effect="blur" src="./site_assets/pages/png/build/2.png" width="100%" height="100%"/>
      <LazyLoadImage className={classNames(styles["image"])} alt="" effect="blur" src="./site_assets/pages/png/build/3.png" width="100%" height="100%"/>
      <h3 className={classNames(styles["miniTitle"])}>Строительство поворота и кожуха</h3>
      <h3 className={classNames(styles["textAll"])}>Прежде чем приступить к строительству кожуха крайне рекомендуется прихватить еды, тотемы, зелья огнестойкости и золотую броню. Процесс строительства будет проходить в опасной зоне, над лавой и в местах, где спавнятся враждебные мобы. </h3>
      <h3 className={classNames(styles["textAll"])}>Далее идет поэтапная последовательность действий по постройке поворота и кохужа ответвления. Обратите внимание, все последующие инструкции ОБЯЗАТЕЛЬНЫ для выполнения, любые отступления по материалам или их расположению — исключены.</h3>
      <h3 className={classNames(styles["textAll"])}>На уровне блока стекла выкладываем мост из блоков белого бетона.</h3>
      <LazyLoadImage className={classNames(styles["image"])} alt="" effect="blur" src="./site_assets/pages/png/build/4.png" width="100%" height="100%"/>
      <h3 className={classNames(styles["textAll"])}>Поверх блоков бетона укладываем блоки льда. Именно обычного льда, не плотного и не синего. Только простой блок льда исключает спавн мобов.</h3>
      <LazyLoadImage className={classNames(styles["image"])} alt="" effect="blur" src="./site_assets/pages/png/build/5.png" width="100%" height="100%"/>
      <h3 className={classNames(styles["textAll"])}>Далее аккуратно убираем два блока серой шерсти и два блока камня.</h3>
      <LazyLoadImage className={classNames(styles["image"])} alt="" effect="blur" src="./site_assets/pages/png/build/6.png" width="100%" height="100%"/>
      <h3 className={classNames(styles["textAll"])}>Заменяем блоки чёрного стекла и грибосвета на белый бетон, сверху покрываем льдом. Если оставить грибосвет, то лёд растает.</h3>
      <LazyLoadImage className={classNames(styles["image"])} alt="" effect="blur" src="./site_assets/pages/png/build/7.png" width="100%" height="100%"/>
      <h3 className={classNames(styles["textAll"])}>Продолжаем выстраивать прямую линию из блоков белого бетона до меньшей из двух координат будущего портала.</h3>
      <LazyLoadImage className={classNames(styles["image"])} alt="" effect="blur" src="./site_assets/pages/png/build/8.png" width="100%" height="100%"/>
      <h3 className={classNames(styles["textAll"])}>Намечаем нижнюю рамку портала и делаем запас в 2 блока камня за порталом.</h3>
      <LazyLoadImage className={classNames(styles["image"])} alt="" effect="blur" src="./site_assets/pages/png/build/9.png" width="100%" height="100%"/>
      <h3 className={classNames(styles["textAll"])}>Выстраиваем рамку кожуха размером 9х9 у главной ветки. Кожух обязательно должен быть из блоков камня. Бетон можно заменить впоследствии на другой блок согласно выбранному Вами дизайну хайперлупа.</h3>
      <LazyLoadImage className={classNames(styles["image"])} alt="" effect="blur" src="./site_assets/pages/png/build/10.png" width="100%" height="100%"/>
      <h3 className={classNames(styles["textAll"])}>Нижние блоки камня должны располагаться на одном уровне с нижними блоками грибосвета.</h3>
      <LazyLoadImage className={classNames(styles["image"])} alt="" effect="blur" src="./site_assets/pages/png/build/11.png" width="100%" height="100%"/>
      <h3 className={classNames(styles["textAll"])}>Верхние блоки камня должны располагаться вровень с первым боковым ребром главной ветки.</h3>
      <LazyLoadImage className={classNames(styles["image"])} alt="" effect="blur" src="./site_assets/pages/png/build/12.png" width="100%" height="100%"/>
      <h3 className={classNames(styles["textAll"])}>Выстраиваем рамку портала размером 7х7 и кожух вокруг портала 9х9. По стандарту между порталом и задней стеной оставляется 1 блок для будущего дизайна. Если выбранный Вами дизайн  ребует большего пространства, то отступите от портала до задней стенки кожуха необходимое количество блоков.</h3>
      <LazyLoadImage className={classNames(styles["image"])} alt="" effect="blur" src="./site_assets/pages/png/build/13.png" width="100%" height="100%"/>
      <h3 className={classNames(styles["textAll"])}>Зажгите портал, зайдите в него и убедитесь, что Вы попали на свою базу.</h3>
      <h3 className={classNames(styles["textAll"])}>Вернитесь и соедините начало и конец кожуха камнем.</h3>
      <LazyLoadImage className={classNames(styles["image"])} alt="" effect="blur" src="./site_assets/pages/png/build/14.png" width="100%" height="100%"/>
      <h3 className={classNames(styles["textAll"])}>Уложите поверх бетона блоки льда. Пока Вы продумываете и собираете ресурсы на дизайн ответвления, уложите пол коврами из шерсти любого оттенка.</h3>
      <LazyLoadImage className={classNames(styles["image"])} alt="" effect="blur" src="./site_assets/pages/png/build/15.png" width="100%" height="100%"/>
      <h3 className={classNames(styles["textAll"])}>Снимите лишние блоки на месте соединения ответвления и главной ветки: от перегородки из базальта до перегородки из базальта по горизонтали и от цветного бетона до обсидиана по вертикали.</h3>
      <LazyLoadImage className={classNames(styles["image"])} alt="" effect="blur" src="./site_assets/pages/png/build/16.png" width="100%" height="100%"/>
      <h3 className={classNames(styles["textAll"])}>Установите ступеньки из тёмного дуба по краям прохода на уровне блоков льда, поверх ступенек — чёрные панели из стекла. Между крайней ступенью из тёмного дуба и базальтом установите ступеньки из полировано-чернитного кирпича.</h3>
      <LazyLoadImage className={classNames(styles["image"])} alt="" effect="blur" src="./site_assets/pages/png/build/17.png" width="100%" height="100%"/>
      <h3 className={classNames(styles["textAll"])}>На нижнем этаже главной ветки хайперлупов выложите ступеньки из полированно-чернитного кирпича по обе стороны от белого бетона, как показано на изображении:</h3>
      <LazyLoadImage className={classNames(styles["image"])} alt="" effect="blur" src="./site_assets/pages/png/build/18.png" width="100%" height="100%"/>
      <h3 className={classNames(styles["textAll"])}>Белый бетон прикройте плитами из полированного чернита.</h3>
      <LazyLoadImage className={classNames(styles["image"])} alt="" effect="blur" src="./site_assets/pages/png/build/19.png" width="100%" height="100%"/>
      <h3 className={classNames(styles["textAll"])}>На столбах у поворота на высоте Y=47 установите таблички из тёмного дуба с Вашим ником, надпись покрасьте белым красителем.</h3>
      <LazyLoadImage className={classNames(styles["image"])} alt="" effect="blur" src="./site_assets/pages/png/build/20.png" width="100%" height="100%"/>
      <h3 className={classNames(styles["textAll"])}>По столбам с обеих сторон от прохода по высоте от нижнего блока до уровня таблички включительно проведите лестницу.</h3>
      <LazyLoadImage className={classNames(styles["image"])} alt="" effect="blur" src="./site_assets/pages/png/build/21.png" width="100%" height="100%"/>
      <h3 className={classNames(styles["textAll"])}>В итоге поворот к Вашему ответвлению должен иметь следующий вид:</h3>
      <LazyLoadImage className={classNames(styles["image"])} alt="" effect="blur" src="./site_assets/pages/png/build/22.png" width="100%" height="100%"/>
      <h3 className={classNames(styles["textAll"])}>Общий вид:</h3>
      <LazyLoadImage className={classNames(styles["image"])} alt="" effect="blur" src="./site_assets/pages/png/build/23.png" width="100%" height="100%"/>
      <h3 className={classNames(styles["mainTitle"])}>Ответвление от главной ветки на крыше ада</h3>
      <h3 className={classNames(styles["textAll"])}>Для постройки поворота от главной ветки понадобятся:</h3>
      <ul className={classNames(styles["listUl"])}>
        <li className={classNames(styles["stringList"])}>Белый бетон (2)</li>
        <li className={classNames(styles["stringList"])}>Лёд (2)</li>
        <li className={classNames(styles["stringList"])}>Черная стеклянная панель (4)</li>
        <li className={classNames(styles["stringList"])}>Ступеньки из полированно-чернитного кирпича (4)</li>
        <li className={classNames(styles["stringList"])}>Полированно-чернитные кирпичи (4)</li>
        <li className={classNames(styles["stringList"])}>Стекло под цвет ветки (4)</li>
      </ul>
      <h3 className={classNames(styles["textAll"])}>Эти ресурсы также доступны на общественных складах.</h3>
      <h3 className={classNames(styles["textAll"])}>При построении ответвления от главных веток магистралей на крыше ада необходимо подобрать блок с факелом душ, по этому направлению будет проходить середина Вашего ответвления.</h3>
      <LazyLoadImage className={classNames(styles["image"])} alt="" effect="blur" src="./site_assets/pages/png/build/24.png" width="100%" height="100%"/>
      <h3 className={classNames(styles["textAll"])}>Далее необходимо убрать нажимные плиты, факел душ, блоки бетона, багровой древесины, обсидиана и полированный чернит, изображенные на скриншоте ниже.</h3>
      <LazyLoadImage className={classNames(styles["image"])} alt="" effect="blur" src="./site_assets/pages/png/build/25.png" width="100%" height="100%"/>
      <h3 className={classNames(styles["textAll"])}>Устанавливаем блоки полированно-чернитных кирпичей, на них ступеньки из полированного чернита, между ними блоки белого бетона. Убираем блоки льда над стрелкой и по одному блоку в обе стороны.</h3>
      <LazyLoadImage className={classNames(styles["image"])} alt="" effect="blur" src="./site_assets/pages/png/build/26.png" width="100%" height="100%"/>
      <h3 className={classNames(styles["textAll"])}>Далее устанавливаем блоки стекла под цвет главной ветки, лёд и черные стеклянные панели, как изображено ниже.</h3>
      <LazyLoadImage className={classNames(styles["image"])} alt="" effect="blur" src="./site_assets/pages/png/build/27.png" width="100%" height="100%"/>
      <h3 className={classNames(styles["textAll"])}>Длина поворота в стилистике главной ветки должна составлять 2 блока от цветного стекла, далее может начинаться дизайн Вашего ответвления.</h3>
      <h3 className={classNames(styles["textAll"])}>Конечный вариант поворота до начала строительства Вашего дизайна должен иметь следующий вид.</h3>
      <LazyLoadImage className={classNames(styles["image"])} alt="" effect="blur" src="./site_assets/pages/png/build/28.png" width="100%" height="100%"/>
      <h3 className={classNames(styles["textAll"])}>При этом дизайн ответвления должен предусматривать установку табличек с названием территории или Вашим ником. Пример приведен ниже.</h3>
      <LazyLoadImage className={classNames(styles["image"])} alt="" effect="blur" src="./site_assets/pages/png/build/29.png" width="100%" height="100%"/>
      <h3 className={classNames(styles["textAll"])}>Удачи в строительстве!</h3>
    </div>
  );
};

export default BuildingAHyperloop;
