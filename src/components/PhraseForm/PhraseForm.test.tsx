import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import PhraseForm from './PhraseForm';

test('calls onAddPhrase with the entered phrase when form is submitted', () => {
  const handleAddPhrase = jest.fn();
  render(<PhraseForm onAddPhrase={handleAddPhrase} />);
  const inputElement = screen.getByLabelText('Ingrese una frase');
  const addButtonElement = screen.getByRole('button', { name: 'Agregar' });

  const phrase = 'Hello, world!';
  fireEvent.change(inputElement, { target: { value: phrase } });
  fireEvent.click(addButtonElement);

  expect(handleAddPhrase).toHaveBeenCalledWith(phrase);
});
