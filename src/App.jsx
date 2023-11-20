import { BrowserRouter } from "react-router-dom";
import { NavBar } from "./components/navbar/NavBar";
import routes from "./components/routes";

export const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      {routes}
    </BrowserRouter>
  );
};