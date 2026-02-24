import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";

const ses = new SESClient({
  region: process.env.AWS_REGION!,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

const FROM_EMAIL = "noreply@yamaha.best";

export async function sendSubscriptionEmail(toEmail: string) {
  const command = new SendEmailCommand({
    Source: FROM_EMAIL,
    Destination: {
      ToAddresses: [toEmail],
    },
    Message: {
      Subject: {
        Data: "Welcome to Yamaha Hi-Fi!",
        Charset: "UTF-8",
      },
      Body: {
        Html: {
          Data: `
            <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px;">
              <h1 style="color: #1a1a2e; font-size: 28px; margin-bottom: 16px;">
                Welcome to Yamaha Hi-Fi
              </h1>
              <p style="color: #555; font-size: 16px; line-height: 1.6;">
                Thank you for subscribing! You'll now receive exclusive offers,
                new product announcements, and audiophile tips delivered to your inbox.
              </p>
              <hr style="border: none; border-top: 1px solid #eee; margin: 32px 0;" />
              <p style="color: #999; font-size: 13px;">
                Yamaha Hi-Fi — Sound Beyond Perfection<br />
                <a href="https://yamaha.best" style="color: #0033a0;">yamaha.best</a>
              </p>
            </div>
          `,
          Charset: "UTF-8",
        },
      },
    },
  });

  await ses.send(command);
}
