// Step 1: Import Store from Redux
// Step 2: Create Reducer
// Step 3: Create Store
// Step 4: Subscribe to Store
// Step 5: Dispatch Actions

import { createStore } from "redux";

const initialState = {count:0, page: 1, order: "desc", showCounter: true};

const reducerFunction = (state=initialState, action) => {
switch(action.type) {
    case "increment":
        return {
            count: state.count + 1,
            showCounter: state.showCounter
        }
    case "decrement":
        return {
            count: state.count - 1,
            showCounter: state.showCounter
        }   
    case "increase":
        return {
            count: state.count + action.payload,
            showCounter: state.showCounter
        }       
    case "toggleCounter":
        return {
            count: state.count,
            showCounter: !state.showCounter
        }      
    default:
        return state;    
    }
}

// Create Store
const store = createStore(reducerFunction);

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