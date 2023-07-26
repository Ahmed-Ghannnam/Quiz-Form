import { combineReducers } from "@reduxjs/toolkit";
import { NameReducer } from "../Slice/Slice";
import { questionReducer } from "../Slice/ThunkSlice";
export const rootReducer = combineReducers({
  nameslice: NameReducer,
  questionReducer: questionReducer,
});
