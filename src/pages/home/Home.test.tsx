import { render, screen } from "@testing-library/react"

import Home from "./Home"

describe("[page] Home", () => {
    test("renders healthy check dashboard title", () => {
        render(<Home />)
        const title = screen.getByText(/Healthy Check Dashboard/i)
        expect(title).toBeInTheDocument()
    })
})
