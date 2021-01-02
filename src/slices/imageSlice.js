import { createSlice } from '@reduxjs/toolkit';

const uniqid = require('uniqid');

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
  dispatch(load(images.map((item) => ({ id: uniqid(), ...item }))));
};

export default imagesSlice.reducer;
