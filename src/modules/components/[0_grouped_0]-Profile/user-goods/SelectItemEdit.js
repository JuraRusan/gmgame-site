import { useAlert } from "@blaumaus/react-alert";
import React, { useEffect, useState } from "react";
import { prepareLite } from "../../text-editor/functions/Prepare";
import classNames from "classnames";
import styles from "./UserGoodsEdit.module.scss";
import FormTitle from "../../form-title/FormTitle";
import Input from "../../input/Input";
import TextEditor from "../../text-editor/TextEditor";
import Select from "../../select/Select";
import Button from "../../button/Button";
import axios from "axios";
import Preload from "../../preloader/Preload";
import useLoading from "../../../loading/useLoading";

const listId = ["stone", "granite", "diorite", "firework_rocket", "white_banner", "red_banner", "shield"];

const FIREWORK_ROCKET_DURATION = [
  { value: "1", name: 1 },
  { value: "2", name: 2 },
  { value: "3", name: 3 },
];

const SelectItemEdit = ({ edit, update }) => {
  const isLoading = useLoading();
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

  const [data, setData] = useState({
    enchantments: {},
    colors: {},
    patterns: {},
    materials: {},
    banners: {},
    banners_patterns: {},
    shield: {},
    items: {},
  });

  const [loadedAll, setLoadedAll] = useState(false);
  const [loadingAll, setLoadingAll] = useState(true);

  const [init, setInit] = useState(false);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:4000/data_editor")
      .then((res) => {
        setData(res.data.data);
      })
      .catch((error) => {
        alert.error(error);
      })
      .finally(() => {
        setLoadedAll(true);
        setLoadingAll(false);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const testwd = Object.keys(data.items);
  console.log(testwd);

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

    alert.success("Предмет обновлён");
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

  if (loadedAll && !init) {
    setInit(true);
  }

  if (loadingAll || isLoading) {
    return <Preload full={false} />;
  }

  return (
    <div className={classNames(styles["editor"])}>
      <datalist id="testa">
        {testwd.map((e, i) => (
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
      <br />
      <Button view="submit" label="Подтвердить" onClick={saveEditedItem} />
    </div>
  );
};

export default SelectItemEdit;
