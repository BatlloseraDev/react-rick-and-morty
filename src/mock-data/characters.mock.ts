import type { Character } from "../characters/interfaces/character.interfaces";

export const mockCharacters: Character[] = [
    {
        id: 1,
        name: "Rick Sanchez",
        image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
        status: "Alive",
        species: "Human",
        gender: "Male",
        origin: {
            name: "Earth (C-137)",
            url: "https://rickandmortyapi.com/api/location/1"
        },
        location: {
            name: "Earth (Replacement Dimension)",
            url: "https://rickandmortyapi.com/api/location/20"
        }
    }, {
        id: 2,
        name: "Morty Smith",
        image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
        status: "Alive",
        species: "Human",
        gender: "Male",
        origin: {
            name: "Earth (C-137)",
            url: "https://rickandmortyapi.com/api/location/1"
        },
        location: {
            name: "Earth (Replacement Dimension)",
            url: "https://rickandmortyapi.com/api/location/20"
        }
    },
    {
        id: 3,
        name: "Summer Smith",
        image: "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
        status: "Alive",
        species: "Human",
        gender: "Female",
        origin: {
            name: "Earth (Replacement Dimension)",
            url: "https://rickandmortyapi.com/api/location/20"
        },
        location: {
            name: "Earth (Replacement Dimension)",
            url: "https://rickandmortyapi.com/api/location/20"
        }
    },
    {
        id: 4,
        name: "Beth Smith",
        image: "https://rickandmortyapi.com/api/character/avatar/4.jpeg",
        status: "Alive",
        species: "Human",
        gender: "Female",
        origin: {
            name: "Earth (Replacement Dimension)",
            url: "https://rickandmortyapi.com/api/location/20"
        },
        location: {
            name: "Earth (Replacement Dimension)",
            url: "https://rickandmortyapi.com/api/location/20"
        }
    },
    {
        id: 5,
        name: "Jerry Smith",
        image: "https://rickandmortyapi.com/api/character/avatar/5.jpeg",
        status: "Alive",
        species: "Human",
        gender: "Male",
        origin: {
            name: "Earth (Replacement Dimension)",
            url: "https://rickandmortyapi.com/api/location/20"
        },
        location: {
            name: "Earth (Replacement Dimension)",
            url: "https://rickandmortyapi.com/api/location/20"
        }
    }
]