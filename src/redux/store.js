import { createStore, applyMiddleware, combineReducers } from "redux";

import thunk from "redux-thunk";
import UserReducer from "./reducer/user";
import SavingReducer from "./reducer/saving";

let reducer = combineReducers({
  UserReducer,
  SavingReducer,
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
