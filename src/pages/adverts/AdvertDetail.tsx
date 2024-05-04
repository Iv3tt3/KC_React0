import { ErrorResponse, UNSAFE_ErrorResponseImpl, useNavigate, useParams } from "react-router-dom";
import Layout from "../../componentes/layout/Layout";
import { getAdvert } from "./service";
import { ErrorInfo, useEffect, useState } from "react";
import Advert from "./components/Advert";
import { IAdvert } from "../../utils/interfaces";

export function AdvertDetail() {
    const params = useParams().id as string;
    const navigate = useNavigate()

    const [ad, setAd] = useState<IAdvert | null >(null);

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
    </Layout>
    );
}