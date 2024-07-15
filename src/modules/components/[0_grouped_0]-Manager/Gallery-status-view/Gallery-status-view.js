import classNames from "classnames";
import React from "react";
import TableMain from "../../table/TableMain";
import THead from "../../table/THead";
import TBody from "../../table/TBody";
import Th from "../../table/Th";
import Tr from "../../table/Tr";
import TButton from "../../table/TButton";
import { sendRequest, useAxios } from "../../../../DataProvider";
import { useAlert } from "react-alert";
import Preload from "../../preloader/Preload";
import useLoading from "../../../loading/useLoading";

import styles from "./Gallery-status-view.module.scss";

const GalleryStatusView = () => {
  const alert = useAlert();
  const isLoading = useLoading();

  const showMessage = (response) => {
    if (response.message) {
      alert.success(response.message);
    } else {
      alert.error(response.error);
    }
  };

  const handleAprove = (id) => {
    sendRequest("/api/approve_gallery", "POST", {
      id: id,
    }).then((response) => {
      showMessage(response);
    });
  };

  const handleDelete = (id) => {
    sendRequest("/api/delete_gallery", "POST", {
      id: id,
    }).then((response) => {
      showMessage(response);
    });
  };

  const handleReject = (id) => {
    sendRequest("/api/reject_gallery", "POST", {
      id: id,
    }).then((response) => {
      showMessage(response);
    });
  };

  const resParams = useAxios(`/api/get_all_galleries`, "GET", {});

  if (resParams.loading || isLoading) {
    return <Preload full={false} />;
  }

  return (
    <div className={classNames(styles["galleryStatusViewWrapper"])}>
      <TableMain>
        <THead>
          <Tr header="true">
            <Th type="text" content="i" />
            <Th type="text" content="Автор" />
            <Th type="text" content="id" />
            <Th type="text" content="Публикация" />
            <Th type="text" content="Блокировка" />
            <Th type="text" content="Просмотр" />
            <Th type="text" content="Действия" />
          </Tr>
        </THead>
        <TBody>
          {resParams.data.map((el, i) => {
            return (
              <Tr key={i} keyStyle={i}>
                <Th type="text" content={i + 1} />
                <Th type="text" content={el.user.username} />
                <Th type="text" content={el.id} />
                <Th type="text" content={el.aprove === true ? "true" : "false"} />
                <Th type="text" content={el.warning === true ? "true" : "false"} />
                <Th type="link_to" href={`${el.id}`} />
                <Th type="actions">
                  <TButton
                    name="Опубликовать"
                    onClick={() => {
                      handleAprove(el.id);
                    }}
                    message="Подтвердите действие «Опубликовать»"
                  />
                  <TButton
                    name="Заблокировать"
                    onClick={() => {
                      handleReject(el.id);
                    }}
                    message="Подтвердите действие «Заблокировать»"
                  />
                  <TButton
                    name="Удалить"
                    onClick={() => {
                      handleDelete(el.id);
                    }}
                    message="Подтвердите действие «Удалить»"
                  />
                </Th>
              </Tr>
            );
          })}
        </TBody>
      </TableMain>
    </div>
  );
};

export default GalleryStatusView;
