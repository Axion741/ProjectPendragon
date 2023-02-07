import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AddCharacterRequest } from '../models/requests/add-character-request.model';
import { Character } from '../models/character/character.model';
import { UpdateCharacterRequest } from '../models/requests/update-character-request.model';
import { GlobalService } from './global-service.service';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  baseApiUrl: string;
  allCharacterList: Character[] = [];
  selectedCharacter: Character = new Character();

  constructor(private http: HttpClient, private _globalService: GlobalService) {
    this.baseApiUrl = _globalService.baseApiUrl;
   }

  getAllCharacters(): Promise<Character[]> {
    return new Promise((resolve, reject) => {
      this.http.get<Character[]>(this.baseApiUrl + "/api/character")
      .subscribe({
        next: (chars) => { this.allCharacterList = chars, resolve(chars) },
        error: (e) => console.error("KB - getAllCharacters", e),
      })
    })
  }

  getCharacterById(id: string): Promise<Character> {
    //return this.http.get<Character>(this.baseApiUrl + "/api/character/" + id);
    return new Promise((resolve, reject) => {
      this.http.get<Character>(this.baseApiUrl + "/api/character/" + id)
      .subscribe({
        next: (char) => { this.selectedCharacter = char, resolve(char) },
        error: (e) => console.error("KB - getCharacterById", e),
      })
    })
  }

  addCharacter(request: AddCharacterRequest): Observable<Character> {
    return this.http.post<Character>(this.baseApiUrl + "/api/character", request);
  }

  updateCharacter(id: string, request: UpdateCharacterRequest): Observable<Character> {
    return this.http.put<Character>(this.baseApiUrl + "/api/character/" + id, request);
  }

  deleteCharacter(id: string): Observable<Character> {
    return this.http.delete<Character>(this.baseApiUrl + "/api/character/" + id);
  }
}
