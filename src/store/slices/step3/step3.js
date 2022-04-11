import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
  organization: ""
};

const step3Slice = createSlice({
  name: "step3",
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

export const step3Actions = step3Slice.actions;
export default step3Slice.reducer;
