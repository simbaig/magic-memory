import { useState } from "react";
import "./App.css";

function App() {
	const cardImages = [
		{ src: "/img/helmet-1.png" },
		{ src: "/img/potion-1.png" },
		{ src: "/img/ring-1.png" },
		{ src: "/img/scroll-1.png" },
		{ src: "/img/shield-1.png" },
		{ src: "/img/sword-1.png" },
	];

	const [cards, setCards] = useState([]);
	const [turns, setTurns] = useState(0);

	// shuffle cards
	const shuffleCards = () => {
		const shuffledCards = [...cardImages, ...cardImages]
			.sort(() => Math.random() - 0.5)
			.map((card) => ({ ...card, id: Math.random() }));

		setCards(shuffledCards);
		setTurns(0);
	};

	return (
		<div className="App">
			<h1>Magic Match</h1>
			<button onClick={shuffleCards}>New Game</button>
		</div>
	);
}

export default App;
