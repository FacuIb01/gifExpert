import { GifExpertApp } from "../src/GifExpertApp";

import { fireEvent, render, screen } from '@testing-library/react'

describe('pruebas en el compontente GifExpertApp', () => { 
    const inputValue = "Goku"
    test('Debe renderizar nuevas categorias al agregarlas a su estado', () => { 

        render(<GifExpertApp/>)

        const input = screen.getByRole("textbox")
        fireEvent.input(input, {target: {value: inputValue}})

        const form  = screen.getByRole("form")
        fireEvent.submit(form)

        expect(screen.getByText("Goku")).toBeTruthy()
     })

    test('debe eliminar una categoria cuando se presiona el boton', () => { 

        render(<GifExpertApp/>)
        
        fireEvent.click(screen.getByLabelText("botonBorrar"))

        expect(screen.queryByText("One Punch")).toBeFalsy()
     })
 })