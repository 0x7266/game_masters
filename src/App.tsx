import Header from "./components/Header";
import GameList from "./components/GameList";
import { GamesContextProvider } from "./contexts/GamesContext";

function App() {
	return (
		<GamesContextProvider>
			<div className="min-h-screen py-5 bg-gradient-to-r from-am-blue-darker from-[-22.45%] to-am-blue-lighter to-[105.12%] flex flex-col items-center">
				<div className="container flex flex-col items-center gap-20 text-white">
					<Header />
					<GameList />
				</div>
			</div>
		</GamesContextProvider>
	);
}

export default App;
