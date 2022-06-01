import { SubmitFeedbackUseCase } from "./submit-feedback-use-case";

// creates a test suite
describe("Submit feedback", () => {
	// the keyword "it" test a functionality
	it("should be able to submit a feedback", async () => {
		const submitFeedback = new SubmitFeedbackUseCase(
			{ create: async () => {} },
			{ sendMail: async () => {} }
		);

		await expect(
			// expect is a PROMISE, that's why it uses an await
			submitFeedback.execute({
				type: "bug",
				comment: "trash app bro",
				screenshot: "hi.png",
			})
		).resolves.not.toThrow();
	});
});
