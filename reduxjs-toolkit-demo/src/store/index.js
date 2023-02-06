// Step 1: Import Store from Redux
// Step 2: Create Reducer
// Step 3: Create Store
// Step 4: Subscribe to Store
// Step 5: Dispatch Actions

/* import { createStore } from "redux"; */

import { configureStore /* createSlice */ } from "@reduxjs/toolkit";
import { authReducer } from "./authSlice";
import { counterReducer } from "./counterSlice";

// const initialState = { count: 0, showCounter: true };
// const initialAuthState = { isAuthenticated: false };

// For retrieving transformed states without making any change to already added properties
// Creates actions like counter/increment, counter/decrement automatically, here counter is the name of the slice function
// const counterSlice = createSlice({
//   name: "counter",
//   initialState: initialState,
//   reducers: {
//     increment(state) {
//       state.count++;
//     },
//     decrement(state) {
//       state.count--;
//     },
//     increase(state, action) {
//       state.count = state.count + action.payload;
//     },
//     toggleCounter(state) {
//       state.showCounter = !state.showCounter;
//     },
//   },
// });

// const authSlice = createSlice({
//   name: "auth",
//   initialState: initialAuthState,
//   reducers: {
//     login(state) {
//       state.isAuthenticated = true;
//     },
//     logout(state) {
//       state.isAuthenticated = false;
//     },
//   },
// });

// Can also be used to create store but has some issues
// const reducerFunction = (state=initialState, action) => {
// switch(action.type) {
//     case "increment":
//         return {
//             count: state.count + 1,
//             showCounter: state.showCounter
//         }
//     case "decrement":
//         return {
//             count: state.count - 1,
//             showCounter: state.showCounter
//         }
//     case "increase":
//         return {
//             count: state.count + action.payload,
//             showCounter: state.showCounter
//         }
//     case "toggleCounter":
//         return {
//             count: state.count,
//             showCounter: !state.showCounter
//         }
//     default:
//         return state;
//     }
// }

// Create Store
// const store = createStore(reducerFunction);
const store = configureStore({
  reducer: { counter: counterReducer, auth: authReducer },
});

// export const counterActions = counterSlice.actions;
// export const authActions = authSlice.actions;
export default store;

// // Subscribe to Actions
// store.subscribe(()=>console.log(store.getState()));

// // Dispatch Action
// store.dispatch({type:"increment"});
// store.dispatch({type:"increment"});
// store.dispatch({type:"increment"});
// store.dispatch({type:"decrement"});
// store.dispatch({type:"decrement"});
// store.dispatch({type:"decrements"});
