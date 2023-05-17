import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const dataUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/McvW73kTCQbVPzcD7S2A/books';

export const getBooks = createAsyncThunk('book/getBooks', () => axios.get(dataUrl)
  .then((res) => res.data)
  .catch((err) => console.log(err)));

export const postData = createAsyncThunk('book/postData', async (bookDetail) => fetch(' https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/McvW73kTCQbVPzcD7S2A/books ', {
  method: 'POST',
  body: JSON.stringify({
    item_id: bookDetail.id,
    title: bookDetail.title,
    author: 'suzan collins',
    category: bookDetail.category,
  }),
  headers: {
    'Content-type': 'application/json',
  },
}));

export const deleteData = createAsyncThunk('book/deleteData', (itemid) => fetch(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/McvW73kTCQbVPzcD7S2A/books/${itemid}`, {
  method: 'DELETE',
  body: JSON.stringify({
    item_id: itemid,
    app_id: 'McvW73kTCQbVPzcD7S2A',
  }),
  headers: {
    'Content-type': 'application/json',
  },
}));

const initialState = {
  books: [],
  isLoading: true,
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
  extraReducers: {
    [getBooks.pending]: (state) => {
      state.isLoading = true;
    },
    [getBooks.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.books = action.payload;
    },
    [getBooks.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});
export const { addBook, removeBook } = bookSlice.actions;
export default bookSlice.reducer;
