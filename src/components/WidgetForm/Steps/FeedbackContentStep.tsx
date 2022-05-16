import React from "react";
import { FeedbackType, feedbackTypes } from "..";
import CloseButton from "../../CloseButton";

interface FeedbackContentStepProps {
  feedbackType: FeedbackType;
}

const FeedbackContentStep = ({feedbackType}:FeedbackContentStepProps) => {
	return (
		<>
			<header>
				<span className="text-xl leading-6">{feedbackType}</span>
				<CloseButton />
			</header>
			<div className="flex py-8 gap-2 w-full">
			
			</div>
		</>
	);
};

export default FeedbackContentStep;
