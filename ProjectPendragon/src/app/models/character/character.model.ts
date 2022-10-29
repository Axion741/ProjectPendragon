import { EGender } from "./e-gender";
import { ECulture } from "./e-culture";
import { EReligion } from "./e-religion";
import { EClass } from "./e-class";
import { Traits } from "./traits";
import { Passion } from "./passion";
import { Attributes } from "./attributes";
import { Skills } from "./skills";
import { Wealth } from "./wealth";

export interface Character {
    id: string;
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