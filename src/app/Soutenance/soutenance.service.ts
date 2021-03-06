
import { Injectable } from '@angular/core';
import { SoutenanceModel } from './Model/soutenance.model';
import {Observable} from 'rxjs';
import {HttpClient, HttpParams} from '@angular/common/http';
import {User} from '../admin/models/user.model';
import {AdminService} from '../admin/admin.service';



const apiSoutenance = 'http://localhost:3000/soutenance/';

@Injectable({
  providedIn: 'root'
})
export class SoutenanceService {


  soutenances: SoutenanceModel[] = [];
  // soutenancesFromApi: SoutenanceModel[] = [];

  constructor(private http: HttpClient,
              ) { }

  getSoutenances(): Observable<SoutenanceModel[]>
  {
    return this.http.get<SoutenanceModel[]>(apiSoutenance);
  }

  getSoutenanceByID(id: number): Observable<SoutenanceModel>
  {
    return this.http.get<SoutenanceModel>(apiSoutenance + id);
  }


  addSoutenanceF(soutenance: SoutenanceModel): any{
    if (this.soutenances.length) {
      soutenance.id = this.soutenances[this.soutenances.length - 1].id + 1;
    } else {
      soutenance.id = 1;
    }
    this.soutenances.push(soutenance);
  }

  getSoutenancesFake(): SoutenanceModel[] {
    return this.soutenances;
  }

  deleteSoutenance(id: number): Observable<any>{
    return this.http.delete(apiSoutenance + id);
  }

  addSoutenance(soutenance: SoutenanceModel): Observable<SoutenanceModel> {
    return this.http.post<SoutenanceModel>(apiSoutenance, soutenance);
  }

  updateSoutenance(soutenance: SoutenanceModel): Observable<SoutenanceModel> {
    console.log(soutenance);
    const link = apiSoutenance + soutenance.id.toString();
    return this.http.patch<SoutenanceModel>(link, soutenance);
  }

}
