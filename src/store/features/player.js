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
  reducers: {
    playAndPause: (state, action) => {
      state.isPlaying = action.payload;
    },
  },
});

export const { playAndPause } = playerSlice.actions;

export default playerSlice.reducer;
