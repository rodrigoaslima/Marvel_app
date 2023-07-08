import { TextField } from '@mui/material';
import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: #2c4e57;
    margin: 0;
`;

export const Logo = styled.img`
    height: 90px;
`;

export const SearchInput = styled(TextField)`
    & .MuiInputBase-root{
        border-radius: 40px;
        color: #e6f7ff;
    }
    & label.Mui-focused {
        color: #e6f7ff;
    }
    & .MuiInput-underline:after {
        border-bottom-color: #e6f7ff;
    }
    & .MuiOutlinedInput-root {
        & fieldset {
            border-color: #e6f7ff;
        }
        &:hover fieldset {
            border-color: #e6f7ff;
        }
        &.Mui-focused fieldset {
            border-color: #e6f7ff;
        }
    }
`;
