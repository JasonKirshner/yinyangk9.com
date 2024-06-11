"use client";

import { useState } from 'react';
import { Input, Textarea } from "@nextui-org/react";
import styles from './ContactForm.module.css'; // Adjust the path as necessary

const ContactUsForm = () => {
  const [dogName, setDogName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
      <div className={`container ${styles.contactContainer}`}>
        <h3 className="h3">Lets hear about you pup!</h3>
        <form onSubmit={handleSubmit} className={styles.form}>
            <Input
                required
                type="text"
                label="Name"
                classNames={{
                    base: styles.fieldWrapper,
                    label: [styles.label, 'input-label'],
                    input: styles.input
                }}
                fullWidth
            />
            <Input
            required
            type="text"
            label="Dog's Name"
            value={dogName}
            onChange={(e) => setDogName(e.target.value)}
            classNames={{
                base: styles.fieldWrapper,
                label: [styles.label, 'input-label'],
                input: styles.input
            }}
            fullWidth  
            />
            <Input
            required
            type="tel"
            label="Phone Number"
            classNames={{
                base: styles.fieldWrapper,
                label: [styles.label, 'input-label'],
                input: styles.input
            }}
            fullWidth
            />
            <Textarea
            required
            label="How Can We Help?"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            classNames={{
                base: styles.fieldWrapper,
                label: [styles.label, 'input-label'],
                input: styles.textarea
            }}
            fullWidth
            />
              <button type="submit" className={`button ${styles.sendBtn}`}>
                Send
            </button>
        </form>
    </div>
  );
};

export default ContactUsForm;
