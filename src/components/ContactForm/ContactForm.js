"use client";

import React from 'react';
import { Input, Textarea } from "@nextui-org/react";
import styles from './ContactForm.module.css'; // Adjust the path as necessary

const ContactUsForm = () => {
  const [dogName, setDogName] = React.useState("");
  const [message, setMessage] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="container">
        <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.inputGroup}>
            <Input
            required
            type="text"
            label="Name"
            className={styles.input}
            fullWidth
            />
        </div>
        <div className={styles.inputGroup}>
            <Input
            required
            type="text"
            label="Dog's Name"
            value={dogName}
            onChange={(e) => setDogName(e.target.value)}
            className={styles.input}
            fullWidth  
            />
        </div>
        <div className={styles.inputGroup}>
            <Input
            required
            type="tel"
            label="Phone Number"
            className={styles.input}
            fullWidth
            />
        </div>
        <div className={styles.inputGroup}>
            <Textarea
            required
            label="How Can We Help?"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className={styles.textarea}
            fullWidth
            />
        </div>
        <button type="submit" className="button">
            Send
        </button>
        </form>
    </div>
  );
};

export default ContactUsForm;
