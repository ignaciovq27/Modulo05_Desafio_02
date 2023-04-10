import { useContext } from "react";
import { Context } from "../MyContext"

export default function Info() {
    const { photos } = useContext(Context)
    const favPhotos = photos.filter((photo, i) => photo.liked == true)
    const keys = Object.keys(favPhotos)

    if (keys.length === 0) {
        return (
            <div>
                <h2 style={{ textDecoration: "underline" }}>
                    No tienes fotos favoritas.
                </h2>
            </div>
        );
    }
    else {
        return
    }

}