import { configureStore } from '@reduxjs/toolkit';
import getData from './slices/getData';
import preload from './slices/preload';
import  selectName  from './slices/selects';
import switchButton from './slices/switchButton';
import widthNav from './slices/widthNav';

export default configureStore({
    reducer: {
        getData, preload, selectName,switchButton,widthNav
    }
})