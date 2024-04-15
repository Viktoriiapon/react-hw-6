import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  filters: {
    name: "",
  },
};
const filterSlice = createSlice({
  name: "filter",
  initialState: INITIAL_STATE,
  reducers: {
    changeFilter(state, action) {
      state.filters.name = action.payload;
    },
  },
});
export const { changeFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
