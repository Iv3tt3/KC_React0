import Button from "../../componentes/shared/Button";
import { login } from "./service";
import { useAuth } from "./context";
import { useState } from "react";
import Layout from "../../componentes/layout/Layout";
import { ErrorResponse, useLocation, useNavigate } from "react-router-dom";

export function LoginPage() {

    const location = useLocation()
    const navigate = useNavigate()

    const {onLogin} = useAuth() as { onLogin: () => void }

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const [error, setError] = useState<ErrorResponse | null>(null)

    const [checked, setChecked] = useState(false)

    const [isFetching, setIsFetching] = useState(false)

    const {email, password} = formData

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            setIsFetching(true)
            await login ({
                email,
                password,
            }, checked);
            onLogin()
            setIsFetching(false)
            navigate(location.state?.pathname || '/');
        }catch(error){
            setIsFetching(true)
            setError(error as ErrorResponse);
        }
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsFetching(false)
        setFormData(currentData => ({
            ...currentData,
            [event.target.name]: event.target.value, 
        }));
    }

    const handleCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked)
    }

    const resetError = () => {
        setError(null)
        setIsFetching(false)
    }

    return (
    <div>
        <Layout>
            <h1>Login to your account</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="email" value={email} onChange= {handleChange}/>
                <input type="password" name="password" value={password} onChange= {handleChange}/>
                <input type="checkbox" checked={checked} onChange={handleCheck}/>
                <Button type="submit" disabled={!email || !password || isFetching}>Log in</Button>
            </form>
            <div onClick={resetError}>{error ? error.statusText : null}</div>
        </Layout>
    </div>
    )
}