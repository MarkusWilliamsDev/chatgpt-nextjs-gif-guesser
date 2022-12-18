import React, { useState, useEffect } from "react";
import dotenv from "dotenv";

dotenv.config();

const words = ["cat", "dog", "bird", "fish", "lizard"];
const API_KEY = process.env.GIPHY_API_KEY;

function App() {
	const [gif, setGif] = useState(null);

	function getGif() {
		// Choose a random word from the array
		const word = words[Math.floor(Math.random() * words.length)];

		// Make a request to the Giphy API with the chosen word
		return fetch(
			`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${word}&limit=1`
		)
			.then((res) => res.json())
			.then((data) => {
				// Set the GIF data as the state
				setGif(data.data[0]);
			});
	}

	return (
		<div className="container">
			{gif ? (
				<img src={gif.images.original.url} alt={gif.title} className="gif" />
			) : (
				<p>Loading GIF...</p>
			)}
			<button onClick={getGif} className="button">
				Generate new GIF
			</button>
		</div>
	);
}

export default App;
