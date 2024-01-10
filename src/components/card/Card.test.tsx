import { render, screen } from "@testing-library/react"

import { Card } from "./Card"

describe("[component] Card", () => {
    afterEach(() => {
        jest.restoreAllMocks()
    })

    test("renders api name text", () => {
        render(<Card api={"test"} seconds={0} />)
        const title = screen.getByText(/test/i)
        expect(title).toBeInTheDocument()
    })
})
