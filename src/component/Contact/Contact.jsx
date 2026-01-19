import { useState } from "react";

export default function Contact() {
    const [fisrtName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const [status, setStatus] = useState("")

    async function handleSubmit(e) {
        e.preventDefault();

        setStatus("Sending...")

        const response = await fetch("/api/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: `${fisrtName} ${lastName}`,
                email,
                message,
            }),
        })

        if (response.ok) {
            setStatus("Message sent successfully!")
            setEmail("")
            setLastName("")
            setFirstName("")
            setMessage("")
        }else{
            setStatus("Failed to send message.")
        }

    }
    return (
        <>
            <form >
                <input type="text" placeholder="First Name" onChange={(e) => setFirstName(e.target.value)} />
                <input type="text" placeholder="Last Name" onChange={(e) => setLastName(e.target.value)} />
                <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                <textarea placeholder="Your Message" onChange={(e) => setMessage(e.target.value)} ></textarea>
                <button type="submit" onClick={handleSubmit} >Send Message</button>
            </form>
        </>
    )
}