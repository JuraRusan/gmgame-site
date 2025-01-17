import classNames from "classnames";
import React, { useMemo, useState } from "react";
import { useAxios } from "../../../DataProvider";
import Preload from "../../components/preloader/Preload";
import FaqSvgComponent from "../../../bases/icons/faqSvg/FaqSvg";
import useLoading from "../../loading/useLoading";
import Title from "../../components/title/Title";
import { prepare } from "../../components/text-editor/functions/Prepare";
import Accordion from "../../components/accordion/Accordion";

import styles from "./Faq.module.scss";

const Faq = () => {
  const isLoading = useLoading();

  const [tabsFaqList, setTabsFaqList] = useState([]);
  const [currentTab, setCurrentTab] = useState(0);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const selectedTab = useMemo(() => tabsFaqList[currentTab], [currentTab, tabsFaqList]);

  const handleTabClick = (id) => {
    setCurrentTab(id);
  };

  const resFaq = useAxios("/api/get_faq", "GET", {});

  if (resFaq.loading || isLoading) {
    return <Preload full={true} />;
  }

  if (resFaq.loaded && tabsFaqList.length === 0) {
    let tabs = {};

    resFaq.data.forEach((el, i) => {
      if (tabs[el.category]) {
        tabs[el.category].push({
          id: el.id,
          question: el.quest,
          answer: prepare(el.answer, true),
        });
      } else {
        tabs[el.category] = [
          {
            id: el.id,
            question: el.quest,
            answer: prepare(el.answer, true),
          },
        ];
      }
    });

    setTabsFaqList(
      Object.keys(tabs).map((tab, i) => ({
        id: i,
        tabTitle: tab,
        titleInf: " ",
        itfContent: tabs[tab],
      }))
    );

    setCurrentTab(0);
  }

  return (
    <div className={classNames(styles["mainFaqBox"])}>
      {tabsFaqList.length > 1 && (
        <div className={classNames(styles["faqBox"])}>
          <div className={classNames(styles["faqTitleWrapper"])}>
            <Title ico={<FaqSvgComponent width="100%" height="100%" />}>Часто задаваемые вопросы</Title>
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
                  <h3 className={classNames(styles["title"])}>
                    {selectedTab?.tabTitle.charAt(0).toUpperCase() + selectedTab?.tabTitle.slice(1)}
                  </h3>
                  <p className={classNames(styles["info"])}>{selectedTab?.titleInf}</p>
                  <div className={classNames(styles["lists"])}>
                    {selectedTab?.itfContent.map((el) => {
                      return <Accordion el={el} key={el.id} />;
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Faq;
