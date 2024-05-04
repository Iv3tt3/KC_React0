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

export interface IAuthValue {
    isLogged: boolean, 
    onLogin: () => void,
    onLogout:  () => void,
}

export interface IFormProps {
    className?: string, 
    label?: string,
    options?: Array<{
        value: string, 
        label: string}
    >,
    name?: string, 
    type?: string, 
    value?: string | number,
    onChange?: {},
    accept?: string,
    step?:string, 

}