import { client} from "../../api/client";
import { IAdvert } from "../../utils/interfaces";

const advertsURL = '/api/v1/adverts';

export const getAdverts = (): Promise<Array<IAdvert>> => {
  const url = `${advertsURL}`;
  return client.get(url);
};
  