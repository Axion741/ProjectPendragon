import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/models/character.model';
import { EGender } from 'src/app/models/e-gender';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.css']
})
export class CharactersListComponent implements OnInit {

  characters: Character[] = [
    {
      id: '1',
      name: 'Byffin',
      age: 26,
      gender: EGender.Male
    },
    {
      id: '2',
      name: 'Huw',
      age: 27,
      gender: EGender.Male
    },
    {
      id: '3',
      name: 'Tydfil',
      age: 26,
      gender: EGender.Female
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }


}
