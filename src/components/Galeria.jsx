import "../assets/css/galeria.css";
import { useContext } from "react";
import { Context } from "../MyContext"
import HeartFilled from "../assets/iconos/heart-filled.svg"
import HeartEmpty from "../assets/iconos/heart.svg"


export default function Home() {
  const { photos, setPhotos } = useContext(Context)
  return (
    <div className="galeria grid-columns-4 p-3">
      {photos.map((photo, i) => {
        return (
          <div
            key={i}
            className={photo.liked ? "foto foto-style pointer" : " foto img-black-and-white pointer"}
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
            }
            }
          >
            {photo.liked ? (
              <img className="heart-beat no-click" height={50} src={HeartFilled} alt=" " />
            ) : (
              <img className="no-click" height={50} src={HeartEmpty} alt=" " />
            )}
          </div>
        )
      })}
    </div >
  );
}
