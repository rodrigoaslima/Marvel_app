import styled from 'styled-components';
import { Container } from '@mui/system';

export const Wrapper = styled(Container)`

    display: grid !important;
    grid-gap: 30px;
    grid-template-columns: repeat(auto-fit, minmax(241px, auto));
    background: #8815ab;
    background: linear-gradient(185deg, #63107d 0%, #8815ab 68%, #d759fe 100%);  
    border-style: solid;
    border-color: #e6f7ff;
    border-width: 2px 4px;
    border-radius: 40px;
    height: 100%;
    margin-top: 10px;
    width: 100% !important;
    width: 98vw !important;
    justify-content: center;
    padding-bottom: 24px;
    padding-top: 24px;

`;


///////////////////CARD//////////////////////////////////
export const Card = styled.div`

    border-style: solid;
    border-color: #c3d0d4;
    border-width: 4px;
    padding: 10px;
    width: 200px;
    height: 300px;
    background: rgb(44,78,87);
    background: linear-gradient(135deg, rgba(44,78,87,1) 0%, rgba(44,78,87,1) 36%, rgba(94,110,115,1) 86%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 20px;
`

export const CharacterImg = styled.div`
    background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRap5XFGxHPTODjMd_mS46-STm_cNWEoOMQAj_TV21jqHtmBPXLRlbH782y62kk4P6eZA&usqp=CAU');
    background-position: center; 
    background-repeat: no-repeat; 
    background-size: cover;
    width: 200px;
    height: 200px;
    border-radius: 5px;
`

export const CharacterName = styled.h3`
    text-align: center;
    color: #ffffff;
    font-weight: 600;
`
