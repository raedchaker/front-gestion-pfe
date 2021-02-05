import { MainComponent } from './pages/main/main.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AdminComponent } from './pages/admin/admin.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthGardGuard } from './authentication/auth-gard.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'admin'
  },
  {
    path: 'app',
    component: MainComponent,
    children:[{
      path:'',
      loadChildren: ()=> import(`./pages/pages.module`).then(m=>m.PagesModule)
    }],
    canActivate:[]
  },
  {
    path:'admin',
    component:AdminComponent,
    loadChildren: () => import('./manage-users/manage-users.module').then((m) => m.ManageUsersModule),
    //canActivate: [AuthGardGuard],
  },
  { 
    path : 'login',
    component : LoginComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
