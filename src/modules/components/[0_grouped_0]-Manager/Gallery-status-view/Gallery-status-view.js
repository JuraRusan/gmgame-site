import classNames from "classnames";
import React, {useState} from "react";
import {array} from "../../../pages/gallery/GalleryArray";
import TableMain from "../../table/TableMain";
import THead from "../../table/THead";
import TBody from "../../table/TBody";
import Th from "../../table/Th";
import Tr from "../../table/Tr";
import TButton from "../../table/TButton";
import ReactModal from "react-modal";
import EditAddPost from "../../[0_grouped_0]-Profile/gallery/EditAddPost";
// import {useAxios} from "../../../../DataProvider";
// import Preload from "../../preloader/Preload";
// import useLoading from "../../../loading/useLoading";

import styles from "./Gallery-status-view.module.scss";

const GalleryStatusView = () => {

  const [modalUserGallery, setModalUserGallery] = useState(false);

  const handleOpenModalUserGallery = () => {
    setModalUserGallery(true);
  }

  const handleCloseModalUserGallery = () => {
    setModalUserGallery(false);
  }

  return (
    <div className={classNames(styles["galleryStatusViewWrapper"])}>
      <TableMain>
        <THead>
          <Tr header="true">
            <Th type="text" content="i"/>
            <Th type="text" content="Автор"/>
            <Th type="text" content="Просмотр"/>
            <Th type="text" content="Действия"/>
          </Tr>
        </THead>
        <TBody>
          {array.map((el, i) => <Tr key={i} keyStyle={i}>
            <Th type="text" content={i + 1}/>
            <Th type="text" content={el.author}/>
            <Th type="actions">
              <TButton name="click" onClick={handleOpenModalUserGallery}/>
            </Th>
            <Th type="actions">
              <TButton name="Опубликовать" onClick={() => console.log("click")}/>
              <TButton name="Удалить" onClick={() => console.log("click")}/>
            </Th>
          </Tr>)}
        </TBody>
      </TableMain>

      <ReactModal
        isOpen={modalUserGallery}
        onRequestClose={handleCloseModalUserGallery}
        className={classNames(styles["modal_main"])}
        overlayClassName={classNames(styles["overlay_modal"])}
      >
        <div className={classNames(styles["container"])}>
          <EditAddPost/>
        </div>
      </ReactModal>
    </div>
  );
};

export default GalleryStatusView;