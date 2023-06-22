import { GamesContext } from "../contexts/GamesContext";
import { useContext } from "react";
import { useFilter } from "../hooks/useFilter";
import GameCard from "./GameCard";
import Loader from "./Loader";

export default function GameList() {
	const { filteredGames, isLoading } = useContext(GamesContext);
	if (filteredGames.status >= 500 && filteredGames.status <= 509) {
		return <div>ERROR</div>;
	}
	if (filteredGames.status >= 500) {
		return <div>ERROR</div>;
	}
	console.log(filteredGames);
	return (
		<>
			{isLoading ? (
				<Loader />
			) : (
				<div className="grid grid-cols-3 gap-3">
					{filteredGames.games.map((game) => (
						<GameCard {...game} key={game.id} />
					))}
				</div>
			)}
		</>
	);
}
