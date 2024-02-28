import axios from "axios";
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./UpdateBooks.css"; 

const UpdateBooks = () => {
  const [book, setBook] = useState({
    title: "",
    author: "",
    subject: "",
    publish_date: "",
  });
  const [error, setError] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const bookId = location.pathname.split("/")[2];

  const handleChange = (e) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`http://localhost:8800/books/${bookId}`, book);
      navigate("/admindashboard");
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };

  return (
    <div className="update-books-form">
      <h1 className="form-title">Update the Book</h1>
      <input
        type="text"
        placeholder="Book title"
        name="title"
        className="form-input"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Author"
        name="author"
        className="form-input"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Subject"
        name="subject"
        className="form-input"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Publish date"
        name="publish_date"
        className="form-input"
        onChange={handleChange}
      />
      <button className="form-btn" onClick={handleClick}>
        Update
      </button>
      {error && <div className="error-msg">Something went wrong!</div>}
      <Link to="/admindashboard" className="link">
        See all books
      </Link>
    </div>
  );
};

export default UpdateBooks;
