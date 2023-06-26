import React from 'react';
import { SearchBarProps } from '../../types/types';
import { StyledTextField } from './SearchBar.styles';

const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, onSearchTermChange }) => {
  return (
    <StyledTextField
    type="text"
    placeholder="Buscar una frase"
    value={searchTerm}
    onChange={(e) => onSearchTermChange(e.target.value)}
    />
  );
};

export default SearchBar;
