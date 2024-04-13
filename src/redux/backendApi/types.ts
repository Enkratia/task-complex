export type GetProductsType = {
  page: number;
  amount: number;
  total: number;
  products: ProductType[];
};

// **
type PostOrderCartType = {
  id: number;
  quantity: number;
};

export type PostOrderType = {
  phone: string;
  cart: PostOrderCartType[];
};
