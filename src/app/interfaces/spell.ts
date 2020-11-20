export interface Spell {
    id: number;
    name: string;
    damage: number;
    mana_cost: number;
    cooldown: number;
    cooldown_type: string;
    other: string;
}