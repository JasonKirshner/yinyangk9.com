import FooterCTA from "@/components/FooterCTA/FooterCTA";
import Hero from "@/components/Hero/Hero";
import Services from "@/components/Services/Services";
import Testimonials from "@/components/Testimonials/Testimonials";

import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero
        imageUrl="/hero_right.png"
        bgImage="/hero_bg.png"
        title="Expert Dog Training"
        description="Yin Yang K9 is based in San Diego, California and offers a variety of private in home dog training, day training and group classes in and around San Diego."
        buttonText1="Contact Us"
        buttonText2="About Us"
      />
      <Testimonials />
      <Services />
      <FooterCTA />
    </main>
  );
}
