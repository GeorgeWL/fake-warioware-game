import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  voiceEnabled: false,
  cameraEnabled: false,
};

export const mediaSlice = createSlice({
  name: 'media',
  initialState,
  reducers: {
    toggleVoice: (state) => (state.voiceEnabled = !state.voiceEnabled),
    toggleCamera: (state) => (state.cameraEnabled = !state.cameraEnabled),
  },
});
export const { toggleVoice, toggleCamera } = mediaSlice.actions;
export const selectCamera = (state) => state.media.cameraEnabled;
export const selectVoice = (state) => state.media.voiceEnabled;
export default mediaSlice.reducer;
