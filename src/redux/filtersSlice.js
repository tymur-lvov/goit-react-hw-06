import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  //   contacts: {
  //     items: [],
  //   },
  filters: {
    name: "",
  },
};

export const filtersSlice = createSlice({
  name: "filters",
  initialState,
  selectors: {
    selectNameFilter: (state) => state.contact,
  },
  reducers: {
    changeFilter: (state, { payload }) => {
      console.log("changeFilter");
    },
  },
});

export const selectNameFilter = filtersSlice.selectors;
export const { changeFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
