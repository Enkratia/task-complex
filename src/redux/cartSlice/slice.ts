import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CartProductType, CartSliceType } from "./types";

const initialState: CartSliceType = {
  isCartChanged: false,
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setProduct: (state, payload: PayloadAction<CartProductType>) => {
      state.isCartChanged = true;

      const count = payload.payload.count;
      const product = payload.payload.product;

      if (count === "0") {
        state.cart = state.cart.filter((elem) => elem.product.id !== product.id);
        return;
      }

      const isExist = state.cart.findIndex((elem) => elem.product.id === product.id);

      if (isExist === -1) {
        state.cart = [...state.cart, payload.payload];
      } else {
        state.cart = [
          ...state.cart.slice(0, isExist),
          ...state.cart.slice(isExist + 1),
          payload.payload,
        ];
      }
    },
    setProducts: (state, payload: PayloadAction<CartProductType[]>) => {
      state.cart = payload.payload;
    },
  },
});

export const { setProduct, setProducts } = cartSlice.actions;

export default cartSlice.reducer;
