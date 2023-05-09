import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [],
};

const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    addBook: ((state) => {
      state.books = state.books.push('focus');
    }),
    removeBook: ((state) => {
      state.books = state.books.pop();
    }),
  },
});

export const { addBook, removeBook } = bookSlice.reducer;
export default bookSlice.reducer;
