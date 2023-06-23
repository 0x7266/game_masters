import { GamesContext } from "../contexts/GamesContext";
import { useContext } from "react";
import GameCard from "./GameCard";
import Loader from "./Loader";
import { motion, AnimatePresence } from "framer-motion";
import Error from "./Error";

export default function GameList() {
	const { filteredGames, isLoading } = useContext(GamesContext);

	if (filteredGames.status >= 200 && filteredGames.status <= 209) {
		return (
			<motion.div
				animate={{ opacity: 1 }}
				initial={{ opacity: 0 }}
				exit={{ opacity: 0 }}
			>
				{isLoading ? (
					<Loader />
				) : (
					<motion.div layout className="grid md:grid-cols-3 gap-3 p-2">
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

	if (filteredGames.status >= 500 && filteredGames.status <= 509) {
		return (
			<Error
				message="O servidor falhou em responder, tente recarregar a página."
				status_code={filteredGames.status}
			/>
		);
	}

	return (
		<Error
			message="O servidor não conseguirá responder por agora, tente voltar novamente mais tarde"
			status_code={filteredGames.status}
		/>
	);
}
