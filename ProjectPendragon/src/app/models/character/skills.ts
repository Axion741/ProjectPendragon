import { ECombatSkills } from "./e-combat-skills";
import { ECoreSkills } from "./e-core-skills";
import { Skill } from "./skill";

export class Skills {
    id: string;
    core: Skill[] = [];
    combat: Skill[] = [];

    constructor(core: Skill[] = [], combat: Skill[] = []) {
        this.id = crypto.randomUUID();

        if (core.length == 0 && this.core.length == 0)
            this.core = this.BuildCoreSkills();
        else
            this.core = core;

        if (combat.length == 0 && this.combat.length == 0)
            this.combat = this.BuildCombatSkills();
        else
            this.combat = combat;
    }

    BuildCoreSkills() : Skill[] {
        let skills: Skill[] = [];
        var keys = Object.keys(ECoreSkills);
        keys.slice(keys.length/2).forEach(element => {
            skills.push(new Skill(element, 0, false))
        });

        return skills;
    }

    BuildCombatSkills() : Skill[] {
        let skills: Skill[] = [];
        var keys = Object.keys(ECombatSkills);
        keys.slice(keys.length/2).forEach(element => {
            skills.push(new Skill(element, 0, false))
        });

        return skills;
    }
}