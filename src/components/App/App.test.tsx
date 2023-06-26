import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store'; 
import { App } from './App';

const mockStore = configureStore([]); 

test('renders PhraseCards title', () => {
  const initialState = {
    cards: [],
  };
  const store = mockStore(initialState);

  render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  const titleElement = screen.getByText(/PhraseCards/i);
  expect(titleElement).toBeInTheDocument();
});
