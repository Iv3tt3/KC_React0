import { useNavigate, useParams } from "react-router-dom";
import Layout from "../../componentes/layout/Layout";
import { deleteAdvert, getAdvert } from "./service";
import { useEffect, useState } from "react";
import Advert from "./components/Advert";
import { IAdvert } from "../../utils/interfaces";
import Button from "../../componentes/shared/Button";
import styles from "./AdvertDetail.module.css"

export function AdvertDetail() {
    const params = useParams().id as string;
    const navigate = useNavigate()

    const [ad, setAd] = useState<IAdvert | null >(null);

    const [showConfirm, setShowCofirm] = useState(false)

    const deleteAd = () => {
        deleteAdvert(params)
        navigate('/')
    }

    console.log(showConfirm)

    useEffect(() => {
            async function getDataFromService() {
                try{
                    const adData = await getAdvert(params);
                    setAd(adData);
                }catch(error){
                    if (error.status === 404)
                    navigate('/404')
                }
            }
        getDataFromService();
        }, [params, navigate]);

    return (
    <Layout>
        {ad ? <Advert {...ad as IAdvert}></Advert> : null}
        {showConfirm &&(
            < div className={styles.modalContainer}>
                <p>Are you sure you want to delete the advert?</p>
                <Button onClick={deleteAd}>YES! Delete the Ad</Button>
                <Button onClick={()=>setShowCofirm(false)}>NO! Cancel</Button>
        </div>)}
        {!showConfirm && (<Button onClick={()=>setShowCofirm(true)}>Delete Ad</Button>)}
    </Layout>
    );
}