import express from "express";

import { prisma } from "./prisma";
import nodemailer from "nodemailer";
import { SubmitFeedbackUseCase } from "./use-cases/submit-feedback-use-cases";
import { PrismaFeedbacksRepository } from "./repositories/prisma/prisma-feedbacks-repository";

export const routes = express.Router();

const transport = nodemailer.createTransport({
	// initial config to nodemailer(it sends email)
	host: "smtp.mailtrap.io",
	port: 2525,
	auth: {
		user: "26571281aac4e3",
		pass: "42598ff95e76d8",
	},
});

routes.post("/feedbacks", async (req, res) => {
	// uses async cause it can be slow to send the data sometimes
	const { type, comment, screenshot } = req.body; // gets the data from the object

	const prismaFeedbacksRepository = new PrismaFeedbacksRepository();
	const submitFeedbackUseCase = new SubmitFeedbackUseCase(prismaFeedbacksRepository);

	await submitFeedbackUseCase.execute({
		type,
		comment,
		screenshot,
	});

	// await transport.sendMail({
	// 	// it waits the email to be send before return
	// 	from: "Feedget Team <oi@feedget.com>",
	// 	to: "Álvaro Jaime <alvarojaime360@gmail.com>",
	// 	subject: "New feedback",
	// 	html: [
	// 		`<div style="font-family: sans-serif; font-size: 16px; color: #111;">`,
	// 		`<p>Feedback type: ${type}</p>`,
	// 		`<p>Comment: ${comment}</p>`,
	// 		`</div>`,
	// 	].join("\n"),
	// });

	return res.status(201).send(); // 201 means that smth was created
});
