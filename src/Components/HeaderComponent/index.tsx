import React from 'react';

import { Container, Logo, SearchInput } from './styles';


const HeaderComponent: React.FC = () => {
  return (
    <Container>
      <Logo src="https://res.cloudinary.com/practicaldev/image/fetch/s---TIkcpvR--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/i18i9ondsxp8njnymavk.png" alt="Marvel Logo."/>
      <SearchInput
        autoFocus={true}
        id={"SearchCharacter"}
        name={"SearchCharacter"}
        placeholder={'Enter hero name'}
        type={'search'}
        onChange={(event) => console.log(event?.target.value)}
      />
    </Container>
  );
}

export default HeaderComponent;