//este hook personalizado se encarga de obtener imágenes basadas en una categoría y gestionar el estado de carga de esas imágenes.

import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = ( category ) => {
 
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState( true );

    const getImages = async() => {
        const newImages = await getGifs( category );
        setImages(newImages);
        setIsLoading(false);
    }
    
    useEffect( () => {
        getImages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);



    return {
        images,
        isLoading
    }

}