import classNames from "classnames";
import React, {useEffect, useState} from "react";
import TableMain from "../../table/TableMain";
import THead from "../../table/THead";
import Tr from "../../table/Tr";
import Th from "../../table/Th";
import TBody from "../../table/TBody";
import TButton from "../../table/TButton";
import {sendRequest, useAxios} from "../../../../DataProvider";
import useLoading from "../../../loading/useLoading";
import Preload from "../../preloader/Preload";
import TInput from "../../table/TInput";
import {useAlert} from "react-alert";

import styles from "./Donate-status-editor.module.scss";

const DEFAULT = {viewing: false, current: 0, full: 0}

const DonateStatusEditor = () => {

  const isLoading = useLoading();
  const alert = useAlert();

  const [dataStatus, setDataStatus] = useState(DEFAULT)

  const resParams = useAxios(
    "/api/get_donate_status",
    'GET',
    {}
  );

  useEffect(() => {
    if (!resParams.loading) {
      setDataStatus(resParams.data.data)
    }
  }, [resParams])

  if (resParams.loading || isLoading) {
    return <Preload full={false}/>;
  }

  function showMessage(response) {
    if (response.message) {
      alert.success(response.message);
    } else {
      alert.error(response.error);
    }
  }

  function postRequest(url) {
    sendRequest(url, 'POST', {
        current: dataStatus.current,
        full: dataStatus.full,
        viewing: dataStatus.viewing,
      }
    ).then(response => {
      showMessage(response);
    });
  }

  const addPost = () => {
    postRequest('/api/admin/add_donate_status');
  }

  // const savePost = () => {
  //   postRequest('/api/edit_gallery');
  // }
  //
  // const deletePost = () => {
  //   postRequest('/api/delete_gallery');
  // }

  return (
    <div className={classNames(styles["sd"])}>
      <TableMain>
        <THead>
          <Tr header={true}>
            <Th type="text" content="Текущая цена"/>
            <Th type="text" content="Полная цена"/>
            <Th type="text" content="Действия"/>
          </Tr>
        </THead>
        <TBody>
          <Tr keyStyle="1">
            <Th type="editing">
              <TInput
                id="current"
                size="small"
                onChange={(e) => setDataStatus({ ...dataStatus, current: e.target.value })}
                defaultValue={dataStatus.current}
              />
            </Th>
            <Th type="editing">
              <TInput
                id="full"
                size="small"
                onChange={(e) => setDataStatus({ ...dataStatus, full: e.target.value })}
                defaultValue={dataStatus.small}
              />
            </Th>
            <Th type="actions">
              <TButton name="Добавить" onClick={addPost}/>
            </Th>
          </Tr>
          {resParams.data.data.map((el, i) => (
            <Tr key={i} keyStyle={i}>
              <Th type="text" content={i + 1}/>
              <Th type="editing"></Th>
              <Th type="editing"></Th>
              <Th type="editing"></Th>
              <Th type="actions">
                <TButton name="Log"/>
                <TButton name="User Details"/>
              </Th>
            </Tr>
          ))}
        </TBody>
      </TableMain>
    </div>
  );
};

export default DonateStatusEditor;