import express from "express";

import nodemailer from "nodemailer";

import { prisma } from "./prisma";

const app = express();

app.use(express.json());

const transport = nodemailer.createTransport({
	// initial config to nodemailer(it sends email)
	host: "smtp.mailtrap.io",
	port: 2525,
	auth: {
		user: "26571281aac4e3",
		pass: "42598ff95e76d8",
	},
});

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

	await transport.sendMail({ // it waits the email to be send before return
		from: "Feedget Team <oi@feedget.com>",
		to: "Álvaro Jaime <alvarojaime360@gmail.com>",
		subject: "New feedback",
		html: [
			`<div style="font-family: sans-serif; font-size: 16px; color: #111;">`,
			`<p>Feedback type: ${type}</p>`,
			`<p>Comment: ${comment}</p>`,
			`</div>`,
		].join("\n"),
	});

	return res.status(201).json({ data: feedback }); // 201 means that smth was created
});

app.listen(3333, () => {
	console.log("HTTP server running!");
});
