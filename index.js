const express = require('express');
const {fetch} = require('undici');
const app = express();
const PORT = 3000;

app.get('/', async (req, res) => {
	try {
		const response = await fetch('https://yesno.wtf/api');
		const data = await response.json();
		const html = `
		<h1>Yes or No?</h1>
		<p>Answer: <strong>${data.answer.toUpperCase()}</strong></p>
		<img src="${data.image}" alt="YesNo GIF" />
		`;
		res.send(html);
	} catch (error) {
		res.status(500).send('Error fetching from API');
	}
	});

	app.listen(PORT, () => {
		console.log(`Server running at http://localhost:${PORT}`);
	});