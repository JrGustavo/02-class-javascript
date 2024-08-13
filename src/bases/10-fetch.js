const apiKey = 'g1UZZgcgJ7WEN6DMyccoQTYj3qeWV6aH';

const peticion = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);

peticion
    .then( resp => resp.json() )
    .then( ({ data }) => {
        const { url } = data.images.original;

        const img = document.createElement('img');
        img.src = url;

        document.body.append( img );


    })
    .catch( console.warn );
