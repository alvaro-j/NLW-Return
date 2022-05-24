import express from "express";
import { prisma } from "./prisma";

const app = express();

app.use(express.json());

app.post("/feedbacks", async (req, res) => {
	// uses async cause it can be slow to send the data sometimes
	const { type, comment, screenshot } = req.body; // gets the data from the object

	const feedback = await prisma.feedback.create({
		data: {
			type,
			comment,
			screenshot,
		},
	});

	return res.status(201).json({ data: feedback }); // 201 means that smth was created
});

app.listen(3333, () => {
	console.log("HTTP server running!");
});
