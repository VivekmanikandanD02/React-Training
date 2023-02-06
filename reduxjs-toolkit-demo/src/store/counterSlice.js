import { createSlice } from "@reduxjs/toolkit";

const initialState = { count: 0, showCounter: true };
// For retrieving transformed states without making any change to already added properties
// Creates actions like counter/increment, counter/decrement automatically, here counter is the name of the slice function
const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    increment(state) {
      state.count++;
    },
    decrement(state) {
      state.count--;
    },
    increase(state, action) {
      state.count = state.count + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

export const counterActions = counterSlice.actions;
export const counterReducer = counterSlice.reducer;
