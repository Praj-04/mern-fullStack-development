import { Route, Routes } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import DisplayRest from "./pages/DisplayRest";

function App() {
  return (
    <div className="App">
    <Navbar />
    <DisplayRest />
<Routes>
  <Route path="/restaurant/:id" element={<DisplayRest />} />
</Routes>
    </div>
  );
}

export default App;
