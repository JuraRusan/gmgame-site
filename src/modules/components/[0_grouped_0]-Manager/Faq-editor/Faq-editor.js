import classNames from "classnames";
import React, { useState } from "react";
import { sendRequest, useAxios } from "../../../../DataProvider";
import { useAlert } from "react-alert";
import Preload from "../../../components/preloader/Preload.js";
import TextEditor from "../../text-editor/TextEditor";
import useLoading from "../../../loading/useLoading";

import styles from "./Faq-editor.module.scss";

const FaqEditor = () => {
  const isLoading = useLoading();
  const alert = useAlert();

  const [faqId, setFaqId] = useState();
  const [show, setShow] = useState(false);
  const [category, setCategory] = useState("");
  const [question, setQuestion] = useState("");
  const [categoryList, setCategoryList] = useState([]);
  const [questionsList, setQuestionsList] = useState([]);

  const [faqList, setFaqList] = useState([]);

  const [editorValue, setEditorValue] = useState(null);
  const [editorValueLength, setEditorValueLength] = useState(0);
  const [contentValue, setContent] = useState();

  const resParams = useAxios("/api/get_faq", "GET", {});

  const resMentions = useAxios("/api/get_mentions", "GET", {});

  const saveFaq = () => {
    if (category === "") {
      alert.error("Категория не может быть пустая");
      return;
    }

    if (question === "") {
      alert.error("Вопрос не может быть пустым");
      return;
    }

    if (editorValueLength === 0) {
      alert.error("Описание не может быть пустым");
      return;
    }

    if (editorValueLength < 32) {
      alert.error("Описание слишком короткое");
      return;
    }

    let payload = {
      id: faqId || -1,
      quest: question,
      answer: editorValue,
      category: category,
      show: +show,
    };

    sendRequest("/api/save_faq", "POST", payload).then((response) => {
      if (response.message) {
        alert.success(response.message);
        setFaqId(response.quest.id);

        const newQuestionsList = [...questionsList];
        if (!newQuestionsList.includes(response.quest.quest)) {
          newQuestionsList.push(response.quest.quest);
        }
        setQuestionsList(newQuestionsList);

        const newFaqList = [...faqList];
        newFaqList.push(response.quest);
        setFaqList(newFaqList);
      } else {
        alert.error(response.error);
      }
    });
  };

  const publishFaq = () => {
    sendRequest("/api/publish_faq", "POST", {}).then((response) => {
      if (response.message) {
        alert.success(response.message);
        setFaqId(response.id);
      } else {
        alert.error(response.error);
      }
    });
  };

  function searchQuestion(value) {
    if (value === "") {
      // setQuestion('');
      setCategory("");
      setShow(false);
      setFaqId("");
    }

    const quest = faqList.filter((c) => (c.quest ? c.quest.toLowerCase().startsWith(value.toLowerCase()) : false));

    if (quest.length > 0) {
      // setQuestion(quest[0].quest);
      setCategory(quest[0].category);
      setShow(quest[0].show);
      setFaqId(quest[0].id);
    }
    if (quest.length === 0 && faqId) {
      setCategory("");
      setShow(false);
      setFaqId("");
    }

    setQuestion(value);
  }

  if (resParams.loading || resMentions.loading || isLoading) {
    return <Preload full={true} />;
  }

  if (resParams.loaded && categoryList.length === 0) {
    let uniqCategory = [];
    resParams.data.forEach((item) => {
      if (!uniqCategory.includes(item.category)) {
        uniqCategory.push(item.category);
      }
    });

    setCategoryList(uniqCategory);

    let uniqQuestions = [];
    resParams.data.forEach((item) => {
      if (!uniqQuestions.includes(item.quest)) {
        uniqQuestions.push(item.quest);
      }
    });

    setQuestionsList(uniqQuestions);
    setFaqList(resParams.data);
  }

  return (
    <div className={classNames(styles["faqEditorWrapper"])}>
      <div className={classNames(styles["topLine"])}>
        <div className={classNames(styles["textInput"])}>
          <datalist id="category_list">
            {categoryList.map((item, index) => {
              return <option key={index} value={item} />;
            })}
          </datalist>
          <datalist id="questions_list">
            {questionsList.map((item, index) => {
              return <option key={index} value={item} />;
            })}
          </datalist>
          <input
            type="text"
            list="category_list"
            className={classNames(styles["inputStyle"])}
            onChange={(e) => setCategory(e.target.value)}
            value={category}
            placeholder="Категория?"
          />
          <input
            list="questions_list"
            type="text"
            className={classNames(styles["inputStyle"])}
            onChange={(e) => searchQuestion(e.target.value)}
            value={question}
            placeholder="Вопрос?"
          />
          <div className={classNames(styles["viewBox"])}>
            <input
              className={classNames(styles["checkboxView"])}
              type="checkbox"
              onChange={(e) => setShow(e.target.checked)}
              checked={show}
            />
            <label className={classNames(styles["checkboxName"])}>Скрытие вопроса</label>
          </div>
        </div>
        <div className={classNames(styles["actionWrapper"])}>
          <button className={classNames(styles["actions"])} onClick={() => publishFaq()}>
            Опубликовать в Discord
          </button>
          <button className={classNames(styles["actions"])} onClick={() => saveFaq()}>
            Сохранить
          </button>
        </div>
      </div>

      <div className={classNames(styles["bottomLine"])}>
        <TextEditor value={editorValue} setValue={setEditorValue} textLength={setEditorValueLength} />
      </div>
    </div>
  );
};

export default FaqEditor;
