import React from "react";

import { ChatTeardropDots } from "phosphor-react";

const Widget = () => {
	return (
		<div className="absolute bottom-5 right-5">
			<button className="bg-brand-500 rounded-full px-3 h-12 text-white flex items-center group">
				{/*groud class is to connect things and apply the same effects to the elements inside it, like hover*/}
				<ChatTeardropDots className="w-6 h-6" />
				<span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all">
					{/*max-w-0 = max width equals zero*/}
					Feedback
				</span>
			</button>
		</div>
	);
};

export default Widget;
