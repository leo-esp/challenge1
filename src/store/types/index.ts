export enum types {
    BUG = "bug",
    DARK = "dark",
    DRAGON = 'dragon',
    ELECTRIC = "electric",
    FAIRY = "fairy",
    FIGHTING = "fighting",
    FIRE = 'fire',
    FLYING = "flying",
    GHOST = "ghost",
    GRASS = "grass",
    GROUND = 'ground',
    ICE = "ice",
    NORMAL = "normal",
    POISON = "poison",
    PSYCHIC = "psychic",
    ROCK = "rock",
    SHADOW = 'shadow',
    STEEL = "steel",
    UNKNOW = 'unknow',
    WATER = "water",
}
export enum translatedTypes {
    bug = "inseto",
    dark = "sombrio",
    dragon = 'dragão',
    electric = "elétrico",
    fairy = "fada",
    fighting = "lutador",
    fire = 'fogo',
    flying = "voador",
    ghost = "fantasma",
    grass = "planta",
    ground = 'terra',
    ice = "gelo",
    normal = "normal",
    poison = "veneno",
    psychic = "psíquico",
    rock = "pedra",
    shadow = "sombroso",
    steel = "aço",
    unknow = "desconhecido",
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
