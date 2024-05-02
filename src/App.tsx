import { useState } from "react"
import { AdvertsList } from "./pages/adverts/AdvertsList"
import { LoginPage } from "./pages/auth/Login"

function App() {
  const [isLogged, setIsLogged] = useState (false);

  const handleIsLogged = () => setIsLogged(true);

  return (
    <>{isLogged 
    ? <AdvertsList />
    : <LoginPage onLogged={handleIsLogged}/>}
    </>
  )
}

export default App
