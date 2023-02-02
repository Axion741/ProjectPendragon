import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CharactersService } from 'src/app/services/characters.service';
import { UpdateCharacterRequest } from 'src/app/models/requests/update-character-request.model';
import { Character } from 'src/app/models/character/character.model';

@Component({
  selector: 'app-edit-character',
  templateUrl: './edit-character.component.html',
  styleUrls: ['./edit-character.component.css']
})
export class EditCharacterComponent implements OnInit {

  character: Character = {} as Character;

  constructor(private _route: ActivatedRoute, private _router: Router, private _charactersService: CharactersService) { }

  ngOnInit(): void {
    this._route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');

        if (id) {
          this._charactersService.getCharacterById(id)
            .subscribe({
              next: (response) => {
                this.character = response;
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
}
