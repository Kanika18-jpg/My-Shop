import styles from '../styles/Footer.module.css';
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.container}>
    <div className={styles.item}>
        <Image src="/img/cattle.jpg"  alt="" width="500" height="500"/>
      </div>
    <div className={styles.item}>
      <div className={styles.card}>
        <h2 className={styles.motto}>OUR MOTO IS TO SERVE THE BEST FOR THE CATTLES.</h2>
      </div>
    <div className={styles.card}>
    <h2 className={styles.motto}>  Importance of Compound Cattle Feed in Milk Production</h2>
      <p className={styles.text}>

Cattle feed produced by the Milk Unions/ Federations is a balanced source of essential nutrients required for body maintenance, growth and milk production.
It is manufactured using good quality grains, oil cakes/ meals, brans, molasses, com- mon salt, minerals and vitamins.
It is comparatively cheaper and highly palatable to the animals.
Cattle feed contains protein, energy, minerals and vitamins required for the growth, maintenance and milk production of animals. It is advantageous to feed extra cattle feed to pregnant animals for proper development of foetus.
It increases reproductive efficiency, milk production as well as fat content of milk.
Growing animals should be fed 1 to 1.5 kg of compound cattle feed daily.

      </p>
    </div>
      <div className={styles.card}>
        <div className={styles.title}>FIND THE STORE</div>
        <p className={styles.text}>
          CHANJELI CHOWK,DEFENCE ROAD <br/>
          NEAR PEPSI FACTORY ,<br/>
          PATHANKOT PUNJAB-145023 <br/>
          +91 9915961298
        </p>
      </div>
      
      <div className={styles.card}>
        <div className={styles.title}>WORKING HOURS</div>
        <p className={styles.text}>
          MONDAY-SUNDAY <br/>
          10.00 AM TO 8.00 PM
        </p>
      </div>


    </div>

    </div>
  )
}

export default Footer