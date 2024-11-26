import classNames from "classnames";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../button/Button";
import OneItem from "../../[0_grouped_0]-Shopkeepers/one-item/One-item";
import BackButton from "../../back-button/BackButton";
import useLoading from "../../../loading/useLoading";
import Preload from "../../preloader/Preload";
import FormTitle from "../../form-title/FormTitle";
import TextEditor from "../../text-editor/TextEditor";
import Input from "../../input/Input";
import MyModal from "../../../../common/modal/MyModal";
import Select from "../../select/Select";
import ShulkerBox from "../../[0_grouped_0]-Shopkeepers/shulker-box/Shulker-box";
import QuestionSvgComponent from "../../../../bases/icons/questionSvg/QuestionSvg";
import { prepareLite } from "../../text-editor/functions/Prepare";
import { SHULKERS_TYPE } from "../../../pages/shopkeepers/ShulkersType";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { clone } from "ramda";

import styles from "./UserGoodsEdit.module.scss";
import "react-lazy-load-image-component/src/effects/blur.css";

const listId = ["stone", "granite", "diorite", "firework_rocket", "white_banner", "red_banner", "shield"];

const TYPE_LIST = [
  { name: "deepslate_diamond_ore", type: "item" },
  { name: "shulker_box", type: "shulker" },
];

const MIN_DESCRIPTION = 24;
const MAX_DESCRIPTION = 65535;

const FIREWORK_ROCKET_DURATION = [
  { value: "1", name: 1 },
  { value: "2", name: 2 },
  { value: "3", name: 3 },
];

const SelectItem = ({ edit, setEdit }) => {
  const [id, setId] = useState("stone");
  const [name, setName] = useState(null);
  const [lore, setLore] = useState(null);
  // console.log({ edit });

  if (lore) {
    console.log(prepareLite(lore[0]));
    console.log(prepareLite(lore[1]));
    console.log(prepareLite(lore[2]));
    console.log(prepareLite(lore[3]));
    console.log(prepareLite(lore[4]));
  }

  return (
    <div className={classNames(styles["editor"])}>
      <p>{JSON.stringify(edit)}</p>
      <datalist id="testa">
        {listId.map((e, i) => (
          <option key={i} value={e} />
        ))}
      </datalist>
      <FormTitle title="ID предмета:" count={false} />
      <Input list="testa" onChange={(e) => setId(e.target.value)} />
      <FormTitle title="Стандартное название предмета:" count={false} required={false} />
      <Input value={id} disabled />
      {id === "firework_rocket" ? (
        <>
          <FormTitle title="Длительность полёта:" count={false} />
          <Select list={FIREWORK_ROCKET_DURATION} />
        </>
      ) : null}
      {id === "shield" ? (
        <>
          <FormTitle title="Основной цвет:" count={false} />
          <Select list={FIREWORK_ROCKET_DURATION} />
        </>
      ) : null}
      {id.includes("_banner") || id === "shield" ? (
        <>
          <FormTitle title="Узор:" count={false} />
          <Select list={FIREWORK_ROCKET_DURATION} />
        </>
      ) : null}
      <div className={classNames(styles["row"])}>
        <FormTitle title="Название:" count={false} />
        <TextEditor size="small" lite={true} value={name} setValue={setName} />
      </div>
      <div className={classNames(styles["row"])}>
        <FormTitle title="Лор:" count={false} />
        <TextEditor size="small" lite={true} value={lore} setValue={setLore} />
      </div>
    </div>
  );
};

const UserGoodsEdit = () => {
  const isLoading = useLoading();

  const { id } = useParams();
  const navigate = useNavigate();

  const [main, setMain] = useState({
    result: { id: "", amount: 1, content: [] },
    item: { id: "", amount: 1, content: [{ slot: 2, id: "emerald" }] },
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

    if (type) {
      setSelect(type);
    }

    if (typeof slot !== "number") {
      console.log({ main, select });
      tempValue = clone(main[select]);
    } else {
      let contentArray = main[select].content;

      let foundObject = contentArray.find((item) => item.slot === slot);

      // console.log(foundObject);

      if (!foundObject) {
        console.log("нету такого слота");
        console.log(foundObject);
      } else {
        console.log("такой слот есть");
        console.log(foundObject);
      }

      // let foundObject = contentArray.find((item, index) => index <= maxSlots && item.slot === slot);
      //
      // if (!foundObject) {
      //   foundObject = { slot: slot };
      //   contentArray.push(foundObject);
      // }
      //
      // tempValue = foundObject;
    }

    console.log(tempValue);
    setTemporarily(tempValue);
    openEditItemModal();
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
    console.log("1", { sel });
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
          <div onClick={() => setSelect(type)}>
            <ShulkerBox item={main[type]} onClick={itemEdit} />
            <button onClick={() => openShulkerColorModal(type)}>color</button>
            <button onClick={() => resetItem(type)}>reset</button>
          </div>
        ) : (
          <div>
            <OneItem
              item={main[type]}
              onClick={() => {
                itemEdit(undefined, type);
              }}
              big={true}
            />
            <button onClick={() => resetItem(type)}>reset</button>
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
    <div className={classNames(styles["user_goods_edit"])}>
      <BackButton onClick={() => navigate(-1)} />
      <FormTitle title="Параметры сделки: " count={false} />
      <div className={classNames(styles["offers"])}>
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
          <div className={classNames(styles["wrapper"])}>
            {TYPE_LIST.map((el, i) => (
              <div className={classNames(styles["single"])} onClick={() => updateSelectType(el.type)} key={i}>
                <LazyLoadImage
                  src={process.env.PUBLIC_URL + `/site_assets/minecraft-item/${el.name}.webp`}
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
          <SelectItem edit={temporarily} setEdit={setTemporarily} />/
          <Button view="submit" label="Подтвердить" onClick={closeEditItemModal} />
        </div>
      </MyModal>

      <MyModal open={shulkerColorModal} close={closeShulkerColorModal}>
        <FormTitle title="Выберите тип пустого слота" required={false} center={true} count={false} />
        <div className={classNames(styles["modal_shulker_color"])}>
          {SHULKERS_TYPE.map((el, index) => (
            <div className={classNames(styles["single"])} key={index} onClick={() => updateShulkerColor(el)}>
              <LazyLoadImage
                src={process.env.PUBLIC_URL + `/site_assets/minecraft-item/${el}.webp`}
                width="100%"
                height="100%"
                effect="blur"
                alt="none"
              />
            </div>
          ))}
        </div>
      </MyModal>
    </div>
  );
};

export default UserGoodsEdit;
