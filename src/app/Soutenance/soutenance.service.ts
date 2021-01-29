
import { Injectable } from '@angular/core';
import { Soutenance } from './Model/soutenance';

  /*
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://syrine.missaoui@insat.u-carthage.tn:MS@Id-20101992*@cluster0.tmu9h.mongodb.net/gestion_pfe?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
}); */
const PERSONNE_API =
  'https://immense-citadel-91115.herokuapp.com/api/personnes/';
@Injectable({
  providedIn: 'root'
})
export class SoutenanceService {


  soutenances: Soutenance[] = [];


  constructor() { }



addSoutenance(soutenance : Soutenance): any{
  if (this.soutenances.length) {
    soutenance.id = this.soutenances[this.soutenances.length - 1].id + 1;
  } else {
    soutenance.id = 1;
  }
this.soutenances.push(soutenance);
}

getSoutenances(any): Soutenance[] {
  return this.soutenances;
}
}
