export interface Advert {
    id:number, 
    title: string,
    description: string
}

export interface LoginData {
    email: string;
    password: string;
}
  
export interface TokenData {
    accessToken: string;
}