import React from "react"

import "@testing-library/jest-dom"
import "@testing-library/jest-dom/extend-expect"

import { render, screen } from "@testing-library/react"
import SuccessTest from "../components/SuccessTest"

test("Success Test renders successfully", () => {
	render(<SuccessTest />)

	const element = screen.getByText(/Success test/i)

	expect(element).toBeInTheDocument()
})
