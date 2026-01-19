import { rickAndMortyApi } from "../api/rick-and-morty.api";
import type { Character } from "../interfaces/character.interfaces.ts";
import type { RickAndMortyResponse } from "../interfaces/rick-and-morty.response.ts";

export const getCharactersByQuery = async (query: string): Promise<Character[]> => {
    const response = await rickAndMortyApi.get<RickAndMortyResponse>(`/character/${query}`);

    //puede sufrir cambios en la siguiente (hu 1) ya que aun no lo puedo probar
    return response.data.results.map( char =>({
        id: char.id,
        name: char.name,
        image: char.image,
        status: char.status,
        species: char.species,
        gender: char.gender
    }));
};