import { Card } from '../redux/actions';

export interface PhraseCardProps {
  phrase: string;
}

export interface PhraseFormProps {
  onAddPhrase: (phrase: string) => void;
}
  
export interface PhraseMatrixProps {
  phrases: Card[];
}

export interface SearchBarProps {
  searchTerm: string;
  onSearchTermChange: (value: string) => void;
}