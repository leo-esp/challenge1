const baseUrl = "https://pokeapi.co/api/v2/";

export const getTypes = async () => {
  const res = await fetch(`${baseUrl}type`);
  const types = await res.json();
  return types.results;
};
