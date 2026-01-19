import { useEffect, useState, useRef } from "react";
import { getCharactersByQuery } from "../actions/get-characters-by-query.action";
import type { Character } from "../interfaces/character.interfaces.ts";

export const useCharacters = () => {

    const [characters, setCharacters] = useState<Character[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [hasError, setHasError] = useState<boolean>(false);

    const [page, setPage] = useState<number>(1);

    const currentQuery = useRef<string>("");


    //de momento solo voy a manejar la busqueda normal
    const handleSearch = async (query: string = "") => {

        setIsLoading(true);
        setHasError(false);
        currentQuery.current = query.trim().toLowerCase();
        setPage(1);
        try {
            const newCharacters = await getCharactersByQuery(currentQuery.current, 1);
            setCharacters(newCharacters);

        }//al crear el currentQuery ya no me hace falta hacer la distinción que hacia antes
        catch (error) {
            console.log(error);
            setHasError(true);
            setCharacters([]);
        }
        finally {
            setIsLoading(false);
        }

    }

    const handleLoadMore = async () => {
        const nextPage = page + 1;

        try {
            const newCharacters = await getCharactersByQuery(currentQuery.current, nextPage);
            setCharacters([...characters, ...newCharacters]);// añado los nuevo resultado a los anteriores
            setPage(nextPage);
        }
        catch (error) {
            console.log("No hay más páginas o error mu gordo: ", error);
        }

    };

    useEffect(() => {
        handleSearch();
    }, [])

    return {
        characters,
        isLoading,
        hasError,
        handleSearch,
        handleLoadMore
    }
}
