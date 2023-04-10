import GaleriaFav from "../components/GaleriaFav";
import "../assets/css/galeria.css";

export default function Favoritos() {

  return (
    <div className="container no-click" id="Home">
      <h1>Fotos favoritas ❤️</h1>
      <GaleriaFav />
    </div>
  );
}
