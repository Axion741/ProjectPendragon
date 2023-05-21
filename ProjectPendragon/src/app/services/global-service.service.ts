import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  baseApiUrl: string = environment.baseApiUrl;
  currentYear: number = 0;
  isConnectedToServer: boolean = false;
  isAuthenticated: boolean = false;
  userRole: string = "viewer";

  constructor(private _http: HttpClient, private _authService: AuthService) {
   }

  getCurrentYear(): Observable<number> {
    return this._http.get<number>(this.baseApiUrl + "/api/date/current");
  }

  getIsAuthenticated(): Observable<boolean> {
    return this._authService.isAuthenticated$;
  }

  getUserRole() : Promise<string> {
    return new Promise((resolve, reject) => {
      this._authService.idTokenClaims$
      .subscribe({
          next: response => {          
            if (!!response && !!response['projectpendragon_role']) {
              this.userRole = response["projectpendragon_role"] as string;
            }
            else {
              this.userRole = "viewer";
            }

            resolve(this.userRole);
          }
        })
    })
  }
}
