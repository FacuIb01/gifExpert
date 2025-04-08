import {GifItem} from '../../src/components/GifItem'
import { render, screen } from '@testing-library/react'


describe('Test sobre el componente GifItem', () => { 

    const titulo = "Saitama"
    const url = "https://media0.giphy.com/media/v1.Y2lkPWMxNzAzYTRmdjV0bmpheTY5bnVmcTM1ZDR2MHd5eDMweHhhOTRya3lsbXEwbzhwYyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/VXJWhaO7afRe/giphy.gif"
    
    test("Debe hacer match con el SnapShot", () => {
        const {container} = render(<GifItem url= 'asasasa' title="dale boca"/>)
        expect(container).toMatchSnapshot()
    })


    test("el url debe ser el pasado por parametro", () => {
        render(<GifItem url={url} title={titulo}/>)
        expect(screen.getByRole("img").src).toBe(url)
        expect(screen.getByRole("img").alt).toBe(titulo)
    })

    test("el texto del titulo debe existir", () => {
        render(<GifItem url={url} title={titulo}/>)
        expect(screen.findAllByText(titulo)).toBeTruthy()
    })
 })