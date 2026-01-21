import type { Character } from "../interfaces/character.interfaces";
import { CharacterResults } from "./CharacterResults";
import { LoadMore } from "../../shared/components/LoadMore";
import { CharacterDetailAside } from "./CharacterDetailAside";

interface Props {
    characters: Character[];
    isLoading: boolean;
    hasError: boolean;
    onCharacterSelected: (character: Character) => void;
    onLoadMore: () => void;
    selectedCharacter: Character | null;
    onCloseAside: () => void;
}

export const CharacterLayout = ({
    characters,
    isLoading,
    hasError,
    onCharacterSelected,
    onLoadMore,
    selectedCharacter,
    onCloseAside
}: Props) => {// me he traido los componente que tenia en el main App para poder dejarlo más limpio
    //como tenía que añadir los comprobantes para la información del personaje decidí encapsularlo en un nuevo componente
    //no se si esto es correcto 
    //también había probado a hacer un modal, pero el resultado era desastroso por ende decidí implementar un grid
    //pero como es tambien tema de interfaz tuve que buscar información para implementar la idea que tenía en la cabeza
    return (
        <div className={`main-layout ${selectedCharacter ? 'with-aside' : ''}`}>
            {/* Es mas bonito que hacer una id y luego meterle las clases a traves de if */}
            
            <div className="results-column">
                <CharacterResults 
                    characters={characters} 
                    isLoading={isLoading} 
                    hasError={hasError}
                    onCharacterSelected={onCharacterSelected} 
                />
                
                {/* Botón cargar más*/}
                {!isLoading && !hasError && (
                     <LoadMore onLoadMore={onLoadMore} />
                )}
                {/* podría hacer tambien una variable para detectar si no hay mas resultados*/}
            </div>

            {selectedCharacter && (
                <CharacterDetailAside 
                    character={selectedCharacter} 
                    onClose={onCloseAside} 
                />
            )}
        </div>
    );
};
