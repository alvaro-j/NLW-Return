import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
	// initial config to nodemailer(it sends email)
	host: "smtp.mailtrap.io",
	port: 2525,
	auth: {
		user: "26571281aac4e3",
		pass: "42598ff95e76d8",
	},
});

export class NodemailerMailAdapter implements MailAdapter {
	async sendMail({ subject, body }: SendMailData) {
		await transport.sendMail({
			// it waits the email to be send before return
			from: "Feedget Team <oi@feedget.com>",
			to: "Álvaro Jaime <alvarojaime360@gmail.com>",
			subject,
			html: body,
		});
	}
}
