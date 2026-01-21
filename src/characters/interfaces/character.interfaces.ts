
//interfaz preparada para su utilización
export interface Character {
    id: number;
    name: string;
    image: string;
    status: string;
    species: string;
    gender: string;

    //datos nuevos para el modal
    origin: {
        name: string;
        url: string;
    };
    location: {
        name: string;
        url: string;
    }
}