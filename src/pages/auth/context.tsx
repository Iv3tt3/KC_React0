import { ReactNode, createContext, useContext, useState } from 'react';
import { IAuthValue } from '../../utils/interfaces';

const AuthContext = createContext<IAuthValue | null>(null);

export const AuthContextProvider = ({isDefaultLogged, children}: { isDefaultLogged: boolean , children: ReactNode}) => {

    const [isLogged, setIsLogged] = useState(isDefaultLogged);
  
    const handleIsLogged = () => setIsLogged(true);

    const handleIsLogout = () => setIsLogged(false)

    const authValue: IAuthValue = {
        isLogged, 
        onLogin: handleIsLogged, 
        onLogout: handleIsLogout,
    };

    return (
        <AuthContext.Provider value={authValue}>
            {children}
        </AuthContext.Provider>
    )
};

export const useAuth = () => {
    const auth = useContext(AuthContext);
    return auth;
};