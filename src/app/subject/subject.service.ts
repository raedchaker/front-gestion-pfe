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
    //should be done in the interceptor
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImluZXNzQGdtYWlsLmNvbSIsImlhdCI6MTYxMjUzMzEyNywiZXhwIjoxNjEyNTMzNzI3fQ.ZEGPMWAOStM6I93ODliJsbOyKoIGlyMASTQn2vSa-uc',
      }),
    };
    return this.http.post<any>(SUBJECT_URL, subject, httpOptions);
  }

  getAllPfeSubjects(): Observable<Sujet[]> {
    return this.http.get<Sujet[]>(SUBJECT_URL);
  }

  getSubjectsByTeacherId(teacherId: string): Observable<Sujet[]> {
    return this.http.get<Sujet[]>(SUBJECT_URL + '/teacher/' + teacherId);
  }

  getSubjectById(id: string): Observable<Sujet> {
    return this.http.get<Sujet>(SUBJECT_URL + id);
  }
}
