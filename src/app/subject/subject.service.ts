import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Sujet } from './models/sujet';

const SUBJECT_URL = 'http://localhost:3000/subject';

@Injectable({
  providedIn: 'root',
})
export class SubjectService {
  constructor(private http: HttpClient) {}

  addSubject(subject): Observable<any> {
    return this.http.post<any>(SUBJECT_URL, subject);
  }

  validateSubject(id: string): Observable<any> {
    return this.http.patch<any>(SUBJECT_URL + '/validate/' + id, null);
  }

  getAllPfeSubjects(): Observable<Sujet[]> {
    return this.http.get<Sujet[]>(SUBJECT_URL);
  }

  getSubjectsByTeacherId(teacherId: string): Observable<Sujet[]> {
    return this.http.get<Sujet[]>(SUBJECT_URL + '/teacher/' + teacherId);
  }

  getSubjectById(id: string): Observable<Sujet> {
    return this.http.get<Sujet>(SUBJECT_URL + '/' + id);
  }
}
