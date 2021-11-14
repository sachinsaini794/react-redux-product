import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './containers/Header';
import ProductListing from './containers/ProductListing';
import Prodcutdetails from './containers/Prodcutdetails'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" exact element={<ProductListing/>} />
          <Route path="/product/:productId" exact element={<Prodcutdetails/>} />
          <Route>404 Not Found</Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
