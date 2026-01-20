import { useEffect, useState, useRef, type ChangeEvent } from "react";

interface Props {
    placeholder?: string;
    onQuery: (query: string) => void;

}


export const SearchBar = ({ placeholder= "Buscar personaje...", onQuery }: Props) => {
    const [query, setQuery] = useState<string>("");

    //estaba por usar el Keyboard event pero eso registraria cada tecla pulsada, por ejemplo si el usuario pulsase f12 se volvenría a lanzar o cualquier otro boton no realacionado con teclas
    //esto me parece un incoveniente por lo que he buscado alternativas y se puede detectar cuando cambia el input del buscador
    const searchbarInputRef = useRef<HTMLInputElement>(null);

    //esto me asegura el autofoco en cuanto carga el componente 
    useEffect(()=>{
        searchbarInputRef.current?.focus();
    }, []);

    const onInputChange = (event: ChangeEvent<HTMLInputElement>)=>{
        onQuery(event.target.value);
    }

    return (
        <div className="search-bar">
            <input
                ref={searchbarInputRef}
                type="text"
                placeholder={placeholder}
                onChange={onInputChange}
            />
            {/* <button >Buscar</button> //->en teoria ya no me hace falta */}
        </div>
    )
}