import { styled } from '@mui/system';
import { Grid, Card, CardContent, Typography, IconButton } from '@mui/material';
import { DeleteOutline } from '@mui/icons-material';

export const CardGrid = styled(Grid)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 16px;
`;

export const StyledCard = styled(Card)`
  width: 300px;
  background-color: rgb(33, 150, 243);
  color: rgb(255, 255, 255);
  padding: 20px;
  position: relative; /* Agregamos position: relative para posicionar el botón dentro del card */
`;

export const StyledCardContent = styled(CardContent)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
`;

export const StyledTypography = styled(Typography)`
  font-size: 16px;
`;

export const DeleteButton = styled(IconButton)`
  color: rgb(255, 255, 255);
  position: absolute;
  bottom: 8px;
  right: 8px;
`;

export const DeleteIcon = styled(DeleteOutline)`
  font-size: 20px;
`;
