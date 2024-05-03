import React, {useState } from "react";
import Button from "../../componentes/shared/Button";
import { login } from "./service";

export function LoginPage(
    {onLogged}: { onLogged: () => void }) {

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const [checked, setChecked] = useState(false)

    const {email, password} = formData

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onLogged()
        if (checked) {
        await login ({
            email,
            password,
        });}
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormData(currentData => ({
            ...currentData,
            [event.target.name]: event.target.value, 
        }));
    }

    const handleCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked)
    }

    return (
    <div>
        <h1>Login to your account</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" name="email" value={email} onChange= {handleChange}/>
            <input type="password" name="password" value={password} onChange= {handleChange}/>
            <input type="checkbox" checked={checked} onChange={handleCheck}/>
            <Button type="submit" disabled={!email || !password}>Log in</Button>
        </form>
    </div>
    )
}