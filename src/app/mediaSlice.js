import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  voiceEnabled: false,
  cameraEnabled: false,
  voiceStream: null,
  cameraStream: null
};

export const mediaSlice = createSlice({
  name: 'media',
  initialState,
  reducers: {
    setVoiceEnabled: (state, action) => {
      state.voiceEnabled = action.payload;
    },
    setVoiceStream: (state, action) => {
      state.voiceStream = action.payload;
    },
    setCameraEnabled: (state, action) => {
      state.cameraEnabled = action.payload;
    },
    setCameraStream: (state, action) => {
      state.voiceStream = action.payload;
    },
  },
});
export const { setVoiceEnabled, setVoiceStream, setCameraEnabled, setCameraStream } = mediaSlice.actions;
export const selectCameraEnabled = (state) => state.media.cameraEnabled;
export const selectVoiceEnabled = (state) => state.media.voiceEnabled;
export const selectVoiceStream = (state) =>state.media.voiceStream;
export const selectCameraStream = (state) =>state.media.cameraStream;
export default mediaSlice.reducer;
