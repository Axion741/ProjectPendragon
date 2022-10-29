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
    gender: EGender;
    birthNumber: number;
    home: string;
    culture: ECulture;
    fathersName: string | null;
    religion: EReligion;
    liegeLord: string | null;
    class: EClass;
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
        this.culture = character.culture;
        this.fathersName = character.fathersName;
        this.religion = character.religion;
        this.liegeLord = character.liegeLord;
        this.class = character.class;
        this.traits = character.traits;
        this.passions = character.passions;
        this.attributes = character.attributes;
        this.distinctiveFeatures = character.distinctiveFeatures;
        this.skills = character.skills;
        this.glory = character.glory;
        this.wealth = character.wealth;
    }
}