import { Route, Routes } from "react-router-dom";
import { Home } from "../Pages/Home";
import { Company } from "../Pages/Company";
import { NotFoundPage } from "./NotFoundPage/NotFoundPage";
import { MovieInfo } from "../Pages/MovieInfo";
import { NewAccount } from "./CreateAccount/NewAccount";
import { Login } from "./login/login";

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
