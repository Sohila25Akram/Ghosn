import { Routes, Route } from "react-router-dom"
import { Details } from './pages/Details';
import { Cart } from './pages/Cart';
import './App.css';
import 'remixicon/fonts/remixicon.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Details />} />
        <Route path="/cart" element={ <Cart />} />
      </Routes>
    </div>
  );
}

export default App;
