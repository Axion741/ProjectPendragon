export class Passion {
    id: string;
    value: number;
    description: string;

    constructor(value?: number, description?: string, id?: string) {
        this.id = id ? id : crypto.randomUUID();
        this.value = value ? value : 0;
        this.description = description ? description : '';
    }
}