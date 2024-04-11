
import React from 'react';
import './SearchBox.css'

const SearchBox = ({ onSearch }) => {
  const handleChange = event => {
    onSearch(event.target.value.trim().toLowerCase());
  };

  return (
  <label> Find contacts by name
    <input
className='search'
      type="text"
      placeholder="Search contacts..."
      onChange={handleChange}
    />
    </label>
  );
};

export default SearchBox;