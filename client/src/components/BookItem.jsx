import React from 'react';
import './BookItem.css';
const BookItem = ({ book }) => {
  return (
    <div className="book-item">
      <div className="book-details">
        <h2>{book.title}</h2>
        <p>Author: {book.author}</p>
        <p>Subject: {book.subject}</p>
        <p>Publish Date: {book.publishDate}</p>
      </div>
    </div>
  );
};

export default BookItem;
