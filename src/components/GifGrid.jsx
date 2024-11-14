import propTypes from 'prop-types';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifItem } from './GifItem';

export function GifGrid ({ category }) {

    const { images, isLoading } = useFetchGifs( category );

    return (
        <>
            <h2>{ category }</h2>
            {
                isLoading && ( <h2>Loading...</h2> )
            }

            <div className="card-grid">
                {
                    images.map( ( image ) => (
                        <GifItem 
                            key={ image.id } 
                            { ...image }
                        />
                        
                    ))
                }
                
            </div>

        </>
    );
}

GifGrid.propTypes = {
    category: propTypes.string.isRequired
};