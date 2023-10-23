const searchButton = document.getElementById("searchButton");
const searchInput = document.getElementById("searchInput");
const pokemonInfo = document.getElementById("pokemonInfo");

searchButton.addEventListener("click", () => {
    const searchTerm = searchInput.value.trim();
    if (searchTerm !== "") {
        fetch(`https://pokeapi.co/api/v2/pokemon/${searchTerm}`)
            .then((response) => response.json())
            .then((data) => {
                displayPokemonInfo(data);
            })
            .catch((error) => {
                pokemonInfo.textContent = "Pokémon not found.";
            });
    }
});

function displayPokemonInfo(pokemon) {
    pokemonInfo.innerHTML = `
        <h2>${pokemon.name}</h2>
        <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
        <p>Height: ${pokemon.height} decimetres</p>
        <p>Weight: ${pokemon.weight} hectograms</p>
        <p>Abilities: ${pokemon.abilities.map((ability) => ability.ability.name).join(", ")}</p>
    `;
}
