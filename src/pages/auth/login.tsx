import React, { ReactEventHandler, useState } from "react";
import Button from "../../componentes/shared/Button";
import { login } from "./service";

export function LoginPage({onLogged}: { onLogged: () => void }) {
 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onLogged()

        await login ({
            email,
            password,
        });
    }

    const handleEmChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value)
    }

    const handlePwChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value)
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