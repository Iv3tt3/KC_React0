export function LoginPage() {

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const username = formData.get('email') as string;
        const password = formData.get('password') as string;

        console.log(username + password)
        
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