import { createSlice } from "@reduxjs/toolkit";
import { storeData } from "../../data/storeData";
const storeSlice = createSlice({
  name: "Store",
  initialState: [...storeData],
  reducers: {
    updateStore(state, action) {
      let index = state.indexOf(action.payload.itemName);
      state[index].quantity -= action.quantity;
    },
  },
});
export default storeSlice.reducer;
export const { updateStore } = storeSlice.actions;
