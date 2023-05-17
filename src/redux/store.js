import { configureStore } from '@reduxjs/toolkit';
import cartegoryReducer from './categories/categoriesSlice';
import bookReducer, { addBook } from './books/bookSlice';

// eslint-disable-next-line import/prefer-default-export
export const store = configureStore({
  reducer: {
    category: cartegoryReducer,
    book: bookReducer,
  },
});

store.dispatch(addBook());
