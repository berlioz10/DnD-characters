import { Armor } from './../interfaces/armor';

export const Armors: Armor[] = [
    {
        id: 1,
        name: "Platosa de tigru",
        ad_resistance: 30,
        ap_resistance: 20,
        endurance: 50,
        other: ""
    },
    {
        id: 2,
        name: "Armura normala",
        ad_resistance: 50,
        ap_resistance: 0,
        endurance: 50,
        other: ""
    },
    {
        id: 3,
        name: "Armura cu tepi blanaos",
        ad_resistance: 30,
        ap_resistance: 10,
        endurance: 40,
        other: "Da damage la cei care il ataca"
    }
]