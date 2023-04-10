import "../assets/css/galeria.css";
import { useContext } from "react";
import { Context } from "../MyContext"
import DeleteFilled from "../assets/iconos/delete-filled.svg"

export default function GaleriaFav() {
  const { photos } = useContext(Context)
  // console.log(photos)

  const favPhotos = photos.filter((photo, i) => photo.liked == true)

  return (
    <div className="galeria grid-columns-4 p-3">
      {favPhotos.map((photo, i) => {
        return (
          <div
            key={i}
            className="foto foto-style"
            style={{ backgroundImage: `url("${photo.src}")` }}
            onClick={(e) => {
              const picture = photos[i]
              const likeStatus = picture.liked
              if (likeStatus) {
                picture.liked = false
                setPhotos([...photos])
                e.target.classList.add("img-black-and-white");
                e.target.classList.remove("foto-style");
              }
              else {
                picture.liked = true
                setPhotos([...photos])
                e.target.classList.remove("img-black-and-white");
                e.target.classList.add("foto-style");
              }
              // console.log(photos)
            }
            }
          >
            <img className="heart-beat no-click" height={50} src={DeleteFilled} alt=" " />
          </div>

        )
      })}
    </div >
  )
}
