import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    progress: 0,
};

const loadingbarSlice = createSlice({
    name: "loadingBar",
    initialState,
    reducers: {
      setProgress: (state, action) => {
        state.progress = action.payload;
      },
    },
  });
  
  export const { setProgress } = loadingbarSlice.actions;
  export default loadingbarSlice.reducer;