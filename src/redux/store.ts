import { configureStore } from "@reduxjs/toolkit";

import thunk from "redux-thunk";
import reducer from "./reducer";

const store = configureStore({
  reducer,
  middleware: [thunk],
  devTools: import.meta.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
