import PrivacyPolicy from '@/components/PrivacyPolicy/PrivacyPolicy'

export function getStaticProps () {
  return { props: { title: 'Privacy Policy' } }
}

export default function Contact () {
  return (
    <main>
      <PrivacyPolicy />
    </main>
  )
}
