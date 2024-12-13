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
import { useAlert } from "@blaumaus/react-alert";

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

const SelectItem = ({ edit, update }) => {
  const alert = useAlert();

  const [slot, setSlot] = useState(edit.slot);
  const [id, setId] = useState(edit.id);
  const [amount, setAmount] = useState(edit.amount);
  const [content, setContent] = useState(edit.content);
  const [customName, setCustomName] = useState(edit.minecraft_custom);
  const [lore, setLore] = useState(edit.lore);
  const [fireworkPower, setFireworkPower] = useState(edit.firework_power);
  const [enchant, setEnchant] = useState(edit.enchant);
  const [instrument, setInstrument] = useState(edit.instrument);
  const [trim, setTrim] = useState(edit.trim);
  const [leatherColor, setLeatherColor] = useState(edit.leather_color);
  const [shield, setShield] = useState(edit.leather_color);
  const [bannerPattern, setBannerPattern] = useState(edit.banner_pattern);

  const saveEditedItem = () => {
    const data = {
      slot: slot,
      id: id,
      amount: amount,
      content: content,
      minecraft_custom: customName,
      lore: lore,
      firework_power: fireworkPower,
      enchant: enchant,
      instrument: instrument,
      trim: trim,
      leather_color: leatherColor,
      shield: shield,
      banner_pattern: bannerPattern,
    };
    const filtered = Object.fromEntries(Object.entries(data).filter(([key, value]) => value !== undefined));

    alert.success("бла бла бла");
    update(filtered);
  };

  const checkAmount = (value) => {
    const numValue = Number(value);
    setAmount(Math.min(64, Math.max(1, numValue)));
  };

  if (lore) {
    console.log(prepareLite(lore[0]));
    console.log(prepareLite(lore[1]));
    console.log(prepareLite(lore[2]));
    console.log(prepareLite(lore[3]));
    console.log(prepareLite(lore[4]));
  }

  return (
    <div className={classNames(styles["editor"])}>
      <datalist id="testa">
        {listId.map((e, i) => (
          <option key={i} value={e} />
        ))}
      </datalist>
      <div className={classNames(styles["row"])}>
        <FormTitle title="ID предмета:" count={false} />
        <Input list="testa" value={id} onChange={(e) => setId(e.target.value)} />
      </div>
      <div className={classNames(styles["row"])}>
        <FormTitle title="Стандартное название предмета:" count={false} required={false} />
        <Input value={id} disabled />
      </div>
      <div className={classNames(styles["row"])}>
        <FormTitle title="Колличество:" count={false} />
        <Input type="number" min="1" max="64" value={amount} onChange={(e) => checkAmount(e.target.value)} />
      </div>
      <div className={classNames(styles["row"])}>
        <FormTitle title="Кастомное название:" count={false} />
        <TextEditor size="small" lite={true} value={customName} setValue={setCustomName} />
      </div>
      <div className={classNames(styles["row"])}>
        <FormTitle title="Лор:" count={false} />
        <TextEditor size="small" lite={true} value={lore} setValue={setLore} />
      </div>
      {id === "firework_rocket" ? (
        <>
          <FormTitle title="Длительность полёта:" count={false} />
          <Select
            list={FIREWORK_ROCKET_DURATION}
            onChange={(e) => setFireworkPower(e.target.value)}
            defaultValue={fireworkPower}
          />
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
      <Button view="submit" label="Подтвердить" onClick={saveEditedItem} />
    </div>
  );
};

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
              <button onClick={() => openShulkerColorModal(type)}>color</button>
              <button onClick={() => resetItem(type)}>reset</button>
            </div>
          </div>
        ) : (
          <div className={classNames(styles["active"])}>
            <OneItem item={main[type]} onClick={(e) => itemEdit(e, type)} big={true} />
            <div className={classNames(styles["actions_item"])}>
              <button onClick={() => resetItem(type)}>reset</button>
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
    <div className={classNames(styles["user_goods_edit"])}>
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
          <SelectItem edit={temporarily} update={updateItem} />
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
