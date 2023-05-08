const BOOK_ADDED = 'BOOK_ADDED';
const BOOK_REMOVED = 'BOOK_REMOVED';

function bookAdded() {
  return {
    type: BOOK_ADDED,
    bookName: 'sapians',
  };
}

const initialState = {
  books: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BOOK_ADDED:
      return {
        books: state.push(state.bookName),
      };
    case BOOK_REMOVED:
      return {
        books: state.pop(),
      };
    default:
      return state;
  }
};

bookAdded();
reducer();
