import classNames from "classnames";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../button/Button";
import OneItem from "../../[0_grouped_0]-Shopkeepers/one-item/One-item";
import BackButton from "../../back-button/BackButton";
import useLoading from "../../../loading/useLoading";
import Preload from "../../preloader/Preload";
import FormTitle from "../../form-title/FormTitle";
import TextEditor from "../../text-editor/TextEditor";
import MyModal from "../../../../common/modal/MyModal";
import ShulkerBox from "../../[0_grouped_0]-Shopkeepers/shulker-box/Shulker-box";
import SelectItemEdit from "./SelectItemEdit";
import QuestionSvgComponent from "../../../../bases/icons/questionSvg/QuestionSvg";
import { SHULKERS_TYPE } from "../../../pages/shopkeepers/ShulkersType";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { clone } from "ramda";
import { useAlert } from "@blaumaus/react-alert";

import styles from "./UserGoodsEdit.module.scss";
import "react-lazy-load-image-component/src/effects/blur.css";

const TYPE_LIST = [
  { name: "deepslate_diamond_ore", type: "item" },
  { name: "shulker_box", type: "shulker" },
];

const MIN_DESCRIPTION = 24;
const MAX_DESCRIPTION = 65535;

const UserGoodsEdit = () => {
  const isLoading = useLoading();
  const alert = useAlert();

  const { id } = useParams();
  const navigate = useNavigate();

  const [main, setMain] = useState({
    result: { id: "", amount: 1, content: [] },
    item: { id: "", amount: 1, content: [] },
  });

  const [temporarily, setTemporarily] = useState(null);

  const [select, setSelect] = useState("");

  const [description, setDescription] = useState(null);
  const [descriptionLength, setDescriptionLength] = useState(0);
  const [errorMessagePostDescription, setErrorMessagePostDescription] = useState("");

  const [editItemModal, setEditItemModal] = useState(false);
  const [shulkerColorModal, setShulkerColorModal] = useState(false);
  const [selectTypeModal, setSelectTypeModal] = useState(false);

  // ---
  const openEditItemModal = () => {
    setEditItemModal(true);
  };

  const closeEditItemModal = () => {
    setEditItemModal(false);
    setTemporarily(null);
  };

  const itemEdit = (slot, type) => {
    let tempValue;

    setSelect(type);

    if (typeof slot !== "number") {
      tempValue = clone(main[type]);
    } else {
      let foundObject = main[type].content.find((item) => item.slot === slot);

      if (!foundObject) {
        tempValue = { slot: slot, id: "stone", amount: 1 };
      } else {
        tempValue = foundObject;
      }
    }

    setTemporarily(tempValue);
    openEditItemModal();
  };

  const updateItem = (data) => {
    if (!data.slot) {
      setMain((prev) => ({
        ...prev,
        [select]: { ...data },
      }));
      setSelect("");
      setTemporarily(null);
    } else {
      setMain((prev) => {
        let newContent;
        const updated = prev[select].content;

        const existingIndex = updated.findIndex((obj) => obj.slot === data.slot);

        if (existingIndex !== -1) {
          newContent = [
            ...updated.slice(0, existingIndex),
            { ...updated[existingIndex], ...data },
            ...updated.slice(existingIndex + 1),
          ];
        } else {
          newContent = [...updated, data];
        }

        return {
          ...prev,
          [select]: {
            ...prev[select],
            content: newContent,
          },
        };
      });

      setSelect("");
      setTemporarily(null);
    }

    closeEditItemModal();
  };

  const resetItem = (type) => {
    setMain((prev) => ({
      ...prev,
      [type]: { id: "", amount: 1, content: [] },
    }));
  };

  // ---
  const openShulkerColorModal = (type) => {
    setShulkerColorModal(true);

    setSelect(type);
  };

  const closeShulkerColorModal = () => {
    setShulkerColorModal(false);

    setSelect("");
  };

  const updateShulkerColorMain = (key, type) => {
    setMain((prev) => ({
      ...prev,
      [key]: { ...prev[key], id: type },
    }));
  };

  const updateShulkerColor = (type) => {
    setShulkerColorModal(false);

    if (select === "item") {
      updateShulkerColorMain("item", type);
    } else {
      updateShulkerColorMain("result", type);
    }

    setSelect("");
  };

  // ---
  const openSelectTypeModal = (sel) => {
    setSelectTypeModal(true);
    setSelect(sel);
  };

  const closeSelectTypeModal = () => {
    setSelectTypeModal(false);
    setSelect("");
  };

  const updateSelectTypeMain = (key, type) => {
    setMain((prev) => ({
      ...prev,
      [key]: { ...prev[key], id: type === "shulker" ? "shulker_box" : "diamond" },
    }));
  };

  const updateSelectType = (type) => {
    setSelectTypeModal(false);

    if (select === "item") {
      updateSelectTypeMain("item", type);
    } else {
      updateSelectTypeMain("result", type);
    }

    setSelect("");
  };

  const BOX = ({ type }) => {
    return (
      <>
        {SHULKERS_TYPE.includes(main[type].id) ? (
          <div className={classNames(styles["active"])}>
            <ShulkerBox item={main[type]} onClick={(e) => itemEdit(e, type)} />
            <div className={classNames(styles["actions_item"])}>
              <button onClick={() => openShulkerColorModal(type)}>Цвет</button>
              <button onClick={() => resetItem(type)}>Сбросить</button>
            </div>
          </div>
        ) : (
          <div className={classNames(styles["active"])}>
            <OneItem item={main[type]} onClick={(e) => itemEdit(e, type)} big={true} />
            <div className={classNames(styles["actions_item"])}>
              <button onClick={() => resetItem(type)}>Сбросить</button>
            </div>
          </div>
        )}
      </>
    );
  };

  // ---
  if (isLoading) {
    return <Preload full={false} />;
  }

  return (
    <div
      className={classNames(styles["user_goods_edit"], {
        [[styles["overflow"]]]: SHULKERS_TYPE.includes(main.item.id) && SHULKERS_TYPE.includes(main.result.id),
      })}
    >
      <BackButton onClick={() => navigate(-1)} />
      <FormTitle title="Параметры сделки: " count={false} />
      <div
        className={classNames(styles["offers"], {
          [[styles["double"]]]: SHULKERS_TYPE.includes(main.item.id) && SHULKERS_TYPE.includes(main.result.id),
        })}
      >
        <div className={classNames(styles["item_box"])}>
          {main.item.id === "" ? (
            <div className={classNames(styles["empty"])} onClick={() => openSelectTypeModal("item")}>
              <QuestionSvgComponent width="100%" height="100%" color="#f4f4f4" />
            </div>
          ) : (
            <BOX type="item" />
          )}
        </div>
        <div className={classNames(styles["arrow_box"])}>
          <span className={classNames(styles["arrow"])}>&#10132;</span>
        </div>
        <div className={classNames(styles["item_box"])}>
          {main.result.id === "" ? (
            <div className={classNames(styles["empty"])} onClick={() => openSelectTypeModal("result")}>
              <QuestionSvgComponent width="100%" height="100%" color="#f4f4f4" />
            </div>
          ) : (
            <BOX type="result" />
          )}
        </div>
      </div>
      <div className={classNames(styles["comment"])}>
        <FormTitle
          title="Комментарий к товару:"
          min={MIN_DESCRIPTION}
          max={MAX_DESCRIPTION}
          length={descriptionLength}
          required={false}
        />
        <TextEditor size="small" value={description} setValue={setDescription} textLength={setDescriptionLength} />
      </div>
      <div className={classNames(styles["actions"])}>
        <Button view="submit" label="Сохранить" />
        <Button view="view" label="Отложить" />
        <Button view="delete" label="Удалить" />
        {/*{id === "new" ? null : <Button view="delete" label="Удалить" />}*/}
      </div>

      <MyModal open={selectTypeModal} close={closeSelectTypeModal}>
        <div className={classNames(styles["modal_select_block"])}>
          <FormTitle title="Выберите тип пустого слота" required={false} center={true} count={false} />
          <div className={classNames(styles["wrapper_type_item"])}>
            {TYPE_LIST.map((el, i) => (
              <div className={classNames(styles["single"])} onClick={() => updateSelectType(el.type)} key={i}>
                <LazyLoadImage
                  src={process.env.PUBLIC_URL + `/site_assets/items/${el.name}.webp`}
                  width="100%"
                  height="100%"
                  effect="blur"
                  alt="none"
                />
              </div>
            ))}
          </div>
        </div>
      </MyModal>

      <MyModal open={shulkerColorModal} close={closeShulkerColorModal}>
        <div className={classNames(styles["modal_select_block"])}>
          <FormTitle title="Выберите цвет шалкера" required={false} center={true} count={false} />
          <div className={classNames(styles["wrapper_shulker_color"])}>
            {SHULKERS_TYPE.map((el, index) => (
              <div className={classNames(styles["single"])} key={index} onClick={() => updateShulkerColor(el)}>
                <LazyLoadImage
                  src={process.env.PUBLIC_URL + `/site_assets/items/${el}.webp`}
                  width="100%"
                  height="100%"
                  effect="blur"
                  alt="none"
                />
              </div>
            ))}
          </div>
        </div>
      </MyModal>

      <MyModal open={editItemModal} close={closeEditItemModal}>
        <div className={classNames(styles["wrapper_editor"])}>
          <SelectItemEdit edit={temporarily} update={updateItem} />
        </div>
      </MyModal>
    </div>
  );
};

export default UserGoodsEdit;
