import { render } from "@testing-library/react"
import Header from "./index"

describe("Header", () => {
    it("deveria renderizar o componente", () => {

        expect(render(<Header />)).toBeTruthy();
    })

    it("deveria renderizar o componente com a classe correta", () => {
        const { container } = render(<Header />)
        expect(container.firstChild).toHaveClass("header");
    })
})