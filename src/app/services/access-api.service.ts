import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccessApiService {
  //develop
  //private baseUrl = 'http://localhost:3000';
  //produção
  private baseUrl = 'https://sapisync-backend.cyclic.app';

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
