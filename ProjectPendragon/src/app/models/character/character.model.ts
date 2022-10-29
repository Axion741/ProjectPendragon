import { EGender } from "./e-gender";
import { ECulture } from "./e-culture";
import { EReligion } from "./e-religion";
import { EClass } from "./e-class";
import { Traits } from "./traits";
import { Passion } from "./passion";
import { Attributes } from "./attributes";
import { Skills } from "./skills";
import { Wealth } from "./wealth";

export class Character {
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
    wealth: Wealth;

    constructor() {
        this.id = '';
        this.name = '';
        this.yearBorn = 450;
        this.gender = EGender.Male;
        this.birthNumber = 1;
        this.home = '';
        this.culture = ECulture.Cymric;
        this.fathersName = null;
        this.religion = EReligion.BritishChristian;
        this.liegeLord = null;
        this.class = EClass.Commoner;
        this.traits = new Traits();
        this.passions = [];
        this.attributes = new Attributes();
        this.distinctiveFeatures = null;
        this.skills = new Skills();
        this.glory = 0;
        this.wealth = new Wealth();
    }
}