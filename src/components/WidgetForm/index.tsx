import React from "react";
import CloseButton from "../CloseButton";

import bugImgUrl from "../../assets/bug.svg";
import ideaImgUrl from "../../assets/idea.svg";
import thoughtImgUrl from "../../assets/thought.svg";
import FeedbackTypeStep from "./Steps/FeedbackTypeStep";
import FeedbackContentStep from "./Steps/FeedbackContentStep";
import FeedbackSuccesStep from "./Steps/FeedbackSuccesStep";

// stores img url and it's alt text 👇

export const feedbackTypes = {
	BUG: {
		title: "Problem",
		image: {
			source: bugImgUrl,
			alt: "Insect image",
		},
	},
	IDEA: {
		title: "Idea",
		image: {
			source: ideaImgUrl,
			alt: "Light bulb image",
		},
	},
	OTHER: {
		title: "Other",
		image: {
			source: thoughtImgUrl,
			alt: "Thought ballon image",
		},
	},
};

export type FeedbackType = keyof typeof feedbackTypes; // keyof returns the keys of the feedbackTypes object

const WidgetForm = () => {
	const [feedbackType, setFeedbackType] = React.useState<FeedbackType | null>(null);
	const [feedbackSent, setFeedbackSent] = React.useState(false);

	const handleRestartFeedback = () => {
		setFeedbackType(null);
	};

	return (
		<div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
			{feedbackSent ? (
				<FeedbackSuccesStep />
			) : (
				<>
					{!feedbackType ? ( // if feedbackType is false, it shows the screen to choose it
						<FeedbackTypeStep onFeedbackTypeChange={setFeedbackType} />
					) : (
						<FeedbackContentStep
							onFeedbackRestartRequest={handleRestartFeedback}
							feedbackType={feedbackType}
							onFeedbackSent={() => setFeedbackSent(true)}
						/>
					)}
				</>
			)}
			<footer className="text-xs text-neutral-500">
				Made with ♥️ by{" "}
				<a
					className="underline underline-offset-2"
					target="_blank"
					href="https://rocketseat.com.br"
				>
					Rocketseat
				</a>
			</footer>
		</div>
	);
};

export default WidgetForm;
