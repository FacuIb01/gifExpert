import { screen, fireEvent, render } from "@testing-library/react"
import {AddCategory} from '../../src/components/AddCategory'

describe('Pruebas en elcomponente AddCategory',  () => {

    test("El valor de la caja de texto debe cambiar", () => {
        const inputValue = 'Saitama'
        render(<AddCategory onNewCategorie={() => {}}/>)
        const input = screen.getByRole("textbox")
        fireEvent.input(input, {target: {value: inputValue}})

        expect(input.value).toBe("Saitama")
    })


    test('El valor de la caja de texto debe vaciarse al hacer submit', () => { 
        const inputValue = 'Saitama'
        const onNewCategorie = jest.fn()

        render(<AddCategory onNewCategorie={onNewCategorie}/>)
        const input = screen.getByRole("textbox")
        const form  = screen.getByRole("form")

        fireEvent.input(input, {target: {value: inputValue}})
        fireEvent.submit(form)

        expect(input.value).toBe("")

        expect(onNewCategorie).toHaveBeenCalled()
        expect(onNewCategorie).toHaveBeenCalledTimes(1)
        expect(onNewCategorie).toHaveBeenCalledWith(inputValue)

     })

     test('No debe llamar a la funcion onNewCategory si no hay texto en el textbox', () => { 
        const inputValue = 'Saitama'
        const onNewCategorie = jest.fn()
        render(<AddCategory onNewCategorie={onNewCategorie}/>)

        const form = screen.getByRole("form")
        
        fireEvent.submit(form)

        //expect(onNewCategorie).toHaveBeenCalledTimes(0)
        expect(onNewCategorie).not.toHaveBeenCalled()
      })
    })