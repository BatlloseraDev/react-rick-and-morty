import { useEffect, useState, useRef } from "react";
import { getCharactersByQuery, isEmptySearch } from "../actions/get-characters-by-query.action";
import type { Character } from "../interfaces/character.interfaces.ts";


export const useCharacters = () => {

    const [characters, setCharacters] = useState<Character[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [hasError, setHasError] = useState<boolean>(false);

    const [page, setPage] = useState<number>(1);

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
        setPage(1);//dudo si tengo que quitarlo o no
        fetchData(currentQuery.current, currentStatus.current, 1);
    }


    const handleLoadMore = async () => {
        const nextPage = page + 1;
        fetchData(currentQuery.current, currentStatus.current, nextPage);

        // if (charactersCache.current[currentQuery.current +currentStatus.current + nextPage]) {
        //     console.log(`He conseguido usar los datos de la cahe en load more: ${currentQuery.current} - status: ${currentStatus.current} - pagina: ${nextPage}`);
        //     const newCharacters = charactersCache.current[(currentQuery.current+currentStatus.current + nextPage)];
        //     setCharacters(newCharacters); // no hago [...characters, ...newCharacters] porque en este caso se guardó toda la lista entera
        //     setPage(nextPage);
        //     return;
        // }

        // try {
        //     const newCharacters = await getCharactersByQuery(currentQuery.current,currentStatus.current,  nextPage);
        //     const allCharacters = [...characters, ...newCharacters]; //lo modularizo para ser más eficiente
        //     setCharacters(allCharacters);// añado los nuevo resultado a los anteriores
        //     setPage(nextPage);
        //     charactersCache.current[currentQuery.current+currentStatus.current + nextPage] = allCharacters; //aactualmente me estaba dando error por que la key volvía a repetirse pero al añadirle la pagina a la key se vuelve unico y no da problemas
        // }
        // catch (error) {
        //     isEmptySearch(error) ? console.log("No hay más páginas") : console.log("Error mu gordo ", error);
        // }

    };

    useEffect(() => {
        handleSearch();
    }, [])

    return {
        characters,
        isLoading,
        hasError,
        handleSearch,
        handleLoadMore,
        handleStatusFilter
    }
}
