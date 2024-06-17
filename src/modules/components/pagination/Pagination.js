import classNames from "classnames";
import React, { useState } from "react";
import _ from "lodash";

import styles from "./Pagination.module.scss";

const LIMIT = [5, 10, 15, 25, 50];

const Pagination = ({ content = [], customLimit = 5, handle = false }) => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(customLimit);

  let totalPage = Math.ceil(content.length / limit);
  let pageFix;

  const contentFilter = (page, limit) => {
    let array = [];
    for (let i = (page - 1) * limit; i < page * limit && content[i]; i++) {
      array.push(content[i]);
    }

    return array;
  };

  const getContent = contentFilter(page, limit);

  if (page <= totalPage) {
    pageFix = page;
  } else {
    setPage(totalPage);
    pageFix = page;
  }

  const returnPaginationRange = (totalPage, page, limit, siblings) => {
    let totalPageNoInArray = 7 + siblings;

    if (totalPageNoInArray >= totalPage) {
      return _.range(1, totalPage + 1);
    }

    let leftSiblingsIndex = Math.max(page - siblings, 1);
    let rightSiblingsIndex = Math.min(page + siblings, totalPage);

    let showLeftDots = leftSiblingsIndex > 2;
    let showRightDots = rightSiblingsIndex < totalPage - 2;

    if (!showLeftDots && showRightDots) {
      let leftItemsCount = 3 + 2 * siblings;
      let leftRange = _.range(1, leftItemsCount + 1);

      return [...leftRange, "left_dots", totalPage];
    } else if (showLeftDots && !showRightDots) {
      let rightItemsCount = 3 + 2 * siblings;
      let rightRange = _.range(totalPage - rightItemsCount + 1, totalPage + 1);

      return [1, "right_dots", ...rightRange];
    } else {
      let middleRange = _.range(leftSiblingsIndex, rightSiblingsIndex + 1);

      return [1, "left_dots", ...middleRange, "right_dots", totalPage];
    }
  };

  let array = returnPaginationRange(totalPage, pageFix, limit, 1);

  const handlePageChange = (value) => {
    if (value === "full_left" || value === "left_dots") {
      setPage(1);
    } else if (value === "left") {
      if (page !== 1) setPage(page - 1);
    } else if (value === "right") {
      if (page !== totalPage) setPage(page + 1);
    } else if (value === "full_right" || value === "right_dots") {
      setPage(totalPage);
    } else {
      setPage(value);
    }
  };

  return (
    <div className={classNames(styles["pagination_box"])}>
      {getContent.map((el, index) => (
        <div className={classNames(styles["content"])} key={index}>
          {el}
        </div>
      ))}
      <div className={classNames(styles["nav"])}>
        {handle && (
          <select
            className={classNames(styles["sel"])}
            onChange={(e) => {
              setLimit(Number(e.target.value));
            }}
          >
            {LIMIT.map((e, i) => (
              <option value={e}>{e}</option>
            ))}
          </select>
        )}
        <ul className={classNames(styles["pagination"])}>
          <li className={classNames(styles["page_swipe"], styles["btn"])} onClick={() => handlePageChange("full_left")}>
            {"<<"}
          </li>
          <li className={classNames(styles["page_swipe"], styles["btn"])} onClick={() => handlePageChange("left")}>
            {"<"}
          </li>
          {array.map((value, index) => (
            <li
              key={index}
              className={classNames(styles["page_swipe"], {
                [styles["active"]]: value === page,
              })}
              onClick={() => handlePageChange(value)}
            >
              {value === "left_dots" || value === "right_dots" ? "..." : value}
            </li>
          ))}
          <li className={classNames(styles["page_swipe"], styles["btn"])} onClick={() => handlePageChange("right")}>
            {">"}
          </li>
          <li
            className={classNames(styles["page_swipe"], styles["btn"])}
            onClick={() => handlePageChange("full_right")}
          >
            {">>"}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Pagination;
