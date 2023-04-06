import { Injectable } from '@angular/core';
import { GlobalService } from './global-service.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadsService {
  baseApiUrl: string;

  constructor(private http: HttpClient, private _globalService: GlobalService) {
    this.baseApiUrl = _globalService.baseApiUrl;
   }

   uploadFile(id: string, formData: FormData) : Observable<any> {
      return this.http.post(this.baseApiUrl + '/api/upload/' + id, formData, { reportProgress: true, observe: 'events' });
   }

   getFile(id: string): Observable<any> {
      return this.http.get(this.baseApiUrl + '/api/upload/' + id, { responseType: 'blob' });
   }
}
