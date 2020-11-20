import { Spell } from './../interfaces/spell';

export const Spells: Spell[] = [
    {
        id: 1,
        name: "Fireball",
        damage: 10,
        mana_cost: 5,
        cooldown: 5,
        cooldown_type: "turn",
        other: ""
    },
    {
        id: 2,
        name: "Slimeball",
        damage: 20,
        mana_cost: 10,
        cooldown: 3,
        cooldown_type: "turn",
        other: ""
    },
    {
        id: 3,
        name: "Vision",
        damage: 0,
        mana_cost: 3,
        cooldown: 1,
        cooldown_type: "hour",
        other: "You can see if there are enemy nearby"
    },
    {
        id: 4,
        name: "POWEEEER",
        damage: 10,
        mana_cost: 5,
        cooldown: 5,
        cooldown_type: "turn/end of fight",
        other: "using it, you will have 10 more damage than usual, and is not affected by ability damage. \n"
    }
]