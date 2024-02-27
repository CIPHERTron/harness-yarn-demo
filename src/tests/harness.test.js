import React from "react"

import "@testing-library/jest-dom"
import "@testing-library/jest-dom/extend-expect"

import { render, screen } from "@testing-library/react"
import SuccessTest from "../components/SuccessTest"
import FailTest from "../components/FailTest"

test("Success Test renders successfully", () => {
	render(<SuccessTest />)

	const element = screen.getByText(/Success test/i)

	expect(element).toBeInTheDocument()
})

test("Failure Test renders successfully", () => {
	render(<FailTest />)

	const element = screen.getByText(/Failure test/i)

	expect(element).toBeInTheDocument()
})
test("Failure Test renders successfully", () => {
	render(<FailTest />)

	const element = screen.getByText(/Failure test/i)

	expect(element).toBeInTheDocument()
})
test("Failure Test renders successfully", () => {
	render(<FailTest />)

	const element = screen.getByText(/Failure test/i)

	expect(element).toBeInTheDocument()
})

// test("Failure Test renders successfully", () => {
// 	render(<FailTest />)

// 	const element = screen.getByText(/Random test/i)

// 	expect(element).toBeInTheDocument()
// })