import express from "express";
import { SubmitFeedbackUseCase } from "./use-cases/submit-feedback-use-cases";
import { PrismaFeedbacksRepository } from "./repositories/prisma/prisma-feedbacks-repository";
import { NodemailerMailAdapter } from "./adapters/nodemailer/nodemailer-mail-adapter";

export const routes = express.Router();

routes.post("/feedbacks", async (req, res) => {
	// uses async cause it can be slow to send the data sometimes
	const { type, comment, screenshot } = req.body; // gets the data from the object

	const prismaFeedbacksRepository = new PrismaFeedbacksRepository();
	const nodemailerMailAdapter = new NodemailerMailAdapter();

	const submitFeedbackUseCase = new SubmitFeedbackUseCase(
		prismaFeedbacksRepository,
		nodemailerMailAdapter
	);

	await submitFeedbackUseCase.execute({
		type,
		comment,
		screenshot,
	});

	return res.status(201).send(); // 201 means that smth was created
});
