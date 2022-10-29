export class Wealth {
    id: string;
    libra: number;
    shilling: number;
    denari: number;
    
    constructor() {
        this.id = crypto.randomUUID();
        this.libra = 0;
        this.shilling = 0;
        this.denari = 0;
    }
}