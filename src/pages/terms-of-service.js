import TermsOfService from '@/components/TermsOfService/TermsOfService'

export function getStaticProps () {
  return { props: { title: 'Terms Of Service' } }
}

export default function TermsOfServicePage () {
  return (
    <main>
      <TermsOfService />
    </main>
  )
}
