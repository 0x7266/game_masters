import { useFilter } from "../hooks/useFilter";
import { genres } from "../utils/genres";
import { GamesContext } from "../contexts/GamesContext";
import { useContext } from "react";

export default function Header() {
	// const { filter } = useFilter();
	const { filter } = useContext(GamesContext);

	return (
		<div className="max-w-3xl flex flex-col justify-center items-center gap-10">
			<div className="logo flex gap-5 items-center">
				<div className="text-6xl">🕹</div>
				<h1 className="text-6xl font-bold">Game List</h1>
			</div>
			<input
				className="w-full rounded px-2 py-3 text-black font-semibold"
				type="text"
				onChange={filter}
			/>
			<div className="w-2/3 flex flex-wrap justify-center gap-2">
				{genres.map((genre) => (
					<button
						className="rounded border px-3 py-1"
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
