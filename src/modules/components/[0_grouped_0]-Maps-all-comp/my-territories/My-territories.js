import classNames from "classnames";
import {React, useState, useEffect} from "react";
import {useAxios} from '../../../../DataProvider';
import {Link} from 'react-router-dom';
import Preload from "../../preloader/Preload.js";
import SvgAddMarker from "../../../../bases/icons/SvgAddMarker.js";
import BinSvgComponent from "../../../../bases/icons/binSVG/binSvg";
import AOS from "aos";

import styles from "../maps-elements.module.scss";
import "aos/dist/aos.css";

const MyTerritories = () => {

  useEffect(() => {
    AOS.init({duration: 1000});
  }, []);

  const [isLoading, setIsLoading] = useState(true);
  let [fileter, setFileter] = useState(null);

  const resParams = useAxios(
    "/api/get_territories",
    'GET',
    {}
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  if (resParams.loading || isLoading) {
    return <Preload />;
  }

  const data = resParams.data;

  return (
    <div className={classNames(styles["boxMapWrapper"])} data-aos="zoom-in">
      <div className={classNames(styles["boxSearchWrapper"])}>
        <input className={classNames(styles["searchInput"])} onChange={(e) => setFileter(e.target.value)} type="search" placeholder="Поиск"/>
        <h4 className={classNames(styles["numberListCount"])}>Количество территорий - {data.count}</h4>
      </div>
      <div className={classNames(styles["boxListWrapper"])}>
        <Link to={'edit_add_terr/new'}>
          {/* eslint-disable-next-line */}
          <div className={classNames(styles["oneMapsElement"])}>
            <div className={classNames(styles["marginAddBox"])}>
              <SvgAddMarker width="100%" height="100%" color="#f4f4f4"/>
            </div>
          </div>
        </Link>
        {data.markers.map((el, index) => {
          if (fileter && !el.name.toLowerCase().includes(fileter.toLowerCase())) {
            return false;
          }
          return (
            <div key={el.id} className={classNames(styles["oneMapsElement"])}>
              <div className={classNames(styles["columnsOne"])}>
                <p className={classNames(styles["elementIndex"])}>{index + 1}</p>
                <h3 className={classNames(styles["elementH3Name"])}>{el.name}</h3>
              </div>
              <div className={classNames(styles["columnsTwo"])}>
                <Link to={`edit_add_terr/${el.id}`} className={classNames(styles["elementActions"])}>Настроить</Link>
                <button className={classNames(styles["deleteButton"])}>
                  <BinSvgComponent width="100%" height="100%" color="#f4f4f4"/>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MyTerritories;
