export interface IAdvert {
    id:string, 
    createdAt:string
    name: string,
    sale: boolean,
    price: number, 
    tags: Array<string>,
    photo: string
}

export interface ILoginData {
    email: string;
    password: string;
}
  
export interface IToken {
    accessToken: string;
}