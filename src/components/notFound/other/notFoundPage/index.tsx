import React from "react";
import Link from "next/link";

import s from "./notFoundPage.module.scss";
import cs from "../../../../scss/helpers.module.scss";
import Wrong from "../../../../../public/img/default/wrong.svg";
// import NoData from "../../../../public/img/default/no-data.svg";

export const NotFoundPage: React.FC = () => {
  return (
    <div className={s.root}>
      <Wrong />

      <h2 className={`${s.title} ${cs.sectionTitle}`}>Страница не найдена</h2>

      <span className={s.subtitle}>К сожалению, запрашиваемая страница недоступна</span>

      <Link href="/" className={`${cs.btn} ${cs.btnLight}`}>
        На главную
      </Link>
    </div>
  );
};
