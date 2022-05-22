import html2canvas from "html2canvas";
import { Camera } from "phosphor-react";
import React from "react";

const ScreenshotButton = () => {
	const handleTakeScreenshot = async () => {
		const canvas = await html2canvas(document.querySelector("html")!); // the exclamation mark forces typescript to accept the querySelector()
		const base64image = canvas.toDataURL("image/png"); // converts the print into a png with format base64
	};
	return (
		<button
			type="button"
			onClick={handleTakeScreenshot}
			className="p-2 bg-zinc-800 rounded-md border-transparent hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500"
		>
			<Camera className="w-6 h-6" />
		</button>
	);
};

export default ScreenshotButton;
