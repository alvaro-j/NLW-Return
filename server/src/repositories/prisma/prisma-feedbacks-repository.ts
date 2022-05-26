import { FeedbacksCreateData, FeedbacksRepository } from "../feedbacks-repository";

export class PrismaFeedbacksRepository implements FeedbacksRepository {
	// database operations
	create(data: FeedbacksCreateData) {}
}
