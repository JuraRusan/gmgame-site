import classNames from "classnames";
import React, {useEffect} from "react";
import {array} from "../../../pages/gallery/GalleryArray";
import AOS from "aos";

import styles from "./AnalyticsPost.module.scss";
import "aos/dist/aos.css";

const AnalyticsPost = () => {

  useEffect(() => {
    AOS.init({duration: 1000});
  }, []);

  const filteredOneItem = array.filter(ids => ids.id === 1)

  return (
    <div className={classNames(styles["analyticsBlock"])} data-aos="zoom-in">
      <div className={classNames(styles["top"])}>
        <h2 className={classNames(styles["infoPost"])}>Сведенья о публикации:</h2>
      </div>
      <div className={classNames(styles["bottom"])}>
        <div className={classNames(styles["oneColumn"])}>
          {filteredOneItem.map((el, i) =>
            <>
              <h3 key={i} className={classNames(styles["title"])}>Всего лайков: <span
                className={classNames(styles["count"])}>{el.likes}</span></h3>
              {el.likesList.map((user, i) =>
                <div className={classNames(styles["one"])} key={i}>
                  <img className={classNames(styles["userIcon"])} src={`https://minotar.net/helm/${user}/100`} alt=" "></img>
                  <h4 className={classNames(styles["usersName"])}>{user}</h4>
                  {/*<a href="https://www.google.com.ua/" className={classNames(styles["linkUsers"])}>&#129133;</a>*/}
                </div>
              )}
            </>
          )}
        </div>
        <div className={classNames(styles["oneColumn"])}>
          {filteredOneItem.map((el, i) =>
            <>
              <h3 key={i} className={classNames(styles["title"])}>Всего дизлайков: <span
                className={classNames(styles["count"])}>{el.dislikes}</span></h3>
              {el.dislikesList.map((user, i) =>
                <div className={classNames(styles["one"])} key={i}>
                  <img className={classNames(styles["userIcon"])} src={`https://minotar.net/helm/${user}/100`} alt=" "></img>
                  <h4 className={classNames(styles["usersName"])}>{user}</h4>
                  {/*<a href="https://www.google.com.ua/" className={classNames(styles["linkUsers"])}>&#129133;</a>*/}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AnalyticsPost;