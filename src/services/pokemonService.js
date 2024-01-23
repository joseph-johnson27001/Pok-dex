import axios from "axios";

const BASE_URL = "https://pokeapi.co/api/v2/";

export const getPokemonList = async (startId, endId) => {
  try {
    const response = await axios.get(`${BASE_URL}pokemon?limit=${endId}`);
    const pokemonList = response.data.results;
    const filteredPokemonList = pokemonList.filter((pokemon) => {
      const pokemonId = parseInt(pokemon.url.split("/").slice(-2, -1)[0]);
      return pokemonId >= startId && pokemonId <= endId;
    });
    const detailedPokemonList = await Promise.all(
      filteredPokemonList.map(async (pokemon) => {
        const detailsResponse = await axios.get(pokemon.url);
        return detailsResponse.data;
      })
    );
    return detailedPokemonList;
  } catch (error) {
    console.error("Error fetching Pokemon list:", error);
    throw error;
  }
};
