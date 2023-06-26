import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppContainer, Header, Section, Title } from './App.styles';
import PhraseMatrix from '../PhraseMatrix/PhraseMatrix';
import SearchBar from '../SearchBar/SearchBar';
import PhraseForm from '../PhraseForm/PhraseForm';
import { addCard } from '../../redux/actions';
import { RootState } from '../../redux/store';


export const App: React.FC = () => {
  const dispatch = useDispatch();
  const cards = useSelector((state: RootState) => state.cards); 

  const [searchTerm, setSearchTerm] = useState<string>('');

  const addPhrase = (newPhrase: string) => {
    dispatch(addCard({ id: '', title: newPhrase }));
  };

  const filteredCards = cards.filter((card) =>
    card.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <AppContainer>
      <Header>
        <Title variant="h4">
          PhraseCards
        </Title>
      </Header>
      <Section>
        <Title variant="h5">
          Ingresar frase
        </Title>
        <PhraseForm onAddPhrase={addPhrase} />
      </Section>
      <Section>
        <Title variant="h5">
          Buscar frases ingresadas
        </Title>
        <SearchBar searchTerm={searchTerm} onSearchTermChange={setSearchTerm} />
      </Section>
      {filteredCards.length > 0 && (
      <Section>
        <PhraseMatrix phrases={filteredCards} />
      </Section>
      )}
    </AppContainer>
  );
};


