const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail', 
    auth: {
        user: process.env.EMAIL_USER, 
        pass: process.env.EMAIL_PASS, 
    },
});

const sendEmail = async ({ to, subject, text }) => {
    try {
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to,
            subject,
            text,
        });
    } catch (error) {
        console.error('Error enviando correo:', error);
        throw new Error('No se pudo enviar el correo');
    }
};

module.exports = {
    sendEmail,
};
