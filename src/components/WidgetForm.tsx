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

const WidgetForm = () => {
	return (
		<div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
			<header>
				<span className="text-xl leading-6">Leave your feedback</span>
				<CloseButton />
			</header>
			<div className="flex py-8 w-full">a</div>
			<footer className="text-xs text-neutral-500">
				Feito com ♥️ pela{" "}
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
