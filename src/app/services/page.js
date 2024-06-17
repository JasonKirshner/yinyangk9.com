import HeroSmall from "@/components/HeroSmall/HeroSmall";
import ContactForm from "@/components/ContactForm/ContactForm";
import FooterCTA from "@/components/FooterCTA/FooterCTA"
import styles from "./page.module.css";

const serviceArray = [
    {},
    {},
    {},
    {}
  ];

export default function ServicePage() {
  return (
    <main className={styles.main}>
      <HeroSmall 
        headerText="Services"
        backgroundImage="dogs-kissing.png"
      />
      {/* <Services 
      /> */}
      <FooterCTA />
    </main>
  );
}
