import { client, setAuthorizationHeader } from "../../api/client";
import { IAdvert } from "../../utils/interfaces";
import storage from "../../utils/storage";

const advertsURL = '/api/v1/adverts'



export const getAdverts = (): Promise<Array<IAdvert>> => {
  const url = `${advertsURL}`;
  const token = storage.get('key') // this should work with axios
  setAuthorizationHeader(token) //this should work with axios
  return client.get(url)
};
  