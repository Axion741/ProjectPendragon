import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AddCharacterRequest } from 'src/app/models/requests/add-character-request.model';
import { EGender } from 'src/app/models/character/e-gender';
import { CharactersService } from 'src/app/services/characters.service';
import { Character } from 'src/app/models/character/character.model';
import { ECulture } from 'src/app/models/character/e-culture';
import { EReligion } from 'src/app/models/character/e-religion';
import { EClass } from 'src/app/models/character/e-class';
import { Attributes } from 'src/app/models/character/attributes';
import { Traits } from 'src/app/models/character/traits';
import { Passion } from 'src/app/models/character/passion';
import { Skills } from 'src/app/models/character/skills';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent implements OnInit {
  @ViewChild('form') public form: NgForm = new NgForm([], []);

  EGender = EGender;
  ECulture = ECulture;
  EReligion = EReligion;
  EClass = EClass;

  character: Character = new Character();
  allCharacterList: Character[] = [];

  constructor(private _charactersService: CharactersService, private _router: Router) { }

  ngOnInit(): void {
    this.allCharacterList = this._charactersService.allCharacterList;
  }

  addCharacter() {
    var request = new AddCharacterRequest(this.character);

    console.log("KB - new char", request)
    this._charactersService.addCharacter(request)
      .subscribe({
        next: (character) => { this.form.form.markAsPristine(); this._router.navigate(['characters']) },
        error: (error) => { console.log("add character error", error) }
      });
  }

  //Return 0 to stop keyvalue pipe sorting
  returnZero(): number { 
    return 0;
  }

  onAttributesChange(attributes: Attributes): void {
    this.character.attributes = attributes;
  }

  onTraitsChange(traits: Traits): void {
    this.character.traits = traits;
  }

  onPassionsChange(passions: Passion[]): void {
    this.character.passions = passions;
  }

  onSkillsChange(skills: Skills): void {
    this.character.skills = skills;
  }
}
