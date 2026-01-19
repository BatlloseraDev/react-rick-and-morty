import { useCharacters } from "./characters/hooks/useCharacters";
import { CharacterResults } from "./characters/components/CharacterResults";
import { CustomHeader } from "./shared/components/customHeader";
import { SearchBar } from "./shared/components/SearchBar";
import { LoadMore } from "./shared/components/LoadMore";


export const RickAndMortyApp = () => {
    const { characters, isLoading, hasError, handleSearch, handleLoadMore } = useCharacters();

    return (
        <>
            {/* Header */}
            <CustomHeader title="Rick and Morty App" />

            <hr />
            {/* Buscador */}
            <SearchBar onQuery={handleSearch} />
            
            <CharacterResults characters={characters} isLoading={isLoading} hasError={hasError} />

            <LoadMore onLoadMore={handleLoadMore} />

        </>
    );
};
