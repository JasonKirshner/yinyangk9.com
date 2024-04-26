import HeroSmall from "@/components/HeroSmall/HeroSmall";
import FooterCTA from "@/components/FooterCTA/FooterCTA";
import styles from "./page.module.css";

export default function AboutUs() {
  return (
    <main className={styles.main}>
      <HeroSmall />
      <FooterCTA />
    </main>
  );
}
