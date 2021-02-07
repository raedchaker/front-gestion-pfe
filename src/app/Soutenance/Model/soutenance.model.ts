import { Time } from "@angular/common";

export class SoutenanceModel {

  constructor(
    public id: number = 1 ,
    public insNumber: number = 1,
    public nom_sujet: string = '',
    public nom_etudiant: string = '',
    public prenom_etudiant: string = '',
    public nom_presidentJury: string = '',
    public nom_examinateur: string = '',
    public responsableInsat: string = '',
    public date: Date ,
    public heur: Time,
  ) {
    this.id = id;
    this.insNumber = insNumber;
    this.nom_sujet = nom_sujet;
    this.nom_etudiant = nom_etudiant;
    this.prenom_etudiant = prenom_etudiant;
    this.nom_presidentJury = nom_presidentJury;
    this.nom_examinateur = nom_examinateur;
    this.responsableInsat = responsableInsat;
    this.date = date;
    this.heur = heur;
  }
}
