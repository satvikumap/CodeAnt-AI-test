import "./App.css";
import { Route, Routes } from "react-router-dom";
import DashBoard from "./Pages/Dashboard";
import Signin from "./Pages/Signin";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/DashBoard" element={<DashBoard />} />
      </Routes>
    </>
  );
}

export default App;
