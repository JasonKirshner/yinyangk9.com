import HeroSmall from "@/components/HeroSmall/HeroSmall";
import ContactForm from "@/components/ContactForm/ContactForm";

export default function Contact() {
  return (
    <main>
      <HeroSmall headerText="Contact Us" backgroundImage="/smart-dog.png" />
      <ContactForm />
    </main>
  );
}
