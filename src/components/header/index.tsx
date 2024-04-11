import React from "react";

import cs from "../../scss/helpers.module.scss";
import s from "./header.module.scss";

export const Header: React.FC = () => {
  return (
    <header className={s.root}>
      <div className={`${s.container} ${cs.container} ${cs.containerWide}`}>
        <p className={s.title}>тестовое задание</p>
      </div>
    </header>
  );
};
