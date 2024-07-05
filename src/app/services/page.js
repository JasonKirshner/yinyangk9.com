import HeroSmall from "@/components/HeroSmall/HeroSmall";
import Services from "@/components/Services/Services";
import FooterCTA from "@/components/FooterCTA/FooterCTA"
import styles from "./page.module.css";

const servicesData = [
  {
    image: 'service1.png',
    name: 'Board & Train',
    shortDescription: 'A “board and train” is a canine education program, facilitated at our home. They learn at their own pace, while receiving a tailored learning experience. Your dog stays with us anywhere from three to six weeks depending on their specific program. During their stay we work on introducing basic obedience and address common behavior problems. Upon completion, we deliver your dog back home and spend time helping you learn how to achieve the same results. A board & train is a great option for dog parents who are experiencing a multitude of behavioral issues and want their dogs to get a more focused style of training which often yields quicker results.',
    listItem1: '$3,300 for 3 weeks, (additional weeks at a reduced rate)',
    listItem2: '$300 deposet to secure slot'
  },
  {
    image: 'service2.png',
    name: 'Boarding',
    shortDescription: 'Available exclusively to dogs who have completed previous training with us. Leave your dog with peace of mind, knowing that they are receiving the same level of care and attention they would at home. Your pup will have structured days, with training consistently upheld.',
    listItem1: '$100 (includes train and play days if applicable)',
    listItem2: '$75 for train and play monthly members'
  },
  {
    image: 'service3.png',
    name: 'Train ‘n Play',
    shortDescription: 'Available exclusively to dogs who have completed previous training with us. Train & Play is not your typical dog daycare. It’s a small select group of dogs with structure implemented throughout the day. Along with play, they also receive mental enrichment, socially appropriate play groups, and the possibility of field trips.',
    listItem1: '$95 for a full day',
    listItem2: 'Hours: 7:30am-5:30 pm'
  },
  {
    image: 'service4.png',
    name: 'Private Lessons',
    shortDescription: 'We provide a customized training plan for each dog based on your training goals. Like people, every dog is unique in what they need. Whether you want to work on the fundamentals for a new puppy or have been struggling with a specific issue with your dog, we are here to help! Our private lessons are focused on teaching you, the dog parent(s) how to successfully balance your communication and strengthen the bond with your dog.',
    listItem1: '$140 an hour',
    // listItem2: 'Feature 2 of service 4'
  }
];


export default function ServicePage() {
  return (
    <main className={styles.main}>
      <HeroSmall 
        headerText="Services"
        backgroundImage="dogs-kissing.png"
      />
      <Services 
        // title="hi"
        // description='hi'
        services={servicesData}
      />
      <FooterCTA />
    </main>
  );
}
