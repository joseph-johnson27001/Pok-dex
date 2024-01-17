import axios from "axios";

const BASE_URL = "https://pokeapi.co/api/v2/";

export const getPokemonList = async () => {
  try {
    console.log("RUNNING");
    const response = await axios.get(`${BASE_URL}pokemon?limit=100`);
    return response.data.results;
  } catch (error) {
    console.error("Error fetching Pokemon list:", error);
    throw error;
  }
};
