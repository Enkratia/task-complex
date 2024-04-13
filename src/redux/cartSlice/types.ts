export type CartProductType = {
  count: string;
  product: ProductType;
};

export type CartSliceType = {
  isCartChanged: boolean;
  cart: CartProductType[];
};
