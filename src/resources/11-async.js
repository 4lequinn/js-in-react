// Async await

//const getImagePromise = () => new Promise((resolve, reject) => { resolve('https://picsum.photos/200/300')})

const getImage = async() => {
    try {
        const apiKey = 'YOUR_API_KEY';
        const response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const { data } = await response.json();
        const { url } = data.images.original;
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);   
    } catch (error) {
        console.log(error);       
    }
 
}

getImage();
