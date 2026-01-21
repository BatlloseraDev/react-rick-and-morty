import type { Character } from "../interfaces/character.interfaces";
import { CharacterList } from "./CharacterList";

interface Props {
    characters: Character[];
    isLoading: boolean;
    hasError: boolean;
    onCharacterSelected: (character: Character) => void;
}

export const CharacterResults = ({ characters, isLoading, hasError, onCharacterSelected }: Props) => {
    if (isLoading) {
        return <div className="loading-alert">Cargando personajes</div>;
    }

    if (hasError) {
        return <div className="error-alert">Error al cargar los personajes</div>;
    }

    if (characters.length === 0) {
        return <p>No se encontraron personajes.</p>;
    }

    return <CharacterList characters={characters} onCharacterSelected={onCharacterSelected}/>;
};
