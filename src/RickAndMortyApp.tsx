import { useCharacters } from "./characters/hooks/useCharacters";
import { CustomHeader } from "./shared/components/customHeader";
import { SearchBar } from "./shared/components/SearchBar";
import { StatusFilter } from "./characters/components/StatusFilter";
import { CharacterLayout } from "./characters/components/CharacterLayout";


export const RickAndMortyApp = () => {
    const { characters, isLoading, hasError, handleSearch, handleLoadMore, handleStatusFilter,
        selectedCharacter, onCharacterSelected, onCloseModal
     } = useCharacters();

    return (
        <>
            {/* Header */}
            <CustomHeader title="Rick and Morty App" />

            <hr />
            {/* Buscador */}
            <SearchBar onQuery={handleSearch} />
            {/* Filtro */}
            <StatusFilter onFilterChange={handleStatusFilter} />
            {/* Resultados */}


            <CharacterLayout 
                characters={characters}
                isLoading={isLoading}
                hasError={hasError}
                onCharacterSelected={onCharacterSelected}
                onLoadMore={handleLoadMore}
                selectedCharacter={selectedCharacter}
                onCloseAside={onCloseModal}
            />

            {/* <CharacterResults characters={characters} isLoading={isLoading} hasError={hasError} onCharacterSelected={onCharacterSelected}/> */}

            {/* La barra lateral de información del personaje debería de ir aquí */}

            {/* <LoadMore onLoadMore={handleLoadMore} /> */}


      

        </>
    );
};
