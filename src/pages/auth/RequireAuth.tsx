import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "./context";
import { ReactNode } from "react";

function RequireAuth ({children} : {children:ReactNode}) {
    const location = useLocation()
    const {isLogged} = useAuth() as { isLogged: boolean };
    return isLogged ? children : <Navigate to="/login" state={location} />
}
export default RequireAuth;