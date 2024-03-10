import classNames from "classnames";
import React from "react";
import TableMain from "../../table/TableMain";
import THead from "../../table/THead";
import Tr from "../../table/Tr";
import Th from "../../table/Th";
import TBody from "../../table/TBody";
import TButton from "../../table/TButton";
import TInput from "../../table/TInput";

import styles from "./Donate-status-editor.module.scss";

const DonateStatusEditor = () => {

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
          <Tr>
            <Th type="editing">
              <TInput
                id="current"
                size="small"
              />
            </Th>
            <Th type="editing">
              <TInput
                id="full"
                size="small"
              />
            </Th>
            <Th type="actions">
              <TButton name="Добавить"/>
            </Th>
          </Tr>
        </TBody>
      </TableMain>
    </div>
  );
};

export default DonateStatusEditor;