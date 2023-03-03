import "./App.css";
import Home from "./pages/Home";
import Welcome from "./pages/Welcome";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Logout from "./pages/Logout";
import Incorrect from "./pages/Incorrect";

function App() {
  return (
    <div className="App">
      <nav>
        <NavBar />
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/logout" element={<Logout />}/>
        <Route path="/incorrect" element={<Incorrect />}/>
      </Routes>
    </div>
  );
}

export default App;
