import { configureStore } from '@reduxjs/toolkit';
import { reducer as toastrReducer } from 'react-redux-toastr';

export default configureStore({
  reducer: {
    toastr: toastrReducer,
  },
});
