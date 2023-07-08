import { createContext, useContext } from 'react';
import Api from '../services/api';

const CharacterContext = createContext({});

function CharacterProvider({children}){
    
    async function getCharacterList(){
        try{
            const response = await Api.get('')
            console.log('response: ', response)
        }catch(error){
            console.log('ERROR: ', error)
        }
    }

    return(
        <CharacterContext.Provider value={{getCharacterList}}>
            {children}
        </CharacterContext.Provider>
    )
}

function useCharacter(){
    const context = useContext(CharacterContext)
    return context
}

export{CharacterProvider, useCharacter} 