import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddCharacterRequest } from 'src/app/models/requests/add-character-request.model';
import { EGender } from 'src/app/models/character/e-gender';
import { CharactersService } from 'src/app/services/characters.service';
import { Character } from 'src/app/models/character/character.model';

@Component({
  selector: 'app-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent implements OnInit {

  EGender = EGender;

  character: Character = new Character();

  constructor(private _charactersService: CharactersService, private _router: Router) { }

  ngOnInit(): void {
  }

  addCharacter() {
    var request = new AddCharacterRequest(this.character);

    this._charactersService.addCharacter(request)
      .subscribe({
        next: (character) => { this._router.navigate(['characters']) },
        error: (error) => { console.log("add character error", error) }
      });
  }
}
