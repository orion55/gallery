import { configureStore } from '@reduxjs/toolkit';
import { reducer as toastrReducer } from 'react-redux-toastr';
import imageSlice from '../slices/imageSlice';

export default configureStore({
  reducer: {
    toastr: toastrReducer,
    images: imageSlice,
  },
});
