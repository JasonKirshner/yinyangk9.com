'use client'

import { useState, useMemo } from 'react'
import { useSearchParams } from 'next/navigation'
import { Input, Textarea, Modal, ModalContent, ModalHeader, ModalFooter, ModalBody, Button } from '@nextui-org/react'

import styles from './ContactForm.module.css'

const ContactUsForm = () => {
  const searchParams = useSearchParams()
  const queryParamService = searchParams.get('service')

  const [ownersName, setOwnersName] = useState('')
  const [dogName, setDogName] = useState('')
  const [message, setMessage] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [ownersNameError, setOwnersNameError] = useState(false)
  const [dogsNameError, setDogsNameError] = useState(false)
  const [emailError, setEmailError] = useState(false)
  const [service, setService] = useState(queryParamService || 'select-a-service')

  const [responseMessage, setResponseMessage] = useState('')
  const [responseTitle, setResponseTitle] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false)

  const validateEmail = (value) => {
    return value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i) !== null
  }

  const validatePhoneNumber = (value) => {
    return value.match(/^[+]?(1-|1\s|1|\d{3}-|\d{3}\s|)?((\(\d{3}\))|\d{3})(-|\s)?(\d{3})(-|\s)?(\d{4})$/g) !== null
  }

  const isEmailInvalid = useMemo(() => {
    if (email === '') return false

    if (emailError) {
      setEmailError(false)
    }

    return !validateEmail(email)
  }, [email, emailError])

  const isPhoneInvalid = useMemo(() => {
    if (phone === '') return false

    return !validatePhoneNumber(phone)
  }, [phone])

  const validateForm = () => {
    let failedValidation = false

    if (!validateEmail(email)) {
      setEmailError(true)
      failedValidation = true
    }

    if (ownersName === '') {
      setOwnersNameError(true)
      failedValidation = true
    }

    if (dogName === '') {
      setDogsNameError(true)
      failedValidation = true
    }

    return failedValidation
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (validateForm()) {
      return
    }

    const response = await fetch('/api/send-mail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ ownersName, dogName, phone, email, message, service })
    })

    const data = await response.json()

    if (response.ok) {
      setResponseTitle(data.title)
      setResponseMessage(data.message)
    } else {
      setResponseTitle(data.title)
      setResponseMessage(data.message)
    }

    setIsModalOpen(true)
  }

  const handleServiceChange = (event) => {
    setService(event.target.value)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <div id='contactForm' className={`container ${styles.contactContainer}`}>
      <h3 className='h3'>Lets hear about you pup!</h3>
      <form onSubmit={handleSubmit} className={styles.form}>
        <Input
          required
          id='ownersName'
          type='text'
          value={ownersName}
          onChange={() => {
            if (ownersNameError) {
              setOwnersNameError(false)
            }
          }}
          isInvalid={ownersNameError}
          onValueChange={setOwnersName}
          label="Owner's Name"
          errorMessage='Please enter a name'
          classNames={{
            base: styles.fieldWrapper,
            label: [styles.label, styles.ownersNameLabel, styles.required, 'input-label'],
            input: [styles.input, ownersNameError && styles.inputError],
            errorMessage: styles.errorMessage
          }}
          fullWidth
        />
        <Input
          required
          id='dogsName'
          type='text'
          label="Dog's Name"
          value={dogName}
          onValueChange={setDogName}
          isInvalid={dogsNameError}
          errorMessage='Please enter a name'
          onChange={() => {
            if (dogsNameError) {
              setDogsNameError(false)
            }
          }}
          classNames={{
            base: styles.fieldWrapper,
            label: [styles.label, styles.required, 'input-label'],
            input: [styles.input, dogsNameError && styles.inputError],
            errorMessage: styles.errorMessage
          }}
          fullWidth
        />
        <Input
          required
          id='phone'
          type='tel'
          label='Phone Number'
          value={phone}
          isInvalid={isPhoneInvalid}
          errorMessage='Please enter a valid Phone Number'
          onValueChange={setPhone}
          classNames={{
            base: styles.fieldWrapper,
            label: [styles.label, 'input-label'],
            input: [styles.input, isPhoneInvalid && styles.inputError],
            errorMessage: styles.errorMessage
          }}
          fullWidth
        />
        <Input
          required
          id='email'
          type='email'
          label='Email'
          value={email}
          onValueChange={setEmail}
          isInvalid={isEmailInvalid || emailError}
          errorMessage='Please enter a valid email'
          classNames={{
            base: styles.fieldWrapper,
            label: [styles.label, styles.required, 'input-label'],
            input: [styles.input, (isEmailInvalid || emailError) && styles.inputError],
            errorMessage: styles.errorMessage
          }}
          fullWidth
        />
        <div className={styles.serviceDropDownWrapper}>
          <label
            className={`input-label ${styles.label} ${styles.required}`}
            htmlFor='service-dropdown'
          >
            Service
          </label>
          <select
            id='service-dropdown'
            className={styles.serviceDropDown}
            value={service}
            onChange={handleServiceChange}
          >
            <option value='select-a-service' selected disabled>Select a service</option>
            <option value='board-n-train'>Board & Train</option>
            <option value='boarding'>Boarding</option>
            <option value='train-n-play'>Train & Play</option>
            <option value='private-lessons'>Private Lessons</option>
          </select>
          <svg
            className={styles.chevron}
            xmlns='http://www.w3.org/2000/svg'
            fill='currentColor'
            viewBox='0 0 16 16'
          >
            <path
              fillRule='evenodd'
              d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708'
            />
          </svg>
        </div>
        <Textarea
          require
          id='message'
          minRows={5}
          label='How Can We Help?'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          classNames={{
            base: styles.fieldWrapper,
            label: [styles.label, 'input-label'],
            input: styles.textarea
          }}
          fullWidth
        />
        <button
          type='submit'
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
        isKeyboardDismissDisabled
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
                <h4>{responseTitle}</h4>
              </ModalHeader>
              <ModalBody>
                <p>{responseMessage}</p>
              </ModalBody>
              <ModalFooter className={styles.modalFooter}>
                <Button className='button' color='danger' variant='light' onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  )
}

export default ContactUsForm
