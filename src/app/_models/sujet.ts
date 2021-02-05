import { User } from './../manage-users/models/user.model';
export class Sujet {
    id: string;
    annee: number = 2021;
    student: User;
    teacher: User;
    rapport: string;
    entreprise: string;
    title: string;
    description: string;
    //filiere: string;
    status: string;
}