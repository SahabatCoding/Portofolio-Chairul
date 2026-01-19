import nodemailer from "nodemailer"

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Method not allowed" })
    }

    const { name, email, message } = req.body

    if (!name || !email || !message) {
        return res.status(400).json({ message: "All fields are required" })
    }

    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        })

        await transporter.sendMail({
            from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_USER,
            subject: `New message from ${name}`,
            text: `${message}\n\nFrom: ${email}`,
        })

        return res.status(200).json({ message: "Message sent successfully" })
    } catch (error) {
        console.error("MAIL ERROR:", error)
        return res.status(500).json({ message: "Internal server error" })
    }
}
