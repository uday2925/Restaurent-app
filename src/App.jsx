import {Routes,Route} from "react-router-dom";
import './App.css';
import Header from "./Components/Header";
import { Home } from "./Components/Home";
import { Orders } from "./Components/Orders";

function App() {
  return (
    <div className="App">
      <h1>UKR Restaurent</h1>
      <Header/>      
      <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/orders" element={<Orders/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
