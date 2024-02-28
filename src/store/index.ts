// src/app/store.ts
import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./productsSlice/index";

export const store = configureStore({
  reducer: {
    products: productsReducer,
  },
});

// Inferir el `RootState` y `AppDispatch` tipos del store mismo
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
