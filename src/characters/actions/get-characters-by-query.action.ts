import { rickAndMortyApi, checkErrorEmptySearchApi } from "../api/rick-and-morty.api";
import type { Character } from "../interfaces/character.interfaces.ts";
import type { RickAndMortyResponse } from "../interfaces/rick-and-morty.response.ts";

export const getCharactersByQuery = async (query: string, page: number= 1, status: string = ""): Promise<Character[]> => {
    
    //si la query me viene vacia cargo la pagina  que quiera (es decir se ha hecho una consulta general de personajes)
    //si la query viene con un nombre hago la busqueda a partir de ese nombre

    // const endpoint = query.length ===0 ? `/character?page=${page}` : `/character/?name=${query}&page=${page}`;
    //como ahora ya no son solo dos parametros sino 3 (la query, la paginacion y el estatus) ya no me sirve el metodo que tenía

    let params = '/character/?';
    if(query) params += `name=${query}&`;
    if(status) params += `status=${status}&`;
    params += `page=${page}`;

    const endpoint = params;
    
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

export const isEmptySearch = (error : any) =>{
    return checkErrorEmptySearchApi(error); // se que queda raro pero no me parecía correcto llamar al archivo que se encarga del axios desde el propio componente
    // tampoco me parecía correcto importar axios directamente en el componente
}