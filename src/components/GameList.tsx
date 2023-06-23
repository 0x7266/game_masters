import { GamesContext } from "../contexts/GamesContext";
import { useContext } from "react";
import GameCard from "./GameCard";
import Loader from "./Loader";
import { motion, AnimatePresence } from "framer-motion";

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
		<motion.div
			animate={{ opacity: 1 }}
			initial={{ opacity: 0 }}
			exit={{ opacity: 0 }}
		>
			{isLoading ? (
				<Loader />
			) : (
				<motion.div layout className="grid md:grid-cols-3 gap-3">
					<AnimatePresence>
						{filteredGames.games.map((game) => (
							<GameCard {...game} key={game.id} />
						))}
					</AnimatePresence>
				</motion.div>
			)}
		</motion.div>
	);
}
