import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteData, getBooks } from '../redux/books/bookSlice';

export default function Bookstate(
  // eslint-disable-next-line react/prop-types
  {
    // eslint-disable-next-line react/prop-types
    itemid, title, author, category,
  },
) {
  const [deleter, setDelete] = useState('Delete');
  const dispatch = useDispatch();
  function deleteDispatcher(itemid) {
    dispatch(deleteData(itemid));
    setDelete('...deleting');
    setTimeout(() => {
      dispatch(getBooks());
      setDelete('Delete');
    }, 500);
  }
  return (
    <div className="book-container">
      <div className="book-detail-container">
        <h4>{category}</h4>
        <h4>{title}</h4>
        <h4>{author}</h4>
        <ul>
          <button type="button">Coments</button>
          <span />
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              deleteDispatcher(itemid);
            }}
          >
            {deleter}
          </button>
          <span />
          <button type="button">Edit</button>
        </ul>
      </div>
      <div className="percentage" />
      <div className="reading-status" />
    </div>
  );
}
