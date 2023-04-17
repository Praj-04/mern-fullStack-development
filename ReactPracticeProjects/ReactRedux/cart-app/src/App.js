import "./App.css";
import AddItem from "./components/addItem/AddItem";
import ItemsList from "./components/itemsList/ItemsList";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <AddItem />

      <p className="item-desc">Your Items</p>

      <ItemsList />
    </div>
  );
}

export default App;
