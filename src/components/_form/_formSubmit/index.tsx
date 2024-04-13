import React from "react";

import cs from "../../../scss/helpers.module.scss";

type FormSubmitProps = {
  classNameWrapper: string;
  classNameBtn: string;
  text: string;
};

export const FormSubmit: React.FC<FormSubmitProps> = ({ classNameWrapper, classNameBtn, text }) => {
  return (
    <div className={`${classNameWrapper} ${cs.btnWrapper}`}>
      <button className={classNameBtn} type="submit">
        {text}
      </button>
    </div>
  );
};

/* <FormSubmit
  classNameWrapper=""
  classNameBtn={`${s.submit} ${cs.btn} ${cs.btnLg}`}
  text="Send Message"
  requestStatus={requestStatus}
/>; */
