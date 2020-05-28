/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { SearchWrapper } from './styles';

interface SearchProps {
  handleChange: Function;
  value: string;
}

function Search({ handleChange, value }: SearchProps) {
  return (
    <SearchWrapper>
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Search"
        value={value}
        onChange={(e) => handleChange(e)}
      />
      <label htmlFor="search">Search</label>
    </SearchWrapper>
  );
}

export default Search;
