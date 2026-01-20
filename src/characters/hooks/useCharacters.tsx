import { useEffect, useState, useRef } from "react";
import { getCharactersByQuery, isEmptySearch } from "../actions/get-characters-by-query.action";
import type { Character } from "../interfaces/character.interfaces.ts";


export const useCharacters = () => {

    const [characters, setCharacters] = useState<Character[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [hasError, setHasError] = useState<boolean>(false);

    const [page, setPage] = useState<number>(1);

    const currentQuery = useRef<string>("");

    //Con useRef mantenemos la referencia entre renderizados (no se pierde al hacer rerender)
    //   const gifsCache = useRef<Record<string, Gif[]>>({});
    const charactersCache = useRef<Record<string, Character[]>>({});



    //de momento solo voy a manejar la busqueda normal
    const handleSearch = async (query: string = "") => {

        setIsLoading(true);
        setHasError(false);
        currentQuery.current = query.trim().toLowerCase();
        setPage(1);

        if(charactersCache.current[currentQuery.current]){
            console.log(`He conseguido usar los datos de la cahe: ${currentQuery.current}`);
            setCharacters(charactersCache.current[currentQuery.current]);
            setHasError(false);
            setIsLoading(false);
            return;
        }

        try {
            const newCharacters = await getCharactersByQuery(currentQuery.current, 1);
            //si los he conseguido los guardo en la cache
            charactersCache.current[currentQuery.current] = newCharacters;
            setCharacters(newCharacters);

        }//al crear el currentQuery ya no me hace falta hacer la distinción que hacia antes
        catch (error) {
            if(isEmptySearch(error)){
                setCharacters([]);
                setHasError(false);
                return;
            }

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

        if(charactersCache.current[currentQuery.current+nextPage]){
            console.log(`He conseguido usar los datos de la cahe en load more: ${currentQuery.current} - pagina: ${nextPage}`);
            const newCharacters = charactersCache.current[(currentQuery.current+nextPage)];
            setCharacters(newCharacters); // no hago [...characters, ...newCharacters] porque en este caso se guardó toda la lista entera
            setPage(nextPage);
            return;
        }

        try {
            const newCharacters = await getCharactersByQuery(currentQuery.current, nextPage);
            const allCharacters = [...characters, ...newCharacters]; //lo modularizo para ser más eficiente
            setCharacters(allCharacters);// añado los nuevo resultado a los anteriores
            setPage(nextPage);
            charactersCache.current[currentQuery.current+nextPage] = allCharacters; //aactualmente me estaba dando error por que la key volvía a repetirse pero al añadirle la pagina a la key se vuelve unico y no da problemas
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
