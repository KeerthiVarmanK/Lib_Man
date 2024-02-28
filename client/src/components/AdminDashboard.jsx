import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./AdminDashboard.css"; 

const AdminDashboard = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const res = await axios.get("http://localhost:8800/books");
        console.log(res.data);
        setBooks(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllBooks();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8800/books/${id}`);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="admin-dashboard">
      <h1 className="title">Admin Dashboard</h1>
      <button className="add-btn">
        <Link to="/add" className="add-link">
          Add Book
        </Link>
      </button>
      <br></br>
      <div className="books-container">
        {books.map((book) => (
          <div key={book.id} className="book">
            <h2 className="book-title">Book Title : {book.title}</h2>
            <p className="book-desc"><strong>Author : </strong>{book.author}</p>
            <span className="book-price"><strong>Subject : </strong> {book.subject}</span>
            <p className="book-desc"><strong>Publish Date : </strong>{book.publish_date}</p>
            <button className="delete-btn" onClick={() => handleDelete(book.id)}>
              Delete
            </button>
            <button className="update-btn">
              <Link
                to={`/update/${book.id}`}
                className="update-link"
              >
                Update
              </Link>
            </button>
          </div>
        ))}
      </div>

      
    </div>
  );
};

export default AdminDashboard;
