import { render, screen, fireEvent } from "@testing-library/react"
import { GifGrid } from "../../src/components"
import { useFetchGifs } from "../../src/hooks/useFetchGifs"
jest.mock("../../src/hooks/useFetchGifs")

describe('Pruebas en el componente GifGrid', () => { 

    const category = "One Punch"
    test('debe mostrar el loading inicialmente', () => { 
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true,
        })
        render(<GifGrid category={category}/>)

        expect(screen.getByText("Cargando"))
        expect(screen.getByText(category))
     })


     test('Debe generar los elementos del grid luego del useFetchGif', () => { 

        const gifs = [
            {
                id: 1,
                title: "goku",
                url: "hajsfjaklñf"
            }
        ]

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false,
        })

        render(<GifGrid category={category}/>)
        expect(screen.getByText("goku"))
      })

      test('debe llamar a onDeleteCategorie el boton de borrar categoria', () => { 
        const onDeleteCategorie = jest.fn()
        const gifs = [
            {
                id: 1,
                title: "goku",
                url: "hajsfjaklñf"
            }
        ]

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false,
        })

        render(<GifGrid category={category} onDeleteCategorie={onDeleteCategorie}/>)
        fireEvent.click(screen.getByLabelText("botonBorrar"))

        expect(onDeleteCategorie).toHaveBeenCalledTimes(1)
        expect(onDeleteCategorie).toHaveBeenCalledWith("One Punch")

       })
 })