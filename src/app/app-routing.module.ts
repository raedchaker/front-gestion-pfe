import { MainComponent } from './pages/main/main.component';
import { TestComponent } from './test/test.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { mainModule } from 'process';
import { PagesModule } from './pages/pages.module';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: TestComponent
  },
  {
    path: 'app',
    component: MainComponent,
    children:[{
      path:'',
      loadChildren: ()=> import(`./pages/pages.module`).then(m=>m.PagesModule)
    }],
    canActivate:[]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
