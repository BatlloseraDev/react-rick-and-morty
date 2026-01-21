import type { Character } from "../interfaces/character.interfaces";

//Este componente solo se va a encargar de pintar un personaje

interface Props{
    character: Character;
    onCharacterSelected: (character: Character) => void;
}

export const CharacterCard = ({character, onCharacterSelected}: Props) => {
    return (
        <div className="card" onClick={() => onCharacterSelected(character)}>
            <img src={character.image} alt={character.name} />
            <div className="card-body">
                <h3>{character.name}</h3>
                <p>Status: {character.status}</p>
                <p>Gender: {character.gender}</p>
            </div>
        </div>
    );
}