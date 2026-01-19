import type { Character } from "../interfaces/character.interfaces";
import { CharacterCard } from "./CharacterCard";

interface Props{
    characters: Character[];
}

export const CharacterList = ({characters}: Props) =>{
    return (
        <div className="card-grid">
            {characters.map((character)=>(
                <CharacterCard key={character.id} character={character}/>
            ))}
            {/* Al delegar el pintado al otro componente esto que da más simple y bonito */}
        </div>
    );
}