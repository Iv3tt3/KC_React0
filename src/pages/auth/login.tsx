import { login } from "./service";

export function LoginPage() {

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const email = formData.get('email') as string;
        const password = formData.get('password') as string;

        console.log(email + password)

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
            <button type="submit">Login</button>
        </form>
    </div>
    )
}