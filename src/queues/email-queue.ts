import { sendEmail } from "@/lib/email";

export async function handleEmailQueue(batch: MessageBatch) {
  for (const message of batch.messages) {
    const { type, email, url } = message.body as {
      type: string;
      email: string;
      url: string;
    };

    try {
      if (type === "VERIFY_USER_EMAIL") {
        await sendEmail({
          to: email,
          subject: "Verify your email address",
          html: `<a href="${url}">Click here to verify your email</a>`,
        });
      }
      message.ack();
    } catch (error) {
      console.error("Failed to process email queue message:", error);
      message.retry();
    }
  }
}
