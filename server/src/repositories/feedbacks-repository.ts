export interface FeedbacksCreateData {
	// what kind of data it needs to create the feedback
	type: string;
	comment: string;
	screenshot?: string;
}

export interface FeedbacksRepository {
	// defines the methods for the feedbacks
	create: (data: FeedbacksCreateData) => Promise<void>; // creates a new feedback
	// returns a Promise cause the create method is an async function
}
