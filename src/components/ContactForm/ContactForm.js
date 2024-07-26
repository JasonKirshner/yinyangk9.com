'use client'

import { useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { Input, Textarea } from '@nextui-org/react'

import styles from './ContactForm.module.css'

const ContactUsForm = () => {
  const searchParams = useSearchParams()
  const queryParamService = searchParams.get('service')

  const [dogName, setDogName] = useState('')
  const [message, setMessage] = useState('')
  const [serviceValue, setServiceValue] = useState(queryParamService || '')

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const handleChange = (event) => {
    setServiceValue(event.target.value)
  }

  return (
    <div className={`container ${styles.contactContainer}`}>
      <h3 className='h3'>Lets hear about you pup!</h3>
      <form onSubmit={handleSubmit} className={styles.form}>
        <Input
          required
          type='text'
          label="Owner's Name"
          classNames={{
            base: styles.fieldWrapper,
            label: [styles.label, 'input-label'],
            input: styles.input
          }}
          fullWidth
        />
        <Input
          required
          type='text'
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
          type='tel'
          label='Phone Number'
          classNames={{
            base: styles.fieldWrapper,
            label: [styles.label, 'input-label'],
            input: styles.input
          }}
          fullWidth
        />
        <div className={styles.serviceDropDownWrapper}>
          <label className={`input-label ${styles.label}`} for='service-dropdown'>Service</label>
          <select id='service-dropdown' className={styles.serviceDropDown} value={serviceValue} onChange={handleChange}>
            <option value='board-n-train'>Board & Train</option>
            <option value='boarding'>Boarding</option>
            <option value='train-n-play'>Train & Play</option>
            <option value='private-lessons'>Private Lessons</option>
          </select>
          <svg className={styles.chevron} xmlns='http://www.w3.org/2000/svg' fill='currentColor' class='bi bi-chevron-down' viewBox='0 0 16 16'>
            <path fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708' />
          </svg>
        </div>
        <Textarea
          required
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
        <button type='submit' className={`button ${styles.sendBtn}`}>
          Send
        </button>
      </form>
    </div>
  )
}

export default ContactUsForm
