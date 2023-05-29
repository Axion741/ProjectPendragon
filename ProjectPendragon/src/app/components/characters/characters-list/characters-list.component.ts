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
  userCanEdit: boolean = false;

  constructor(private _charactersService: CharactersService, private _globalService: GlobalService, private _router: Router, private _actRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.userCanEdit = this._globalService.userRole == "admin" || this._globalService.userRole == "editor";
    this.characters = this._charactersService.allCharacterList;
  }

  routeToAddCharacter() {
    this._router.navigate(['/characters', 'add']);
  }

  getCharacterAge(yearBorn: number): number {
    return this._globalService.currentYear - yearBorn;
  }
}
