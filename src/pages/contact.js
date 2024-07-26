import HeroSmall from '@/components/HeroSmall/HeroSmall'
import ContactForm from '@/components/ContactForm/ContactForm'

import smartDogImage from '../../public/smart-dog.gif'

export function getStaticProps () {
  return { props: { title: 'Contact Us' } }
}

export default function Contact () {
  return (
    <main>
      <HeroSmall
        headerText='Contact Us'
        backgroundImage={smartDogImage}
      />
      <ContactForm />
    </main>
  )
}
