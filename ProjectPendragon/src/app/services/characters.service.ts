import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AddCharacterRequest } from '../models/add-character-request.model';
import { Character } from '../models/character.model';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  baseApiUrl: string = environment.baseApiUrl;
  constructor(private http: HttpClient) { }

  getAllCharacters(): Observable<Character[]> {
    return this.http.get<Character[]>(this.baseApiUrl + "/api/character");
  }

  addCharacter(request: AddCharacterRequest): Observable<Character> {
    return this.http.post<Character>(this.baseApiUrl + "/api/character", request);
  }
}
