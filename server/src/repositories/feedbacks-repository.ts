interface FeedbacksCreateData {
	// what kind of data it needs to create the feedback
	type: string;
	comment: string;
	screenshot?: string;
}

export interface FeedbacksRepository {
	// defines the methods for the feedbacks
	create: () => void; // creates a new feedback
}
