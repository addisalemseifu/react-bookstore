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
          <button
            type="button"
            className="detail-btn"
          >
            Comments
          </button>
          <span />
          <button
            className="detail-btn"
            type="button"
            onClick={(e) => {
              e.preventDefault();
              deleteDispatcher(itemid);
            }}
          >
            {deleter}
          </button>
          <span />
          <button
            className="detail-btn"
            type="button"
          >
            Edit
          </button>
        </ul>
      </div>
      <div className="percentage">
        <svg height="100" width="100">
          <circle
            cx="40"
            cy="40"
            r="30"
            stroke="#0290ff"
            strokeWidth="7"
            fill="white"
            className="track"
          />
          <circle
            cx="40"
            cy="40"
            r="30"
            stroke="#0290ff"
            strokeWidth="7"
            fill="white"
            className="progress"
          />
          Sorry, your browser does not support inline SVG.
        </svg>
        <div className="percent">
          <h2>64%</h2>
          <h4>completed</h4>
        </div>
        <span className="vertical" />
      </div>
      <div className="status">
        <h4>CURRENT CHAPTER</h4>
        <h3>Chapter 17</h3>
        <button
          type="button"
          className="stat"
        >
          UPDATE PROGRESS
        </button>
      </div>
    </div>
  );
}
