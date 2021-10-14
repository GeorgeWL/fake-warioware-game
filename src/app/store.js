import { configureStore } from '@reduxjs/toolkit';
import mediaReducer from './mediaSlice';
import scoreReducer from './scoreSlice';

export const store = configureStore({
  reducer: {
    score: scoreReducer,
    media: mediaReducer,
  },
});
