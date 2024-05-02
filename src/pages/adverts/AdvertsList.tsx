import { IAdvert } from '../../utils/interfaces';
import Advert from './components/Advert';
import styles from './components/Advert.module.css';
import { getAdverts } from './service';
import { useEffect, useState } from 'react';

export function AdvertsList() {

    const [adverts, setAdverts] = useState<IAdvert[]>([]);

    useEffect(() => {
        getAdverts().then(ads => setAdverts(ads));
    },[])


    return (
        <div>
            <ul className={styles.advertsList}>
            {adverts.map(({...advert}) => (
                <li className={styles.advertContainer} key={advert.id}>
                    <Advert {...advert}/>
                </li>
                ))};     
            </ul>
        </div>
    );
}