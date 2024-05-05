import { client} from "../../api/client";
import { IAdvert } from "../../utils/interfaces";

const advertsURL = '/api/v1/adverts';

export const getAdverts = (): Promise<Array<IAdvert>> => {
  const url = `${advertsURL}`;
  return client.get(url);
};
  
export const getAdvert = (tweetId:string): Promise<IAdvert> => {
  const url = `${advertsURL}/${tweetId}`;
  return client.get(url);
};

export const postAdvert = (data) => {
  return client.post(`${advertsURL}`, data, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
};