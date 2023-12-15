import { createSlice } from '@reduxjs/toolkit';
import { formatISO} from "date-fns";

const today = new Date();
today.setHours(0, 0, 0, 0);

const initialState = {
    valueType: '20',
    valueStart: today.toString(),
    valueEnd: new Date().toString(),
    formDataHistory: {
        PeriodBegin: formatISO(today),
        PeriodEnd: formatISO(new Date()),
        PeriodType: "20",
        IsOnlyAverage: true,
        ChannelSetId: 1,
    }
}

export const formData = createSlice({
  name: 'formData',
  initialState,
  reducers: {
    setValueType: (state, action) => {
        state.valueType = action.payload;
        state.formDataHistory = {...state.formDataHistory, PeriodType: action.payload}
    },
     setValueStart: (state, action) => {
        state.valueStart = action.payload;
        state.formDataHistory = {...state.formDataHistory, PeriodBegin: formatISO(new Date(action.payload).setHours(0, 0, 0, 0)) }
    },
    setValueEnd: (state, action) => {
        state.valueEnd = action.payload;
        state.formDataHistory = {...state.formDataHistory, PeriodEnd: formatISO(new Date(action.payload)) }

    },
    setChannelSet: (state, action) => {
        state.formDataHistory = {...state.formDataHistory, ChannelSetId : action.payload}
    },

  }
})

export const { setValueType,setChannelSet,setValueEnd,setValueStart } = formData.actions;

export default formData.reducer