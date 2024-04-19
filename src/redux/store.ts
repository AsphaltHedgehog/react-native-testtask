import { configureStore } from "@reduxjs/toolkit";
import { imagesReducer } from "./imgs/slice";


export const store = configureStore({
  reducer: {
    imgs: imagesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;