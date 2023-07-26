import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const getQuestions = createAsyncThunk("get/questions", async (thunkApi) => {
  const res = await axios.get("http://localhost:3004/questions");
  if (res.status !== 200) {
    return "not found";
  }
  const data = res.data;
  return data;
});

export default getQuestions;
