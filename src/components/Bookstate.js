import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/bookSlice';

export default function Bookstate(
  // eslint-disable-next-line react/prop-types
  {
    // eslint-disable-next-line react/prop-types
    itemid, title, author, category,
  },
) {
  const dispatch = useDispatch();
  return (
    <div className="book-container">
      <div className="book-detail-container">
        <h4>{category}</h4>
        <h4>{title}</h4>
        <h4>{author}</h4>
        <h4>{itemid}</h4>
        <ul>
          <button type="button">Coments</button>
          <span />
          <button type="button" onClick={() => dispatch(removeBook(itemid))}>Remove</button>
          <span />
          <button type="button">Edit</button>
        </ul>
      </div>
      <div className="percentage" />
      <div className="reading-status" />
    </div>
  );
}
