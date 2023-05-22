import React, { useState } from 'react';
import { StyledSearhbar } from './Styled';
import { ReactComponent as IconSeacrh } from '../../icons/seach-icon.svg';
import PropTypes from 'prop-types';

export default function Searchbar({ onSubmit }) {
  const [query, setQuery] = useState('');

  const handleQueryChange = event => {
    setQuery(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (query.trim() === '') {
      alert('Please, enter search value');
      return;
    }

    onSubmit(query);
    setQuery('');
  };

  return (
    <StyledSearhbar>
      <form onSubmit={handleSubmit} className="SearchForm">
        <button type="submit" className="SearchForm-button">
          <IconSeacrh className="SearchForm-button-label"></IconSeacrh>
        </button>

        <input
          onChange={handleQueryChange}
          value={query}
          className="SearchForm-input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </StyledSearhbar>
  );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
