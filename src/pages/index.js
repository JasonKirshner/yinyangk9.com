import FooterCTA from "@/components/FooterCTA/FooterCTA";
import Hero from "@/components/Hero/Hero";
import Services from "@/components/Services/Services";
import Testimonials from "@/components/Testimonials/Testimonials";
import InstagramFeed from "@/components/InstagramFeed/InstagramFeed"

import getInstagramFeed from "@/lib/resources/InstagramBasicDisplayClient";
import testimonials from '@/lib/data/testimonials.json';
import services from '@/lib/data/services.json';

export async function getServerSideProps({ req, res }) {
  const instagramFeed = await getInstagramFeed(req, res)

  return { props: { instagramFeed } }
}

export default function Home({ instagramFeed }) {
  return (
    <main>
      <Hero
        imageUrl="/hero_right.png"
        bgImage="/hero_bg.png"
        title="Expert Dog Training"
        description="Yin Yang K9 is based in San Diego, California and offers a variety of private in home dog training, day training and group classes in and around San Diego."
        buttonText1="Contact Us"
        buttonText2="About Us"
      />
      <Testimonials title="Testimonials" testimonials={testimonials} />
      <Services title="Services" services={services} />
      { instagramFeed !== null && <InstagramFeed instagramFeed={instagramFeed} /> }
      <FooterCTA />
    </main>
  );
}
