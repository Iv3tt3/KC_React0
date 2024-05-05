import { Link } from 'react-router-dom';
import Layout from '../../componentes/layout/Layout';
import { IAdvert } from '../../utils/interfaces';
import Advert from './components/Advert';
import styles from './AdvertsList.module.css'
import { getAdverts } from './service';
import { useEffect, useState } from 'react';
import RadioButton from '../../componentes/shared/RadioButton';
import NotificationMSG from '../../componentes/shared/Notification';


export function AdvertsList() {


    const [adverts, setAdverts] = useState<IAdvert[]>([]);

    const [adsFilter, setadsFilter] = useState<IAdvert[]>([]);

    const handleFilter = (type) => {
        const ads = adverts
        if (type === "sell"){
            setadsFilter(ads.filter(ad => ad.sale === true))
        } else if (type === "buy"){
            setadsFilter(ads.filter(ad => ad.sale === false))
        } else {
            setadsFilter(ads)
        }
    }

    console.log(adsFilter)
    useEffect(() => {
        getAdverts().then(ads => {
            setAdverts(ads)
            setadsFilter(ads)
        });
    },[])

    return (
        <Layout>
            <div className={styles.filterContainer}>
            <RadioButton
                    className="filerByType"
                    title="Filter by type"
                    name="sale"
                    arrayInput={[
                        {
                            label:"All", 
                            id:"all",
                            value: `${adsFilter}`,
                            onChange: () => handleFilter('all')
                        },
                        {
                            label:"To Sell", 
                            id:"sell",
                            value: `${adsFilter}`,
                            onChange: () => handleFilter('sell')
                        },
                        {
                            label:"To Buy", 
                            id:"buy",
                            value: `${adsFilter}`,
                            onChange: () => handleFilter('buy')
                        }
                    ]}
            />
            </div>
            <ul className={styles.advertsList}>
                {adsFilter.length !== 0 
                ? (adsFilter.map(({...advert}) => (
                        <li className={styles.advertContainer} key={advert.id}>
                            <Link to={`/adverts/${advert.id}`}>
                                <Advert {...advert}/>
                            </Link>
                        </li>
                        ))
                ):
                <NotificationMSG 
                    className={styles.emptyAdvertsList}
                    msg="No ads to show yet"
                />
                }   
            </ul>
        </Layout>
    );
}