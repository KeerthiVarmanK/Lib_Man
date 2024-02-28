import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BookList from './components/BookList';
import FilterPanel from './components/FilterPanel';
import Pagination from './components/Pagination';
import Login from './components/Login';
import AdminLogin from './components/AdminLogin';
import AdminDashboard from './components/AdminDashboard';
import HomePage from './components/HomePage';
// import AddBookForm from './components/AddBookForm';
import data from './data/books.json';
import './App.css';
import Starfield from 'react-starfield';
import AddBooks from './components/AddBooks';
import UpdateBooks from './components/UpdateBooks';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);
  const [books, setBooks] = useState(data);
  const [filteredBooks, setFilteredBooks] = useState(data);
  const [currentPage, setCurrentPage] = useState(1);
  const [booksPerPage] = useState(10);

  const applyFilters = (filters) => {
    const filtered = data.filter(book => {
      return (
        book.title.toLowerCase().includes(filters.title.toLowerCase()) &&
        book.author.toLowerCase().includes(filters.author.toLowerCase()) &&
        book.subject.toLowerCase().includes(filters.subject.toLowerCase()) &&
        book.publishDate.toLowerCase().includes(filters.publishDate.toLowerCase())
      );
    });
    setFilteredBooks(filtered);
    setCurrentPage(1); 
  };

  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = filteredBooks.slice(indexOfFirstBook, indexOfLastBook);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Router>
      <div className="App">
        <Starfield
          starCount={1000}
          starColor={[255, 255, 255]}
          speedFactor={0.05}
          backgroundColor="black"
        />
        <Routes>
          <Route exact path='/' element={<HomePage/>} />
          <Route path="/user" element = { <>
            {!isAuthenticated ? (
              <Login setIsAuthenticated={setIsAuthenticated} />
            ) : (
              <>
                <h1 className="title">Library Management System</h1>
                <div className="filter-container">
                  <FilterPanel applyFilters={applyFilters} />
                </div>
                <div className="book-list-container">
                  <BookList books={currentBooks} />
                </div>
                <div className="pagination-container">
                  <Pagination
                    booksPerPage={booksPerPage}
                    totalBooks={filteredBooks.length}
                    paginate={paginate}
                  />
                </div>
              </>
            )}
            </>
          } />
          <Route path="/admin" element = { <AdminLogin />
          } />
          <Route path='/admindashboard' element = {<AdminDashboard />} />
          <Route path="/add" element={<AddBooks />} />
          <Route path="/update/:id" element={<UpdateBooks />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
