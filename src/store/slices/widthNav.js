import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    width: 250
}

export const widthNav = createSlice({
  name: 'widthNav',
  initialState,
  reducers: {
    setWidth: (state, action) => {
        state.wisth = action.payload;
    },

  }
})

export const { setWidth } = widthNav.actions;

export default widthNav.reducer