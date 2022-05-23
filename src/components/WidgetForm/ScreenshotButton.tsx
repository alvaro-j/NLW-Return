import html2canvas from "html2canvas";
import { Camera, Trash } from "phosphor-react";
import React from "react";
import Loading from "../Loading";

interface ScreenshotButtonProps {
	onScreenshotTook: (screenshot: string | null) => void;
	screenshot: string | null;
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
		return (
			<button
				type="button"
				className="p-1 h-10 w-10 rounded-md border-transparent flex justify-end items-end text-zinc-400 hover:text-zinc-100 transition-colors"
				style={{
					backgroundImage: `url(${screenshot})`,
					backgroundPosition: "right bottom",
					backgroundSize: 100,
				}}
			>
				<Trash weight="fill" />
			</button>
		);
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
