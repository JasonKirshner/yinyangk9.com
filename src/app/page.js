import FooterCTA from "@/components/FooterCTA/FooterCTA";
import Hero from "@/components/Hero/Hero";
import Services from "@/components/Services/Services";
import Testimonials from "@/components/Testimonials/Testimonials";
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <Testimonials />
      <Services />
      <FooterCTA />
    </main>
  );
}
