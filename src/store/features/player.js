import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isPlaying: false,
  isActive: false,
  currentIndex: 0,
  activeSong: {},
};

const playerSlice = createSlice({
  name: "player",
  initialState: initialState,
  reducers: {},
});

export default playerSlice.reducer;
