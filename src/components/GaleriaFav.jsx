import "../assets/css/galeria.css";
import { useContext } from "react";
import { Context } from "../MyContext"
import DeleteFilled from "../assets/iconos/delete-filled.svg"

export default function GaleriaFav() {
  const { photos, setPhotos } = useContext(Context)
  // console.log(photos)

  const favPhotos = photos.filter((photo, i) => photo.liked == true)

  return (
    <div className="galeria grid-columns-4 p-3">

      {favPhotos.map((photo, i) => {
        return (
          <div
            key={i}
            className="foto fotoFav-style"
            style={{ backgroundImage: `url("${photo.src}")` }}

          >
            <img className="heart-beat pointer" height={50} src={DeleteFilled} alt=" "
              onClick={() => {
                photo.liked = false
                setPhotos([...photos])
              }
              } />
          </div>
        )
      })}
    </div >
  )
}
