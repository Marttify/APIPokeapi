const listaPokemon = document.querySelector("#lista-pokemon");

// Math.random()
// Esta funcion devuelve un número aleatorio situado entre dos valores específicos. El valor devuelto será mayor o igual que min y menor que max.
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}


document.addEventListener("DOMContentLoaded", () => {
    let i = 0
    while (i <= 10) {
        const ramdom = getRandomInt(1, 152)
        obtenerPokemons(ramdom)
        i = i + 1
    }
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


function cardPokemon(dataPokemons) {
    const listaPokemon = document.querySelector("#lista-pokemon");

    // Validar datos esenciales
    const imageUrl = dataPokemons?.sprites?.other?.dream_world?.front_default || "https://via.placeholder.com/150";
    const name = dataPokemons?.name || "Nombre no disponible";
    const experience = dataPokemons?.base_experience || "Desconocida";
    const stats = dataPokemons?.stats || [];
    const abilities = dataPokemons?.abilities || [];

    // Crear estructura de habilidades y estadísticas
    const abilityList = abilities
        .slice(0, 2) // Mostrar solo las dos primeras habilidades
        .map(ability => ability?.ability?.name || "Habilidad desconocida")
        .join(", ");

    const statsList = stats
        .slice(0, 3) // Mostrar solo las primeras tres estadísticas
        .map(stat => `
            <li>
                <h4>${stat?.base_stat || 0}</h4>
                <p>${stat?.stat?.name || "Estadística desconocida"}</p>
            </li>
        `)
        .join("");

    // Generar la tarjeta
    listaPokemon.innerHTML += `
        <div class="card" style="width: 18rem; padding: 1rem; margin: 1rem; border-radius: 10px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
            <img src="${imageUrl}" alt="${name}" class="card-img-top" style="border-radius: 10px 10px 0 0;">
            <div class="card-body">
                <h5 class="card-title" style="text-transform: capitalize;">${name}</h5>
                <p class="card-text">Experiencia base: <strong>${experience}</strong></p>
            </div>
            <ul class="list-group list-group-flush" style="padding: 1rem;>
                ${statsList}
            </ul>
            <div class="card-footer">
                <p><strong>Habilidades:</strong> ${abilityList}</p>
            </div>
        </div>
    `;
}
