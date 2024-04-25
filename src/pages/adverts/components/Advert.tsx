import { IAdvert } from "../../../utils/interfaces";

export default function Advert ({id, name, sale, price, tags, photo }:IAdvert) {
    return (
        <li key={id}>
            <p>{name}</p>
            <p>{sale}</p>
            <p>{price}</p>
            <p>{tags.toString()}</p>
            <img src={photo}/>
        </li>
    );
}