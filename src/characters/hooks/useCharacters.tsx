import { use, useEffect, useRef, useState } from "react";
import { getCharactersByQuery } from "../actions/get-characters-by-query.action";
import type { Character } from "../interfaces/character.interfaces.ts";

export const useCharacters = () =>{

    const [characters, setCharacters] = useState<Character[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [hasError, setHasError] = useState<boolean>(false);
    

    //de momento solo voy a manejar la busqueda normal
    const handleSearch = async (query: string = "") => {
        try{
            setIsLoading(true);
            query = query.trim().toLowerCase();
            if(query.length === 0){
                const newCharacters = await getCharactersByQuery("/");
                setCharacters(newCharacters);
            }
            else{
                const newCharacters = await getCharactersByQuery(`/?name=${query}`);
                setCharacters(newCharacters);
            }
        }
        catch(error){
            console.log(error);
            setHasError(true);
        }
        finally{
            setIsLoading(false);
        }
    
    }

    useEffect(() => {
        handleSearch();
    }, [])

    return{
        characters,
        isLoading,
        hasError,
        handleSearch
    }
}
