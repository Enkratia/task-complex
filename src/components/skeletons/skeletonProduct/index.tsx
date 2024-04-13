"use client";

import React from "react";

import cs from "../../../scss/helpers.module.scss";
import s from "./skeletonProduct.module.scss";

export const SkeletonProduct: React.FC = () => {
  return (
    <div className={s.root}>
      <div className={`${s.imageWrapper} ${cs.skeleton}`}></div>

      <div className={s.text}>
        <span className={`${s.title} ${cs.skeleton}`}></span>
        <span className={`${s.descr} ${cs.skeleton}`}></span>
        <span className={`${s.price} ${cs.skeleton}`}></span>
      </div>

      <div className={s.bottom}>
        <span className={`${s.btn} ${cs.btn} ${cs.skeleton}`}></span>
      </div>
    </div>
  );
};
