import { Logo } from "../shared/logo";
import Button from "../shared/Button";
import { useAuth } from "../../pages/auth/context";
import { logout } from "../../pages/auth/service";


export default function Header(){

    const {isLogged, onLogout} = useAuth() as { isLogged: boolean, onLogout: () => void };

    const handleLogout = () => {
        onLogout()
        logout()
    }

    return (
        <header>
            <div>
                <Logo width={300} ></Logo>
            </div>
            <nav>
                {isLogged
                ? <Button onClick={handleLogout}>Logout</Button>
                : ""
                }
            </nav>
        </header>
    );
}