import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
  street: "",
  city: "",
  postal: "",
  phone: "",
  date: "",
  hour: ""
};

const step4Slice = createSlice({
  name: "step4",
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

export const step4Actions = step4Slice.actions;
export default step4Slice.reducer;
