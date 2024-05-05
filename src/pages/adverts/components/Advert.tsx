import { IAdvert } from "../../../utils/interfaces";
import styles from './Advert.module.css';

export default function Advert ({id, name, sale, price, tags, photo }:IAdvert) {
    return (
        <>
        <p className={styles.advertPrice}>{price} EUR</p>
        <img className={styles.advertImg} src={photo || "./src/assets/noimg.png"}/>
        <p className={styles.advertName}>{name}</p>
        <div className={styles.advertText}>
            <div className={styles.advertTags}>{tags.toString()}</div>
            <div className={styles.advertSale}>{sale ? "To Sell" : "To Buy"}</div>
        </div>
        </>
    );
}