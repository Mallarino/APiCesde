const API_KEY = '470484d58a3ab8b58bd3e88bf9cce56c';

async function obtenerDatosMeteorologicos(ciudad) {
    try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${API_KEY}&units=metric`;
        const response = await fetch(url);
        const data = await response.json();

        mostrarDatos(data);
    } catch (error) {
        console.error('Hubo un error al obtener los datos meteorológicos:', error);
    }
}

function mostrarDatos(data) {
    const tiempoContainer = document.getElementById('tiempoContainer');
    tiempoContainer.innerHTML = ''; // Limpiar contenido previo

    const temperaturaElemento = document.createElement('p');
    temperaturaElemento.textContent = `Temperatura: ${data.main.temp}°C`;

    const descripcionElemento = document.createElement('p');
    descripcionElemento.textContent = `Descripción: ${data.weather[0].description}`;

    const RealFeelElemento = document.createElement('p');
    RealFeelElemento.textContent = `Sensación Térmica: ${data.main.feels_like}°C`;

    tiempoContainer.appendChild(temperaturaElemento);
    tiempoContainer.appendChild(descripcionElemento);
    tiempoContainer.appendChild(RealFeelElemento);
}

const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const inputCiudad = document.querySelector('#inputCiudad');
    const ciudad = inputCiudad.value;
    obtenerDatosMeteorologicos(ciudad);
});



