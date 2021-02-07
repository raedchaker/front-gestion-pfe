import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Sujet } from './models/sujet';

const SUBJECT_URL = environment.url+'subject/';

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

  getThisYearPfeSubjects(): Observable<Sujet[]> {
    return this.http.get<Sujet[]>(SUBJECT_URL+'currentYear');
  }

  getSubjectsByTeacherId(teacherId: string): Observable<Sujet[]> {
    return this.http.get<Sujet[]>(SUBJECT_URL + 'teacher/' + teacherId);
  }

  getThisYearSubjectsByTeacherId(teacherId: string): Observable<Sujet[]> {
    return this.http.get<Sujet[]>(SUBJECT_URL + 'currentYear/teacher/' + teacherId);
  }
  getSubjectsByStudentId(studentId): Observable<Sujet> {
    return this.http.get<Sujet>(SUBJECT_URL + '/findByInsNumber/' + studentId);
  }

  getSubjectById(id: string): Observable<Sujet> {
    return this.http.get<Sujet>(SUBJECT_URL + '/' + id);
  }
}
