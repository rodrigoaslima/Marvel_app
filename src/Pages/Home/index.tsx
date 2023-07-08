import React, { useEffect } from 'react';
import { useCharacter } from '../../context/CharacterContext';
import HeaderComponent from '../../Components/HeaderComponent';
import { Wrapper } from './styles';


import { Card, CharacterImg, CharacterName } from './styles';

const Home: React.FC = () => {

  return(
    <>
      
    <HeaderComponent/>

      <Wrapper>
        <Card>
          <CharacterName>Nome Personagem</CharacterName>
          <CharacterImg />
           
          <div>
            Info
          </div>
        </Card>

        <Card>
          <div>Nome Personagem</div>
          <CharacterImg />
           
          <div>
            Info
          </div>
        </Card>

        <Card>
          <div>Nome Personagem</div>
          <CharacterImg />
           
          <div>
            Info
          </div>
        </Card>

        <Card>
          <div>Nome Personagem</div>
          <CharacterImg />
           
          <div>
            Info
          </div>
        </Card>

        <Card>
          <div>Nome Personagem</div>
          <CharacterImg />
           
          <div>
            Info
          </div>
        </Card>

        <Card>
          <div>Nome Personagem</div>
          <CharacterImg />
           
          <div>
            Info
          </div>
        </Card>

        <Card>
          <div>Nome Personagem</div>
          <CharacterImg />
           
          <div>
            Info
          </div>
        </Card>
      </Wrapper>
       
    </>
  );
}

export default Home;