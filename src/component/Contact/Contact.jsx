import { useState } from "react";
import style from "./Contact.module.css"
import contact from "../../data/contact.json"
import { getImageUrl } from "../../utils";

export default function Contact() {
    const [fisrtName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");


    async function handleSubmit(e) {
        e.preventDefault();

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
            alert("Message sent successfully!")
            setEmail("")
            setLastName("")
            setFirstName("")
            setMessage("")
        } else {
            alert("Failed to send message. Please try again later.")
        }

    }
    return (
        <>
            <main className={style.container} >
                <form className={style.formContact}>
                    <h1>Lets Work Together</h1>
                    <p>Interested in working together or have any questions? Send a message through the form below and I’ll get back to you as soon as possible.</p>
                    <input type="text" required value={fisrtName} placeholder="First Name" onChange={(e) => setFirstName(e.target.value)} />
                    <input type="text" value={lastName} placeholder="Last Name" onChange={(e) => setLastName(e.target.value)} />
                    <input type="email" required value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                    <textarea required placeholder="Your Message" onChange={(e) => setMessage(e.target.value)} ></textarea>
                    <button type="submit" onClick={handleSubmit} >Send</button>
                </form>
                <nav className={style.listLink} >
                    <ul>
                        {contact.map((data, index) => (
                            <li key={index}>
                                <div className={style.image}>
                                    <img src={getImageUrl(data.image)} alt={data.name} />
                                </div>
                                <div className={style.description}>
                                    <h4>{data.name}</h4>
                                    <span>{data.description}</span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </nav>
            </main>

        </>
    )
}