import HeroSmall from "@/components/HeroSmall/HeroSmall";
import Services from "@/components/Services/Services";
import FooterCTA from "@/components/FooterCTA/FooterCTA"

import servicesData from '@/lib/data/services.json'

export function getStaticProps() {
  return { props: { title: 'Our Services' } }
}

export default function ServicePage() {
  return (
    <main>
      <HeroSmall 
        headerText="Services"
        backgroundImage="dogs-kissing.png"
      />
      <Services 
        // title="hi"
        // description='hi'
        services={servicesData}
      />
      <FooterCTA />
    </main>
  );
}
