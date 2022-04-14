import { createStore, combineReducers } from "redux";
import { login_reducer } from "./login/reducer";
import { restro_reducer } from "./restrauants/reducer";

export const rootreducer = combineReducers({
  login: login_reducer,
  restaurants: restro_reducer,
});

export const store = createStore(
  rootreducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
