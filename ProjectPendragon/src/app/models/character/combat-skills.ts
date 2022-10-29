export class CombatSkills {
    id: string;
    battle: number;
    siege: number;
    horsemanship: number;
    sword: number;
    lance: number;
    spear: number;
    greatSpear: number;
    dagger: number;
    spearExpertise: number;
    greatWeapon: number;

    constructor() {
        this.id = crypto.randomUUID();
        this.battle = 0;
        this.siege = 0;
        this.horsemanship = 10;
        this.sword = 10;
        this.lance = 10;
        this.spear = 10;
        this.greatSpear = 0;
        this.dagger = 5;
        this.spearExpertise = 15;
        this.greatWeapon = 0;
    }
}