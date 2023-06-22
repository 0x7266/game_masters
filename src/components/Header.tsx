import { useContext } from "react";
import { GamesContext } from "../contexts/GamesContext";
import { useFilter } from "../hooks/useFilter";

export default function Header() {
	const genders: string[] = [
		"All",
		"Action RPG",
		"ARPG",
		"Battle Royale",
		"Card Game",
		"Fantasy",
		"Fighting",
		"MMO",
		"MMOARPG",
		"MMORPG",
		"MOBA",
		"Racing",
		"Social",
		"Shooter",
		"Sports",
		"Strategy",
	];

	const { filter } = useFilter();
	return (
		<div className="max-w-3xl flex flex-col justify-center items-center gap-10">
			<div className="logo flex gap-5 items-center">
				<div className="text-6xl">🕹</div>
				<h1 className="text-6xl">Game List</h1>
			</div>
			<input
				className="w-full rounded px-2 py-3 text-black font-semibold"
				type="text"
				onChange={(e: React.ChangeEvent<HTMLInputElement>) => filter(e)}
			/>
			<div className="w-2/3 flex flex-wrap justify-center gap-2">
				{genders.map((gender) => (
					<button
						className="rounded border px-3 py-1"
						key={gender}
						value={gender}
						onClick={(e) => filter(e)}
					>
						{gender}
					</button>
				))}
			</div>
		</div>
	);
}
