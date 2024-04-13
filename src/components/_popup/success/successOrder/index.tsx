import React from "react";

import { SuccessBoilerplatePopup } from "../../..";

type SuccessOrderPopupProps = {
  onSuccessClick: (value: boolean) => void;
};

export const SuccessOrderPopup: React.FC<SuccessOrderPopupProps> = ({ onSuccessClick }) => {
  const title = "Ваш заказ успешно отправлен";

  return <SuccessBoilerplatePopup onSuccessClick={onSuccessClick} title={title} />;
};
