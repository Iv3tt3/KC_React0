import { AdvertsList } from "./pages/adverts/AdvertsList"
import { LoginPage } from "./pages/auth/Login"
import { useAuth } from "./pages/auth/context"

function App() {

  const {isLogged} = useAuth()
  
  return (
    <> 
      {isLogged 
      ? <AdvertsList/>
      : <LoginPage/>}
    </>
  )
}

export default App
