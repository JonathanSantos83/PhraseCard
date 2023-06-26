import styled from 'styled-components';
import { TextField, Button } from '@mui/material';

export const FormContainer = styled.form`
    display: flex;
    align-items: center;
    gap: 10px;
`;

export const StyledTextField = styled(TextField)`
    width: 300px;
`;

export const StyledButton = styled(Button)`
    && {
        background-color: #4caf50;
        color: white;
    }
`;
