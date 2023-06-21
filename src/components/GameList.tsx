import { useEffect, useState } from "react";
import { GameType } from "../types";
import Game from "./Game";

export default function GameList() {
	const [isLoading, setIsLoading] = useState(true);
	const [games, setGames] = useState<GameType[]>([]);

	async function getGames() {
		setIsLoading((prev) => true);
		try {
			const response = await fetch(
				"https://games-test-api-81e9fb0d564a.herokuapp.com/api/data/",
				{
					headers: {
						"dev-email-address": import.meta.env.VITE_REACT_EMAIL || "",
					},
				}
			);
			const data = await response.json();
			console.log(data);
			setGames(data);
		} catch (error) {
			console.log(`ERROR: ${error}`);
		} finally {
			setIsLoading((prev) => false);
		}
	}

	useEffect(() => {
		getGames();
	}, []);

	return (
		<div>
			{isLoading ? (
				<p> LOADING </p>
			) : (
				games && games.map((game) => <Game {...game} />)
			)}
		</div>
	);
}
