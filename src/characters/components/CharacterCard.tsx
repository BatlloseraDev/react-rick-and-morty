import type { Character } from "../interfaces/character.interfaces";

//Este componente solo se va a encargar de pintar un personaje

interface Props{
    character: Character;
}

export const CharacterCard = ({character}: Props) => {
    return (
        <div className="card">
            <img src={character.image} alt={character.name} />
            <div className="card-body">
                <h3>{character.name}</h3>
                <p>Status: {character.status}</p>
                <p>Species: {character.species}</p>
                <p>Gender: {character.gender}</p>
            </div>
        </div>
    );
}