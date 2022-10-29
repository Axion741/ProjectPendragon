export class Passion {
    id: string;
    value: number;
    description: string;

    constructor() {
        this.id = crypto.randomUUID();
        this.value = 0;
        this.description = '';
    }
}