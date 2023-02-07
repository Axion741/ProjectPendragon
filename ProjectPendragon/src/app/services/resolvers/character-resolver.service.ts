import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { CharactersService } from '../characters.service';

@Injectable({
  providedIn: 'root'
})
export class CharacterResolverService implements Resolve<any> {

  constructor(private characterService: CharactersService) {}

  resolve(route: ActivatedRouteSnapshot) : Promise<any> {
    if (route.routeConfig?.path === 'characters') {
      return new Promise<void>((resolve, reject) => {
        Promise.all([
          this.characterService.getAllCharacters()
        ]).then(() => {
          resolve();
        }, reject)
      })
    }
    else if (route.routeConfig?.path === 'characters/add') {
      return new Promise<void>((resolve, reject) => {
        Promise.all([
          this.characterService.getAllCharacters()
        ]).then(() => {
          resolve();
        }, reject)
      })
    }
    else if (route.routeConfig?.path === 'characters/edit/:id') {
      return new Promise<void>((resolve, reject) => {
        Promise.all([
          this.characterService.getAllCharacters(),
          this.characterService.getCharacterById(route.params['id'])
        ]).then(() => {
          resolve();
        }, reject)
      })
    }
    else 
      return Promise.reject('Route Invalid');
  }
}
