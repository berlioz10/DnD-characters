export interface Character {
    id: number;
    max_hp: number;
    hp: number;
    max_mp: number;
    mp: number;
    name: string;
    race: string;
    id_weapon: number;
    id_armor: number;
    id_spell: number[];
}