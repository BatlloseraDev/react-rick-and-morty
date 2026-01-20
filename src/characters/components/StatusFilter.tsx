
interface Props{
    onFilterChange: (status: string) => void;
}


export const StatusFilter = ({onFilterChange}: Props) =>{
    //primero me aseguro que cargue bien el componente
    
    return (
        <div className="status-filter">
            {/* Para poder limpiar el filtro ya que uso radiobuttons */}
            <label>
                <input type="radio"
                    name="status"
                    value=""
                    defaultChecked
                />Todos
            </label>
            <label>
                <input type="radio"
                    name="status"
                    value="alive"
                />Vivo
            </label>
            <label>
                <input type="radio"
                    name="status"
                    value="dead"
                />Muerto
            </label>
            <label>
                <input type="radio"
                    name="status"
                    value="unknown"
                />Desconocido
            </label>
        </div>
    )
}