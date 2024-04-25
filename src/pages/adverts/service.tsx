import { client } from "../../api/client";
import { IAdvert } from "../../utils/interfaces";
import storage from "../../utils/storage";

const advertsURL = '/api/v1/adverts'



export const getAdverts = (): Promise<Array<IAdvert>> => {
  const url = `${advertsURL}`;
  const token = storage.get('key')
  return client.get(url, {
    headers: {
      Authorization: `Bearer ${token}`
    }}
  )
};
  