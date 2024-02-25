import { configureStore } from "@reduxjs/toolkit";
import { alertSlice } from "./features/alertSlice";
import sellItemsSlice from "./features/sellSlice";
import storeSlice from "./features/storeSlice";

const store = configureStore({
  reducer: {
    alerts: alertSlice.reducer,
    storeData: storeSlice,
    sellItems: sellItemsSlice,
  },
});

export default store;
