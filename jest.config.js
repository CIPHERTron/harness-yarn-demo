module.exports = {
	moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
	collectCoverage: true,
	coverageDirectory: "src/testCoverage",
	coverageReporters: ["text"],
	testEnvironment: "jsdom",
	reporters: [
		"default",
		[
			"jest-junit",
			{
				usePathForSuiteName: true,
				outputDirectory: "src/testCoverage",
			},
		],
	],
	testResultsProcessor: "jest-junit",
}
