export interface Advert {
    id:string, 
    createdAt:string
    name: string,
    sale: boolean,
    price: number, 
    tags: Array<string>,
    photo: string
}

export interface LoginData {
    email: string;
    password: string;
}
  
export interface TokenData {
    accessToken: string;
}