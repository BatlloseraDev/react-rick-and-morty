
interface Props{
    onFilterChange: (status: string) => void;
}


export const StatusFilter = ({onFilterChange}: Props) =>{
    //primero me aseguro que cargue bien el componente
    //detectar que ha cambiado el input (el filtro)
    const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>)=>{
        onFilterChange(event.target.value);
    }

    return (
        <div className="status-filter">
            {/* Para poder limpiar el filtro ya que uso radiobuttons */}
            <label>
                <input type="radio"
                    name="status"
                    value=""
                    defaultChecked
                    onChange={handleFilterChange}
                />Todos
            </label>
            <label>
                <input type="radio"
                    name="status"
                    value="alive"
                    onChange={handleFilterChange}
                />Vivo
            </label>
            <label>
                <input type="radio"
                    name="status"
                    value="dead"
                    onChange={handleFilterChange}
                />Muerto
            </label>
            <label>
                <input type="radio"
                    name="status"
                    value="unknown"
                    onChange={handleFilterChange}
                />Desconocido
            </label>
        </div>
    )
}