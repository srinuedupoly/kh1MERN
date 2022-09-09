import {render,screen} from '@testing-library/react'
import Header from './Header'

test("testing header",()=>{
    render(<Header></Header>)
    expect(screen.getAllByRole('listitem').length).not.toBe(0)
})