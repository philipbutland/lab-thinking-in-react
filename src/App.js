import './App.css';
import Products from "./data.json";
import ProductsPage from "./components/ProductsPage"


function App() {

  return (
    <div><ProductsPage products={Products}/></div>
  );
}

export default App;
