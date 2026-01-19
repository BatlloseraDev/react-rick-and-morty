import { rickAndMortyApi } from "../api/rick-and-morty.api";
import type { Character } from "../interfaces/character.interfaces.ts";
import type { RickAndMortyResponse } from "../interfaces/rick-and-morty.response.ts";

export const getCharactersByQuery = async (query: string, page: number= 1): Promise<Character[]> => {
    
    const endpoint = query.length ===0 ? `/character?page=${page}` : `/character/?name=${query}&page=${page}`;
    //si la query me viene vacia cargo la pagina  que quiera (es decir se ha hecho una consulta general de personajes)
    //si la query viene con un nombre hago la busqueda a partir de ese nombre

    const response = await rickAndMortyApi.get<RickAndMortyResponse>(endpoint);
    
    
    // const response = await rickAndMortyApi.get<RickAndMortyResponse>(`/character/${query}`);


    return response.data.results.map( char =>({
        id: char.id,
        name: char.name,
        image: char.image,
        status: char.status,
        species: char.species,
        gender: char.gender
    }));
};