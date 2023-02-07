import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ECombatSkills } from 'src/app/models/character/e-combat-skills';
import { ECoreSkills } from 'src/app/models/character/e-core-skills';
import { Skill } from 'src/app/models/character/skill';
import { Skills } from 'src/app/models/character/skills';

@Component({
  selector: 'skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  ECoreSkills = ECoreSkills;
  ECombatSkills = ECombatSkills;

  @Input() skills: Skills = new Skills();
  @Output() skillsChange: EventEmitter<Skills> = new EventEmitter<Skills>();

  constructor() { }

  ngOnInit(): void {
    const coreOrder = Object.values(ECoreSkills);
    const combatOrder = Object.values(ECombatSkills);

    this.skills.core = this.skills.core.sort((a, b) => coreOrder.indexOf(a.name) - coreOrder.indexOf(b.name));
    this.skills.combat = this.skills.combat.sort((a, b) => combatOrder.indexOf(a.name) - combatOrder.indexOf(b.name));
  }

  emitSkillsChange(): void {
    this.skillsChange.emit(this.skills);
  }

  getCoreSkill(key: string): Skill {
    var def = new Skill("null", 0, false);
    var skill = this.skills.core.find(f => f.name == key);

    return skill == undefined ? def : skill;
  }
}
