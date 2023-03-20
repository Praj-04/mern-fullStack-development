import { Route, Routes } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import Delivery from "./pages/Delivery";
import DineOut from "./pages/DineOut";
import DisplayRest from "./pages/DisplayRest";
import NightLife from "./pages/NightLife";

function App() {
  return (
    <div className="App">
    <Navbar />
    <Routes>
  <Route path="/restaurant/:id" element={<DisplayRest />} >
<Route path="delivery" element={<Delivery/>} />
<Route path="dine-out" element={<DineOut/>} />
<Route path="night-Life" element={<NightLife/>} />
    </Route>
</Routes>
    </div>
  );
}

export default App;
