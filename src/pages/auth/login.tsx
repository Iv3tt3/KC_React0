import React, { ReactEventHandler, useState } from "react";
import Button from "../../componentes/shared/Button";
import { login } from "./service";

export function LoginPage({onLogged}: { onLogged: () => void }) {

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const {email, password} = formData

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onLogged()

        await login ({
            email,
            password,
        });
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormData(currentData => ({
            ...currentData,
            [event.target.name]: event.target.value, 
        }));
    }

    return (
    <div>
        <h1>Login to your account</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" name="email" value={email} onChange= {handleChange}
            />
            <input type="password" name="password" value={password} onChange= {handleChange}/>
            <Button type="submit" disabled={!email || !password}>Log in</Button>
        </form>
    </div>
    )
}