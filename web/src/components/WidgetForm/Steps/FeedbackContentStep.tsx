import { ArrowLeft } from "phosphor-react";
import React, { FormEvent } from "react";
import { FeedbackType, feedbackTypes } from "..";
import { api } from "../../../lib/api";
import CloseButton from "../../CloseButton";
import ScreenshotButton from "../ScreenshotButton";
import Loading from "../../Loading";

interface FeedbackContentStepProps {
	feedbackType: FeedbackType;
	onFeedbackRestartRequest: () => void;
	onFeedbackSent: () => void;
}

const FeedbackContentStep = ({
	feedbackType,
	onFeedbackRestartRequest,
	onFeedbackSent,
}: FeedbackContentStepProps) => {
	const [screenshot, setScreenshot] = React.useState<string | null>(null);
	const [comment, setComment] = React.useState("");
	const [isSendingFeedback, setIsSendingFeedback] = React.useState(false);

	const handleSubmitFeedback = async (e: FormEvent) => {
		// FormEvent is the interface from React
		e.preventDefault();
		setIsSendingFeedback(true);
		// console.log({ screenshot, comment });
		await api.post("/feedbacks", {
			type: feedbackType,
			comment,
			screenshot,
		});
		setIsSendingFeedback(false);
		onFeedbackSent();
	};

	const feedbackTypeInfo = feedbackTypes[feedbackType]; // sets the correct feedback type based on the object feedbackTypes
	return (
		<>
			<header>
				<button
					onClick={() => onFeedbackRestartRequest()}
					type="button"
					className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100 transition-all"
				>
					<ArrowLeft weight="bold" className="w-4 h-4" />
				</button>
				<span className="text-xl leading-6 flex gap-2">
					<img
						className="w-6 h-6"
						src={feedbackTypeInfo.image.source}
						alt={feedbackTypeInfo.image.alt}
					/>
					{feedbackTypeInfo.title}
				</span>
				<CloseButton />
			</header>
			<form onSubmit={handleSubmitFeedback} className="my-4 w-full">
				<textarea
					placeholder="Tell what's happening..."
					className="min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 resize-none focus:outline-none scrollbar scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"
					onChange={({ target }) => setComment(target.value)}
				/>
				<footer className="flex gap-2 mt-2">
					<ScreenshotButton screenshot={screenshot} onScreenshotTook={setScreenshot} />
					<button
						type="submit"
						className="p-2 bg-brand-500 rounded-md border-transparent flex-1 flex justify-center items-center text-sm hover:bg-brand-300 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 disabled:opacity-50 disabled:hover:bg-brand-500"
						disabled={!comment || isSendingFeedback}
					>
						{isSendingFeedback ? <Loading /> : "Send feedback"}
					</button>
				</footer>
			</form>
		</>
	);
};

export default FeedbackContentStep;
