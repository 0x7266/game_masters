import { GameType } from "../types";

export default function Game(props: GameType) {
	return (
		<div>
			<div className="text-2xl">{props.title}</div>
		</div>
	);
}
