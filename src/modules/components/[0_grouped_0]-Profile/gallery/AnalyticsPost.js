import React from "react";
import {array} from "../../../pages/gallery/GalleryArray";

import styles from "./AnalyticsPost.module.scss";

const AnalyticsPost = () => {

  const filteredOneItem = array.filter(ids => ids.id === 1)

  return (
    <div className={styles["analyticsBlock"]}>
      <div className={styles["top"]}>
        <h2 className={styles["infoPost"]}>Сведенья о публикации:</h2>
      </div>
      <div className={styles["bottom"]}>
        <div className={styles["oneColumn"]}>
          {filteredOneItem.map((el, i) =>
            <>
              <h3 key={i} className={styles["title"]}>Всего лайков: <span className={styles["count"]}>{el.likes}</span></h3>
              {el.likesList.map((user, i) =>
                <div className={styles["one"]} key={i}>
                  <img className={styles["userIcon"]} src={`https://minotar.net/helm/${user}/100`} alt=" "></img>
                  <h4 className={styles["usersName"]}>{user}</h4>
                  {/*<a href="https://www.google.com.ua/" className={styles["linkUsers"]}>&#129133;</a>*/}
                </div>
              )}
            </>
          )}
        </div>
        <div className={styles["oneColumn"]}>
          {filteredOneItem.map((el, i) =>
            <>
              <h3 key={i} className={styles["title"]}>Всего дизлайков: <span className={styles["count"]}>{el.dislikes}</span></h3>
              {el.dislikesList.map((user, i) =>
                <div className={styles["one"]} key={i}>
                  <img className={styles["userIcon"]} src={`https://minotar.net/helm/${user}/100`} alt=" "></img>
                  <h4 className={styles["usersName"]}>{user}</h4>
                  {/*<a href="https://www.google.com.ua/" className={styles["linkUsers"]}>&#129133;</a>*/}
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