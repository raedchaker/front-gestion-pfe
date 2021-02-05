import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const MainRoutes: Routes = [
  {
    path: '',
    redirectTo: 'subject', 
    pathMatch: 'full'
  },
  {
    path: 'subject',
    children:[{
      path:'',
      loadChildren: ()=> import(`./subject/subject.module`).then(m=>m.SubjectModule)
    }],
  }
];

@NgModule({
  imports: [RouterModule.forChild(MainRoutes)],
  exports: [RouterModule]
})

export class PagesRoutingModule { }
