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

  // **
  React.useEffect(() => {
    if (!articleRef.current) return;

    const articleSH = articleRef.current.scrollHeight;
    if (articleSH > maxHeight) {
      setIsBtnVisible(true);
      return;
    }

    setIsBtnVisible(false);
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

  // const html =
  //   "ffweioj ofewijo wefjfeo ij 29f ejwof0j3 20j9 f0ewji f023j 0fjew0 jif32i f0weji 0fj32ffweioj ofewijo wefjfeo ij 29f ejwof0j3 20j9 f0ewji f023j 0fjew0 jif32i f0weji 0fj32 0fjiwdo fijwe0fji 230fj odij fowejif o32jio0fj doifj eo2jf ewijf 2jf0 jew fij2 ijfodsj f02j foewij f32j9f 0ejosf 2390jf ffweioj ofewijo wefjfeo ij 29f ejwof0j3 20j9 f0ewji f023j 0fjew0 jif32i f0weji 0fj32 0fjiwdo fijwe0fji 230fj odij fowejif o32jio0fj doifj eo2jf ewijf 2jf0 jew fij2 ijfodsj f02j foewij f32j9f 0ejosf 2390jf ffweioj ofewijo wefjfeo ij 29f ejwof0j3 20j9 f0ewji f023j 0fjew0 jif32i f0weji 0fj32 0fjiwdo fijwe0fji 230fj odij fowejif o32jio0fj doifj eo2jf ewijf 2jf0 jew fij2 ijfodsj f02j foewij f32j9f 0ejosf 2390jf ffweioj ofewijo wefjfeo ij 29f ejwof0j3 20j9 f0ewji f023j 0fjew0 jif32i f0weji 0fj32 0fjiwdo fijwe0fji 230fj odij fowejif o32jio0fj doifj eo2jf ewijf 2jf0 jew fij2 ijfodsj f02j foewij f32j9f 0ejosf 2390jf ffweioj ofewijo wefjfeo ij 29f ejwof0j3 20j9 f0ewji f023j 0fjew0 jif32i f0weji 0fj32 0fjiwdo fijwe0fji 230fj odij fowejif o32jio0fj doifj eo2jf ewijf 2jf0 jew fij2 ijfodsj f02j foewij f32j9f 0ejosf 2390jf ffweioj ofewijo wefjfeo ij 29f ejwof0j3 20j9 f0ewji f023j 0fjew0 jif32i f0weji 0fj32 0fjiwdo fijwe0fji 230fj odij fowejif o32jio0fj doifj eo2jf ewijf 2jf0 jew fij2 ijfodsj f02j foewij f32j9f 0ejosf 2390jf 0fjiwdo fijwe0fji 230fj odij fowejif o32jio0fj doifj eo2jf ewijf 2jf0 jew fij2 ijfodsj f02j foewij f32j9f 0ejosf 2390jf fjeiow foweijf jfoeiw jfoewi jf0oewjo ofeilwffweioj ofewijo wefjfeo ij 29f ejwof0j3 20j9 f0ewji f023j 0fjew0 jif32i f0weji 0fj32ffweioj ofewijo wefjfeo ij 29f ejwof0j3 20j9 f0ewji f023j 0fjew0 jif32i f0weji 0fj32 0fjiwdo fijwe0fji 230fj odij fowejif o32jio0fj doifj eo2jf ewijf 2jf0 jew fij2 ijfodsj f02j foewij f32j9f 0ejosf 2390jf ffweioj ofewijo wefjfeo ij 29f ejwof0j3 20j9 f0ewji f023j 0fjew0 jif32i f0weji 0fj32 0fjiwdo fijwe0fji 230fj odij fowejif o32jio0fj doifj eo2jf ewijf 2jf0 jew fij2 ijfodsj f02j foewij f32j9f 0ejosf 2390jf ffweioj ofewijo wefjfeo ij 29f ejwof0j3 20j9 f0ewji f023j 0fjew0 jif32i f0weji 0fj32 0fjiwdo fijwe0fji 230fj odij fowejif o32jio0fj doifj eo2jf ewijf 2jf0 jew fij2 ijfodsj f02j foewij f32j9f 0ejosf 2390jf ffweioj ofewijo wefjfeo ij 29f ejwof0j3 20j9 f0ewji f023j 0fjew0 jif32i f0weji 0fj32 0fjiwdo fijwe0fji 230fj odij fowejif o32jio0fj doifj eo2jf ewijf 2jf0 jew fij2 ijfodsj f02j foewij f32j9f 0ejosf 2390jf ffweioj ofewijo wefjfeo ij 29f ejwof0j3 20j9 f0ewji f023j 0fjew0 jif32i f0weji 0fj32 0fjiwdo fijwe0fji 230fj odij fowejif o32jio0fj doifj eo2jf ewijf 2jf0 jew fij2 ijfodsj f02j foewij f32j9f 0ejosf 2390jf ffweioj ofewijo wefjfeo ij 29f ejwof0j3 20j9 f0ewji f023j 0fjew0 jif32i f0weji 0fj32 0fjiwdo fijwe0fji 230fj odij fowejif o32jio0fj doifj eo2jf ewijf 2jf0 jew fij2 ijfodsj f02j foewij f32j9f 0ejosf 2390jf 0fjiwdo fijwe0fji 230fj odij fowejif o32jio0fj doifj eo2jf ewijf 2jf0 jew fij2 ijfodsj f02j foewij f32j9f 0ejosf 2390jf fjeiow foweijf jfoeiw jfoewi jf0oewjo ofeilw ";

  // const html =
  //   "ffweioj ofewijo wefjfeo ij 29f ejwof0j3 20j9 f0ewji f023j 0fjew0 jif32i f0weji 0fj32ffweioj ofewijo wefjfeo ij 29f ejwof0j3 20j9 f0ewji f023j 0fjew0 jif32i f0weji 0fj32 0fjiwdo fijwe0fji 230fj odij fowejif o32jio0fj doifj eo2jf ewijf 2jf0 jew fij2 ijfodsj f02j foewij f32j9f 0ejosf 2390jf ffweioj ofewijo wefjfeo ij 29f ejwof0j3 20j9 f0ewji f023j 0fjew0 jif32i f0weji 0fj32 0fjiwdo fijwe0fji 230fj odij fowejif o32jio0fj doifj eo2jf ewijf 2jf0 jew fij2 ijfodsj f02j foewij f32j9f 0ejosf 2390jf ffweioj ofewijo wefjfeo ij 29f ejwof0j3 20j9 f0ewji f023j 0fjew0 jif32i f0weji 0fj32 0fjiwdo fijwe0fji 230fj odij fowejif o32jio0fj doifj eo2jf ewijf 2jf0 jew fij2 ijfodsj f02j foewij f32j9f 0ejosf 2390jf ffweioj ofewijo wefjfeo ij 29f ejwof0j3 20j9 f0ewji f023j 0fjew0 jif32i f0weji 0fj32 0fjiwdo fijwe0fji 230fj odij fowejif o32jio0fj doifj eo2jf ewijf 2jf0 jew fij2 ijfodsj f02j foewij f32j9f 0ejosf 2390jf ffweioj ofewijo wefjfeo ij 29f ejwof0j3 20j9 f0ewji f023j 0fjew0 jif32i f0weji 0fj32 0fjiwdo fijwe0fji 230fj odij fowejif o32jio0fj doifj eo2jf ewijf 2jf0 jew fij2 ijfodsj f02j foewij f32j9f 0ejosf 2390jf ffweioj ofewijo wefjfeo ij 29f ejwof0j3 20j9 f0ewji f023j";

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
