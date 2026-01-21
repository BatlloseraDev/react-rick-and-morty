import type { Character } from "../interfaces/character.interfaces";



interface Props{
    character: Character;
    onClose: () => void;
}

export const CharacterDetailAside = ({character, onClose}: Props)=>{
    if(!character) return null;

    return (
        <aside className="character-aside">
            <div className="aside-header">
                <h3>Info del personaje</h3>
                <button className="close-button" onClick={onClose}>Cerrar</button>
            </div>
            <div className="aside-body">
                <img src={character.image} alt={character.name} className="aside-image" />
                <h2 className="text-primary">{character.name}</h2>
                <ul className="aside-list-group">
                    <li className="aside-list-group-item"><span><strong>Status:</strong> {character.status}</span></li>
                    <li className="aside-list-group-item"><span><strong>Species:</strong> {character.species}</span></li>
                    <li className="aside-list-group-item"><span><strong>Gender:</strong> {character.gender}</span></li>
                    <li className="aside-list-group-item"><span><strong>Origin: </strong> {character.origin.name}</span></li>
                    <li className="aside-list-group-item"><span><strong>Location: </strong> {character.location.name}</span></li>
                </ul>
            </div>
        </aside>
    )
}