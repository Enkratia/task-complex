"use client";

import React from "react";

import cs from "../../../scss/helpers.module.scss";
import s from "./skeletonReviews.module.scss";

export const SkeletonReviews: React.FC = () => {
  return (
    <div className={s.root}>
      <div className={`${s.container} ${cs.container}`}>
        <div className={s.list}>
          {[...Array(2)].map((_, i) => (
            <div key={i} className={`${s.item} ${cs.skeleton}`}></div>
          ))}
        </div>
      </div>
    </div>
  );
};
