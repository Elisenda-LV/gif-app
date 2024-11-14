export const getGifs = async ( category ) => {
       
    const apiKey = import.meta.env.VITE_API_KEY;
    const apiUrl = import.meta.env.VITE_API_URL;
    const url = `${apiUrl}/search?api_key=${apiKey}&q=${category}&limit=10`;
    const response = await fetch(url);
    const { data } = await response.json();

    // return data;
    const gifs = data.map(img => ({
        id: img.id,
        url: img.images?.downsized_medium.url
    }));
    
    return gifs;
};