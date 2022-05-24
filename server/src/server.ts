import express from "express";

const app = express();

app.use(express.json());

app.post("/feedbacks", (req, res) => {
	console.log(req.body);

	return res.send("<h1>hello world</h1>");
});

app.listen(3333, () => {
	console.log("HTTP server running!");
});
