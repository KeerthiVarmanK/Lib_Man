import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./AddBooks.css"; 

const AddBooks = () => {
  const [book, setBook] = useState({
    title: "",
    author: "",
    subject: "",
    publish_date: "",
  });
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8800/books", book);
      navigate("/admindashboard");
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };

  return (
    <div className="add-books-form">
      <h1 className="form-title">Add New Book</h1>
      <input
        type="text"
        placeholder="Book title"
        name="title"
        value={book.title}
        onChange={handleChange}
        className="input-field"
      />
      <input
        type="text"
        placeholder="Author"
        name="author"
        value={book.author}
        onChange={handleChange}
        className="input-field"
      />
      <input
        type="text"
        placeholder="Subject"
        name="subject"
        value={book.subject}
        onChange={handleChange}
        className="input-field"
      />
      <input
        type="text"
        placeholder="Publish date"
        name="publish_date"
        value={book.publish_date}
        onChange={handleChange}
        className="input-field"
      />
      <button onClick={handleClick} className="add-btn">
        Add
      </button>
      {error && <p className="error-msg">Something went wrong!</p>}
      <Link to="/admindashboard" className="see-all-books">
        See all books
      </Link>
    </div>
  );
};

export default AddBooks;
