import { Login } from "@mui/icons-material";
import SignUp from "./components/SignUp";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import 'flowbite/dist/flowbite.min.css';
import Page from "./components/Page";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
 
        <Route exact path="/signUp" element={<SignUp />} />
        <Route exact path="/pages" element={<Page />} />
      </Routes>
    </>
  );
}

export default App;
