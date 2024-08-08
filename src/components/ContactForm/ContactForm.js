"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { Input, Textarea, Modal, ModalContent, ModalHeader, ModalFooter, ModalBody, Button } from "@nextui-org/react";

import { responseErrorHandler } from "@/lib/js/util";

import styles from "./ContactForm.module.css";

const ContactUsForm = () => {
  const searchParams = useSearchParams();
  const queryParamService = searchParams.get("service");

  const [ownersName, setOwnersName] = useState("");
  const [dogName, setDogName] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState(queryParamService || "");

  const [responseMessage, setResponseMessage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("/api/send-mail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ownersName, dogName, phone, email, message, service }),
    });

    const data = await response.json();

    if (response.ok) {
      setResponseMessage(data.message);
    } else {
      setResponseMessage(data.message);
    }

    setIsModalOpen(true);

    // responseErrorHandler(response)
  };

  const handleChange = (event) => {
    setService(event.target.value);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div id="contactForm" className={`container ${styles.contactContainer}`}>
      <h3 className="h3">Lets hear about you pup!</h3>
      <form onSubmit={handleSubmit} className={styles.form}>
        <Input
          required
          id="ownersName"
          type="text"
          value={ownersName}
          onChange={(e) => setOwnersName(e.target.value)}
          label="Owner's Name"
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
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
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
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          classNames={{
            base: styles.fieldWrapper,
            label: [styles.label, "input-label"],
            input: styles.input,
          }}
          fullWidth
        />
        <div className={styles.serviceDropDownWrapper}>
          <label
            className={`input-label ${styles.label}`}
            htmlFor="service-dropdown"
          >
            Service
          </label>
          <select
            id="service-dropdown"
            className={styles.serviceDropDown}
            value={service}
            onChange={handleChange}
          >
            <option value="board-n-train">Board & Train</option>
            <option value="boarding">Boarding</option>
            <option value="train-n-play">Train & Play</option>
            <option value="private-lessons">Private Lessons</option>
          </select>
          <svg
            className={styles.chevron}
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
            />
          </svg>
        </div>
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

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        isDismissable={false}
        isKeyboardDismissDisabled={true}
        className={styles.modal}
        classNames={{
          closeButton: styles.closeButton,
          backdrop: styles.backdrop
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className={styles.modalHeader}>
                Response
              </ModalHeader>
              <ModalBody>
                <p>{responseMessage}</p>
              </ModalBody>
              <ModalFooter className={styles.modalFooter}>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default ContactUsForm;
