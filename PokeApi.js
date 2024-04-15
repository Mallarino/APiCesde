
const obtenerDatosPokemon = async (nombrePokemon) => {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombrePokemon}`);
        if (!response.ok) {
            throw new Error('No se pudo obtener la información del Pokémon.');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error al obtener los datos del Pokémon:', error);
        throw error; // Propagar el error para manejarlo fuera de esta función si es necesario
    }
};

const mostrarPokemon = (pokemon) => {
    const nombre = pokemon.name;
    const habilidades = pokemon.abilities.map(ability => ability.ability.name).join(', ');
    const tipos = pokemon.types.map(type => type.type.name).join(', ');
    const peso = pokemon.weight;

    const pokemonInfo = `<div class="card" style="width: 18rem;">
                <img src="${pokemon.sprites.front_default}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${nombre.toUpperCase()}</h5>
                  <p class="card-text"><strong>Habilidades:</strong> ${habilidades}</p>
                  <p class="card-text"><strong>Tipos:</strong> ${tipos} </p>
                  <p class="card-text"><strong>Peso:</strong> ${peso} lb</p>
                </div>
              </div>`;

    document.getElementById('pokemonInfo').innerHTML = pokemonInfo;
};

document.getElementById('formularioPokemon').addEventListener('submit', async (event) => {
    event.preventDefault();
    const inputPokemon = document.getElementById('inputPokemon');
    const nombrePokemon = inputPokemon.value.toLowerCase(); // Convertir a minúsculas
    try {
        const pokemon = await obtenerDatosPokemon(nombrePokemon);
        mostrarPokemon(pokemon);
    } catch (error) {
        console.error('Error al obtener datos', error)
    }
});
