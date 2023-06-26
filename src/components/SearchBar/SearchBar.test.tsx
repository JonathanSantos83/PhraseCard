import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import SearchBar from './SearchBar';

test('calls onSearchTermChange when input value changes', () => {
  const searchTerm = 'Hello';
  const handleChange = jest.fn();
  render(
    <SearchBar searchTerm={searchTerm} onSearchTermChange={handleChange} />
  );
  const inputElement = screen.getByPlaceholderText('Buscar una frase');
  fireEvent.change(inputElement, { target: { value: 'World' } });
  expect(handleChange).toHaveBeenCalledWith('World');
});