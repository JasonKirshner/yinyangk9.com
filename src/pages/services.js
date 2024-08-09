import HeroSmall from '@/components/HeroSmall/HeroSmall'
import ServiceDetails from '@/components/ServiceDetails/ServiceDetails'
import FooterCTA from '@/components/FooterCTA/FooterCTA'

import dogsKissing from '../../public/dogs-kissing.png'
import boardNTrainImage from '../../public/boardntrain.png'
import boardingImage from '../../public/boarding.png'
import privateLessonsImage from '../../public/privatelessons.png'
import trainNPlayImage from '../../public/trainnplay.png'

export function getStaticProps () {
  return { props: { title: 'Our Services' } }
}

const services = [
  {
    image: boardNTrainImage,
    name: 'Board & Train',
    code: 'board-n-train',
    description: 'A “board and train” is a canine education program, facilitated at our home. They learn at their own pace, while receiving a tailored learning experience. Your dog stays with us anywhere from three to six weeks depending on their specific program. During their stay we work on introducing basic obedience and address common behavior problems. Upon completion, we deliver your dog back home and spend time helping you learn how to achieve the same results. A board & train is a great option for dog parents who are experiencing a multitude of behavioral issues and want their dogs to get a more focused style of training which often yields quicker results.',
    pricingDetails: [
      '$3,300 for 3 weeks, (additional weeks at a reduced rate)',
      '$300 deposet to secure slot'
    ]
  },
  {
    image: boardingImage,
    name: 'Boarding',
    code: 'boarding',
    description: 'Available exclusively to dogs who have completed previous training with us. Leave your dog with peace of mind, knowing that they are receiving the same level of care and attention they would at home. Your pup will have structured days, with training consistently upheld.',
    pricingDetails: [
      '$100 (includes train and play days if applicable)',
      '$75 for train and play monthly members'
    ]
  },
  {
    image: privateLessonsImage,
    name: 'Train & Play',
    code: 'train-n-play',
    description: 'Available exclusively to dogs who have completed previous training with us. Train & Play is not your typical dog daycare. It’s a small select group of dogs with structure implemented throughout the day. Along with play, they also receive mental enrichment, socially appropriate play groups, and the possibility of field trips.',
    pricingDetails: [
      '$95 for a full day',
      'Hours: 7:30am-5:30 pm'
    ]
  },
  {
    image: trainNPlayImage,
    name: 'Private Lessons',
    code: 'private-lessons',
    description: 'We provide a customized training plan for each dog based on your training goals. Like people, every dog is unique in what they need. Whether you want to work on the fundamentals for a new puppy or have been struggling with a specific issue with your dog, we are here to help! Our private lessons are focused on teaching you, the dog parent(s) how to successfully balance your communication and strengthen the bond with your dog.',
    pricingDetails: [
      '$140 an hour'
    ]
  }
]

export default function ServicePage () {
  return (
    <main>
      <HeroSmall
        headerText='Services'
        backgroundImage={dogsKissing}
        className='services'
      />
      <ServiceDetails services={services} />
      <FooterCTA />
    </main>
  )
}
