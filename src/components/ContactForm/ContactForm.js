"use client";

import { useState } from "react";
import { Input, Textarea } from "@nextui-org/react";
import styles from "./ContactForm.module.css"; // Adjust the path as necessary

const ContactUsForm = () => {
  const [dogName, setDogName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
      const name = document.getElementById("name").value;
      const dogsName = document.getElementById("dogsName").value;
      const phone = document.getElementById("phone").value;
      const email = document.getElementById("email").value;
      const message = document.getElementById("message").value;

      fetch("/api/send-mail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, dogsName, phone, email, message }),
      })
        .then((response) => response.text())
        .then((data) => {
          alert(data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
  };

  return (
    <div id="contactForm" className={`container ${styles.contactContainer}`}>
      <h3 className="h3">Lets hear about you pup!</h3>
      <form onSubmit={handleSubmit} className={styles.form}>
        <Input
          required
          id="name"
          type="text"
          label="Name"
          classNames={{
            base: styles.fieldWrapper,
            label: [styles.label, "input-label"],
            input: styles.input,
          }}
          fullWidth
        />
        <Input
          required
          id="dogsName"
          type="text"
          label="Dog's Name"
          value={dogName}
          onChange={(e) => setDogName(e.target.value)}
          classNames={{
            base: styles.fieldWrapper,
            label: [styles.label, "input-label"],
            input: styles.input,
          }}
          fullWidth
        />
        <Input
          required
          id="phone"
          type="tel"
          label="Phone Number"
          classNames={{
            base: styles.fieldWrapper,
            label: [styles.label, "input-label"],
            input: styles.input,
          }}
          fullWidth
        />
        <Input
          required
          id="email"
          type="email"
          label="Email"
          classNames={{
            base: styles.fieldWrapper,
            label: [styles.label, "input-label"],
            input: styles.input,
          }}
          fullWidth
        />
        <Textarea
          require
          id="message"
          minRows={5}
          label="How Can We Help?"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          classNames={{
            base: styles.fieldWrapper,
            label: [styles.label, "input-label"],
            input: styles.textarea,
          }}
          fullWidth
        />
        <button
          type="submit"
          className={`button ${styles.sendBtn}`}
          onClick={handleSubmit}
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactUsForm;
