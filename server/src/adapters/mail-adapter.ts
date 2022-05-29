// the adapterss folder is for the services apart from the database
export interface SendMailData {
	subject: string;
	body: string;
}

export interface MailAdapter {
	sendMail: (data: SendMailData) => Promise<void>;
}
