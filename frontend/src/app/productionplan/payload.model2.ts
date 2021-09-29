export class Fuels {
    public gas: number;
    public kerosine: number;
    public co2: number;
    public wind: number=0;
    constructor() {
        this.gas=0;
        this.kerosine=0;
        this.co2=0;
        this.wind=0;
    }
}

export class Powerplant {
    public name: string;
    public type: string;
    public efficiency: number;
    public pmin: number;
    public pmax: number;
    constructor() {
        this.name ="powerplant name";
        this.type="powerplant type ('gasfired', 'turbojet', 'windturbine')";
        this.efficiency=0;
        this.pmin=0;
        this.pmax=0;
    }
}

export class Payload {
    public load: number;
    public fuels: Fuels;
    public powerplants: Powerplant[];
    constructor() {
        this.load=0;
        this.fuels= new Fuels();
        this.powerplants= [];
     }
}

export class PowerplantSolution {
    constructor(
        public name: string,
        public p: number,
    ) { }
}