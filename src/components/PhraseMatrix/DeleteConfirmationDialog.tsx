import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';

interface DeleteConfirmationDialogProps {
  open: boolean;
  onClose: () => void;
  onDelete: (cardId: string) => void; 
  cardId: string; 
}

const DeleteConfirmationDialog: React.FC<DeleteConfirmationDialogProps> = ({ open, onClose, onDelete, cardId }) => {
  const handleDelete = () => {
    onDelete(cardId); 
    onClose();
  };

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Confirmar eliminación</DialogTitle>
      <DialogContent>
        <p>¿Estás seguro de que deseas eliminar esta tarjeta?</p>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancelar</Button>
        <Button onClick={handleDelete} variant="contained" color="error">Eliminar</Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteConfirmationDialog;
