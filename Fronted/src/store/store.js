import { combineReducers, configureStore } from "@reduxjs/toolkit";
import commonReducer from "./features/common";
import userReducer from "./features/user";

const rootReducer = combineReducers({
  commonState: commonReducer,
  userState: userReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
