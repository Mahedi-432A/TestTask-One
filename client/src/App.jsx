import "./App.css";
import { Routes, Route } from "react-router-dom";
import Error from "./pages/Error";
import Home from "./pages/Home";
import HomeComponents from "./components/HomeComponents";
import AddCoffee from "./components/AddCoffee";
import UpdateCoffe from "./components/UpdateCoffe";
import CoffeDetails from "./components/CoffeDetails";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Users from "./components/Users";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home></Home>}>
        <Route index element={<HomeComponents></HomeComponents>} />
        <Route path="addCoffe" element={<AddCoffee></AddCoffee>} />
        <Route path="updateCoffe/:id" element={<UpdateCoffe></UpdateCoffe>} />
        <Route path="coffeDetails/:id" element={<CoffeDetails></CoffeDetails>} />
      </Route>
      <Route path="signin" element={<SignIn></SignIn>}></Route>
      <Route path="signup" element={<SignUp></SignUp>}></Route>
      <Route path="users" element={<Users></Users>}></Route>
      <Route path="*" element={<Error></Error>} />
    </Routes>
  );
}

export default App;
