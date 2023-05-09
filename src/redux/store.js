import { consfigureStore } from '@reduxjs/toolkit';
import cartegoryReducer from './categories/categoriesSlice';
import bookReducer from './books/bookSlice';

const store = consfigureStore({
  reducer: {
    category: cartegoryReducer,
    book: bookReducer,
  },
});
export default store;
