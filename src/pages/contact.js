import HeroSmall from '@/components/HeroSmall/HeroSmall'
import ContactForm from '@/components/ContactForm/ContactForm'
import GoogleCaptchaWrapper from '@/components/GoogleCaptchaWrapper/GoogleCaptchaWrapper'

export function getStaticProps () {
  return { props: { title: 'Contact Us' } }
}

export default function Contact () {
  return (
    <main>
      <HeroSmall
        headerText='Contact Us'
        backgroundImage='/smart-dog.gif'
        unoptimized
      />
      <GoogleCaptchaWrapper>
        <ContactForm />
      </GoogleCaptchaWrapper>
    </main>
  )
}
