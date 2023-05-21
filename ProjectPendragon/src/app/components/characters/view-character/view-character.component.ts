import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Character } from 'src/app/models/character/character.model';
import { EClass } from 'src/app/models/character/e-class';
import { ECulture } from 'src/app/models/character/e-culture';
import { EGender } from 'src/app/models/character/e-gender';
import { EReligion } from 'src/app/models/character/e-religion';
import { CharactersService } from 'src/app/services/characters.service';
import { GlobalService } from 'src/app/services/global-service.service';

@Component({
  selector: 'app-view-character',
  templateUrl: './view-character.component.html',
  styleUrls: ['./view-character.component.css']
})
export class ViewCharacterComponent implements OnInit, AfterViewInit {
  EGender = EGender;
  ECulture = ECulture;
  EReligion = EReligion;
  EClass = EClass;
  
  character: Character = {} as Character;
  allCharacterList: Character[] = [];
  userCanEdit: boolean = false;
  
  constructor(private _route: ActivatedRoute, private _router: Router, private _charactersService: CharactersService, private _globalService: GlobalService) { }

  ngOnInit(): void {   
    this.character = this._charactersService.selectedCharacter;
    this.allCharacterList = this._charactersService.allCharacterList;
    this.userCanEdit = this._globalService.userRole == "admin" || this._globalService.userRole == "editor";
    console.log(this._globalService.userRole)
  }

  ngAfterViewInit(): void {
    this._route.params.subscribe((params) => {
      this._charactersService.getCharacterById(params['id'])
        .then((char) => {
          this.character = char;
        });
    })
  }

  //Return 0 to stop keyvalue pipe sorting
  returnZero(): number { 
    return 0;
  }

  routeToEditCharacter() {
    this._router.navigate(['/characters', 'edit', this.character.id]);
  }

  getClassName(): string {
    var name = "";

    var test = Object.keys(this.EClass);
    name = test[this.character.class];

    return name;
  }

  getEnumKey(enumClass: any, value: any): string {
    var name = "";

    var keys = Object.keys(enumClass);
    name = keys[value];

    return name;
  }
  
  getLiegelordName(): string {
    if (this.character.liegeLord == null)
      return "None";

    var liegeLord = this.allCharacterList.find(f => f.id == this.character.liegeLord);

    if (!liegeLord)
      return "Unknown";

    return liegeLord.name;
  }
}