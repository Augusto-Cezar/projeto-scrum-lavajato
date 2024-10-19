import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cadastro from "./Components/Pages/Cadastro/Cadastro";
import Login from "./Components/Pages/Login/Login";


const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/cadastro" element={<Cadastro />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;