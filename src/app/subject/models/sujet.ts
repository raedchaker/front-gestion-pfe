import { User } from '../../admin/models/user.model';
export class Sujet {
  id: string;
  year: string;
  student: User;
  teacher: User;
  rapport: string;
  entreprise: string;
  title: string;
  description: string;
  //filiere: string;
  status: string;
}
