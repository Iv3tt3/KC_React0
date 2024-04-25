import { client } from "../../api/client";
import { Advert } from "../../utils/interfaces";

const advertsURL = '/api/v1/adverts'

export const getAdverts = (): Promise<Array<Advert>> => {
    const url = `${advertsURL}`;
    return client.get(url);
  };
  