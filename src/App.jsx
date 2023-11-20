import { BrowserRouter } from "react-router-dom";
import { NavBar } from "./components/navbar/NavBar";
import routes from "./routes";

export const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      {routes}
    </BrowserRouter>
  );
};