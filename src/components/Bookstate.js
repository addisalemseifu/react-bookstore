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
  const [deleter, setDelete] = useState('Remove');
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
        <h5>{category}</h5>
        <h2>{title}</h2>
        <h4>{author}</h4>
        <ul>
          <button type="button">Comments</button>
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
      <div className='percentage'>
        <span></span>
        <div className='percent'>
          <h2>64%</h2>
          <h4>completed</h4>
        </div>
      </div>
    </div>
  );
}
