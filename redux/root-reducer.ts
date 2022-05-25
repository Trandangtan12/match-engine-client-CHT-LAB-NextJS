import { combineReducers } from "@reduxjs/toolkit";
import { generalReducer } from "./slice/general.slice";
import { balanceReducer } from "./slice/balance.slice";

const rootReducer = combineReducers({
  balance: balanceReducer,
  general: generalReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
