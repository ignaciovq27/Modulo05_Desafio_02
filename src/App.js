import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles.css";

//components
import { MyContext } from "./MyContext";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import Favoritos from "./views/Favoritos";

export default function App() {

  return (
    <div className="App">
      <MyContext>
        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favoritos" element={<Favoritos />} />
          </Routes>

        </BrowserRouter>
      </MyContext>
    </div>
  );
}
