import { describe, expect , test} from "vitest";
import { renderHook } from '@testing-library/react';
import { useCharacters } from "./useCharacters";


describe("Pruebas en useCharacters",()=>{
    test("debe cargar el hook correctamente devolviendo el estado inicial",()=>{
        const { result } = renderHook(() => useCharacters());
        //esto lo he tenido que buscar, se puede renderizar un hook a traves del test
        const { characters, isLoading, hasError, selectedCharacter } = result.current;
        //creo las constantes del hook al cual le he pasado información vacia
        expect(characters).toEqual([]);
        expect(isLoading).toBe(true);
        expect(hasError).toBe(false);
        expect(selectedCharacter).toBeNull();
    })
})