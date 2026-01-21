import { useCharacters } from "./characters/hooks/useCharacters";
import { CharacterResults } from "./characters/components/CharacterResults";
import { CustomHeader } from "./shared/components/customHeader";
import { SearchBar } from "./shared/components/SearchBar";
import { LoadMore } from "./shared/components/LoadMore";
import { StatusFilter } from "./characters/components/StatusFilter";


export const RickAndMortyApp = () => {
    const { characters, isLoading, hasError, handleSearch, handleLoadMore, handleStatusFilter } = useCharacters();

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


            <CharacterResults characters={characters} isLoading={isLoading} hasError={hasError} />

            {/* La barra lateral de información del personaje debería de ir aquí */}

            <LoadMore onLoadMore={handleLoadMore} />

        </>
    );
};
