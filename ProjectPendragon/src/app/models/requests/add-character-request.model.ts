import { EGender } from "../character/e-gender";
import { ECulture } from "../character/e-culture";
import { EReligion } from "../character/e-religion";
import { EClass } from "../character/e-class";
import { Traits } from "../character/traits";
import { Passion } from "../character/passion";
import { Attributes } from "../character/attributes";
import { Skills } from "../character/skills";
import { Wealth } from "../character/wealth";

export interface AddCharacterRequest {
    name: string;
    yearBorn: number;
    gender: EGender;
    birthNumber: number;
    home: string;
    culture: ECulture;
    fathersName: string | null;
    religion: EReligion;
    liegeLord: string;
    class: EClass;
    traits: Traits;
    passions: Passion[];
    attributes: Attributes;
    distinctiveFeatures: string | null;
    skills: Skills;
    glory: number;
    wealth: Wealth | null;
}