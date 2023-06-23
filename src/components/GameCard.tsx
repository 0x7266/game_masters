import { Game } from "../types";
import { motion } from "framer-motion";

export default function GameCard(props: Game) {
	return (
		<motion.div
			layout
			animate={{ opacity: 1 }}
			initial={{ opacity: 0 }}
			exit={{ opacity: 0 }}
			className="relative overflow-hidden shadow-lg flex flex-col justify-between group rounded"
		>
			<img
				className="w-96"
				src={props.thumbnail}
				alt="Sunset in the mountains"
			/>
			<div className="absolute top-72 group-hover:top-0 transition-all duration-300 bg-white flex flex-col h-full">
				<div className="self-end relative p-2">
					<span className="inline-block bg-gray-200 rounded px-3 py-1 text-sm font-semibold text-gray-700">
						{props.genre}
					</span>
				</div>
				<div className="grow px-4 flex flex-col gap-2">
					<div className="font-bold text-2xl uppercase text-black underline">
						{props.title}
					</div>
					<p className="text-gray-700 text-base">{props.short_description}</p>
				</div>
			</div>
		</motion.div>
	);
}
