export type Game = {
	id: number;
	title: string;
	thumbnail: string;
	short_description: string;
	game_url: string;
	genre: string;
	platform: string;
	publisher: string;
	developer: string;
	release_date: string;
	freetogame_profile_url: string;
};

export type Response = {
	games: Game[];
	status: number;
};

export type GamesContextType = {
	response: Response;
	setResponse: React.Dispatch<React.SetStateAction<Response>>;
	isLoading: boolean;
	setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
	filteredGames: Response;
	filter: (
		event:
			| React.ChangeEvent<HTMLInputElement>
			| React.MouseEvent<HTMLButtonElement>
	) => void;
	query: string;
};

export type ContextChildrenProps = {
	children: React.ReactNode;
};
