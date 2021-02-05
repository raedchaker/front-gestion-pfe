import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Sujet } from '../_models/sujet';

@Injectable({
  providedIn: 'root'
})
export class SujetPfeService {

  constructor(private http: HttpClient) { }
  url = environment.api+'subject/'

  getAllPfeSubjects(): Observable<Sujet[]>{
    return this.http.get<Sujet[]>(this.url);
  }

  getSubjectsByTeacherId(teacherId: string): Observable<Sujet[]>{
    return this.http.get<Sujet[]>(this.url+'/teacher/'+teacherId);
  }
  
  getSubjectById(id: string): Observable<Sujet>{
    return this.http.get<Sujet>(this.url+id);
  }
}
