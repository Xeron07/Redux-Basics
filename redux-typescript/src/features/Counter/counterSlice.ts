import { createSlice } from "@reduxjs/toolkit";

interface Props {
  count: number;
}

const initialState: Props = {
  count: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increament: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    increamentByValue: (state, action) => {
      state.count += action.payload;
    },
  },
});

export const { increament, decrement, increamentByValue } =
  counterSlice.actions;

export default counterSlice.reducer;
