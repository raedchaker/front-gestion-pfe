import { Time } from "@angular/common";

export class Soutenance {

  constructor(
    public id: number = 1 ,
    public subject: string = '',
    public nom_etudiant: string = '',
    public prenom_etudiant: string = '',
    public president_jury: string = '',
    public membre1_jury: string ='',
    public membre2_jury: string ='',
    public date: Date ,
    public heur: Time,
    public salle: string =''
  ) {
    this.id = id;
    this.subject = subject;
    this.nom_etudiant = nom_etudiant;
    this.prenom_etudiant = prenom_etudiant;
    this.president_jury = president_jury;
    this.membre1_jury = membre1_jury;
    this.membre2_jury = membre2_jury;
    this.date = date;
    this.heur = heur;
    this.salle = salle;
  }
}
