"use client";

import React from "react";

import cs from "../../../../scss/helpers.module.scss";
import s from "./skeletonText.module.scss";

export const SkeletonText: React.FC = () => {
  return <div className={`${s.root} ${cs.skeleton}`}></div>;
};
