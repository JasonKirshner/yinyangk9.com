import HeroSmall from "@/components/HeroSmall/HeroSmall";
import FooterCTA from "@/components/FooterCTA/FooterCTA";
import About from "@/components/About/About";
import styles from "./page.module.css";

const aboutParagraphs = [
  "Jordyn and Dylan are San Diego natives who met at a dog training facility in 2019 and haven’t stopped training together since. They spent two years mentoring under Pack Method Prep, one of San Diego’s premier dog training academies. They have also shadowed an array of trainers, learning the different methodologies of training, and getting hands-on experience with dogs of all behavioral issues. This helped them to develop their own unique training approach, and in 2022, Yin Yang K9 was born.",
  "Continuing to better themselves as trainers and expand on their dog knowledge, Dylan earned his CPDT-KA (certified professional dog trainer) as well as obtaining a bachelor’s degree in psychology from Cal State San Marcos. Jordyn is working towards getting her CPDT-KA this year. With backgrounds in psychology, they have a solid foundation and understanding of dog behavior.",
  "Their love for working with dogs began early on in life. Dylan found his passion when he adopted a young cattle dog, pit bull mix from an abusive home. It was an immediate connection that inspired the strong love for training that is with him today. Unfortunately, the stars that shine the brightest also burn the fastest, she passed away tragically at a young age. It was then Dylan realized that dogs needed to play a central role in his life and made a career change to reflect that.",
  "Jordyn first realized her connection to dogs while working at a dog daycare, when a dutch shepherd named Rustle came in for his first day. He was terrified to be there, and it broke Jordyn’s heart. She knew she wanted to be a difference for this dog. It took months, and a lot of hard work, but Jordyn eventually gained Rustle’s trust. He became a daycare regular and she watched him blossom into a loving, playful and confident dog. It was one of her most rewarding experiences, and was the foundation for her love of dogs.",
  "Together, Dylan and Jordyn are the ultimate dog training duo. They are currently living in rural Del Mar with their dogs, Holly, Quinn, and Hannah. When they aren’t training dogs, they love to hike, spend time with friends and travel to unique locations."
];

export default function AboutUs() {
  return (
    <main className={styles.main}>
      <HeroSmall 
      headerText="About Us"
      backgroundImage="hero_about_us.png"
      />
      <About 
      title="Jordyn Siordia and Dylan Baquero"
      paragraphs={aboutParagraphs}
      image1="/family-image1.png"
      image2="/petting-dog.png"
      />
      <FooterCTA />
    </main>
  );
}
