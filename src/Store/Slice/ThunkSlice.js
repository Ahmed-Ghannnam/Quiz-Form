import { createSlice } from "@reduxjs/toolkit";
import getQuestions from "../../middelware/AsyncThunk";

const initialState = {
  questions: [],
  errorMessage: "",
};

const questionSlice = createSlice({
  name: "AsyncThunk",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getQuestions.fulfilled, (state, action) => {
        state.questions = action.payload; // we use state not initialState
        state.errorMessage = ""; // Reset the error message on success
      })
      .addCase(getQuestions.rejected, (state, action) => {
        state.errorMessage = "The server is down";
      });
  },
});

export const questionActions = questionSlice.actions;
export const questionReducer = questionSlice.reducer;
