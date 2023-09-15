import { useEffect, useState } from "react";

export default function PokemonList() {
  const [pokemon, setPokemon] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    async function loadPokemon() {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon?offset=${count}`
        );
        const data = await response.json();
        setPokemon(data.results);
      } catch (error) {
        console.log(error);
      }
    }

    loadPokemon();
  }, [count]);

  function loadNextPage() {
    setCount(count + 20);
  }

  function loadPreviousPage() {
    setCount(count === 0 ? 0 : count - 20 );
  }
  console.log(count);

  return (
    <main>
      <button type="button" onClick={loadPreviousPage} 
  
      >
        Previous Page
      </button>
      <button type="button" onClick={loadNextPage}>
        Next Page
      </button>
      <ul>
        {pokemon.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </main>
  );
}
