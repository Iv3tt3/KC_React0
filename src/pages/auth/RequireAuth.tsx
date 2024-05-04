import { Navigate } from "react-router-dom";
import { useAuth } from "./context";
import { ReactNode } from "react";

function RequireAuth ({children} : {children:ReactNode}) {
    const {isLogged} = useAuth() as { isLogged: boolean };
    return isLogged ? children : <Navigate to="/login" />
}
export default RequireAuth;