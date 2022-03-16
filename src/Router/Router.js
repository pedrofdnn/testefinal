import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ErroPage } from "../Pages/Error";
import { ListPage } from "../Pages/ListPage";
import { LoginPage } from "../Pages/LoginPage";
import { NewUsers } from "../Pages/NewUsers";

export function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/newusers" element={<NewUsers />} />
                <Route path="/listpage" element={<ListPage />} />
                <Route path="/*" element={<ErroPage />} />
            </Routes>
        </BrowserRouter>
    )
}