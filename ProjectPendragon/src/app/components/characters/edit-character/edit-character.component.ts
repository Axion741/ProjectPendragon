import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CharactersService } from 'src/app/services/characters.service';
import { UpdateCharacterRequest } from 'src/app/models/requests/update-character-request.model';
import { Character } from 'src/app/models/character/character.model';
import { EClass } from 'src/app/models/character/e-class';
import { ECulture } from 'src/app/models/character/e-culture';
import { EGender } from 'src/app/models/character/e-gender';
import { EReligion } from 'src/app/models/character/e-religion';
import { Attributes } from 'src/app/models/character/attributes';
import { Passion } from 'src/app/models/character/passion';
import { Skills } from 'src/app/models/character/skills';
import { Traits } from 'src/app/models/character/traits';

@Component({
  selector: 'app-edit-character',
  templateUrl: './edit-character.component.html',
  styleUrls: ['./edit-character.component.css']
})
export class EditCharacterComponent implements OnInit {

  EGender = EGender;
  ECulture = ECulture;
  EReligion = EReligion;
  EClass = EClass;
  
  character: Character = {} as Character;
  isLoading : boolean = false;
  constructor(private _route: ActivatedRoute, private _router: Router, private _charactersService: CharactersService) { }

  ngOnInit(): void {
    this.isLoading = true; 
    
    this._route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');

        if (id) {
          this._charactersService.getCharacterById(id)
            .subscribe({
              next: (response) => {
                this.character = response;
                this.isLoading = false;
                console.log(this.character)
              }
            })
        }
      }
    })
  }

  updateCharacter() {
    var request = new UpdateCharacterRequest(this.character);

    this._charactersService.updateCharacter(this.character.id, request)
      .subscribe({
        next: (response) => {
          this._router.navigate(['characters']);
        },
        error: (error) => console.log("Update Character Error", error)
      })
  }

  deleteCharacter() {
    this._charactersService.deleteCharacter(this.character.id)
      .subscribe({
        next: (response) => {
          this._router.navigate(['characters']);
        },
        error: (error) => console.log("Delete Character Error", error)
      })
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