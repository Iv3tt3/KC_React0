import Button from '../../componentes/shared/Button';
import { IAdvert } from '../../utils/interfaces';
import { logout } from '../auth/service';
import Advert from './components/Advert';
import styles from './components/Advert.module.css';
import { getAdverts } from './service';
import { useEffect, useState } from 'react';

export function AdvertsList({onLogout}: {onLogout: () => void}) {

    const [adverts, setAdverts] = useState<IAdvert[]>([]);

    useEffect(() => {
        getAdverts().then(ads => setAdverts(ads));
    },[])

    const handleLogout = () => {
        onLogout()
        logout()
    }

    return (
        <div>
            <Button onClick={handleLogout}>Logout</Button>
            <ul className={styles.advertsList}>
                {adverts.map(({...advert}) => (
                    <li className={styles.advertContainer} key={advert.id}>
                        <Advert {...advert}/>
                    </li>
                    ))
                }     
            </ul>
        </div>
    );
}