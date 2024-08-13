
const getImagen = async() => {

    try {

        const apiKey = 'g1UZZgcgJ7WEN6DMyccoQTYj3qeWV6aH';
        const resp   = await fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${ apiKey }`);
        const { data } = await resp.json();

        const { url } = data.images.original;

        const img = document.createElement('img');
        img.src = url;
        document.body.append( img );

    } catch (error) {
        // manejo del error
        console.error(error)
    }



}

getImagen();


