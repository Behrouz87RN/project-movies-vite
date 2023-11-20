import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Company } from "./pages/Company";
import { NotFoundPage } from "./components/notFoundPage/NotFoundPage";
import { MovieInfo } from "./pages/MovieInfo";
import { NewAccount } from "./components/createAccount/NewAccount";
import { Login } from "./components/login/Login";

const routes = (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/movie/:movieId" element={<MovieInfo/>}/>
    <Route path="/company/:companyId" element={<Company/>}/>
    <Route path="/new-account" element={<NewAccount/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="*" element={<NotFoundPage/>}/>
  </Routes>
);

export default routes;
