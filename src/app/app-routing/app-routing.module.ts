import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from '../componentes/inicio/inicio.component';
import { AboutmeComponent } from '../componentes/aboutme/aboutme.component';

const routes: Routes = [
  {path:"", redirectTo:"/inicio", pathMatch:"full"},
  {path:"inicio", component:InicioComponent},
  {path: "aboutme", component:AboutmeComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
