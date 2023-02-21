function getPokemon() {
  let pokemons = [];

  function carregarPokemons(dados) {
    pokemons = dados.data;

    makePokemons(pokemons.results);
  }

  const promise = axios.get(
    "https://pokeapi.co/api/v2/pokemon?limit=151&offset=0"
  );

  promise.then(carregarPokemons);
}

function makePokemons(pokemons) {
  const container = document.querySelector(".container");

  for (let i = 0; i < pokemons.length; i++) {
    const name = pokemons[i].name[0].toUpperCase() + pokemons[i].name.slice(1);

    container.innerHTML += `<div class="pokemon">
        <img 
            class="img-pokemon" 
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
              i + 1
            }.png" 
            alt="pokemon" 
        />
        <p class="name-pokemon">${name}</p>
    </div>`;
  }
}

getPokemon();
