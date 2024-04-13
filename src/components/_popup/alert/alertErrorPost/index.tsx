import React from "react";

import { AlertBoilerplatePopup } from "../../..";

type AlertPostOrderPopupProps = {
  onAlertClick: () => void;
};

export const AlertPostOrderPopup: React.FC<AlertPostOrderPopupProps> = ({ onAlertClick }) => {
  const title = "Не удалось доставить заказ";

  return <AlertBoilerplatePopup onAlertClick={onAlertClick} title={title} />;
};
