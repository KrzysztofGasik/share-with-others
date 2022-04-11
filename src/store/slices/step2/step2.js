import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
  bags: ""
};

const step2Slice = createSlice({
  name: "step2",
  initialState: initialStateValue,
  reducers: {
    add(state, action) {
      const { name, value } = action.payload;
      state[name] = value;
    },
    clear() {
      return {
        ...initialStateValue
      };
    }
  }
});

export const step2Actions = step2Slice.actions;
export default step2Slice.reducer;
