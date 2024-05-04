import { useParams } from "react-router-dom";
import Layout from "../../componentes/layout/Layout";
import { getAdvert } from "./service";
import { useEffect, useState } from "react";
import Advert from "./components/Advert";
import { IAdvert } from "../../utils/interfaces";

export function AdvertDetail() {
    const params = useParams().id as string;

    const [ad, setAd] = useState<IAdvert | null >(null);

    useEffect(() => {
        (async () => {
            const adData = await getAdvert(params);
            setAd(adData);
        })();
    }, [params]);

    return (
    <Layout>
        {ad ? <Advert {...ad as IAdvert}></Advert> : null}
    </Layout>
    );
}