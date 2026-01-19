import { useEffect, useState, type KeyboardEvent } from "react";

interface Props {
    placeholder?: string;
    onQuery: (query: string) => void;

}


export const SearchBar = ({ placeholder= "Buscar personaje...", onQuery }: Props) => {
    const [query, setQuery] = useState<string>("");

    //useEffect pertenece la HU2

    //handle search pertenece a la HU2

    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder={placeholder}
            />
            <button >Buscar</button>
        </div>
    )
}