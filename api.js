const listaPokemon = document.querySelector("#lista-pokemon");


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

document.addEventListener("DOMContentLoaded", () => {
    const ramdom = getRandomInt(1, 152)
    const ramdom1 = getRandomInt(1, 152)
    const ramdom2 = getRandomInt(1, 152)
    const ramdom3 = getRandomInt(1, 152)
    const ramdom4 = getRandomInt(1, 152)
    const ramdom5 = getRandomInt(1, 152)
    const ramdom6 = getRandomInt(1, 152)
    const ramdom7 = getRandomInt(1, 152)
    const ramdom8 = getRandomInt(1, 152)
    obtenerPokemons(ramdom)
    obtenerPokemons(ramdom1)
    obtenerPokemons(ramdom2)
    obtenerPokemons(ramdom3)
    obtenerPokemons(ramdom4)
    obtenerPokemons(ramdom5)
    obtenerPokemons(ramdom6)
    obtenerPokemons(ramdom7)
    obtenerPokemons(ramdom8)
})


// Recorre el objeto con todos los Pokemon
function obtenerPokemons(id) {
    const URLPOKEMONS = `https://pokeapi.co/api/v2/pokemon/${id}`;
    // Petision de todos los pokemons

    fetch(URLPOKEMONS)
        .then(response => response.json())
        .then(dataPoke => {
            cardPokemon(dataPoke)
        })
        .catch((error => console.log(error)));

}


// impresion grafica de los pokemons
function cardPokemon(dataPokemons) {
    listaPokemon.innerHTML += `
        <div class="card" style="width: 25rem;">
            <img src="${dataPokemons.sprites.other.dream_world.front_default}" alt="imagen de vitoko" class="card-body-img">
            <div class="card-body">
                <a class="card-title">${dataPokemons.name}</a>
                <p class="card-text">${dataPokemons.base_experience}</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">
                    
                    <h3>${dataPokemons.stats[1].base_stat}k</h3>
                    <p>${dataPokemons.stats[1].stat.name}</p>
                    <a href="#" class="card-link list-group-item">
                        <h3>${dataPokemons.stats[3].stat.name} ${dataPokemons.stats[3].base_stat}K</h3>
                    </a>
                </li>
                <li class="list-group-item">
                    <h3>${dataPokemons.stats[2].base_stat}k</h3>
                    <p>${dataPokemons.stats[2].stat.name}</p>
                    <a href="#" class="card-link list-group-item">
                    <h3>${dataPokemons.stats[4].stat.name} ${dataPokemons.stats[5].base_stat}K</h3>
                </a>
                </li>
            </ul>
            <div class="card-body flex-row">
                <p href="#" class="card-link list-group-item">
                    ${dataPokemons.abilities[1].ability.name}
                </p>
                <p href="#" class="card-link list-group-item">
                    ${dataPokemons.abilities[2].ability.name}
                </p>
            </div>
        </div>
    `;
}