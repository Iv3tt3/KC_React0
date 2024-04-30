import { IAdvert } from "../../../utils/interfaces";
import styles from './Advert.module.css';

export default function Advert ({id, name, sale, price, tags, photo }:IAdvert) {
    return (
        <>
        <p className={styles.advertName}>{name}</p>
        <p className={styles.advertSale}>{sale}</p>
        <p className={styles.advertPrice}>{price}</p>
        <p className={styles.advertTags}>{tags.toString()}</p>
        <img className={styles.advertImg} src={photo}/>
        </>
    );
}