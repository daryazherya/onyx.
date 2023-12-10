import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    switchButton: 'table'
}

export const switchButton = createSlice({
  name: 'switchButton',
  initialState,
  reducers: {
    setSwitchButton: (state, action) => {
    //   console.log('select',action)
      state.switchButton = action.payload;
    },

  }
})

export const { setSwitchButton } = switchButton.actions;

export default switchButton.reducer