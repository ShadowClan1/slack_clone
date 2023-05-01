import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  array: [
    {
      from: { name: "Radha" },
      to: { id: "644f8993f934c3c3a10f70a3", name: "krishna" },
      messageType: 0,
      messageText: "hare krishna",
      file: null,
      time: "1682945378523",
    },
  ],
};

const messages = createSlice({
  name: "messages",
  initialState,
  reducers: {},
});

export const {} = messages.actions;
export default messages.reducer;
