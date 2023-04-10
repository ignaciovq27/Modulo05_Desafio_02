import GaleriaFav from "../components/GaleriaFav";
import Info from "../components/Info";
import "../assets/css/galeria.css";

export default function Favoritos() {

  return (
    <div className="container" id="Home">
      <h1>Fotos favoritas ❤️</h1>
      <GaleriaFav />
      <Info />
    </div>
  );
}
