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

    const handleEmChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            email: event.target.value, 
            password:formData.password
        })
    }

    const handlePwChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            email: formData.email, 
            password:event.target.value
        })
    }

    return (
    <div>
        <h1>Login to your account</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" name="email" value={email} onChange= {handleEmChange}
            />
            <input type="password" name="password" value={password} onChange= {handlePwChange}/>
            <Button type="submit" disabled={!email || !password}>Log in</Button>
        </form>
    </div>
    )
}