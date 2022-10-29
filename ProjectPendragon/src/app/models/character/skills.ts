import { CombatSkills } from "./combat-skills";

export class Skills {
    id: string;
    awareness: number;
    boating: number;
    chirurgury: number;
    compose: number;
    courtesy: number;
    dancing: number;
    faerieLore: number;
    falconry: number;
    fashion: number;
    firstAid: number;
    flirting: number;
    folklore: number;
    gaming: number;
    heraldry: number;
    hunting: number;
    industry: number;
    intrigue: number;
    orate: number;
    playInstrument: number;
    readLatin: number;
    recognize: number;
    religion: number;
    romance: number;
    singing: number;
    stewardship: number;
    swimming: number;
    tourney: number;
    distaff: number;
    combat: CombatSkills;

    constructor() {
        this.id = crypto.randomUUID();
        this.awareness = 0;
        this.boating = 0
        this.chirurgury = 0;
        this.compose = 0;
        this.courtesy = 0;
        this.dancing = 0;
        this.faerieLore = 0;
        this.falconry = 0;
        this.fashion = 0;
        this.firstAid = 0;
        this.flirting = 0;
        this.folklore = 0;
        this.gaming = 0;
        this.heraldry = 0;
        this.hunting = 0;
        this.industry = 0;
        this.intrigue = 0;
        this.orate = 0;
        this.playInstrument = 0;
        this.readLatin = 0;
        this.recognize = 0;
        this.religion = 0;
        this.romance = 0;
        this.singing = 0;
        this.stewardship = 0;
        this.swimming = 0;
        this.tourney = 0;
        this.distaff = 0;
        this.combat = new CombatSkills();
    }
}