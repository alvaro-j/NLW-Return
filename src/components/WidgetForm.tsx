import React from "react";

const WidgetForm = () => {
	return (
		<div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
			<header>
				<span className="text-xl leading-6">Leave your feedback</span>
			</header>
			<p>keep it a buck bro</p>
			<footer className="text-xs text-neutral-500">
				Feito com ♥️ pela{" "}
				<a className="underline underline-offset-2" target="_blank" href="https://rocketseat.com.br">
					Rocketseat
				</a>
			</footer>
		</div>
	);
};

export default WidgetForm;
