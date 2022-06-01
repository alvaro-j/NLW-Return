import { SubmitFeedbackUseCase } from "./submit-feedback-use-case";

// the spy functions observes when another function is called
const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();

const submitFeedback = new SubmitFeedbackUseCase(
	{ create: createFeedbackSpy },
	{ sendMail: sendMailSpy }
);

// creates a test suite
describe("Submit feedback", () => {
	// the keyword "it" test a functionality
	it("should be able to submit a feedback", async () => {
		await expect(
			// expect is a PROMISE, that's why it uses an await
			submitFeedback.execute({
				type: "bug",
				comment: "trash app bro",
				screenshot: "data:image/png;base64,ji02j09jweq20ej09j",
			})
		).resolves.not.toThrow();

		expect(createFeedbackSpy).toHaveBeenCalled();
		expect(sendMailSpy).toHaveBeenCalled();
	});

	it("shouldn't be able to submit a feedback without type", async () => {
		await expect(
			// expect is a PROMISE, that's why it uses an await
			submitFeedback.execute({
				type: "",
				comment: "trash app bro",
				screenshot: "data:image/png;base64,ji02j09jweq20ej09j",
			})
		).rejects.toThrow();
	});

	it("shouldn't be able to submit a feedback without comment", async () => {
		await expect(
			// expect is a PROMISE, that's why it uses an await
			submitFeedback.execute({
				type: "bug",
				comment: "",
				screenshot: "data:image/png;base64,ji02j09jweq20ej09j",
			})
		).rejects.toThrow();
	});

	it("shouldn't be able to submit a feedback with an invalid screeshot format", async () => {
		await expect(
			// expect is a PROMISE, that's why it uses an await
			submitFeedback.execute({
				type: "bug",
				comment: "trash app bro",
				screenshot: "hi.png",
			})
		).rejects.toThrow();
	});
});
