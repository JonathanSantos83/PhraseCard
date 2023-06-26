import styled from 'styled-components';
import { Typography } from '@mui/material';

export const AppContainer = styled.div`
    padding: 20px;
`;

export const Header = styled.header`
    background-color: #2196f3;
    color: #ffffff;
    padding: 20px;
`;

export const Section = styled.section`
    margin: 20px 0;
    background: linear-gradient(to bottom, #ffffff, #f1f1f1);
    border-radius: 4px;
    padding: 20px;
`;

export const Title = styled(Typography)`
    && {
        margin-bottom: 20px;
    }
`;
