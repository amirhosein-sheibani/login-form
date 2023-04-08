import { Route, Routes } from "react-router-dom";
import Login from "./Components/Login-form/Login";
import Register from "./Components/Register-form/Register";
import Home from "./Components/home-page/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/" element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
}

export default App;
