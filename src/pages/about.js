import HeroSmall from "@/components/HeroSmall/HeroSmall"
import FooterCTA from "@/components/FooterCTA/FooterCTA"
import About from "@/components/About/About"

import aboutUsContent from '@/lib/data/aboutUs.json'

import familyImage from '../../public/family-image1.png'
import pettingDogImage from '../../public/petting-dog.png'

export function getStaticProps() {
  return { props: { title: 'About Us' } }
}

export default function AboutUs() {
  return (
    <main>
      <HeroSmall 
      headerText="About Us"
      backgroundImage="hero_about_us.png"
      />
      <About 
      title="Jordyn Siordia and Dylan Baquero"
      paragraphs={aboutUsContent}
      image1={familyImage}
      image2={pettingDogImage}
      />
      <FooterCTA />
    </main>
  )
}
