import HeroSmall from "@/components/HeroSmall/HeroSmall";
import FooterCTA from "@/components/FooterCTA/FooterCTA";
import About from "@/components/About/About";

import aboutUsContent from '@/lib/data/aboutUs.json'

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
      image1="/family-image1.png"
      image2="/petting-dog.png"
      />
      <FooterCTA />
    </main>
  );
}
