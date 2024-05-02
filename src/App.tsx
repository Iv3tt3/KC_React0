import { useState } from "react"
import { AdvertsList } from "./pages/adverts/AdvertsList"
import { LoginPage } from "./pages/auth/Login"

function App(isDefaultLogged: any) {
  const [isLogged, setIsLogged] = useState (isDefaultLogged);

  const handleIsLogged = () => setIsLogged(true);

  const handleIsLogout = () => setIsLogged(false)

  return (
    <>{isLogged 
    ? <AdvertsList onLogout={handleIsLogout}/>
    : <LoginPage onLogged={handleIsLogged}/>}
    </>
  )
}

export default App
