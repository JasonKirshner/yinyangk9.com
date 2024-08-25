'use client'

import { useState, useMemo, useRef, useEffect, useCallback } from 'react'
import { useSearchParams } from 'next/navigation'
import { Input, Checkbox, Textarea, Modal, ModalContent, ModalHeader, ModalFooter, ModalBody, Button } from '@nextui-org/react'
import Link from 'next/link'
import { GoogleReCaptchaProvider, GoogleReCaptcha } from 'react-google-recaptcha-v3'

import styles from './ContactForm.module.css'

const ContactUsForm = () => {
  const searchParams = useSearchParams()
  const queryParamService = searchParams.get('service')

  // Form field states
  const [ownersName, setOwnersName] = useState('')
  const [dogsName, setDogsName] = useState('')
  const [message, setMessage] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [service, setService] = useState(queryParamService || 'Select a service')
  const [agreedToTerms, setAgreedToTerms] = useState(false)
  const [agreedToPrivacy, setAgreedToPrivacy] = useState(false)
  const [token, setToken] = useState(false)
  const [refreshReCaptcha, setRefreshReCaptcha] = useState(false)

  // Form field error states
  const [ownersNameError, setOwnersNameError] = useState(false)
  const [dogsNameError, setDogsNameError] = useState(false)
  const [emailError, setEmailError] = useState(false)
  const [phoneError, setPhoneError] = useState(false)
  const [serviceError, setServiceError] = useState(false)
  const [agreedToTermsError, setAgreedToTermsError] = useState(false)
  const [agreedToPrivacyError, setAgreedToPrivacyError] = useState(false)
  const [recaptchaError, setRecaptchaError] = useState(false)

  // Modal states
  const [responseMessage, setResponseMessage] = useState('')
  const [responseTitle, setResponseTitle] = useState('')
  const [responseStatus, setResponseStatus] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Form field refs
  const contactFormRef = useRef()
  const ownersNameRef = useRef()
  const dogsNameRef = useRef()
  const serviceRef = useRef()
  const phoneRef = useRef()
  const emailRef = useRef()
  const messageRef = useRef()

  useEffect(() => {
    if (!ownersNameRef.current.hasAttribute('name')) {
      ownersNameRef.current.setAttribute('name', 'ownersName')
    }
    if (!dogsNameRef.current.hasAttribute('name')) {
      dogsNameRef.current.setAttribute('name', 'dogsName')
    }
    if (!phoneRef.current.hasAttribute('name')) {
      phoneRef.current.setAttribute('name', 'phone')
    }
    if (!emailRef.current.hasAttribute('name')) {
      emailRef.current.setAttribute('name', 'email')
    }
    if (!messageRef.current.hasAttribute('name')) {
      messageRef.current.setAttribute('name', 'message')
    }
  }, [])

  const validateEmail = (value) => {
    return value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i) !== null
  }

  const validatePhoneNumber = (value) => {
    return (
      value.match(
        /^[+]?(1-|1\s|1|\d{3}-|\d{3}\s|)?((\(\d{3}\))|\d{3})(-|\s)?(\d{3})(-|\s)?(\d{4})$/g
      ) !== null
    )
  }

  const isEmailInvalid = useMemo(() => {
    if (email === '') return false

    if (emailError) {
      setEmailError(false)
    }

    return !validateEmail(email)
  }, [email, emailError])

  const isPhoneInvalid = useMemo(() => {
    if (phone === '') {
      setPhoneError(false)
      return false
    }

    return !validatePhoneNumber(phone)
  }, [phone])

  const validateForm = () => {
    let failedValidation = false

    if (ownersName === '') {
      scrollTo(ownersNameRef)
      setOwnersNameError(true)
      failedValidation = true
    }

    if (dogsName === '') {
      if (!failedValidation) {
        scrollTo(dogsNameRef)
      }
      setDogsNameError(true)
      failedValidation = true
    }

    if (!validatePhoneNumber(phone) && phone.length > 0) {
      if (!failedValidation) {
        scrollTo(phoneRef)
      }
      setPhoneError(true)
      failedValidation = true
    }

    if (!validateEmail(email)) {
      if (!failedValidation) {
        scrollTo(emailRef)
      }
      setEmailError(true)
      failedValidation = true
    }

    if (service === 'Select a service') {
      if (!failedValidation) {
        scrollTo(serviceRef)
      }
      setServiceError(true)
      failedValidation = true
    }

    if (agreedToTerms === false) {
      setAgreedToTermsError(true)
      failedValidation = true
    }

    if (agreedToPrivacy === false) {
      setAgreedToPrivacyError(true)
      failedValidation = true
    }

    if (!token) {
      setRecaptchaError(true)
      failedValidation = true
    }

    return failedValidation
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (validateForm()) {
      return
    }

    try {
      const formTarget = e.target
      const formData = new FormData(formTarget)

      const response = await fetch('/__contact_form.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString()
      })

      if (response.ok) {
        setResponseStatus('success')
        setResponseTitle('Message sent!')
        setResponseMessage('We will reach out to you soon!')
        setRefreshReCaptcha(r => !r)
      } else {
        setResponseStatus('fail')
        setResponseTitle('Message not sent!')
        setResponseMessage('There was an issue sending your message. Please try again.')
      }

      setIsModalOpen(true)
    } catch (e) {
      console.error(e)
      setResponseStatus('fail')
      setResponseTitle('Message not sent!')
      setResponseMessage('There was an issue sending your message. Please try again.')
    }
  }

  const handleServiceChange = (event) => {
    if (serviceError) {
      setServiceError(false)
    }

    setService(event.target.value)
  }

  const onVerify = useCallback((token) => {
    setToken(token)
  }, [])

  const closeModal = () => {
    if (responseStatus === 'success') {
      setOwnersName('')
      setDogsName('')
      setEmail('')
      setPhone('')
      setService('Select a service')
      setMessage('')
      setAgreedToTerms(false)
      setAgreedToPrivacy(false)
    }

    setIsModalOpen(false)
  }

  const scrollTo = (field) => {
    const element = field.current
    console.log(element)
    const yOffset = -150
    const y = element.getBoundingClientRect().top + window.scrollY + yOffset
    window.scrollTo({ top: y, behavior: 'smooth' })
  }

  return (
    <div id='contactForm' ref={contactFormRef} className={`container ${styles.contactContainer}`}>
      <h3 className='h3'>Lets hear about you pup!</h3>
      <form onSubmit={handleSubmit} name='contact' className={styles.form}>
        <input type='hidden' name='form-name' value='contact' />
        <Input
          ref={ownersNameRef}
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
            label: [
              styles.label,
              styles.ownersNameLabel,
              styles.required,
              'input-label'
            ],
            input: [styles.input, ownersNameError && styles.inputError],
            errorMessage: styles.errorMessage
          }}
          fullWidth
        />
        <Input
          ref={dogsNameRef}
          id='dogsName'
          type='text'
          label="Dog's Name"
          value={dogsName}
          onValueChange={setDogsName}
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
          ref={phoneRef}
          id='phone'
          type='tel'
          label='Phone Number'
          value={phone}
          isInvalid={isPhoneInvalid || phoneError}
          errorMessage='Please enter a valid Phone Number'
          onValueChange={setPhone}
          classNames={{
            base: styles.fieldWrapper,
            label: [styles.label, 'input-label'],
            input: [styles.input, (isPhoneInvalid || phoneError) && styles.inputError],
            errorMessage: styles.errorMessage
          }}
          fullWidth
        />
        <Input
          ref={emailRef}
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
            input: [
              styles.input,
              (isEmailInvalid || emailError) && styles.inputError
            ],
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
          <div className={styles.serviceDropdownSelectWrapper}>
            <select
              ref={serviceRef}
              name='service'
              id='service-dropdown'
              className={`${styles.serviceDropDown} ${serviceError ? styles.serviceDropDownError : ''}`}
              value={service}
              onChange={handleServiceChange}
            >
              <option value='Select a service' disabled>
                Select a service
              </option>
              <option value='Board & Train'>Board & Train</option>
              <option value='Boarding'>Boarding</option>
              <option value='Train & Play'>Train & Play</option>
              <option value='Private Lessons'>Private Lessons</option>
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
          {serviceError && (
            <p className={styles.errorMessage}>Please select a service</p>
          )}
        </div>
        <Textarea
          ref={messageRef}
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
        <div className={styles.checkboxContainer}>
          <Checkbox
            name='termsOfServiceAgreement'
            onChange={() => {
              const newAgreedToTermsValue = !agreedToTerms
              setAgreedToTerms(newAgreedToTermsValue)
              if (newAgreedToTermsValue) {
                setAgreedToTermsError(false)
              }
            }}
            value={agreedToTerms ? 'agreed' : 'disagreed'}
            classNames={{
              base: [styles.checkboxBase, styles.termsBase, agreedToTermsError && styles.checkboxBaseError],
              wrapper: styles.checkboxWrapper,
              icon: styles.checkboxIcon,
              label: styles.required
            }}
          >
            I have read and agree to the website{' '}
            <Link
              href='/terms-of-service'
              target='_blank' className={styles.link}
            >
              terms of service
            </Link>
          </Checkbox>
          <Checkbox
            name='privacyPolicyAgreement'
            value={agreedToPrivacy ? 'agreed' : 'disagreed'}
            onChange={() => {
              const newAgreedToPrivacyValue = !agreedToPrivacy
              setAgreedToPrivacy(newAgreedToPrivacyValue)
              if (newAgreedToPrivacyValue) {
                setAgreedToPrivacyError(false)
              }
            }}
            classNames={{
              base: [styles.checkboxBase, styles.privacyBase, agreedToPrivacyError && styles.checkboxBaseError],
              wrapper: styles.checkboxWrapper,
              icon: styles.checkboxIcon,
              label: styles.required
            }}
          >
            I have read and agree to the website{' '}
            <Link href='/privacy-policy' target='_blank' className={styles.link}>
              privacy policy
            </Link>
          </Checkbox>
        </div>
        <button
          type='submit'
          className={`button ${styles.sendBtn}`}
        >
          Send
        </button>
        <GoogleReCaptchaProvider reCaptchaKey={process.env.RECAPTCHA_SITE_KEY}>
          <GoogleReCaptcha
            className={recaptchaError && styles.recaptchaError}
            onVerify={onVerify}
            refreshReCaptcha={refreshReCaptcha}
          />
        </GoogleReCaptchaProvider>
      </form>

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        isDismissable={false}
        isKeyboardDismissDisabled
        className={styles.modal}
        motionProps={{
          variants: {
            enter: {
              y: 0,
              opacity: 1,
              transition: {
                duration: 0,
                ease: 'easeOut'
              }
            },
            exit: {
              y: 0,
              opacity: 0,
              transition: {
                duration: 0,
                ease: 'easeOut'
              }
            }
          }
        }}
        classNames={{
          closeButton: styles.closeButton,
          backdrop: styles.backdrop
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader
                className={`${styles.modalHeader} ${
                  responseStatus === 'success'
                    ? styles.modalHeaderSuccess
                    : styles.modalHeaderFail
                }`}
              >
                <h4>{responseTitle}</h4>
              </ModalHeader>
              <ModalBody className={styles.modalBody}>
                <p>{responseMessage}</p>
              </ModalBody>
              <ModalFooter className={styles.modalFooter}>
                <Button
                  className='button'
                  color='danger'
                  variant='light'
                  onPress={onClose}
                >
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
