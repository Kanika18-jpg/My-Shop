import styles from '../styles/List.module.css';
import FeedCard from './FeedCard';

const List = ({list}) => {
  return (
    <div className={styles.container}>
    <div className={styles.waviy}>
    <span >BEST CATTLE FEED IN THE CITY</span>

 
  </div>
    <p className={styles.desc}>Cattle feed contains protein, energy, minerals and vitamins required for the growth, maintenance and milk production of animals. It is advantageous to feed extra cattle feed to pregnant animals for proper development of foetus.
It increases reproductive efficiency, milk production as well as fat content of milk.
Growing animals should be fed 1 to 1.5 kg of compound cattle feed daily.
Milking animals should be fed 2 kg of compound cattle feed for body maintenance and additional 400 g to cows and 500 g to buffaloes for every litre of milk produced.
In addition to this quantity, 1 kg compound cattle feed and 1 kg good quality oil cake should also be given to pregnant animals during the last two months of pregnancy. </p>
    <div className={styles.wrapper}>
    {list.map((feed)=>(

        <FeedCard key={feed.id} feed={feed}/>
    ))}
       

    </div>

    </div>
  );
};

export default List;
