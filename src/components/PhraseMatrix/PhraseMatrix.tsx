import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { deleteCard } from '../../redux/actions';
import { PhraseMatrixProps } from '../../types/types';
import { CardGrid, StyledCard, StyledCardContent, StyledTypography, DeleteButton, DeleteIcon } from './PhraseMatrix.styles';
import DeleteConfirmationDialog from './DeleteConfirmationDialog';

const PhraseMatrix: React.FC<PhraseMatrixProps> = ({ phrases }) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const handleOpenModal = () => {
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  const handleDelete = (cardId: string) => {
    dispatch(deleteCard(cardId));
    handleCloseModal();
  };

  return (
    <CardGrid>
      {phrases.map((card, index) => (
        <StyledCard key={index} data-testid="phrase-card">
          <StyledCardContent>
            <StyledTypography>{card.title}</StyledTypography>
            <DeleteButton onClick={handleOpenModal}>
              <DeleteIcon />
            </DeleteButton>
          </StyledCardContent>
          <DeleteConfirmationDialog open={open} onClose={handleCloseModal} onDelete={handleDelete} cardId={card.id} />

        </StyledCard>
      ))}
    </CardGrid>
  );
};

export default PhraseMatrix;
