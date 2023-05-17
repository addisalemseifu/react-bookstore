import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Bookstate from './Bookstate';
import { getBooks, postData } from '../redux/books/bookSlice';

export default function Booklist() {
  const [title, setTitle] = useState('');
  const [catagory, setCatagory] = useState('Catagory');
  const [pending, setPending] = useState('Add Book');
  const dispatch = useDispatch();
  const { books } = useSelector((store) => store.book);

  const bookKey = Object.keys(books);

  function catagoryHandler(e) {
    setCatagory(e.target.value);
  }

  function titleHandler(e) {
    setTitle(e.target.value);
  }

  function postDispatcher() {
    const bookDetail = {
      title,
      category: catagory,
      id: Math.random(),
    };
    setPending('...Adding');
    dispatch(postData(bookDetail));
    setTimeout(() => {
      dispatch(getBooks());
      setPending('Add Book');
    }, 1000);
  }
  return (
    <section className="cart">
      <header>
        <h2>your bag</h2>
      </header>
      <div>
        {bookKey.map((key) => (books[key].map((item) => (
          <Bookstate
            key={key}
            itemid={key}
            title={item.title}
            author={item.author}
            category={item.category}
          />
        ))))}
      </div>
      <footer>

        <hr />
        <h2>ADD NEW BOOK</h2>
        <div className="book-form">
          <form action="">
            <input
              type="text"
              placeholder="Book title"
              onChange={(e) => {
                titleHandler(e);
              }}
            />
            <select
              value={catagory}
              onChange={(e) => {
                catagoryHandler(e);
              }}
            >
              <option value="Action">Action</option>
              <option value="Fiction">Fiction</option>
              <option value="History">Economy</option>
              <option value="Self-help">Self-help</option>
            </select>

          </form>
          <button
            type="button"
            className="add-book"
            onClick={(e) => {
              e.preventDefault();
              postDispatcher();
            }}
          >
            {pending}
          </button>
        </div>

      </footer>
    </section>
  );
}
