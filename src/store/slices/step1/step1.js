import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
  "mens-clothes": false,
  "women-clothes": false,
  "boys-clothes": false,
  "girls-clothes": false,
  "toys-girls": false,
  "toys-boys": false,
  "books-adult": false,
  "books-kids": false,
  "other-things": "",
};

const step1Slice = createSlice({
  name: "step1",
  initialState: initialStateValue,
  reducers: {
    add(state, action) {
      const { name, value } = action.payload;
      state[name] = value;
    },
    clear() {
      return {
        ...initialStateValue,
      };
    },
  },
});

export const step1Actions = step1Slice.actions;
export default step1Slice.reducer;
