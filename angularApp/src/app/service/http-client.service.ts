import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../User';

@Injectable({
  providedIn: 'root'
})


export class HttpClientService {

  private baseURL = 'http://localhost:9090/user';

  constructor(
    private httpClient: HttpClient
  ) {
     }

  createdetail(details: User) {
     return this.httpClient.post(`${this.baseURL}`, details);
  }
  getDetails(id: number): Observable<any> {
    return this.httpClient.get<User>(`${this.baseURL}/${id}`);
  }

  getDetailsList(): Observable<any> {
    return this.httpClient.get<User[]>('http://localhost:9090/user');
  }

  deleteDetails(id: number): Observable<any> {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

  // tslint:disable-next-line: ban-types
  updateDetails(id: number, value: any): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/${id}`, value);
  }
}
