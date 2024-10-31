import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './formulario/formulario.component';
import { ResultadoComponent } from './resultado/resultado.component';

const routes: Routes = [
  {path: 'formulario', component: FormularioComponent},
  {path: 'resultado', component: ResultadoComponent},
  {path: '', redirectTo: '/formulario', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
