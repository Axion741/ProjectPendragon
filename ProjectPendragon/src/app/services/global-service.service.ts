import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  baseApiUrl: string = environment.baseApiUrl;
  currentYear: number = 0;
  isConnectedToServer: boolean = false;

  constructor(private http: HttpClient) {
   }

  getCurrentYear(): Observable<number> {
    return this.http.get<number>(this.baseApiUrl + "/api/date/current");
  }
}
