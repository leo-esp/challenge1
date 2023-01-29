export enum types {
  NORMAL = "normal",
  BUG = "bug",
  DARK = "dark",
  ELETRIC = "eletric",
  FAIRY = "fairy",
  FIGHTING = "fighting",
  FLYING = "flying",
  GHOST = "ghost",
  GRASS = "grass",
  ICE = "ice",
  POISON = "poison",
  PSYCHIC = "psychic",
  STEEL = "steel",
  WATER = "water",
}
export enum translatedTypes {
  normal = "normal",
  bug = "inseto",
  dark = "sombrio",
  eletric = "elétrico",
  fairy = "fada",
  fighting = "lutador",
  flying = "voador",
  ghost = "fantasma",
  grass = "planta",
  ice = "gelo",
  poison = "veneno",
  psychic = "psíquico",
  steel = "aço",
  water = "água",
}
export enum translatedBodyStats {
  hp = "hp",
  height = "altura",
  weight = "peso",
}
export enum translatedStats {
  attack = "ataque",
  defense = "defesa",
  specialAttack = "ataque especial",
  specialDefense = "defesa especial",
  speed = "velocidade",
}

export interface Stats {
  attack?: number | null;
  defense: number | null;
  specialAttack: number | null;
  specialDefense: number | null;
  speed: number | null;
}

export interface BodyStats {
  hp: number | null;
  height: number | null;
  weight: number | null;
}

export interface Pokemon {
  image: string;
  name: string;
  types: types[];
  abilities: string[];
  stats: Stats;
  bodyStats: BodyStats;
}

export interface AppState {
  appState: { isCreating: boolean; isEditing: boolean; isAppearing: boolean };
  modalPokemon: Pokemon | null;
  pokemonParty: Pokemon[];
}

export const EmptyPokemon: () => Pokemon = () => ({
  image: "",
  name: "",
  types: [],
  abilities: [],
  stats: {
    attack: null,
    defense: null,
    specialAttack: null,
    specialDefense: null,
    speed: null,
  },
  bodyStats: {
    hp: null,
    height: null,
    weight: null,
  },
});
