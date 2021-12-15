// Este es mi router principal
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { LandingPage } from "../pages/landingPage/LandingPage";
import { Login } from "../pages/login/Login";
import { Register } from "../pages/register/Register";
// import { Navbar } from "../pages/ui/Navbar";



export const AppRouter = () => {
    return (
        <BrowserRouter>
        {/* <Navbar></Navbar>  */}
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
        </Routes>           
        </BrowserRouter>
    )
}
