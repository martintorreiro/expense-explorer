import './App.css'
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Suspense, lazy, useContext } from "react";
import { Header } from './components/Header';
import { AuthGuard } from './guards/authGuard';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { PublicGuard } from './guards/publicGuard';
import { AuthContext } from './context/AuthContext/AuthContext';
import { CreateSheet } from './pages/CreateSheet';
import { Footer } from './components/Footer';

const Profile = lazy(() => import('./pages').then((module) => ({
  default: module.Profile,
})));

const Home = lazy(() => import('./pages').then((module) => ({
  default: module.Home,
})));

const UserHome = lazy(() => import('./pages').then((module) => ({
  default: module.UserHome,
})));


const Panel = lazy(() => import('./pages').then((module) => ({
  default: module.Panel,
})));


function App() {

  const {user} = useContext(AuthContext)
 
  return (<BrowserRouter>
        <Header/>

        <main id='main'>

          <Suspense /* fallback={<span>Cargando</span>} */>
          <Routes>
            <Route path="/" element={user?<UserHome/>:<Home/>}></Route>
            <Route path="/pruebalo" element={<Home/>}></Route>
            <Route element={<PublicGuard/>}>
              <Route path="/login" element={<Login/>}></Route>
              <Route path="/registro" element={<Register/>}></Route>   
            </Route>
            <Route element={<AuthGuard/>}>
              <Route path="/:urlCode" element={<Panel/>}></Route>
              <Route path="/nueva-hoja" element={<CreateSheet/>}></Route>
              <Route path="/ajustes" element={<Panel/>}></Route>
              {/* <Route path="/mi-lista" element={<Panel/>}></Route> */}
            </Route>
            <Route path="*" element={<>NOT FOUND</>}></Route>
          </Routes>
          </Suspense>

        </main>

        <Footer/>


  </BrowserRouter>)

}

export default App
