import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Character } from 'src/app/models/character/character.model';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.css']
})
export class CharactersListComponent implements OnInit {

  characters: Character[] = [];

  constructor(private _charactersService: CharactersService, private _router: Router) { }

  ngOnInit(): void {
    this._charactersService.getAllCharacters()
      .subscribe({
        next: (chars) => { this.characters = chars },
        error: (error) => console.error("getAllChars error", error)
      });
      
  }

  routeToAddCharacter() {
    this._router.navigate(['/characters', 'add']);
  }

  getCharacterAge(yearBorn: number): number {
    return 500 - yearBorn;
  }
}
