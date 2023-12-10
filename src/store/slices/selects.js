import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    select: {
        Id: 1,
        Name: "Пост Дарьи.Все каналы",
    }
}

export const selectName = createSlice({
  name: 'selectName',
  initialState,
  reducers: {
    setSelect: (state, action) => {
    //   console.log('select',action)
      state.select = action.payload;
    },

  }
})

export const { setSelect } = selectName.actions;

export default selectName.reducer