import { createAction, Action } from '@reduxjs/toolkit';

export interface Card {
  id: string;
  title: string;
}

export interface AddCardAction extends Action<'ADD_CARD'> {
  payload: Card;
}

export interface DeleteCardAction extends Action<'DELETE_CARD'> {
  payload: string;
}

export type CardAction = AddCardAction | DeleteCardAction;

export const addCard = createAction<Card>('ADD_CARD');

export const deleteCard = createAction<string>('DELETE_CARD');
