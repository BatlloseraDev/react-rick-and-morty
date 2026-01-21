import { useEffect, useState, useRef } from "react";
import { getCharactersByQuery, isEmptySearch } from "../actions/get-characters-by-query.action";
import type { Character } from "../interfaces/character.interfaces.ts";


export const useCharacters = () => {

    const [characters, setCharacters] = useState<Character[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [hasError, setHasError] = useState<boolean>(false);
    const [page, setPage] = useState<number>(1);

    const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);

    const currentQuery = useRef<string>("");
    const currentStatus = useRef<string>("");


    //Con useRef mantenemos la referencia entre renderizados (no se pierde al hacer rerender)
    //   const gifsCache = useRef<Record<string, Gif[]>>({});
    const charactersCache = useRef<Record<string, Character[]>>({});

    const fetchData = async (query: string = "", status: string = "", pageNumber: number = 1) => {//función que me permite simplificar el código y evitar problemas con la caché

        if(pageNumber === 1) setIsLoading(true);// si dejo esto por defecto en true para cualquier página me reinicia al inicio de la página
        setHasError(false);
        currentQuery.current = query.trim().toLowerCase();
        currentStatus.current = status;
        setPage(pageNumber);

        if (charactersCache.current[currentQuery.current + status + pageNumber]) {
            console.log(`He conseguido usar los datos de la cahe: ${currentQuery.current} - status: ${status} - pagina: ${pageNumber}`);
            setCharacters(charactersCache.current[currentQuery.current + status + pageNumber]);
            setHasError(false);
            setIsLoading(false);
            setPage(pageNumber);
            return;
        }

        try {
            let newCharacters = await getCharactersByQuery(query, status, pageNumber);
            if (pageNumber != 1) {
                newCharacters = [...characters, ...newCharacters];
            }
            charactersCache.current[currentQuery.current + status + pageNumber] = newCharacters;
            setCharacters(newCharacters);
        } catch (error) {
            if (isEmptySearch(error) && pageNumber === 1) {
                console.log("No hay resultados");
                setCharacters([]);
                setHasError(false);
                return;
            } else
            if (isEmptySearch(error) && pageNumber !== 1) {
                console.log("No hay más páginas");
                alert("No hay más páginas");
                setHasError(false);
                setIsLoading(false);
                return;
            }else{
                console.log("Error mu gordo ", error);
                setHasError(true);
                setCharacters([]);
                
            }
        } finally {
            if (pageNumber === 1)
                setIsLoading(false);
        }

    }






    //de momento solo voy a manejar la busqueda normal
    const handleSearch = async (query: string = "") => {

        currentQuery.current = query.trim().toLowerCase();
        setPage(1);
        fetchData(currentQuery.current, currentStatus.current, 1);

    }

    const handleStatusFilter = (status: string) => {
        currentStatus.current = status;
        setPage(1);
        fetchData(currentQuery.current, currentStatus.current, 1);
    }


    const handleLoadMore = async () => {
        const nextPage = page + 1;
        fetchData(currentQuery.current, currentStatus.current, nextPage);
    };

    const onCharacterSelected = (character: Character) => {
        setSelectedCharacter(character);
    }

    const onCloseModal = () => {
        setSelectedCharacter(null);
    }

    useEffect(() => {
        handleSearch();
    }, [])

    return {
        characters,
        isLoading,
        hasError,
        handleSearch,
        handleLoadMore,
        handleStatusFilter,
        selectedCharacter,
        onCharacterSelected,
        onCloseModal
    }
}
