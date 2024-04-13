"use client";

import React from "react";

import sanitizeHtml from "sanitize-html";
import { htmlSanityzeConfig } from "../../utils/htmlSanityzeConfig";

import cs from "../../scss/helpers.module.scss";
import s from "./review.module.scss";

const maxHeight = 611;

type ReviewProps = {
  review: ReviewType;
};

export const Review: React.FC<ReviewProps> = ({ review }) => {
  const articleRef = React.useRef<HTMLButtonElement>(null);
  const btnRef = React.useRef<HTMLButtonElement>(null);

  const [isBtnVisible, setIsBtnVisible] = React.useState(false);
  const [isBtnActive, setIsBtnActive] = React.useState(false);

  const html = review.text;

  const showHideBtn = () => {
    if (!articleRef.current) return;

    const articleSH = articleRef.current.scrollHeight;
    if (articleSH > maxHeight) {
      setIsBtnVisible(true);
      return;
    }

    setIsBtnVisible(false);
  };

  // **
  React.useEffect(() => {
    window.addEventListener("resize", showHideBtn);

    return () => {
      window.removeEventListener("resize", showHideBtn);
    };
  }, []);

  React.useEffect(() => {
    showHideBtn();
  });

  React.useEffect(() => {
    if (!articleRef.current) return;

    const wrapper = articleRef.current.parentElement;
    if (!wrapper) return;

    if (isBtnActive) {
      articleRef.current.style.maxHeight = "none";
      wrapper.style.maxHeight = "none";
      return;
    }

    articleRef.current.style.maxHeight = "";
    wrapper.style.maxHeight = "";
  });

  // **
  const onBtnClick = () => {
    setIsBtnActive((b) => !b);
  };

  return (
    <div className={s.rootWrapper}>
      <article
        ref={articleRef}
        className={s.root}
        dangerouslySetInnerHTML={{ __html: sanitizeHtml(html, htmlSanityzeConfig) }}></article>

      <div className={s.moreWrapper}>
        <button
          ref={btnRef}
          className={`${s.more} ${isBtnVisible ? s.moreVisible : ""}`}
          aria-label={`${isBtnActive ? "Свернуть" : "Развернуть"} отзыв.`}
          data-review-more-active={isBtnActive ? "true" : "false"}
          onClick={onBtnClick}>
          {isBtnActive ? ".." : "..."}
        </button>
      </div>
    </div>
  );
};
