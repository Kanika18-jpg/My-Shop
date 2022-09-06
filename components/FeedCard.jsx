import styles from '../styles/FeedCard.module.css';
import Image from 'next/image';
import Link from 'next/link';


function FeedCard({feed}) {


    return (
        <div className={styles.container}>
        <Link href={`/product/${feed._id}`} passHref>
        <Image src={feed.img} alt="" width="500" height="500" />
        </Link>
        <h1 className={styles.title}>{feed.title}</h1>
        <span className={styles.price}>{feed.price}</span>
               
           
        </div>
    );
}

export default FeedCard;