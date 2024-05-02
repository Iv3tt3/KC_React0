import Button from "../../componentes/shared/Button";
import { login } from "./service";

export function LoginPage({onLogged}: { onLogged: () => void }) {

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const email = formData.get('email') as string;
        const password = formData.get('password') as string;

        onLogged()

        await login ({
            email,
            password,
        });
    }

    return (
    <div>
        <h1>Login to your account</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" name="email"/>
            <input type="password" name="password"/>
            <Button type="submit">Log in</Button>
        </form>
    </div>
    )
}