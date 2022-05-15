import React from "react";
import CloseButton from "./CloseButton";

import bugImgUrl from "../assets/bug.svg";
import ideaImgUrl from "../assets/idea.svg";
import thoughtImgUrl from "../assets/thought.svg";

// stores img url and it's alt text 👇

const feedbackTypes = {
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
		title: "Problem",
		image: {
			source: thoughtImgUrl,
			alt: "Thought ballon image",
		},
	},
};

type FeedbackType = keyof typeof feedbackTypes; // keyof returns the keys of the feedbackTypes object

const WidgetForm = () => {
	const [feedbackType, setFeedbackType] = React.useState<FeedbackType | null>(null);
	return (
		<div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
			<header>
				<span className="text-xl leading-6">Leave your feedback</span>
				<CloseButton />
			</header>
			<div className="flex py-8 gap-2 w-full">
				{/* Object.entries return a array from a object */}
				{Object.entries(feedbackTypes).map(([key, value]) => (
					<button
						key={key}
						className="bg-zinc-800 rounded-lg py-5 w-24 flex flex-1 flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none transition-all"
						type="button"
						onClick={() => setFeedbackType(key as FeedbackType)}
					>
						<img src={value.image.source} alt={value.image.alt} />
						<span>{value.title}</span>
					</button>
				))}
			</div>
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
