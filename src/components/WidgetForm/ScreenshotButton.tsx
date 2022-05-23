import html2canvas from "html2canvas";
import { Camera } from "phosphor-react";
import React from "react";
import Loading from "../Loading";

interface ScreenshotButtonProps {
	onScreenshotTook: (screenshot: string) => void;
	screenshot: string;
}

const ScreenshotButton = ({ onScreenshotTook, screenshot }: ScreenshotButtonProps) => {
	const [isTakingScreenshot, setIsTakingScreenshot] = React.useState(false);

	const handleTakeScreenshot = async () => {
		setIsTakingScreenshot(true);
		const canvas = await html2canvas(document.querySelector("html")!); // the exclamation mark forces typescript to accept the querySelector()
		const base64image = canvas.toDataURL("image/png"); // converts the print into a png with format base64
		onScreenshotTook(base64image);
		setIsTakingScreenshot(false);
	};
	if (screenshot) {
		return <p>foto</p>;
	}

	return (
		<button
			type="button"
			onClick={handleTakeScreenshot}
			className="p-2 bg-zinc-800 rounded-md border-transparent hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500"
		>
			{isTakingScreenshot ? <Loading /> : <Camera className="w-6 h-6" />}
		</button>
	);
};

export default ScreenshotButton;
