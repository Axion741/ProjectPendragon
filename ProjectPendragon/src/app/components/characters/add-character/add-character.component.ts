import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddCharacterRequest } from 'src/app/models/add-character-request.model';
import { EGender } from 'src/app/models/e-gender';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent implements OnInit {

  EGender = EGender;

  addCharacterRequest: AddCharacterRequest = {
    name: '',
    age: 0,
    gender: EGender.Male
  }

  constructor(private _charactersService: CharactersService, private _router: Router) { }

  ngOnInit(): void {
  }

  addCharacter() {
    this._charactersService.addCharacter(this.addCharacterRequest)
      .subscribe({
        next: (character) => { this._router.navigate(['characters']) },
        error: (error) => { console.log("add character error", error) }
      });
  }
}
