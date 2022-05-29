import express from "express";

import { prisma } from "./prisma";
import nodemailer from "nodemailer";
import { SubmitFeedbackUseCase } from "./use-cases/submit-feedback-use-cases";
import { PrismaFeedbacksRepository } from "./repositories/prisma/prisma-feedbacks-repository";

export const routes = express.Router();

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

	return res.status(201).send(); // 201 means that smth was created
});
