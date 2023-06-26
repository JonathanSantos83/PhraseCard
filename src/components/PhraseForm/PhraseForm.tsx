import React, { useState } from 'react';
import { PhraseFormProps } from '../../types/types';
import { FormContainer, StyledTextField, StyledButton } from './PhraseForm.styles';


const PhraseForm: React.FC<PhraseFormProps> = ({ onAddPhrase }) => {
  const [newPhrase, setNewPhrase] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddPhrase(newPhrase);
    setNewPhrase('');
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <label htmlFor="phrase-input">Ingrese una frase</label>
      <StyledTextField
      id="phrase-input"
        type="text"
        value={newPhrase}
        onChange={(e) => setNewPhrase(e.target.value)}
        required
      />
      <StyledButton type="submit" variant="contained" color="primary">
        Agregar
      </StyledButton>
    </FormContainer>
  );
};

export default PhraseForm;
