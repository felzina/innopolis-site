import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlice";
import favSlice from "./slices/favSlice";
import { logger } from "./middlewares/logger";

export const store = configureStore({
  reducer: {
    cartSlice,
    favSlice,
  },
  middleware: [logger],
})
