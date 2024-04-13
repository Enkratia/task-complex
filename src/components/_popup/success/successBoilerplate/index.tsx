import React from "react";

import { setOverflowHidden } from "../../../../utils/customFunctions";

import cs from "../../../../scss/helpers.module.scss";
import s from "./successBoilerplate.module.scss";
import Succession from "../../../../../public/img/sucession.svg";

type SuccessBoilerplatePopupProps = {
  onSuccessClick: (value: boolean) => void;
  title: string;
};

export const SuccessBoilerplatePopup: React.FC<SuccessBoilerplatePopupProps> = ({
  onSuccessClick,
  title,
}) => {
  React.useEffect(() => {
    setOverflowHidden(true);

    return () => setOverflowHidden(false);
  }, []);

  return (
    <div className={s.root}>
      <div className={s.wrapper}>
        <div className={s.content}>
          <Succession aria-hidden="true" />

          <h1 className={`${s.title} ${cs.title}`}>{title}</h1>

          <p className={s.descr}>Спасибо за покупку</p>

          <div className={s.btns}>
            <button className={`${s.btn} ${cs.btn}`} onClick={() => onSuccessClick(true)}>
              готово
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
