import { BrowserRouter } from "react-router-dom";
import { NavBar } from "./components/navBar/navBar";
import routes from "./routes";

export const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      {routes}
    </BrowserRouter>
  );
};