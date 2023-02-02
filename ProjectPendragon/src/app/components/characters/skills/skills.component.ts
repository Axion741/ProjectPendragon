import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Skills } from 'src/app/models/character/skills';

@Component({
  selector: 'skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  @Input() skills: Skills = new Skills();
  @Output() skillsChange: EventEmitter<Skills> = new EventEmitter<Skills>();

  constructor() { }

  ngOnInit(): void {
  }

  emitSkillsChange(): void {
    this.skillsChange.emit(this.skills);
  }

}
