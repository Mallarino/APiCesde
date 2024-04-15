
async function obtenerFotos() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/photos');
        const fotos = await response.json();

        // Obtener las primeras 10 imágenes
        const primerasDiezFotos = fotos.slice(0, 10);

        // Obtener el contenedor donde queremos mostrar las imágenes
        const contenedorImagenes = document.getElementById('imagenContainer');

        // Iterar sobre las primeras 10 imágenes y crear elementos img con título para cada una
        primerasDiezFotos.forEach(foto => {
            const imagenElemento = document.createElement('img');
            imagenElemento.src = foto.url;
            
            const tituloElemento = document.createElement('p');
            tituloElemento.textContent = foto.title; // Usar el título como texto del párrafo
            
            contenedorImagenes.appendChild(imagenElemento);
            contenedorImagenes.appendChild(tituloElemento);
        });
    } catch (error) {
        console.error('Hubo un error al obtener las fotos:', error);
    }
}

obtenerFotos();

