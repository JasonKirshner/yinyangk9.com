import HeroSmall from '@/components/HeroSmall/HeroSmall'
import ContactForm from '@/components/ContactForm/ContactForm'
import GoogleCaptchaWrapper from '@/components/GoogleCaptchaWrapper/GoogleCaptchaWrapper'

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
        unoptimized
      />
      <GoogleCaptchaWrapper>
        <ContactForm />
      </GoogleCaptchaWrapper>
    </main>
  )
}
