import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import { AdvertsList } from "./pages/adverts/AdvertsList"
import { LoginPage } from "./pages/auth/Login"
import RequireAuth from "./pages/auth/RequireAuth";

function App() {
  
  return (
    <Routes>
      <Route path='/login' element={<LoginPage />} />

      <Route path='/adverts' element = {<RequireAuth><Outlet/></RequireAuth>}>
        <Route index element={<AdvertsList/>}/>
        <Route path=":id" element={<p>Advert Detail</p>}/>
        <Route path="new" element={<p>New advert</p>}/>
      </Route>

      <Route path='/' element={<Navigate to ="/adverts"/>} />
      <Route path='/404' element={<p>404 | Page not found</p>} />
      <Route path='*' element={<Navigate to ="/404"/>} />

    </Routes>
  )
}

export default App
