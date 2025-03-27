const nodeMailer = require("nodemailer");

const transporter = nodeMailer.createTransport({
  service: "gmail",
  auth: {
    user: "richardgeek017@gmail.com",
    pass: process.env.SMTP_PASSWORD,
  },
});

const sendEmail = async (options) => {

  const mailOptions = {
    from: "'HyperT' <richardgeek017@gmail.com>",
    to: options.email,
    subject: options.subject,
    text: options.message,
  };

  await transporter.sendMail(mailOptions);
};


module.exports = sendEmail;
