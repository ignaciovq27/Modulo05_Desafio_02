import { createContext } from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

export const Context = createContext();

export function MyContext({ children }) {

    const [photos, setPhotos] = useState([])

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        try {
            // Consulta a la API.
            const url = "/fotos.json"
            const response = await fetch(url)
            const data = await response.json()

            // Adaptación de información de la data inicial en un nuevo array***
            const photos = data.photos.map((photo) => {
                return {
                    src: photo.src.tiny,
                    liked: false,
                }
            })
            setPhotos(photos)
            // console.log(data.photos)
        }
        catch (error) {
            console.log(error)
        }
    }

    const globalState = { photos, setPhotos }

    return <Context.Provider value={globalState}>{children}</Context.Provider>
}