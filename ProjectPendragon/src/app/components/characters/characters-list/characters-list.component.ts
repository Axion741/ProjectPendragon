import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/models/character.model';
import { EGender } from 'src/app/models/e-gender';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.css']
})
export class CharactersListComponent implements OnInit {

  characters: Character[] = [];

  constructor(private _charactersService: CharactersService) { }

  ngOnInit(): void {
    this._charactersService.getAllCharacters()
      .subscribe({
        next: (chars) => { console.log("getAllChars", chars), this.characters = chars },
        error: (error) => console.error("getAllChars error", error)
      });
      
  }

  
}
