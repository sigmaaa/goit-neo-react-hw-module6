import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "contacts",
  initialState: {
    name: "",
  },
  reducers: {
    changeFilter(state, action) {
      state.name = action.payload;
    },
  },
});

export const { changeFilter } = filtersSlice.actions;
export default filtersSlice.reducer;
