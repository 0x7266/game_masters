import { GameType } from "../types";

export default function GameCard(props: GameType) {
	return (
		<div className="bg-am-blue-lighter max-w-sm rounded overflow-hidden shadow-lg flex flex-col justify-between">
			<img
				className="w-full"
				src={props.thumbnail}
				alt="Sunset in the mountains"
			/>
			<div className="px-6 py-4">
				<div className="font-bold text-xl mb-2">The Coldest Sunset</div>
				<p className="text-gray-700 text-base">{props.short_description}</p>
			</div>
			<div className="px-6 pt-4 pb-2">
				<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
					{props.genre}
				</span>
			</div>
		</div>
	);
}
