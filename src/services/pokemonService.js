import axios from "axios";

const BASE_URL = "https://pokeapi.co/api/v2/";

export const getPokemonList = async () => {
  try {
    const response = await axios.get(`${BASE_URL}pokemon?limit=151`);
    const pokemonList = response.data.results;

    // Fetch additional details for each Pokemon
    const detailedPokemonList = await Promise.all(
      pokemonList.map(async (pokemon) => {
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
