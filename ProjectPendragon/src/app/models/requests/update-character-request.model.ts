import { EGender } from "../character/e-gender";
import { ECulture } from "../character/e-culture";
import { EReligion } from "../character/e-religion";
import { EClass } from "../character/e-class";
import { Traits } from "../character/traits";
import { Passion } from "../character/passion";
import { Attributes } from "../character/attributes";
import { Skills } from "../character/skills";
import { Wealth } from "../character/wealth";
import { Character } from "../character/character.model";

export class UpdateCharacterRequest {
    id: string;
    name: string;
    yearBorn: number;
    gender: number;
    birthNumber: number;
    home: string;
    culture: number;
    fathersName: string | null;
    religion: number;
    liegeLord: string | null;
    class: number;
    traits: Traits;
    passions: Passion[];
    attributes: Attributes;
    distinctiveFeatures: string | null;
    skills: Skills;
    glory: number;
    wealth: Wealth | null;

    constructor(character: Character) {
        this.id = character.id;
        this.name = character.name;
        this.yearBorn = character.yearBorn;
        this.gender = character.gender;
        this.birthNumber = character.birthNumber;
        this.home = character.home;
        this.culture = Number.parseInt(character.culture.valueOf());
        this.fathersName = character.fathersName;
        this.religion = Number.parseInt(character.religion.valueOf());
        this.liegeLord = character.liegeLord;
        this.class = Number.parseInt(character.class.valueOf());
        this.traits = character.traits;
        this.passions = character.passions;
        this.attributes = character.attributes;
        this.distinctiveFeatures = character.distinctiveFeatures;
        this.skills = character.skills;
        this.glory = character.glory;
        this.wealth = character.wealth;
    }
}