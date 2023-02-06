// Step 1: Import Store from Redux
// Step 2: Create Reducer
// Step 3: Create Store
// Step 4: Subscribe to Store
// Step 5: Dispatch Actions


const { createStore } = require("redux");

const initialState = {count:0};

const reducerFunction = (state=initialState, action) => {
switch(action.type) {
    case "increment":
        return {
            count: state.count + 1
        }
    case "decrement":
        return {
            count: state.count - 1
        }   
    default:
        return state;    
    }
}

// Create Store
const store = createStore(reducerFunction);

// Subscribe to Actions
store.subscribe(()=>console.log(store.getState()));

// Dispatch Action
store.dispatch({type:"increment"});
store.dispatch({type:"increment"});
store.dispatch({type:"increment"});
store.dispatch({type:"decrement"});
store.dispatch({type:"decrement"});
store.dispatch({type:"decrements"});