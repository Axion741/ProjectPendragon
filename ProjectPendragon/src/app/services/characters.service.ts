import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AddCharacterRequest } from '../models/requests/add-character-request.model';
import { Character } from '../models/character.model';
import { UpdateCharacterRequest } from '../models/update-character-request.model';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  baseApiUrl: string = environment.baseApiUrl;
  constructor(private http: HttpClient) { }

  getAllCharacters(): Observable<Character[]> {
    return this.http.get<Character[]>(this.baseApiUrl + "/api/character");
  }

  getCharacterById(id: string): Observable<Character> {
    return this.http.get<Character>(this.baseApiUrl + "/api/character/" + id);
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
