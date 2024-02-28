import React, { useState } from 'react';
import './FilterPanel.css';

const FilterPanel = ({ applyFilters }) => {
  const [filters, setFilters] = useState({
    title: '',
    author: '',
    subject: '',
    publishDate: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    applyFilters(filters);
  };

  const handleClearFilters = () => {
    setFilters({
      title: '',
      author: '',
      subject: '',
      publishDate: '',
    });
    applyFilters({
      title: '',
      author: '',
      subject: '',
      publishDate: '',
    });
  };

  return (
    <div className="filter-panel">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Filter by Title"
          value={filters.title}
          onChange={handleInputChange}
          className="filter-input"
        />
        <input
          type="text"
          name="author"
          placeholder="Filter by Author"
          value={filters.author}
          onChange={handleInputChange}
          className="filter-input"
        />
        <input
          type="text"
          name="subject"
          placeholder="Filter by Subject"
          value={filters.subject}
          onChange={handleInputChange}
          className="filter-input"
        />
        <input
          type="text"
          name="publishDate"
          placeholder="Filter by Publish Date"
          value={filters.publishDate}
          onChange={handleInputChange}
          className="filter-input"
        />
        <div className="button-group">
          <button type="submit" className="filter-button">Apply Filters</button> <span></span>
          <button type="button" onClick={handleClearFilters} className="clear-button">Clear Filters</button>
        </div>
      </form>
    </div>
  );
};

export default FilterPanel;
