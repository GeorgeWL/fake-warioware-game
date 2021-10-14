import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
};

export const scoreSlice = createSlice({
  name: 'score',
  initialState,
  reducers: {
    increment: (state) => (state.value += 1),
    decrement: (state) => (state.value -= 1),
    reset: (state) => (state.value = initialState.value),
  },
});
export const { increment, decrement, reset } = scoreSlice.actions;
export default scoreSlice.reducer;