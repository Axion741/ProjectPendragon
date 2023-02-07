import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Character } from 'src/app/models/character/character.model';
import { CharactersService } from 'src/app/services/characters.service';
import { GlobalService } from 'src/app/services/global-service.service';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.css']
})
export class CharactersListComponent implements OnInit {

  characters: Character[] = [];

  constructor(private _charactersService: CharactersService, private _globalService: GlobalService, private _router: Router, private _actRoute: ActivatedRoute) { }

  ngOnInit(): void {
    // this._charactersService.getAllCharacters()
    //   .subscribe({
    //     next: (chars) => { this.characters = chars },
    //     error: (error) => console.error("getAllChars error", error)
    //   });

    this.characters = this._charactersService.allCharacterList;

    // this._actRoute.data.subscribe((data) => {
    //   this.characters = data;
    // })
  }

  routeToAddCharacter() {
    this._router.navigate(['/characters', 'add']);
  }

  getCharacterAge(yearBorn: number): number {
    return this._globalService.currentYear - yearBorn;
  }
}
