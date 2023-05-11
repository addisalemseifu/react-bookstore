import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [
    {
      itemid: 'item1',
      title: 'The Great Gatsby',
      author: 'John Smith',
      category: 'Fiction',
    },
    {
      itemid: 'item2',
      title: 'Anna Karenina',
      author: 'Leo Tolstoy',
      category: 'Fiction',
    },
    {
      itemid: 'item3',
      title: 'The Selfish Gene',
      author: 'Richard Dawkins',
      category: 'Nonfiction',
    },
  ],
};

const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books = [...state.books, action.payload];
    },
    removeBook: (state, action) => {
      const bookId = action.payload;
      state.books = state.books.filter((item) => item.itemid !== bookId);
    },
  },
});
export const { addBook, removeBook } = bookSlice.actions;
export default bookSlice.reducer;
