import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    data: null,
    dataChart: null,
    channels: null,
}

export const getData = createSlice({
  name: 'getData',
  initialState,
  reducers: {
    setData: (state, action) => {
        // console.log('data',action)
        state.data = action.payload;
    },
    setDataChart: (state, action) => {
        // console.log('dataChart', action)
        state.dataChart = action.payload;
    },
    setChannels: (state, action) => {
        console.log('channels', action)
        state.channels = action.payload;
    },

  }
})

export const { setData,setChannels,setDataChart } = getData.actions;

export default getData.reducer