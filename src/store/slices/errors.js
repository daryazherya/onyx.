import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    errorIndicator: false,
}

export const errorMessage = createSlice({
  name: 'errorMessage',
  initialState,
  reducers: {
    setErrorIndicator: (state, action) => {
    //   console.log('select',action)
      state.errorIndicator = action.payload;
    },

  }
})

export const { setErrorIndicator } = errorMessage.actions;

export default errorMessage.reducer