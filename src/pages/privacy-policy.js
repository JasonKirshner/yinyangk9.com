import PrivacyPolicy from '@/components/PrivacyPolicy/PrivacyPolicy'

export function getStaticProps () {
  return { props: { title: 'Privacy Policy' } }
}

export default function PrivacyPolicyPage () {
  return (
    <main>
      <PrivacyPolicy />
    </main>
  )
}
