import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Bookstate from './Bookstate';
import { addBook } from '../redux/books/bookSlice';

export default function Booklist() {
  const dispatch = useDispatch();
  const { books } = useSelector((store) => store.book);
  return (
    <section className="cart">
      <header>
        <h2>your bag</h2>
      </header>
      <div>
        {books.map((item) => (
          <Bookstate
            key={item.itei}
            itemid={item.itemid}
            title={item.title}
            author={item.author}
            category={item.category}
          />
        ))}
      </div>
      <footer>
        <hr />
        <div className="cart-total" />
        <button
          type="button"
          className="btn clear-btn"
          onClick={() => dispatch(addBook({
            itemid: 'item6',
            title: 'The Great Gatsby',
            author: 'John Smith',
            category: 'Fiction',
          }))}
        >
          ADD BOOK
        </button>
      </footer>
    </section>
  );
}
