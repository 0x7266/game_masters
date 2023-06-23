import { genres } from "../utils/genres";
import { GamesContext } from "../contexts/GamesContext";
import { useContext } from "react";

export default function Header() {
	const { filter, query } = useContext(GamesContext);

	return (
		<div className="max-w-3xl flex flex-col justify-center items-center gap-10">
			<div className="logo flex flex-row-reverse md:flex-row justify-center md:gap-5 items-center">
				<div className="text-6xl">🕹</div>
				<h1 className="text-5xl font-press-start font-bold">Game Masters</h1>
			</div>
			<input
				className="w-full rounded px-2 py-3 text-black text-2xl font-semibold"
				type="text"
				placeholder="Search by title"
				onChange={filter}
			/>
			<div className="w-2/3 flex flex-wrap justify-center gap-2">
				{genres.map((genre) => (
					<button
						className={`rounded border px-3 py-1 hover:scale-105 ${
							query.toLowerCase() === genre.toLowerCase()
								? "border-am-blue-lighter text-am-blue-lighter bg-am-blue-darker"
								: ""
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
