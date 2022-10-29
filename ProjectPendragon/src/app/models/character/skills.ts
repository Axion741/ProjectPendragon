import { CombatSkills } from "./combat-skills";

export interface Skills {
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
}