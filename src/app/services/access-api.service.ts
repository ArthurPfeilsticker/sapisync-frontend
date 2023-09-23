import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccessApiService {
  private baseUrl = 'http://localhost:3000';

  constructor(
    private http: HttpClient
    ) { }

  getUsers(): Observable<any> {
    return this.http.get(`${this.baseUrl}/user`);
  }

  getOneUser(code: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/user/${code}`);
  }
}
