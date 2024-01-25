import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  products: JSON.parse(localStorage.getItem('cartSliceProducts')) || [],
};

export const cartSlice = createSlice({
  name: 'cartSlice',
  initialState,
  reducers: {
    addProductToCart: (state, action) => {
      localStorage.setItem('cartSliceProducts', JSON.stringify([...state.products, action.payload]))

      return {
        ...state,
        products: [...state.products, action.payload],
      };
    },

    removeProductFromCart: (state, action) => {
      localStorage.setItem('cartSliceProducts', JSON.stringify(state.products.filter((item) => item !== action.payload)))

      return {
        ...state,
        products: state.products.filter((item) => item !== action.payload),
      };
    },
  },
});

export const { addProductToCart, removeProductFromCart } = cartSlice.actions;

export default cartSlice.reducer;