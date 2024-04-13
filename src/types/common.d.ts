// **
type ToastTypesType = ["warning", "error", "info", "success", undefined];
type ToastTypeType = ToastTypesType[number];

// **
type ReviewType = {
  id: number;
  text: string;
};

type ProductType = {
  id: number;
  image_url: string;
  description: string;
  title: string;
  price: number;
};
