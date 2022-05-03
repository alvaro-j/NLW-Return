import React from "react";

import { ChatTeardropDots } from "phosphor-react";

import { Popover } from "@headlessui/react";

const Widget = () => {
	return (
		<Popover className="absolute bottom-5 right-5">
			<Popover.Panel>oi</Popover.Panel>
			<Popover.Button className="bg-brand-500 rounded-full px-3 h-12 text-white flex items-center group">
				{/*groud class is to connect things and apply the same effects to the elements inside it, like hover*/}
				<ChatTeardropDots className="w-6 h-6" />
				<span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear">
					{/*max-w-0 = max width equals zero*/}
					Feedback
				</span>
			</Popover.Button>
		</Popover>
	);
};

export default Widget;
