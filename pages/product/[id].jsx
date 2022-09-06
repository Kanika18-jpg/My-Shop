import styles from '../../styles/product.module.css';
import Image from "next/image";
import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/cartSlice";

const Product = ({feed}) => {

  const dispatch = useDispatch();

  const [quantity, setQuantity] = useState(1);
  const price = feed.prices;

  const handleClick = () => {
    dispatch(addProduct({...feed, price, quantity}));
  };

  return (
    <div className={styles.container}>
        <div className={styles.left}>
            <div className={styles.imgContainer}>
                <Image src={feed.img} alt="" layout="fill" objectFit='contain'/>
            </div>
        </div>
        <div className={styles.right}>
        <h1 className={styles.title}>{feed.title}</h1>
        <span className={styles.price}>Rs.{feed.prices}</span>
        <p className={styles.desc}>{feed.desc}</p>

        <div className={styles.add}>
            <input type="number" defaultValue={1} className={styles.quantity}   onChange={(e) => setQuantity(e.target.value)} />
            <button className={styles.button}  onClick={handleClick}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps= async ({params}) =>{

  const res = await axios.get(`http://localhost:3000/api/products/${params.id}`);
  return{
    props: {
      feed: res.data,
    }
  }

}

export default Product