export interface RickAndMortyResponse {
    info:    Info;
    results: Result[];
}

export interface Info {
    count: number;
    pages: number;
    next:  string;
    prev:  null;
}

export interface Result {
    id:       number;
    name:     string;
    status:   Status;
    species:  Species;
    type:     string;
    gender:   Gender;
    origin:   Location;
    location: Location;
    image:    string;
    episode:  string[];
    url:      string;
    created:  Date;
}


/*

export enum Gender {
    Female = "Female",
    Male = "Male",
    Unknown = "unknown",
}
export enum Species {
    Alien = "Alien",
    Human = "Human",
}

export enum Status {
    Alive = "Alive",
    Dead = "Dead",
    Unknown = "unknown",
}


*/
//Lo he tenigo que cambiar a así porque de la otra manera me daba error
export type Gender = "Female" | "Male" | "Genderless" | "unknown";
export type Status = "Alive" | "Dead" | "unknown";
export type Species = "Alien" | "Human";




export interface Location {
    name: string;
    url:  string;
}


