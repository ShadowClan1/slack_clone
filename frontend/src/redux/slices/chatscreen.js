import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const getAllUsers = createAsyncThunk(
'getAllUsers' , async (thunkAPI)=>{




}
)

const initialState = {
  array: [],
  single: {
    id: 7,
    name: "radha",
    mobile: 988895673,
    lastMessage: "Hare krishna",
  },
};

const chatscreen = createSlice({
  name: "chatscreen",
  initialState,
  reducers: {},
  extraReducers: {},
});

export const {} = chatscreen.actions;
export default chatscreen.reducer;
