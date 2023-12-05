import classNames from "classnames";
import React, {useMemo, useState} from "react";
import {useAxios} from '../../../DataProvider';
import Preload from "../../components/preloader/Preload";
import FaqSvgComponent from "../../../bases/icons/faqSvg/FaqSvg";
import useLoading from "../../loading/useLoading";

import styles from "./Faq.module.scss";
import "aos/dist/aos.css";

const Faq = () => {

  const isLoading = useLoading();

  const [tabsFaqList, setTabsFaqList] = useState([]);
  const [currentTab, setCurrentTab] = useState(0);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const selectedTab = useMemo(() => tabsFaqList[currentTab], [currentTab, tabsFaqList]);

  const handleTabClick = (id) => {
    setCurrentTab(id);
  };

  const resFaq = useAxios(
    "/api/get_faq",
    'GET',
    {}
  );

  if (resFaq.loading || isLoading) {
    return <Preload full={true}/>
  }

  if (resFaq.loaded && tabsFaqList.length === 0) {
    let tabs = {};
    resFaq.data.forEach((el, i) => {
      function generateUniqueHash(length) {
        const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        let hash = '';

        for (let i = 0; i < length; i++) {
          const randomIndex = Math.floor(Math.random() * characters.length);
          hash += characters[randomIndex];
        }

        return hash;
      }

      if (tabs[el.category]) {
        tabs[el.category].push({
          id: el.id,
          forIndex: generateUniqueHash(24),
          question: el.quest,
          answer: prepareAnswer(el.answer)
        })
      } else {
        // console.log(prepareAnswer(el.answer));
        tabs[el.category] = [{
          id: el.id,
          forIndex: generateUniqueHash(24),
          question: el.quest,
          answer: prepareAnswer(el.answer)
        }]
      }
    })

    setTabsFaqList(Object.keys(tabs).map((tab, i) => ({
      id: i,
      tabTitle: tab,
      titleInf: ' ',
      itfContent: tabs[tab]
    })))
    setCurrentTab(0);
  }

  function prepareAnswer(answer) {
    const prepareAnswer = JSON.parse(answer).map((el, i) => {
      return el.children.map((ch, j) => {
        if (ch.text) {
          if (ch.bold) {
            return `<b>${ch.text}</b>`
          }
          return ch.text;
        }
        if (ch.character) {
          if (ch.character.type === 'user') {
            return `@${ch.character.name}`
          }
          const linkClass = classNames(styles["link"])
          return `<a class="${linkClass}" href='https://discord.com/channels/723912565234728972/${ch.character.id}' target="_blank" rel="noreferrer">{"#"}${ch.character.name}</a>`
        }
      }).join('') + '<br/>';
    }).join('');

    return prepareAnswer;
  }

  return (
    <div className={classNames(styles["mainFaqBox"])}>
      {tabsFaqList.length > 1 &&
        <div className={classNames(styles["faqBox"])}>
          <div className={classNames(styles["faqTitleWrapper"])}>
          <span>
            <FaqSvgComponent width="100%" height="100%" color="#f4f4f4"/>
          </span>
            <h2 className={classNames(styles["titleH2Styles"])}>Часто задаваемые вопросы</h2>
          </div>
          <div className={classNames(styles["wrapperTabsFaq"])}>
            <div className={classNames(styles["tabs"])}>
              {tabsFaqList.map((tab, i) => (
                <button
                  className={classNames(styles["buttonFaqTab"])}
                  key={i}
                  id={tab.id}
                  disabled={currentTab === i}
                  onClick={handleTabClick.bind(null, i)}
                >
                  {tab.tabTitle.charAt(0).toUpperCase() + tab.tabTitle.slice(1)}
                </button>
              ))}
            </div>
            <div className={classNames(styles["content"])}>
              <div className={classNames(styles["idTab"])}>
                <div className={classNames(styles["tabOne"])}>
                  <h3 className={classNames(styles["title"])}>{selectedTab?.tabTitle.charAt(0).toUpperCase() + selectedTab?.tabTitle.slice(1)}</h3>
                  <p className={classNames(styles["info"])}>{selectedTab?.titleInf}</p>
                  <div className={classNames(styles["lists"])}>
                    {selectedTab?.itfContent.map((el) => {
                      return (
                        <div className={classNames(styles["listOne"])} key={el.id}>
                          <input className={classNames(styles["oneInputCheckBox"])} id={el.forIndex} type="checkbox"/>
                          <label className={classNames(styles["question"])} htmlFor={el.forIndex}>&#8226; {el.question}</label>
                          <p className={classNames(styles["answerWrapperBox"])} dangerouslySetInnerHTML={{__html: el.answer}}>
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    </div>
  );
};

export default Faq;
