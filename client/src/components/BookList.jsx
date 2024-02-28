import React from 'react';
import BookItem from './BookItem';
import './BookList.css';

const BookList = ({ books }) => {
  return (
    <div className="book-list-container">
      Available
      <div className="book-list">
        {books.map((book, index) => (
          <BookItem key={index} book={book} />
        ))}
      </div>
    </div>
  );
};

export default BookList;
