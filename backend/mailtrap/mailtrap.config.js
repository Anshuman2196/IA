import { MailtrapClient } from "mailtrap";
import dotenv from "dotenv";


dotenv.config()

export const mailtrapClient = new MailtrapClient({ token: "250430f2ed226131b68ae07c198525bc",});

export const sender = {
  email: "mailtrap@demomailtrap.com",
  name: "IA",
};