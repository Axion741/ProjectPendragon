export class Traits {
    id: string;
    chaste: number;
    energetic: number;
    forgiving: number;
    generous: number;
    honest: number;
    just: number;
    merciful: number;
    modest: number;
    pious: number;
    prudent: number;
    temperate: number;
    trusting: number;
    valorous: number;

    constructor() {
        this.id = crypto.randomUUID();
        this.chaste = 10;
        this.energetic = 10;
        this.forgiving = 10;
        this.generous = 10;
        this.honest = 10;
        this.just = 10;
        this.merciful = 10;
        this.modest = 10;
        this.pious = 10;
        this.prudent = 10;
        this.temperate = 10;
        this.trusting = 10;
        this.valorous = 10;
    }
}