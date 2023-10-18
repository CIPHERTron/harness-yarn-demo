import "@testing-library/jest-dom"
import "@testing-library/jest-dom/extend-expect"

import { render, screen } from "@testing-library/react"
import FailTest from "../components/FailTest"

test("Failure Test renders successfully", () => {
	render(<FailTest />)

	const element = screen.getByText(/Random test/i)

	expect(element).toBeInTheDocument()
})