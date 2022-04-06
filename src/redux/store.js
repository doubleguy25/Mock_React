import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { User } from "./reducer/reducer";

const rootReducer = combineReducers({
  User: User,
});

const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;
