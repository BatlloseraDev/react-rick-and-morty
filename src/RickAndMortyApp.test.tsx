import {describe, expect, test} from 'vitest'
import { render } from "@testing-library/react";
import { RickAndMortyApp } from "./RickAndMortyApp";

describe('RickAndMortyApp', () => {
    test("Debería de renderizar la aplicacion de rick and morty", ()=>{
        const {container} = render(<RickAndMortyApp />)
        expect(container).toMatchSnapshot();
    })
});