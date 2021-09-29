export interface Fuels {
    gas: number;
    kerosine: number;
    co2: number;
    wind: number;
}

export interface Powerplant {
    name: string;
    type: string;
    efficiency: number;
    pmin: number;
    pmax: number;
}

export interface Payload {
    load: number;
    fuels: Fuels;
    powerplants: Powerplant[];
}

export interface PowerplantSolution {
    name: string;
    p: number;
}