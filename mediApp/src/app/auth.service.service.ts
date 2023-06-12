import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { Member } from './interface/member';




@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  //path to the database
  private apiUrl = 'http://localhost:3000';


  constructor(private http: HttpClient) { }

 registeration(member : Member): Observable<any>{
  return this.http.post('${this.apiUrl}/users',member)
 }

signin(credentials: {email: string, password: string }): Observable<any>{
  return this.http.post('${this.apiUrl}/users', credentials)
}
  

}
