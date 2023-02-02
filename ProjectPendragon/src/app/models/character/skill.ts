export class Skill {
    id: string;
    name: string;
    value: number;
    checked: boolean;

    constructor(name: string, value: number, checked: boolean = false) {
        this.id = crypto.randomUUID();
        this.name = name;
        this.value = value;
        this.checked = checked;
    }
}