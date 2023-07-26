import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  namedata: "",
  emaildata: "",
  SelectedValues: "",
  correctAnswer: [],
};
const Slice = createSlice({
  name: "data",
  initialState,
  reducers: {
    catchname: (state, action) => {
      state.namedata = action.payload;
    },
    catchemail: (state, action) => {
      state.emaildata = action.payload;
    },
    catchselected: (state, action) => {
      state.SelectedValues = action.payload;
    },
    catchCorrectAnswer: (state, action) => {
      state.correctAnswer = action.payload;
    },
  },
});

export const NameAction = Slice.actions;
export const NameReducer = Slice.reducer;
