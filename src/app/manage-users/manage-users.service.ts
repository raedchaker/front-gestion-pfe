import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './models/user.model';

const API = "http://localhost:3000/user/";
@Injectable({
  providedIn: 'root'
})



export class ManageUsersService {


  constructor(private http:HttpClient) { }

  getUsers():Observable<User[]>{
  return    this.http.get<User[]>(API)

  }

  deleteUser(id:string):Observable<any>{
    return this.http.delete(API+id)
  }


}
