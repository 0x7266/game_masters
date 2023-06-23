import { createContext, useEffect, useState, useMemo } from "react";
import {
	ContextChildrenProps,
	Game,
	GamesContextType,
	Response,
} from "../types.js";
import { genres } from "../utils/genres";

export const GamesContext = createContext<GamesContextType>({
	response: { games: [], status: 100 },
	setResponse: () => [],
	isLoading: true,
	setIsLoading: () => true,
	filter: () => {
		("");
	},
	filteredGames: { games: [], status: 100 },
	query: "All",
});

export function GamesContextProvider({ children }: ContextChildrenProps) {
	const [response, setResponse] = useState<Response>({
		games: [],
		status: 100,
	});
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [query, setQuery] = useState<string>("All");

	async function getGames() {
		setIsLoading(true);
		try {
			const response = await fetch(
				"https://games-test-api-81e9fb0d564a.herokuapp.com/api/data/",
				{
					headers: {
						"dev-email-address":
							import.meta.env.VITE_REACT_EMAIL || "test_email@appmaster.io",
					},
				}
			);
			const data = await response.json();
			setResponse({ games: data, status: response.status });
		} catch (error) {
			console.log(`ERROR: ${error}`);
		} finally {
			setIsLoading(false);
		}
	}

	useEffect(() => {
		getGames();
	}, []);

	const filteredGames: Response = useMemo(() => {
		if (query.toLocaleLowerCase() === "all") {
			return response;
		}
		if (genres.includes(query)) {
			return {
				games: response.games.filter((game: Game) => {
					return game.genre.toLowerCase().includes(query);
				}),
				status: response.status,
			};
		}
		if (query !== "") {
			return {
				games: response.games.filter((game: Game) => {
					return game.title.toLowerCase().includes(query);
				}),
				status: response.status,
			};
		}
		return response;
	}, [query, response]);

	function filter(
		event:
			| React.ChangeEvent<HTMLInputElement>
			| React.MouseEvent<HTMLButtonElement>
	) {
		event.preventDefault();
		setQuery(event.currentTarget.value.toLowerCase());
	}

	return (
		<GamesContext.Provider
			value={{
				response,
				setResponse,
				isLoading,
				setIsLoading,
				filteredGames,
				filter,
				query,
			}}
		>
			{children}
		</GamesContext.Provider>
	);
}
