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

// Testimonial avatars
import zara from '../../public/zara.jpeg'
import udon from '../../public/udon.jpeg'
import river from '../../public/river.jpeg'

const testimonials = [
  {
    image: zara,
    dogName: 'Zara',
    testimony: 'If you are looking for a place where your Dog will be well Loved, cared for, have awesome doggie friends and learn good dog behavior, Yin Yang K9 is the place!',
    name: 'Barbara C.'
  },
  {
    image: udon,
    dogName: 'Udon',
    testimony: 'My puppy, Udon has made immense progress since joining their "Train & Play" program, and you can just tell that they care so much about the well-being of the pups.',
    name: 'Sofia C.'
  },
  {
    image: river,
    dogName: 'River',
    testimony: 'It took one call for us to fall in love with them. When we met Jordyn and Dylan in person- we knew it was the right call to make.',
    name: 'Miriam G'
  }
]

export async function getServerSideProps ({ req, res }) {
  const instagramFeed = await getInstagramFeed(req, res)

  res.setHeader(
    'Cache-Control',
    'public, s-maxage=1800, stale-while-revalidate=86400'
  )

  return { props: { title: 'Yin Yang K9', instagramFeed, home: true } }
}

export default function Home ({ instagramFeed }) {
  return (
    <main>
      <Hero
        image={heroImage}
        bgImage={bgImage}
        title='Expert Dog Training'
        description='Yin Yang K9 is based in San Diego, California and offers a variety of private in home dog training, day training and group classes in and around San Diego.'
        buttonText1='Contact Us'
        buttonText2='About Us'
      />
      <Testimonials title='Testimonials' testimonials={testimonials} />
      <Services title='Services' services={services} />
      {validation(instagramFeed) && <InstagramFeed instagramFeed={instagramFeed} />}
      <FooterCTA />
    </main>
  )
}
