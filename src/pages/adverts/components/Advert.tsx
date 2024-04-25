import { IAdvert } from "../../../utils/interfaces";

export default function Advert ({id, name, sale, price, tags, photo }:IAdvert) {
    return (
        <>
        <p className="advert-name">{name}</p>
        <p className="advert-sale">{sale}</p>
        <p className="advert-price">{price}</p>
        <p className="advert-tags">{tags.toString()}</p>
        <img className="advert-img" src={photo}/>
        </>
    );
}