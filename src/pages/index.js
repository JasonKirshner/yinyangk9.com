import FooterCTA from '@/components/FooterCTA/FooterCTA'
import Hero from '@/components/Hero/Hero'
import Services from '@/components/Services/Services'
import Testimonials from '@/components/Testimonials/Testimonials'
import InstagramFeed from '@/components/InstagramFeed/InstagramFeed'

import getInstagramFeed from '@/lib/resources/InstagramBasicDisplayClient'
import services from '@/lib/data/services.json'
import { validation } from '@/lib/js/util'

import heroImage from '../../public/hero_right.png'
import bgImage from '../../public/hero_bg.png'
import avatarImage from '../../public/avatar.png'

const testimonials = [
  {
    image: avatarImage,
    testimony: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    name: 'John Doe'
  },
  {
    image: avatarImage,
    testimony: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    name: 'John Doe'
  },
  {
    image: avatarImage,
    testimony: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    name: 'John Doe'
  }
]

export async function getServerSideProps ({ req, res }) {
  const instagramFeed = await getInstagramFeed(req, res)

  res.setHeader(
    'Cache-Control',
    'public, s-maxage=1800, stale-while-revalidate=86400'
  )

  return { props: { title: 'Yin Yang K9', instagramFeed } }
}

export default function Home ({ instagramFeed }) {
  return (
    <main>
      <Hero
        image={heroImage}
        bgImage={bgImage}
        title="Expert Dog Training"
        description="Yin Yang K9 is based in San Diego, California and offers a variety of private in home dog training, day training and group classes in and around San Diego."
        buttonText1="Contact Us"
        buttonText2="About Us"
      />
      <Testimonials title="Testimonials" testimonials={testimonials} />
      <Services title="Services" services={services} />
      { validation(instagramFeed) && <InstagramFeed instagramFeed={instagramFeed} /> }
      <FooterCTA />
    </main>
  )
}
