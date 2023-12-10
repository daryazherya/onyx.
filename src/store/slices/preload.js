import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    preloader: false,
    
}

export const preload = createSlice({
  name: 'preloader',
  initialState,
  reducers: {
    setPreloader: (state, action) => {
      // console.log('preload',action)
      state.preloader = action.payload;
    },

  }
})

export const { setPreloader } = preload.actions;

export default preload.reducer