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
import Input from "../../input/Input";

import styles from "./UserGoodsEdit.module.scss";
import MyModal from "../../../../common/modal/MyModal";
import item from "../my-prizes/Item";
import Select from "../../select/Select";
import { prepare, prepareLite } from "../../text-editor/functions/Prepare";

const listId = ["stone", "granite", "diorite", "firework_rocket"];
// const testitems = {
//   id: "yellow_shulker_box",
//   content: [
//     {
//       slot: 0,
//       amount: 1,
//       id: "horn_coral_fan",
//     },
//     {
//       slot: 1,
//       amount: 1,
//       id: "orange_tulip",
//     },
//     {
//       slot: 2,
//       amount: 1,
//       id: "bell",
//     },
//     {
//       slot: 3,
//       amount: 1,
//       id: "honeycomb_block",
//     },
//     {
//       slot: 4,
//       amount: 1,
//       id: "honey_bottle",
//     },
//     {
//       slot: 5,
//       amount: 1,
//       id: "honeycomb_block",
//     },
//     {
//       slot: 6,
//       amount: 1,
//       id: "bell",
//     },
//     {
//       slot: 7,
//       amount: 1,
//       id: "orange_tulip",
//     },
//     {
//       slot: 8,
//       amount: 1,
//       id: "horn_coral",
//     },
//     {
//       slot: 9,
//       amount: 1,
//       id: "experience_bottle",
//     },
//     {
//       slot: 10,
//       amount: 1,
//       id: "flower_pot",
//     },
//     {
//       slot: 11,
//       amount: 1,
//       id: "glow_berries",
//     },
//     {
//       slot: 12,
//       amount: 1,
//       id: "gold_block",
//     },
//     {
//       slot: 13,
//       amount: 1,
//       id: "writable_book",
//     },
//     {
//       slot: 14,
//       amount: 1,
//       id: "gold_block",
//     },
//     {
//       slot: 15,
//       amount: 1,
//       id: "glow_berries",
//     },
//     {
//       slot: 16,
//       amount: 1,
//       id: "flower_pot",
//     },
//     {
//       slot: 17,
//       amount: 1,
//       id: "experience_bottle",
//     },
//     {
//       slot: 18,
//       amount: 1,
//       id: "horn_coral",
//     },
//     {
//       slot: 19,
//       amount: 1,
//       id: "orange_tulip",
//     },
//     {
//       slot: 20,
//       amount: 1,
//       id: "bell",
//     },
//     {
//       slot: 21,
//       amount: 1,
//       id: "honeycomb_block",
//     },
//     {
//       slot: 22,
//       amount: 1,
//       id: "honey_bottle",
//     },
//     {
//       slot: 23,
//       amount: 1,
//       id: "honeycomb_block",
//     },
//     {
//       slot: 24,
//       amount: 1,
//       id: "bell",
//     },
//     {
//       slot: 25,
//       amount: 1,
//       id: "orange_tulip",
//     },
//     {
//       slot: 26,
//       amount: 1,
//       id: "horn_coral_fan",
//     },
//   ],
//   minecraft_custom: '\u003Cspan style="color: #E6A500"\u003EС Днем Рождения!\u003C/span\u003E',
// };

const DEFAULT_RESULT = {
  id: "stone",
  amount: 64,
};
const DEFAULT_ITEM = {
  id: "deepslate_diamond_ore",
  amount: 4,
};

const MIN_DESCRIPTION = 24;
const MAX_DESCRIPTION = 65535;

const FIREWORK_ROCKET_DURATION = [
  { value: "1", name: "1" },
  { value: "2", name: "2" },
  { value: "3", name: "3" },
];

const SelectItem = (select) => {
  const [id, setId] = useState(null);
  const [name, setName] = useState(null);
  const [lore, setLore] = useState(null);

  if (lore) {
    console.log(prepareLite(lore[0]));
    console.log(prepareLite(lore[1]));
    console.log(prepareLite(lore[2]));
    console.log(prepareLite(lore[3]));
    console.log(prepareLite(lore[4]));
  }

  return (
    <div>
      <datalist id="testa">
        {listId.map((e, i) => (
          <option key={i} value={e} />
        ))}
      </datalist>
      <FormTitle title="ID предмета:" count={false} required={true} />
      <Input list="testa" onChange={(e) => setId(e.target.value)} />
      {id === "firework_rocket" ? (
        <>
          <FormTitle title="Длительность полёта:" count={false} required={true} />
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

  const [main, setMain] = useState({ result: { id: "", amount: 1 }, item: { id: "", amount: 1 } });

  const [description, setDescription] = useState(null);
  const [descriptionLength, setDescriptionLength] = useState(0);
  const [errorMessagePostDescription, setErrorMessagePostDescription] = useState("");

  const [editItemModal, setEditItemModal] = useState(false);

  const openEditItem = () => {
    setEditItemModal(true);
  };

  const closeEditItem = () => {
    setEditItemModal(false);
  };

  if (isLoading) {
    return <Preload full={false} />;
  }

  return (
    <div className={classNames(styles["user_goods_edit"])}>
      <BackButton
        onClick={() => {
          navigate(-1);
        }}
      />
      <div className={classNames(styles["offers"])}>
        <div className={classNames(styles["item_box"])}>
          <div onClick={openEditItem}>предмет</div>
          {/*<OneItem item={main.item} onClick={openEditItem} big={true} />*/}
          <span className={classNames(styles["edit_name"])}>Редактировать</span>
        </div>
        <div className={classNames(styles["arrow_box"])}>
          <span className={classNames(styles["arrow"])}>&#10132;</span>
        </div>
        <div className={classNames(styles["item_box"])}>
          {/*<OneItem item={main.result} onClick={openEditItem} big={true} />*/}
          <div onClick={openEditItem}>результат</div>
          <span className={classNames(styles["edit_name"])}>Редактировать</span>
        </div>
      </div>
      <div className={classNames(styles["comment"])}>
        <FormTitle
          title="Комментарий к товару:"
          min={MIN_DESCRIPTION}
          max={MAX_DESCRIPTION}
          length={descriptionLength}
        />
        <TextEditor size="small" value={description} setValue={setDescription} textLength={setDescriptionLength} />
      </div>
      <div className={classNames(styles["actions"])}>
        <Button view="submit" label="Сохранить" />
        <Button view="view" label="Отложить" />
        <Button view="delete" label="Удалить" />
        {/*{id === "new" ? null : <Button view="delete" label="Удалить" />}*/}
      </div>

      <MyModal open={editItemModal} close={closeEditItem}>
        <SelectItem />
        <Button view="submit" label="Подтвердить" onClick={closeEditItem} />
      </MyModal>
    </div>
  );
};

export default UserGoodsEdit;
