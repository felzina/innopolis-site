import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  products: JSON.parse(localStorage.getItem('favSliceProducts')) || [],
};

export const favSlice = createSlice({
  name: 'favSlice',
  initialState,
  reducers: {
    addProductToFav: (state, action) => {
      localStorage.setItem('favSliceProducts', JSON.stringify([...state.products, action.payload]))

      return {
        ...state,
        products: [...state.products, action.payload],
      };
    },

    removeProductFromFav: (state, action) => {
      localStorage.setItem('favSliceProducts', JSON.stringify(state.products.filter((item) => item !== action.payload)))

      return {
        ...state,
        products: state.products.filter((item) => item !== action.payload),
      };
    },
  },
});

export const { addProductToFav, removeProductFromFav } = favSlice.actions;

export default favSlice.reducer;