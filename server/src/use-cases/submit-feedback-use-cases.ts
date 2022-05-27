// the use-cases folder is the actions that the user can perform
import { FeedbacksRepository } from "../repositories/feedbacks-repository";

interface SubmitFeedbackUseCaseRequest {
	type: string;
	comment: string;
	screenshot?: string;
}

export class SubmitFeedbackUseCase {
	constructor(private feedbacksRepository: FeedbacksRepository) {}

	async execute(request: SubmitFeedbackUseCaseRequest) {
		const { type, comment, screenshot } = request;

		await this.feedbacksRepository.create({
			type,
			comment,
			screenshot,
		});
    
	}
}
