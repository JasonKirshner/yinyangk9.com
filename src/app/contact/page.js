import HeroSmall from "@/components/HeroSmall/HeroSmall";
import FooterCTA from "@/components/FooterCTA/FooterCTA";
import ContactForm from "@/components/ContactForm/ContactForm";
import styles from "./page.module.css";

export default function Contact() {
  return (
    <main className={styles.main}>
      <HeroSmall />
      <ContactForm />
      <FooterCTA />
    </main>
  );
}
