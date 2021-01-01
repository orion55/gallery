import { createSlice } from '@reduxjs/toolkit';
import uniqueId from 'lodash/uniqueId';

export const imagesSlice = createSlice({
  name: 'images',
  initialState: [],
  reducers: {
    add: (state, action) => [...state, action.payload],
    remove: (state, action) => state.filter(({ id }) => id !== action.payload),
    load: (state, action) => action.payload,
    clear: () => [],
  },
});

export const {
  add, remove, load, clear,
} = imagesSlice.actions;

export const selectImages = (state) => state.images;

export const loadImages = (images) => (dispatch) => {
  dispatch(load(images.map((item) => ({ id: uniqueId(), ...item }))));
};

export default imagesSlice.reducer;
