import { describe, expect , test} from "vitest";
import { render, screen } from '@testing-library/react';
import { CharacterCard } from "./CharacterCard";
import type { Character } from "../interfaces/character.interfaces";
import { mockCharacters } from "../../mock-data/characters.mock";


describe('Pruebas en <CharacterCard>', ()=>{
    test("debe mostrar la imagen y el nombre del personaje correctamente", ()=>{
        const character = mockCharacters[0] as Character;
        render(<CharacterCard character={character} onCharacterSelected={() => {}} />);
        
        expect(screen.getByText(character.name)).toBeTruthy();

        const img = screen.getByRole('img') as HTMLImageElement;
        expect(img.src).toBe(character.image);
        expect(img.alt).toBe(character.name);
    })
})