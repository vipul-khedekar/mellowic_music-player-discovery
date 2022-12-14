import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isPlaying: false,
  isActive: false,
  activeSong: {},
  currentIndex: 0,
  currentSongs: [],
  selectedGenre: ``,
};

const playerSlice = createSlice({
  name: "player",
  initialState: initialState,
  reducers: {
    playAndPause: (state, action) => {
      state.isPlaying = action.payload;
    },

    setActiveSong: (state, action) => {
      state.activeSong = action.payload.song;

      if (action.payload?.data?.tracks?.hits) {
        state.currentSongs = action.payload.data.tracks.hits;
      } else if (action.payload?.data?.properties) {
        state.currentSongs = action.payload?.data?.tracks;
      } else {
        state.currentSongs = action.payload.data;
      }

      state.currentIndex = action.payload.i;
      state.isActive = true;
    },

    selectGenre: (state, action) => {
      state.selectedGenre = action.payload;
    },
  },
});

export const { playAndPause, setActiveSong, selectGenre } = playerSlice.actions;

export default playerSlice.reducer;
