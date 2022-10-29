export class Attributes {
    id: string;
    siz: number;
    dex: number;
    str: number;
    con: number;
    app: number;

    constructor() {
        this.id = crypto.randomUUID();
        this.siz = 5;
        this.dex = 5;
        this.str = 5;
        this.con = 5
        this.app = 5;
    }
}