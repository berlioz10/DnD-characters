import { Character } from '../interfaces/character';


export const Characters: Character[] = [
    {
        id: 1,
        max_hp: 100,
        hp: 100,
        max_mp: 50,
        mp: 50,
        money: 10,
        name: "Ion",
        race: "Monke",
        id_weapon: 3,
        id_armor: 1,
        id_spell: [1]
    },
    {
        id: 2,
        max_hp: 110,
        hp: 110,
        max_mp: 60,
        mp: 60,
        money: 10,
        name: "Mihai",
        race: "martian",
        id_weapon: 0,
        id_armor: 2,
        id_spell: [2]
    },
    {
        id: 3,
        max_hp: 140,
        hp: 140,
        max_mp: 30,
        mp: 30,
        money: 10,
        name: "Cristi",
        race: "roman",
        id_weapon: 2,
        id_armor: 1,
        id_spell: [4]
    },
    {
        id: 4,
        max_hp: 110,
        hp: 110,
        max_mp: 50,
        mp: 50,
        money: 10,
        name: "Gabriel",
        race: "Gabi Mircea",
        id_weapon: 1,
        id_armor: 3,
        id_spell: [0]
    },
    {
        id: 5,
        max_hp: 90,
        hp: 90,
        max_mp: 70,
        mp: 70,
        money: 10,
        name: "Dragos",
        race: "Elf",
        id_weapon: 1,
        id_armor: 2,
        id_spell: [1,2]
    }
]