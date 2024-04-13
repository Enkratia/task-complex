"use client";

import React from "react";

import { SkeletonProduct } from "../../../components";

import cs from "../../../scss/helpers.module.scss";
import s from "./skeletonProducts.module.scss";

export const SkeletonProducts: React.FC = () => {
  return (
    <section className={s.root}>
      <div className={`${s.container} ${cs.container}`}>
        <ul className={s.products}>
          {[...Array(6)].map((_, i) => (
            <li key={i} className={s.product}>
              <SkeletonProduct key={i} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
