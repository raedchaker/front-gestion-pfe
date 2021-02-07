import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './models/user.model';

const API = 'http://localhost:3000/user/';
@Injectable({
  providedIn: 'root',
})
export class AdminService {
  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(API);
  }

  deleteUser(id: string): Observable<any> {
    return this.http.delete(API + id);
  }
  addUser(user): Observable<any> {
    return this.http.post('http://localhost:3000/auth/register', user);
  }
  changePassword(change):Observable<any> {
    return this.http.post('http://localhost:3000/auth/change-password',change)
   
  }
  getUser(id:string):Observable<User> {
    return this.http.get<User>(API+id)

  }
  editUser(id:string,user:Partial<User>):Observable<User>{
    return this.http.put<User>(API+id,user)
  }
}
