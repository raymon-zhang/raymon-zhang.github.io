import { useState } from "react";

import { DefaultLayout } from "../layouts/DefaultLayout";

import styles from "../styles/contact.module.scss";

export default function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    type sendingType = "notSent" | "sending" | "sent" | "error";
    const [sending, setSending] = useState<sendingType>("notSent");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSending("sending");

        const data = { name, email, message };

        fetch("https://raymonzhang-email-handler.vercel.app/api/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        }).then((res) => {
            if (res.status === 200) {
                setSending("sent");
                setName("");
                setEmail("");
                setMessage("");
            } else {
                setSending("error");
            }
        });
    };

    return (
        <DefaultLayout>
            <section className={styles.contact}>
                <div className={styles.contactContainer}>
                    <h1 className={styles.contactHeading}>Say hello!</h1>
                    <form
                        onSubmit={handleSubmit}
                        className={styles.contactForm}
                    >
                        {sending === "sent" ? (
                            <>
                                <h3>Thanks for reaching out!</h3>
                                <p>
                                    {
                                        "I'll be get back to you as soon as possible."
                                    }
                                </p>
                            </>
                        ) : (
                            <>
                                <label htmlFor="name">Full name</label>
                                <input
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="John Doe"
                                    required
                                />

                                <label htmlFor="email">Email</label>
                                <input
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="example@example.com"
                                    required
                                />

                                <label htmlFor="message">Message</label>
                                <textarea
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    name="message"
                                    id="message"
                                    placeholder="Hello!"
                                    required
                                    cols={3}
                                />
                                <input
                                    type="checkbox"
                                    name="contact_me_by_fax_only"
                                    value={1}
                                    style={{ display: "none" }}
                                    tabIndex={-1}
                                    autoComplete="off"
                                />

                                <button
                                    type="submit"
                                    disabled={sending !== "notSent"}
                                >
                                    {sending === "sending" && "Sending..."}
                                    {sending === "notSent" && "Submit"}
                                    {sending === "error" &&
                                        "Oops! Something went wrong. Please try again"}
                                </button>
                            </>
                        )}
                    </form>
                </div>
            </section>
        </DefaultLayout>
    );
}
