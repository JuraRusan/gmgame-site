import classNames from "classnames";
import React, {useState} from "react";
import TableMain from "../../table/TableMain";
import THead from "../../table/THead";
import TBody from "../../table/TBody";
import Th from "../../table/Th";
import Tr from "../../table/Tr";
import TButton from "../../table/TButton";
import ReactModal from "react-modal";
import EditAddPost from "../../[0_grouped_0]-Profile/gallery/EditAddPost";
import {sendRequest, useAxios} from "../../../../DataProvider";
import {useAlert} from "react-alert";
import Preload from "../../preloader/Preload";
import useLoading from "../../../loading/useLoading";

import styles from "./Gallery-status-view.module.scss";

const GalleryStatusView = () => {

  const alert = useAlert();
  const isLoading = useLoading();

  const [modalUserGallery, setModalUserGallery] = useState(false);

  const handleOpenModalUserGallery = () => {
    setModalUserGallery(true);
  }

  const handleCloseModalUserGallery = () => {
    setModalUserGallery(false);
  }

  const showMessage = (response) => {
    if (response.message) {
      alert.success(response.message);
    } else {
      alert.error(response.error);
    }
  }

  const handleAprove = (id) => {
    sendRequest(
      '/api/approve_gallery',
      'POST',
      {
        id: id
      }
    ).then(response => {
      showMessage(response);
    });
  }

  const handleDelete = (id) => {
    sendRequest(
      '/api/delete_gallery',
      'POST',
      {
        id: id
      }
    ).then(response => {
      showMessage(response);
    });
  }

  const handleReject = (id) => {
    sendRequest(
      '/api/reject_gallery',
      'POST',
      {
        id: id
      }
    ).then(response => {
      showMessage(response);
    });
  }

  const resParams = useAxios(
    `/api/get_all_galleries`,
    'GET',
    {}
  );

  if (resParams.loading || isLoading) {
    return <Preload full={false}/>;
  }

  return (
    <div className={classNames(styles["galleryStatusViewWrapper"])}>
      <TableMain>
        <THead>
          <Tr header="true">
            <Th type="text" content="i"/>
            <Th type="text" content="Автор"/>
            <Th type="text" content="Автор id"/>
            <Th type="text" content="Публикация"/>
            <Th type="text" content="Ошибки"/>
            <Th type="text" content="Просмотр"/>
            <Th type="text" content="Действия"/>
          </Tr>
        </THead>
        <TBody>
          {resParams.data.map((el, i) => {
              if (el.aprove === true) {
                return null
              }

              return (
                <Tr key={i} keyStyle={i}>
                  <Th type="text" content={i + 1}/>
                  <Th type="text" content={el.user.username}/>
                  <Th type="text" content={el.author}/>
                  <Th type="text" content={el.aprove === true ? "true" : "false"}/>
                  <Th type="text" content={el.warning === true ? "true" : "false"}/>
                  <Th type="actions">
                    <TButton name="click" onClick={handleOpenModalUserGallery}/>
                  </Th>
                  <Th type="actions">
                    <TButton name="Опубликовать" onClick={() => {
                      handleAprove(el.id)
                    }}/>
                    <TButton name="Пере-пост" onClick={() => {
                      handleReject(el.id)
                    }}/>
                    <TButton name="Удалить" onClick={() => {
                      handleDelete(el.id)
                    }}/>
                  </Th>
                </Tr>
              )
            }
          )}
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