function getPokemon() {
  let pokemons = [];

  function carregarPokemons(dados) {
    pokemons = dados.data;

    function makePokemons(pokemons) {
      const container = document.querySelector(".container");

      for (let i = 0; i < pokemons.length; i++) {
        const name =
          pokemons[i].name[0].toUpperCase() + pokemons[i].name.slice(1);

        container.innerHTML += `
          <button 
            class="pokemon"
            onclick="toCapture(this)"
          >
              <img 
                class="capture" 
                src="https://w7.pngwing.com/pngs/213/264/png-transparent-poke-ball-coloring-book-drawing-pokemon-sun-and-moon-pokemon-comics-angle-text.png"
                alt="poke"
              />
              <img 
                  class="img-pokemon" 
                  src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                    i + 1
                  }.png" 
                  alt="pokemon" 
              />
              <p class="name-pokemon">${name}</p>
          </button>`;
      }
    }

    makePokemons(pokemons.results);
  }

  const promise = axios.get(
    "https://pokeapi.co/api/v2/pokemon?limit=151&offset=0"
  );

  promise.then(carregarPokemons);
}

function toCapture(element) {
  element.querySelector(".capture").classList.toggle("selected");
  const imgSelected = element.querySelector(".selected");

  const imgUrl = imgSelected
    ? "https://w7.pngwing.com/pngs/620/521/png-transparent-poke-ball-pokemon-pokemon-rim-mobile-phones-pokemon.png"
    : "https://w7.pngwing.com/pngs/213/264/png-transparent-poke-ball-coloring-book-drawing-pokemon-sun-and-moon-pokemon-comics-angle-text.png";

  element.querySelector(".capture").setAttribute("src", imgUrl);
}

getPokemon();
