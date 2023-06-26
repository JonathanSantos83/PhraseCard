import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import PhraseMatrix from './PhraseMatrix';

const mockStore = configureStore([]);

test('renders a list of phrases', () => {
  const phrases = [
    { id: '1', title: 'Hello' },
    { id: '2', title: 'World' },
    { id: '3', title: 'Testing' },
  ];

  const store = mockStore({}); 

  render(
    <Provider store={store}>
      <PhraseMatrix phrases={phrases} />
    </Provider>
  );

  const phraseElements = screen.getAllByTestId('phrase-card');
  expect(phraseElements.length).toBe(phrases.length);
});
