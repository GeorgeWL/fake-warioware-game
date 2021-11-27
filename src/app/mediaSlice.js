import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  voiceEnabled: false,
  cameraEnabled: false,
};

export const mediaSlice = createSlice({
  name: 'media',
  initialState,
  reducers: {
    setVoiceEnabled: (state, action) => {
      state.voiceEnabled = action.payload;
    },
    setCameraEnabled: (state, action) => {
      state.cameraEnabled = action.payload;
    },
  },
});
export const { setVoiceEnabled, setCameraEnabled } = mediaSlice.actions;
export const selectCamera = (state) => state.media.cameraEnabled;
export const selectVoice = (state) => state.media.voiceEnabled;
export default mediaSlice.reducer;
