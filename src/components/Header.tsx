import { genres } from "../utils/genres";
import { GamesContext } from "../contexts/GamesContext";
import { useContext } from "react";

export default function Header() {
	const { filter, query } = useContext(GamesContext);

	return (
		<div className="w-full md:max-w-3xl flex flex-col justify-center items-center gap-10 relative">
			<div className="logo flex flex-row-reverse md:flex-row justify-center md:gap-5 items-center">
				<div className="text-7xl relative -top-7 -left-10 md:block sm:top-0 sm:left-0">
					🕹
				</div>
				<h1 className="text-6xl md:text-7xl font-rubik font-bold relative left-12 top-2  md:left-0 md:top-0">
					Game Masters
				</h1>
			</div>
			<input
				className="md:w-full rounded px-2 py-3 text-black text-2xl font-semibold"
				type="text"
				placeholder="Search by title"
				onChange={filter}
			/>
			<div className="md:w-2/3 flex flex-wrap justify-center gap-2">
				{genres.map((genre) => (
					<button
						className={`shadow-sm rounded border-2 px-3 py-1 hover:scale-105 relative active:top-[2px] transition-all ${
							query.toLowerCase() === genre.toLowerCase()
								? "text-white border-white border-2"
								: "border-am-blue-lighter text-gray-400 bg-am-blue-darker"
						}`}
						key={genre}
						value={genre}
						onClick={filter}
					>
						{genre.toUpperCase()}
					</button>
				))}
			</div>
		</div>
	);
}
